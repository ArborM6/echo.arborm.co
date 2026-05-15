import type { Locale } from './LanguageContext';

const zhCN: Record<string, string> = {
  // Nav
  'nav.features': '功能',
  'nav.showcase': '体验',
  'nav.subscription': '订阅',
  'nav.faq': '答疑',
  'nav.company': '阿博木',
  'nav.company_aria': '访问阿博木公司主页',
  'nav.brand_aria': '回响 Echo · 回到顶部',

  // Hero
  'hero.subtitle': 'ECHO · 回 响',
  'hero.title': '让每一次提醒，都有诗意',
  'hero.desc_1': 'Echo 会在合适的时间，把天气、城市、设备状态',
  'hero.desc_2': '与生活片刻，化成一段安静的消息。',
  'hero.ios_label': 'iOS 版',
  'hero.ios_aria': 'iOS 版 · 敬请期待',
  'hero.android_label': 'Android 版',
  'hero.android_aria': 'Android 版 · 敬请期待',
  'hero.coming_soon': '敬请期待',
  'hero.tag_chinese': '中文',
  'hero.tag_no_ads': '无广告',
  'hero.bottom_hint': '— 因 时 而 至 —',

  // Features
  'features.label': 'FEATURES',
  'features.title_1': '一段消息，',
  'features.title_2': '落在你恰好需要的时刻',
  'features.desc_1': '不是提醒，也不是通知，',
  'features.desc_2': '是一句轻声的、为你而来的话。',
  'features.item1_title': '因时而至',
  'features.item1_desc': '根据时间、城市与状态，生成此刻的消息。',
  'features.item2_title': '静心阅读',
  'features.item2_desc': '宣纸、水墨、中文排版与自定义字体。',
  'features.item3_title': '轻轻收藏',
  'features.item3_desc': '留住那些与你共鸣的句子。',
  'features.item4_title': '随心而变',
  'features.item4_desc': '主题、字体、语言、图片风格皆可调整。',

  // Showcase
  'showcase.label': 'EXPERIENCE',
  'showcase.title': '像翻一本随身的小诗集',
  'showcase.desc': '消息、设置、收藏，皆在一方安静之间。',
  'showcase.white': '白',
  'showcase.dark': '暗',
  'showcase.ink': '水墨',

  // Subscription
  'sub.label': 'ECHO · PRO',
  'sub.title': '若你愿意走得更远一些',
  'sub.desc_1': 'Pro 会为你打开更多主题、更多字体，',
  'sub.desc_2': '以及一份充足而从容的生成额度。',
  'sub.poetic_1': '像在山中多备一盏灯，',
  'sub.poetic_2': '让长夜里的字句，仍能温柔地落下。',
  'sub.perk1': '更多主题',
  'sub.perk2': '更多字体',
  'sub.perk3': '专属头像',
  'sub.perk4': '充足生成额度',
  'sub.expand': '了解 Pro',
  'sub.collapse': '收起对比',
  'sub.col_feature': '功能',
  'sub.col_free': '免费',
  'sub.col_pro': 'PRO',
  'sub.row_schedule': '定时消息',
  'sub.row_theme': '主题',
  'sub.row_font': '字体',
  'sub.row_style': '文字风格',
  'sub.row_image': '配图风格',
  'sub.row_manual': '手动额度',
  'sub.val_basic': '基础',
  'sub.val_all': '所有',
  'sub.val_no_image': '无法生图',
  'sub.val_1': '1 条',
  'sub.val_3': '3 条',
  'sub.row_avatar': '专属头像',

  // FAQ
  'faq.label': 'FAQ',
  'faq.title': '一些你可能想问的事',
  'faq.q1': '回响的消息是如何生成的？',
  'faq.a1': '回响会综合你的城市、时间、天气与设备状态，配合你设置的偏好与语气，生成一段适合此刻心境的中文消息。它不是机械的提醒，更像一位安静的朋友，挑了一个合适的时刻轻声说话。',
  'faq.q2': '我可以决定它说话的方式吗？',
  'faq.a2': '可以。你能在「设置 — 偏好」里选择文字风格——唐诗、宋词或散文，让消息以你喜欢的笔调出现，逐渐贴近你自己的呼吸。',

  // Footer
  'footer.slogan_1': '在合适的时间，',
  'footer.slogan_2': '把生活的片刻，化成一段安静的消息。',
  'footer.contact': '联系',
  'footer.terms_label': '条款',
  'footer.privacy': '隐私政策',
  'footer.terms': '服务条款',
  'footer.copyright': '© 2026 合肥阿博木科技有限公司 版权所有',

  // Legal Layout
  'legal.back': '返回',
  'legal.updated': '最后更新',
  'legal.privacy_label': 'PRIVACY',
  'legal.terms_label': 'TERMS',

  // Theme toggle
  'theme.to_light': '切换至亮色主题',
  'theme.to_dark': '切换至暗色主题',

  // Language
  'lang.label': '语言',
};

