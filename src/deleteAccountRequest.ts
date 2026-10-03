export class DeletionRequestError extends Error {
  readonly status: number;

  constructor(status: number) {
    super('Account deletion request was not accepted');
    this.name = 'DeletionRequestError';
    this.status = status;
  }
}

async function postDeletion(
  url: string,
  body: { email: string } | { token: string },
  expectedStatus: number,
  fetchImpl: typeof fetch,
  timeoutMs: number,
): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (response.status !== expectedStatus) {
      throw new DeletionRequestError(response.status);
    }
    if (expectedStatus === 202) {
      // Reject HTML from a misconfigured SPA fallback, even on a successful status.
      const accepted: unknown = await response.json();
      if (
        !accepted || typeof accepted !== 'object' ||
        !('message' in accepted) || typeof accepted.message !== 'string' ||
        !accepted.message.trim()
      ) {
        throw new DeletionRequestError(response.status);
      }
    }
  } finally {
    clearTimeout(timeout);
  }
}

export function requestAccountDeletion(
  url: string,
  email: string,
  fetchImpl: typeof fetch = fetch,
  timeoutMs = 20_000,
): Promise<void> {
  return postDeletion(url, { email: email.trim() }, 202, fetchImpl, timeoutMs);
}

export function confirmAccountDeletion(
  url: string,
  token: string,
  fetchImpl: typeof fetch = fetch,
  timeoutMs = 20_000,
): Promise<void> {
  return postDeletion(url, { token }, 204, fetchImpl, timeoutMs);
}
