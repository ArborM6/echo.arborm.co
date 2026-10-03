import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { apiUrl } from '../api';
import { DeletionRequestError, requestAccountDeletion } from '../deleteAccountRequest';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';

export function DeleteAccount() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = email.trim().length > 0 && confirmed && !loading;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      await requestAccountDeletion(apiUrl('/api/v1/delete-account/request'), email);
      setSuccess(true);
    } catch (cause) {
      setError(t(cause instanceof DeletionRequestError && cause.status === 429
        ? 'delete.rate_limited'
        : 'delete.request_failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <LegalLayout
      title={t('delete.title')}
      updatedAt=""
      label={t('legal.delete_label')}
    >
      {!success ? (
        <>
          <div className="callout-danger">
            <p>⚠</p>
            <ul>
              <li>{t('delete.warning_1')}</li>
              <li>{t('delete.warning_2')}</li>
              <li>{t('delete.warning_3')}</li>
              <li>{t('delete.warning_4')}</li>
              <li>{t('delete.warning_5')}</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} aria-busy={loading}>
            <div style={{ marginBottom: '1.4em' }}>
              <input
                type="email"
                className="form-input"
                placeholder={t('delete.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <label className="form-checkbox" style={{ marginBottom: '1.6em' }}>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                disabled={loading}
              />
              <span>{t('delete.checkbox_label')}</span>
            </label>

            {error && <div className="callout-danger" role="alert"><p>{error}</p></div>}
            <button type="submit" className="btn-danger" disabled={!canSubmit}>
              {t(loading ? 'delete.submitting' : 'delete.submit_btn')}
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="success-card"
        >
          <div className="status-icon">📧</div>
          <p>{t('delete.success_msg')}</p>
        </motion.div>
      )}
    </LegalLayout>
  );
}