const zhTW: Record<string, string> = {
  // Nav
  'nav.features': '功能',
  'nav.showcase': '體驗',
  'nav.subscription': '訂閱',
  'nav.faq': '答疑',
  'nav.company': '阿博木',
  'nav.company_aria': '訪問阿博木公司主頁',
  'nav.brand_aria': '回響 Echo · 回到頂部',

  // Hero
  'hero.subtitle': 'ECHO · 回 響',
  'hero.title': '讓每一次提醒，都有詩意',
  'hero.desc_1': 'Echo 會在合適的時間，把天氣、城市、裝置狀態',
  'hero.desc_2': '與生活片刻，化成一段安靜的訊息。',
  'hero.ios_label': 'iOS 版',
  'hero.ios_aria': 'iOS 版 · 敬請期待',
  'hero.android_label': 'Android 版',
  'hero.android_aria': 'Android 版 · 敬請期待',
  'hero.coming_soon': '敬請期待',
  'hero.tag_chinese': '中文',
  'hero.tag_no_ads': '無廣告',
  'hero.bottom_hint': '— 因 時 而 至 —',

  // Features
  'features.label': 'FEATURES',
  'features.title_1': '一段訊息，',
  'features.title_2': '落在你恰好需要的時刻',
  'features.desc_1': '不是提醒，也不是通知，',
  'features.desc_2': '是一句輕聲的、為你而來的話。',
  'features.item1_title': '因時而至',
  'features.item1_desc': '根據時間、城市與狀態，生成此刻的訊息。',
  'features.item2_title': '靜心閱讀',
  'features.item2_desc': '宣紙、水墨、中文排版與自訂字體。',
  'features.item3_title': '輕輕收藏',
  'features.item3_desc': '留住那些與你共鳴的句子。',
  'features.item4_title': '隨心而變',
  'features.item4_desc': '主題、字體、語言、圖片風格皆可調整。',

  // Showcase
  'showcase.label': 'EXPERIENCE',
  'showcase.title': '像翻一本隨身的小詩集',
  'showcase.desc': '訊息、設定、收藏，皆在一方安靜之間。',
  'showcase.white': '白',
  'showcase.dark': '暗',
  'showcase.ink': '水墨',

  // Subscription
  'sub.label': 'ECHO · PRO',
  'sub.title': '若你願意走得更遠一些',
  'sub.desc_1': 'Pro 會為你打開更多主題、更多字體，',
  'sub.desc_2': '以及一份充足而從容的生成額度。',
  'sub.poetic_1': '像在山中多備一盞燈，',
  'sub.poetic_2': '讓長夜裡的字句，仍能溫柔地落下。',
  'sub.perk1': '更多主題',
  'sub.perk2': '更多字體',
  'sub.perk3': '專屬頭像',
  'sub.perk4': '充足生成額度',
  'sub.expand': '了解 Pro',
  'sub.collapse': '收起對比',
  'sub.col_feature': '功能',
  'sub.col_free': '免費',
  'sub.col_pro': 'PRO',
  'sub.row_schedule': '定時訊息',
  'sub.row_theme': '主題',
  'sub.row_font': '字體',
  'sub.row_style': '文字風格',
  'sub.row_image': '配圖風格',
  'sub.row_manual': '手動額度',
  'sub.val_basic': '基礎',
  'sub.val_all': '所有',
  'sub.val_no_image': '無法生圖',
  'sub.val_1': '1 條',
  'sub.val_3': '3 條',
  'sub.row_avatar': '專屬頭像',

  // FAQ
  'faq.label': 'FAQ',
  'faq.title': '一些你可能想問的事',
  'faq.q1': '回響的訊息是如何生成的？',
  'faq.a1': '回響會綜合你的城市、時間、天氣與裝置狀態，配合你設定的偏好與語氣，生成一段適合此刻心境的中文訊息。它不是機械的提醒，更像一位安靜的朋友，挑了一個合適的時刻輕聲說話。',
  'faq.q2': '我可以決定它說話的方式嗎？',
  'faq.a2': '可以。你能在「設定 — 偏好」裡選擇文字風格——唐詩、宋詞或散文，讓訊息以你喜歡的筆調出現，逐漸貼近你自己的呼吸。',

  // Footer
  'footer.slogan_1': '在合適的時間，',
  'footer.slogan_2': '把生活的片刻，化成一段安靜的訊息。',
  'footer.contact': '聯繫',
  'footer.terms_label': '條款',
  'footer.privacy': '隱私政策',
  'footer.terms': '服務條款',
  'footer.copyright': '© 2026 合肥阿博木科技有限公司 版權所有',

  // Legal Layout
  'legal.back': '返回',
  'legal.updated': '最後更新',
  'legal.privacy_label': 'PRIVACY',
  'legal.terms_label': 'TERMS',

  // Theme toggle
  'theme.to_light': '切換至亮色主題',
  'theme.to_dark': '切換至暗色主題',

  // Language
  'lang.label': '語言',
};

