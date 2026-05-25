/* ═══════════════════════════════════════════════
   RY-OFFICIAL — lang.js
   Arabic auto-detect + language toggle
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  var AR = {
    /* Navbar */
    'nav_store':      'المتجر',
    'nav_deals':      'الصفقات',
    'nav_reviews':    'التقييمات',
    'nav_about':      'من نحن',
    'nav_join':       'انضم للمجموعة ↗',

    /* Hero */
    'hero_badge':     'متجر PUBG UC والحسابات الأكثر ثقة',
    'hero_h1_1':      'RY-OFFICIAL',
    'hero_h1_2':      'متجر الحسابات و UC',
    'hero_subtitle':  'أفضل متجر موثوق لـ PUBG UC والحسابات.<br/>توصيل فوري، صفر احتيال، وأفضل الأسعار.',
    'hero_btn1':      'انضم لمجموعة واتساب',
    'hero_btn2':      'عرض الباقات',
    'hero_f2f':       '<strong>صفقات وجهاً لوجه متاحة</strong> في المدن الكبرى — متاح دائماً · رسوم إضافية تطبق',
    'hero_pill1':     'توصيل 5–10 دقائق',
    'hero_pill2':     'سجل خالٍ من الاحتيال',
    'hero_pill3':     '+1000 صفقة منجزة',

    /* Ticker */
    'tick_1': '+1000 صفقة منجزة',
    'tick_2': '+500 حساب مُباع',
    'tick_3': 'توصيل 5 دقائق',
    'tick_4': 'صفر احتيال',
    'tick_5': '#1 متجر PUBG',

    /* Deals section */
    'deals_tag':    'صفقات حقيقية',
    'deals_title':  '+1000 صفقة <span class="text-accent">مُباعة</span>',
    'deals_sub':    'لقطات شاشة واتساب حقيقية. مدفوعات حقيقية. عملاء حقيقيون. الحمد لله.',
    'deals_rating': 'التقييم العام',
    'deals_cta_p':  '+1000 عميل راضٍ — جميع الصفقات موثقة وحقيقية',
    'deals_cta_btn':'اطلب الآن عبر واتساب ↗',

    /* Packages */
    'pkg_tag':      'متجر UC',
    'pkg_title':    'اشترِ <span class="text-accent">UC</span> بأفضل الأسعار',
    'pkg_sub':      'توصيل فوري إلى حساب PUBG الخاص بك.',
    'pkg_tab_other':'مناطق أخرى',
    'pkg_tab_login':'Login UC',
    'pkg_instant':  'توصيل فوري',
    'pkg_safe':     'آمن ومضمون',
    'pkg_best_val': 'أفضل قيمة',
    'pkg_bulk':     'توفير الجملة',
    'pkg_priority': 'دعم أولوي',
    'pkg_order':    'اطلب الآن ↗',
    'pkg_popular':  'الأكثر مبيعاً',
    'pkg_max':      'الحزمة الكبرى',
    'pkg_best_seller': 'الأكثر طلباً',
    'pkg_best_val_badge': 'أفضل قيمة',
    'pkg_region_notice': 'UC المناطق الأخرى · شحن مباشر عبر Login (iOS & Huawei QR)',
    'pkg_delivery_badge': 'التوصيل: 10–15 دقيقة',
    'pkg_method_login': 'طريقة Login',
    'pkg_ios_huawei': 'iOS & Huawei QR',
    'pkg_login_how_title': 'كيف تعمل طريقة Login UC',
    'pkg_login_step1': 'تشاركنا بيانات حساب PUBG (كلمة مرور مؤقتة)',
    'pkg_login_step2': 'ندخل الحساب من جهاز iOS أو Huawei QR',
    'pkg_login_step3': 'يتم شراء UC مباشرة داخل اللعبة',
    'pkg_login_step4': 'تغير كلمة المرور بعد التسليم',
    'pkg_login_note': '100% آمن — نصل فقط لمتجر UC',
    'pkg_guarantee': '100% مضمون',
    'pkg_any_region': 'أي منطقة',
    'pkg_gulf_jp': 'Gulf / JP منطقة',
    'pkg_note':     'كمية مخصصة أو منطقة مختلفة؟ راسلنا على واتساب للحصول على أفضل الأسعار.',

    /* Other region tab — default tab for Arabic */
    'pkg_tab_other_active': 'مناطق أخرى',

    /* How it works */
    'hiw_tag':   'عملية بسيطة',
    'hiw_title': 'كيف <span class="text-accent">يعمل</span>',
    'hiw_sub':   '3 خطوات سهلة. تستغرق أقل من 5 دقائق.',
    'hiw_s1_h':  'أرسل رسالة عبر واتساب',
    'hiw_s1_p':  'أرسل لنا UID الخاص بـ PUBG وكمية UC المطلوبة. نرد فوراً.',
    'hiw_s2_h':  'ادفع عبر واتساب Pay / تحويل',
    'hiw_s2_p':  'أرسل الدفعة إلى رقمنا. نقبل التحويل البنكي وطرق الدفع الأخرى.',
    'hiw_s3_h':  'UC تُسلَّم فوراً',
    'hiw_s3_p':  'تصل UC إلى حسابك خلال 5 دقائق. لقطة شاشة تُرسل كدليل.',
    'hiw_cta':   'ابدأ طلبك الآن ↗',
    'hiw_note':  'متوسط التوصيل: 3–5 دقائق',

    /* Reviews */
    'rev_tag':   'تقييمات العملاء',
    'rev_title': 'ماذا يقول <span class="text-accent">العملاء</span>',
    'rev_sub':   'تقييمات حقيقية من مشترين حقيقيين. 100% بدون فلترة.',
    'rev_form_title': 'شارك تجربتك',
    'rev_lbl_name':   'اسمك',
    'rev_lbl_city':   'المدينة',
    'rev_lbl_rating': 'التقييم',
    'rev_lbl_review': 'تقييمك',
    'rev_lbl_product':'ماذا اشتريت؟',
    'rev_placeholder_name':   'مثال: أحمد',
    'rev_placeholder_city':   'مثال: الرياض',
    'rev_placeholder_review': 'شارك تجربتك مع RY Official...',
    'rev_submit': 'إرسال التقييم ↗',
    'rev_success':'شكراً! تم إرسال تقييمك.',

    /* Footer */
    'footer_tagline': 'أوثق متجر لـ PUBG UC والحسابات. توصيل فوري، صفر احتيال.',
    'footer_wa_btn':  'تواصل عبر واتساب',
    'footer_h_store': 'المتجر',
    'footer_uc':      'باقات UC',
    'footer_acc':     'حسابات PUBG',
    'footer_deals':   'الصفقات',
    'footer_h_info':  'معلومات',
    'footer_hiw':     'كيف يعمل',
    'footer_reviews': 'التقييمات',
    'footer_contact': 'تواصل معنا',
    'footer_h_pay':   'الدفع',
    'footer_pay1':    'تحويل بنكي',
    'footer_pay2':    'واتساب Pay',
    'footer_pay3':    'USDT',
    'footer_copy':    '© 2026 RY-OFFICIAL — جميع الحقوق محفوظة',
    'footer_credit':  'بواسطة Mudasir Shahzad',

    /* Lang toggle */
    'lang_btn': 'EN'
  };

  var EN_lang_btn = 'عربي';

  /* ── Detect Arabic browser ─────────────────── */
  function isArabicUser() {
    var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return lang.startsWith('ar');
  }

  /* ── Apply Arabic translations ─────────────── */
  function applyArabic() {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');

    /* Navbar */
    setText('nav_store_el',   AR.nav_store);
    setText('nav_deals_el',   AR.nav_deals);
    setText('nav_reviews_el', AR.nav_reviews);
    setText('nav_about_el',   AR.nav_about);
    setHTML('nav_join_el',    AR.nav_join);
    setHTML('drawer_store_el',   AR.nav_store);
    setHTML('drawer_deals_el',   AR.nav_deals);
    setHTML('drawer_reviews_el', AR.nav_reviews);
    setHTML('drawer_about_el',   AR.nav_about);

    /* Hero */
    setText('hero_badge_el',    AR.hero_badge);
    setText('hero_h1_1_el',     AR.hero_h1_1);
    setText('hero_h1_2_el',     AR.hero_h1_2);
    setHTML('hero_subtitle_el', AR.hero_subtitle);
    setText('hero_btn1_el',     AR.hero_btn1);
    setText('hero_btn2_el',     AR.hero_btn2);
    setHTML('hero_f2f_el',      AR.hero_f2f);
    setText('hero_pill1_el',    AR.hero_pill1);
    setText('hero_pill2_el',    AR.hero_pill2);
    setText('hero_pill3_el',    AR.hero_pill3);

    /* Deals */
    setText('deals_tag_el',    AR.deals_tag);
    setHTML('deals_title_el',  AR.deals_title);
    setText('deals_sub_el',    AR.deals_sub);
    setText('deals_rating_el', AR.deals_rating);
    setText('deals_cta_p_el',  AR.deals_cta_p);
    setText('deals_cta_btn_el',AR.deals_cta_btn);

    /* Packages */
    setText('pkg_tag_el',   AR.pkg_tag);
    setHTML('pkg_title_el', AR.pkg_title);
    setText('pkg_sub_el',   AR.pkg_sub);
    setText('pkg_tab_other_el', AR.pkg_tab_other);
    setText('pkg_tab_login_el', AR.pkg_tab_login);
    setText('pkg_note_el',  AR.pkg_note);

    /* For Arabic users: auto-switch to "Other Regions" tab */
    var tabPk    = document.getElementById('tabPk');
    var tabOther = document.getElementById('tabOther');
    var btnPk    = document.querySelector('[data-tab="pk"]');
    var btnOther = document.querySelector('[data-tab="other"]');
    if (tabPk && tabOther) {
      tabPk.style.display    = 'none';
      tabOther.style.display = '';
      if (btnPk)    btnPk.classList.remove('active');
      if (btnOther) btnOther.classList.add('active');
    }

    /* How it works */
    setText('hiw_tag_el',   AR.hiw_tag);
    setHTML('hiw_title_el', AR.hiw_title);
    setText('hiw_sub_el',   AR.hiw_sub);
    setText('hiw_s1_h_el',  AR.hiw_s1_h);
    setText('hiw_s1_p_el',  AR.hiw_s1_p);
    setText('hiw_s2_h_el',  AR.hiw_s2_h);
    setText('hiw_s2_p_el',  AR.hiw_s2_p);
    setText('hiw_s3_h_el',  AR.hiw_s3_h);
    setText('hiw_s3_p_el',  AR.hiw_s3_p);
    setText('hiw_cta_el',   AR.hiw_cta);
    setText('hiw_note_el',  AR.hiw_note);

    /* Reviews */
    setText('rev_tag_el',   AR.rev_tag);
    setHTML('rev_title_el', AR.rev_title);
    setText('rev_sub_el',   AR.rev_sub);
    setText('rev_form_title_el',       AR.rev_form_title);
    setText('rev_lbl_name_el',         AR.rev_lbl_name);
    setText('rev_lbl_city_el',         AR.rev_lbl_city);
    setText('rev_lbl_rating_el',       AR.rev_lbl_rating);
    setText('rev_lbl_review_el',       AR.rev_lbl_review);
    setText('rev_lbl_product_el',      AR.rev_lbl_product);
    setAttr('rName', 'placeholder',    AR.rev_placeholder_name);
    setAttr('rCity', 'placeholder',    AR.rev_placeholder_city);
    setAttr('rText', 'placeholder',    AR.rev_placeholder_review);
    setText('rev_submit_el',  AR.rev_submit);
    setText('rev_success_el', AR.rev_success);

    /* Footer */
    setText('footer_tagline_el', AR.footer_tagline);
    setText('footer_wa_btn_el',  AR.footer_wa_btn);
    setText('footer_h_store_el', AR.footer_h_store);
    setText('footer_uc_el',      AR.footer_uc);
    setText('footer_acc_el',     AR.footer_acc);
    setText('footer_deals_el',   AR.footer_deals);
    setText('footer_h_info_el',  AR.footer_h_info);
    setText('footer_hiw_el',     AR.footer_hiw);
    setText('footer_reviews_el', AR.footer_reviews);
    setText('footer_contact_el', AR.footer_contact);
    setText('footer_h_pay_el',   AR.footer_h_pay);
    setText('footer_pay1_el',    AR.footer_pay1);
    setText('footer_pay2_el',    AR.footer_pay2);
    setText('footer_pay3_el',    AR.footer_pay3);
    setText('footer_copy_el',    AR.footer_copy);
    setText('footer_credit_el',  AR.footer_credit);

    /* Toggle button label */
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = AR.lang_btn;

    localStorage.setItem('ry_lang', 'ar');
  }

  /* ── Restore English ───────────────────────── */
  function applyEnglish() {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.removeAttribute('dir');
    location.reload();
  }

  /* ── Helpers ───────────────────────────────── */
  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }
  function setHTML(id, val) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
  function setAttr(id, attr, val) {
    var el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  }

  /* ── Init ──────────────────────────────────── */
  function init() {
    var saved = localStorage.getItem('ry_lang');
    var btn   = document.getElementById('langToggle');

    if (saved === 'ar' || (!saved && isArabicUser())) {
      applyArabic();
    } else {
      if (btn) btn.textContent = EN_lang_btn;
    }

    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('ry_lang') || 'en';
        if (current === 'ar') {
          localStorage.setItem('ry_lang', 'en');
          applyEnglish();
        } else {
          applyArabic();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
