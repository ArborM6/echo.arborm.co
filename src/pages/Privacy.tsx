import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';

export function Privacy() {
  const { t } = useLanguage();
  return (
    <LegalLayout
      title={t('privacy.title')}
      updatedAt={t('privacy.effective_date')}
      label={t('legal.privacy_label')}
      versionInfo={t('privacy.version')}
    >
      <p>{t('privacy.intro')}</p>

      <h2>{t('privacy.s1_title')}</h2>

      <h3>{t('privacy.s1_1_title')}</h3>
      <ul>
        <li>{t('privacy.s1_1_account')}</li>
        <li>{t('privacy.s1_1_profile')}</li>
        <li>{t('privacy.s1_1_login')}</li>
      </ul>

      <h3>{t('privacy.s1_2_title')}</h3>
      <ul>
        <li>{t('privacy.s1_2_device')}</li>
        <li>{t('privacy.s1_2_status')}</li>
        <li>{t('privacy.s1_2_location')}</li>
        <li>{t('privacy.s1_2_push')}</li>
      </ul>

      <h3>{t('privacy.s1_3_title')}</h3>
      <ul>
        <li>{t('privacy.s1_3_records')}</li>
        <li>{t('privacy.s1_3_prefs')}</li>
        <li>{t('privacy.s1_3_sub')}</li>
      </ul>

      <h2>{t('privacy.s2_title')}</h2>
      <ul>
        <li>{t('privacy.s2_service')}</li>
        <li>{t('privacy.s2_push')}</li>
        <li>{t('privacy.s2_security')}</li>
        <li>{t('privacy.s2_improve')}</li>
      </ul>
      <p>{t('privacy.s2_not')}</p>

      <h2>{t('privacy.s3_title')}</h2>
      <ul>
        <li>{t('privacy.s3_storage')}</li>
        <li>{t('privacy.s3_password')}</li>
        <li>{t('privacy.s3_ai')}</li>
      </ul>

      <h2>{t('privacy.s4_title')}</h2>
      <p>{t('privacy.s4_intro')}</p>
      <table>
        <thead>
          <tr>
            <th>{t('privacy.s4_table_header_party')}</th>
            <th>{t('privacy.s4_table_header_data')}</th>
            <th>{t('privacy.s4_table_header_purpose')}</th>
            <th>{t('privacy.s4_table_header_policy')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('privacy.s4_row1_party')}</td>
            <td>{t('privacy.s4_row1_data')}</td>
            <td>{t('privacy.s4_row1_purpose')}</td>
            <td><a href={t('privacy.s4_row1_policy_url')} target="_blank" rel="noopener noreferrer">{t('privacy.s4_row1_policy_url')}</a></td>
          </tr>
          <tr>
            <td>{t('privacy.s4_row2_party')}</td>
            <td>{t('privacy.s4_row2_data')}</td>
            <td>{t('privacy.s4_row2_purpose')}</td>
            <td><a href={t('privacy.s4_row2_policy_url')} target="_blank" rel="noopener noreferrer">{t('privacy.s4_row2_policy_url')}</a></td>
          </tr>
          <tr>
            <td>{t('privacy.s4_row3_party')}</td>
            <td>{t('privacy.s4_row3_data')}</td>
            <td>{t('privacy.s4_row3_purpose')}</td>
            <td><a href={t('privacy.s4_row3_policy_url')} target="_blank" rel="noopener noreferrer">{t('privacy.s4_row3_policy_url')}</a></td>
          </tr>
        </tbody>
      </table>
      <p>{t('privacy.s4_outro')}</p>

      <h2>{t('privacy.s5_title')}</h2>
      <p>{t('privacy.s5_intro')}</p>
      <ul>
        <li>{t('privacy.s5_access')}</li>
        <li>{t('privacy.s5_revoke')}</li>
        <li>{t('privacy.s5_export')}</li>
        <li>{t('privacy.s5_delete')}</li>
      </ul>

      <h2>{t('privacy.s6_title')}</h2>
      <p>{t('privacy.s6_content')}</p>

      <h2>{t('privacy.s7_title')}</h2>
      <p>{t('privacy.s7_content')}</p>

      <h2>{t('privacy.s8_title')}</h2>
      <p>{t('privacy.s8_content')}</p>
      <p>
        {t('privacy.s8_email')}{' '}
        <a href="mailto:support@arborm.co">support@arborm.co</a>
      </p>
      <p>{t('privacy.s8_address')}</p>
    </LegalLayout>
  );
}