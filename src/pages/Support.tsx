import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Mail, ExternalLink } from 'lucide-react';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../i18n';

export function Support() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: t('support.q1'), a: t('support.a1') },
    { q: t('support.q2'), a: t('support.a2') },
    {
      q: t('support.q3'),
      a: [
        t('support.a3_1'),
        t('support.a3_2'),
        t('support.a3_3'),
      ],
    },
    {
      q: t('support.q4'),
      a: [
        t('support.a4_1'),
        t('support.a4_2'),
        t('support.a4_3'),
      ],
    },
    {
      q: t('support.q5'),
      a: {
        intro: t('support.a5_intro'),
        items: [
          t('support.a5_1'),
          t('support.a5_2'),
          t('support.a5_3'),
        ],
      },
    },
    { q: t('support.q6'), a: t('support.a6') },
  ];

  const toggle = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <LegalLayout
      title={t('support.title')}
      updatedAt=""
      label={t('legal.support_label')}
    >
      {/* Contact */}
      <h2>{t('support.contact_title')}</h2>
      <p>{t('support.contact_desc')}</p>
      <p>
        <a href="mailto:support@arborm.co">
          <Mail className="inline w-4 h-4 mr-1" style={{ verticalAlign: '-2px' }} />
          {t('support.contact_email')}
        </a>
      </p>
      <p>{t('support.contact_reply')}</p>

      {/* FAQ */}
      <h2>{t('support.faq_title')}</h2>
      <div>
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <div className="faq-item" key={i}>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: isOpen ? '600px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="faq-answer-inner">
                  {typeof faq.a === 'string' ? (
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  ) : Array.isArray(faq.a) ? (
                    <ul>
                      {faq.a.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p style={{ marginBottom: '0.5em' }}>{faq.a.intro}</p>
                      <ul>
                        {faq.a.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Links */}
      <h2>{t('support.links_title')}</h2>
      <ul>
        <li>
          <Link to="/privacy">
            <ExternalLink className="inline w-4 h-4 mr-1" style={{ verticalAlign: '-2px' }} />
            {t('support.link_privacy')}
          </Link>
        </li>
        <li>
          <Link to="/terms">
            <ExternalLink className="inline w-4 h-4 mr-1" style={{ verticalAlign: '-2px' }} />
            {t('support.link_terms')}
          </Link>
        </li>
        <li>
          <Link to="/delete-account">
            <ExternalLink className="inline w-4 h-4 mr-1" style={{ verticalAlign: '-2px' }} />
            {t('support.link_delete')}
          </Link>
        </li>
      </ul>
    </LegalLayout>
  );
}
