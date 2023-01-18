var waitForTrackerCount = 0;

// needed to avoid site crash
// var _paq = window._paq = window._paq || [];
//

function matomoWaitForTracker() {
  if (typeof _paq === 'undefined' || typeof Cookiebot === 'undefined') {
    if (waitForTrackerCount < 40) {
      setTimeout(matomoWaitForTracker, 250);
      waitForTrackerCount++;
      return;
    }
  } else {
    _paq.push(['requireConsent']);
    window.addEventListener('CookiebotOnAccept', function (e) {
      consentSet();
    });
    window.addEventListener('CookiebotOnDecline', function (e) {
      consentSet();
    });
  }
}
function consentSet() {
  if (Cookiebot.consent.statistics) {
    _paq.push(['setCookieConsentGiven']);
    _paq.push(['setConsentGiven']);
  } else {
    _paq.push(['forgetCookieConsentGiven']);
    _paq.push(['forgetConsentGiven']);
  }
}
document.addEventListener('DOMContentLoaded', matomoWaitForTracker());