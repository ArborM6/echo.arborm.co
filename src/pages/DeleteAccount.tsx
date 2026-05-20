import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { apiUrl } from '../api';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';

export function DeleteAccount() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const canSubmit = email.trim().length > 0 && confirmed && !loading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    try {
      await fetch(apiUrl('/api/v1/delete-account/request'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      setSuccess(true);
    } catch {
      // still show success to avoid leaking whether email exists
      setSuccess(true);
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

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.4em' }}>
              <input
                type="email"
                className="form-input"
                placeholder={t('delete.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label className="form-checkbox" style={{ marginBottom: '1.6em' }}>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
              />
              <span>{t('delete.checkbox_label')}</span>
            </label>

            <button type="submit" className="btn-danger" disabled={!canSubmit}>
              {t('delete.submit_btn')}
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
