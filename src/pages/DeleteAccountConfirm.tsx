import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiUrl } from '../api';
import { confirmAccountDeletion } from '../deleteAccountRequest';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';
import { splitIntoSentences } from '../sentences';

const GOOGLE_PLAY_SUBSCRIPTIONS_URL = 'https://play.google.com/store/account/subscriptions';

export function DeleteAccountConfirm() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }
    confirmAccountDeletion(apiUrl('/api/v1/delete-account/confirm'), token)
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [token]);

  return (
    <LegalLayout
      title={t('delete.title')}
      updatedAt=""
      label={t('legal.delete_label')}
      noIndex
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="success-card"
      >
        {status === 'loading' && (
          <>
            <div className="status-icon">⏳</div>
            <p>{t('delete.confirm_loading')}</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="status-icon">✅</div>
            <p>{t('delete.confirm_success')}</p>
            {splitIntoSentences(t('delete.confirm_subscription_note')).map((sentence, idx) => (
              <p key={idx} style={{ marginTop: '1em' }}>{sentence}</p>
            ))}
            <p style={{ marginTop: '1em' }}>
              <a
                href={GOOGLE_PLAY_SUBSCRIPTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold)' }}
              >
                {t('delete.subscription_link')}
              </a>
            </p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="status-icon">❌</div>
            <p>{t('delete.confirm_error')}</p>
            <p style={{ marginTop: '1em' }}>
              <Link to="/delete-account" style={{ color: 'var(--gold)' }}>
                {t('delete.confirm_back')}
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </LegalLayout>
  );
}
