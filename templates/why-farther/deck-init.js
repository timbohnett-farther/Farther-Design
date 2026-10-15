// Why Farther deck: render Lucide UI glyphs and the advisor QR code once the slides exist.
(function () {
  var tries = 0;
  function run() {
    var ready = document.querySelector('deck-stage section') && window.lucide && window.qrcode;
    if (!ready) { if (tries++ < 200) return setTimeout(run, 50); return; }
    window.lucide.createIcons();
    document.querySelectorAll('[data-advisor-qr]').forEach(function (el) {
      var url = el.getAttribute('data-advisor-qr');
      if (!/^https?:\/\//.test(url) || el.dataset.done) return;
      var qr = window.qrcode(0, 'M'); qr.addData(url); qr.make();
      el.innerHTML = qr.createSvgTag({ scalable: true, margin: 0 }); el.dataset.done = '1';
    });
  }
  run();
})();
