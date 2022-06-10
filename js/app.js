/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      755: () => {
        console.log("components");
      },
      598: () => {
        function e(e) {
          var t = !0,
            n = !1,
            o = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function a(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function r(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function s(e) {
            t = !1;
          }
          function u() {
            document.addEventListener("mousemove", c),
              document.addEventListener("mousedown", c),
              document.addEventListener("mouseup", c),
              document.addEventListener("pointermove", c),
              document.addEventListener("pointerdown", c),
              document.addEventListener("pointerup", c),
              document.addEventListener("touchmove", c),
              document.addEventListener("touchstart", c),
              document.addEventListener("touchend", c);
          }
          function c(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", c),
              document.removeEventListener("mousedown", c),
              document.removeEventListener("mouseup", c),
              document.removeEventListener("pointermove", c),
              document.removeEventListener("pointerdown", c),
              document.removeEventListener("pointerup", c),
              document.removeEventListener("touchmove", c),
              document.removeEventListener("touchstart", c),
              document.removeEventListener("touchend", c));
          }
          document.addEventListener(
            "keydown",
            function (n) {
              n.metaKey ||
                n.altKey ||
                n.ctrlKey ||
                (a(e.activeElement) && r(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", s, !0),
            document.addEventListener("pointerdown", s, !0),
            document.addEventListener("touchstart", s, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (n && (t = !0), u());
              },
              !0
            ),
            u(),
            e.addEventListener(
              "focus",
              function (e) {
                var n, o, s;
                a(e.target) &&
                  (t ||
                    ((o = (n = e.target).type),
                    ("INPUT" === (s = n.tagName) && i[o] && !n.readOnly) ||
                      ("TEXTAREA" === s && !n.readOnly) ||
                      n.isContentEditable)) &&
                  r(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                a(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((n = !0),
                  window.clearTimeout(o),
                  (o = window.setTimeout(function () {
                    n = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
      2: function (e, t, n) {
        var o, i;
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              n = (this.document || this.ownerDocument).querySelectorAll(e),
              o = this;
            do {
              for (t = n.length; 0 <= --t && n.item(t) !== o; );
            } while (t < 0 && (o = o.parentElement));
            return o;
          }),
          (function () {
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            "function" != typeof window.CustomEvent &&
              ((e.prototype = window.Event.prototype),
              (window.CustomEvent = e));
          })(),
          (function () {
            for (
              var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0;
              n < t.length && !window.requestAnimationFrame;
              ++n
            )
              (window.requestAnimationFrame =
                window[t[n] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[n] + "CancelAnimationFrame"] ||
                  window[t[n] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t, n) {
                var o = new Date().getTime(),
                  i = Math.max(0, 16 - (o - e)),
                  a = window.setTimeout(function () {
                    t(o + i);
                  }, i);
                return (e = o + i), a;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          (i =
            void 0 !== n.g
              ? n.g
              : "undefined" != typeof window
              ? window
              : this),
          (o = function () {
            return (function (e) {
              "use strict";
              var t = {
                  ignore: "[data-scroll-ignore]",
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: "easeInOutCubic",
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                },
                n = function () {
                  var e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (t) {
                      for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n];
                      }
                    }),
                    e
                  );
                },
                o = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      n = String(e),
                      o = n.length,
                      i = -1,
                      a = "",
                      r = n.charCodeAt(0);
                    ++i < o;

                  ) {
                    if (0 === (t = n.charCodeAt(i)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    a +=
                      (1 <= t && t <= 31) ||
                      127 == t ||
                      (0 === i && 48 <= t && t <= 57) ||
                      (1 === i && 48 <= t && t <= 57 && 45 === r)
                        ? "\\" + t.toString(16) + " "
                        : 128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                        ? n.charAt(i)
                        : "\\" + n.charAt(i);
                  }
                  return "#" + a;
                },
                i = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                a = function (t, n, o) {
                  0 === t && document.body.focus(),
                    o ||
                      (t.focus(),
                      document.activeElement !== t &&
                        (t.setAttribute("tabindex", "-1"),
                        t.focus(),
                        (t.style.outline = "none")),
                      e.scrollTo(0, n));
                },
                r = function (t, n, o, i) {
                  if (n.emitEvents && "function" == typeof e.CustomEvent) {
                    var a = new CustomEvent(t, {
                      bubbles: !0,
                      detail: { anchor: o, toggle: i },
                    });
                    document.dispatchEvent(a);
                  }
                };
              return function (s, u) {
                var c,
                  d,
                  l,
                  m,
                  f = {
                    cancelScroll: function (e) {
                      cancelAnimationFrame(m),
                        (m = null),
                        e || r("scrollCancel", c);
                    },
                    animateScroll: function (o, s, u) {
                      f.cancelScroll();
                      var d = n(c || t, u || {}),
                        v =
                          "[object Number]" ===
                          Object.prototype.toString.call(o),
                        h = v || !o.tagName ? null : o;
                      if (v || h) {
                        var p = e.pageYOffset;
                        d.header &&
                          !l &&
                          (l = document.querySelector(d.header));
                        var E,
                          g,
                          w,
                          y,
                          b,
                          L,
                          A,
                          S,
                          O = (function (t) {
                            return t
                              ? ((n = t),
                                parseInt(e.getComputedStyle(n).height, 10) +
                                  t.offsetTop)
                              : 0;
                            var n;
                          })(l),
                          C = v
                            ? o
                            : (function (t, n, o, a) {
                                var r = 0;
                                if (t.offsetParent)
                                  for (
                                    ;
                                    (r += t.offsetTop), (t = t.offsetParent);

                                  );
                                return (
                                  (r = Math.max(r - n - o, 0)),
                                  a && (r = Math.min(r, i() - e.innerHeight)),
                                  r
                                );
                              })(
                                h,
                                O,
                                parseInt(
                                  "function" == typeof d.offset
                                    ? d.offset(o, s)
                                    : d.offset,
                                  10
                                ),
                                d.clip
                              ),
                          M = C - p,
                          T = i(),
                          q = 0,
                          x =
                            ((E = M),
                            (w = (g = d).speedAsDuration
                              ? g.speed
                              : Math.abs((E / 1e3) * g.speed)),
                            g.durationMax && w > g.durationMax
                              ? g.durationMax
                              : g.durationMin && w < g.durationMin
                              ? g.durationMin
                              : parseInt(w, 10)),
                          N = function (t) {
                            var n, i, u;
                            y || (y = t),
                              (q += t - y),
                              (L =
                                p +
                                M *
                                  ((i = b =
                                    1 < (b = 0 === x ? 0 : q / x) ? 1 : b),
                                  "easeInQuad" === (n = d).easing &&
                                    (u = i * i),
                                  "easeOutQuad" === n.easing &&
                                    (u = i * (2 - i)),
                                  "easeInOutQuad" === n.easing &&
                                    (u =
                                      i < 0.5
                                        ? 2 * i * i
                                        : (4 - 2 * i) * i - 1),
                                  "easeInCubic" === n.easing && (u = i * i * i),
                                  "easeOutCubic" === n.easing &&
                                    (u = --i * i * i + 1),
                                  "easeInOutCubic" === n.easing &&
                                    (u =
                                      i < 0.5
                                        ? 4 * i * i * i
                                        : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                          1),
                                  "easeInQuart" === n.easing &&
                                    (u = i * i * i * i),
                                  "easeOutQuart" === n.easing &&
                                    (u = 1 - --i * i * i * i),
                                  "easeInOutQuart" === n.easing &&
                                    (u =
                                      i < 0.5
                                        ? 8 * i * i * i * i
                                        : 1 - 8 * --i * i * i * i),
                                  "easeInQuint" === n.easing &&
                                    (u = i * i * i * i * i),
                                  "easeOutQuint" === n.easing &&
                                    (u = 1 + --i * i * i * i * i),
                                  "easeInOutQuint" === n.easing &&
                                    (u =
                                      i < 0.5
                                        ? 16 * i * i * i * i * i
                                        : 1 + 16 * --i * i * i * i * i),
                                  n.customEasing && (u = n.customEasing(i)),
                                  u || i)),
                              e.scrollTo(0, Math.floor(L)),
                              (function (t, n) {
                                var i = e.pageYOffset;
                                if (
                                  t == n ||
                                  i == n ||
                                  (p < n && e.innerHeight + i) >= T
                                )
                                  return (
                                    f.cancelScroll(!0),
                                    a(o, n, v),
                                    r("scrollStop", d, o, s),
                                    !(m = y = null)
                                  );
                              })(L, C) ||
                                ((m = e.requestAnimationFrame(N)), (y = t));
                          };
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                          (A = o),
                          (S = d),
                          v ||
                            (history.pushState &&
                              S.updateURL &&
                              history.pushState(
                                {
                                  smoothScroll: JSON.stringify(S),
                                  anchor: A.id,
                                },
                                document.title,
                                A === document.documentElement
                                  ? "#top"
                                  : "#" + A.id
                              )),
                          "matchMedia" in e &&
                          e.matchMedia("(prefers-reduced-motion)").matches
                            ? a(o, Math.floor(C), !1)
                            : (r("scrollStart", d, o, s),
                              f.cancelScroll(!0),
                              e.requestAnimationFrame(N));
                      }
                    },
                  },
                  v = function (t) {
                    if (
                      !t.defaultPrevented &&
                      !(
                        0 !== t.button ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey
                      ) &&
                      "closest" in t.target &&
                      (d = t.target.closest(s)) &&
                      "a" === d.tagName.toLowerCase() &&
                      !t.target.closest(c.ignore) &&
                      d.hostname === e.location.hostname &&
                      d.pathname === e.location.pathname &&
                      /#/.test(d.href)
                    ) {
                      var n, i;
                      try {
                        n = o(decodeURIComponent(d.hash));
                      } catch (t) {
                        n = o(d.hash);
                      }
                      if ("#" === n) {
                        if (!c.topOnEmptyHash) return;
                        i = document.documentElement;
                      } else i = document.querySelector(n);
                      (i = i || "#top" !== n ? i : document.documentElement) &&
                        (t.preventDefault(),
                        (function (t) {
                          if (
                            history.replaceState &&
                            t.updateURL &&
                            !history.state
                          ) {
                            var n = e.location.hash;
                            (n = n || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(t),
                                  anchor: n || e.pageYOffset,
                                },
                                document.title,
                                n || e.location.href
                              );
                          }
                        })(c),
                        f.animateScroll(i, d));
                    }
                  },
                  h = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(c)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          o(history.state.anchor)
                        ))) ||
                        f.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                return (
                  (f.destroy = function () {
                    c &&
                      (document.removeEventListener("click", v, !1),
                      e.removeEventListener("popstate", h, !1),
                      f.cancelScroll(),
                      (m = l = d = c = null));
                  }),
                  (function () {
                    if (
                      !(
                        "querySelector" in document &&
                        "addEventListener" in e &&
                        "requestAnimationFrame" in e &&
                        "closest" in e.Element.prototype
                      )
                    )
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    f.destroy(),
                      (c = n(t, u || {})),
                      (l = c.header ? document.querySelector(c.header) : null),
                      document.addEventListener("click", v, !1),
                      c.updateURL &&
                        c.popstate &&
                        e.addEventListener("popstate", h, !1);
                  })(),
                  f
                );
              };
            })(i);
          }.apply(t, [])),
          void 0 === o || (e.exports = o);
      },
    },
    t = {};
  function n(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var a = (t[o] = { exports: {} });
    return e[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      n(598);
      const e = {
        windowEl: window,
        documentEl: document,
        htmlEl: document.documentElement,
        bodyEl: document.body,
      };
      var t, o, i, a, r, s, u, c;
      (r =
        null === (t = document) || void 0 === t
          ? void 0
          : t.querySelector("[data-burger]")),
        (s =
          null === (o = document) || void 0 === o
            ? void 0
            : o.querySelector("[data-menu]")),
        (u =
          null === (i = document) || void 0 === i
            ? void 0
            : i.querySelectorAll("[data-menu-item]")),
        (c =
          null === (a = document) || void 0 === a
            ? void 0
            : a.querySelector("[data-menu-overlay]")),
        null == r ||
          r.addEventListener("click", function (e) {
            null == r || r.classList.toggle("burger--active"),
              null == s || s.classList.toggle("menu--active"),
              null != s && s.classList.contains("menu--active")
                ? (null == r || r.setAttribute("aria-expanded", "true"),
                  null == r || r.setAttribute("aria-label", "Закрыть меню"))
                : (null == r || r.setAttribute("aria-expanded", "false"),
                  null == r || r.setAttribute("aria-label", "Открыть меню"));
          }),
        null == c ||
          c.addEventListener("click", function () {
            null == r || r.setAttribute("aria-expanded", "false"),
              null == r || r.setAttribute("aria-label", "Открыть меню"),
              r.classList.remove("burger--active"),
              s.classList.remove("menu--active");
          }),
        null == u ||
          u.forEach(function (e) {
            e.addEventListener("click", function () {
              null == r || r.setAttribute("aria-expanded", "false"),
                null == r || r.setAttribute("aria-label", "Открыть меню"),
                r.classList.remove("burger--active"),
                s.classList.remove("menu--active");
            });
          });
      var d,
        l = n(2),
        m = n.n(l);
      console.log(
        ((d = navigator.userAgent || navigator.vendor || window.opera),
        /android/i.test(d)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(d) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown")
      ),
        new (m())('a[href*="#"]'),
        n(755);
    })();
})();
