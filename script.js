// SFFB — small vanilla JS

// Marquee content (looped twice so the -50% translate animation is seamless)
(function buildMarquee() {
  var track = document.getElementById("marquee");
  if (!track) return;
  var items = ["SFFB 2026", "✦", "Student Film Festival", "✦", "Original Bahraini Cinema", "✦", "Dates TBA", "✦"];
  var html = items.map(function (t, i) {
    var colors = ["c-sun", "c-paper", "c-cyan", "c-paper", "c-coral", "c-paper", "c-sun", "c-paper"];
    return '<span class="' + colors[i % colors.length] + '">' + t + "</span>";
  }).join("");
  track.innerHTML = html + html;
})();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    var id = a.getAttribute("href").slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + id);
  });
});

// Film showcase — empty placeholder cards (no fabricated titles)
(function buildFilms() {
  var grid = document.getElementById("film-grid");
  if (!grid) return;
  var accents = ["c-red", "c-sky", "c-sun", "c-coral", "c-lime", "c-cyan"];
  var html = "";
  for (var i = 0; i < 6; i++) {
    var n = String(i + 1).padStart(2, "0");
    html +=
      '<article class="film">' +
        '<div class="film__poster">' +
          '<span class="film__num">' + n + '</span>' +
          '<span class="film__tba">Poster TBA</span>' +
        '</div>' +
        '<div class="film__meta">' +
          '<h3 class="film__title ' + accents[i % accents.length] + '">Title to be announced</h3>' +
          '<p class="film__info"><span>Dir. —</span> · <span>Runtime —</span></p>' +
          '<p class="film__synopsis">Placeholder.</p>' +
        '</div>' +
      '</article>';
  }
  grid.innerHTML = html;
})();

// Team — empty placeholder cards
(function buildTeam() {
  var grid = document.getElementById("team-grid");
  if (!grid) return;
  var colors = ["--sun", "--sky", "--coral", "--lime", "--cyan", "--amber"];
  var html = "";
  for (var i = 0; i < 6; i++) {
    html +=
      '<div class="member">' +
        '<div class="member__avatar" style="background: var(' + colors[i % colors.length] + ')">' +
          '<span>?</span>' +
        '</div>' +
        '<h3 class="member__name">Name TBA</h3>' +
        '<p class="member__role">Role TBA</p>' +
      '</div>';
  }
  grid.innerHTML = html;
})();

// Sponsors — empty placeholder slots
(function buildSponsors() {
  var grid = document.getElementById("sponsor-grid");
  if (!grid) return;
  var html = "";
  for (var i = 0; i < 8; i++) {
    html += '<div class="sponsor"><span>Your logo here</span></div>';
  }
  grid.innerHTML = html;
})();

// Calendar — current month grid, no fabricated events
(function buildCalendar() {
  var el = document.getElementById("calendar");
  if (!el) return;

  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var monthName = now.toLocaleString(undefined, { month: "long" });
  var firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
  // Shift so Monday = 0
  var offset = (firstDay + 6) % 7;
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var today = now.getDate();

  var head =
    '<div class="cal__head">' +
      '<span class="cal__title">' + monthName + " " + year + '</span>' +
      '<span class="cal__note">No events</span>' +
    '</div>';

  var dow = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  var dowHtml = '<div class="cal__grid cal__grid--dow">' +
    dow.map(function (d) { return '<span class="cal__dow">' + d + '</span>'; }).join("") +
    '</div>';

  var cells = "";
  for (var i = 0; i < offset; i++) cells += '<span class="cal__cell cal__cell--blank"></span>';
  for (var d = 1; d <= daysInMonth; d++) {
    var cls = "cal__cell";
    if (d === today) cls += " cal__cell--today";
    cells += '<span class="' + cls + '">' + d + '</span>';
  }
  var grid = '<div class="cal__grid">' + cells + '</div>';

  el.innerHTML = head + dowHtml + grid;
})();

// Notify form — client-side only (no backend wired up)
(function () {
  var form = document.getElementById("notify-form");
  if (!form) return;
  var msg = document.getElementById("form-msg");
  var input = document.getElementById("email");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = (input.value || "").trim();
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "form__msg is-err";
      return;
    }
    msg.textContent = "Thanks! We'll be in touch when submissions open.";
    msg.className = "form__msg is-ok";
    input.value = "";
  });
})();

// Tickets button — informational only until a provider is wired up
(function () {
  var btn = document.getElementById("tickets-btn");
  if (!btn) return;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.textContent = "Ticketing not open yet. Check back soon";
  });
})();
