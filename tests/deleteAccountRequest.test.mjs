import assert from 'node:assert/strict';
import { test } from 'node:test';
import { requestAccountDeletion, confirmAccountDeletion, DeletionRequestError } from '../src/deleteAccountRequest.ts';

const url = 'https://api.example.invalid/api/v1/delete-account/request';
const accepted = () => Response.json({ message: 'If registered, a confirmation email has been sent.' }, { status: 202 });

test('accepts the generic response without exposing whether an account exists', async () => {
  let request;
  await requestAccountDeletion(url, ' user@example.invalid ', async (input, init) => {
    request = { input, init };
    return accepted();
  });
  assert.equal(request.input, url);
  assert.deepEqual(JSON.parse(request.init.body), { email: 'user@example.invalid' });
  assert.equal(request.init.method, 'POST');
});

for (const status of [400, 429, 500, 502, 503]) {
  test(`rejects HTTP ${status} instead of displaying email-sent success`, async () => {
    await assert.rejects(requestAccountDeletion(url, 'user@example.invalid', async () => new Response(null, { status })),
      error => error instanceof DeletionRequestError && error.status === status);
  });
}

test('rejects a website fallback page returned with 200', async () => {
  await assert.rejects(requestAccountDeletion(url, 'user@example.invalid', async () => new Response('<html>Echo</html>')));
});

test('rejects malformed accepted responses', async () => {
  for (const response of [new Response('<html>Echo</html>', { status: 202 }), Response.json({}, { status: 202 })]) {
    await assert.rejects(requestAccountDeletion(url, 'user@example.invalid', async () => response));
  }
});

test('allows a retry after a network failure', async () => {
  await assert.rejects(requestAccountDeletion(url, 'user@example.invalid', async () => { throw new TypeError('offline'); }));
  await requestAccountDeletion(url, 'user@example.invalid', async () => accepted());
});

test('aborts a stalled request so the form can be retried', async () => {
  let signal;
  await assert.rejects(requestAccountDeletion(url, 'user@example.invalid', async (_, init) => {
    signal = init.signal;
    return new Promise((_, reject) => signal.addEventListener('abort', () => reject(new DOMException('Timed out', 'AbortError')), { once: true }));
  }, 1), { name: 'AbortError' });
  assert.equal(signal.aborted, true);
});

test('requires the backend deletion confirmation status, rejecting generic 200 pages', async () => {
  await confirmAccountDeletion(url, 'test-token', async () => new Response(null, { status: 204 }));
  await assert.rejects(confirmAccountDeletion(url, 'test-token', async () => new Response('<html>Echo</html>')));
});
