'use strict';
const statusNode = document.querySelector('#offline-status');
const ceb = document.documentElement.lang === 'ceb';
const say = (en, bisaya) => { statusNode.textContent = ceb ? bisaya : en; };
function readyStatus() {
  if (navigator.onLine) say('✓ Ready for offline use on this device', '✓ Andam gamiton offline niini nga device');
  else say('✓ Offline mode — saved guide', '✓ Offline mode — natipig nga giya');
}
if ('serviceWorker' in navigator && window.isSecureContext) {
  navigator.serviceWorker.register('./sw.js').then(() => navigator.serviceWorker.ready).then(() => {
    readyStatus();
    window.addEventListener('online', readyStatus);
    window.addEventListener('offline', readyStatus);
  }).catch(() => say('Offline setup failed. Reload when online.', 'Napakyas ang offline setup. I-reload kon online.'));
} else say('Offline saving requires HTTPS or localhost.', 'Kinahanglan ang HTTPS o localhost para sa offline.');
