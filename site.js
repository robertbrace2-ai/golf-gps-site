/* =========================================================
   1st Golf GPS – site settings
   ---------------------------------------------------------
   These are the ONLY two lines you need to change.
   Put the text between the quote marks, then save.
   ========================================================= */

var SUPPORT_EMAIL = "support@1stgolfgps.co.uk";
var APP_STORE_URL = "";   // paste your App Store link here when the app goes live

/* ---------- You don't need to edit anything below ---------- */

(function () {
  // Fill in the support email wherever the page has a .js-email link
  if (SUPPORT_EMAIL) {
    var links = document.querySelectorAll(".js-email");
    for (var i = 0; i < links.length; i++) {
      links[i].href = "mailto:" + SUPPORT_EMAIL;
      links[i].textContent = SUPPORT_EMAIL;
    }
  }

  // Turn every "Coming soon" button into a real App Store download link
  if (APP_STORE_URL) {
    var buttons = document.querySelectorAll(".js-appstore");
    for (var j = 0; j < buttons.length; j++) {
      var b = buttons[j];
      b.href = APP_STORE_URL;
      b.classList.remove("is-soon");
      b.removeAttribute("aria-disabled");
      var label = b.querySelector(".js-appstore-label");
      if (label) label.textContent = "Download on the App Store";
    }
    var notes = document.querySelectorAll(".js-soon-note");
    for (var k = 0; k < notes.length; k++) notes[k].style.display = "none";
  }
})();
