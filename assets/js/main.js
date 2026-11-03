/* ============================================================
   BRADLEY VENTURES — proposal demo
   SWAPPABLE: set BUSINESS_NAME once; every [data-biz] updates.
   ============================================================ */
(function () {
  "use strict";

  /* ONE swappable constant — business name placeholder */
  var BUSINESS_NAME = "Bradley Ventures";
  document.querySelectorAll("[data-biz]").forEach(function (el) {
    el.textContent = BUSINESS_NAME;
  });

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  /* ---------- entrance reveals (content visible without JS) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- signature: launch checklist ---------- */
  var list = document.getElementById("launch-checklist");
  if (list) {
    var items = Array.prototype.slice.call(list.querySelectorAll(".check-item"));
    var fill = document.getElementById("check-progress");
    var count = document.getElementById("check-count");

    function render() {
      var done = items.filter(function (i) { return i.classList.contains("done"); }).length;
      if (fill) fill.style.width = (done / items.length) * 100 + "%";
      if (count) count.textContent = done + " of " + items.length + " ready";
    }

    items.forEach(function (item) {
      var btn = item.querySelector(".check-btn");
      var expand = item.querySelector(".check-expand");
      if (btn) {
        btn.addEventListener("click", function () {
          item.classList.toggle("done");
          btn.setAttribute("aria-pressed", item.classList.contains("done") ? "true" : "false");
          render();
        });
      }
      if (expand) {
        expand.addEventListener("click", function (ev) {
          ev.stopPropagation();
          var open = item.classList.toggle("open");
          expand.setAttribute("aria-expanded", open ? "true" : "false");
          expand.textContent = open ? "– less" : "+ details";
        });
      }
    });
    render();
  }

  /* ---------- faq accordions ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
