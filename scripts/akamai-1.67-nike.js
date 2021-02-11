console.log("We are injecting a custom script");
alert("Custom Akamai script injected")

var _cf = _cf || [],
  bmak = bmak && bmak.hasOwnProperty("ver") && bmak.hasOwnProperty("sed") ? bmak : {
    ver: 1.67,
    ke_cnt_lmt: 150,
    mme_cnt_lmt: 100,
    mduce_cnt_lmt: 75,
    pme_cnt_lmt: 25,
    pduce_cnt_lmt: 25,
    tme_cnt_lmt: 25,
    tduce_cnt_lmt: 25,
    doe_cnt_lmt: 10,
    dme_cnt_lmt: 10,
    vc_cnt_lmt: 100,
    doa_throttle: 0,
    dma_throttle: 0,
    session_id: "default_session",
    js_post: !1,
    loc: "",
    cf_url: "https:" === document.location.protocol ? "https://" : "http://",
    params_url: ("https:" === document.location.protocol ? "https://" : "http://") + document.location.hostname + "/get_params",
    auth: "",
    api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
    aj_lmt_doact: 1,
    aj_lmt_dmact: 1,
    aj_lmt_tact: 1,
    ce_js_post: 0,
    init_time: 0,
    informinfo: "",
    prevfid: -1,
    fidcnt: 0,
    sensor_data: 0,
    ins: null,
    cns: null,
    enGetLoc: 0,
    enReadDocUrl: 1,
    disFpCalOnTimeout: 0,
    xagg: -1,
    pen: -1,
    brow: "",
    browver: "",
    psub: "-",
    lang: "-",
    prod: "-",
    plen: -1,
    doadma_en: 0,
    sdfn: [],
    d2: 0,
    d3: 0,
    thr: 0,
    cs: "0a46G5m17Vrp4o4c",
    hn: "unk",
    z1: 0,
    o9: 0,
    vc: "",
    y1: 2016,
    ta: 0,
    tst: -1,
    t_tst: 0,
    ckie: "_abck",
    n_ck: "0",
    ckurl: 0,
    bm: !1,
    mr: "-1",
    altFonts: !1,
    rst: !1,
    runFonts: !1,
    fsp: !1,
    firstLoad: !0,
    pstate: !1,
    mn_mc_lmt: 10,
    mn_state: 0,
    mn_mc_indx: 0,
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_rt: 0,
    mn_wt: 0,
    mn_abck: "",
    mn_psn: "",
    mn_ts: "",
    mn_lg: [],
    loap: 1,
    dcs: 0,
    ir: function() {
      bmak.start_ts = Date.now ? Date.now() : +new Date(), bmak.kact = "", bmak.ke_cnt = 0, bmak.ke_vel = 0, bmak.mact = "", bmak.mme_cnt = 0, bmak.mduce_cnt = 0, bmak.me_vel = 0, bmak.pact = "", bmak.pme_cnt = 0, bmak.pduce_cnt = 0, bmak.pe_vel = 0, bmak.tact = "", bmak.tme_cnt = 0, bmak.tduce_cnt = 0, bmak.te_vel = 0, bmak.doact = "", bmak.doe_cnt = 0, bmak.doe_vel = 0, bmak.dmact = "", bmak.dme_cnt = 0, bmak.dme_vel = 0, bmak.vcact = "", bmak.vc_cnt = 0, bmak.aj_indx = 0, bmak.aj_ss = 0, bmak.aj_type = -1, bmak.aj_indx_doact = 0, bmak.aj_indx_dmact = 0, bmak.aj_indx_tact = 0, bmak.me_cnt = 0, bmak.pe_cnt = 0, bmak.te_cnt = 0, bmak.nav_perm = "", bmak.brv = 0, bmak.hbCalc = !1, bmak.fmh = "", bmak.fmz = "", bmak.ssh = "", bmak.wv = "", bmak.wr = "", bmak.weh = "", bmak.wl = 0;
    },
    get_cf_date: function() {
      return Date.now ? Date.now() : +new Date();
    },
    sd_debug: function(a) {
      if (!bmak.js_post) {
        var t = a;
        "string" == typeof _sd_trace ? _sd_trace += t : _sd_trace = t;
      }
    },
    pi: function(a) {
      return parseInt(a);
    },
    uar: function() {
      return window.navigator.userAgent.replace(/\\|"/g, "");
    },
    gd: function() {
      var a = bmak.uar(),
        t = "" + bmak.ab(a),
        e = bmak.start_ts / 2,
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;

      try {
        n = window.screen ? window.screen.availWidth : -1;
      } catch (a) {
        n = -1;
      }

      try {
        o = window.screen ? window.screen.availHeight : -1;
      } catch (a) {
        o = -1;
      }

      try {
        m = window.screen ? window.screen.width : -1;
      } catch (a) {
        m = -1;
      }

      try {
        r = window.screen ? window.screen.height : -1;
      } catch (a) {
        r = -1;
      }

      try {
        i = window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1);
      } catch (a) {
        i = -1;
      }

      try {
        c = window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1);
      } catch (a) {
        c = -1;
      }

      try {
        b = "outerWidth" in window && void 0 !== window.outerWidth ? window.outerWidth : -1;
      } catch (a) {
        b = -1;
      }

      bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
      var d = Math.random(),
        k = bmak.pi(1e3 * d / 2),
        s = d + "";
      return s = s.slice(0, 11) + k, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), a + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + t + "," + s + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
    },
    get_browser: function() {
      navigator.productSub && (bmak.psub = navigator.productSub), navigator.language && (bmak.lang = navigator.language), navigator.product && (bmak.prod = navigator.product), bmak.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
    },
    gbrv: function() {
      navigator.brave && navigator.brave.isBrave().then(function(a) {
        bmak.brv = a ? 1 : 0;
      }).catch(function(a) {
        bmak.brv = 0;
      });
    },
    bc: function() {
      var a = window.addEventListener ? 1 : 0,
        t = window.XMLHttpRequest ? 1 : 0,
        e = window.XDomainRequest ? 1 : 0,
        n = window.emit ? 1 : 0,
        o = window.DeviceOrientationEvent ? 1 : 0,
        m = window.DeviceMotionEvent ? 1 : 0,
        r = window.TouchEvent ? 1 : 0,
        i = window.spawn ? 1 : 0,
        c = window.chrome ? 1 : 0,
        b = Function.prototype.bind ? 1 : 0,
        d = window.Buffer ? 1 : 0,
        k = window.PointerEvent ? 1 : 0;

      try {
        var s = window.innerWidth ? 1 : 0;
      } catch (a) {
        var s = 0;
      }

      try {
        var l = window.outerWidth ? 1 : 0;
      } catch (a) {
        var l = 0;
      }

      bmak.xagg = a + (t << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (s << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (k << 13);
    },
    bmisc: function() {
      bmak.pen = window._phantom ? 1 : 0, bmak.wen = window.webdriver ? 1 : 0, bmak.den = window.domAutomation ? 1 : 0;
    },
    bd: function() {
      var a = [],
        t = window.callPhantom ? 1 : 0;
      a.push(",cpen:" + t);
      var e = 0;
      window.ActiveXObject && "ActiveXObject" in window && (e = 1), a.push("i1:" + e);
      var n = "number" == typeof document.documentMode ? 1 : 0;
      a.push("dm:" + n);
      var o = window.chrome && window.chrome.webstore ? 1 : 0;
      a.push("cwen:" + o);
      var m = navigator.onLine ? 1 : 0;
      a.push("non:" + m);
      var r = window.opera ? 1 : 0;
      a.push("opc:" + r);
      var i = "undefined" != typeof InstallTrigger ? 1 : 0;
      a.push("fc:" + i);
      var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
      a.push("sc:" + c);
      var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
      a.push("wrc:" + b);
      var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
      a.push("isc:" + d), bmak.d2 = bmak.pi(bmak.z1 / 23);
      var k = "function" == typeof navigator.vibrate ? 1 : 0;
      a.push("vib:" + k);
      var s = "function" == typeof navigator.getBattery ? 1 : 0;
      a.push("bat:" + s);
      var l = Array.prototype.forEach ? 0 : 1;
      a.push("x11:" + l);
      var u = "FileReader" in window ? 1 : 0;
      return a.push("x12:" + u), a.join(",");
    },
    fas: function() {
      try {
        return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
      } catch (a) {
        return 0;
      }
    },
    getmr: function() {
      try {
        if ("undefined" == typeof performance || void 0 === performance.now || "undefined" == typeof JSON) return void(bmak.mr = "undef");

        for (var a = "", t = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
          var o = [],
            m = 0,
            r = performance.now(),
            i = 0,
            c = 0;

          if (void 0 !== e[n]) {
            for (i = 0; i < t && m < .6; i++) {
              for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);

              var k = performance.now();
              o.push(Math.round(1e3 * (k - b))), m = k - r;
            }

            var s = o.sort();
            c = s[Math.floor(s.length / 2)] / 5;
          }

          a = a + c + ",";
        }

        bmak.mr = a;
      } catch (a) {
        bmak.mr = "exception";
      }
    },
    sed: function() {
      var a;
      a = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "1" : "0";
      var t;
      t = null != window.document.documentElement.getAttribute("webdriver") ? "1" : "0";
      var e;
      e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
      var n;
      n = void 0 !== window.webdriver ? "1" : "0";
      var o;
      o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
      var m;
      m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
      var r;
      return r = null != window.document.documentElement.getAttribute("selenium") ? "1" : "0", [a, t, e, n, o, m, r].join(",");
    },
    cma: function(a, t) {
      try {
        if (1 == t && bmak.mme_cnt < bmak.mme_cnt_lmt || 1 != t && bmak.mduce_cnt < bmak.mduce_cnt_lmt) {
          var e = a || window.event,
            n = -1,
            o = -1;
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = e.toElement;
          null == m && (m = e.target);
          var r = bmak.gf(m),
            i = bmak.get_cf_date() - bmak.start_ts,
            c = bmak.me_cnt + "," + t + "," + i + "," + n + "," + o;

          if (1 != t) {
            c = c + "," + r;
            var b = void 0 !== e.which ? e.which : e.button;
            null != b && 1 != b && (c = c + "," + b);
          }

          void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ",it0"), c += ";", bmak.me_vel = bmak.me_vel + bmak.me_cnt + t + i + n + o, bmak.mact = bmak.mact + c, bmak.ta += i;
        }

        1 == t ? bmak.mme_cnt++ : bmak.mduce_cnt++, bmak.me_cnt++, bmak.js_post && 3 == t && (bmak.aj_type = 1, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (a) {}
    },
    x2: function() {
      var a = bmak.ff,
        t = a(98) + a(109) + a(97) + a(107),
        e = a(103) + a(101) + a(116) + a(95) + a(99) + a(102) + a(95) + a(100) + a(97) + a(116) + a(101),
        n = window[t][e],
        o = 0;
      return "function" == typeof n && (o = n()), o;
    },
    np: function() {
      var a = [],
        t = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

      try {
        if (!navigator.permissions) return void(bmak.nav_perm = 6);
        bmak.nav_perm = 8;

        var e = function(t, e) {
            return navigator.permissions.query({
              name: t
            }).then(function(t) {
              switch (t.state) {
                case "prompt":
                  a[e] = 1;
                  break;

                case "granted":
                  a[e] = 2;
                  break;

                case "denied":
                  a[e] = 0;
                  break;

                default:
                  a[e] = 5;
              }
            }).catch(function(t) {
              a[e] = -1 !== t.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
            });
          },
          n = t.map(function(a, t) {
            return e(a, t);
          });

        Promise.all(n).then(function() {
          bmak.nav_perm = a.join("");
        });
      } catch (a) {
        bmak.nav_perm = 7;
      }
    },
    cpa: function(a, t) {
      try {
        var e = !1;

        if (1 == t && bmak.pme_cnt < bmak.pme_cnt_lmt || 1 != t && bmak.pduce_cnt < bmak.pduce_cnt_lmt) {
          var n = a || window.event;

          if (n && "mouse" != n.pointerType) {
            e = !0;
            var o = -1,
              m = -1;
            n && n.pageX && n.pageY ? (o = Math.floor(n.pageX), m = Math.floor(n.pageY)) : n && n.clientX && n.clientY && (o = Math.floor(n.clientX), m = Math.floor(n.clientY));
            var r = bmak.get_cf_date() - bmak.start_ts,
              i = bmak.pe_cnt + "," + t + "," + r + "," + o + "," + m;
            void 0 !== n.isTrusted && !1 === n.isTrusted && (i += ",0"), bmak.pe_vel = bmak.pe_vel + bmak.pe_cnt + t + r + o + m, bmak.pact = bmak.pact + i + ";", bmak.ta += r, 1 == t ? bmak.pme_cnt++ : bmak.pduce_cnt++;
          }
        }

        1 == t ? bmak.pme_cnt++ : bmak.pduce_cnt++, bmak.pe_cnt++, bmak.js_post && 3 == t && e && (bmak.aj_type = 2, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (a) {}
    },
    ab: function(a) {
      if (null == a) return -1;

      try {
        for (var t = 0, e = 0; e < a.length; e++) {
          var n = a.charCodeAt(e);
          n < 128 && (t += n);
        }

        return t;
      } catch (a) {
        return -2;
      }
    },
    ff: function(a) {
      return String.fromCharCode(a);
    },
    cal_dis: function(a) {
      var t = a[0] - a[1],
        e = a[2] - a[3],
        n = a[4] - a[5],
        o = Math.sqrt(t * t + e * e + n * n);
      return Math.floor(o);
    },
    to: function() {
      var a = bmak.x2() % 1e7;
      bmak.d3 = a;

      for (var t = a, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
        var o = bmak.pi(a / Math.pow(10, n)) % 10,
          m = o + 1;
        op = bmak.cc(o), t = op(t, m);
      }

      bmak.o9 = t * e;
    },
    jrs: function(a) {
      for (var t = Math.floor(1e5 * Math.random() + 1e4), e = String(a * t), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;

      return [t, bmak.cal_dis(o)];
    },
    fm: function() {
      var a = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"],
        t = document.createElement("span");
      t.innerHTML = "mmmmmmmmlli", t.style.fontSize = "192px";
      var e = "",
        n = document.getElementsByTagName("body")[0];

      if (n) {
        for (var o in a) t.style.fontFamily = a[o], n.appendChild(t), e += a[o] + ":" + t.offsetWidth + "," + t.offsetHeight + ";", n.removeChild(t);

        bmak.fmh = bmak.ats(bmak.mn_s(e));
      } else bmak.fmh = "";

      bmak.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    },
    wgl: function() {},
    csh: function() {
      if (window.speechSynthesis) {
        var a = window.speechSynthesis.getVoices();

        if (a.length > 0) {
          for (var t = "", e = 0; e < a.length; e++) t += a[e].voiceURI + "_" + a[e].lang;

          bmak.ssh = bmak.ats(bmak.mn_s(t));
        } else bmak.ssh = "0";
      } else bmak.ssh = "n";
    },
    gf: function(a) {
      var t;
      if (t = null == a ? document.activeElement : a, null == document.activeElement) return -1;
      var e = t.getAttribute("name");

      if (null == e) {
        var n = t.getAttribute("id");
        return null == n ? -1 : bmak.ab(n);
      }

      return bmak.ab(e);
    },
    cc: function(a) {
      var t = a % 4;
      2 == t && (t = 3);

      var e = 42 + t,
        n = function(a, t) {
          return 0;
        };

      if (42 == e) var n = function(a, t) {
        return a * t;
      };
      else if (43 == e) var n = function(a, t) {
        return a + t;
      };
      else var n = function(a, t) {
        return a - t;
      };
      return n;
    },
    isIgn: function(a) {
      var t = document.activeElement;
      if (null == document.activeElement) return 0;
      var e = t.getAttribute("type");
      return 1 == (null == e ? -1 : bmak.get_type(e)) && bmak.fidcnt > 12 && -2 == a ? 1 : 0;
    },
    cka: function(a, t) {
      try {
        var e = a || window.event,
          n = -1,
          o = 1;

        if (bmak.ke_cnt < bmak.ke_cnt_lmt && e) {
          n = e.keyCode;
          var m = e.charCode,
            r = e.shiftKey ? 1 : 0,
            i = e.ctrlKey ? 1 : 0,
            c = e.metaKey ? 1 : 0,
            b = e.altKey ? 1 : 0,
            d = 8 * r + 4 * i + 2 * c + b,
            k = bmak.get_cf_date() - bmak.start_ts,
            s = bmak.gf(null),
            l = 0;
          m && n && (n = 0 != m && 0 != n && m != n ? -1 : 0 != n ? n : m), 0 == i && 0 == c && 0 == b && n >= 32 && (n = 3 == t && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2), s != bmak.prevfid ? (bmak.fidcnt = 0, bmak.prevfid = s) : bmak.fidcnt = bmak.fidcnt + 1;

          if (0 == bmak.isIgn(n)) {
            var u = bmak.ke_cnt + "," + t + "," + k + "," + n + "," + l + "," + d + "," + s;
            void 0 !== e.isTrusted && !1 === e.isTrusted && (u += ",0"), u += ";", bmak.kact = bmak.kact + u, bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + t + k + n + d + s, bmak.ta += k;
          } else o = 0;
        }

        o && e && bmak.ke_cnt++, !bmak.js_post || 1 != t || 13 != n && 9 != n || (bmak.aj_type = 3, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (a) {}
    },
    cta: function(a, t) {
      try {
        if (1 == t && bmak.tme_cnt < bmak.tme_cnt_lmt || 1 != t && bmak.tduce_cnt < bmak.tduce_cnt_lmt) {
          var e = a || window.event,
            n = -1,
            o = -1;
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = bmak.get_cf_date() - bmak.start_ts,
            r = bmak.te_cnt + "," + t + "," + m + "," + n + "," + o;
          void 0 !== e.isTrusted && !1 === e.isTrusted && (r += ",0"), bmak.tact = bmak.tact + r + ";", bmak.ta += m, bmak.te_vel = bmak.te_vel + bmak.te_cnt + t + m + n + o, bmak.doa_throttle = 0, bmak.dma_throttle = 0;
        }

        1 == t ? bmak.tme_cnt++ : bmak.tduce_cnt++, bmak.te_cnt++, bmak.js_post && 2 == t && bmak.aj_indx_tact < bmak.aj_lmt_tact && (bmak.aj_type = 5, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_tact++);
      } catch (a) {}
    },
    getFloatVal: function(a) {
      try {
        if (-1 != bmak.chknull(a) && !isNaN(a)) {
          var t = parseFloat(a);
          if (!isNaN(t)) return t.toFixed(2);
        }
      } catch (a) {}

      return -1;
    },
    cdoa: function(a) {
      try {
        if (bmak.doe_cnt < bmak.doe_cnt_lmt && bmak.doa_throttle < 2 && a) {
          var t = bmak.get_cf_date() - bmak.start_ts,
            e = bmak.getFloatVal(a.alpha),
            n = bmak.getFloatVal(a.beta),
            o = bmak.getFloatVal(a.gamma),
            m = bmak.doe_cnt + "," + t + "," + e + "," + n + "," + o;
          void 0 !== a.isTrusted && !1 === a.isTrusted && (m += ",0"), bmak.doact = bmak.doact + m + ";", bmak.ta += t, bmak.doe_vel = bmak.doe_vel + bmak.doe_cnt + t, bmak.doe_cnt++;
        }

        bmak.js_post && bmak.doe_cnt > 1 && bmak.aj_indx_doact < bmak.aj_lmt_doact && (bmak.aj_type = 6, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_doact++), bmak.doa_throttle++;
      } catch (a) {}
    },
    cdma: function(a) {
      try {
        if (bmak.dme_cnt < bmak.dme_cnt_lmt && bmak.dma_throttle < 2 && a) {
          var t = bmak.get_cf_date() - bmak.start_ts,
            e = -1,
            n = -1,
            o = -1;
          a.acceleration && (e = bmak.getFloatVal(a.acceleration.x), n = bmak.getFloatVal(a.acceleration.y), o = bmak.getFloatVal(a.acceleration.z));
          var m = -1,
            r = -1,
            i = -1;
          a.accelerationIncludingGravity && (m = bmak.getFloatVal(a.accelerationIncludingGravity.x), r = bmak.getFloatVal(a.accelerationIncludingGravity.y), i = bmak.getFloatVal(a.accelerationIncludingGravity.z));
          var c = -1,
            b = -1,
            d = 1;
          a.rotationRate && (c = bmak.getFloatVal(a.rotationRate.alpha), b = bmak.getFloatVal(a.rotationRate.beta), d = bmak.getFloatVal(a.rotationRate.gamma));
          var k = bmak.dme_cnt + "," + t + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d;
          void 0 !== a.isTrusted && !1 === a.isTrusted && (k += ",0"), bmak.dmact = bmak.dmact + k + ";", bmak.ta += t, bmak.dme_vel = bmak.dme_vel + bmak.dme_cnt + t, bmak.dme_cnt++;
        }

        bmak.js_post && bmak.dme_cnt > 1 && bmak.aj_indx_dmact < bmak.aj_lmt_dmact && (bmak.aj_type = 7, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_dmact++), bmak.dma_throttle++;
      } catch (a) {}
    },
    get_type: function(a) {
      return a = a.toLowerCase(), "text" == a || "search" == a || "url" == a || "email" == a || "tel" == a || "number" == a ? 0 : "password" == a ? 1 : 2;
    },
    chknull: function(a) {
      return null == a ? -1 : a;
    },
    getforminfo: function() {
      for (var a = "", t = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
        var m = e[o],
          r = bmak.ab(m.getAttribute("name")),
          i = bmak.ab(m.getAttribute("id")),
          c = m.getAttribute("required"),
          b = null == c ? 0 : 1,
          d = m.getAttribute("type"),
          k = null == d ? -1 : bmak.get_type(d),
          s = m.getAttribute("autocomplete");
        null == s ? n = -1 : (s = s.toLowerCase(), n = "off" == s ? 0 : "on" == s ? 1 : 2);
        var l = m.defaultValue,
          u = m.value,
          _ = 0,
          f = 0;
        l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != k && (a = a + k + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), t = t + _ + ";";
      }

      return null == bmak.ins && (bmak.ins = t), bmak.cns = t, a;
    },
    startdoadma: function() {
      0 == bmak.doadma_en && window.addEventListener && (window.addEventListener("deviceorientation", bmak.cdoa, !0), window.addEventListener("devicemotion", bmak.cdma, !0), bmak.doadma_en = 1), bmak.doa_throttle = 0, bmak.dma_throttle = 0;
    },
    updatet: function() {
      return bmak.get_cf_date() - bmak.start_ts;
    },
    htm: function(a) {
      bmak.cta(a, 1);
    },
    hts: function(a) {
      bmak.cta(a, 2);
    },
    hte: function(a) {
      bmak.cta(a, 3);
    },
    htc: function(a) {
      bmak.cta(a, 4);
    },
    hmm: function(a) {
      bmak.cma(a, 1);
    },
    hc: function(a) {
      bmak.cma(a, 2);
    },
    hmd: function(a) {
      bmak.cma(a, 3);
    },
    hmu: function(a) {
      bmak.cma(a, 4);
    },
    hpd: function(a) {
      bmak.cpa(a, 3);
    },
    hpu: function(a) {
      bmak.cpa(a, 4);
    },
    hkd: function(a) {
      bmak.cka(a, 1);
    },
    hku: function(a) {
      bmak.cka(a, 2);
    },
    hkp: function(a) {
      bmak.cka(a, 3);
    },
    form_submit: function() {
      try {
        if (bmak.bpd(), 0 == bmak.sdfn.length) {
          if (document.getElementById("bm-telemetry") && (document.getElementById("bm-telemetry").value = bmak.sensor_data), void 0 !== document.getElementsByName("bm-telemetry"))
            for (var a = document.getElementsByName("bm-telemetry"), t = 0; t < a.length; t++) a[t].value = bmak.sensor_data;
        } else
          for (var t = 0; t < bmak.sdfn.length; t++) document.getElementById(bmak.sdfn[t]) && (document.getElementById(bmak.sdfn[t]).value = bmak.sensor_data);
      } catch (a) {
        bmak.sd_debug(",s7:" + a + "," + bmak.sensor_data);
      }
    },
    get_telemetry: function() {
      return bmak.bpd(), bmak.ir(), bmak.sensor_data;
    },
    getdurl: function() {
      return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, "") : "";
    },
    x1: function() {
      return Math.floor(16777216 * (1 + Math.random())).toString(36);
    },
    gck: function() {
      var a = bmak.x1() + bmak.x1() + bmak.x1() + bmak.x1();
      return bmak.set_cookie(bmak.ckie, a + "_" + bmak.ab(a)), a;
    },
    set_cookie: function(a, t) {
      void 0 !== document.cookie && (document.cookie = a + "=" + t + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;");
    },
    get_cookie: function() {
      var a = "0";

      try {
        var a = bmak.cookie_chk_read(bmak.ckie);
        a || (bmak.n_ck = 1, a = bmak.bm ? "2" : "1");
      } catch (a) {}

      return a;
    },
    cookie_chk_read: function(a) {
      if (document.cookie)
        for (var t = a + "=", e = document.cookie.split("; "), n = 0; n < e.length; n++) {
          var o = e[n];

          if (0 === o.indexOf(t)) {
            var m = o.substring(t.length, o.length);
            if (-1 != m.indexOf("~") || -1 != decodeURIComponent(m).indexOf("~")) return m;
          }
        }
      return !1;
    },
    bpd: function() {
      bmak.sd_debug("<bpd>");
      var a = 0;

      try {
        a = bmak.get_cf_date();
        var t = bmak.updatet(),
          e = "3";
        bmak.ckie && (e = bmak.get_cookie());
        var n = bmak.gd(),
          o = window.DeviceOrientationEvent ? "do_en" : "do_dis",
          m = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
          r = window.TouchEvent ? "t_en" : "t_dis",
          i = o + "," + m + "," + r,
          c = bmak.getforminfo(),
          b = bmak.getdurl(),
          d = bmak.aj_type + "," + bmak.aj_indx;
        !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();

        var k = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel,
          s = bmak.ff,
          l = s(80) + s(105) + s(90) + s(116) + s(69),
          u = bmak.jrs(bmak.start_ts),
          _ = bmak.get_cf_date() - bmak.start_ts,
          f = bmak.pi(bmak.d2 / 6),
          p = bmak.fas(),
          h = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, k, t, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1]],
          v = h.join(","),
          g = "" + bmak.ab(bmak.fpcf.fpValstr);

        bmak.firstLoad ? bmak.np() : bmak.csh(), !bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0) && (bmak.fm(), bmak.wgl(), bmak.hbCalc = !0);
        var w = "";
        bmak.hbCalc && (w = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl);
        var y = bmak.sed(),
          C = bmak.mn_get_current_challenges(),
          S = "",
          E = "",
          M = "";

        if (void 0 !== C[1]) {
          var j = C[1];
          void 0 !== bmak.mn_r[j] && (S = bmak.mn_r[j]);
        }

        if (void 0 !== C[2]) {
          var x = C[2];
          void 0 !== bmak.mn_r[x] && (E = bmak.mn_r[x]);
        }

        if (void 0 !== C[3]) {
          var A = C[3];
          void 0 !== bmak.mn_r[A] && (M = bmak.mn_r[A]);
        }

        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + v + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + y + "-1,2,-94,-123," + S + "-1,2,-94,-124," + E + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmak.nav_perm;
        var L = 24 ^ bmak.ab(bmak.sensor_data);
        bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + g + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + L + "-1,2,-94,-129," + w + "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10));
      } catch (a) {
        var P = "";

        try {
          a.stack && "string" == typeof a.stack ? P = a.stack.replace(/\"/g, "\\'") : "string" == typeof a && (P = a.replace(/\"/g, "\\'")), P = P.slice(0, 1e3), bmak.sd_debug(",s2:" + P), bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + bmak.uar() + "-1,2,-94,-120," + P;
        } catch (a) {
          a.stack && "string" == typeof a.stack ? P = a.stack.replace(/\"/g, "\\'") : "string" == typeof a && (P = a.replace(/\"/g, "\\'")), P = P.slice(0, 1e3), bmak.sd_debug(",s3:" + P), bmak.sensor_data = bmak.ver + bmak.sensor_data + ",s3:" + P;
        }
      }

      try {
        var T = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
          F = Math.floor(bmak.get_cf_date() / 36e5),
          D = bmak.get_cf_date(),
          B = T + bmak.od(F, T) + bmak.sensor_data;
        bmak.sensor_data = B + ";" + (bmak.get_cf_date() - a) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - D);
      } catch (a) {}

      bmak.sd_debug("</bpd>");
    },
    od: function(a, t) {
      try {
        a = String(a), t = String(t);
        var e = [],
          n = t.length;

        if (n > 0) {
          for (var o = 0; o < a.length; o++) {
            var m = a.charCodeAt(o),
              r = a.charAt(o),
              i = t.charCodeAt(o % n);
            m = bmak.rir(m, 47, 57, i), m != a.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r);
          }

          if (e.length > 0) return e.join("");
        }
      } catch (a) {}

      return a;
    },
    rir: function(a, t, e, n) {
      return a > t && a <= e && (a += n % (e - t)) > e && (a = a - e + t), a;
    },
    lvc: function(a) {
      try {
        if (bmak.vc_cnt < bmak.vc_cnt_lmt) {
          var t = bmak.get_cf_date() - bmak.start_ts,
            e = a + "," + t + ";";
          bmak.vcact = bmak.vcact + e;
        }

        bmak.vc_cnt++;
      } catch (a) {}
    },
    hvc: function() {
      try {
        var a = 1;
        document[bmak.hn] && (a = 0), bmak.lvc(a);
      } catch (a) {}
    },
    hb: function(a) {
      bmak.lvc(2);
    },
    hf: function(a) {
      bmak.lvc(3);
    },
    rve: function() {
      void 0 !== document.hidden ? (bmak.hn = "hidden", bmak.vc = "visibilitychange") : void 0 !== document.mozHidden ? (bmak.hn = "mozHidden", bmak.vc = "mozvisibilitychange") : void 0 !== document.msHidden ? (bmak.hn = "msHidden", bmak.vc = "msvisibilitychange") : void 0 !== document.webkitHidden && (bmak.hn = "webkitHidden", bmak.vc = "webkitvisibilitychange"), document.addEventListener ? "unk" != bmak.hn && document.addEventListener(bmak.vc, bmak.hvc, !0) : document.attachEvent && "unk" != bmak.hn && document.attachEvent(bmak.vc, bmak.hvc), window.onblur = bmak.hb, window.onfocus = bmak.hf;
    },
    startTracking: function() {
      bmak.startdoadma();

      try {
        bmak.to();
      } catch (a) {
        bmak.o9 = -654321;
      }

      setInterval(function() {
        bmak.startdoadma();
      }, 3e3), document.addEventListener ? (document.addEventListener("touchmove", bmak.htm, !0), document.addEventListener("touchstart", bmak.hts, !0), document.addEventListener("touchend", bmak.hte, !0), document.addEventListener("touchcancel", bmak.htc, !0), document.addEventListener("mousemove", bmak.hmm, !0), document.addEventListener("click", bmak.hc, !0), document.addEventListener("mousedown", bmak.hmd, !0), document.addEventListener("mouseup", bmak.hmu, !0), document.addEventListener("pointerdown", bmak.hpd, !0), document.addEventListener("pointerup", bmak.hpu, !0), document.addEventListener("keydown", bmak.hkd, !0), document.addEventListener("keyup", bmak.hku, !0), document.addEventListener("keypress", bmak.hkp, !0)) : document.attachEvent && (document.attachEvent("touchmove", bmak.htm), document.attachEvent("touchstart", bmak.hts), document.attachEvent("touchend", bmak.hte), document.attachEvent("touchcancel", bmak.htc), document.attachEvent("onmousemove", bmak.hmm), document.attachEvent("onclick", bmak.hc), document.attachEvent("onmousedown", bmak.hmd), document.attachEvent("onmouseup", bmak.hmu), document.attachEvent("onpointerdown", bmak.hpd), document.attachEvent("onpointerup", bmak.hpu), document.attachEvent("onkeydown", bmak.hkd), document.attachEvent("onkeyup", bmak.hku), document.attachEvent("onkeypress", bmak.hkp)), bmak.rve(), bmak.informinfo = bmak.getforminfo(), bmak.js_post && (bmak.aj_type = 0, bmak.bpd(), bmak.pd(!0)), bmak.firstLoad = !1;
    },
    gb: function(a, t) {
      var e = a.charCodeAt(t);
      return e = e > 255 ? 0 : e;
    },
    encode: function(a) {
      if ("undefined" != typeof btoa) return btoa(a);

      for (var t, e, n, o, m, r, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = 3 * Math.floor(a.length / 3), k = 0; k < d; k += 3) t = bmak.gb(a, k), e = bmak.gb(a, k + 1), n = bmak.gb(a, k + 2), o = t >> 2, m = ((3 & t) << 4) + (e >> 4), r = ((15 & e) << 2) + (n >> 6), i = 63 & n, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + c.charAt(i);

      return a.length % 3 == 1 && (t = bmak.gb(a, k), o = t >> 2, m = (3 & t) << 4, b = b + c.charAt(o) + c.charAt(m) + "=="), a.length % 3 == 2 && (t = bmak.gb(a, k), e = bmak.gb(a, k + 1), o = t >> 2, m = ((3 & t) << 4) + (e >> 4), r = (15 & e) << 2, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + "="), b;
    },
    ie9OrLower: function() {
      try {
        if ("string" == typeof navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE")) {
          if (parseFloat(navigator.appVersion.split("MSIE")[1]) <= 9) return !0;
        }
      } catch (a) {}

      return !1;
    },
    parse_gp: function(a) {},
    call_gp: function() {
      var a;
      void 0 !== window.XMLHttpRequest ? a = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (a = new XDomainRequest(), a.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : a = new ActiveXObject("Microsoft.XMLHTTP"), a.open("GET", bmak.params_url, !0), a.onreadystatechange = function() {
        a.readyState > 3 && bmak.parse_gp && bmak.parse_gp(a);
      }, a.send();
    },
    apicall: function(a, t) {
      var e;
      e = window.XDomainRequest ? new XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), e.open("POST", a, t);
      var n = bmak.encode(bmak.api_public_key + ":");
      bmak.auth = ",\"auth\" : \"" + n + "\"", e.setRequestHeader && (e.setRequestHeader("Content-type", "application/json"), e.setRequestHeader("Authorization", "Basic " + n), bmak.auth = "");
      var o = "{\"session_id\" : \"" + bmak.session_id + "\",\"sensor_data\" : \"" + bmak.sensor_data + "\"" + bmak.auth + "}";
      e.send(o);
    },
    apicall_bm: function(a, t, e) {
      var n;
      void 0 !== window.XMLHttpRequest ? n = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (n = new XDomainRequest(), n.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : n = new ActiveXObject("Microsoft.XMLHTTP"), n.open("POST", a, t), void 0 !== n.withCredentials && (n.withCredentials = !0);
      var o = "{\"sensor_data\":\"" + bmak.sensor_data + "\"}";
      n.onreadystatechange = function() {
        n.readyState > 3 && e && e(n);
      }, n.send(o), bmak.dcs = 0;
    },
    pd: function(a) {
      bmak.check_stop_protocol() ? (bmak.apicall_bm(bmak.cf_url, a, bmak.patp), bmak.aj_indx = bmak.aj_indx + 1) : bmak.loap && bmak.dcs && bmak.apicall_bm(bmak.cf_url, a, bmak.patp);
    },
    check_stop_protocol: function() {
      var a = bmak.get_stop_signals(),
        t = a[0];
      !bmak.rst && t > -1 && (bmak.ir(), bmak.rst = !0);
      var e = a[1];
      return -1 == e || bmak.aj_ss < e;
    },
    get_stop_signals: function() {
      var a = [-1, -1],
        t = bmak.cookie_chk_read(bmak.ckie);
      if (!1 !== t) try {
        var e = decodeURIComponent(t).split("~");

        if (e.length >= 4) {
          var n = bmak.pi(e[1]),
            o = bmak.pi(e[3]);
          n = isNaN(n) ? -1 : n, o = isNaN(o) ? -1 : o, a = [o, n];
        }
      } catch (a) {}
      return a;
    },
    patp: function(a) {
      bmak.aj_ss++, bmak.rst = !1;
    },
    get_mn_params_from_abck: function() {
      var a = [
        []
      ];

      try {
        var t = bmak.cookie_chk_read(bmak.ckie);

        if (!1 !== t) {
          var e = decodeURIComponent(t).split("~");

          if (e.length >= 5) {
            var n = e[0],
              o = e[4],
              m = o.split("||");
            if (m.length > 0)
              for (var r = 0; r < m.length; r++) {
                var i = m[r],
                  c = i.split("-");

                if (c.length >= 5) {
                  var b = bmak.pi(c[0]),
                    d = c[1],
                    k = bmak.pi(c[2]),
                    s = bmak.pi(c[3]),
                    l = bmak.pi(c[4]),
                    u = 1;
                  c.length >= 6 && (u = bmak.pi(c[5]));
                  var _ = [b, n, d, k, s, l, u];
                  2 == u ? a.splice(0, 0, _) : a.push(_);
                }
              }
          }
        }
      } catch (a) {}

      return a;
    },
    mn_get_current_challenges: function() {
      var a = bmak.get_mn_params_from_abck(),
        t = [];
      if (null != a)
        for (var e = 0; e < a.length; e++) {
          var n = a[e];

          if (n.length > 0) {
            var o = n[1] + n[2],
              m = n[6];
            t[m] = o;
          }
        }
      return t;
    },
    mn_update_challenge_details: function(a) {
      bmak.mn_sen = a[0], bmak.mn_abck = a[1], bmak.mn_psn = a[2], bmak.mn_cd = a[3], bmak.mn_tout = a[4], bmak.mn_stout = a[5], bmak.mn_ct = a[6], bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
    },
    mn_get_new_challenge_params: function(a) {
      var t = null,
        e = null,
        n = null;
      if (null != a)
        for (var o = 0; o < a.length; o++) {
          var m = a[o];

          if (m.length > 0) {
            for (var r = m[0], i = bmak.mn_abck + bmak.start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmak.mn_lcl && 1 == r && bmak.mn_lc[b] != i; b++);

            b == bmak.mn_lcl && (t = o, 2 == c && (e = o), 3 == c && (n = o));
          }
        }
      return null != n && bmak.pstate ? a[n] : null == e || bmak.pstate ? null == t || bmak.pstate ? null : a[t] : a[e];
    },
    mn_poll: function() {
      if (0 == bmak.mn_state) {
        var a = bmak.get_mn_params_from_abck(),
          t = bmak.mn_get_new_challenge_params(a);
        null != t && (bmak.mn_update_challenge_details(t), bmak.mn_sen && (bmak.mn_state = 1, bmak.mn_mc_indx = 0, bmak.mn_al = [], bmak.mn_il = [], bmak.mn_tcl = [], bmak.mn_lg = [], bmak.mn_rts = bmak.get_cf_date(), bmak.mn_rt = bmak.mn_rts - bmak.start_ts, bmak.mn_wt = 0, setTimeout(bmak.mn_w, bmak.mn_tout)));
      }
    },
    rotate_right: function(a, t) {
      return a >>> t | a << 32 - t;
    },
    encode_utf8: function(a) {
      return unescape(encodeURIComponent(a));
    },
    mn_s: function(a) {
      var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = bmak.encode_utf8(a),
        k = 8 * d.length;
      d += String.fromCharCode(128);

      for (var s = d.length / 4 + 2, l = Math.ceil(s / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);

        for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
      }

      var p = k / Math.pow(2, 32);
      u[l - 1][14] = Math.floor(p), u[l - 1][15] = k;

      for (var h = 0; h < l; h++) {
        for (var v, g = new Array(64), w = e, y = n, C = o, S = m, E = r, v = i, M = c, j = b, _ = 0; _ < 64; _++) {
          var x, A, L, P, T, F;
          _ < 16 ? g[_] = u[h][_] : (x = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, A = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + x + g[_ - 7] + A), A = bmak.rotate_right(E, 6) ^ bmak.rotate_right(E, 11) ^ bmak.rotate_right(E, 25), L = E & v ^ ~E & M, P = j + A + L + t[_] + g[_], x = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), T = w & y ^ w & C ^ y & C, F = x + T, j = M, M = v, v = E, E = S + P >>> 0, S = C, C = y, y = w, w = P + F >>> 0;
        }

        e += w, n += y, o += C, m += S, r += E, i += v, c += M, b += j;
      }

      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
    },
    mn_init: function() {
      var a = 200;
      bmak.pstate && (a = 100), setInterval(bmak.mn_poll, a);
    },
    bdm: function(a, t) {
      for (var e = 0, n = 0; n < a.length; ++n) e = (e << 8 | a[n]) >>> 0, e %= t;

      return e;
    },
    mn_w: function() {
      try {
        for (var a = 0, t = 0, e = 0, n = "", o = bmak.get_cf_date(), m = bmak.mn_cd + bmak.mn_mc_indx; 0 == a;) {
          n = Math.random().toString(16);
          var r = bmak.mn_cc + m.toString() + n,
            i = bmak.mn_s(r);
          if (0 == bmak.bdm(i, m)) a = 1, e = bmak.get_cf_date() - o, bmak.mn_al.push(n), bmak.mn_tcl.push(e), bmak.mn_il.push(t), 0 == bmak.mn_mc_indx && (bmak.mn_lg.push(bmak.mn_abck), bmak.mn_lg.push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()), bmak.mn_lg.push(n), bmak.mn_lg.push(r), bmak.mn_lg.push(i), bmak.mn_lg.push(bmak.mn_rt));
          else if ((t += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
        }

        bmak.mn_mc_indx += 1, bmak.mn_mc_indx < bmak.mn_mc_lmt ? setTimeout(bmak.mn_w, e) : (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1), bmak.bpd(), bmak.pd(!0)));
      } catch (a) {
        bmak.sd_debug(",mn_w:" + a);
      }
    },
    mn_pr: function() {
      return bmak.mn_al.join(",") + ";" + bmak.mn_tcl.join(",") + ";" + bmak.mn_il.join(",") + ";" + bmak.mn_lg.join(",") + ";";
    },
    ats: function(a) {
      for (var t = "", e = 0; e < a.length; e++) t += 2 == a[e].toString(16).length ? a[e].toString(16) : "0" + a[e].toString(16);

      return t;
    },
    calc_fp: function() {
      bmak.fpcf.fpVal(), bmak.js_post && (bmak.aj_type = 9, bmak.bpd(), bmak.pd(!0));
    },
    listFunctions: {
      _setJsPost: function(a) {
        bmak.js_post = a, bmak.js_post && (bmak.enReadDocUrl = 1);
      },
      _setSessionId: function(a) {
        bmak.session_id = a;
      },
      _setJavaScriptKey: function(a) {
        bmak.api_public_key = a;
      },
      _setEnAddHidden: function(a) {
        bmak.enAddHidden = a;
      },
      _setInitTime: function(a) {
        bmak.init_time = a;
      },
      _setApiUrl: function(a) {
        bmak.cf_url = a;
      },
      _setEnGetLoc: function(a) {
        bmak.enGetLoc = a;
      },
      _setEnReadDocUrl: function(a) {
        bmak.enReadDocUrl = a;
      },
      _setDisFpCalOnTimeout: function(a) {
        bmak.disFpCalOnTimeout = a;
      },
      _setCookie: function(a) {
        bmak.ckie = a;
      },
      _setCS: function(a) {
        bmak.cs = (String(a) + bmak.cs).slice(0, 16);
      },
      _setFsp: function(a) {
        bmak.fsp = a, bmak.fsp && (bmak.cf_url = bmak.cf_url.replace(/^http:\/\//i, "https://"));
      },
      _setBm: function(a) {
        bmak.bm = a, bmak.bm ? (bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/_bm/_data", bmak.js_post = !0) : bmak.params_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/get_params";
      },
      _setAu: function(a) {
        "string" == typeof a && (0 === a.lastIndexOf("/", 0) ? bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + a : bmak.cf_url = a);
      },
      _setSDFieldNames: function() {
        try {
          var a;

          for (a = 0; a < arguments.length; a += 1) bmak.sdfn.push(arguments[a]);
        } catch (a) {
          bmak.sd_debug(",setSDFN:" + a);
        }
      },
      _setUseAltFonts: function(a) {
        bmak.altFonts = a;
      },
      _setPowState: function(a) {
        bmak.pstate = a;
      },
      _setPow: function(a) {
        bmak.pstate = a;
      },
      _setLOAP: function(a) {
        bmak.loap = a;
      }
    },
    applyFunc: function() {
      var a, t, e;

      for (a = 0; a < arguments.length; a += 1) e = arguments[a];

      t = e.shift(), bmak.listFunctions[t] && bmak.listFunctions[t].apply(bmak.listFunctions, e);
    }
  };

if (function(a) {
    var t = {};
    a.fpcf = t, t.sf4 = function() {
      var a = bmak.uar();
      return !(!~a.indexOf("Version/4.0") || !(~a.indexOf("iPad;") || ~a.indexOf("iPhone") || ~a.indexOf("Mac OS X 10_5")));
    }, t.fpValstr = "-1", t.fpValCalculated = !1, t.rVal = "-1", t.rCFP = "-1", t.cache = {}, t.td = -999999, t.clearCache = function() {
      t.cache = {};
    }, t.fpVal = function() {
      t.fpValCalculated = !0;

      try {
        var a = 0;
        a = Date.now ? Date.now() : +new Date();
        var e = t.data();
        t.fpValstr = e.replace(/\"/g, "\\\\\"");
        var n = 0;
        n = Date.now ? Date.now() : +new Date(), t.td = n - a;
      } catch (a) {}
    }, t.timezoneOffsetKey = function() {
      return new Date().getTimezoneOffset();
    }, t.data = function() {
      var a = screen.colorDepth ? screen.colorDepth : -1,
        e = screen.pixelDepth ? screen.pixelDepth : -1,
        n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
        o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
        m = navigator.doNotTrack ? navigator.doNotTrack : -1,
        r = "default";
      r = bmak.runFonts ? bmak.altFonts ? t.fonts_optm() : t.fonts() : "dis";
      return [t.canvas("<@nv45. F1n63r,Pr1n71n6!"), t.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, t.pluginInfo(), t.sessionStorageKey(), t.localStorageKey(), t.indexedDbKey(), t.timezoneOffsetKey(), t.webrtcKey(), a, e, n, o, m].join(";");
    }, t.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], t.pluginInfo = function() {
      if (void 0 === navigator.plugins) return null;

      for (var a = t.PLUGINS.length, e = "", n = 0; n < a; n++) {
        var o = t.PLUGINS[n];
        void 0 !== navigator.plugins[o] && (e = e + "," + n);
      }

      return e;
    }, t.canvas = function(a) {
      try {
        if (void 0 !== t.cache.canvas) return t.cache.canvas;
        var e = -1;

        if (!t.sf4()) {
          var n = document.createElement("canvas");

          if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
            var o = n.getContext("2d");
            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(a, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
            var m = n.toDataURL();
            e = 0;

            for (var r = 0; r < m.length; r++) {
              e = (e << 5) - e + m.charCodeAt(r), e &= e;
            }

            e = e.toString();
            var i = document.createElement("canvas");
            i.width = 16, i.height = 16;
            var c = i.getContext("2d");
            c.font = "6pt Arial", t.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(t.rVal, 1, 12);

            for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
              d = (d << 5) - d + b.charCodeAt(k), d &= d;
            }

            t.rCFP = d.toString();
          }
        }

        return e;
      } catch (a) {
        return "exception";
      }
    }, t.fonts_optm = function() {
      var a = 200,
        e = bmak.get_cf_date(),
        n = [];

      if (!t.sf4() && document.body) {
        var o = ["sans-serif", "monospace"],
          m = [0, 0],
          r = [0, 0],
          i = document.createElement("div");
        i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
        var c;

        for (c = 0; c < o.length; c++) {
          var b = document.createElement("span");
          b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b);
        }

        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;

        if (document.body.removeChild(i), bmak.get_cf_date() - e > a) return "";
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
          k = document.createElement("div");
        k.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

        for (var s = [], l = 0; l < d.length; l++) {
          var u = document.createElement("div");

          for (c = 0; c < o.length; c++) {
            var b = document.createElement("span");
            b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
          }

          k.appendChild(u);
        }

        if (bmak.get_cf_date() - e > a) return "";
        document.body.appendChild(k);

        for (var l = 0; l < k.childNodes.length; l++) {
          var _ = !1,
            u = k.childNodes[l];

          for (c = 0; c < u.childNodes.length; c++) {
            var b = u.childNodes[c];

            if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
              _ = !0;
              break;
            }
          }

          if (_ && s.push(l), bmak.get_cf_date() - e > a) break;
        }

        document.body.removeChild(k), n = s.sort();
      }

      return n.join(",");
    }, t.fonts = function() {
      var a = [];

      if (!t.sf4() && document.body) {
        var e = ["serif", "sans-serif", "monospace"],
          n = [0, 0, 0],
          o = [0, 0, 0],
          m = document.createElement("span");
        m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", m.style.fontSize = "90px";
        var r;

        for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);

        for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i.length; b++) {
          var d = !1;

          for (r = 0; r < e.length; r++)
            if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
              c.push(b);
              break;
            }
        }

        a = c.sort();
      }

      return a.join(",");
    }, t.webrtcKey = function() {
      return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection;
    }, t.indexedDbKey = function() {
      return !!t.hasIndexedDB();
    }, t.sessionStorageKey = function() {
      return !!t.hasSessionStorage();
    }, t.localStorageKey = function() {
      return !!t.hasLocalStorage();
    }, t.hasSessionStorage = function() {
      try {
        return !!window.sessionStorage;
      } catch (a) {
        return !1;
      }
    }, t.hasLocalStorage = function() {
      try {
        return !!window.localStorage;
      } catch (a) {
        return !1;
      }
    }, t.hasIndexedDB = function() {
      return !!window.indexedDB;
    };
  }(bmak), bmak.firstLoad) {
  bmak.sd_debug("<init/>");

  for (var bm_counter = 0; bm_counter < _cf.length; bm_counter++) bmak.applyFunc(_cf[bm_counter]);

  bmak.sd_debug("<setSDFN>" + bmak.sdfn.join() + "</setSDFN>"), _cf = {
    push: bmak.applyFunc
  };

  try {
    bmak.ir(), bmak.t_tst = bmak.get_cf_date(), bmak.startTracking(), bmak.tst = bmak.get_cf_date() - bmak.t_tst, bmak.disFpCalOnTimeout || setTimeout(bmak.calc_fp, 500);

    for (var bm_counter = 0; bm_counter < 3; bm_counter++) setTimeout(bmak.getmr, 400 + 5e3 * bm_counter);

    bmak.mn_init();
  } catch (a) {}
}