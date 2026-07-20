(function () {
  "use strict";

  /* ============================================================
     i18n — language strings
     Add/edit Arabic strings freely; English is the fallback for
     any key you haven't translated yet.
     ============================================================ */
  var STRINGS = {
    en: {
      nav_home: "Home", nav_about: "About", nav_films: "Films",
      nav_events: "Events", nav_sponsors: "Sponsors", nav_submit: "Submit",
      nav_tickets: "Tickets",

      hero_eyebrow: "Dates TBA · Manama, Bahrain",
      hero_title_line1: "Bringing Bahraini films to",
      hero_title_the: "The", hero_title_big: "Big", hero_title_screen: "Screen.",
      hero_lede: "A festival celebrating original student cinema from across Bahrain — screenings, panels, and one long weekend of new voices.",
      hero_cta_tickets: "Get tickets",
      hero_cta_learn: "Learn more →",

      countdown_kicker: "Countdown",
      countdown_title1: "Curtains up in", countdown_title2: "T-minus…",
      countdown_days: "Days", countdown_hours: "Hours", countdown_mins: "Mins", countdown_secs: "Secs",
      countdown_note: "Placeholder target — exact dates announced soon.",

      blurb_kicker: "What is SFFB?",
      blurb_html: 'The <span class="c-sky">Student Film Festival of Bahrain</span> is a weekend-long celebration of original student cinema — shorts, features, and experimental work programmed alongside filmmaker Q&amp;As and workshops. <span class="c-paper">Built by students, for students.</span>',
      learn_more: "Learn more",

      lastyear_kicker: "Last year",
      lastyear_title1: "SFFB 2025", lastyear_title2: "highlights.",
      lastyear_caption: "2025 moments — click the arrows or dots to browse the gallery.",
      slide_photo: "Photo",

      partners_kicker: "Partners",
      partners_title1: "Backed by", partners_title2: "our sponsors.",
      partners_prose_html: 'Interested in supporting SFFB? Email <a href="mailto:sffb25@gmail.com">sffb25@gmail.com</a>.',
      sponsor_placeholder: "Your logo here",

      about_kicker: "01 / About",
      about_title1: "A stage for", about_title2: "new voices.",
      about_p1: "SFFB is a student-run festival highlighting original Bahraini cinema. We program shorts, features, and experimental work from filmmakers still finding their voice.",
      about_p2: "Every year we bring the community together for screenings, filmmaker Q&As, and workshops that make cinema feel possible.",

      team_kicker: "02 / Team",
      team_title1: "Meet the", team_title2: "team.",
      team_prose: "The volunteers, programmers, and organizers behind SFFB.",
      team_name_tba: "Name TBA", team_role_tba: "Role TBA",

      films_kicker: "03 / Selection",
      films_title1: "Film", films_title2: "showcase.",
      films_prose: "Posters and synopses arrive as the 2026 selection is finalized.",
      film_title_tba: "Title to be announced",
      film_poster_tba: "Poster TBA",
      film_dir: "Dir. —", film_runtime: "Runtime —",
      film_synopsis_tba: "Synopsis coming soon.",

      events_kicker: "04 / Upcoming",
      events_title1: "Events", events_title2: "calendar.",
      events_prose: "Screenings, panels, and after-parties will drop here as they're confirmed.",
      events_empty: "No events scheduled yet. Check back soon.",
      cal_note: "No events",
      cal_days: ["Mo","Tu","We","Th","Fr","Sa","Su"],

      sponsors_kicker: "05 / Sponsors",
      sponsors_title1: "Partners &", sponsors_title2: "sponsors.",
      sponsors_prose_html: 'Interested in supporting SFFB? Email <a href="mailto:sffb25@gmail.com">sffb25@gmail.com</a>.',

      tickets_kicker: "06 / Tickets",
      tickets_title1: "Tickets &", tickets_title2: "passes.",
      tickets_prose: "Single-screening tickets and full-festival passes go on sale ahead of the 2026 edition.",
      tickets_buy: "Buy tickets",
      tickets_buy_soon: "Ticketing not open yet — check back soon",
      tickets_submit_cta: "Filmmakers: submit →",

      submit_kicker: "07 / Filmmakers",
      submit_title1: "Submissions", submit_title2: "closed.",
      submit_prose: "Submissions for 2026 open later this year. Drop your email and we'll let you know the moment they do.",
      submit_notify: "Notify me",
      submit_placeholder: "you@somewhere.film",
      submit_button: "Subscribe",
      submit_ok: "Thanks! We'll be in touch when submissions open.",
      submit_err: "Please enter a valid email address.",

      footer_tagline: "Student Film Festival of Bahrain. Original student cinema on the big screen.",
      footer_follow: "Follow along",

      lang_toggle: "العربية"
    },
    ar: {
      nav_home: "الرئيسية", nav_about: "عن المهرجان", nav_films: "الأفلام",
      nav_events: "الفعاليات", nav_sponsors: "الرعاة", nav_submit: "التقديم",
      nav_tickets: "التذاكر",

      hero_eyebrow: "التواريخ لاحقًا · المنامة، البحرين",
      hero_title_line1: "نقدّم الأفلام البحرينية إلى",
      hero_title_the: "", hero_title_big: "الشاشة", hero_title_screen: "الكبيرة.",
      hero_lede: "مهرجان يحتفي بالسينما الطلابية البحرينية الأصيلة — عروض، جلسات نقاش، وعطلة نهاية أسبوع كاملة من الأصوات الجديدة.",
      hero_cta_tickets: "احصل على تذكرتك",
      hero_cta_learn: "اعرف المزيد ←",

      countdown_kicker: "العد التنازلي",
      countdown_title1: "موعدنا بعد", countdown_title2: "…",
      countdown_days: "يوم", countdown_hours: "ساعة", countdown_mins: "دقيقة", countdown_secs: "ثانية",
      countdown_note: "موعد مؤقت — التواريخ الدقيقة تُعلن قريبًا.",

      blurb_kicker: "ما هو SFFB؟",
      blurb_html: '<span class="c-sky">مهرجان الأفلام الطلابي في البحرين</span> هو احتفال يمتد على عطلة نهاية أسبوع بالسينما الطلابية الأصيلة — أفلام قصيرة وطويلة وتجريبية إلى جانب جلسات حوارية مع صنّاعها وورش عمل. <span class="c-paper">من الطلاب، للطلاب.</span>',
      learn_more: "اعرف المزيد",

      lastyear_kicker: "العام الماضي",
      lastyear_title1: "أبرز لحظات", lastyear_title2: "مهرجان ٢٠٢٥",
      lastyear_caption: "لحظات من عام ٢٠٢٥ — اضغط على الأسهم أو النقاط لتصفح المعرض.",
      slide_photo: "صورة",

      partners_kicker: "الشركاء",
      partners_title1: "بدعم من", partners_title2: "رعاتنا.",
      partners_prose_html: 'مهتم بدعم SFFB؟ راسلنا على <a href="mailto:sffb25@gmail.com">sffb25@gmail.com</a>.',
      sponsor_placeholder: "شعارك هنا",

      about_kicker: "٠١ / عن المهرجان",
      about_title1: "منصة", about_title2: "لأصوات جديدة.",
      about_p1: "SFFB مهرجان يديره الطلاب ويسلّط الضوء على السينما البحرينية الأصيلة. نعرض أفلامًا قصيرة وطويلة وتجريبية لصنّاع أفلام ما زالوا يكتشفون أسلوبهم.",
      about_p2: "كل عام نجمع المجتمع في عروض سينمائية، وجلسات حوارية مع صنّاع الأفلام، وورش عمل تجعل صناعة السينما أمرًا ممكنًا.",

      team_kicker: "٠٢ / الفريق",
      team_title1: "تعرّف على", team_title2: "الفريق.",
      team_prose: "المتطوعون والمبرمجون والمنظمون وراء SFFB.",
      team_name_tba: "الاسم لاحقًا", team_role_tba: "الدور لاحقًا",

      films_kicker: "٠٣ / الاختيارات",
      films_title1: "عرض", films_title2: "الأفلام.",
      films_prose: "الملصقات والملخصات ستُضاف عند الانتهاء من اختيار أفلام ٢٠٢٦.",
      film_title_tba: "العنوان يُعلن لاحقًا",
      film_poster_tba: "الملصق لاحقًا",
      film_dir: "إخراج —", film_runtime: "المدة —",
      film_synopsis_tba: "الملخص قريبًا.",

      events_kicker: "٠٤ / القادم",
      events_title1: "تقويم", events_title2: "الفعاليات.",
      events_prose: "العروض والجلسات الحوارية والحفلات الختامية ستُضاف هنا فور تأكيدها.",
      events_empty: "لا توجد فعاليات مجدولة بعد. تابعونا قريبًا.",
      cal_note: "لا فعاليات",
      cal_days: ["إث","ثل","أر","خم","جم","سب","أح"],

      sponsors_kicker: "٠٥ / الرعاة",
      sponsors_title1: "الشركاء و", sponsors_title2: "الرعاة.",
      sponsors_prose_html: 'مهتم بدعم SFFB؟ راسلنا على <a href="mailto:sffb25@gmail.com">sffb25@gmail.com</a>.',

      tickets_kicker: "٠٦ / التذاكر",
      tickets_title1: "التذاكر و", tickets_title2: "الباقات.",
      tickets_prose: "تذاكر العروض الفردية والباقات الكاملة للمهرجان ستُطرح قبل نسخة ٢٠٢٦.",
      tickets_buy: "شراء التذاكر",
      tickets_buy_soon: "الحجز لم يفتح بعد — تابعونا قريبًا",
      tickets_submit_cta: "صنّاع الأفلام: قدّموا أعمالكم ←",

      submit_kicker: "٠٧ / صنّاع الأفلام",
      submit_title1: "التقديم", submit_title2: "مغلق حاليًا.",
      submit_prose: "التقديم لنسخة ٢٠٢٦ يفتح لاحقًا هذا العام. اترك بريدك الإلكتروني وسنعلمك فور فتحه.",
      submit_notify: "أعلمني",
      submit_placeholder: "بريدك@example.com",
      submit_button: "اشتراك",
      submit_ok: "شكرًا لك! سنتواصل معك فور فتح باب التقديم.",
      submit_err: "يرجى إدخال بريد إلكتروني صحيح.",

      footer_tagline: "مهرجان الأفلام الطلابي في البحرين. سينما طلابية أصيلة على الشاشة الكبيرة.",
      footer_follow: "تابعونا",

      lang_toggle: "English"
    }
  };

  var currentLang = localStorage.getItem("sffb_lang") || "en";

  function t(key) {
    return (STRINGS[currentLang] && STRINGS[currentLang][key] != null)
      ? STRINGS[currentLang][key]
      : STRINGS.en[key] || "";
  }

  function applyStaticStrings() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.title = currentLang === "ar"
      ? "مهرجان الأفلام الطلابي في البحرين ٢٠٢٦"
      : "SFFB 2026 — Student Film Festival of Bahrain";
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("sffb_lang", lang);
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.classList.toggle("lang-ar", lang === "ar");
    applyStaticStrings();
    renderDynamicContent(); // rebuild film/team/sponsor/calendar text in new language
  }

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
  var MARQUEE_ITEMS_BY_LANG = {
    en: [
      { t: "SFFB 2026", c: "c-paper" }, { t: "//", c: "sep" },
      { t: "Student Film Festival", c: "c-sky" }, { t: "//", c: "sep" },
      { t: "Original Bahraini Cinema", c: "c-paper" }, { t: "//", c: "sep" },
      { t: "Dates TBA", c: "c-red" }, { t: "//", c: "sep" }
    ],
    ar: [
      { t: "SFFB 2026", c: "c-paper" }, { t: "//", c: "sep" },
      { t: "مهرجان الأفلام الطلابي", c: "c-sky" }, { t: "//", c: "sep" },
      { t: "سينما بحرينية أصيلة", c: "c-paper" }, { t: "//", c: "sep" },
      { t: "التواريخ لاحقًا", c: "c-red" }, { t: "//", c: "sep" }
    ]
  };

  function renderMarquee() {
    var track = document.getElementById("marqueeTrack");
    if (!track) return;
    var items = MARQUEE_ITEMS_BY_LANG[currentLang] || MARQUEE_ITEMS_BY_LANG.en;
    var oneSetHTML = "";
    items.forEach(function (i) {
      oneSetHTML += '<span class="' + i.c + '">' + i.t + "</span>";
    });

    track.innerHTML = oneSetHTML + oneSetHTML;
    var copies = 2;
    var safety = 0;
    while (track.scrollWidth < window.innerWidth * 2 && safety < 20) {
      track.innerHTML += oneSetHTML;
      copies++;
      safety++;
    }
    var baseDuration = 30;
    track.style.animationDuration = (baseDuration * (copies / 2)) + "s";
  }

  function renderDynamicContent() {
    renderMarquee();

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
              '<span class="film__tba">' + t("film_poster_tba") + "</span>" +
            "</div>" +
            '<div class="film__meta">' +
              '<h3 class="film__title ' + FILM_ACCENTS[i % FILM_ACCENTS.length] + '">' + t("film_title_tba") + "</h3>" +
              '<p class="film__info"><span>' + t("film_dir") + "</span> · <span>" + t("film_runtime") + "</span></p>" +
              '<p class="film__synopsis">' + t("film_synopsis_tba") + "</p>" +
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
            '<h3 class="member__name">' + t("team_name_tba") + "</h3>" +
            '<p class="member__role">' + t("team_role_tba") + "</p>" +
          "</div>";
      }
      tg.innerHTML = th;
    }

    // Sponsor grids (full page + landing strip)
    var sponsorHTML = "";
    for (var k = 0; k < 8; k++) sponsorHTML += '<div class="sponsor"><span>' + t("sponsor_placeholder") + "</span></div>";
    ["sponsorGrid", "landingSponsorGrid"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = sponsorHTML;
    });

    // Calendar (current month)
    var cal = document.getElementById("calendar");
    if (cal) {
      var now = new Date();
      var y = now.getFullYear();
      var m = now.getMonth();
      var monthName = now.toLocaleString(currentLang === "ar" ? "ar" : undefined, { month: "long" });
      var firstDay = new Date(y, m, 1).getDay();
      var offset = (firstDay + 6) % 7;
      var days = new Date(y, m + 1, 0).getDate();
      var today = now.getDate();

      var out =
        '<div class="cal__head"><span class="cal__title">' + monthName + " " + y +
        '</span><span class="cal__note">' + t("cal_note") + "</span></div>" +
        '<div class="cal__grid cal__grid--dow">';
      (STRINGS[currentLang] && STRINGS[currentLang].cal_days ? STRINGS[currentLang].cal_days : STRINGS.en.cal_days).forEach(function (d) {
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

    // Ticket button text resets on language change (unless already clicked-state)
    var tb = document.getElementById("ticketBtn");
    if (tb && !tb.dataset.clicked) {
      tb.textContent = t("tickets_buy");
    }
  }

  // Ticket button
  var tb = document.getElementById("ticketBtn");
  if (tb) {
    tb.addEventListener("click", function () {
      tb.textContent = t("tickets_buy_soon");
      tb.dataset.clicked = "1";
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
        msg.textContent = t("submit_err");
        msg.classList.add("is-err");
        return;
      }
      msg.textContent = t("submit_ok");
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

  // ---------- Language toggle button(s) ----------
  document.querySelectorAll(".lang-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(currentLang === "ar" ? "en" : "ar");
    });
  });

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

  // ---------- Countdown (placeholder target) ----------
  var TARGET = new Date("2026-03-05T18:00:00+03:00").getTime();
  var cdNums = {
    days:  document.querySelector('[data-cd="days"]'),
    hours: document.querySelector('[data-cd="hours"]'),
    mins:  document.querySelector('[data-cd="mins"]'),
    secs:  document.querySelector('[data-cd="secs"]')
  };
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tickCountdown() {
    if (!cdNums.days) return;
    var diff = TARGET - Date.now();
    if (diff <= 0) {
      cdNums.days.textContent = "00";
      cdNums.hours.textContent = "00";
      cdNums.mins.textContent = "00";
      cdNums.secs.textContent = "00";
      return;
    }
    var s = Math.floor(diff / 1000);
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600);  s -= h * 3600;
    var m = Math.floor(s / 60);    s -= m * 60;
    cdNums.days.textContent  = pad(d);
    cdNums.hours.textContent = pad(h);
    cdNums.mins.textContent  = pad(m);
    cdNums.secs.textContent  = pad(s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  // ---------- Last year photo slideshow ----------
  var slideshow = document.getElementById("photoSlideshow");
  var slideshowTrack = slideshow && slideshow.querySelector(".slideshow__track");
  var slides = slideshowTrack && slideshowTrack.children;
  var prevBtn = document.getElementById("slideshowPrev");
  var nextBtn = document.getElementById("slideshowNext");
  var dotsContainer = document.getElementById("slideshowDots");
  var currentSlide = 0;
  var slideCount = slides ? slides.length : 0;

  function updateSlideshow() {
    if (!slideshowTrack || slideCount === 0) return;
    var dir = document.documentElement.getAttribute("dir") === "rtl" ? 1 : -1;
    slideshowTrack.style.transform = "translateX(" + (dir * currentSlide * 100) + "%)";
    if (dotsContainer) {
      var dots = dotsContainer.querySelectorAll(".slideshow__dot");
      dots.forEach(function (dot, idx) {
        dot.classList.toggle("is-active", idx === currentSlide);
      });
    }
  }

  if (slideshow && slideCount > 0 && dotsContainer) {
    for (var s = 0; s < slideCount; s++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slideshow__dot";
      dot.setAttribute("aria-label", "Go to photo " + (s + 1));
      (function (index) {
        dot.addEventListener("click", function () {
          currentSlide = index;
          updateSlideshow();
        });
      })(s);
      dotsContainer.appendChild(dot);
    }
    updateSlideshow();

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlideshow();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlideshow();
      });
    }

    var touchStartX = 0;
    var touchEndX = 0;
    slideshow.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slideshow.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          currentSlide = (currentSlide + 1) % slideCount;
        } else {
          currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        }
        updateSlideshow();
      }
    }, { passive: true });
  }

  // ---------- Init language ----------
  applyLanguage(currentLang);
})();