const en: Record<string, string> = {
  // Nav
  'nav.features': 'Features',
  'nav.showcase': 'Showcase',
  'nav.subscription': 'Pro',
  'nav.faq': 'FAQ',
  'nav.company': 'Arbor M.',
  'nav.company_aria': 'Visit Arbor M. homepage',
  'nav.brand_aria': 'Echo · Back to top',

  // Hero
  'hero.subtitle': 'ECHO · 回 响',
  'hero.title': 'Every reminder, with a touch of poetry',
  'hero.desc_1': 'Echo sends you quiet messages at just the right moment —',
  'hero.desc_2': 'weaving weather, city, and life into gentle words.',
  'hero.ios_label': 'iOS',
  'hero.ios_aria': 'iOS · Coming Soon',
  'hero.android_label': 'Android',
  'hero.android_aria': 'Android · Coming Soon',
  'hero.coming_soon': 'Coming Soon',
  'hero.tag_chinese': 'Chinese',
  'hero.tag_no_ads': 'Ad-free',
  'hero.bottom_hint': '— In the right moment —',

  // Features
  'features.label': 'FEATURES',
  'features.title_1': 'A message,',
  'features.title_2': 'arriving exactly when you need it',
  'features.desc_1': 'Not an alert, not a notification —',
  'features.desc_2': 'a gentle word, meant just for you.',
  'features.item1_title': 'Timely',
  'features.item1_desc': 'Messages crafted from time, city, and context.',
  'features.item2_title': 'Mindful',
  'features.item2_desc': 'Rice-paper textures, ink-wash aesthetics, custom fonts.',
  'features.item3_title': 'Collectible',
  'features.item3_desc': 'Save the words that resonate with you.',
  'features.item4_title': 'Customizable',
  'features.item4_desc': 'Themes, fonts, language, and image styles — all yours to adjust.',

  // Showcase
  'showcase.label': 'EXPERIENCE',
  'showcase.title': 'Like flipping through a pocket poetry book',
  'showcase.desc': 'Messages, settings, collections — all within a quiet space.',
  'showcase.white': 'Light',
  'showcase.dark': 'Dark',
  'showcase.ink': 'Ink',

  // Subscription
  'sub.label': 'ECHO · PRO',
  'sub.title': 'For those who wish to go a little further',
  'sub.desc_1': 'Pro unlocks more themes, more fonts,',
  'sub.desc_2': 'and a generous generation quota.',
  'sub.poetic_1': 'Like keeping an extra lantern in the mountains,',
  'sub.poetic_2': 'so words can still fall gently through the long night.',
  'sub.perk1': 'More Themes',
  'sub.perk2': 'More Fonts',
  'sub.perk3': 'Exclusive Avatar',
  'sub.perk4': 'Generous Quota',
  'sub.expand': 'Learn about Pro',
  'sub.collapse': 'Collapse',
  'sub.col_feature': 'Feature',
  'sub.col_free': 'Free',
  'sub.col_pro': 'PRO',
  'sub.row_schedule': 'Scheduled Messages',
  'sub.row_theme': 'Themes',
  'sub.row_font': 'Fonts',
  'sub.row_style': 'Writing Style',
  'sub.row_image': 'Image Style',
  'sub.row_manual': 'Manual Quota',
  'sub.val_basic': 'Basic',
  'sub.val_all': 'All',
  'sub.val_no_image': 'None',
  'sub.val_1': '1',
  'sub.val_3': '3',
  'sub.row_avatar': 'Exclusive Avatar',

  // FAQ
  'faq.label': 'FAQ',
  'faq.title': 'Some things you might wonder',
  'faq.q1': 'How are Echo\'s messages generated?',
  'faq.a1': 'Echo considers your city, time, weather, and device state, combined with your preferences and tone settings, to create a message that fits your current mood. It\'s not a mechanical reminder — more like a quiet friend who chose just the right moment to speak softly.',
  'faq.q2': 'Can I choose how it speaks?',
  'faq.a2': 'Yes. In Settings — Preferences, you can select a writing style — Tang poetry, Song lyrics, or prose — so messages appear in a tone you love, gradually matching your own rhythm.',

  // Footer
  'footer.slogan_1': 'At the right time,',
  'footer.slogan_2': 'turning moments of life into quiet messages.',
  'footer.contact': 'Contact',
  'footer.terms_label': 'Legal',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.copyright': '© 2026 Hefei Arbor M. Technology Co., Ltd. All rights reserved.',

  // Legal Layout
  'legal.back': 'Back',
  'legal.updated': 'Last updated',
  'legal.privacy_label': 'PRIVACY',
  'legal.terms_label': 'TERMS',

  // Theme toggle
  'theme.to_light': 'Switch to light theme',
  'theme.to_dark': 'Switch to dark theme',

  // Language
  'lang.label': 'Language',
};

export const translations: Record<Locale, Record<string, string>> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en,
};
