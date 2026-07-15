(function () {
  "use strict";

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth-scroll for in-page anchors
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + id);
  });

  // Marquee
  var MARQUEE_ITEMS = [
    { t: "SFFB 2026", c: "c-paper" },
    { t: "//", c: "sep" },
    { t: "Student Film Festival", c: "c-sky" },
    { t: "//", c: "sep" },
    { t: "Original Bahraini Cinema", c: "c-paper" },
    { t: "//", c: "sep" },
    { t: "Dates TBA", c: "c-red" },
    { t: "//", c: "sep" }
  ];
  var track = document.getElementById("marqueeTrack");
  if (track) {
    var html = "";
    for (var r = 0; r < 2; r++) {
      MARQUEE_ITEMS.forEach(function (i) {
        html += '<span class="' + i.c + '">' + i.t + "</span>";
      });
    }
    track.innerHTML = html;
  }

  // Film grid
  var FILM_ACCENTS = ["c-red", "c-sky", "c-grass", "c-paper", "c-red", "c-sky"];
  var fg = document.getElementById("filmGrid");
  if (fg) {
    var fh = "";
    for (var i = 0; i < 6; i++) {
      var num = String(i + 1).padStart(2, "0");
      fh +=
        '<article class="film">' +
          '<div class="film__poster">' +
            '<span class="film__num">' + num + "</span>" +
            '<span class="film__tba">Poster TBA</span>' +
          "</div>" +
          '<div class="film__meta">' +
            '<h3 class="film__title ' + FILM_ACCENTS[i % FILM_ACCENTS.length] + '">Title to be announced</h3>' +
            '<p class="film__info"><span>Dir. —</span> · <span>Runtime —</span></p>' +
            '<p class="film__synopsis">Synopsis coming soon.</p>' +
          "</div>" +
        "</article>";
    }
    fg.innerHTML = fh;
  }

  // Team grid
  var TEAM_TINTS = ["var(--red)", "var(--sky)", "var(--grass)", "var(--ink)", "var(--red)", "var(--sky)"];
  var tg = document.getElementById("teamGrid");
  if (tg) {
    var th = "";
    for (var j = 0; j < 6; j++) {
      th +=
        '<div class="member">' +
          '<div class="member__avatar" style="background:' + TEAM_TINTS[j % TEAM_TINTS.length] + '"><span>?</span></div>' +
          '<h3 class="member__name">Name TBA</h3>' +
          '<p class="member__role">Role TBA</p>' +
        "</div>";
    }
    tg.innerHTML = th;
  }

  // Sponsor grid
  var sg = document.getElementById("sponsorGrid");
  if (sg) {
    var sh = "";
    for (var k = 0; k < 8; k++) sh += '<div class="sponsor"><span>Your logo here</span></div>';
    sg.innerHTML = sh;
  }

  // Calendar (current month)
  var cal = document.getElementById("calendar");
  if (cal) {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth();
    var monthName = now.toLocaleString(undefined, { month: "long" });
    var firstDay = new Date(y, m, 1).getDay();
    var offset = (firstDay + 6) % 7;
    var days = new Date(y, m + 1, 0).getDate();
    var today = now.getDate();

    var out =
      '<div class="cal__head"><span class="cal__title">' + monthName + " " + y +
      '</span><span class="cal__note">No events</span></div>' +
      '<div class="cal__grid cal__grid--dow">';
    ["Mo","Tu","We","Th","Fr","Sa","Su"].forEach(function (d) {
      out += '<span class="cal__dow">' + d + "</span>";
    });
    out += '</div><div class="cal__grid">';
    for (var b = 0; b < offset; b++) out += '<span class="cal__cell cal__cell--blank"></span>';
    for (var d = 1; d <= days; d++) {
      out += '<span class="cal__cell' + (d === today ? " cal__cell--today" : "") + '">' + d + "</span>";
    }
    out += "</div>";
    cal.innerHTML = out;
  }

  // Ticket button
  var tb = document.getElementById("ticketBtn");
  if (tb) {
    tb.addEventListener("click", function () {
      tb.textContent = "Ticketing not open yet — check back soon";
    });
  }

  // Subscribe form
  var form = document.getElementById("subscribeForm");
  var msg = document.getElementById("formMsg");
  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = (form.email.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      msg.classList.remove("is-ok", "is-err");
      if (!valid) {
        msg.textContent = "Please enter a valid email address.";
        msg.classList.add("is-err");
        return;
      }
      msg.textContent = "Thanks! We'll be in touch when submissions open.";
      msg.classList.add("is-ok");
      form.reset();
    });
  }

  // ---------- Mobile nav toggle ----------
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  function closeMobileMenu() {
    if (!navToggle || !mobileMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  }
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("is-open", !isOpen);
    });
    mobileMenu.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) closeMobileMenu();
    });
    document.addEventListener("click", function (e) {
      if (!mobileMenu.classList.contains("is-open")) return;
      if (mobileMenu.contains(e.target) || navToggle.contains(e.target)) return;
      closeMobileMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileMenu();
    });
  }

  // ---------- Hash-based page routing ----------
  var pages = document.querySelectorAll('[data-page]');
  var navLinks = document.querySelectorAll('[data-route]');
  function currentRoute() {
    var h = (location.hash || '').replace(/^#/, '');
    if (!h || h === '/') return '/';
    return h;
  }
  function showRoute(route) {
    var matched = false;
    pages.forEach(function (p) {
      var active = p.getAttribute('data-page') === route;
      if (active) matched = true;
      p.classList.toggle('is-active', active);
    });
    if (!matched) {
      pages.forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-page') === '/');
      });
    }
    navLinks.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('data-route') === route);
    });
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }
  window.addEventListener('hashchange', function () { showRoute(currentRoute()); });
  showRoute(currentRoute());
})();