// تبديل اللغة عربي / English
(function () {
  var html = document.documentElement;
  var btn = document.getElementById('langBtn');
  var nodes = document.querySelectorAll('[data-en]');

  function setLang(lang) {
    nodes.forEach(function (el) {
      var t = el.getAttribute('data-' + lang);
      if (t) el.textContent = t;
    });
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    btn.textContent = lang === 'ar' ? 'English' : 'العربية';
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  btn.addEventListener('click', function () {
    setLang(html.lang === 'ar' ? 'en' : 'ar');
  });

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'ar') setLang('ar');
})();
