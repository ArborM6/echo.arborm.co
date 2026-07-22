import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';

export function Terms() {
  const { t } = useLanguage();
  return (
    <LegalLayout
      title={t('terms.title')}
      updatedAt={t('terms.effective_date')}
      label={t('legal.terms_label')}
      versionInfo={t('terms.version')}
    >
      <p>{t('terms.intro')}</p>

      <h2>{t('terms.s1_title')}</h2>
      <p>{t('terms.s1_content')}</p>

      <h2>{t('terms.s2_title')}</h2>
      <ul>
        <li>{t('terms.s2_email')}</li>
        <li>{t('terms.s2_single')}</li>
        <li>{t('terms.s2_stolen')}</li>
      </ul>

      <h2>{t('terms.s3_title')}</h2>
      <p>{t('terms.s3_intro')}</p>
      <ul>
        <li>{t('terms.s3_illegal')}</li>
        <li>{t('terms.s3_attack')}</li>
        <li>{t('terms.s3_scrape')}</li>
      </ul>
      <p>{t('terms.s3_enforce')}</p>

      <h2>{t('terms.s4_title')}</h2>
      <ul>
        <li>{t('terms.s4_user')}</li>
        <li>{t('terms.s4_app')}</li>
      </ul>

      <h2>{t('terms.s5_title')}</h2>
      <ul>
        <li>{t('terms.s5_iap')}</li>
        <li>{t('terms.s5_refund')}</li>
        <li>{t('terms.s5_manage')}</li>
      </ul>

      <h2>{t('terms.s6_title')}</h2>
      <ul>
        <li>{t('terms.s6_ai')}</li>
        <li>{t('terms.s6_force')}</li>
      </ul>

      <h2>{t('terms.s7_title')}</h2>
      <ul>
        <li>{t('terms.s7_change')}</li>
        <li>{t('terms.s7_quit')}</li>
      </ul>

      <h2>{t('terms.s8_title')}</h2>
      <p>{t('terms.s8_content')}</p>

      <h2>{t('terms.s9_title')}</h2>
      <p>
        {t('terms.s9_email')}{' '}
        <a href="mailto:hello@arborm.com">hello@arborm.com</a>
      </p>
    </LegalLayout>
  );
}
