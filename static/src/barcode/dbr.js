/*!
 * Dynamsoft JavaScript Library
 * @product Dynamsoft Barcode Reader JS Edition
 * @website http://www.dynamsoft.com
 * @copyright Copyright 2022, Dynamsoft Corporation
 * @author Dynamsoft
 * @version 9.3.1 (js 20220930)
 * @fileoverview Dynamsoft JavaScript Library for Barcode Reader
 * More info on DBR JS: https://www.dynamsoft.com/barcode-reader/sdk-javascript/
 */
!function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? t(exports) : 'function' == typeof define && define.amd ? define(['exports'], t) : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self).Dynamsoft = e.Dynamsoft || {
  }, e.Dynamsoft.DBR = {
  }))
}(this, (function (e) {
  'use strict';
  const t = 'undefined' == typeof self;
  let i,
  r,
  n,
  o,
  s;
  if ('undefined' != typeof navigator && (i = navigator, r = i.userAgent, n = i.platform, o = i.mediaDevices), !t) {
    const e = {
      init: function () {
        this.browser = this.searchString(this.dataBrowser) || 'unknownBrowser',
        this.version = this.searchVersion(r) || this.searchVersion(i.appVersion) || 0,
        this.OS = this.searchString(this.dataOS) || 'unknownOS',
        'Linux' == this.OS && - 1 != r.indexOf('Windows NT') && (this.OS = 'HarmonyOS')
      },
      searchString: function (e) {
        for (let t = 0; t < e.length; t++) {
          let i = e[t].string,
          r = e[t].prop;
          if (this.versionSearchString = e[t].versionSearch || e[t].identity, i) {
            if ( - 1 != i.indexOf(e[t].subString)) return e[t].identity
          } else if (r) return e[t].identity
        }
      },
      searchVersion: function (e) {
        let t = e.indexOf(this.versionSearchString);
        if ( - 1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
      },
      dataBrowser: [
        {
          string: r,
          subString: 'Edge',
          identity: 'Edge'
        },
        {
          string: r,
          subString: 'OPR',
          identity: 'OPR'
        },
        {
          string: r,
          subString: 'Chrome',
          identity: 'Chrome'
        },
        {
          string: i.vendor,
          subString: 'Apple',
          identity: 'Safari',
          versionSearch: 'Version'
        },
        {
          string: r,
          subString: 'Firefox',
          identity: 'Firefox'
        },
        {
          string: r,
          subString: 'MSIE',
          identity: 'Explorer',
          versionSearch: 'MSIE'
        }
      ],
      dataOS: [
        {
          string: r,
          subString: 'HarmonyOS',
          identity: 'HarmonyOS'
        },
        {
          string: r,
          subString: 'Android',
          identity: 'Android'
        },
        {
          string: r,
          subString: 'iPhone',
          identity: 'iPhone'
        },
        {
          string: n,
          subString: 'Win',
          identity: 'Windows'
        },
        {
          string: n,
          subString: 'Mac',
          identity: 'Mac'
        },
        {
          string: n,
          subString: 'Linux',
          identity: 'Linux'
        }
      ]
    };
    e.init(),
    s = {
      browser: e.browser,
      version: e.version,
      OS: e.OS
    }
  }
  t && (s = {
    browser: 'ssr',
    version: 0,
    OS: 'ssr'
  });
  const a = 'undefined' != typeof WebAssembly && r && !(/Safari/.test(r) && !/Chrome/.test(r) && /\(.+\s11_2_([2-6]).*\)/.test(r)),
  l = !('undefined' == typeof Worker),
  h = !(!o || !o.getUserMedia),
  c = async() =>{
    let e = !1;
    if (h) try {
      (await o.getUserMedia({
        video: !0
      })).getTracks().forEach((e=>{
        e.stop()
      })),
      e = !0
    } catch (e) {
    }
    return e
  };
  'Chrome' === s.browser && s.version > 66 || 'Safari' === s.browser && s.version > 13 || 'OPR' === s.browser && s.version > 43 || 'Edge' === s.browser && s.version;
  const u = (() =>{
    if (!t && document.currentScript) {
      let e = document.currentScript.src,
      t = e.indexOf('?');
      if ( - 1 != t) e = e.substring(0, t);
       else {
        let t = e.indexOf('#');
        - 1 != t && (e = e.substring(0, t))
      }
      return e.substring(0, e.lastIndexOf('/') + 1)
    }
    return './'
  }) (),
  d = ' is not allowed to change after `createInstance` or `loadWasm` is called.',
  f = !t && document.currentScript && (document.currentScript.getAttribute('data-license') || document.currentScript.getAttribute('data-productKeys') || document.currentScript.getAttribute('data-licenseKey') || document.currentScript.getAttribute('data-handshakeCode') || document.currentScript.getAttribute('data-organizationID')) || '',
  g = !t && document.currentScript && document.currentScript.getAttribute('data-sessionPassword') || '',
  _ = e=>{
    if (null == e) e = [
    ];
     else {
      e = e instanceof Array ? [
        ...e
      ] : [
        e
      ];
      for (let i = 0; i < e.length; ++i) {
        if (!t) {
          let t = document.createElement('a');
          t.href = e[i],
          e[i] = t.href
        }
        e[i].endsWith('/') || (e[i] += '/')
      }
    }
    return e
  };
  var p,
  m,
  v,
  y;
  e.EnumImagePixelFormat = void 0,
  (p = e.EnumImagePixelFormat || (e.EnumImagePixelFormat = {
  })) [p.IPF_Binary = 0] = 'IPF_Binary',
  p[p.IPF_BinaryInverted = 1] = 'IPF_BinaryInverted',
  p[p.IPF_GrayScaled = 2] = 'IPF_GrayScaled',
  p[p.IPF_NV21 = 3] = 'IPF_NV21',
  p[p.IPF_RGB_565 = 4] = 'IPF_RGB_565',
  p[p.IPF_RGB_555 = 5] = 'IPF_RGB_555',
  p[p.IPF_RGB_888 = 6] = 'IPF_RGB_888',
  p[p.IPF_ARGB_8888 = 7] = 'IPF_ARGB_8888',
  p[p.IPF_RGB_161616 = 8] = 'IPF_RGB_161616',
  p[p.IPF_ARGB_16161616 = 9] = 'IPF_ARGB_16161616',
  p[p.IPF_ABGR_8888 = 10] = 'IPF_ABGR_8888',
  p[p.IPF_ABGR_16161616 = 11] = 'IPF_ABGR_16161616',
  p[p.IPF_BGR_888 = 12] = 'IPF_BGR_888',
  e.EnumErrorCode = void 0,
  (m = e.EnumErrorCode || (e.EnumErrorCode = {
  })) [m.DBR_SYSTEM_EXCEPTION = 1] = 'DBR_SYSTEM_EXCEPTION',
  m[m.DBR_SUCCESS = 0] = 'DBR_SUCCESS',
  m[m.DBR_UNKNOWN = - 10000] = 'DBR_UNKNOWN',
  m[m.DBR_NO_MEMORY = - 10001] = 'DBR_NO_MEMORY',
  m[m.DBR_NULL_REFERENCE = - 10002] = 'DBR_NULL_REFERENCE',
  m[m.DBR_LICENSE_INVALID = - 10003] = 'DBR_LICENSE_INVALID',
  m[m.DBR_LICENSE_EXPIRED = - 10004] = 'DBR_LICENSE_EXPIRED',
  m[m.DBR_FILE_NOT_FOUND = - 10005] = 'DBR_FILE_NOT_FOUND',
  m[m.DBR_FILETYPE_NOT_SUPPORTED = - 10006] = 'DBR_FILETYPE_NOT_SUPPORTED',
  m[m.DBR_BPP_NOT_SUPPORTED = - 10007] = 'DBR_BPP_NOT_SUPPORTED',
  m[m.DBR_INDEX_INVALID = - 10008] = 'DBR_INDEX_INVALID',
  m[m.DBR_BARCODE_FORMAT_INVALID = - 10009] = 'DBR_BARCODE_FORMAT_INVALID',
  m[m.DBR_CUSTOM_REGION_INVALID = - 10010] = 'DBR_CUSTOM_REGION_INVALID',
  m[m.DBR_MAX_BARCODE_NUMBER_INVALID = - 10011] = 'DBR_MAX_BARCODE_NUMBER_INVALID',
  m[m.DBR_IMAGE_READ_FAILED = - 10012] = 'DBR_IMAGE_READ_FAILED',
  m[m.DBR_TIFF_READ_FAILED = - 10013] = 'DBR_TIFF_READ_FAILED',
  m[m.DBR_QR_LICENSE_INVALID = - 10016] = 'DBR_QR_LICENSE_INVALID',
  m[m.DBR_1D_LICENSE_INVALID = - 10017] = 'DBR_1D_LICENSE_INVALID',
  m[m.DBR_DIB_BUFFER_INVALID = - 10018] = 'DBR_DIB_BUFFER_INVALID',
  m[m.DBR_PDF417_LICENSE_INVALID = - 10019] = 'DBR_PDF417_LICENSE_INVALID',
  m[m.DBR_DATAMATRIX_LICENSE_INVALID = - 10020] = 'DBR_DATAMATRIX_LICENSE_INVALID',
  m[m.DBR_PDF_READ_FAILED = - 10021] = 'DBR_PDF_READ_FAILED',
  m[m.DBR_PDF_DLL_MISSING = - 10022] = 'DBR_PDF_DLL_MISSING',
  m[m.DBR_PAGE_NUMBER_INVALID = - 10023] = 'DBR_PAGE_NUMBER_INVALID',
  m[m.DBR_CUSTOM_SIZE_INVALID = - 10024] = 'DBR_CUSTOM_SIZE_INVALID',
  m[m.DBR_CUSTOM_MODULESIZE_INVALID = - 10025] = 'DBR_CUSTOM_MODULESIZE_INVALID',
  m[m.DBR_RECOGNITION_TIMEOUT = - 10026] = 'DBR_RECOGNITION_TIMEOUT',
  m[m.DBR_JSON_PARSE_FAILED = - 10030] = 'DBR_JSON_PARSE_FAILED',
  m[m.DBR_JSON_TYPE_INVALID = - 10031] = 'DBR_JSON_TYPE_INVALID',
  m[m.DBR_JSON_KEY_INVALID = - 10032] = 'DBR_JSON_KEY_INVALID',
  m[m.DBR_JSON_VALUE_INVALID = - 10033] = 'DBR_JSON_VALUE_INVALID',
  m[m.DBR_JSON_NAME_KEY_MISSING = - 10034] = 'DBR_JSON_NAME_KEY_MISSING',
  m[m.DBR_JSON_NAME_VALUE_DUPLICATED = - 10035] = 'DBR_JSON_NAME_VALUE_DUPLICATED',
  m[m.DBR_TEMPLATE_NAME_INVALID = - 10036] = 'DBR_TEMPLATE_NAME_INVALID',
  m[m.DBR_JSON_NAME_REFERENCE_INVALID = - 10037] = 'DBR_JSON_NAME_REFERENCE_INVALID',
  m[m.DBR_PARAMETER_VALUE_INVALID = - 10038] = 'DBR_PARAMETER_VALUE_INVALID',
  m[m.DBR_DOMAIN_NOT_MATCHED = - 10039] = 'DBR_DOMAIN_NOT_MATCHED',
  m[m.DBR_RESERVEDINFO_NOT_MATCHED = - 10040] = 'DBR_RESERVEDINFO_NOT_MATCHED',
  m[m.DBR_AZTEC_LICENSE_INVALID = - 10041] = 'DBR_AZTEC_LICENSE_INVALID',
  m[m.DBR_LICENSE_DLL_MISSING = - 10042] = 'DBR_LICENSE_DLL_MISSING',
  m[m.DBR_LICENSEKEY_NOT_MATCHED = - 10043] = 'DBR_LICENSEKEY_NOT_MATCHED',
  m[m.DBR_REQUESTED_FAILED = - 10044] = 'DBR_REQUESTED_FAILED',
  m[m.DBR_LICENSE_INIT_FAILED = - 10045] = 'DBR_LICENSE_INIT_FAILED',
  m[m.DBR_PATCHCODE_LICENSE_INVALID = - 10046] = 'DBR_PATCHCODE_LICENSE_INVALID',
  m[m.DBR_POSTALCODE_LICENSE_INVALID = - 10047] = 'DBR_POSTALCODE_LICENSE_INVALID',
  m[m.DBR_DPM_LICENSE_INVALID = - 10048] = 'DBR_DPM_LICENSE_INVALID',
  m[m.DBR_FRAME_DECODING_THREAD_EXISTS = - 10049] = 'DBR_FRAME_DECODING_THREAD_EXISTS',
  m[m.DBR_STOP_DECODING_THREAD_FAILED = - 10050] = 'DBR_STOP_DECODING_THREAD_FAILED',
  m[m.DBR_SET_MODE_ARGUMENT_ERROR = - 10051] = 'DBR_SET_MODE_ARGUMENT_ERROR',
  m[m.DBR_LICENSE_CONTENT_INVALID = - 10052] = 'DBR_LICENSE_CONTENT_INVALID',
  m[m.DBR_LICENSE_KEY_INVALID = - 10053] = 'DBR_LICENSE_KEY_INVALID',
  m[m.DBR_LICENSE_DEVICE_RUNS_OUT = - 10054] = 'DBR_LICENSE_DEVICE_RUNS_OUT',
  m[m.DBR_GET_MODE_ARGUMENT_ERROR = - 10055] = 'DBR_GET_MODE_ARGUMENT_ERROR',
  m[m.DBR_IRT_LICENSE_INVALID = - 10056] = 'DBR_IRT_LICENSE_INVALID',
  m[m.DBR_MAXICODE_LICENSE_INVALID = - 10057] = 'DBR_MAXICODE_LICENSE_INVALID',
  m[m.DBR_GS1_DATABAR_LICENSE_INVALID = - 10058] = 'DBR_GS1_DATABAR_LICENSE_INVALID',
  m[m.DBR_GS1_COMPOSITE_LICENSE_INVALID = - 10059] = 'DBR_GS1_COMPOSITE_LICENSE_INVALID',
  m[m.DBR_DOTCODE_LICENSE_INVALID = - 10061] = 'DBR_DOTCODE_LICENSE_INVALID',
  m[m.DMERR_NO_LICENSE = - 20000] = 'DMERR_NO_LICENSE',
  m[m.DMERR_LICENSE_SYNC_FAILED = - 20003] = 'DMERR_LICENSE_SYNC_FAILED',
  m[m.DMERR_TRIAL_LICENSE = - 20010] = 'DMERR_TRIAL_LICENSE',
  m[m.DMERR_FAILED_TO_REACH_LTS = - 20200] = 'DMERR_FAILED_TO_REACH_LTS',
  e.EnumIMResultDataType = void 0,
  (v = e.EnumIMResultDataType || (e.EnumIMResultDataType = {
  })) [v.IMRDT_IMAGE = 1] = 'IMRDT_IMAGE',
  v[v.IMRDT_CONTOUR = 2] = 'IMRDT_CONTOUR',
  v[v.IMRDT_LINESEGMENT = 4] = 'IMRDT_LINESEGMENT',
  v[v.IMRDT_LOCALIZATIONRESULT = 8] = 'IMRDT_LOCALIZATIONRESULT',
  v[v.IMRDT_REGIONOFINTEREST = 16] = 'IMRDT_REGIONOFINTEREST',
  v[v.IMRDT_QUADRILATERAL = 32] = 'IMRDT_QUADRILATERAL',
  e.EnumBarcodeFormat = void 0,
  (y = e.EnumBarcodeFormat || (e.EnumBarcodeFormat = {
  })) [y.BF_ALL = 4265607167] = 'BF_ALL',
  y[y.BF_ONED = 3147775] = 'BF_ONED',
  y[y.BF_GS1_DATABAR = 260096] = 'BF_GS1_DATABAR',
  y[y.BF_CODE_39 = 1] = 'BF_CODE_39',
  y[y.BF_CODE_128 = 2] = 'BF_CODE_128',
  y[y.BF_CODE_93 = 4] = 'BF_CODE_93',
  y[y.BF_CODABAR = 8] = 'BF_CODABAR',
  y[y.BF_ITF = 16] = 'BF_ITF',
  y[y.BF_EAN_13 = 32] = 'BF_EAN_13',
  y[y.BF_EAN_8 = 64] = 'BF_EAN_8',
  y[y.BF_UPC_A = 128] = 'BF_UPC_A',
  y[y.BF_UPC_E = 256] = 'BF_UPC_E',
  y[y.BF_INDUSTRIAL_25 = 512] = 'BF_INDUSTRIAL_25',
  y[y.BF_CODE_39_EXTENDED = 1024] = 'BF_CODE_39_EXTENDED',
  y[y.BF_GS1_DATABAR_OMNIDIRECTIONAL = 2048] = 'BF_GS1_DATABAR_OMNIDIRECTIONAL',
  y[y.BF_GS1_DATABAR_TRUNCATED = 4096] = 'BF_GS1_DATABAR_TRUNCATED',
  y[y.BF_GS1_DATABAR_STACKED = 8192] = 'BF_GS1_DATABAR_STACKED',
  y[y.BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL = 16384] = 'BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL',
  y[y.BF_GS1_DATABAR_EXPANDED = 32768] = 'BF_GS1_DATABAR_EXPANDED',
  y[y.BF_GS1_DATABAR_EXPANDED_STACKED = 65536] = 'BF_GS1_DATABAR_EXPANDED_STACKED',
  y[y.BF_GS1_DATABAR_LIMITED = 131072] = 'BF_GS1_DATABAR_LIMITED',
  y[y.BF_PATCHCODE = 262144] = 'BF_PATCHCODE',
  y[y.BF_PDF417 = 33554432] = 'BF_PDF417',
  y[y.BF_QR_CODE = 67108864] = 'BF_QR_CODE',
  y[y.BF_DATAMATRIX = 134217728] = 'BF_DATAMATRIX',
  y[y.BF_AZTEC = 268435456] = 'BF_AZTEC',
  y[y.BF_MAXICODE = 536870912] = 'BF_MAXICODE',
  y[y.BF_MICRO_QR = 1073741824] = 'BF_MICRO_QR',
  y[y.BF_MICRO_PDF417 = 524288] = 'BF_MICRO_PDF417',
  y[y.BF_GS1_COMPOSITE = 2147483648] = 'BF_GS1_COMPOSITE',
  y[y.BF_MSI_CODE = 1048576] = 'BF_MSI_CODE',
  y[y.BF_CODE_11 = 2097152] = 'BF_CODE_11',
  y[y.BF_NULL = 0] = 'BF_NULL';
  const S = e=>e && 'object' == typeof e && 'function' == typeof e.then;
  var b = function () {
    this.init()
  };
  b.prototype = {
    init: function () {
      var e = this || C;
      return e._counter = 1000,
      e._html5AudioPool = [
      ],
      e.html5PoolSize = 10,
      e._codecs = {
      },
      e._howls = [
      ],
      e._muted = !1,
      e._volume = 1,
      e._canPlayEvent = 'canplaythrough',
      e._navigator = 'undefined' != typeof window && window.navigator ? window.navigator : null,
      e.masterGain = null,
      e.noAudio = !1,
      e.usingWebAudio = !0,
      e.autoSuspend = !0,
      e.ctx = null,
      e.autoUnlock = !0,
      e._setup(),
      e
    },
    volume: function (e) {
      var t = this || C;
      if (e = parseFloat(e), t.ctx || R(), void 0 !== e && e >= 0 && e <= 1) {
        if (t._volume = e, t._muted) return t;
        t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, C.ctx.currentTime);
        for (var i = 0; i < t._howls.length; i++) if (!t._howls[i]._webAudio) for (var r = t._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
          var o = t._howls[i]._soundById(r[n]);
          o && o._node && (o._node.volume = o._volume * e)
        }
        return t
      }
      return t._volume
    },
    mute: function (e) {
      var t = this || C;
      t.ctx || R(),
      t._muted = e,
      t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, C.ctx.currentTime);
      for (var i = 0; i < t._howls.length; i++) if (!t._howls[i]._webAudio) for (var r = t._howls[i]._getSoundIds(), n = 0; n < r.length; n++) {
        var o = t._howls[i]._soundById(r[n]);
        o && o._node && (o._node.muted = !!e || o._muted)
      }
      return t
    },
    stop: function () {
      for (var e = this || C, t = 0; t < e._howls.length; t++) e._howls[t].stop();
      return e
    },
    unload: function () {
      for (var e = this || C, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
      return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, R()),
      e
    },
    codecs: function (e) {
      return (this || C)._codecs[e.replace(/^x-/, '')]
    },
    _setup: function () {
      var e = this || C;
      if (e.state = e.ctx && e.ctx.state || 'suspended', e._autoSuspend(), !e.usingWebAudio) if ('undefined' != typeof Audio) try {
        void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = 'canplay')
      } catch (t) {
        e.noAudio = !0
      } else e.noAudio = !0;
      try {
        (new Audio).muted && (e.noAudio = !0)
      } catch (e) {
      }
      return e.noAudio || e._setupCodecs(),
      e
    },
    _setupCodecs: function () {
      var e = this || C,
      t = null;
      try {
        t = 'undefined' != typeof Audio ? new Audio : null
      } catch (t) {
        return e
      }
      if (!t || 'function' != typeof t.canPlayType) return e;
      var i = t.canPlayType('audio/mpeg;').replace(/^no$/, ''),
      r = e._navigator ? e._navigator.userAgent : '',
      n = r.match(/OPR\/([0-6].)/g),
      o = n && parseInt(n[0].split('/') [1], 10) < 33,
      s = - 1 !== r.indexOf('Safari') && - 1 === r.indexOf('Chrome'),
      a = r.match(/Version\/(.*?) /),
      l = s && a && parseInt(a[1], 10) < 15;
      return e._codecs = {
        mp3: !(o || !i && !t.canPlayType('audio/mp3;').replace(/^no$/, '')),
        mpeg: !!i,
        opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!t.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!t.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(t.canPlayType('audio/x-m4a;') || t.canPlayType('audio/m4a;') || t.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(t.canPlayType('audio/x-m4b;') || t.canPlayType('audio/m4b;') || t.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(t.canPlayType('audio/x-mp4;') || t.canPlayType('audio/mp4;') || t.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(t.canPlayType('audio/x-flac;') || t.canPlayType('audio/flac;')).replace(/^no$/, '')
      },
      e
    },
    _unlockAudio: function () {
      var e = this || C;
      if (!e._audioUnlocked && e.ctx) {
        e._audioUnlocked = !1,
        e.autoUnlock = !1,
        e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()),
        e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
        var t = function (i) {
          for (; e._html5AudioPool.length < e.html5PoolSize; ) try {
            var r = new Audio;
            r._unlocked = !0,
            e._releaseHtml5Audio(r)
          } catch (i) {
            e.noAudio = !0;
            break
          }
          for (var n = 0; n < e._howls.length; n++) if (!e._howls[n]._webAudio) for (var o = e._howls[n]._getSoundIds(), s = 0; s < o.length; s++) {
            var a = e._howls[n]._soundById(o[s]);
            a && a._node && !a._node._unlocked && (a._node._unlocked = !0, a._node.load())
          }
          e._autoResume();
          var l = e.ctx.createBufferSource();
          l.buffer = e._scratchBuffer,
          l.connect(e.ctx.destination),
          void 0 === l.start ? l.noteOn(0) : l.start(0),
          'function' == typeof e.ctx.resume && e.ctx.resume(),
          l.onended = function () {
            l.disconnect(0),
            e._audioUnlocked = !0,
            document.removeEventListener('touchstart', t, !0),
            document.removeEventListener('touchend', t, !0),
            document.removeEventListener('click', t, !0),
            document.removeEventListener('keydown', t, !0);
            for (var i = 0; i < e._howls.length; i++) e._howls[i]._emit('unlock')
          }
        };
        return document.addEventListener('touchstart', t, !0),
        document.addEventListener('touchend', t, !0),
        document.addEventListener('click', t, !0),
        document.addEventListener('keydown', t, !0),
        e
      }
    },
    _obtainHtml5Audio: function () {
      var e = this || C;
      if (e._html5AudioPool.length) return e._html5AudioPool.pop();
      var t = (new Audio).play();
      return t && 'undefined' != typeof Promise && (t instanceof Promise || 'function' == typeof t.then) && t.catch((function () {
        console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.')
      })),
      new Audio
    },
    _releaseHtml5Audio: function (e) {
      var t = this || C;
      return e._unlocked && t._html5AudioPool.push(e),
      t
    },
    _autoSuspend: function () {
      var e = this;
      if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && C.usingWebAudio) {
        for (var t = 0; t < e._howls.length; t++) if (e._howls[t]._webAudio) for (var i = 0; i < e._howls[t]._sounds.length; i++) if (!e._howls[t]._sounds[i]._paused) return e;
        return e._suspendTimer && clearTimeout(e._suspendTimer),
        e._suspendTimer = setTimeout((function () {
          if (e.autoSuspend) {
            e._suspendTimer = null,
            e.state = 'suspending';
            var t = function () {
              e.state = 'suspended',
              e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
            };
            e.ctx.suspend().then(t, t)
          }
        }), 30000),
        e
      }
    },
    _autoResume: function () {
      var e = this;
      if (e.ctx && void 0 !== e.ctx.resume && C.usingWebAudio) return 'running' === e.state && 'interrupted' !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : 'suspended' === e.state || 'running' === e.state && 'interrupted' === e.ctx.state ? (e.ctx.resume().then((function () {
        e.state = 'running';
        for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit('resume')
      })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : 'suspending' === e.state && (e._resumeAfterSuspend = !0),
      e
    }
  };
  var C = new b,
  w = function (e) {
    e.src && 0 !== e.src.length ? this.init(e) : console.error('An array of source files must be passed with any new Howl.')
  };
  w.prototype = {
    init: function (e) {
      var t = this;
      return C.ctx || R(),
      t._autoplay = e.autoplay || !1,
      t._format = 'string' != typeof e.format ? e.format : [
        e.format
      ],
      t._html5 = e.html5 || !1,
      t._muted = e.mute || !1,
      t._loop = e.loop || !1,
      t._pool = e.pool || 5,
      t._preload = 'boolean' != typeof e.preload && 'metadata' !== e.preload || e.preload,
      t._rate = e.rate || 1,
      t._sprite = e.sprite || {
      },
      t._src = 'string' != typeof e.src ? e.src : [
        e.src
      ],
      t._volume = void 0 !== e.volume ? e.volume : 1,
      t._xhr = {
        method: e.xhr && e.xhr.method ? e.xhr.method : 'GET',
        headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
        withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials
      },
      t._duration = 0,
      t._state = 'unloaded',
      t._sounds = [
      ],
      t._endTimers = {
      },
      t._queue = [
      ],
      t._playLock = !1,
      t._onend = e.onend ? [
        {
          fn: e.onend
        }
      ] : [
      ],
      t._onfade = e.onfade ? [
        {
          fn: e.onfade
        }
      ] : [
      ],
      t._onload = e.onload ? [
        {
          fn: e.onload
        }
      ] : [
      ],
      t._onloaderror = e.onloaderror ? [
        {
          fn: e.onloaderror
        }
      ] : [
      ],
      t._onplayerror = e.onplayerror ? [
        {
          fn: e.onplayerror
        }
      ] : [
      ],
      t._onpause = e.onpause ? [
        {
          fn: e.onpause
        }
      ] : [
      ],
      t._onplay = e.onplay ? [
        {
          fn: e.onplay
        }
      ] : [
      ],
      t._onstop = e.onstop ? [
        {
          fn: e.onstop
        }
      ] : [
      ],
      t._onmute = e.onmute ? [
        {
          fn: e.onmute
        }
      ] : [
      ],
      t._onvolume = e.onvolume ? [
        {
          fn: e.onvolume
        }
      ] : [
      ],
      t._onrate = e.onrate ? [
        {
          fn: e.onrate
        }
      ] : [
      ],
      t._onseek = e.onseek ? [
        {
          fn: e.onseek
        }
      ] : [
      ],
      t._onunlock = e.onunlock ? [
        {
          fn: e.onunlock
        }
      ] : [
      ],
      t._onresume = [
      ],
      t._webAudio = C.usingWebAudio && !t._html5,
      void 0 !== C.ctx && C.ctx && C.autoUnlock && C._unlockAudio(),
      C._howls.push(t),
      t._autoplay && t._queue.push({
        event: 'play',
        action: function () {
          t.play()
        }
      }),
      t._preload && 'none' !== t._preload && t.load(),
      t
    },
    load: function () {
      var e = this,
      t = null;
      if (C.noAudio) e._emit('loaderror', null, 'No audio support.');
       else {
        'string' == typeof e._src && (e._src = [
          e._src
        ]);
        for (var i = 0; i < e._src.length; i++) {
          var r,
          n;
          if (e._format && e._format[i]) r = e._format[i];
           else {
            if ('string' != typeof (n = e._src[i])) {
              e._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
              continue
            }(r = /^data:audio\/([^;,]+);/i.exec(n)) || (r = /\.([^.]+)$/.exec(n.split('?', 1) [0])),
            r && (r = r[1].toLowerCase())
          }
          if (r || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), r && C.codecs(r)) {
            t = e._src[i];
            break
          }
        }
        if (t) return e._src = t,
        e._state = 'loading',
        'https:' === window.location.protocol && 'http:' === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1),
        new T(e),
        e._webAudio && E(e),
        e;
        e._emit('loaderror', null, 'No codec support for selected audio sources.')
      }
    },
    play: function (e, t) {
      var i = this,
      r = null;
      if ('number' == typeof e) r = e,
      e = null;
       else {
        if ('string' == typeof e && 'loaded' === i._state && !i._sprite[e]) return null;
        if (void 0 === e && (e = '__default', !i._playLock)) {
          for (var n = 0, o = 0; o < i._sounds.length; o++) i._sounds[o]._paused && !i._sounds[o]._ended && (n++, r = i._sounds[o]._id);
          1 === n ? e = null : r = null
        }
      }
      var s = r ? i._soundById(r) : i._inactiveSound();
      if (!s) return null;
      if (r && !e && (e = s._sprite || '__default'), 'loaded' !== i._state) {
        s._sprite = e,
        s._ended = !1;
        var a = s._id;
        return i._queue.push({
          event: 'play',
          action: function () {
            i.play(a)
          }
        }),
        a
      }
      if (r && !s._paused) return t || i._loadQueue('play'),
      s._id;
      i._webAudio && C._autoResume();
      var l = Math.max(0, s._seek > 0 ? s._seek : i._sprite[e][0] / 1000),
      h = Math.max(0, (i._sprite[e][0] + i._sprite[e][1]) / 1000 - l),
      c = 1000 * h / Math.abs(s._rate),
      u = i._sprite[e][0] / 1000,
      d = (i._sprite[e][0] + i._sprite[e][1]) / 1000;
      s._sprite = e,
      s._ended = !1;
      var f = function () {
        s._paused = !1,
        s._seek = l,
        s._start = u,
        s._stop = d,
        s._loop = !(!s._loop && !i._sprite[e][2])
      };
      if (!(l >= d)) {
        var g = s._node;
        if (i._webAudio) {
          var _ = function () {
            i._playLock = !1,
            f(),
            i._refreshBuffer(s);
            var e = s._muted || i._muted ? 0 : s._volume;
            g.gain.setValueAtTime(e, C.ctx.currentTime),
            s._playStart = C.ctx.currentTime,
            void 0 === g.bufferSource.start ? s._loop ? g.bufferSource.noteGrainOn(0, l, 86400) : g.bufferSource.noteGrainOn(0, l, h) : s._loop ? g.bufferSource.start(0, l, 86400) : g.bufferSource.start(0, l, h),
            c !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c)),
            t || setTimeout((function () {
              i._emit('play', s._id),
              i._loadQueue()
            }), 0)
          };
          'running' === C.state && 'interrupted' !== C.ctx.state ? _() : (i._playLock = !0, i.once('resume', _), i._clearTimer(s._id))
        } else {
          var p = function () {
            g.currentTime = l,
            g.muted = s._muted || i._muted || C._muted || g.muted,
            g.volume = s._volume * C.volume(),
            g.playbackRate = s._rate;
            try {
              var r = g.play();
              if (r && 'undefined' != typeof Promise && (r instanceof Promise || 'function' == typeof r.then) ? (i._playLock = !0, f(), r.then((function () {
                i._playLock = !1,
                g._unlocked = !0,
                t ? i._loadQueue() : i._emit('play', s._id)
              })).catch((function () {
                i._playLock = !1,
                i._emit('playerror', s._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'),
                s._ended = !0,
                s._paused = !0
              }))) : t || (i._playLock = !1, f(), i._emit('play', s._id)), g.playbackRate = s._rate, g.paused) return void i._emit('playerror', s._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.');
              '__default' !== e || s._loop ? i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c) : (i._endTimers[s._id] = function () {
                i._ended(s),
                g.removeEventListener('ended', i._endTimers[s._id], !1)
              }, g.addEventListener('ended', i._endTimers[s._id], !1))
            } catch (e) {
              i._emit('playerror', s._id, e)
            }
          };
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === g.src && (g.src = i._src, g.load());
          var m = window && window.ejecta || !g.readyState && C._navigator.isCocoonJS;
          if (g.readyState >= 3 || m) p();
           else {
            i._playLock = !0,
            i._state = 'loading';
            var v = function () {
              i._state = 'loaded',
              p(),
              g.removeEventListener(C._canPlayEvent, v, !1)
            };
            g.addEventListener(C._canPlayEvent, v, !1),
            i._clearTimer(s._id)
          }
        }
        return s._id
      }
      i._ended(s)
    },
    pause: function (e) {
      var t = this;
      if ('loaded' !== t._state || t._playLock) return t._queue.push({
        event: 'pause',
        action: function () {
          t.pause(e)
        }
      }),
      t;
      for (var i = t._getSoundIds(e), r = 0; r < i.length; r++) {
        t._clearTimer(i[r]);
        var n = t._soundById(i[r]);
        if (n && !n._paused && (n._seek = t.seek(i[r]), n._rateSeek = 0, n._paused = !0, t._stopFade(i[r]), n._node)) if (t._webAudio) {
          if (!n._node.bufferSource) continue;
          void 0 === n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0),
          t._cleanBuffer(n._node)
        } else isNaN(n._node.duration) && n._node.duration !== 1 / 0 || n._node.pause();
        arguments[1] || t._emit('pause', n ? n._id : null)
      }
      return t
    },
    stop: function (e, t) {
      var i = this;
      if ('loaded' !== i._state || i._playLock) return i._queue.push({
        event: 'stop',
        action: function () {
          i.stop(e)
        }
      }),
      i;
      for (var r = i._getSoundIds(e), n = 0; n < r.length; n++) {
        i._clearTimer(r[n]);
        var o = i._soundById(r[n]);
        o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, i._stopFade(r[n]), o._node && (i._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), i._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause(), o._node.duration === 1 / 0 && i._clearSound(o._node))), t || i._emit('stop', o._id))
      }
      return i
    },
    mute: function (e, t) {
      var i = this;
      if ('loaded' !== i._state || i._playLock) return i._queue.push({
        event: 'mute',
        action: function () {
          i.mute(e, t)
        }
      }),
      i;
      if (void 0 === t) {
        if ('boolean' != typeof e) return i._muted;
        i._muted = e
      }
      for (var r = i._getSoundIds(t), n = 0; n < r.length; n++) {
        var o = i._soundById(r[n]);
        o && (o._muted = e, o._interval && i._stopFade(o._id), i._webAudio && o._node ? o._node.gain.setValueAtTime(e ? 0 : o._volume, C.ctx.currentTime) : o._node && (o._node.muted = !!C._muted || e), i._emit('mute', o._id))
      }
      return i
    },
    volume: function () {
      var e,
      t,
      i,
      r = this,
      n = arguments;
      if (0 === n.length) return r._volume;
      if (1 === n.length || 2 === n.length && void 0 === n[1]) {
        var o = r._getSoundIds(),
        s = o.indexOf(n[0]);
        s >= 0 ? t = parseInt(n[0], 10) : e = parseFloat(n[0])
      } else n.length >= 2 && (e = parseFloat(n[0]), t = parseInt(n[1], 10));
      if (!(void 0 !== e && e >= 0 && e <= 1)) return (i = t ? r._soundById(t) : r._sounds[0]) ? i._volume : 0;
      if ('loaded' !== r._state || r._playLock) return r._queue.push({
        event: 'volume',
        action: function () {
          r.volume.apply(r, n)
        }
      }),
      r;
      void 0 === t && (r._volume = e),
      t = r._getSoundIds(t);
      for (var a = 0; a < t.length; a++) (i = r._soundById(t[a])) && (i._volume = e, n[2] || r._stopFade(t[a]), r._webAudio && i._node && !i._muted ? i._node.gain.setValueAtTime(e, C.ctx.currentTime) : i._node && !i._muted && (i._node.volume = e * C.volume()), r._emit('volume', i._id));
      return r
    },
    fade: function (e, t, i, r) {
      var n = this;
      if ('loaded' !== n._state || n._playLock) return n._queue.push({
        event: 'fade',
        action: function () {
          n.fade(e, t, i, r)
        }
      }),
      n;
      e = Math.min(Math.max(0, parseFloat(e)), 1),
      t = Math.min(Math.max(0, parseFloat(t)), 1),
      i = parseFloat(i),
      n.volume(e, r);
      for (var o = n._getSoundIds(r), s = 0; s < o.length; s++) {
        var a = n._soundById(o[s]);
        if (a) {
          if (r || n._stopFade(o[s]), n._webAudio && !a._muted) {
            var l = C.ctx.currentTime,
            h = l + i / 1000;
            a._volume = e,
            a._node.gain.setValueAtTime(e, l),
            a._node.gain.linearRampToValueAtTime(t, h)
          }
          n._startFadeInterval(a, e, t, i, o[s], void 0 === r)
        }
      }
      return n
    },
    _startFadeInterval: function (e, t, i, r, n, o) {
      var s = this,
      a = t,
      l = i - t,
      h = Math.abs(l / 0.01),
      c = Math.max(4, h > 0 ? r / h : r),
      u = Date.now();
      e._fadeTo = i,
      e._interval = setInterval((function () {
        var n = (Date.now() - u) / r;
        u = Date.now(),
        a += l * n,
        a = Math.round(100 * a) / 100,
        a = l < 0 ? Math.max(i, a) : Math.min(i, a),
        s._webAudio ? e._volume = a : s.volume(a, e._id, !0),
        o && (s._volume = a),
        (i < t && a <= i || i > t && a >= i) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, s.volume(i, e._id), s._emit('fade', e._id))
      }), c)
    },
    _stopFade: function (e) {
      var t = this,
      i = t._soundById(e);
      return i && i._interval && (t._webAudio && i._node.gain.cancelScheduledValues(C.ctx.currentTime), clearInterval(i._interval), i._interval = null, t.volume(i._fadeTo, e), i._fadeTo = null, t._emit('fade', e)),
      t
    },
    loop: function () {
      var e,
      t,
      i,
      r = this,
      n = arguments;
      if (0 === n.length) return r._loop;
      if (1 === n.length) {
        if ('boolean' != typeof n[0]) return !!(i = r._soundById(parseInt(n[0], 10))) && i._loop;
        e = n[0],
        r._loop = e
      } else 2 === n.length && (e = n[0], t = parseInt(n[1], 10));
      for (var o = r._getSoundIds(t), s = 0; s < o.length; s++) (i = r._soundById(o[s])) && (i._loop = e, r._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = e, e && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop, r.playing(o[s]) && (r.pause(o[s], !0), r.play(o[s], !0)))));
      return r
    },
    rate: function () {
      var e,
      t,
      i,
      r = this,
      n = arguments;
      if (0 === n.length) t = r._sounds[0]._id;
       else if (1 === n.length) {
        var o = r._getSoundIds(),
        s = o.indexOf(n[0]);
        s >= 0 ? t = parseInt(n[0], 10) : e = parseFloat(n[0])
      } else 2 === n.length && (e = parseFloat(n[0]), t = parseInt(n[1], 10));
      if ('number' != typeof e) return (i = r._soundById(t)) ? i._rate : r._rate;
      if ('loaded' !== r._state || r._playLock) return r._queue.push({
        event: 'rate',
        action: function () {
          r.rate.apply(r, n)
        }
      }),
      r;
      void 0 === t && (r._rate = e),
      t = r._getSoundIds(t);
      for (var a = 0; a < t.length; a++) if (i = r._soundById(t[a])) {
        r.playing(t[a]) && (i._rateSeek = r.seek(t[a]), i._playStart = r._webAudio ? C.ctx.currentTime : i._playStart),
        i._rate = e,
        r._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, C.ctx.currentTime) : i._node && (i._node.playbackRate = e);
        var l = r.seek(t[a]),
        h = (r._sprite[i._sprite][0] + r._sprite[i._sprite][1]) / 1000 - l,
        c = 1000 * h / Math.abs(i._rate);
        !r._endTimers[t[a]] && i._paused || (r._clearTimer(t[a]), r._endTimers[t[a]] = setTimeout(r._ended.bind(r, i), c)),
        r._emit('rate', i._id)
      }
      return r
    },
    seek: function () {
      var e,
      t,
      i = this,
      r = arguments;
      if (0 === r.length) i._sounds.length && (t = i._sounds[0]._id);
       else if (1 === r.length) {
        var n = i._getSoundIds(),
        o = n.indexOf(r[0]);
        o >= 0 ? t = parseInt(r[0], 10) : i._sounds.length && (t = i._sounds[0]._id, e = parseFloat(r[0]))
      } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
      if (void 0 === t) return 0;
      if ('number' == typeof e && ('loaded' !== i._state || i._playLock)) return i._queue.push({
        event: 'seek',
        action: function () {
          i.seek.apply(i, r)
        }
      }),
      i;
      var s = i._soundById(t);
      if (s) {
        if (!('number' == typeof e && e >= 0)) {
          if (i._webAudio) {
            var a = i.playing(t) ? C.ctx.currentTime - s._playStart : 0,
            l = s._rateSeek ? s._rateSeek - s._seek : 0;
            return s._seek + (l + a * Math.abs(s._rate))
          }
          return s._node.currentTime
        }
        var h = i.playing(t);
        h && i.pause(t, !0),
        s._seek = e,
        s._ended = !1,
        i._clearTimer(t),
        i._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e);
        var c = function () {
          h && i.play(t, !0),
          i._emit('seek', t)
        };
        if (h && !i._webAudio) {
          var u = function () {
            i._playLock ? setTimeout(u, 0) : c()
          };
          setTimeout(u, 0)
        } else c()
      }
      return i
    },
    playing: function (e) {
      var t = this;
      if ('number' == typeof e) {
        var i = t._soundById(e);
        return !!i && !i._paused
      }
      for (var r = 0; r < t._sounds.length; r++) if (!t._sounds[r]._paused) return !0;
      return !1
    },
    duration: function (e) {
      var t = this,
      i = t._duration,
      r = t._soundById(e);
      return r && (i = t._sprite[r._sprite][1] / 1000),
      i
    },
    state: function () {
      return this._state
    },
    unload: function () {
      for (var e = this, t = e._sounds, i = 0; i < t.length; i++) t[i]._paused || e.stop(t[i]._id),
      e._webAudio || (e._clearSound(t[i]._node), t[i]._node.removeEventListener('error', t[i]._errorFn, !1), t[i]._node.removeEventListener(C._canPlayEvent, t[i]._loadFn, !1), t[i]._node.removeEventListener('ended', t[i]._endFn, !1), C._releaseHtml5Audio(t[i]._node)),
      delete t[i]._node,
      e._clearTimer(t[i]._id);
      var r = C._howls.indexOf(e);
      r >= 0 && C._howls.splice(r, 1);
      var n = !0;
      for (i = 0; i < C._howls.length; i++) if (C._howls[i]._src === e._src || e._src.indexOf(C._howls[i]._src) >= 0) {
        n = !1;
        break
      }
      return x && n && delete x[e._src],
      C.noAudio = !1,
      e._state = 'unloaded',
      e._sounds = [
      ],
      e = null,
      null
    },
    on: function (e, t, i, r) {
      var n = this['_on' + e];
      return 'function' == typeof t && n.push(r ? {
        id: i,
        fn: t,
        once: r
      }
       : {
        id: i,
        fn: t
      }),
      this
    },
    off: function (e, t, i) {
      var r = this,
      n = r['_on' + e],
      o = 0;
      if ('number' == typeof t && (i = t, t = null), t || i) for (o = 0; o < n.length; o++) {
        var s = i === n[o].id;
        if (t === n[o].fn && s || !t && s) {
          n.splice(o, 1);
          break
        }
      } else if (e) r['_on' + e] = [
      ];
       else {
        var a = Object.keys(r);
        for (o = 0; o < a.length; o++) 0 === a[o].indexOf('_on') && Array.isArray(r[a[o]]) && (r[a[o]] = [
        ])
      }
      return r
    },
    once: function (e, t, i) {
      return this.on(e, t, i, 1),
      this
    },
    _emit: function (e, t, i) {
      for (var r = this, n = r['_on' + e], o = n.length - 1; o >= 0; o--) n[o].id && n[o].id !== t && 'load' !== e || (setTimeout(function (e) {
        e.call(this, t, i)
      }.bind(r, n[o].fn), 0), n[o].once && r.off(e, n[o].fn, n[o].id));
      return r._loadQueue(e),
      r
    },
    _loadQueue: function (e) {
      var t = this;
      if (t._queue.length > 0) {
        var i = t._queue[0];
        i.event === e && (t._queue.shift(), t._loadQueue()),
        e || i.action()
      }
      return t
    },
    _ended: function (e) {
      var t = this,
      i = e._sprite;
      if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100),
      t;
      var r = !(!e._loop && !t._sprite[i][2]);
      if (t._emit('end', e._id), !t._webAudio && r && t.stop(e._id, !0).play(e._id), t._webAudio && r) {
        t._emit('play', e._id),
        e._seek = e._start || 0,
        e._rateSeek = 0,
        e._playStart = C.ctx.currentTime;
        var n = 1000 * (e._stop - e._start) / Math.abs(e._rate);
        t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), n)
      }
      return t._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), C._autoSuspend()),
      t._webAudio || r || t.stop(e._id, !0),
      t
    },
    _clearTimer: function (e) {
      var t = this;
      if (t._endTimers[e]) {
        if ('function' != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
         else {
          var i = t._soundById(e);
          i && i._node && i._node.removeEventListener('ended', t._endTimers[e], !1)
        }
        delete t._endTimers[e]
      }
      return t
    },
    _soundById: function (e) {
      for (var t = this, i = 0; i < t._sounds.length; i++) if (e === t._sounds[i]._id) return t._sounds[i];
      return null
    },
    _inactiveSound: function () {
      var e = this;
      e._drain();
      for (var t = 0; t < e._sounds.length; t++) if (e._sounds[t]._ended) return e._sounds[t].reset();
      return new T(e)
    },
    _drain: function () {
      var e = this,
      t = e._pool,
      i = 0,
      r = 0;
      if (!(e._sounds.length < t)) {
        for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && i++;
        for (r = e._sounds.length - 1; r >= 0; r--) {
          if (i <= t) return;
          e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0), e._sounds.splice(r, 1), i--)
        }
      }
    },
    _getSoundIds: function (e) {
      if (void 0 === e) {
        for (var t = [
        ], i = 0; i < this._sounds.length; i++) t.push(this._sounds[i]._id);
        return t
      }
      return [e]
    },
    _refreshBuffer: function (e) {
      return e._node.bufferSource = C.ctx.createBufferSource(),
      e._node.bufferSource.buffer = x[this._src],
      e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
      e._node.bufferSource.loop = e._loop,
      e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0),
      e._node.bufferSource.playbackRate.setValueAtTime(e._rate, C.ctx.currentTime),
      this
    },
    _cleanBuffer: function (e) {
      var t = C._navigator && C._navigator.vendor.indexOf('Apple') >= 0;
      if (!e.bufferSource) return this;
      if (C._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
        e.bufferSource.buffer = C._scratchBuffer
      } catch (e) {
      }
      return e.bufferSource = null,
      this
    },
    _clearSound: function (e) {
      /MSIE |Trident\//.test(C._navigator && C._navigator.userAgent) || (e.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA')
    }
  };
  var T = function (e) {
    this._parent = e,
    this.init()
  };
  T.prototype = {
    init: function () {
      var e = this,
      t = e._parent;
      return e._muted = t._muted,
      e._loop = t._loop,
      e._volume = t._volume,
      e._rate = t._rate,
      e._seek = 0,
      e._paused = !0,
      e._ended = !0,
      e._sprite = '__default',
      e._id = ++C._counter,
      t._sounds.push(e),
      e.create(),
      e
    },
    create: function () {
      var e = this,
      t = e._parent,
      i = C._muted || e._muted || e._parent._muted ? 0 : e._volume;
      return t._webAudio ? (e._node = void 0 === C.ctx.createGain ? C.ctx.createGainNode() : C.ctx.createGain(), e._node.gain.setValueAtTime(i, C.ctx.currentTime), e._node.paused = !0, e._node.connect(C.masterGain)) : C.noAudio || (e._node = C._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener('error', e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(C._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener('ended', e._endFn, !1), e._node.src = t._src, e._node.preload = !0 === t._preload ? 'auto' : t._preload, e._node.volume = i * C.volume(), e._node.load()),
      e
    },
    reset: function () {
      var e = this,
      t = e._parent;
      return e._muted = t._muted,
      e._loop = t._loop,
      e._volume = t._volume,
      e._rate = t._rate,
      e._seek = 0,
      e._rateSeek = 0,
      e._paused = !0,
      e._ended = !0,
      e._sprite = '__default',
      e._id = ++C._counter,
      e
    },
    _errorListener: function () {
      var e = this;
      e._parent._emit('loaderror', e._id, e._node.error ? e._node.error.code : 0),
      e._node.removeEventListener('error', e._errorFn, !1)
    },
    _loadListener: function () {
      var e = this,
      t = e._parent;
      t._duration = Math.ceil(10 * e._node.duration) / 10,
      0 === Object.keys(t._sprite).length && (t._sprite = {
        __default: [
          0,
          1000 * t._duration
        ]
      }),
      'loaded' !== t._state && (t._state = 'loaded', t._emit('load'), t._loadQueue()),
      e._node.removeEventListener(C._canPlayEvent, e._loadFn, !1)
    },
    _endListener: function () {
      var e = this,
      t = e._parent;
      t._duration === 1 / 0 && (t._duration = Math.ceil(10 * e._node.duration) / 10, t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1000 * t._duration), t._ended(e)),
      e._node.removeEventListener('ended', e._endFn, !1)
    }
  };
  var x = {
  },
  E = function (e) {
    var t = e._src;
    if (x[t]) return e._duration = x[t].duration,
    void O(e);
    if (/^data:[^;]+;base64,/.test(t)) {
      for (var i = atob(t.split(',') [1]), r = new Uint8Array(i.length), n = 0; n < i.length; ++n) r[n] = i.charCodeAt(n);
      I(r.buffer, e)
    } else {
      var o = new XMLHttpRequest;
      o.open(e._xhr.method, t, !0),
      o.withCredentials = e._xhr.withCredentials,
      o.responseType = 'arraybuffer',
      e._xhr.headers && Object.keys(e._xhr.headers).forEach((function (t) {
        o.setRequestHeader(t, e._xhr.headers[t])
      })),
      o.onload = function () {
        var t = (o.status + '') [0];
        '0' === t || '2' === t || '3' === t ? I(o.response, e) : e._emit('loaderror', null, 'Failed loading audio file with status: ' + o.status + '.')
      },
      o.onerror = function () {
        e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [
        ], delete x[t], e.load())
      },
      A(o)
    }
  },
  A = function (e) {
    try {
      e.send()
    } catch (t) {
      e.onerror()
    }
  },
  I = function (e, t) {
    var i = function () {
      t._emit('loaderror', null, 'Decoding audio data failed.')
    },
    r = function (e) {
      e && t._sounds.length > 0 ? (x[t._src] = e, O(t, e)) : i()
    };
    'undefined' != typeof Promise && 1 === C.ctx.decodeAudioData.length ? C.ctx.decodeAudioData(e).then(r).catch(i) : C.ctx.decodeAudioData(e, r, i)
  },
  O = function (e, t) {
    t && !e._duration && (e._duration = t.duration),
    0 === Object.keys(e._sprite).length && (e._sprite = {
      __default: [
        0,
        1000 * e._duration
      ]
    }),
    'loaded' !== e._state && (e._state = 'loaded', e._emit('load'), e._loadQueue())
  },
  R = function () {
    if (C.usingWebAudio) {
      try {
        'undefined' != typeof AudioContext ? C.ctx = new AudioContext : 'undefined' != typeof webkitAudioContext ? C.ctx = new webkitAudioContext : C.usingWebAudio = !1
      } catch (e) {
        C.usingWebAudio = !1
      }
      C.ctx || (C.usingWebAudio = !1);
      var e = /iP(hone|od|ad)/.test(C._navigator && C._navigator.platform),
      t = C._navigator && C._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
      i = t ? parseInt(t[1], 10) : null;
      if (e && i && i < 9) {
        var r = /safari/.test(C._navigator && C._navigator.userAgent.toLowerCase());
        C._navigator && !r && (C.usingWebAudio = !1)
      }
      C.usingWebAudio && (C.masterGain = void 0 === C.ctx.createGain ? C.ctx.createGainNode() : C.ctx.createGain(), C.masterGain.gain.setValueAtTime(C._muted ? 0 : C._volume, C.ctx.currentTime), C.masterGain.connect(C.ctx.destination)),
      C._setup()
    }
  };
  !function (e, t, i, r) {
    var n;
    e.prototype._pos = [
      0,
      0,
      0
    ],
    e.prototype._orientation = [
      0,
      0,
      - 1,
      0,
      1,
      0
    ],
    e.prototype.stereo = function (e) {
      var t = this;
      if (!t.ctx || !t.ctx.listener) return t;
      for (var i = t._howls.length - 1; i >= 0; i--) t._howls[i].stereo(e);
      return t
    },
    e.prototype.pos = function (e, i, r) {
      var n = this;
      return n.ctx && n.ctx.listener ? (i = 'number' != typeof i ? n._pos[1] : i, r = 'number' != typeof r ? n._pos[2] : r, 'number' != typeof e ? n._pos : (n._pos = [
        e,
        i,
        r
      ], void 0 !== n.ctx.listener.positionX ? (n.ctx.listener.positionX.setTargetAtTime(n._pos[0], t.ctx.currentTime, 0.1), n.ctx.listener.positionY.setTargetAtTime(n._pos[1], t.ctx.currentTime, 0.1), n.ctx.listener.positionZ.setTargetAtTime(n._pos[2], t.ctx.currentTime, 0.1)) : n.ctx.listener.setPosition(n._pos[0], n._pos[1], n._pos[2]), n)) : n
    },
    e.prototype.orientation = function (e, i, r, n, o, s) {
      var a = this;
      if (!a.ctx || !a.ctx.listener) return a;
      var l = a._orientation;
      return i = 'number' != typeof i ? l[1] : i,
      r = 'number' != typeof r ? l[2] : r,
      n = 'number' != typeof n ? l[3] : n,
      o = 'number' != typeof o ? l[4] : o,
      s = 'number' != typeof s ? l[5] : s,
      'number' != typeof e ? l : (a._orientation = [
        e,
        i,
        r,
        n,
        o,
        s
      ], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, t.ctx.currentTime, 0.1), a.ctx.listener.forwardY.setTargetAtTime(i, t.ctx.currentTime, 0.1), a.ctx.listener.forwardZ.setTargetAtTime(r, t.ctx.currentTime, 0.1), a.ctx.listener.upX.setTargetAtTime(n, t.ctx.currentTime, 0.1), a.ctx.listener.upY.setTargetAtTime(o, t.ctx.currentTime, 0.1), a.ctx.listener.upZ.setTargetAtTime(s, t.ctx.currentTime, 0.1)) : a.ctx.listener.setOrientation(e, i, r, n, o, s), a)
    },
    i.prototype.init = (n = i.prototype.init, function (e) {
      var t = this;
      return t._orientation = e.orientation || [
        1,
        0,
        0
      ],
      t._stereo = e.stereo || null,
      t._pos = e.pos || null,
      t._pannerAttr = {
        coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
        coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
        coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
        distanceModel: void 0 !== e.distanceModel ? e.distanceModel : 'inverse',
        maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 10000,
        panningModel: void 0 !== e.panningModel ? e.panningModel : 'HRTF',
        refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
        rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
      },
      t._onstereo = e.onstereo ? [
        {
          fn: e.onstereo
        }
      ] : [
      ],
      t._onpos = e.onpos ? [
        {
          fn: e.onpos
        }
      ] : [
      ],
      t._onorientation = e.onorientation ? [
        {
          fn: e.onorientation
        }
      ] : [
      ],
      n.call(this, e)
    }),
    i.prototype.stereo = function (e, i) {
      var r = this;
      if (!r._webAudio) return r;
      if ('loaded' !== r._state) return r._queue.push({
        event: 'stereo',
        action: function () {
          r.stereo(e, i)
        }
      }),
      r;
      var n = void 0 === t.ctx.createStereoPanner ? 'spatial' : 'stereo';
      if (void 0 === i) {
        if ('number' != typeof e) return r._stereo;
        r._stereo = e,
        r._pos = [
          e,
          0,
          0
        ]
      }
      for (var s = r._getSoundIds(i), a = 0; a < s.length; a++) {
        var l = r._soundById(s[a]);
        if (l) {
          if ('number' != typeof e) return l._stereo;
          l._stereo = e,
          l._pos = [
            e,
            0,
            0
          ],
          l._node && (l._pannerAttr.panningModel = 'equalpower', l._panner && l._panner.pan || o(l, n), 'spatial' === n ? void 0 !== l._panner.positionX ? (l._panner.positionX.setValueAtTime(e, t.ctx.currentTime), l._panner.positionY.setValueAtTime(0, t.ctx.currentTime), l._panner.positionZ.setValueAtTime(0, t.ctx.currentTime)) : l._panner.setPosition(e, 0, 0) : l._panner.pan.setValueAtTime(e, t.ctx.currentTime)),
          r._emit('stereo', l._id)
        }
      }
      return r
    },
    i.prototype.pos = function (e, i, r, n) {
      var s = this;
      if (!s._webAudio) return s;
      if ('loaded' !== s._state) return s._queue.push({
        event: 'pos',
        action: function () {
          s.pos(e, i, r, n)
        }
      }),
      s;
      if (i = 'number' != typeof i ? 0 : i, r = 'number' != typeof r ? - 0.5 : r, void 0 === n) {
        if ('number' != typeof e) return s._pos;
        s._pos = [
          e,
          i,
          r
        ]
      }
      for (var a = s._getSoundIds(n), l = 0; l < a.length; l++) {
        var h = s._soundById(a[l]);
        if (h) {
          if ('number' != typeof e) return h._pos;
          h._pos = [
            e,
            i,
            r
          ],
          h._node && (h._panner && !h._panner.pan || o(h, 'spatial'), void 0 !== h._panner.positionX ? (h._panner.positionX.setValueAtTime(e, t.ctx.currentTime), h._panner.positionY.setValueAtTime(i, t.ctx.currentTime), h._panner.positionZ.setValueAtTime(r, t.ctx.currentTime)) : h._panner.setPosition(e, i, r)),
          s._emit('pos', h._id)
        }
      }
      return s
    },
    i.prototype.orientation = function (e, i, r, n) {
      var s = this;
      if (!s._webAudio) return s;
      if ('loaded' !== s._state) return s._queue.push({
        event: 'orientation',
        action: function () {
          s.orientation(e, i, r, n)
        }
      }),
      s;
      if (i = 'number' != typeof i ? s._orientation[1] : i, r = 'number' != typeof r ? s._orientation[2] : r, void 0 === n) {
        if ('number' != typeof e) return s._orientation;
        s._orientation = [
          e,
          i,
          r
        ]
      }
      for (var a = s._getSoundIds(n), l = 0; l < a.length; l++) {
        var h = s._soundById(a[l]);
        if (h) {
          if ('number' != typeof e) return h._orientation;
          h._orientation = [
            e,
            i,
            r
          ],
          h._node && (h._panner || (h._pos || (h._pos = s._pos || [
            0,
            0,
            - 0.5
          ]), o(h, 'spatial')), void 0 !== h._panner.orientationX ? (h._panner.orientationX.setValueAtTime(e, t.ctx.currentTime), h._panner.orientationY.setValueAtTime(i, t.ctx.currentTime), h._panner.orientationZ.setValueAtTime(r, t.ctx.currentTime)) : h._panner.setOrientation(e, i, r)),
          s._emit('orientation', h._id)
        }
      }
      return s
    },
    i.prototype.pannerAttr = function () {
      var e,
      t,
      i,
      r = this,
      n = arguments;
      if (!r._webAudio) return r;
      if (0 === n.length) return r._pannerAttr;
      if (1 === n.length) {
        if ('object' != typeof n[0]) return (i = r._soundById(parseInt(n[0], 10))) ? i._pannerAttr : r._pannerAttr;
        e = n[0],
        void 0 === t && (e.pannerAttr || (e.pannerAttr = {
          coneInnerAngle: e.coneInnerAngle,
          coneOuterAngle: e.coneOuterAngle,
          coneOuterGain: e.coneOuterGain,
          distanceModel: e.distanceModel,
          maxDistance: e.maxDistance,
          refDistance: e.refDistance,
          rolloffFactor: e.rolloffFactor,
          panningModel: e.panningModel
        }), r._pannerAttr = {
          coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : r._coneInnerAngle,
          coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : r._coneOuterAngle,
          coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : r._coneOuterGain,
          distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : r._distanceModel,
          maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
          refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
          rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : r._rolloffFactor,
          panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : r._panningModel
        })
      } else 2 === n.length && (e = n[0], t = parseInt(n[1], 10));
      for (var s = r._getSoundIds(t), a = 0; a < s.length; a++) if (i = r._soundById(s[a])) {
        var l = i._pannerAttr;
        l = {
          coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : l.coneInnerAngle,
          coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : l.coneOuterAngle,
          coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : l.coneOuterGain,
          distanceModel: void 0 !== e.distanceModel ? e.distanceModel : l.distanceModel,
          maxDistance: void 0 !== e.maxDistance ? e.maxDistance : l.maxDistance,
          refDistance: void 0 !== e.refDistance ? e.refDistance : l.refDistance,
          rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : l.rolloffFactor,
          panningModel: void 0 !== e.panningModel ? e.panningModel : l.panningModel
        };
        var h = i._panner;
        h || (i._pos || (i._pos = r._pos || [
          0,
          0,
          - 0.5
        ]), o(i, 'spatial'), h = i._panner),
        h.coneInnerAngle = l.coneInnerAngle,
        h.coneOuterAngle = l.coneOuterAngle,
        h.coneOuterGain = l.coneOuterGain,
        h.distanceModel = l.distanceModel,
        h.maxDistance = l.maxDistance,
        h.refDistance = l.refDistance,
        h.rolloffFactor = l.rolloffFactor,
        h.panningModel = l.panningModel
      }
      return r
    },
    r.prototype.init = function (e) {
      return function () {
        var t = this,
        i = t._parent;
        t._orientation = i._orientation,
        t._stereo = i._stereo,
        t._pos = i._pos,
        t._pannerAttr = i._pannerAttr,
        e.call(this),
        t._stereo ? i.stereo(t._stereo) : t._pos && i.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
      }
    }(r.prototype.init),
    r.prototype.reset = function (e) {
      return function () {
        var t = this,
        i = t._parent;
        return t._orientation = i._orientation,
        t._stereo = i._stereo,
        t._pos = i._pos,
        t._pannerAttr = i._pannerAttr,
        t._stereo ? i.stereo(t._stereo) : t._pos ? i.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0), t._panner = void 0, i._refreshBuffer(t)),
        e.call(this)
      }
    }(r.prototype.reset);
    var o = function (e, i) {
      'spatial' === (i = i || 'spatial') ? (e._panner = t.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], t.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], t.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], t.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], t.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], t.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], t.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = t.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, t.ctx.currentTime)),
      e._panner.connect(e._node),
      e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
    }
  }(b, C, w, T);
  const D = 'iPhone' == s.OS || 'Android' == s.OS || 'HarmonyOS' == s.OS ? 2048 : 4096;
  class M {
    constructor() {
      this._instanceID = void 0,
      this._ifSaveOriginalImageInACanvas = !1,
      this.oriCanvas = null,
      this.oriCanvasData = null,
      this.canvas = null,
      this.bFilterRegionInJs = !1,
      this._region = null,
      this._timeStartDecode = null,
      this._timeEnterInnerDBR = null,
      this._timeGetMessage = null,
      this.decodeRecords = {
      },
      this.bDestroyed = !1,
      this._lastErrorCode = 0,
      this._lastErrorString = '',
      this._lastInnerDecodeDuration = 0,
      this.intervalTime = 0,
      this._intervalGetVideoFrame = 0,
      this.array_getFrameTimeCost = [
      ],
      this.array_decodeFrameTimeCost = [
      ],
      this._indexCurrentDecodingFrame = 0,
      this._arrPolygons = [
      ],
      this._bPauseScan = !1,
      this._intervalDetectVideoPause = 1000,
      this._soundSource = 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAABQAAAkAAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgwMDAwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC41NAAAAAAAAAAAAAAAACQEUQAAAAAAAAJAk0uXRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAANQAbGeUEQAAHZYZ3fASqD4P5TKBgocg+Bw/8+CAYBA4XB9/4EBAEP4nB9+UOf/6gfUCAIKyjgQ/Kf//wfswAAAwQA/+MYxAYOqrbdkZGQAMA7DJLCsQxNOij///////////+tv///3RWiZGBEhsf/FO/+LoCSFs1dFVS/g8f/4Mhv0nhqAieHleLy/+MYxAYOOrbMAY2gABf/////////////////usPJ66R0wI4boY9/8jQYg//g2SPx1M0N3Z0kVJLIs///Uw4aMyvHJJYmPBYG/+MYxAgPMALBucAQAoGgaBoFQVBUFQWDv6gZBUFQVBUGgaBr5YSgqCoKhIGg7+IQVBUFQVBoGga//SsFSoKnf/iVTEFNRTMu/+MYxAYAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV',
      this.beepSound = new w({
        src: [
          'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAABQAAAkAAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgwMDAwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC41NAAAAAAAAAAAAAAAACQEUQAAAAAAAAJAk0uXRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAANQAbGeUEQAAHZYZ3fASqD4P5TKBgocg+Bw/8+CAYBA4XB9/4EBAEP4nB9+UOf/6gfUCAIKyjgQ/Kf//wfswAAAwQA/+MYxAYOqrbdkZGQAMA7DJLCsQxNOij///////////+tv///3RWiZGBEhsf/FO/+LoCSFs1dFVS/g8f/4Mhv0nhqAieHleLy/+MYxAYOOrbMAY2gABf/////////////////usPJ66R0wI4boY9/8jQYg//g2SPx1M0N3Z0kVJLIs///Uw4aMyvHJJYmPBYG/+MYxAgPMALBucAQAoGgaBoFQVBUFQWDv6gZBUFQVBUGgaBr5YSgqCoKhIGg7+IQVBUFQVBoGga//SsFSoKnf/iVTEFNRTMu/+MYxAYAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV'
        ],
        onplayerror: (e, t) =>{
          console.warn(`Sound '${ e }' playback failure: ${ t }`)
        }
      }),
      this.bPlaySoundOnSuccessfulRead = !1,
      this.bVibrateOnSuccessfulRead = !1,
      this.vibrateDuration = 300,
      this.captureAndDecodeInParallel = !0,
      this._dce = null,
      this._imgSource = null,
      this._maxCvsSideLength = D,
      this._tempSolutionStatus = 'closed'
    }
    static get version() {
      return this._version
    }
    static get license() {
      return this._license
    }
    static set license(e) {
      ((e, t) =>{
        const i = e;
        if (!i._pLoad.isEmpty) throw new Error('`license`' + d);
        i._license = t
      }) (M, e)
    }
    static get productKeys() {
      return this._license
    }
    static set productKeys(e) {
      M.license = e
    }
    static get handshakeCode() {
      return this._license
    }
    static set handshakeCode(e) {
      M.license = e
    }
    static get organizationID() {
      return this._license
    }
    static set organizationID(e) {
      M.license = e
    }
    static set sessionPassword(e) {
      ((e, t) =>{
        const i = e;
        if (!i._pLoad.isEmpty) throw new Error('`sessionPassword`' + d);
        i._sessionPassword = t
      }) (M, e)
    }
    static get sessionPassword() {
      return this._sessionPassword
    }
    static async detectEnvironment() {
      return await(async() =>({
        wasm: a,
        worker: l,
        getUserMedia: h,
        camera: await c(),
        browser: s.browser,
        version: s.version,
        OS: s.OS
      })) ()
    }
    static get engineResourcePath() {
      return this._engineResourcePath
    }
    static set engineResourcePath(e) {
      if (!this._pLoad.isEmpty) throw new Error('`engineResourcePath` is not allowed to change after `createInstance` or `loadWasm` is called.');
      M._engineResourcePath = (e=>{
        if (null == e && (e = './'), !t) {
          let t = document.createElement('a');
          t.href = e,
          e = t.href
        }
        return e.endsWith('/') || (e += '/'),
        e
      }) (e)
    }
    static get licenseServer() {
      return this._licenseServer
    }
    static set licenseServer(e) {
      ((e, t) =>{
        const i = e;
        if (!i._pLoad.isEmpty) throw new Error('`licenseServer`' + d);
        i._licenseServer = _(t)
      }) (M, e)
    }
    static get deviceFriendlyName() {
      return this._deviceFriendlyName
    }
    static set deviceFriendlyName(e) {
      ((e, t) =>{
        const i = e;
        if (!i._pLoad.isEmpty) throw new Error('`deviceFriendlyName`' + d);
        i._deviceFriendlyName = t || ''
      }) (M, e)
    }
    static get _bUseFullFeature() {
      return this.__bUseFullFeature
    }
    static set _bUseFullFeature(e) {
      if (!this._pLoad.isEmpty) throw new Error('`_bUseFullFeature` is not allowed to change after `createInstance` or `loadWasm` is called.');
      M.__bUseFullFeature = e
    }
    static isImageSource(e) {
      return !(!e || 'object' != typeof e || Array.isArray(e)) && 'getImage' in e
    }
    static isDSImage(e) {
      return !(!e || 'object' != typeof e || Array.isArray(e)) && ('data' in e && ('width' in e && ('height' in e && 'pixelFormat' in e)))
    }
    static isDCEFrame(e) {
      return !(!e || 'object' != typeof e || Array.isArray(e)) && ('data' in e && ('region' in e && ('sx' in e && ('sy' in e && ('width' in e && ('height' in e && ('colorMode' in e && ('timeSpent' in e && ('timeStamp' in e && ('isCropped' in e && ('toCanvas' in e && ('_sWidth' in e && ('_sHeight' in e && '_bUseWebGL' in e)))))))))))))
    }
    get ifSaveOriginalImageInACanvas() {
      return this._ifSaveOriginalImageInACanvas
    }
    set ifSaveOriginalImageInACanvas(e) {
      this._ifSaveOriginalImageInACanvas = e
    }
    getOriginalImageInACanvas() {
      return !this.oriCanvas && this.oriCanvasData ? this.oriCanvasData.toCanvas() : this.oriCanvas
    }
    set region(e) {
      this._region = e,
      this.array_decodeFrameTimeCost.length = 0,
      this.array_getFrameTimeCost.length = 0,
      this._intervalGetVideoFrame = 0
    }
    get region() {
      return this._region
    }
    static isWasmLoaded() {
      return this._pLoad.isFulfilled
    }
    isContextDestroyed() {
      return this.bDestroyed
    }
    static get lastErrorCode() {
      return this._lastErrorCode
    }
    static get lastErrorString() {
      return this._lastErrorString
    }
    get lastErrorCode() {
      return this._lastErrorCode
    }
    get lastErrorString() {
      return this._lastErrorString
    }
    static get defaultUIElementURL() {
      var e;
      return null === (e = M._defaultUIElementURL) || void 0 === e ? void 0 : e.replace('@engineResourcePath/', M.engineResourcePath)
    }
    static set defaultUIElementURL(e) {
      M._defaultUIElementURL = e
    }
    static _fireHTTPSWarnning() {
      M.onWarning && location && 'https:' !== location.protocol && setTimeout((() =>{
        M.onWarning && M.onWarning({
          id: 2,
          message: 'Not connected via SSL (HTTPS), the SDK may not work correctly.'
        })
      }), 0)
    }
    get soundSource() {
      return this._soundSource
    }
    set soundSource(e) {
      this._soundSource = e,
      this.beepSound = new w({
        src: [
          this._soundSource
        ],
        onplayerror: (e, t) =>{
          console.warn(`Sound '${ e }' playback failure: ${ t }`)
        }
      })
    }
    get whenToPlaySoundforSuccessfulRead() {
      return !0 === this.bPlaySoundOnSuccessfulRead ? 'frame' : this.bPlaySoundOnSuccessfulRead ? this.bPlaySoundOnSuccessfulRead : 'never'
    }
    set whenToPlaySoundforSuccessfulRead(e) {
      this.bPlaySoundOnSuccessfulRead = 'never' !== e && e
    }
    get whenToVibrateforSuccessfulRead() {
      return !0 === this.bVibrateOnSuccessfulRead ? 'frame' : this.bVibrateOnSuccessfulRead ? this.bVibrateOnSuccessfulRead : 'never'
    }
    set whenToVibrateforSuccessfulRead(e) {
      this.bVibrateOnSuccessfulRead = 'never' !== e && e
    }
    set dce(e) {
      this._dce = e
    }
    get dce() {
      return !this._dce || this._dce.isDisposed ? null : this._dce
    }
    set maxCvsSideLength(e) {
      this._maxCvsSideLength = e,
      this._dceControler && this._dceControler.setDisiredValue(this, 'maxCvsSideLength', e)
    }
    get maxCvsSideLength() {
      return this._maxCvsSideLength
    }
    async _registerDCEControler() {
      if (!this.dce) return;
      M._onLog && M._onLog('_registerDCEControler()');
      const e = this.dce;
      this._dceControler = e._createControler();
      const t = this._dceControler;
      t.register(this),
      t.setDisiredValue(this, 'refreshInterval', 200),
      t.setDisiredValue(this, 'maxCvsSideLength', this._maxCvsSideLength),
      this._styleIdBeforeVerification = this.dce.createDrawingStyle({
        fillStyle: 'rgba(248,252,0,0.2)',
        strokeStyle: 'transparent',
        paintMode: 'strokeAndFill'
      });
      try {
        ResizeObserver
      } catch (e) {
        'ReferenceError' === e.name && window && (window.ResizeObserver = void 0)
      }
      const i = e.getUIElement(),
      r = this.dce.constructor;
      if ('@engineResourcePath/dce.ui.html' === r._defaultUIElementURL) try {
        i ? i === t._innerSetUI && (await e.setUIElement(`${ r.engineResourcePath }dce.ui.html`), t._innerSetUI = e.getUIElement()) : (await e.setUIElement(`${ r.engineResourcePath }dbr.ui.html`), t._innerSetUI = e.getUIElement())
      } catch (t) {
        await e.setUIElement(r.defaultUIElementURL)
      } else i || await e.setUIElement(r.defaultUIElementURL);
      this.callbackCameraChange = () =>{
        this._drawResults(null),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0
      },
      this.callbackResolutionChange = () =>{
        this._drawResults(null),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0
      },
      this.callbackCameraClose = () =>{
        this.stopScanning(!0),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0,
        this._bPauseScan = !1
      },
      this.callbackSingleFrameAcquired = async e=>{
        let t = await this._decode_DCEFrame(e, {
          bCopyData: !1
        }),
        i = null;
        if (t && t.length) {
          const {
            sx: r,
            sy: n,
            width: o,
            height: s,
            _sWidth: a,
            _sHeight: l
          }
          = e;
          i = t.map((e=>({
            localizationResult: JSON.parse(JSON.stringify(e.localizationResult))
          }))),
          M.recalculateResultLocation(i, r, n, a, l, o, s)
        }
        if (this._drawResults(i), await this.clearMapDecodeRecord(), this.onImageRead && this.dce.isOpen() && !this._bPauseScan) {
          let e = this._cloneDecodeResults(t);
          this.onImageRead(e)
        }
        if (this.onUniqueRead && this.dce.isOpen() && !this._bPauseScan) for (let e of t) this.onUniqueRead(e.barcodeText, this._cloneDecodeResults(e))
      },
      e.on('cameraChange', this.callbackCameraChange),
      e.on('resolutionChange', this.callbackResolutionChange),
      e.on('cameraClose', this.callbackCameraClose),
      e.on('singleFrameAcquired', this.callbackSingleFrameAcquired)
    }
    _logoutDCEControler() {
      this.dce && this._dceControler && (M._onLog && M._onLog('_logoutDCEControler()'), this._dceControler.logout(this), this.dce.off('cameraChange', this.callbackCameraChange), this.dce.off('resolutionChange', this.callbackResolutionChange), this.dce.off('cameraClose', this.callbackCameraClose), this.dce.off('singleFrameAcquired', this.callbackSingleFrameAcquired), this._dceControler = null, this.dce = null)
    }
    async setImageSource(e, t) {
      if (null == e) return this._imgSource = null,
      this._logoutDCEControler(),
      void (this._drawingItemNamespace = null);
      if (e && e.isCameraEnhancer) this.dce = e,
      await this._registerDCEControler(),
      this._imgSource = null;
       else {
        if (!M.isImageSource(e)) throw new Error('Invalid value.');
        this._logoutDCEControler(),
        this._imgSource = e
      }
      t && t.resultsHighlightBaseShapes && (this._drawingItemNamespace = t.resultsHighlightBaseShapes)
    }
    static async loadWasm() {
      if (this._pLoad.isEmpty) {
        let {
          lt: e,
          l: t,
          ls: i,
          sp: r,
          rmk: n
        }
        = (e=>{
          const t = e;
          if (t._pLoad.isEmpty) {
            let e,
            i,
            r = t._license || '',
            n = JSON.parse(JSON.stringify(t._licenseServer)),
            o = t._sessionPassword,
            s = 0;
            if (r.startsWith('t') || r.startsWith('f')) s = 0;
             else if (0 === r.length || r.startsWith('P') || r.startsWith('L') || r.startsWith('Y') || r.startsWith('A')) s = 1;
             else {
              s = 2;
              const t = r.indexOf(':');
              if ( - 1 != t && (r = r.substring(t + 1)), r.startsWith('DLS2')) {
                let t = r.substring(4);
                try {
                  t = atob(t)
                } catch (e) {
                  throw new Error('Format Error: The license string you specified is invalid, please check to make sure it is correct.')
                }
                const i = JSON.parse(t);
                if (r = i.handshakeCode ? i.handshakeCode : i.organizationID ? i.organizationID : '', 'number' == typeof r && (r = JSON.stringify(r)), 0 === n.length) {
                  let e = [
                  ];
                  i.mainServerURL && (e[0] = i.mainServerURL),
                  i.standbyServerURL && (e[1] = i.standbyServerURL),
                  n = _(e)
                }
                !o && i.sessionPassword && (o = i.sessionPassword),
                e = i.remark
              }('200001' === r || r.startsWith('200001-')) && (n && n.length || (r = '')),
              r || (s = 1)
            }
            if (s && (globalThis.crypto || (i = 'Please upgrade your browser to support online key.'), globalThis.crypto.subtle || (i = 'Require https to use online key in this browser.')), i) {
              if (1 !== s) throw new Error(i);
              s = 0,
              console.warn(i),
              t._lastErrorCode = - 1,
              t._lastErrorString = i
            }
            return 1 === s && (r = '', console.warn('Applying for a public trial license ...')),
            {
              lt: s,
              l: r,
              ls: n,
              sp: o,
              rmk: e
            }
          }
          throw new Error('Can\'t preprocess license again' + d)
        }) (M);
        this._pLoad.task = async(o, a) =>{
          let l = M.engineResourcePath + M._workerName;
          M.engineResourcePath.startsWith(location.origin) || (l = await fetch(l).then((e=>e.blob())).then((e=>URL.createObjectURL(e)))),
          M._dbrWorker = new Worker(l),
          M._dbrWorker.onerror = e=>{
            let t = new Error(e.message);
            a(t)
          },
          M._dbrWorker.onmessage = async t=>{
            let i = t.data ? t.data : t;
            switch (i.type) {
              case 'log':
                M._onLog && M._onLog(i.message);
                break;
              case 'load':
                {
                  i.message && (i.message = i.message.replace('(https://www.dynamsoft.com/purchase-center/)', '(https://www.dynamsoft.com/store/dynamsoft-barcode-reader/#javascript)'));
                  let t,
                  r = !1;
                  1 === e && (r = !0),
                  i.success ? (M._dbrWorker.onerror = null, M._version = i.version + '(JS ' + M._jsVersion + '.' + M._jsEditVersion + ')', M._onLog && M._onLog('load dbr worker success'), i.message && console.warn(i.message)) : (t = new Error(i.message), t.stack = i.stack + '\n' + t.stack, r || 111 == i.ltsErrorCode && - 1 != i.message.toLowerCase().indexOf('trial license') && (r = !0)),
                  r && M.showDialog(i.success ? 'warn' : 'error', i.message),
                  i.success ? o() : a(t);
                  break
                }
              case 'task':
                {
                  let e = i.id,
                  t = i.body;
                  try {
                    M._taskCallbackMap.get(e) (t),
                    M._taskCallbackMap.delete(e)
                  } catch (t) {
                    throw M._taskCallbackMap.delete(e),
                    t
                  }
                  break
                }
              default:
                M._onLog && M._onLog(t)
            }
          },
          M._dbrWorker.postMessage({
            type: 'loadWasm',
            engineResourcePath: M.engineResourcePath,
            bUseFullFeature: M._bUseFullFeature,
            bd: M._bWasmDebug,
            v: M._jsVersion,
            brtk: !!e,
            bptk: 1 === e,
            l: t,
            dm: location.origin.startsWith('http') ? location.origin : 'https://localhost',
            os: s,
            fn: M.deviceFriendlyName,
            ls: i,
            sp: r,
            rmk: n
          })
        }
      }
      await this._pLoad
    }
    static async showDialog(e, t) {
      await(async(e, t, i) =>{
        if (!e._bNeverShowDialog) try {
          let r = await fetch(e.engineResourcePath + 'dls.license.dialog.html');
          if (!r.ok) throw Error('Get license dialog fail. Network Error: ' + r.statusText);
          let n = await r.text();
          if (!n.trim().startsWith('<')) throw Error('Get license dialog fail. Can\'t get valid HTMLElement.');
          let o = document.createElement('div');
          o.innerHTML = n;
          let s = [
          ];
          for (let e = 0; e < o.childElementCount; ++e) {
            let t = o.children[e];
            t instanceof HTMLStyleElement && (s.push(t), document.head.append(t))
          }
          let a = 1 == o.childElementCount ? o.children[0] : o;
          a.remove();
          let l,
          h,
          c,
          u,
          d,
          f = [
            a
          ],
          g = a.children;
          for (let e of g) f.push(e);
          for (let e = 0; e < f.length; ++e) for (let t of f[e].children) f.push(t);
          for (let e of f) if (!l && e.classList.contains('dls-license-mask')) l = e,
          e.addEventListener('click', (t=>{
            if (e == t.target) {
              a.remove();
              for (let e of s) e.remove()
            }
          }));
           else if (!h && e.classList.contains('dls-license-icon-close')) h = e,
          e.addEventListener('click', (() =>{
            a.remove();
            for (let e of s) e.remove()
          }));
           else if (!c && e.classList.contains('dls-license-icon-error')) c = e,
          'error' != t && e.remove();
           else if (!u && e.classList.contains('dls-license-icon-warn')) u = e,
          'warn' != t && e.remove();
           else if (!d && e.classList.contains('dls-license-msg-content')) {
            d = e;
            let t = i;
            for (; t; ) {
              let i = t.indexOf('['),
              r = t.indexOf(']', i),
              n = t.indexOf('(', r),
              o = t.indexOf(')', n);
              if ( - 1 == i || - 1 == r || - 1 == n || - 1 == o) {
                e.appendChild(new Text(t));
                break
              }
              i > 0 && e.appendChild(new Text(t.substring(0, i)));
              let s = document.createElement('a'),
              a = t.substring(i + 1, r);
              s.innerText = a;
              let l = t.substring(n + 1, o);
              s.setAttribute('href', l),
              s.setAttribute('target', '_blank'),
              e.appendChild(s),
              t = t.substring(o + 1)
            }
          }
          document.body.appendChild(a)
        } catch (t) {
          e._onLog && e._onLog(t.message || t)
        }
      }) (this, e, t)
    }
    static async createInstanceInWorker(e = !1) {
      return await M.loadWasm(),
      await new Promise(((t, i) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (e=>{
          if (e.success) return t(e.instanceID);
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            i(t)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'createInstance',
          id: r,
          bScanner: e
        })
      }))
    }
    static async createInstance() {
      let e = new M;
      return e._instanceID = await M.createInstanceInWorker(),
      M._fireHTTPSWarnning(),
      e
    }
    async clearMapDecodeRecord() {
      return await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) return e();
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'clearMapDecodeRecord',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async decode(e) {
      M._onLog && M._onLog('decode(source: any)'),
      M._onLog && (this._timeStartDecode = Date.now());
      {
        let t = {
        };
        return !this.region || this.region instanceof Array || (t.region = JSON.parse(JSON.stringify(this.region))),
        e instanceof Blob ? await this._decode_Blob(e, t) : e instanceof ArrayBuffer ? await this._decode_ArrayBuffer(e, t) : e instanceof Uint8Array || e instanceof Uint8ClampedArray ? await this._decode_Uint8Array(e, t) : e instanceof HTMLImageElement || 'undefined' != typeof ImageBitmap && e instanceof ImageBitmap ? await this._decode_Image(e, t) : e instanceof HTMLCanvasElement ? await this._decode_Canvas(e, t) : e instanceof HTMLVideoElement ? await this._decode_Video(e, t) : 'string' == typeof e ? 'data:image/' == e.substring(0, 11) ? await this._decode_Base64(e, t) : await this._decode_Url(e, t) : M.isDCEFrame(e) ? (t.bCopyData = !0, await this._decode_DCEFrame(e, t)) : M.isDSImage(e) ? (t.bCopyData = !0, await this._decode_DSImage(e, t)) : await Promise.reject(TypeError('\'_decode(source, config)\': Type of \'source\' should be \'Blob\', \'ArrayBuffer\', \'Uint8Array\', \'HTMLImageElement\', \'HTMLCanvasElement\', \'HTMLVideoElement\', \'String(base64 with image mime)\' or \'String(url)\'.'))
      }
    }
    async decodeBase64String(e) {
      let t = {
      };
      return !this.region || this.region instanceof Array || (t.region = JSON.parse(JSON.stringify(this.region))),
      this._decode_Base64(e, t)
    }
    async decodeUrl(e) {
      let t = {
      };
      return !this.region || this.region instanceof Array || (t.region = JSON.parse(JSON.stringify(this.region))),
      this._decode_Url(e, t)
    }
    async _decodeBuffer_Uint8Array(e, t, i, r, n, o) {
      return await new Promise(((s, a) =>{
        let l = M._nextTaskID++;
        M._taskCallbackMap.set(l, (e=>{
          if (e.success) {
            let t,
            i = M._onLog ? Date.now() : 0;
            M._onLog && M._onLog('worker return result: ' + i),
            this._lastInnerDecodeDuration = e.duration;
            try {
              t = this._handleRetJsonString(e.decodeReturn)
            } catch (e) {
              return a(e)
            }
            if (M._onLog) {
              let e = Date.now();
              M._onLog('DBR getting message from worker timestamp: ' + i),
              M._onLog('From DBR staring decoding to entering worker costs: ' + (this._timeEnterInnerDBR - this._timeStartDecode)),
              M._onLog('From DBR entering worker to returning message from worker costs: ' + (i - this._timeEnterInnerDBR)),
              M._onLog('Handling results from DBR worker costs: ' + (e - i)),
              M._onLog('Total decoding image costs: ' + (e - this._timeStartDecode))
            }
            return s(t)
          }
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            a(t)
          }
        })),
        this._timeEnterInnerDBR = Date.now(),
        M._onLog && M._onLog('Sending buffer to worker timestamp:' + this._timeEnterInnerDBR),
        M._dbrWorker.postMessage({
          type: 'decodeBuffer',
          id: l,
          instanceID: this._instanceID,
          body: {
            buffer: e,
            width: t,
            height: i,
            stride: r,
            format: n,
            config: o
          }
        }, [
          e.buffer
        ]),
        M._onLog && o && o.timeStamp && M._onLog('Delay of decoding image: ' + (this._timeEnterInnerDBR - o.timeStamp))
      }))
    }
    async _decodeBuffer_Blob(e, t, i, r, n, o) {
      M._onLog && M._onLog('_decodeBuffer_Blob(buffer,width,height,stride,format)');
      const s = e.arrayBuffer ? await e.arrayBuffer() : await new Promise(((t, i) =>{
        let r = new FileReader;
        r.readAsArrayBuffer(e),
        r.onload = () =>{
          t(r.result)
        },
        r.onerror = () =>{
          i(r.error)
        }
      }));
      return await this._decodeBuffer_Uint8Array(new Uint8Array(s), t, i, r, n, o)
    }
    async decodeBuffer(e, t, i, r, n, o) {
      let s;
      return M._onLog && M._onLog('decodeBuffer(buffer,width,height,stride,format)'),
      M._onLog && (this._timeStartDecode = Date.now()),
      e instanceof Uint8Array || e instanceof Uint8ClampedArray ? s = await this._decodeBuffer_Uint8Array(e, t, i, r, n, o) : e instanceof ArrayBuffer ? s = await this._decodeBuffer_Uint8Array(new Uint8Array(e), t, i, r, n, o) : e instanceof Blob && (s = await this._decodeBuffer_Blob(e, t, i, r, n, o)),
      s
    }
    async _decodeFileInMemory_Uint8Array(e) {
      return await new Promise(((t, i) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (e=>{
          if (e.success) {
            let r;
            this._lastInnerDecodeDuration = e.duration;
            try {
              r = this._handleRetJsonString(e.decodeReturn)
            } catch (e) {
              return i(e)
            }
            return t(r)
          }
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            i(t)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'decodeFileInMemory',
          id: r,
          instanceID: this._instanceID,
          body: {
            bytes: e
          }
        })
      }))
    }
    async getRuntimeSettings() {
      return await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) {
            let t = JSON.parse(i.results);
            return null != this.userDefinedRegion && (t.region = JSON.parse(JSON.stringify(this.userDefinedRegion))),
            e(t)
          }
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'getRuntimeSettings',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async updateRuntimeSettings(t) {
      let i;
      if ('string' == typeof t) if ('speed' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        i.region = e.region,
        i.deblurLevel = 3,
        i.expectedBarcodesCount = 0,
        i.localizationModes = [
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      } else if ('balance' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        i.region = e.region,
        i.deblurLevel = 5,
        i.expectedBarcodesCount = 512,
        i.localizationModes = [
          2,
          16,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      } else if ('coverage' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        i.region = e.region
      } else if ('dense' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        this.maxCvsSideLength = 4096,
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        i.region = e.region,
        i.deblurLevel = 9,
        i.expectedBarcodesCount = 0,
        i.localizationModes = [
          2,
          8,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      } else if ('distance' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        this.maxCvsSideLength = 4096,
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        i.region = e.region,
        i.deblurLevel = 3,
        i.expectedBarcodesCount = 0,
        i.localizationModes = [
          2,
          8,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      } else i = JSON.parse(t);
       else {
        if ('object' != typeof t) throw TypeError('\'UpdateRuntimeSettings(settings)\': Type of \'settings\' should be \'string\' or \'PlainObject\'.');
        if (i = JSON.parse(JSON.stringify(t)), i.region instanceof Array) {
          let e = i.region;
          [
            e.regionLeft,
            e.regionTop,
            e.regionLeft,
            e.regionBottom,
            e.regionMeasuredByPercentage
          ].some((e=>void 0 !== e)) && (i.region = {
            regionLeft: e.regionLeft || 0,
            regionTop: e.regionTop || 0,
            regionRight: e.regionRight || 0,
            regionBottom: e.regionBottom || 0,
            regionMeasuredByPercentage: e.regionMeasuredByPercentage || 0
          })
        }
      }
      if (!M._bUseFullFeature) {
        if (0 != (i.barcodeFormatIds & ~(e.EnumBarcodeFormat.BF_ONED | e.EnumBarcodeFormat.BF_QR_CODE | e.EnumBarcodeFormat.BF_PDF417 | e.EnumBarcodeFormat.BF_DATAMATRIX)) || 0 != i.barcodeFormatIds_2) throw Error('Some of the specified barcode formats are not supported in the compact version. Please try the full-featured version.');
        if (0 != i.intermediateResultTypes) throw Error('Intermediate results is not supported in the compact version. Please try the full-featured version.')
      }
      if (this.bFilterRegionInJs) {
        let e = i.region;
        if (e instanceof Array) throw Error('The `region` of type `Array` is only allowed in `BarcodeScanner`.');
        this.userDefinedRegion = JSON.parse(JSON.stringify(e)),
        (e.regionLeft || e.regionTop || e.regionRight || e.regionBottom || e.regionMeasuredByPercentage) && (e.regionLeft || e.regionTop || 100 != e.regionRight || 100 != e.regionBottom || !e.regionMeasuredByPercentage) ? this.region = e : this.region = null,
        i.region = {
          regionLeft: 0,
          regionTop: 0,
          regionRight: 0,
          regionBottom: 0,
          regionMeasuredByPercentage: 0
        }
      } else this.userDefinedRegion = null,
      this.region = null;
      return await new Promise(((e, t) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (i=>{
          if (i.success) {
            try {
              this._handleRetJsonString(i.updateReturn)
            } catch (e) {
              t(e)
            }
            return e()
          }
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'updateRuntimeSettings',
          id: r,
          instanceID: this._instanceID,
          body: {
            settings: JSON.stringify(i)
          }
        })
      }))
    }
    async resetRuntimeSettings() {
      return this.userDefinedRegion = null,
      this.region = null,
      this.maxCvsSideLength = D,
      await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) return e();
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'resetRuntimeSettings',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async outputRuntimeSettingsToString() {
      if (!M._bUseFullFeature) throw Error('outputRuntimeSettingsToString() is not supported in the compact version. Please try the full-featured version.');
      return await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) return e(i.results);
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'outputRuntimeSettingsToString',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async initRuntimeSettingsWithString(e) {
      if (!M._bUseFullFeature) throw Error('initRuntimeSettingsWithString() is not supported in the compact version. Please try the full-featured version.');
      if ('string' == typeof e) e = e;
       else {
        if ('object' != typeof e) throw TypeError('\'initRuntimeSettingstWithString(settings)\': Type of \'settings\' should be \'string\' or \'PlainObject\'.');
        e = JSON.stringify(e)
      }
      return await new Promise(((t, i) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (e=>{
          if (e.success) {
            try {
              this._handleRetJsonString(e.initReturn)
            } catch (e) {
              i(e)
            }
            return t()
          }
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            i(t)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'initRuntimeSettingsWithString',
          id: r,
          instanceID: this._instanceID,
          body: {
            settings: e
          }
        })
      }))
    }
    async _decode_Blob(e, t) {
      M._onLog && M._onLog('_decode_Blob(blob: Blob)');
      let i = null,
      r = null;
      if ('undefined' != typeof createImageBitmap) try {
        i = await createImageBitmap(e)
      } catch (e) {
      }
      i || (r = await function (e) {
        return new Promise(((t, i) =>{
          let r = URL.createObjectURL(e),
          n = new Image;
          n.dbrObjUrl = r,
          n.src = r,
          n.onload = () =>{
            t(n)
          },
          n.onerror = e=>{
            i(new Error('Can\'t convert blob to image : ' + (e instanceof Event ? e.type : e)))
          }
        }))
      }(e));
      let n = await this._decode_Image(i || r, t);
      return i && i.close(),
      n
    }
    async _decode_ArrayBuffer(e, t) {
      return await this._decode_Blob(new Blob([e]), t)
    }
    async _decode_Uint8Array(e, t) {
      return await this._decode_Blob(new Blob([e]), t)
    }
    async _decode_Image(e, t) {
      M._onLog && M._onLog('_decode_Image(image: HTMLImageElement|ImageBitmap)'),
      t = t || {
      };
      let i,
      r,
      n = e instanceof HTMLImageElement ? e.naturalWidth : e.width,
      o = e instanceof HTMLImageElement ? e.naturalHeight : e.height,
      s = Math.max(n, o);
      if (s > this._maxCvsSideLength) {
        let e = this._maxCvsSideLength / s;
        i = Math.round(n * e),
        r = Math.round(o * e)
      } else i = n,
      r = o;
      this.canvas || (this.canvas = document.createElement('canvas'));
      const a = this.canvas;
      a.width === i && a.height === r || (a.width = i, a.height = r),
      a.ctx2d || (a.ctx2d = a.getContext('2d'));
      return a.ctx2d.drawImage(e, 0, 0, n, o, 0, 0, i, r),
      e.dbrObjUrl && URL.revokeObjectURL(e.dbrObjUrl),
      await this._decode_Canvas(a, t)
    }
    async _decode_Canvas(t, i) {
      if (M._onLog && M._onLog('_decode_Canvas(canvas:HTMLCanvasElement)'), t.crossOrigin && 'anonymous' != t.crossOrigin) throw 'cors';
      if (0 === t.width || 0 === t.height) throw Error('The width or height of the \'canvas\' is 0.');
      this.ifSaveOriginalImageInACanvas && (this.oriCanvas = t, this.oriCanvasData = null);
      let r = (t.ctx2d || t.getContext('2d')).getImageData(0, 0, t.width, t.height).data;
      return await this._decodeBuffer_Uint8Array(r, t.width, t.height, 4 * t.width, e.EnumImagePixelFormat.IPF_ABGR_8888, i)
    }
    async _decode_Video(e, t) {
      if (M._onLog && M._onLog('_decode_Video(video)'), !(e instanceof HTMLVideoElement)) throw TypeError('\'_decode_Video(video [, config] )\': Type of \'video\' should be \'HTMLVideoElement\'.');
      if (e.crossOrigin && 'anonymous' != e.crossOrigin) throw 'cors';
      t = t || {
      };
      let i,
      r,
      n = e.videoWidth,
      o = e.videoHeight,
      s = Math.max(n, o);
      if (s > this._maxCvsSideLength) {
        let e = this._maxCvsSideLength / s;
        i = Math.round(n * e),
        r = Math.round(o * e)
      } else i = n,
      r = o;
      this.canvas || (this.canvas = document.createElement('canvas'));
      const a = this.canvas;
      a.width === i && a.height === r || (a.width = i, a.height = r),
      a.ctx2d || (a.ctx2d = a.getContext('2d'));
      return a.ctx2d.drawImage(e, 0, 0, n, o, 0, 0, i, r),
      await this._decode_Canvas(a, t)
    }
    async _decode_DCEFrame(t, i) {
      if (M._onLog && M._onLog('_decode_DCEFrame(dceFrame)'), !M.isDCEFrame(t)) return [];
      let r = [
      ];
      this.ifSaveOriginalImageInACanvas && (this.oriCanvas = null, this.oriCanvasData = {
        width: t.width,
        height: t.height,
        colorMode: t.colorMode,
        data: new Uint8Array(t.data),
        toCanvas: t.toCanvas
      });
      const {
        width: n,
        height: o,
        colorMode: s,
        timeStamp: a
      }
      = t;
      let l;
      l = i && i.bCopyData ? new Uint8Array(t.data) : t.data;
      let h = null;
      if (i ? (h = JSON.parse(JSON.stringify(i)), h.timeStamp = a) : h = {
        timeStamp: a
      }, 'grey' === s) r = await this._decodeBuffer_Uint8Array(l, n, o, n, e.EnumImagePixelFormat.IPF_GrayScaled, h);
       else if ('rgba' === s) r = await this._decodeBuffer_Uint8Array(l, n, o, 4 * n, e.EnumImagePixelFormat.IPF_ABGR_8888, h);
       else {
        if ('bgra' !== s) throw new Error(`Color mode '${ s }' is not supported to decode.`);
        r = await this._decodeBuffer_Uint8Array(l, n, o, 4 * n, e.EnumImagePixelFormat.IPF_ARGB_8888, h)
      }
      return r
    }
    async _decode_DSImage(t, i) {
      if (M._onLog && M._onLog('_decode_DSImage(dsImage)'), !M.isDSImage(t)) return null;
      this.ifSaveOriginalImageInACanvas && (this.oriCanvas = null, this.oriCanvasData = {
        width: t.width,
        height: t.height,
        pixelFormat: t.pixelFormat.toLowerCase(),
        data: new Uint8Array(t.data),
        toCanvas: function () {
          const e = document.createElement('canvas');
          let t;
          switch (e.width = this.width, e.height = this.height, this.pixelFormat) {
            case 'grey':
              t = new Uint8ClampedArray(this.width * this.height * 4);
              for (let e = 0; e < t.length; e += 4) t[e] = this.data[e / 4],
              t[e + 1] = this.data[e / 4],
              t[e + 2] = this.data[e / 4],
              t[e + 3] = 255;
              break;
            case 'rgb':
              t = new Uint8ClampedArray(this.width * this.height * 4);
              for (let e = 0; e < t.length; e += 4) t[e] = this.data[e],
              t[e + 1] = this.data[e + 1],
              t[e + 2] = this.data[e + 2],
              t[e + 3] = 255;
              break;
            case 'bgr':
              t = new Uint8ClampedArray(this.width * this.height * 4);
              for (let e = 0; e < t.length; e += 4) t[e] = this.data[e],
              t[e + 1] = this.data[e + 1],
              t[e + 2] = this.data[e + 2],
              t[e + 3] = 255;
              break;
            case 'rgba':
            case 'bgra':
              t = new Uint8ClampedArray(this.data);
              break;
            default:
              throw new Error('The content of 2D Canvas is currently limited to the sRGB color space.')
          }
          const i = new ImageData(t, this.width, this.height);
          return e.getContext('2d').putImageData(i, 0, 0),
          e
        }
      });
      const {
        width: r,
        height: n
      }
      = t;
      let o,
      s,
      a,
      l = t.pixelFormat.toLowerCase();
      switch (o = i && i.bCopyData ? new Uint8Array(t.data) : t.data, l) {
        case 'grey':
          a = e.EnumImagePixelFormat.IPF_GrayScaled,
          s = r;
          break;
        case 'rgb':
          a = e.EnumImagePixelFormat.IPF_BGR_888,
          s = 3 * r;
          break;
        case 'bgr':
          a = e.EnumImagePixelFormat.IPF_RGB_888,
          s = 3 * r;
          break;
        case 'rgba':
          a = e.EnumImagePixelFormat.IPF_ABGR_8888,
          s = 4 * r;
          break;
        case 'bgra':
          a = e.EnumImagePixelFormat.IPF_ARGB_8888,
          s = 4 * r;
          break;
        default:
          throw new Error('The pixel format is not supported to decode.')
      }
      return await this._decodeBuffer_Uint8Array(o, r, n, s, a, i)
    }
    async _decode_Base64(e, t) {
      if (M._onLog && M._onLog('_decode_Base64(base64Str)'), 'string' != typeof e) return Promise.reject('\'_decode_Base64(base64Str, config)\': Type of \'base64Str\' should be \'string\'.');
      'data:image/' == e.substring(0, 11) && (e = e.substring(e.indexOf(',') + 1));
      {
        let i = atob(e),
        r = i.length,
        n = new Uint8Array(r);
        for (; r--; ) n[r] = i.charCodeAt(r);
        return await this._decode_Blob(new Blob([n]), t)
      }
    }
    async _decode_Url(e, t) {
      if (M._onLog && M._onLog('_decode_Url(url)'), 'string' != typeof e) throw TypeError('\'_decode_Url(url, config)\': Type of \'url\' should be \'string\'.');
      e = e;
      {
        let i = await new Promise(((t, i) =>{
          let r = new XMLHttpRequest;
          r.open('GET', e, !0),
          r.responseType = 'blob',
          r.send(),
          r.onloadend = async() =>{
            t(r.response)
          },
          r.onerror = () =>{
            i(new Error('Network Error: ' + r.statusText))
          }
        }));
        return await this._decode_Blob(i, t)
      }
    }
    async _decode_FilePath(e, t) {
      throw M._onLog && M._onLog('_decode_FilePath(path)'),
      Error('\'_decode_FilePath(path, config)\': The method is only supported in node environment.')
    }
    static recalculateResultLocation(e, t, i, r, n, o, s) {
      if (e.length > 0) for (let a of e) {
        let e = a.localizationResult;
        2 == e.resultCoordinateType && (e.x1 *= 0.01 * o, e.x2 *= 0.01 * o, e.x3 *= 0.01 * o, e.x4 *= 0.01 * o, e.y1 *= 0.01 * s, e.y2 *= 0.01 * s, e.y3 *= 0.01 * s, e.y4 *= 0.01 * s);
        let l = o / r,
        h = s / n;
        e.x1 = e.x1 / l + t,
        e.x2 = e.x2 / l + t,
        e.x3 = e.x3 / l + t,
        e.x4 = e.x4 / l + t,
        e.y1 = e.y1 / h + i,
        e.y2 = e.y2 / h + i,
        e.y3 = e.y3 / h + i,
        e.y4 = e.y4 / h + i,
        2 == e.resultCoordinateType && (e.x1 *= 100 / r, e.x2 *= 100 / r, e.x3 *= 100 / r, e.x4 *= 100 / r, e.y1 *= 100 / n, e.y2 *= 100 / n, e.y3 *= 100 / n, e.y4 *= 100 / n)
      }
    }
    static BarcodeReaderException(t, i) {
      let r,
      n = e.EnumErrorCode.DBR_UNKNOWN;
      return 'number' == typeof t ? (n = t, r = new Error(i)) : r = new Error(t),
      r.code = n,
      r
    }
    _handleRetJsonString(t) {
      let i = e.EnumErrorCode;
      if (t.textResults) {
        for (let e = 0; e < t.textResults.length; e++) {
          let i = t.textResults[e];
          try {
            let e = i.barcodeText,
            t = '';
            for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
            try {
              i.barcodeText = decodeURIComponent(escape(t))
            } catch (e) {
              i.barcodeText = t
            }
          } catch (e) {
            i.barcodeText = ''
          }
          if (null != i.exception) {
            M._setWarnnedEx.has(i.exception) || (M._setWarnnedEx.add(i.exception), console.warn(i.exception));
            let e = {
            };
            i.exception.split(';').forEach((t=>{
              let i = t.indexOf(':');
              e[t.substring(0, i)] = t.substring(i + 1)
            })),
            i.exception = e
          }
        }
        return t.decodeRecords ? this.decodeRecords = t.decodeRecords : this.decodeRecords = {
        },
        this._lastErrorCode = t.exception,
        this._lastErrorString = t.description,
        t.exception && !M._setWarnnedEx.has(t.description) && (M._setWarnnedEx.add(t.description), console.warn(t.description)),
        t.textResults
      }
      if (t.exception == i.DBR_SUCCESS) return t.data;
      throw M.BarcodeReaderException(t.exception, t.description)
    }
    async setModeArgument(e, t, i, r) {
      return await new Promise(((n, o) =>{
        let s = M._nextTaskID++;
        M._taskCallbackMap.set(s, (e=>{
          if (e.success) {
            try {
              this._handleRetJsonString(e.setReturn)
            } catch (e) {
              return o(e)
            }
            return n()
          }
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            o(t)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'setModeArgument',
          id: s,
          instanceID: this._instanceID,
          body: {
            modeName: e,
            index: t,
            argumentName: i,
            argumentValue: r
          }
        })
      }))
    }
    async getModeArgument(e, t, i) {
      return await new Promise(((r, n) =>{
        let o = M._nextTaskID++;
        M._taskCallbackMap.set(o, (e=>{
          if (e.success) {
            let t;
            try {
              t = this._handleRetJsonString(e.getReturn)
            } catch (e) {
              return n(e)
            }
            return r(t)
          }
          {
            let t = new Error(e.message);
            return t.stack = e.stack + '\n' + t.stack,
            n(t)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'getModeArgument',
          id: o,
          instanceID: this._instanceID,
          body: {
            modeName: e,
            index: t,
            argumentName: i
          }
        })
      }))
    }
    async getIntermediateResults() {
      return await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) return e(i.results);
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'getIntermediateResults',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async getIntermediateCanvas() {
      let t = await this.getIntermediateResults(),
      i = [
      ];
      for (let r of t) if (r.dataType == e.EnumIMResultDataType.IMRDT_IMAGE) for (let t of r.results) {
        const r = t.bytes;
        let n;
        switch (M._onLog && M._onLog(' ' + r.length + ' ' + r.byteLength + ' ' + t.width + ' ' + t.height + ' ' + t.stride + ' ' + t.format), t.format) {
          case e.EnumImagePixelFormat.IPF_ABGR_8888:
            n = new Uint8ClampedArray(r);
            break;
          case e.EnumImagePixelFormat.IPF_RGB_888:
            {
              const e = r.length / 3;
              n = new Uint8ClampedArray(4 * e);
              for (let t = 0; t < e; ++t) n[4 * t] = r[3 * t + 2],
              n[4 * t + 1] = r[3 * t + 1],
              n[4 * t + 2] = r[3 * t],
              n[4 * t + 3] = 255;
              break
            }
          case e.EnumImagePixelFormat.IPF_GrayScaled:
            {
              const e = r.length;
              n = new Uint8ClampedArray(4 * e);
              for (let t = 0; t < e; t++) n[4 * t] = n[4 * t + 1] = n[4 * t + 2] = r[t],
              n[4 * t + 3] = 255;
              break
            }
          case e.EnumImagePixelFormat.IPF_Binary:
          case e.EnumImagePixelFormat.IPF_BinaryInverted:
            {
              t.width = 8 * t.stride,
              t.height = r.length / t.stride;
              const e = r.length;
              n = new Uint8ClampedArray(8 * e * 4);
              for (let t = 0; t < e; t++) {
                let e = r[t];
                for (let i = 0; i < 8; ++i) n[4 * (8 * t + i)] = n[4 * (8 * t + i) + 1] = n[4 * (8 * t + i) + 2] = (128 & e) / 128 * 255,
                n[4 * (8 * t + i) + 3] = 255,
                e <<= 1
              }
              break
            }
          default:
            console.warn('unknow intermediate image', t)
        }
        if (!n) continue;
        let o = new ImageData(n, t.width, t.height),
        s = document.createElement('canvas');
        s.width = t.width,
        s.height = t.height,
        s.getContext('2d').putImageData(o, 0, 0),
        i.push(s)
      }
      return i
    }
    async keepAlive() {
      M._dbrWorker.postMessage({
        type: 'keepAlive'
      })
    }
    async getScanSettings() {
      return await new Promise(((e, t) =>{
        let i = M._nextTaskID++;
        M._taskCallbackMap.set(i, (i=>{
          if (i.success) {
            let t = i.results;
            return t.intervalTime = this.intervalTime,
            t.whenToPlaySoundforSuccessfulRead = this.whenToPlaySoundforSuccessfulRead,
            t.soundOnSuccessfullRead = this.soundSource,
            t.whenToVibrateforSuccessfulRead = this.whenToVibrateforSuccessfulRead,
            t.vibrateDuration = this.vibrateDuration,
            t.captureAndDecodeInParallel = this.captureAndDecodeInParallel,
            e(t)
          }
          {
            let e = new Error(i.message);
            return e.stack += '\n' + i.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'getScanSettings',
          id: i,
          instanceID: this._instanceID
        })
      }))
    }
    async updateScanSettings(e) {
      if (!e) return;
      const t = JSON.parse(JSON.stringify(e));
      return t.hasOwnProperty('intervalTime') && (this.intervalTime = Math.max(t.intervalTime, 0), delete t.intervalTime),
      t.hasOwnProperty('whenToPlaySoundforSuccessfulRead') && (this.whenToPlaySoundforSuccessfulRead = t.whenToPlaySoundforSuccessfulRead, delete t.whenToPlaySoundforSuccessfulRead),
      t.hasOwnProperty('soundOnSuccessfullRead') && (this.soundSource = t.soundOnSuccessfullRead, delete t.soundOnSuccessfullRead),
      t.hasOwnProperty('whenToVibrateforSuccessfulRead') && (this.whenToVibrateforSuccessfulRead = t.whenToVibrateforSuccessfulRead, delete t.whenToVibrateforSuccessfulRead),
      t.hasOwnProperty('vibrateDuration') && (this.vibrateDuration = t.vibrateDuration, delete t.vibrateDuration),
      t.hasOwnProperty('captureAndDecodeInParallel') && (this.captureAndDecodeInParallel = t.captureAndDecodeInParallel, delete t.captureAndDecodeInParallel),
      await new Promise(((e, i) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (t=>{
          if (t.success) return e();
          {
            let e = new Error(t.message);
            return e.stack += '\n' + t.stack,
            i(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'updateScanSettings',
          id: r,
          instanceID: this._instanceID,
          body: {
            settings: t
          }
        })
      }))
    }
    _cloneDecodeResults(e) {
      if (e instanceof Array) {
        let t = [
        ];
        for (let i of e) t.push(this._cloneDecodeResults(i));
        return t
      }
      {
        let t = e,
        i = JSON.parse(JSON.stringify(t, ((e, t) =>'oriVideoCanvas' == e || 'searchRegionCanvas' == e ? void 0 : t)));
        return i
      }
    }
    async _loopReadVideo() {
      if (this.bDestroyed) return this.dce && this._dceControler && this._dceControler.setDisiredAction(this, 'stopFetchingLoop'),
      void this._drawResults(null);
      if (this.dce && !this.dce.isOpen()) return this._drawResults(null),
      void await this.clearMapDecodeRecord();
      if (!this.dce && !this._imgSource || this._bPauseScan) return M._onLog && M._onLog('Scan is paused, or imageSource is not set. Ask in 1s.'),
      await this.clearMapDecodeRecord(),
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
      void (this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), this._intervalDetectVideoPause));
      M._onLog && M._onLog('======= once read ======='),
      M._onLog && (this._timeStartDecode = Date.now());
      let e = null,
      t = null;
      if (this.dce) e = this._getVideoFrame();
       else if (this._imgSource && (t = await this._imgSource.getImage(), !M.isDSImage(t))) throw new Error('Invalid DSImage.');
      if (!e && !t) return M._onLog && M._onLog('Get invalid frame.'),
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
      void (this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0));
      (async() =>{
        let i = [
        ];
        if (e) {
          i = await this._decode_DCEFrame(e, {
            bScanner: !0,
            bCopyData: !1
          });
          let t = null;
          if (i && i.length) {
            const {
              sx: r,
              sy: n,
              width: o,
              height: s,
              _sWidth: a,
              _sHeight: l
            }
            = e;
            t = i.map((e=>({
              resultState: e.resultState,
              localizationResult: JSON.parse(JSON.stringify(e.localizationResult))
            }))),
            M.recalculateResultLocation(t, r, n, a, l, o, s)
          }
          this._drawResults(t)
        } else t && (i = await this._decode_DSImage(t, {
          bScanner: !0,
          bCopyData: !1
        }));
        return i
      }) ().then((e=>{
        if (M._onLog && M._onLog(e), this.dce && this.captureAndDecodeInParallel) {
          let e = this.array_decodeFrameTimeCost,
          t = this.array_getFrameTimeCost;
          const i = () =>{
            let i = 0;
            if (t && t.length) {
              let r = Math.min(...e),
              n = Math.max(...t);
              r && n && (i = r - n)
            } else i = 0;
            return i > 0 ? i : 0
          };
          (() =>{
            for (; e.length >= 5; ) e.shift();
            e.push(this._lastInnerDecodeDuration)
          }) (),
          this._intervalGetVideoFrame = i() + this.intervalTime
        }
        if ((this.dce && this.dce.isOpen() || this._imgSource) && !this._bPauseScan) {
          if (this.bPlaySoundOnSuccessfulRead && e.length) {
            let t = !1;
            !0 === this.bPlaySoundOnSuccessfulRead || 'frame' === this.bPlaySoundOnSuccessfulRead ? t = !0 : 'unique' === this.bPlaySoundOnSuccessfulRead && (t = e.some((e=>0 === e.resultState))),
            t && (this.beepSound.stop(), this.beepSound.play())
          }
          if (navigator.vibrate && this.bVibrateOnSuccessfulRead && e.length) {
            let t = !1;
            if (!0 === this.bVibrateOnSuccessfulRead || 'frame' === this.bVibrateOnSuccessfulRead ? t = !0 : 'unique' === this.bVibrateOnSuccessfulRead && (t = e.some((e=>0 === e.resultState))), t) try {
              navigator.vibrate(this.vibrateDuration)
            } catch (e) {
              console.warn('Vibration not allowed. User interaction required: ' + (e.message || e))
            }
          }
          if (this.onImageRead) {
            e = e.filter((e=>e.resultState >= 0));
            const t = this._cloneDecodeResults(e);
            this.onImageRead(t)
          }
          if (this.onUniqueRead) {
            e = e.filter((e=>0 == e.resultState));
            const t = this._cloneDecodeResults(e);
            for (let e of t) this.onUniqueRead(e.barcodeText, e)
          }
        }
        this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
        this.intervalTime ? this._loopReadVideoTimeoutId = setTimeout((() =>{
          this._loopReadVideo()
        }), this.intervalTime) : this._loopReadVideo()
      })).catch((e=>{
        this.dce && this._dceControler && this._dceControler.setDisiredAction(this, 'stopFetchingLoop'),
        M._onLog && M._onLog(e.message || e),
        this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
        this._loopReadVideoTimeoutId = setTimeout((() =>{
          this.dce && (this.dce.startFetchingLoop(), this._dceControler && this._dceControler.clearUserDisiredAction({
            user: this,
            actionName: 'stopFetchingLoop'
          })),
          this._loopReadVideo()
        }), Math.max(this.intervalTime, 1000)),
        'platform error' == e.message || console.warn(e.message)
      }))
    }
    _getVideoFrame() {
      if (!this.dce) return null;
      let e;
      if (this.captureAndDecodeInParallel) {
        if (M._onLog && M._onLog('Get frame in parallel.'), this._dceControler && this._dceControler.setDisiredValue(this, 'loopInterval', this._intervalGetVideoFrame), !this.dce.numberOfFramesInBuffer) return this._dceControler && this._dceControler.setDisiredValue(this, 'loopInterval', 0),
        null;
        e = this.dce.getFrameFromBuffer();
        const t = e=>{
          if (!e) return;
          let t = e.timeSpent,
          i = this.array_getFrameTimeCost;
          for (; i.length >= 5; ) i.shift();
          i.push(t)
        };
        t(e)
      } else M._onLog && M._onLog('Get frame in serial.'),
      this._dceControler && this._dceControler.setDisiredAction(this, 'stopFetchingLoop'),
      e = this.dce.getFrame();
      return e
    }
    _drawResults(e) {
      if (!this.dce || this._bPauseScan || !this._drawingItemNamespace || !this._drawingItemNamespace.DT_Polygon) return;
      if (!this._dbrDrawingLayer) {
        if (!this.dce.isOpen()) return;
        this._dbrDrawingLayer = this.dce.getDrawingLayer(3)
      }
      const t = this._dbrDrawingLayer;
      e || (e = [
      ]);
      let i = this._arrPolygons;
      for (let r = 0; r < e.length; r++) {
        let n,
        o = e[r].localizationResult;
        i[r] ? (n = i[r], t.hasDrawingItem(n) || t.addDrawingItem(n), n.set('vertices', [
          {
            x: o.x1,
            y: o.y1
          },
          {
            x: o.x2,
            y: o.y2
          },
          {
            x: o.x3,
            y: o.y3
          },
          {
            x: o.x4,
            y: o.y4
          }
        ])) : (n = new this._drawingItemNamespace.DT_Polygon([{
          x: o.x1,
          y: o.y1
        },
        {
          x: o.x2,
          y: o.y2
        },
        {
          x: o.x3,
          y: o.y3
        },
        {
          x: o.x4,
          y: o.y4
        }
        ]), t.addDrawingItem(n), i[r] = n),
        - 1 === e[r].resultState ? (n.styleId = this._styleIdBeforeVerification, n._mapStyle.set('default', this.dce.getDrawingStyle(this._styleIdBeforeVerification)), n._mapStyle.set('selected', this.dce.getDrawingStyle(this._styleIdBeforeVerification))) : (n.styleId = null, n._mapStyle.set('default', this.dce.getDrawingStyle(3)), n._mapStyle.set('selected', this.dce.getDrawingStyle(7))),
        n.tag = e[r]
      }
      for (let r = e.length; r < i.length; r++) t.removeDrawingItem(i[r]);
      t.renderAll()
    }
    async startScanning(e) {
      if (!this.dce && !this._imgSource) throw new Error('\'imageSource\' is not set. call \'setImageSource()\' before \'startScanning()\'.');
      if ('closed' != this._tempSolutionStatus) return;
      if (this._tempSolutionStatus = 'opening', 'opening' != this._tempSolutionStatus) return;
      let t = null;
      return this.dce && (this.dce.isOpen() ? (e && this.dce.appendAndShowUI(), t = JSON.parse(JSON.stringify(this.dce.playCallbackInfo))) : t = await this.dce.open(e), this._dceControler && (this._dceControler.clearUserDisiredAction({
        user: this,
        actionName: 'close'
      }), this._dceControler.clearUserDisiredValue({
        property: 'ifShowScanRegionLaser'
      }), this._dceControler.setDisiredValue(this, 'ifShowScanRegionLaser', !0), this.dce.ifShowScanRegionLaser && this.dce.showScanRegionLaser())),
      'opening' == this._tempSolutionStatus ? (this._bPauseScan = !1, this.dce && this.dce.singleFrameMode || (this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId), this._loopReadVideoTimeoutId = setTimeout((() =>{
        this.dce && (this.dce.startFetchingLoop(), this._dceControler && this._dceControler.clearUserDisiredAction({
          user: this,
          actionName: 'stopFetchingLoop'
        })),
        this._loopReadVideo()
      }), 0)), this._tempSolutionStatus = 'opened', this.keepAlive(), t) : void 0
    }
    stopScanning(e) {
      this.dce && (this._drawResults(null), this._dceControler && (this._dceControler.setDisiredValue(this, 'ifShowScanRegionLaser', !1), this.dce.ifShowScanRegionLaser || this.dce.hideScanRegionLaser(), this._dceControler.setDisiredAction(this, 'close', [
        e
      ]))),
      this._bPauseScan = !0,
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
      this.array_decodeFrameTimeCost.length = 0,
      this.array_getFrameTimeCost.length = 0,
      this._intervalGetVideoFrame = 0,
      this._tempSolutionStatus = 'closed'
    }
    pauseScanning(e) {
      if (e && e.keepResultsHighlighted || this._drawResults(null), this._bPauseScan = !0, this.dce) {
        if (this.dce.singleFrameMode) throw new Error('\'pauseScanning()\' is unavailable when property \'singleFrameMode\' of the \'CameraEnhancer\' instance is true.');
        this._dceControler && (this._dceControler.setDisiredValue(this, 'ifShowScanRegionLaser', !1), this.dce.ifShowScanRegionLaser || this.dce.hideScanRegionLaser(), this._dceControler.setDisiredAction(this, 'stopFetchingLoop'))
      }
    }
    resumeScanning() {
      if (this._bPauseScan = !1, this.dce) {
        if (this.dce.singleFrameMode) throw new Error('\'resumeScanning()\' is unavailable when property \'singleFrameMode\' of the \'CameraEnhancer\' instance is true.');
        this.dce.startFetchingLoop(),
        this._dceControler && (this._dceControler.clearUserDisiredAction({
          user: this,
          actionName: 'stopFetchingLoop'
        }), this._dceControler.clearUserDisiredValue({
          property: 'ifShowScanRegionLaser'
        }), this._dceControler.setDisiredValue(this, 'ifShowScanRegionLaser', !0), this.dce.ifShowScanRegionLaser && this.dce.showScanRegionLaser())
      }
    }
    destroyContext() {
      if (M._onLog && M._onLog('destroyContext()'), this.bDestroyed) return;
      this.bDestroyed = !0,
      (this.dce || 'opening' === this._tempSolutionStatus) && this.stopScanning(),
      this.setImageSource(null);
      let e = M._nextTaskID++;
      M._taskCallbackMap.set(e, (e=>{
        if (!e.success) {
          let t = new Error(e.message);
          throw t.stack = e.stack + '\n' + t.stack,
          t
        }
      })),
      M._dbrWorker.postMessage({
        type: 'destroyContext',
        id: e,
        instanceID: this._instanceID
      })
    }
  }
  M._jsVersion = '9.3.1',
  M._jsEditVersion = '20220930',
  M._version = `loading...(JS ${ M._jsVersion }.${ M._jsEditVersion })`,
  M._license = f,
  M._sessionPassword = g,
  M.browserInfo = s,
  M._workerName = `dbr-${ M._jsVersion }.browser.worker.js`,
  M._engineResourcePath = u,
  M._licenseServer = [
  ],
  M._deviceFriendlyName = '',
  M._isShowRelDecodeTimeInResults = !1,
  M._bWasmDebug = !1,
  M._bNeverShowDialog = !1,
  M.__bUseFullFeature = !0,
  M._nextTaskID = 0,
  M._taskCallbackMap = new Map,
  M._pLoad = new class extends Promise {
    constructor(e) {
      let t,
      i;
      super (((e, r) =>{
        t = e,
        i = r
      })),
      this._s = 'pending',
      this.resolve = e=>{
        this.isPending && (S(e) ? this.task = e : (this._s = 'fulfilled', t(e)))
      },
      this.reject = e=>{
        this.isPending && (this._s = 'rejected', i(e))
      },
      this.task = e
    }
    get status() {
      return this._s
    }
    get isPending() {
      return 'pending' === this._s
    }
    get isFulfilled() {
      return 'fulfilled' === this._s
    }
    get isRejected() {
      return 'rejected' === this._s
    }
    get task() {
      return this._task
    }
    set task(e) {
      let t;
      this._task = e,
      S(e) ? t = e : 'function' == typeof e && (t = new Promise(e)),
      t && (async() =>{
        try {
          const i = await t;
          e === this._task && this.resolve(i)
        } catch (t) {
          e === this._task && this.reject(t)
        }
      }) ()
    }
    get isEmpty() {
      return null == this._task
    }
  },
  M._lastErrorCode = 0,
  M._lastErrorString = '',
  M._setWarnnedEx = new Set,
  M._defaultUIElementURL = '@engineResourcePath/dbr.ui.html';
  var L = {
    653: (e, t, i) =>{
      var r,
      n,
      o,
      s,
      a,
      l,
      h,
      c,
      u,
      d,
      f,
      g,
      _,
      p,
      m,
      v,
      y,
      S,
      b,
      C,
      w,
      T = T || {
        version: '5.2.1'
      };
      if (t.fabric = T, 'undefined' != typeof document && 'undefined' != typeof window) document instanceof ('undefined' != typeof HTMLDocument ? HTMLDocument : Document) ? T.document = document : T.document = document.implementation.createHTMLDocument(''),
      T.window = window;
       else {
        var x = new (i(192).JSDOM) (decodeURIComponent('%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E'), {
          features: {
            FetchExternalResources: [
              'img'
            ]
          },
          resources: 'usable'
        }).window;
        T.document = x.document,
        T.jsdomImplForWrapper = i(898).implForWrapper,
        T.nodeCanvas = i(245).Canvas,
        T.window = x,
        DOMParser = T.window.DOMParser
      }
      function E(e, t) {
        var i = e.canvas,
        r = t.targetCanvas,
        n = r.getContext('2d');
        n.translate(0, r.height),
        n.scale(1, - 1);
        var o = i.height - r.height;
        n.drawImage(i, 0, o, r.width, r.height, 0, 0, r.width, r.height)
      }
      function A(e, t) {
        var i = t.targetCanvas.getContext('2d'),
        r = t.destinationWidth,
        n = t.destinationHeight,
        o = r * n * 4,
        s = new Uint8Array(this.imageBuffer, 0, o),
        a = new Uint8ClampedArray(this.imageBuffer, 0, o);
        e.readPixels(0, 0, r, n, e.RGBA, e.UNSIGNED_BYTE, s);
        var l = new ImageData(a, r, n);
        i.putImageData(l, 0, 0)
      }
      T.isTouchSupported = 'ontouchstart' in T.window || 'ontouchstart' in T.document || T.window && T.window.navigator && T.window.navigator.maxTouchPoints > 0,
      T.isLikelyNode = 'undefined' != typeof Buffer && 'undefined' == typeof window,
      T.SHARED_ATTRIBUTES = [
        'display',
        'transform',
        'fill',
        'fill-opacity',
        'fill-rule',
        'opacity',
        'stroke',
        'stroke-dasharray',
        'stroke-linecap',
        'stroke-dashoffset',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'id',
        'paint-order',
        'vector-effect',
        'instantiated_by_use',
        'clip-path'
      ],
      T.DPI = 96,
      T.reNum = '(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)',
      T.commaWsp = '(?:\\s+,?\\s*|,\\s*)',
      T.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi,
      T.reNonWord = /[ \n\.,;!\?\-]/,
      T.fontPaths = {
      },
      T.iMatrix = [
        1,
        0,
        0,
        1,
        0,
        0
      ],
      T.svgNS = 'http://www.w3.org/2000/svg',
      T.perfLimitSizeTotal = 2097152,
      T.maxCacheSideLimit = 4096,
      T.minCacheSideLimit = 256,
      T.charWidthsCache = {
      },
      T.textureSize = 2048,
      T.disableStyleCopyPaste = !1,
      T.enableGLFiltering = !0,
      T.devicePixelRatio = T.window.devicePixelRatio || T.window.webkitDevicePixelRatio || T.window.mozDevicePixelRatio || 1,
      T.browserShadowBlurConstant = 1,
      T.arcToSegmentsCache = {
      },
      T.boundsOfCurveCache = {
      },
      T.cachesBoundsOfCurve = !0,
      T.forceGLPutImageData = !1,
      T.initFilterBackend = function () {
        return T.enableGLFiltering && T.isWebglSupported && T.isWebglSupported(T.textureSize) ? (console.log('max texture size: ' + T.maxTextureSize), new T.WebglFilterBackend({
          tileSize: T.textureSize
        })) : T.Canvas2dFilterBackend ? new T.Canvas2dFilterBackend : void 0
      },
      'undefined' != typeof document && 'undefined' != typeof window && (window.fabric = T),
      function () {
        function e(e, t) {
          if (this.__eventListeners[e]) {
            var i = this.__eventListeners[e];
            t ? i[i.indexOf(t)] = !1 : T.util.array.fill(i, !1)
          }
        }
        function t(e, t) {
          var i = function () {
            t.apply(this, arguments),
            this.off(e, i)
          }.bind(this);
          this.on(e, i)
        }
        T.Observable = {
          fire: function (e, t) {
            if (!this.__eventListeners) return this;
            var i = this.__eventListeners[e];
            if (!i) return this;
            for (var r = 0, n = i.length; r < n; r++) i[r] && i[r].call(this, t || {
            });
            return this.__eventListeners[e] = i.filter((function (e) {
              return !1 !== e
            })),
            this
          },
          on: function (e, t) {
            if (this.__eventListeners || (this.__eventListeners = {
            }), 1 === arguments.length) for (var i in e) this.on(i, e[i]);
             else this.__eventListeners[e] || (this.__eventListeners[e] = [
            ]),
            this.__eventListeners[e].push(t);
            return this
          },
          once: function (e, i) {
            if (1 === arguments.length) for (var r in e) t.call(this, r, e[r]);
             else t.call(this, e, i);
            return this
          },
          off: function (t, i) {
            if (!this.__eventListeners) return this;
            if (0 === arguments.length) for (t in this.__eventListeners) e.call(this, t);
             else if (1 === arguments.length && 'object' == typeof arguments[0]) for (var r in t) e.call(this, r, t[r]);
             else e.call(this, t, i);
            return this
          }
        }
      }(),
      T.Collection = {
        _objects: [
        ],
        add: function () {
          if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded) for (var e = 0, t = arguments.length; e < t; e++) this._onObjectAdded(arguments[e]);
          return this.renderOnAddRemove && this.requestRenderAll(),
          this
        },
        insertAt: function (e, t, i) {
          var r = this._objects;
          return i ? r[t] = e : r.splice(t, 0, e),
          this._onObjectAdded && this._onObjectAdded(e),
          this.renderOnAddRemove && this.requestRenderAll(),
          this
        },
        remove: function () {
          for (var e, t = this._objects, i = !1, r = 0, n = arguments.length; r < n; r++) - 1 !== (e = t.indexOf(arguments[r])) && (i = !0, t.splice(e, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[r]));
          return this.renderOnAddRemove && i && this.requestRenderAll(),
          this
        },
        forEachObject: function (e, t) {
          for (var i = this.getObjects(), r = 0, n = i.length; r < n; r++) e.call(t, i[r], r, i);
          return this
        },
        getObjects: function (e) {
          return void 0 === e ? this._objects.concat() : this._objects.filter((function (t) {
            return t.type === e
          }))
        },
        item: function (e) {
          return this._objects[e]
        },
        isEmpty: function () {
          return 0 === this._objects.length
        },
        size: function () {
          return this._objects.length
        },
        contains: function (e, t) {
          return this._objects.indexOf(e) > - 1 || !!t && this._objects.some((function (t) {
            return 'function' == typeof t.contains && t.contains(e, !0)
          }))
        },
        complexity: function () {
          return this._objects.reduce((function (e, t) {
            return e + (t.complexity ? t.complexity() : 0)
          }), 0)
        }
      },
      T.CommonMethods = {
        _setOptions: function (e) {
          for (var t in e) this.set(t, e[t])
        },
        _initGradient: function (e, t) {
          !e || !e.colorStops || e instanceof T.Gradient || this.set(t, new T.Gradient(e))
        },
        _initPattern: function (e, t, i) {
          !e || !e.source || e instanceof T.Pattern ? i && i() : this.set(t, new T.Pattern(e, i))
        },
        _setObject: function (e) {
          for (var t in e) this._set(t, e[t])
        },
        set: function (e, t) {
          return 'object' == typeof e ? this._setObject(e) : this._set(e, t),
          this
        },
        _set: function (e, t) {
          this[e] = t
        },
        toggle: function (e) {
          var t = this.get(e);
          return 'boolean' == typeof t && this.set(e, !t),
          this
        },
        get: function (e) {
          return this[e]
        }
      },
      r = t,
      n = Math.sqrt,
      o = Math.atan2,
      s = Math.pow,
      a = Math.PI / 180,
      l = Math.PI / 2,
      T.util = {
        cos: function (e) {
          if (0 === e) return 1;
          switch (e < 0 && (e = - e), e / l) {
            case 1:
            case 3:
              return 0;
            case 2:
              return - 1
          }
          return Math.cos(e)
        },
        sin: function (e) {
          if (0 === e) return 0;
          var t = 1;
          switch (e < 0 && (t = - 1), e / l) {
            case 1:
              return t;
            case 2:
              return 0;
            case 3:
              return - t
          }
          return Math.sin(e)
        },
        removeFromArray: function (e, t) {
          var i = e.indexOf(t);
          return - 1 !== i && e.splice(i, 1),
          e
        },
        getRandomInt: function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e
        },
        degreesToRadians: function (e) {
          return e * a
        },
        radiansToDegrees: function (e) {
          return e / a
        },
        rotatePoint: function (e, t, i) {
          var r = new T.Point(e.x - t.x, e.y - t.y),
          n = T.util.rotateVector(r, i);
          return new T.Point(n.x, n.y).addEquals(t)
        },
        rotateVector: function (e, t) {
          var i = T.util.sin(t),
          r = T.util.cos(t);
          return {
            x: e.x * r - e.y * i,
            y: e.x * i + e.y * r
          }
        },
        createVector: function (e, t) {
          return new T.Point(t.x - e.x, t.y - e.y)
        },
        calcAngleBetweenVectors: function (e, t) {
          return Math.acos((e.x * t.x + e.y * t.y) / (Math.hypot(e.x, e.y) * Math.hypot(t.x, t.y)))
        },
        getHatVector: function (e) {
          return new T.Point(e.x, e.y).multiply(1 / Math.hypot(e.x, e.y))
        },
        getBisector: function (e, t, i) {
          var r = T.util.createVector(e, t),
          n = T.util.createVector(e, i),
          o = T.util.calcAngleBetweenVectors(r, n),
          s = o * (0 === T.util.calcAngleBetweenVectors(T.util.rotateVector(r, o), n) ? 1 : - 1) / 2;
          return {
            vector: T.util.getHatVector(T.util.rotateVector(r, s)),
            angle: o
          }
        },
        projectStrokeOnPoints: function (e, t, i) {
          var r = [
          ],
          n = t.strokeWidth / 2,
          o = t.strokeUniform ? new T.Point(1 / t.scaleX, 1 / t.scaleY) : new T.Point(1, 1),
          s = function (e) {
            var t = n / Math.hypot(e.x, e.y);
            return new T.Point(e.x * t * o.x, e.y * t * o.y)
          };
          return e.length <= 1 || e.forEach((function (a, l) {
            var h,
            c,
            u = new T.Point(a.x, a.y);
            0 === l ? (c = e[l + 1], h = i ? s(T.util.createVector(c, u)).addEquals(u) : e[e.length - 1]) : l === e.length - 1 ? (h = e[l - 1], c = i ? s(T.util.createVector(h, u)).addEquals(u) : e[0]) : (h = e[l - 1], c = e[l + 1]);
            var d,
            f,
            g = T.util.getBisector(u, h, c),
            _ = g.vector,
            p = g.angle;
            if ('miter' === t.strokeLineJoin && (d = - n / Math.sin(p / 2), f = new T.Point(_.x * d * o.x, _.y * d * o.y), Math.hypot(f.x, f.y) / n <= t.strokeMiterLimit)) return r.push(u.add(f)),
            void r.push(u.subtract(f));
            d = - n * Math.SQRT2,
            f = new T.Point(_.x * d * o.x, _.y * d * o.y),
            r.push(u.add(f)),
            r.push(u.subtract(f))
          })),
          r
        },
        transformPoint: function (e, t, i) {
          return i ? new T.Point(t[0] * e.x + t[2] * e.y, t[1] * e.x + t[3] * e.y) : new T.Point(t[0] * e.x + t[2] * e.y + t[4], t[1] * e.x + t[3] * e.y + t[5])
        },
        makeBoundingBoxFromPoints: function (e, t) {
          if (t) for (var i = 0; i < e.length; i++) e[i] = T.util.transformPoint(e[i], t);
          var r = [
            e[0].x,
            e[1].x,
            e[2].x,
            e[3].x
          ],
          n = T.util.array.min(r),
          o = T.util.array.max(r) - n,
          s = [
            e[0].y,
            e[1].y,
            e[2].y,
            e[3].y
          ],
          a = T.util.array.min(s);
          return {
            left: n,
            top: a,
            width: o,
            height: T.util.array.max(s) - a
          }
        },
        invertTransform: function (e) {
          var t = 1 / (e[0] * e[3] - e[1] * e[2]),
          i = [
            t * e[3],
            - t * e[1],
            - t * e[2],
            t * e[0]
          ],
          r = T.util.transformPoint({
            x: e[4],
            y: e[5]
          }, i, !0);
          return i[4] = - r.x,
          i[5] = - r.y,
          i
        },
        toFixed: function (e, t) {
          return parseFloat(Number(e).toFixed(t))
        },
        parseUnit: function (e, t) {
          var i = /\D{0,2}$/.exec(e),
          r = parseFloat(e);
          switch (t || (t = T.Text.DEFAULT_SVG_FONT_SIZE), i[0]) {
            case 'mm':
              return r * T.DPI / 25.4;
            case 'cm':
              return r * T.DPI / 2.54;
            case 'in':
              return r * T.DPI;
            case 'pt':
              return r * T.DPI / 72;
            case 'pc':
              return r * T.DPI / 72 * 12;
            case 'em':
              return r * t;
            default:
              return r
          }
        },
        falseFunction: function () {
          return !1
        },
        getKlass: function (e, t) {
          return e = T.util.string.camelize(e.charAt(0).toUpperCase() + e.slice(1)),
          T.util.resolveNamespace(t) [e]
        },
        getSvgAttributes: function (e) {
          var t = [
            'instantiated_by_use',
            'style',
            'id',
            'class'
          ];
          switch (e) {
            case 'linearGradient':
              t = t.concat(['x1',
              'y1',
              'x2',
              'y2',
              'gradientUnits',
              'gradientTransform']);
              break;
            case 'radialGradient':
              t = t.concat(['gradientUnits',
              'gradientTransform',
              'cx',
              'cy',
              'r',
              'fx',
              'fy',
              'fr']);
              break;
            case 'stop':
              t = t.concat(['offset',
              'stop-color',
              'stop-opacity'])
          }
          return t
        },
        resolveNamespace: function (e) {
          if (!e) return T;
          var t,
          i = e.split('.'),
          n = i.length,
          o = r || T.window;
          for (t = 0; t < n; ++t) o = o[i[t]];
          return o
        },
        loadImage: function (e, t, i, r) {
          if (e) {
            var n = T.util.createImage(),
            o = function () {
              t && t.call(i, n, !1),
              n = n.onload = n.onerror = null
            };
            n.onload = o,
            n.onerror = function () {
              T.log('Error loading ' + n.src),
              t && t.call(i, null, !0),
              n = n.onload = n.onerror = null
            },
            0 !== e.indexOf('data') && null != r && (n.crossOrigin = r),
            'data:image/svg' === e.substring(0, 14) && (n.onload = null, T.util.loadImageInDom(n, o)),
            n.src = e
          } else t && t.call(i, e)
        },
        loadImageInDom: function (e, t) {
          var i = T.document.createElement('div');
          i.style.width = i.style.height = '1px',
          i.style.left = i.style.top = '-100%',
          i.style.position = 'absolute',
          i.appendChild(e),
          T.document.querySelector('body').appendChild(i),
          e.onload = function () {
            t(),
            i.parentNode.removeChild(i),
            i = null
          }
        },
        enlivenObjects: function (e, t, i, r) {
          var n = [
          ],
          o = 0,
          s = (e = e || [
          ]).length;
          function a() {
            ++o === s && t && t(n.filter((function (e) {
              return e
            })))
          }
          s ? e.forEach((function (e, t) {
            e && e.type ? T.util.getKlass(e.type, i).fromObject(e, (function (i, o) {
              o || (n[t] = i),
              r && r(e, i, o),
              a()
            })) : a()
          })) : t && t(n)
        },
        enlivenObjectEnlivables: function (e, t, i) {
          var r = T.Object.ENLIVEN_PROPS.filter((function (t) {
            return !!e[t]
          }));
          T.util.enlivenObjects(r.map((function (t) {
            return e[t]
          })), (function (e) {
            var n = {
            };
            r.forEach((function (i, r) {
              n[i] = e[r],
              t && (t[i] = e[r])
            })),
            i && i(n)
          }))
        },
        enlivenPatterns: function (e, t) {
          function i() {
            ++n === o && t && t(r)
          }
          var r = [
          ],
          n = 0,
          o = (e = e || [
          ]).length;
          o ? e.forEach((function (e, t) {
            e && e.source ? new T.Pattern(e, (function (e) {
              r[t] = e,
              i()
            })) : (r[t] = e, i())
          })) : t && t(r)
        },
        groupSVGElements: function (e, t, i) {
          var r;
          return e && 1 === e.length ? e[0] : (t && (t.width && t.height ? t.centerPoint = {
            x: t.width / 2,
            y: t.height / 2
          }
           : (delete t.width, delete t.height)), r = new T.Group(e, t), void 0 !== i && (r.sourcePath = i), r)
        },
        populateWithProperties: function (e, t, i) {
          if (i && Array.isArray(i)) for (var r = 0, n = i.length; r < n; r++) i[r] in e && (t[i[r]] = e[i[r]])
        },
        createCanvasElement: function () {
          return T.document.createElement('canvas')
        },
        copyCanvasElement: function (e) {
          var t = T.util.createCanvasElement();
          return t.width = e.width,
          t.height = e.height,
          t.getContext('2d').drawImage(e, 0, 0),
          t
        },
        toDataURL: function (e, t, i) {
          return e.toDataURL('image/' + t, i)
        },
        createImage: function () {
          return T.document.createElement('img')
        },
        multiplyTransformMatrices: function (e, t, i) {
          return [e[0] * t[0] + e[2] * t[1],
          e[1] * t[0] + e[3] * t[1],
          e[0] * t[2] + e[2] * t[3],
          e[1] * t[2] + e[3] * t[3],
          i ? 0 : e[0] * t[4] + e[2] * t[5] + e[4],
          i ? 0 : e[1] * t[4] + e[3] * t[5] + e[5]]
        },
        qrDecompose: function (e) {
          var t = o(e[1], e[0]),
          i = s(e[0], 2) + s(e[1], 2),
          r = n(i),
          l = (e[0] * e[3] - e[2] * e[1]) / r,
          h = o(e[0] * e[2] + e[1] * e[3], i);
          return {
            angle: t / a,
            scaleX: r,
            scaleY: l,
            skewX: h / a,
            skewY: 0,
            translateX: e[4],
            translateY: e[5]
          }
        },
        calcRotateMatrix: function (e) {
          if (!e.angle) return T.iMatrix.concat();
          var t = T.util.degreesToRadians(e.angle),
          i = T.util.cos(t),
          r = T.util.sin(t);
          return [i,
          r,
          - r,
          i,
          0,
          0]
        },
        calcDimensionsMatrix: function (e) {
          var t = void 0 === e.scaleX ? 1 : e.scaleX,
          i = void 0 === e.scaleY ? 1 : e.scaleY,
          r = [
            e.flipX ? - t : t,
            0,
            0,
            e.flipY ? - i : i,
            0,
            0
          ],
          n = T.util.multiplyTransformMatrices,
          o = T.util.degreesToRadians;
          return e.skewX && (r = n(r, [
            1,
            0,
            Math.tan(o(e.skewX)),
            1
          ], !0)),
          e.skewY && (r = n(r, [
            1,
            Math.tan(o(e.skewY)),
            0,
            1
          ], !0)),
          r
        },
        composeMatrix: function (e) {
          var t = [
            1,
            0,
            0,
            1,
            e.translateX || 0,
            e.translateY || 0
          ],
          i = T.util.multiplyTransformMatrices;
          return e.angle && (t = i(t, T.util.calcRotateMatrix(e))),
          (1 !== e.scaleX || 1 !== e.scaleY || e.skewX || e.skewY || e.flipX || e.flipY) && (t = i(t, T.util.calcDimensionsMatrix(e))),
          t
        },
        resetObjectTransform: function (e) {
          e.scaleX = 1,
          e.scaleY = 1,
          e.skewX = 0,
          e.skewY = 0,
          e.flipX = !1,
          e.flipY = !1,
          e.rotate(0)
        },
        saveObjectTransform: function (e) {
          return {
            scaleX: e.scaleX,
            scaleY: e.scaleY,
            skewX: e.skewX,
            skewY: e.skewY,
            angle: e.angle,
            left: e.left,
            flipX: e.flipX,
            flipY: e.flipY,
            top: e.top
          }
        },
        isTransparent: function (e, t, i, r) {
          r > 0 && (t > r ? t -= r : t = 0, i > r ? i -= r : i = 0);
          var n,
          o = !0,
          s = e.getImageData(t, i, 2 * r || 1, 2 * r || 1),
          a = s.data.length;
          for (n = 3; n < a && 0 != (o = s.data[n] <= 0); n += 4);
          return s = null,
          o
        },
        parsePreserveAspectRatioAttribute: function (e) {
          var t,
          i = 'meet',
          r = e.split(' ');
          return r && r.length && ('meet' !== (i = r.pop()) && 'slice' !== i ? (t = i, i = 'meet') : r.length && (t = r.pop())),
          {
            meetOrSlice: i,
            alignX: 'none' !== t ? t.slice(1, 4) : 'none',
            alignY: 'none' !== t ? t.slice(5, 8) : 'none'
          }
        },
        clearFabricFontCache: function (e) {
          (e = (e || '').toLowerCase()) ? T.charWidthsCache[e] && delete T.charWidthsCache[e] : T.charWidthsCache = {
          }
        },
        limitDimsByArea: function (e, t) {
          var i = Math.sqrt(t * e),
          r = Math.floor(t / i);
          return {
            x: Math.floor(i),
            y: r
          }
        },
        capValue: function (e, t, i) {
          return Math.max(e, Math.min(t, i))
        },
        findScaleToFit: function (e, t) {
          return Math.min(t.width / e.width, t.height / e.height)
        },
        findScaleToCover: function (e, t) {
          return Math.max(t.width / e.width, t.height / e.height)
        },
        matrixToSVG: function (e) {
          return 'matrix(' + e.map((function (e) {
            return T.util.toFixed(e, T.Object.NUM_FRACTION_DIGITS)
          })).join(' ') + ')'
        },
        removeTransformFromObject: function (e, t) {
          var i = T.util.invertTransform(t),
          r = T.util.multiplyTransformMatrices(i, e.calcOwnMatrix());
          T.util.applyTransformToObject(e, r)
        },
        addTransformToObject: function (e, t) {
          T.util.applyTransformToObject(e, T.util.multiplyTransformMatrices(t, e.calcOwnMatrix()))
        },
        applyTransformToObject: function (e, t) {
          var i = T.util.qrDecompose(t),
          r = new T.Point(i.translateX, i.translateY);
          e.flipX = !1,
          e.flipY = !1,
          e.set('scaleX', i.scaleX),
          e.set('scaleY', i.scaleY),
          e.skewX = i.skewX,
          e.skewY = i.skewY,
          e.angle = i.angle,
          e.setPositionByOrigin(r, 'center', 'center')
        },
        sizeAfterTransform: function (e, t, i) {
          var r = e / 2,
          n = t / 2,
          o = [
            {
              x: - r,
              y: - n
            },
            {
              x: r,
              y: - n
            },
            {
              x: - r,
              y: n
            },
            {
              x: r,
              y: n
            }
          ],
          s = T.util.calcDimensionsMatrix(i),
          a = T.util.makeBoundingBoxFromPoints(o, s);
          return {
            x: a.width,
            y: a.height
          }
        },
        mergeClipPaths: function (e, t) {
          var i = e,
          r = t;
          i.inverted && !r.inverted && (i = t, r = e),
          T.util.applyTransformToObject(r, T.util.multiplyTransformMatrices(T.util.invertTransform(i.calcTransformMatrix()), r.calcTransformMatrix()));
          var n = i.inverted && r.inverted;
          return n && (i.inverted = r.inverted = !1),
          new T.Group([i], {
            clipPath: r,
            inverted: n
          })
        }
      },
      function () {
        var e = Array.prototype.join,
        t = {
          m: 2,
          l: 2,
          h: 1,
          v: 1,
          c: 6,
          s: 4,
          q: 4,
          t: 2,
          a: 7
        },
        i = {
          m: 'l',
          M: 'L'
        };
        function r(e, t, i, r, n, o, s, a, l, h, c) {
          var u = T.util.cos(e),
          d = T.util.sin(e),
          f = T.util.cos(t),
          g = T.util.sin(t),
          _ = i * n * f - r * o * g + s,
          p = r * n * f + i * o * g + a;
          return ['C',
          h + l * ( - i * n * d - r * o * u),
          c + l * ( - r * n * d + i * o * u),
          _ + l * (i * n * g + r * o * f),
          p + l * (r * n * g - i * o * f),
          _,
          p]
        }
        function n(e, t, i, r) {
          var n = Math.atan2(t, e),
          o = Math.atan2(r, i);
          return o >= n ? o - n : 2 * Math.PI - (n - o)
        }
        function o(e, t, i) {
          for (var o = i[1], s = i[2], a = i[3], l = i[4], h = i[5], c = function (e, t, i, o, s, a, l) {
            var h = Math.PI,
            c = l * h / 180,
            u = T.util.sin(c),
            d = T.util.cos(c),
            f = 0,
            g = 0,
            _ = - d * e * 0.5 - u * t * 0.5,
            p = - d * t * 0.5 + u * e * 0.5,
            m = (i = Math.abs(i)) * i,
            v = (o = Math.abs(o)) * o,
            y = p * p,
            S = _ * _,
            b = m * v - m * y - v * S,
            C = 0;
            if (b < 0) {
              var w = Math.sqrt(1 - b / (m * v));
              i *= w,
              o *= w
            } else C = (s === a ? - 1 : 1) * Math.sqrt(b / (m * y + v * S));
            var x = C * i * p / o,
            E = - C * o * _ / i,
            A = d * x - u * E + 0.5 * e,
            I = u * x + d * E + 0.5 * t,
            O = n(1, 0, (_ - x) / i, (p - E) / o),
            R = n((_ - x) / i, (p - E) / o, ( - _ - x) / i, ( - p - E) / o);
            0 === a && R > 0 ? R -= 2 * h : 1 === a && R < 0 && (R += 2 * h);
            for (var D = Math.ceil(Math.abs(R / h * 2)), M = [
            ], L = R / D, F = 8 / 3 * Math.sin(L / 4) * Math.sin(L / 4) / Math.sin(L / 2), P = O + L, k = 0; k < D; k++) M[k] = r(O, P, d, u, i, o, A, I, F, f, g),
            f = M[k][5],
            g = M[k][6],
            O = P,
            P += L;
            return M
          }(i[6] - e, i[7] - t, o, s, l, h, a), u = 0, d = c.length; u < d; u++) c[u][1] += e,
          c[u][2] += t,
          c[u][3] += e,
          c[u][4] += t,
          c[u][5] += e,
          c[u][6] += t;
          return c
        }
        function s(e, t, i, r) {
          return Math.sqrt((i - e) * (i - e) + (r - t) * (r - t))
        }
        function a(e, t, i, r, n, o, s, a) {
          return function (l) {
            var h,
            c = (h = l) * h * h,
            u = function (e) {
              return 3 * e * e * (1 - e)
            }(l),
            d = function (e) {
              return 3 * e * (1 - e) * (1 - e)
            }(l),
            f = function (e) {
              return (1 - e) * (1 - e) * (1 - e)
            }(l);
            return {
              x: s * c + n * u + i * d + e * f,
              y: a * c + o * u + r * d + t * f
            }
          }
        }
        function l(e, t, i, r, n, o, s, a) {
          return function (l) {
            var h = 1 - l,
            c = 3 * h * h * (i - e) + 6 * h * l * (n - i) + 3 * l * l * (s - n),
            u = 3 * h * h * (r - t) + 6 * h * l * (o - r) + 3 * l * l * (a - o);
            return Math.atan2(u, c)
          }
        }
        function h(e, t, i, r, n, o) {
          return function (s) {
            var a,
            l = (a = s) * a,
            h = function (e) {
              return 2 * e * (1 - e)
            }(s),
            c = function (e) {
              return (1 - e) * (1 - e)
            }(s);
            return {
              x: n * l + i * h + e * c,
              y: o * l + r * h + t * c
            }
          }
        }
        function c(e, t, i, r, n, o) {
          return function (s) {
            var a = 1 - s,
            l = 2 * a * (i - e) + 2 * s * (n - i),
            h = 2 * a * (r - t) + 2 * s * (o - r);
            return Math.atan2(h, l)
          }
        }
        function u(e, t, i) {
          var r,
          n,
          o = {
            x: t,
            y: i
          },
          a = 0;
          for (n = 1; n <= 100; n += 1) r = e(n / 100),
          a += s(o.x, o.y, r.x, r.y),
          o = r;
          return a
        }
        function d(e) {
          for (var t, i, r, n, o = 0, d = e.length, f = 0, g = 0, _ = 0, p = 0, m = [
          ], v = 0; v < d; v++) {
            switch (r = {
                x: f,
                y: g,
                command: (t = e[v]) [0]
              }, t[0]) {
              case 'M':
                r.length = 0,
                _ = f = t[1],
                p = g = t[2];
                break;
              case 'L':
                r.length = s(f, g, t[1], t[2]),
                f = t[1],
                g = t[2];
                break;
              case 'C':
                i = a(f, g, t[1], t[2], t[3], t[4], t[5], t[6]),
                n = l(f, g, t[1], t[2], t[3], t[4], t[5], t[6]),
                r.iterator = i,
                r.angleFinder = n,
                r.length = u(i, f, g),
                f = t[5],
                g = t[6];
                break;
              case 'Q':
                i = h(f, g, t[1], t[2], t[3], t[4]),
                n = c(f, g, t[1], t[2], t[3], t[4]),
                r.iterator = i,
                r.angleFinder = n,
                r.length = u(i, f, g),
                f = t[3],
                g = t[4];
                break;
              case 'Z':
              case 'z':
                r.destX = _,
                r.destY = p,
                r.length = s(f, g, _, p),
                f = _,
                g = p
            }
            o += r.length,
            m.push(r)
          }
          return m.push({
            length: o,
            x: f,
            y: g
          }),
          m
        }
        T.util.joinPath = function (e) {
          return e.map((function (e) {
            return e.join(' ')
          })).join(' ')
        },
        T.util.parsePath = function (e) {
          var r,
          n,
          o,
          s,
          a,
          l = [
          ],
          h = [
          ],
          c = T.rePathCommand,
          u = '[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*',
          d = '(' + u + ')' + T.commaWsp,
          f = '([01])' + T.commaWsp + '?',
          g = new RegExp(d + '?' + d + '?' + d + f + f + d + '?(' + u + ')', 'g');
          if (!e || !e.match) return l;
          for (var _, p = 0, m = (a = e.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; p < m; p++) {
            s = (r = a[p]).slice(1).trim(),
            h.length = 0;
            var v = r.charAt(0);
            if (_ = [
              v
            ], 'a' === v.toLowerCase()) for (var y; y = g.exec(s); ) for (var S = 1; S < y.length; S++) h.push(y[S]);
             else for (; o = c.exec(s); ) h.push(o[0]);
            S = 0;
            for (var b = h.length; S < b; S++) n = parseFloat(h[S]),
            isNaN(n) || _.push(n);
            var C = t[v.toLowerCase()],
            w = i[v] || v;
            if (_.length - 1 > C) for (var x = 1, E = _.length; x < E; x += C) l.push([v].concat(_.slice(x, x + C))),
            v = w;
             else l.push(_)
          }
          return l
        },
        T.util.makePathSimpler = function (e) {
          var t,
          i,
          r,
          n,
          s,
          a,
          l = 0,
          h = 0,
          c = e.length,
          u = 0,
          d = 0,
          f = [
          ];
          for (i = 0; i < c; ++i) {
            switch (r = !1, (t = e[i].slice(0)) [0]) {
              case 'l':
                t[0] = 'L',
                t[1] += l,
                t[2] += h;
              case 'L':
                l = t[1],
                h = t[2];
                break;
              case 'h':
                t[1] += l;
              case 'H':
                t[0] = 'L',
                t[2] = h,
                l = t[1];
                break;
              case 'v':
                t[1] += h;
              case 'V':
                t[0] = 'L',
                h = t[1],
                t[1] = l,
                t[2] = h;
                break;
              case 'm':
                t[0] = 'M',
                t[1] += l,
                t[2] += h;
              case 'M':
                l = t[1],
                h = t[2],
                u = t[1],
                d = t[2];
                break;
              case 'c':
                t[0] = 'C',
                t[1] += l,
                t[2] += h,
                t[3] += l,
                t[4] += h,
                t[5] += l,
                t[6] += h;
              case 'C':
                s = t[3],
                a = t[4],
                l = t[5],
                h = t[6];
                break;
              case 's':
                t[0] = 'S',
                t[1] += l,
                t[2] += h,
                t[3] += l,
                t[4] += h;
              case 'S':
                'C' === n ? (s = 2 * l - s, a = 2 * h - a) : (s = l, a = h),
                l = t[3],
                h = t[4],
                t[0] = 'C',
                t[5] = t[3],
                t[6] = t[4],
                t[3] = t[1],
                t[4] = t[2],
                t[1] = s,
                t[2] = a,
                s = t[3],
                a = t[4];
                break;
              case 'q':
                t[0] = 'Q',
                t[1] += l,
                t[2] += h,
                t[3] += l,
                t[4] += h;
              case 'Q':
                s = t[1],
                a = t[2],
                l = t[3],
                h = t[4];
                break;
              case 't':
                t[0] = 'T',
                t[1] += l,
                t[2] += h;
              case 'T':
                'Q' === n ? (s = 2 * l - s, a = 2 * h - a) : (s = l, a = h),
                t[0] = 'Q',
                l = t[1],
                h = t[2],
                t[1] = s,
                t[2] = a,
                t[3] = l,
                t[4] = h;
                break;
              case 'a':
                t[0] = 'A',
                t[6] += l,
                t[7] += h;
              case 'A':
                r = !0,
                f = f.concat(o(l, h, t)),
                l = t[6],
                h = t[7];
                break;
              case 'z':
              case 'Z':
                l = u,
                h = d
            }
            r || f.push(t),
            n = t[0]
          }
          return f
        },
        T.util.getSmoothPathFromPoints = function (e, t) {
          var i,
          r = [
          ],
          n = new T.Point(e[0].x, e[0].y),
          o = new T.Point(e[1].x, e[1].y),
          s = e.length,
          a = 1,
          l = 0,
          h = s > 2;
          for (t = t || 0, h && (a = e[2].x < o.x ? - 1 : e[2].x === o.x ? 0 : 1, l = e[2].y < o.y ? - 1 : e[2].y === o.y ? 0 : 1), r.push(['M',
          n.x - a * t,
          n.y - l * t]), i = 1; i < s; i++) {
            if (!n.eq(o)) {
              var c = n.midPointFrom(o);
              r.push(['Q',
              n.x,
              n.y,
              c.x,
              c.y])
            }
            n = e[i],
            i + 1 < e.length && (o = e[i + 1])
          }
          return h && (a = n.x > e[i - 2].x ? 1 : n.x === e[i - 2].x ? 0 : - 1, l = n.y > e[i - 2].y ? 1 : n.y === e[i - 2].y ? 0 : - 1),
          r.push(['L',
          n.x + a * t,
          n.y + l * t]),
          r
        },
        T.util.getPathSegmentsInfo = d,
        T.util.getBoundsOfCurve = function (t, i, r, n, o, s, a, l) {
          var h;
          if (T.cachesBoundsOfCurve && (h = e.call(arguments), T.boundsOfCurveCache[h])) return T.boundsOfCurveCache[h];
          var c,
          u,
          d,
          f,
          g,
          _,
          p,
          m,
          v = Math.sqrt,
          y = Math.min,
          S = Math.max,
          b = Math.abs,
          C = [
          ],
          w = [
            [],
            [
            ]
          ];
          u = 6 * t - 12 * r + 6 * o,
          c = - 3 * t + 9 * r - 9 * o + 3 * a,
          d = 3 * r - 3 * t;
          for (var x = 0; x < 2; ++x) if (x > 0 && (u = 6 * i - 12 * n + 6 * s, c = - 3 * i + 9 * n - 9 * s + 3 * l, d = 3 * n - 3 * i), b(c) < 1e-12) {
            if (b(u) < 1e-12) continue;
            0 < (f = - d / u) && f < 1 && C.push(f)
          } else (p = u * u - 4 * d * c) < 0 || (0 < (g = ( - u + (m = v(p))) / (2 * c)) && g < 1 && C.push(g), 0 < (_ = ( - u - m) / (2 * c)) && _ < 1 && C.push(_));
          for (var E, A, I, O = C.length, R = O; O--; ) E = (I = 1 - (f = C[O])) * I * I * t + 3 * I * I * f * r + 3 * I * f * f * o + f * f * f * a,
          w[0][O] = E,
          A = I * I * I * i + 3 * I * I * f * n + 3 * I * f * f * s + f * f * f * l,
          w[1][O] = A;
          w[0][R] = t,
          w[1][R] = i,
          w[0][R + 1] = a,
          w[1][R + 1] = l;
          var D = [
            {
              x: y.apply(null, w[0]),
              y: y.apply(null, w[1])
            },
            {
              x: S.apply(null, w[0]),
              y: S.apply(null, w[1])
            }
          ];
          return T.cachesBoundsOfCurve && (T.boundsOfCurveCache[h] = D),
          D
        },
        T.util.getPointOnPath = function (e, t, i) {
          i || (i = d(e));
          for (var r = 0; t - i[r].length > 0 && r < i.length - 2; ) t -= i[r].length,
          r++;
          var n,
          o = i[r],
          a = t / o.length,
          l = o.command,
          h = e[r];
          switch (l) {
            case 'M':
              return {
                x: o.x,
                y: o.y,
                angle: 0
              };
            case 'Z':
            case 'z':
              return (n = new T.Point(o.x, o.y).lerp(new T.Point(o.destX, o.destY), a)).angle = Math.atan2(o.destY - o.y, o.destX - o.x),
              n;
            case 'L':
              return (n = new T.Point(o.x, o.y).lerp(new T.Point(h[1], h[2]), a)).angle = Math.atan2(h[2] - o.y, h[1] - o.x),
              n;
            case 'C':
            case 'Q':
              return function (e, t) {
                for (var i, r, n, o = 0, a = 0, l = e.iterator, h = {
                  x: e.x,
                  y: e.y
                }, c = 0.01, u = e.angleFinder; a < t && c > 0.0001; ) i = l(o),
                n = o,
                (r = s(h.x, h.y, i.x, i.y)) + a > t ? (o -= c, c /= 2) : (h = i, o += c, a += r);
                return i.angle = u(n),
                i
              }(o, t)
          }
        },
        T.util.transformPath = function (e, t, i) {
          return i && (t = T.util.multiplyTransformMatrices(t, [
            1,
            0,
            0,
            1,
            - i.x,
            - i.y
          ])),
          e.map((function (e) {
            for (var i = e.slice(0), r = {
            }, n = 1; n < e.length - 1; n += 2) r.x = e[n],
            r.y = e[n + 1],
            r = T.util.transformPoint(r, t),
            i[n] = r.x,
            i[n + 1] = r.y;
            return i
          }))
        }
      }(),
      function () {
        var e = Array.prototype.slice;
        function t(e, t, i) {
          if (e && 0 !== e.length) {
            var r = e.length - 1,
            n = t ? e[r][t] : e[r];
            if (t) for (; r--; ) i(e[r][t], n) && (n = e[r][t]);
             else for (; r--; ) i(e[r], n) && (n = e[r]);
            return n
          }
        }
        T.util.array = {
          fill: function (e, t) {
            for (var i = e.length; i--; ) e[i] = t;
            return e
          },
          invoke: function (t, i) {
            for (var r = e.call(arguments, 2), n = [
            ], o = 0, s = t.length; o < s; o++) n[o] = r.length ? t[o][i].apply(t[o], r) : t[o][i].call(t[o]);
            return n
          },
          min: function (e, i) {
            return t(e, i, (function (e, t) {
              return e < t
            }))
          },
          max: function (e, i) {
            return t(e, i, (function (e, t) {
              return e >= t
            }))
          }
        }
      }(),
      function () {
        function e(t, i, r) {
          if (r) if (!T.isLikelyNode && i instanceof Element) t = i;
           else if (i instanceof Array) {
            t = [
            ];
            for (var n = 0, o = i.length; n < o; n++) t[n] = e({
            }, i[n], r)
          } else if (i && 'object' == typeof i) for (var s in i) 'canvas' === s || 'group' === s ? t[s] = null : i.hasOwnProperty(s) && (t[s] = e({
          }, i[s], r));
           else t = i;
           else for (var s in i) t[s] = i[s];
          return t
        }
        T.util.object = {
          extend: e,
          clone: function (t, i) {
            return e({
            }, t, i)
          }
        },
        T.util.object.extend(T.util, T.Observable)
      }(),
      function () {
        function e(e, t) {
          var i = e.charCodeAt(t);
          if (isNaN(i)) return '';
          if (i < 55296 || i > 57343) return e.charAt(t);
          if (55296 <= i && i <= 56319) {
            if (e.length <= t + 1) throw 'High surrogate without following low surrogate';
            var r = e.charCodeAt(t + 1);
            if (56320 > r || r > 57343) throw 'High surrogate without following low surrogate';
            return e.charAt(t) + e.charAt(t + 1)
          }
          if (0 === t) throw 'Low surrogate without preceding high surrogate';
          var n = e.charCodeAt(t - 1);
          if (55296 > n || n > 56319) throw 'Low surrogate without preceding high surrogate';
          return !1
        }
        T.util.string = {
          camelize: function (e) {
            return e.replace(/-+(.)?/g, (function (e, t) {
              return t ? t.toUpperCase() : ''
            }))
          },
          capitalize: function (e, t) {
            return e.charAt(0).toUpperCase() + (t ? e.slice(1) : e.slice(1).toLowerCase())
          },
          escapeXml: function (e) {
            return e.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          },
          graphemeSplit: function (t) {
            var i,
            r = 0,
            n = [
            ];
            for (r = 0; r < t.length; r++) !1 !== (i = e(t, r)) && n.push(i);
            return n
          }
        }
      }(),
      function () {
        var e = Array.prototype.slice,
        t = function () {
        },
        i = function () {
          for (var e in {
            toString: 1
          }) if ('toString' === e) return !1;
          return !0
        }(),
        r = function (e, t, r) {
          for (var n in t) n in e.prototype && 'function' == typeof e.prototype[n] && (t[n] + '').indexOf('callSuper') > - 1 ? e.prototype[n] = function (e) {
            return function () {
              var i = this.constructor.superclass;
              this.constructor.superclass = r;
              var n = t[e].apply(this, arguments);
              if (this.constructor.superclass = i, 'initialize' !== e) return n
            }
          }(n) : e.prototype[n] = t[n],
          i && (t.toString !== Object.prototype.toString && (e.prototype.toString = t.toString), t.valueOf !== Object.prototype.valueOf && (e.prototype.valueOf = t.valueOf))
        };
        function n() {
        }
        function o(t) {
          for (var i = null, r = this; r.constructor.superclass; ) {
            var n = r.constructor.superclass.prototype[t];
            if (r[t] !== n) {
              i = n;
              break
            }
            r = r.constructor.superclass.prototype
          }
          return i ? arguments.length > 1 ? i.apply(this, e.call(arguments, 1)) : i.call(this) : console.log('tried to callSuper ' + t + ', method not found in prototype chain', this)
        }
        T.util.createClass = function () {
          var i = null,
          s = e.call(arguments, 0);
          function a() {
            this.initialize.apply(this, arguments)
          }
          'function' == typeof s[0] && (i = s.shift()),
          a.superclass = i,
          a.subclasses = [
          ],
          i && (n.prototype = i.prototype, a.prototype = new n, i.subclasses.push(a));
          for (var l = 0, h = s.length; l < h; l++) r(a, s[l], i);
          return a.prototype.initialize || (a.prototype.initialize = t),
          a.prototype.constructor = a,
          a.prototype.callSuper = o,
          a
        }
      }(),
      h = !!T.document.createElement('div').attachEvent,
      c = [
        'touchstart',
        'touchmove',
        'touchend'
      ],
      T.util.addListener = function (e, t, i, r) {
        e && e.addEventListener(t, i, !h && r)
      },
      T.util.removeListener = function (e, t, i, r) {
        e && e.removeEventListener(t, i, !h && r)
      },
      T.util.getPointer = function (e) {
        var t = e.target,
        i = T.util.getScrollLeftTop(t),
        r = function (e) {
          var t = e.changedTouches;
          return t && t[0] ? t[0] : e
        }(e);
        return {
          x: r.clientX + i.left,
          y: r.clientY + i.top
        }
      },
      T.util.isTouchEvent = function (e) {
        return c.indexOf(e.type) > - 1 || 'touch' === e.pointerType
      },
      d = 'string' == typeof (u = T.document.createElement('div')).style.opacity,
      f = 'string' == typeof u.style.filter,
      g = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
      _ = function (e) {
        return e
      },
      d ? _ = function (e, t) {
        return e.style.opacity = t,
        e
      }
       : f && (_ = function (e, t) {
        var i = e.style;
        return e.currentStyle && !e.currentStyle.hasLayout && (i.zoom = 1),
        g.test(i.filter) ? (t = t >= 0.9999 ? '' : 'alpha(opacity=' + 100 * t + ')', i.filter = i.filter.replace(g, t)) : i.filter += ' alpha(opacity=' + 100 * t + ')',
        e
      }),
      T.util.setStyle = function (e, t) {
        var i = e.style;
        if (!i) return e;
        if ('string' == typeof t) return e.style.cssText += ';' + t,
        t.indexOf('opacity') > - 1 ? _(e, t.match(/opacity:\s*(\d?\.?\d*)/) [1]) : e;
        for (var r in t) 'opacity' === r ? _(e, t[r]) : i['float' === r || 'cssFloat' === r ? void 0 === i.styleFloat ? 'cssFloat' : 'styleFloat' : r] = t[r];
        return e
      },
      function () {
        var e,
        t,
        i,
        r,
        n = Array.prototype.slice,
        o = function (e) {
          return n.call(e, 0)
        };
        try {
          e = o(T.document.childNodes) instanceof Array
        } catch (e) {
        }
        function s(e, t) {
          var i = T.document.createElement(e);
          for (var r in t) 'class' === r ? i.className = t[r] : 'for' === r ? i.htmlFor = t[r] : i.setAttribute(r, t[r]);
          return i
        }
        function a(e) {
          for (var t = 0, i = 0, r = T.document.documentElement, n = T.document.body || {
            scrollLeft: 0,
            scrollTop: 0
          }; e && (e.parentNode || e.host) && ((e = e.parentNode || e.host) === T.document ? (t = n.scrollLeft || r.scrollLeft || 0, i = n.scrollTop || r.scrollTop || 0) : (t += e.scrollLeft || 0, i += e.scrollTop || 0), 1 !== e.nodeType || 'fixed' !== e.style.position); );
          return {
            left: t,
            top: i
          }
        }
        e || (o = function (e) {
          for (var t = new Array(e.length), i = e.length; i--; ) t[i] = e[i];
          return t
        }),
        t = T.document.defaultView && T.document.defaultView.getComputedStyle ? function (e, t) {
          var i = T.document.defaultView.getComputedStyle(e, null);
          return i ? i[t] : void 0
        }
         : function (e, t) {
          var i = e.style[t];
          return !i && e.currentStyle && (i = e.currentStyle[t]),
          i
        },
        i = T.document.documentElement.style,
        r = 'userSelect' in i ? 'userSelect' : 'MozUserSelect' in i ? 'MozUserSelect' : 'WebkitUserSelect' in i ? 'WebkitUserSelect' : 'KhtmlUserSelect' in i ? 'KhtmlUserSelect' : '',
        T.util.makeElementUnselectable = function (e) {
          return void 0 !== e.onselectstart && (e.onselectstart = T.util.falseFunction),
          r ? e.style[r] = 'none' : 'string' == typeof e.unselectable && (e.unselectable = 'on'),
          e
        },
        T.util.makeElementSelectable = function (e) {
          return void 0 !== e.onselectstart && (e.onselectstart = null),
          r ? e.style[r] = '' : 'string' == typeof e.unselectable && (e.unselectable = ''),
          e
        },
        T.util.setImageSmoothing = function (e, t) {
          e.imageSmoothingEnabled = e.imageSmoothingEnabled || e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled || e.oImageSmoothingEnabled,
          e.imageSmoothingEnabled = t
        },
        T.util.getById = function (e) {
          return 'string' == typeof e ? T.document.getElementById(e) : e
        },
        T.util.toArray = o,
        T.util.addClass = function (e, t) {
          e && - 1 === (' ' + e.className + ' ').indexOf(' ' + t + ' ') && (e.className += (e.className ? ' ' : '') + t)
        },
        T.util.makeElement = s,
        T.util.wrapElement = function (e, t, i) {
          return 'string' == typeof t && (t = s(t, i)),
          e.parentNode && e.parentNode.replaceChild(t, e),
          t.appendChild(e),
          t
        },
        T.util.getScrollLeftTop = a,
        T.util.getElementOffset = function (e) {
          var i,
          r,
          n = e && e.ownerDocument,
          o = {
            left: 0,
            top: 0
          },
          s = {
            left: 0,
            top: 0
          },
          l = {
            borderLeftWidth: 'left',
            borderTopWidth: 'top',
            paddingLeft: 'left',
            paddingTop: 'top'
          };
          if (!n) return s;
          for (var h in l) s[l[h]] += parseInt(t(e, h), 10) || 0;
          return i = n.documentElement,
          void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()),
          r = a(e),
          {
            left: o.left + r.left - (i.clientLeft || 0) + s.left,
            top: o.top + r.top - (i.clientTop || 0) + s.top
          }
        },
        T.util.getNodeCanvas = function (e) {
          var t = T.jsdomImplForWrapper(e);
          return t._canvas || t._image
        },
        T.util.cleanUpJsdomNode = function (e) {
          if (T.isLikelyNode) {
            var t = T.jsdomImplForWrapper(e);
            t && (t._image = null, t._canvas = null, t._currentSrc = null, t._attributes = null, t._classList = null)
          }
        }
      }(),
      function () {
        function e() {
        }
        T.util.request = function (t, i) {
          i || (i = {
          });
          var r = i.method ? i.method.toUpperCase() : 'GET',
          n = i.onComplete || function () {
          },
          o = new T.window.XMLHttpRequest,
          s = i.body || i.parameters;
          return o.onreadystatechange = function () {
            4 === o.readyState && (n(o), o.onreadystatechange = e)
          },
          'GET' === r && (s = null, 'string' == typeof i.parameters && (t = function (e, t) {
            return e + (/\?/.test(e) ? '&' : '?') + t
          }(t, i.parameters))),
          o.open(r, t, !0),
          'POST' !== r && 'PUT' !== r || o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
          o.send(s),
          o
        }
      }(),
      T.log = console.log,
      T.warn = console.warn,
      function () {
        var e = T.util.object.extend,
        t = T.util.object.clone,
        i = [
        ];
        function r() {
          return !1
        }
        function n(e, t, i, r) {
          return - i * Math.cos(e / r * (Math.PI / 2)) + i + t
        }
        T.util.object.extend(i, {
          cancelAll: function () {
            var e = this.splice(0);
            return e.forEach((function (e) {
              e.cancel()
            })),
            e
          },
          cancelByCanvas: function (e) {
            if (!e) return [];
            var t = this.filter((function (t) {
              return 'object' == typeof t.target && t.target.canvas === e
            }));
            return t.forEach((function (e) {
              e.cancel()
            })),
            t
          },
          cancelByTarget: function (e) {
            var t = this.findAnimationsByTarget(e);
            return t.forEach((function (e) {
              e.cancel()
            })),
            t
          },
          findAnimationIndex: function (e) {
            return this.indexOf(this.findAnimation(e))
          },
          findAnimation: function (e) {
            return this.find((function (t) {
              return t.cancel === e
            }))
          },
          findAnimationsByTarget: function (e) {
            return e ? this.filter((function (t) {
              return t.target === e
            })) : [
            ]
          }
        });
        var o = T.window.requestAnimationFrame || T.window.webkitRequestAnimationFrame || T.window.mozRequestAnimationFrame || T.window.oRequestAnimationFrame || T.window.msRequestAnimationFrame || function (e) {
          return T.window.setTimeout(e, 1000 / 60)
        },
        s = T.window.cancelAnimationFrame || T.window.clearTimeout;
        function a() {
          return o.apply(T.window, arguments)
        }
        T.util.animate = function (i) {
          i || (i = {
          });
          var o,
          s = !1,
          l = function () {
            var e = T.runningAnimations.indexOf(o);
            return e > - 1 && T.runningAnimations.splice(e, 1) [0]
          };
          return o = e(t(i), {
            cancel: function () {
              return s = !0,
              l()
            },
            currentValue: 'startValue' in i ? i.startValue : 0,
            completionRate: 0,
            durationRate: 0
          }),
          T.runningAnimations.push(o),
          a((function (e) {
            var t,
            h = e || + new Date,
            c = i.duration || 500,
            u = h + c,
            d = i.onChange || r,
            f = i.abort || r,
            g = i.onComplete || r,
            _ = i.easing || n,
            p = 'startValue' in i && i.startValue.length > 0,
            m = 'startValue' in i ? i.startValue : 0,
            v = 'endValue' in i ? i.endValue : 100,
            y = i.byValue || (p ? m.map((function (e, t) {
              return v[t] - m[t]
            })) : v - m);
            i.onStart && i.onStart(),
            function e(i) {
              var r = (t = i || + new Date) > u ? c : t - h,
              n = r / c,
              S = p ? m.map((function (e, t) {
                return _(r, m[t], y[t], c)
              })) : _(r, m, y, c),
              b = p ? Math.abs((S[0] - m[0]) / y[0]) : Math.abs((S - m) / y);
              if (o.currentValue = p ? S.slice() : S, o.completionRate = b, o.durationRate = n, !s) {
                if (!f(S, b, n)) return t > u ? (o.currentValue = p ? v.slice() : v, o.completionRate = 1, o.durationRate = 1, d(p ? v.slice() : v, 1, 1), g(v, 1, 1), void l()) : (d(S, b, n), void a(e));
                l()
              }
            }(h)
          })),
          o.cancel
        },
        T.util.requestAnimFrame = a,
        T.util.cancelAnimFrame = function () {
          return s.apply(T.window, arguments)
        },
        T.runningAnimations = i
      }(),
      function () {
        function e(e, t, i) {
          var r = 'rgba(' + parseInt(e[0] + i * (t[0] - e[0]), 10) + ',' + parseInt(e[1] + i * (t[1] - e[1]), 10) + ',' + parseInt(e[2] + i * (t[2] - e[2]), 10);
          return (r += ',' + (e && t ? parseFloat(e[3] + i * (t[3] - e[3])) : 1)) + ')'
        }
        T.util.animateColor = function (t, i, r, n) {
          var o = new T.Color(t).getSource(),
          s = new T.Color(i).getSource(),
          a = n.onComplete,
          l = n.onChange;
          return n = n || {
          },
          T.util.animate(T.util.object.extend(n, {
            duration: r || 500,
            startValue: o,
            endValue: s,
            byValue: s,
            easing: function (t, i, r, o) {
              return e(i, r, n.colorEasing ? n.colorEasing(t, o) : 1 - Math.cos(t / o * (Math.PI / 2)))
            },
            onComplete: function (t, i, r) {
              if (a) return a(e(s, s, 0), i, r)
            },
            onChange: function (t, i, r) {
              if (l) {
                if (Array.isArray(t)) return l(e(t, t, 0), i, r);
                l(t, i, r)
              }
            }
          }))
        }
      }(),
      function () {
        function e(e, t, i, r) {
          return e < Math.abs(t) ? (e = t, r = i / 4) : r = 0 === t && 0 === e ? i / (2 * Math.PI) * Math.asin(1) : i / (2 * Math.PI) * Math.asin(t / e),
          {
            a: e,
            c: t,
            p: i,
            s: r
          }
        }
        function t(e, t, i) {
          return e.a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e.s) * (2 * Math.PI) / e.p)
        }
        function i(e, t, i, n) {
          return i - r(n - e, 0, i, n) + t
        }
        function r(e, t, i, r) {
          return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + t : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t
        }
        T.util.ease = {
          easeInQuad: function (e, t, i, r) {
            return i * (e /= r) * e + t
          },
          easeOutQuad: function (e, t, i, r) {
            return - i * (e /= r) * (e - 2) + t
          },
          easeInOutQuad: function (e, t, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + t : - i / 2 * (--e * (e - 2) - 1) + t
          },
          easeInCubic: function (e, t, i, r) {
            return i * (e /= r) * e * e + t
          },
          easeOutCubic: function (e, t, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + t
          },
          easeInOutCubic: function (e, t, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
          },
          easeInQuart: function (e, t, i, r) {
            return i * (e /= r) * e * e * e + t
          },
          easeOutQuart: function (e, t, i, r) {
            return - i * ((e = e / r - 1) * e * e * e - 1) + t
          },
          easeInOutQuart: function (e, t, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + t : - i / 2 * ((e -= 2) * e * e * e - 2) + t
          },
          easeInQuint: function (e, t, i, r) {
            return i * (e /= r) * e * e * e * e + t
          },
          easeOutQuint: function (e, t, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + t
          },
          easeInOutQuint: function (e, t, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
          },
          easeInSine: function (e, t, i, r) {
            return - i * Math.cos(e / r * (Math.PI / 2)) + i + t
          },
          easeOutSine: function (e, t, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + t
          },
          easeInOutSine: function (e, t, i, r) {
            return - i / 2 * (Math.cos(Math.PI * e / r) - 1) + t
          },
          easeInExpo: function (e, t, i, r) {
            return 0 === e ? t : i * Math.pow(2, 10 * (e / r - 1)) + t
          },
          easeOutExpo: function (e, t, i, r) {
            return e === r ? t + i : i * (1 - Math.pow(2, - 10 * e / r)) + t
          },
          easeInOutExpo: function (e, t, i, r) {
            return 0 === e ? t : e === r ? t + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (2 - Math.pow(2, - 10 * --e)) + t
          },
          easeInCirc: function (e, t, i, r) {
            return - i * (Math.sqrt(1 - (e /= r) * e) - 1) + t
          },
          easeOutCirc: function (e, t, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + t
          },
          easeInOutCirc: function (e, t, i, r) {
            return (e /= r / 2) < 1 ? - i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
          },
          easeInElastic: function (i, r, n, o) {
            var s = 0;
            return 0 === i ? r : 1 == (i /= o) ? r + n : (s || (s = 0.3 * o), - t(e(n, n, s, 1.70158), i, o) + r)
          },
          easeOutElastic: function (t, i, r, n) {
            var o = 0;
            if (0 === t) return i;
            if (1 == (t /= n)) return i + r;
            o || (o = 0.3 * n);
            var s = e(r, r, o, 1.70158);
            return s.a * Math.pow(2, - 10 * t) * Math.sin((t * n - s.s) * (2 * Math.PI) / s.p) + s.c + i
          },
          easeInOutElastic: function (i, r, n, o) {
            var s = 0;
            if (0 === i) return r;
            if (2 == (i /= o / 2)) return r + n;
            s || (s = o * (0.3 * 1.5));
            var a = e(n, n, s, 1.70158);
            return i < 1 ? - 0.5 * t(a, i, o) + r : a.a * Math.pow(2, - 10 * (i -= 1)) * Math.sin((i * o - a.s) * (2 * Math.PI) / a.p) * 0.5 + a.c + r
          },
          easeInBack: function (e, t, i, r, n) {
            return void 0 === n && (n = 1.70158),
            i * (e /= r) * e * ((n + 1) * e - n) + t
          },
          easeOutBack: function (e, t, i, r, n) {
            return void 0 === n && (n = 1.70158),
            i * ((e = e / r - 1) * e * ((n + 1) * e + n) + 1) + t
          },
          easeInOutBack: function (e, t, i, r, n) {
            return void 0 === n && (n = 1.70158),
            (e /= r / 2) < 1 ? i / 2 * (e * e * ((1 + (n *= 1.525)) * e - n)) + t : i / 2 * ((e -= 2) * e * ((1 + (n *= 1.525)) * e + n) + 2) + t
          },
          easeInBounce: i,
          easeOutBounce: r,
          easeInOutBounce: function (e, t, n, o) {
            return e < o / 2 ? 0.5 * i(2 * e, 0, n, o) + t : 0.5 * r(2 * e - o, 0, n, o) + 0.5 * n + t
          }
        }
      }(),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.util.object.clone,
        n = t.util.toFixed,
        o = t.util.parseUnit,
        s = t.util.multiplyTransformMatrices,
        a = {
          cx: 'left',
          x: 'left',
          r: 'radius',
          cy: 'top',
          y: 'top',
          display: 'visible',
          visibility: 'visible',
          transform: 'transformMatrix',
          'fill-opacity': 'fillOpacity',
          'fill-rule': 'fillRule',
          'font-family': 'fontFamily',
          'font-size': 'fontSize',
          'font-style': 'fontStyle',
          'font-weight': 'fontWeight',
          'letter-spacing': 'charSpacing',
          'paint-order': 'paintFirst',
          'stroke-dasharray': 'strokeDashArray',
          'stroke-dashoffset': 'strokeDashOffset',
          'stroke-linecap': 'strokeLineCap',
          'stroke-linejoin': 'strokeLineJoin',
          'stroke-miterlimit': 'strokeMiterLimit',
          'stroke-opacity': 'strokeOpacity',
          'stroke-width': 'strokeWidth',
          'text-decoration': 'textDecoration',
          'text-anchor': 'textAnchor',
          opacity: 'opacity',
          'clip-path': 'clipPath',
          'clip-rule': 'clipRule',
          'vector-effect': 'strokeUniform',
          'image-rendering': 'imageSmoothing'
        },
        l = {
          stroke: 'strokeOpacity',
          fill: 'fillOpacity'
        },
        h = 'font-size',
        c = 'clip-path';
        function u(e) {
          return e in a ? a[e] : e
        }
        function d(e, i, r, n) {
          var a,
          l = Array.isArray(i);
          if ('fill' !== e && 'stroke' !== e || 'none' !== i) {
            if ('strokeUniform' === e) return 'non-scaling-stroke' === i;
            if ('strokeDashArray' === e) i = 'none' === i ? null : i.replace(/,/g, ' ').split(/\s+/).map(parseFloat);
             else if ('transformMatrix' === e) i = r && r.transformMatrix ? s(r.transformMatrix, t.parseTransformAttribute(i)) : t.parseTransformAttribute(i);
             else if ('visible' === e) i = 'none' !== i && 'hidden' !== i,
            r && !1 === r.visible && (i = !1);
             else if ('opacity' === e) i = parseFloat(i),
            r && void 0 !== r.opacity && (i *= r.opacity);
             else if ('textAnchor' === e) i = 'start' === i ? 'left' : 'end' === i ? 'right' : 'center';
             else if ('charSpacing' === e) a = o(i, n) / n * 1000;
             else if ('paintFirst' === e) {
              var h = i.indexOf('fill'),
              c = i.indexOf('stroke');
              i = 'fill',
              (h > - 1 && c > - 1 && c < h || - 1 === h && c > - 1) && (i = 'stroke')
            } else {
              if ('href' === e || 'xlink:href' === e || 'font' === e) return i;
              if ('imageSmoothing' === e) return 'optimizeQuality' === i;
              a = l ? i.map(o) : o(i, n)
            }
          } else i = '';
          return !l && isNaN(a) ? i : a
        }
        function f(e) {
          return new RegExp('^(' + e.join('|') + ')\\b', 'i')
        }
        function g(e, t) {
          var i,
          r,
          n,
          o,
          s = [
          ];
          for (n = 0, o = t.length; n < o; n++) i = t[n],
          r = e.getElementsByTagName(i),
          s = s.concat(Array.prototype.slice.call(r));
          return s
        }
        function _(e, t) {
          var i,
          r = !0;
          return (i = p(e, t.pop())) && t.length && (r = function (e, t) {
            for (var i, r = !0; e.parentNode && 1 === e.parentNode.nodeType && t.length; ) r && (i = t.pop()),
            r = p(e = e.parentNode, i);
            return 0 === t.length
          }(e, t)),
          i && r && 0 === t.length
        }
        function p(e, t) {
          var i,
          r,
          n = e.nodeName,
          o = e.getAttribute('class'),
          s = e.getAttribute('id');
          if (i = new RegExp('^' + n, 'i'), t = t.replace(i, ''), s && t.length && (i = new RegExp('#' + s + '(?![a-zA-Z\\-]+)', 'i'), t = t.replace(i, '')), o && t.length) for (r = (o = o.split(' ')).length; r--; ) i = new RegExp('\\.' + o[r] + '(?![a-zA-Z\\-]+)', 'i'),
          t = t.replace(i, '');
          return 0 === t.length
        }
        function m(e, t) {
          var i;
          if (e.getElementById && (i = e.getElementById(t)), i) return i;
          var r,
          n,
          o,
          s = e.getElementsByTagName('*');
          for (n = 0, o = s.length; n < o; n++) if (t === (r = s[n]).getAttribute('id')) return r
        }
        t.svgValidTagNamesRegEx = f(['path',
        'circle',
        'polygon',
        'polyline',
        'ellipse',
        'rect',
        'line',
        'image',
        'text']),
        t.svgViewBoxElementsRegEx = f(['symbol',
        'image',
        'marker',
        'pattern',
        'view',
        'svg']),
        t.svgInvalidAncestorsRegEx = f(['pattern',
        'defs',
        'symbol',
        'metadata',
        'clipPath',
        'mask',
        'desc']),
        t.svgValidParentsRegEx = f(['symbol',
        'g',
        'a',
        'svg',
        'clipPath',
        'defs']),
        t.cssRules = {
        },
        t.gradientDefs = {
        },
        t.clipPaths = {
        },
        t.parseTransformAttribute = function () {
          function e(e, i, r) {
            e[r] = Math.tan(t.util.degreesToRadians(i[0]))
          }
          var i = t.iMatrix,
          r = t.reNum,
          n = t.commaWsp,
          o = '(?:(?:(matrix)\\s*\\(\\s*(' + r + ')' + n + '(' + r + ')' + n + '(' + r + ')' + n + '(' + r + ')' + n + '(' + r + ')' + n + '(' + r + ')\\s*\\))|(?:(translate)\\s*\\(\\s*(' + r + ')(?:' + n + '(' + r + '))?\\s*\\))|(?:(scale)\\s*\\(\\s*(' + r + ')(?:' + n + '(' + r + '))?\\s*\\))|(?:(rotate)\\s*\\(\\s*(' + r + ')(?:' + n + '(' + r + ')' + n + '(' + r + '))?\\s*\\))|(?:(skewX)\\s*\\(\\s*(' + r + ')\\s*\\))|(?:(skewY)\\s*\\(\\s*(' + r + ')\\s*\\)))',
          s = new RegExp('^\\s*(?:(?:' + o + '(?:' + n + '*' + o + ')*)?)\\s*$'),
          a = new RegExp(o, 'g');
          return function (r) {
            var n = i.concat(),
            l = [
            ];
            if (!r || r && !s.test(r)) return n;
            r.replace(a, (function (r) {
              var s = new RegExp(o).exec(r).filter((function (e) {
                return !!e
              })),
              a = s[1],
              h = s.slice(2).map(parseFloat);
              switch (a) {
                case 'translate':
                  !function (e, t) {
                    e[4] = t[0],
                    2 === t.length && (e[5] = t[1])
                  }(n, h);
                  break;
                case 'rotate':
                  h[0] = t.util.degreesToRadians(h[0]),
                  function (e, i) {
                    var r = t.util.cos(i[0]),
                    n = t.util.sin(i[0]),
                    o = 0,
                    s = 0;
                    3 === i.length && (o = i[1], s = i[2]),
                    e[0] = r,
                    e[1] = n,
                    e[2] = - n,
                    e[3] = r,
                    e[4] = o - (r * o - n * s),
                    e[5] = s - (n * o + r * s)
                  }(n, h);
                  break;
                case 'scale':
                  !function (e, t) {
                    var i = t[0],
                    r = 2 === t.length ? t[1] : t[0];
                    e[0] = i,
                    e[3] = r
                  }(n, h);
                  break;
                case 'skewX':
                  e(n, h, 2);
                  break;
                case 'skewY':
                  e(n, h, 1);
                  break;
                case 'matrix':
                  n = h
              }
              l.push(n.concat()),
              n = i.concat()
            }));
            for (var h = l[0]; l.length > 1; ) l.shift(),
            h = t.util.multiplyTransformMatrices(h, l[0]);
            return h
          }
        }();
        var v = new RegExp('^\\s*(' + t.reNum + '+)\\s*,?\\s*(' + t.reNum + '+)\\s*,?\\s*(' + t.reNum + '+)\\s*,?\\s*(' + t.reNum + '+)\\s*$');
        function y(e) {
          if (!t.svgViewBoxElementsRegEx.test(e.nodeName)) return {
          };
          var i,
          r,
          n,
          s,
          a,
          l,
          h = e.getAttribute('viewBox'),
          c = 1,
          u = 1,
          d = e.getAttribute('width'),
          f = e.getAttribute('height'),
          g = e.getAttribute('x') || 0,
          _ = e.getAttribute('y') || 0,
          p = e.getAttribute('preserveAspectRatio') || '',
          m = !h || !(h = h.match(v)),
          y = !d || !f || '100%' === d || '100%' === f,
          S = m && y,
          b = {
          },
          C = '',
          w = 0,
          T = 0;
          if (b.width = 0, b.height = 0, b.toBeParsed = S, m && (g || _) && e.parentNode && '#document' !== e.parentNode.nodeName && (C = ' translate(' + o(g) + ' ' + o(_) + ') ', a = (e.getAttribute('transform') || '') + C, e.setAttribute('transform', a), e.removeAttribute('x'), e.removeAttribute('y')), S) return b;
          if (m) return b.width = o(d),
          b.height = o(f),
          b;
          if (i = - parseFloat(h[1]), r = - parseFloat(h[2]), n = parseFloat(h[3]), s = parseFloat(h[4]), b.minX = i, b.minY = r, b.viewBoxWidth = n, b.viewBoxHeight = s, y ? (b.width = n, b.height = s) : (b.width = o(d), b.height = o(f), c = b.width / n, u = b.height / s), 'none' !== (p = t.util.parsePreserveAspectRatioAttribute(p)).alignX && ('meet' === p.meetOrSlice && (u = c = c > u ? u : c), 'slice' === p.meetOrSlice && (u = c = c > u ? c : u), w = b.width - n * c, T = b.height - s * c, 'Mid' === p.alignX && (w /= 2), 'Mid' === p.alignY && (T /= 2), 'Min' === p.alignX && (w = 0), 'Min' === p.alignY && (T = 0)), 1 === c && 1 === u && 0 === i && 0 === r && 0 === g && 0 === _) return b;
          if ((g || _) && '#document' !== e.parentNode.nodeName && (C = ' translate(' + o(g) + ' ' + o(_) + ') '), a = C + ' matrix(' + c + ' 0 0 ' + u + ' ' + (i * c + w) + ' ' + (r * u + T) + ') ', 'svg' === e.nodeName) {
            for (l = e.ownerDocument.createElementNS(t.svgNS, 'g'); e.firstChild; ) l.appendChild(e.firstChild);
            e.appendChild(l)
          } else (l = e).removeAttribute('x'),
          l.removeAttribute('y'),
          a = l.getAttribute('transform') + a;
          return l.setAttribute('transform', a),
          b
        }
        function S(e, t) {
          var i = 'xlink:href',
          r = m(e, t.getAttribute(i).slice(1));
          if (r && r.getAttribute(i) && S(e, r), [
            'gradientTransform',
            'x1',
            'x2',
            'y1',
            'y2',
            'gradientUnits',
            'cx',
            'cy',
            'r',
            'fx',
            'fy'
          ].forEach((function (e) {
            r && !t.hasAttribute(e) && r.hasAttribute(e) && t.setAttribute(e, r.getAttribute(e))
          })), !t.children.length) for (var n = r.cloneNode(!0); n.firstChild; ) t.appendChild(n.firstChild);
          t.removeAttribute(i)
        }
        t.parseSVGDocument = function (e, i, n, o) {
          if (e) {
            !function (e) {
              for (var i = g(e, [
                'use',
                'svg:use'
              ]), r = 0; i.length && r < i.length; ) {
                var n = i[r],
                o = n.getAttribute('xlink:href') || n.getAttribute('href');
                if (null === o) return;
                var s,
                a,
                l,
                h,
                c = o.slice(1),
                u = n.getAttribute('x') || 0,
                d = n.getAttribute('y') || 0,
                f = m(e, c).cloneNode(!0),
                _ = (f.getAttribute('transform') || '') + ' translate(' + u + ', ' + d + ')',
                p = i.length,
                v = t.svgNS;
                if (y(f), /^svg$/i.test(f.nodeName)) {
                  var S = f.ownerDocument.createElementNS(v, 'g');
                  for (a = 0, h = (l = f.attributes).length; a < h; a++) s = l.item(a),
                  S.setAttributeNS(v, s.nodeName, s.nodeValue);
                  for (; f.firstChild; ) S.appendChild(f.firstChild);
                  f = S
                }
                for (a = 0, h = (l = n.attributes).length; a < h; a++) 'x' !== (s = l.item(a)).nodeName && 'y' !== s.nodeName && 'xlink:href' !== s.nodeName && 'href' !== s.nodeName && ('transform' === s.nodeName ? _ = s.nodeValue + ' ' + _ : f.setAttribute(s.nodeName, s.nodeValue));
                f.setAttribute('transform', _),
                f.setAttribute('instantiated_by_use', '1'),
                f.removeAttribute('id'),
                n.parentNode.replaceChild(f, n),
                i.length === p && r++
              }
            }(e);
            var s,
            a,
            l = t.Object.__uid++,
            h = y(e),
            c = t.util.toArray(e.getElementsByTagName('*'));
            if (h.crossOrigin = o && o.crossOrigin, h.svgUid = l, 0 === c.length && t.isLikelyNode) {
              var u = [
              ];
              for (s = 0, a = (c = e.selectNodes('//*[name(.)!="svg"]')).length; s < a; s++) u[s] = c[s];
              c = u
            }
            var d = c.filter((function (e) {
              return y(e),
              t.svgValidTagNamesRegEx.test(e.nodeName.replace('svg:', '')) && !function (e, t) {
                for (; e && (e = e.parentNode); ) if (e.nodeName && t.test(e.nodeName.replace('svg:', '')) && !e.getAttribute('instantiated_by_use')) return !0;
                return !1
              }(e, t.svgInvalidAncestorsRegEx)
            }));
            if (!d || d && !d.length) i && i([], {
            });
             else {
              var f = {
              };
              c.filter((function (e) {
                return 'clipPath' === e.nodeName.replace('svg:', '')
              })).forEach((function (e) {
                var i = e.getAttribute('id');
                f[i] = t.util.toArray(e.getElementsByTagName('*')).filter((function (e) {
                  return t.svgValidTagNamesRegEx.test(e.nodeName.replace('svg:', ''))
                }))
              })),
              t.gradientDefs[l] = t.getGradientDefs(e),
              t.cssRules[l] = t.getCSSRules(e),
              t.clipPaths[l] = f,
              t.parseElements(d, (function (e, r) {
                i && (i(e, h, r, c), delete t.gradientDefs[l], delete t.cssRules[l], delete t.clipPaths[l])
              }), r(h), n, o)
            }
          }
        };
        var b = new RegExp('(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(' + t.reNum + '(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|' + t.reNum + '))?\\s+(.*)');
        i(t, {
          parseFontDeclaration: function (e, t) {
            var i = e.match(b);
            if (i) {
              var r = i[1],
              n = i[3],
              s = i[4],
              a = i[5],
              l = i[6];
              r && (t.fontStyle = r),
              n && (t.fontWeight = isNaN(parseFloat(n)) ? n : parseFloat(n)),
              s && (t.fontSize = o(s)),
              l && (t.fontFamily = l),
              a && (t.lineHeight = 'normal' === a ? 1 : a)
            }
          },
          getGradientDefs: function (e) {
            var t,
            i = g(e, [
              'linearGradient',
              'radialGradient',
              'svg:linearGradient',
              'svg:radialGradient'
            ]),
            r = 0,
            n = {
            };
            for (r = i.length; r--; ) (t = i[r]).getAttribute('xlink:href') && S(e, t),
            n[t.getAttribute('id')] = t;
            return n
          },
          parseAttributes: function (e, r, s) {
            if (e) {
              var a,
              f,
              g,
              p = {
              };
              void 0 === s && (s = e.getAttribute('svgUid')),
              e.parentNode && t.svgValidParentsRegEx.test(e.parentNode.nodeName) && (p = t.parseAttributes(e.parentNode, r, s));
              var m = r.reduce((function (t, i) {
                return (a = e.getAttribute(i)) && (t[i] = a),
                t
              }), {
              }),
              v = i(function (e, i) {
                var r = {
                };
                for (var n in t.cssRules[i]) if (_(e, n.split(' '))) for (var o in t.cssRules[i][n]) r[o] = t.cssRules[i][n][o];
                return r
              }(e, s), t.parseStyleAttribute(e));
              m = i(m, v),
              v[c] && e.setAttribute(c, v[c]),
              f = g = p.fontSize || t.Text.DEFAULT_SVG_FONT_SIZE,
              m[h] && (m[h] = f = o(m[h], g));
              var y,
              S,
              b = {
              };
              for (var C in m) S = d(y = u(C), m[C], p, f),
              b[y] = S;
              b && b.font && t.parseFontDeclaration(b.font, b);
              var w = i(p, b);
              return t.svgValidParentsRegEx.test(e.nodeName) ? w : function (e) {
                for (var i in l) if (void 0 !== e[l[i]] && '' !== e[i]) {
                  if (void 0 === e[i]) {
                    if (!t.Object.prototype[i]) continue;
                    e[i] = t.Object.prototype[i]
                  }
                  if (0 !== e[i].indexOf('url(')) {
                    var r = new t.Color(e[i]);
                    e[i] = r.setAlpha(n(r.getAlpha() * e[l[i]], 2)).toRgba()
                  }
                }
                return e
              }(w)
            }
          },
          parseElements: function (e, i, r, n, o) {
            new t.ElementsParser(e, i, r, n, o).parse()
          },
          parseStyleAttribute: function (e) {
            var t = {
            },
            i = e.getAttribute('style');
            return i ? ('string' == typeof i ? function (e, t) {
              var i,
              r;
              e.replace(/;\s*$/, '').split(';').forEach((function (e) {
                var n = e.split(':');
                i = n[0].trim().toLowerCase(),
                r = n[1].trim(),
                t[i] = r
              }))
            }(i, t) : function (e, t) {
              var i,
              r;
              for (var n in e) void 0 !== e[n] && (i = n.toLowerCase(), r = e[n], t[i] = r)
            }(i, t), t) : t
          },
          parsePointsAttribute: function (e) {
            if (!e) return null;
            var t,
            i,
            r = [
            ];
            for (t = 0, i = (e = (e = e.replace(/,/g, ' ').trim()).split(/\s+/)).length; t < i; t += 2) r.push({
              x: parseFloat(e[t]),
              y: parseFloat(e[t + 1])
            });
            return r
          },
          getCSSRules: function (e) {
            var i,
            r,
            n = e.getElementsByTagName('style'),
            o = {
            };
            for (i = 0, r = n.length; i < r; i++) {
              var s = n[i].textContent;
              '' !== (s = s.replace(/\/\*[\s\S]*?\*\//g, '')).trim() && s.split('}').filter((function (e) {
                return e.trim()
              })).forEach((function (e) {
                var n = e.split('{'),
                s = {
                },
                a = n[1].trim().split(';').filter((function (e) {
                  return e.trim()
                }));
                for (i = 0, r = a.length; i < r; i++) {
                  var l = a[i].split(':'),
                  h = l[0].trim(),
                  c = l[1].trim();
                  s[h] = c
                }(e = n[0].trim()).split(',').forEach((function (e) {
                  '' !== (e = e.replace(/^svg/i, '').trim()) && (o[e] ? t.util.object.extend(o[e], s) : o[e] = t.util.object.clone(s))
                }))
              }))
            }
            return o
          },
          loadSVGFromURL: function (e, i, r, n) {
            e = e.replace(/^\n\s*/, '').trim(),
            new t.util.request(e, {
              method: 'get',
              onComplete: function (e) {
                var o = e.responseXML;
                if (!o || !o.documentElement) return i && i(null),
                !1;
                t.parseSVGDocument(o.documentElement, (function (e, t, r, n) {
                  i && i(e, t, r, n)
                }), r, n)
              }
            })
          },
          loadSVGFromString: function (e, i, r, n) {
            var o = (new t.window.DOMParser).parseFromString(e.trim(), 'text/xml');
            t.parseSVGDocument(o.documentElement, (function (e, t, r, n) {
              i(e, t, r, n)
            }), r, n)
          }
        })
      }(t),
      T.ElementsParser = function (e, t, i, r, n, o) {
        this.elements = e,
        this.callback = t,
        this.options = i,
        this.reviver = r,
        this.svgUid = i && i.svgUid || 0,
        this.parsingOptions = n,
        this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g,
        this.doc = o
      },
      (p = T.ElementsParser.prototype).parse = function () {
        this.instances = new Array(this.elements.length),
        this.numElements = this.elements.length,
        this.createObjects()
      },
      p.createObjects = function () {
        var e = this;
        this.elements.forEach((function (t, i) {
          t.setAttribute('svgUid', e.svgUid),
          e.createObject(t, i)
        }))
      },
      p.findTag = function (e) {
        return T[T.util.string.capitalize(e.tagName.replace('svg:', ''))]
      },
      p.createObject = function (e, t) {
        var i = this.findTag(e);
        if (i && i.fromElement) try {
          i.fromElement(e, this.createCallback(t, e), this.options)
        } catch (e) {
          T.log(e)
        } else this.checkIfDone()
      },
      p.createCallback = function (e, t) {
        var i = this;
        return function (r) {
          var n;
          i.resolveGradient(r, t, 'fill'),
          i.resolveGradient(r, t, 'stroke'),
          r instanceof T.Image && r._originalElement && (n = r.parsePreserveAspectRatioAttribute(t)),
          r._removeTransformMatrix(n),
          i.resolveClipPath(r, t),
          i.reviver && i.reviver(t, r),
          i.instances[e] = r,
          i.checkIfDone()
        }
      },
      p.extractPropertyDefinition = function (e, t, i) {
        var r = e[t],
        n = this.regexUrl;
        if (n.test(r)) {
          n.lastIndex = 0;
          var o = n.exec(r) [1];
          return n.lastIndex = 0,
          T[i][this.svgUid][o]
        }
      },
      p.resolveGradient = function (e, t, i) {
        var r = this.extractPropertyDefinition(e, i, 'gradientDefs');
        if (r) {
          var n = t.getAttribute(i + '-opacity'),
          o = T.Gradient.fromElement(r, e, n, this.options);
          e.set(i, o)
        }
      },
      p.createClipPathCallback = function (e, t) {
        return function (e) {
          e._removeTransformMatrix(),
          e.fillRule = e.clipRule,
          t.push(e)
        }
      },
      p.resolveClipPath = function (e, t) {
        var i,
        r,
        n,
        o,
        s = this.extractPropertyDefinition(e, 'clipPath', 'clipPaths');
        if (s) {
          n = [
          ],
          r = T.util.invertTransform(e.calcTransformMatrix());
          for (var a = s[0].parentNode, l = t; l.parentNode && l.getAttribute('clip-path') !== e.clipPath; ) l = l.parentNode;
          l.parentNode.appendChild(a);
          for (var h = 0; h < s.length; h++) i = s[h],
          this.findTag(i).fromElement(i, this.createClipPathCallback(e, n), this.options);
          s = 1 === n.length ? n[0] : new T.Group(n),
          o = T.util.multiplyTransformMatrices(r, s.calcTransformMatrix()),
          s.clipPath && this.resolveClipPath(s, l);
          var c = T.util.qrDecompose(o);
          s.flipX = !1,
          s.flipY = !1,
          s.set('scaleX', c.scaleX),
          s.set('scaleY', c.scaleY),
          s.angle = c.angle,
          s.skewX = c.skewX,
          s.skewY = 0,
          s.setPositionByOrigin({
            x: c.translateX,
            y: c.translateY
          }, 'center', 'center'),
          e.clipPath = s
        } else delete e.clipPath
      },
      p.checkIfDone = function () {
        0 == --this.numElements && (this.instances = this.instances.filter((function (e) {
          return null != e
        })), this.callback(this.instances, this.elements))
      },
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        function i(e, t) {
          this.x = e,
          this.y = t
        }
        t.Point ? t.warn('fabric.Point is already defined') : (t.Point = i, i.prototype = {
          type: 'point',
          constructor: i,
          add: function (e) {
            return new i(this.x + e.x, this.y + e.y)
          },
          addEquals: function (e) {
            return this.x += e.x,
            this.y += e.y,
            this
          },
          scalarAdd: function (e) {
            return new i(this.x + e, this.y + e)
          },
          scalarAddEquals: function (e) {
            return this.x += e,
            this.y += e,
            this
          },
          subtract: function (e) {
            return new i(this.x - e.x, this.y - e.y)
          },
          subtractEquals: function (e) {
            return this.x -= e.x,
            this.y -= e.y,
            this
          },
          scalarSubtract: function (e) {
            return new i(this.x - e, this.y - e)
          },
          scalarSubtractEquals: function (e) {
            return this.x -= e,
            this.y -= e,
            this
          },
          multiply: function (e) {
            return new i(this.x * e, this.y * e)
          },
          multiplyEquals: function (e) {
            return this.x *= e,
            this.y *= e,
            this
          },
          divide: function (e) {
            return new i(this.x / e, this.y / e)
          },
          divideEquals: function (e) {
            return this.x /= e,
            this.y /= e,
            this
          },
          eq: function (e) {
            return this.x === e.x && this.y === e.y
          },
          lt: function (e) {
            return this.x < e.x && this.y < e.y
          },
          lte: function (e) {
            return this.x <= e.x && this.y <= e.y
          },
          gt: function (e) {
            return this.x > e.x && this.y > e.y
          },
          gte: function (e) {
            return this.x >= e.x && this.y >= e.y
          },
          lerp: function (e, t) {
            return void 0 === t && (t = 0.5),
            t = Math.max(Math.min(1, t), 0),
            new i(this.x + (e.x - this.x) * t, this.y + (e.y - this.y) * t)
          },
          distanceFrom: function (e) {
            var t = this.x - e.x,
            i = this.y - e.y;
            return Math.sqrt(t * t + i * i)
          },
          midPointFrom: function (e) {
            return this.lerp(e)
          },
          min: function (e) {
            return new i(Math.min(this.x, e.x), Math.min(this.y, e.y))
          },
          max: function (e) {
            return new i(Math.max(this.x, e.x), Math.max(this.y, e.y))
          },
          toString: function () {
            return this.x + ',' + this.y
          },
          setXY: function (e, t) {
            return this.x = e,
            this.y = t,
            this
          },
          setX: function (e) {
            return this.x = e,
            this
          },
          setY: function (e) {
            return this.y = e,
            this
          },
          setFromPoint: function (e) {
            return this.x = e.x,
            this.y = e.y,
            this
          },
          swap: function (e) {
            var t = this.x,
            i = this.y;
            this.x = e.x,
            this.y = e.y,
            e.x = t,
            e.y = i
          },
          clone: function () {
            return new i(this.x, this.y)
          }
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        function i(e) {
          this.status = e,
          this.points = [
          ]
        }
        t.Intersection ? t.warn('fabric.Intersection is already defined') : (t.Intersection = i, t.Intersection.prototype = {
          constructor: i,
          appendPoint: function (e) {
            return this.points.push(e),
            this
          },
          appendPoints: function (e) {
            return this.points = this.points.concat(e),
            this
          }
        }, t.Intersection.intersectLineLine = function (e, r, n, o) {
          var s,
          a = (o.x - n.x) * (e.y - n.y) - (o.y - n.y) * (e.x - n.x),
          l = (r.x - e.x) * (e.y - n.y) - (r.y - e.y) * (e.x - n.x),
          h = (o.y - n.y) * (r.x - e.x) - (o.x - n.x) * (r.y - e.y);
          if (0 !== h) {
            var c = a / h,
            u = l / h;
            0 <= c && c <= 1 && 0 <= u && u <= 1 ? (s = new i('Intersection')).appendPoint(new t.Point(e.x + c * (r.x - e.x), e.y + c * (r.y - e.y))) : s = new i
          } else s = new i(0 === a || 0 === l ? 'Coincident' : 'Parallel');
          return s
        }, t.Intersection.intersectLinePolygon = function (e, t, r) {
          var n,
          o,
          s,
          a,
          l = new i,
          h = r.length;
          for (a = 0; a < h; a++) n = r[a],
          o = r[(a + 1) % h],
          s = i.intersectLineLine(e, t, n, o),
          l.appendPoints(s.points);
          return l.points.length > 0 && (l.status = 'Intersection'),
          l
        }, t.Intersection.intersectPolygonPolygon = function (e, t) {
          var r,
          n = new i,
          o = e.length;
          for (r = 0; r < o; r++) {
            var s = e[r],
            a = e[(r + 1) % o],
            l = i.intersectLinePolygon(s, a, t);
            n.appendPoints(l.points)
          }
          return n.points.length > 0 && (n.status = 'Intersection'),
          n
        }, t.Intersection.intersectPolygonRectangle = function (e, r, n) {
          var o = r.min(n),
          s = r.max(n),
          a = new t.Point(s.x, o.y),
          l = new t.Point(o.x, s.y),
          h = i.intersectLinePolygon(o, a, e),
          c = i.intersectLinePolygon(a, s, e),
          u = i.intersectLinePolygon(s, l, e),
          d = i.intersectLinePolygon(l, o, e),
          f = new i;
          return f.appendPoints(h.points),
          f.appendPoints(c.points),
          f.appendPoints(u.points),
          f.appendPoints(d.points),
          f.points.length > 0 && (f.status = 'Intersection'),
          f
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        function i(e) {
          e ? this._tryParsingColor(e) : this.setSource([0,
          0,
          0,
          1])
        }
        function r(e, t, i) {
          return i < 0 && (i += 1),
          i > 1 && (i -= 1),
          i < 1 / 6 ? e + 6 * (t - e) * i : i < 0.5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
        }
        t.Color ? t.warn('fabric.Color is already defined.') : (t.Color = i, t.Color.prototype = {
          _tryParsingColor: function (e) {
            var t;
            e in i.colorNameMap && (e = i.colorNameMap[e]),
            'transparent' === e && (t = [
              255,
              255,
              255,
              0
            ]),
            t || (t = i.sourceFromHex(e)),
            t || (t = i.sourceFromRgb(e)),
            t || (t = i.sourceFromHsl(e)),
            t || (t = [
              0,
              0,
              0,
              1
            ]),
            t && this.setSource(t)
          },
          _rgbToHsl: function (e, i, r) {
            e /= 255,
            i /= 255,
            r /= 255;
            var n,
            o,
            s,
            a = t.util.array.max([e,
            i,
            r]),
            l = t.util.array.min([e,
            i,
            r]);
            if (s = (a + l) / 2, a === l) n = o = 0;
             else {
              var h = a - l;
              switch (o = s > 0.5 ? h / (2 - a - l) : h / (a + l), a) {
                case e:
                  n = (i - r) / h + (i < r ? 6 : 0);
                  break;
                case i:
                  n = (r - e) / h + 2;
                  break;
                case r:
                  n = (e - i) / h + 4
              }
              n /= 6
            }
            return [Math.round(360 * n),
            Math.round(100 * o),
            Math.round(100 * s)]
          },
          getSource: function () {
            return this._source
          },
          setSource: function (e) {
            this._source = e
          },
          toRgb: function () {
            var e = this.getSource();
            return 'rgb(' + e[0] + ',' + e[1] + ',' + e[2] + ')'
          },
          toRgba: function () {
            var e = this.getSource();
            return 'rgba(' + e[0] + ',' + e[1] + ',' + e[2] + ',' + e[3] + ')'
          },
          toHsl: function () {
            var e = this.getSource(),
            t = this._rgbToHsl(e[0], e[1], e[2]);
            return 'hsl(' + t[0] + ',' + t[1] + '%,' + t[2] + '%)'
          },
          toHsla: function () {
            var e = this.getSource(),
            t = this._rgbToHsl(e[0], e[1], e[2]);
            return 'hsla(' + t[0] + ',' + t[1] + '%,' + t[2] + '%,' + e[3] + ')'
          },
          toHex: function () {
            var e,
            t,
            i,
            r = this.getSource();
            return e = 1 === (e = r[0].toString(16)).length ? '0' + e : e,
            t = 1 === (t = r[1].toString(16)).length ? '0' + t : t,
            i = 1 === (i = r[2].toString(16)).length ? '0' + i : i,
            e.toUpperCase() + t.toUpperCase() + i.toUpperCase()
          },
          toHexa: function () {
            var e,
            t = this.getSource();
            return e = 1 === (e = (e = Math.round(255 * t[3])).toString(16)).length ? '0' + e : e,
            this.toHex() + e.toUpperCase()
          },
          getAlpha: function () {
            return this.getSource() [3]
          },
          setAlpha: function (e) {
            var t = this.getSource();
            return t[3] = e,
            this.setSource(t),
            this
          },
          toGrayscale: function () {
            var e = this.getSource(),
            t = parseInt((0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2]).toFixed(0), 10),
            i = e[3];
            return this.setSource([t,
            t,
            t,
            i]),
            this
          },
          toBlackWhite: function (e) {
            var t = this.getSource(),
            i = (0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]).toFixed(0),
            r = t[3];
            return e = e || 127,
            i = Number(i) < Number(e) ? 0 : 255,
            this.setSource([i,
            i,
            i,
            r]),
            this
          },
          overlayWith: function (e) {
            e instanceof i || (e = new i(e));
            var t,
            r = [
            ],
            n = this.getAlpha(),
            o = this.getSource(),
            s = e.getSource();
            for (t = 0; t < 3; t++) r.push(Math.round(0.5 * o[t] + 0.5 * s[t]));
            return r[3] = n,
            this.setSource(r),
            this
          }
        }, t.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, t.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, t.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, t.Color.colorNameMap = {
          aliceblue: '#F0F8FF',
          antiquewhite: '#FAEBD7',
          aqua: '#00FFFF',
          aquamarine: '#7FFFD4',
          azure: '#F0FFFF',
          beige: '#F5F5DC',
          bisque: '#FFE4C4',
          black: '#000000',
          blanchedalmond: '#FFEBCD',
          blue: '#0000FF',
          blueviolet: '#8A2BE2',
          brown: '#A52A2A',
          burlywood: '#DEB887',
          cadetblue: '#5F9EA0',
          chartreuse: '#7FFF00',
          chocolate: '#D2691E',
          coral: '#FF7F50',
          cornflowerblue: '#6495ED',
          cornsilk: '#FFF8DC',
          crimson: '#DC143C',
          cyan: '#00FFFF',
          darkblue: '#00008B',
          darkcyan: '#008B8B',
          darkgoldenrod: '#B8860B',
          darkgray: '#A9A9A9',
          darkgrey: '#A9A9A9',
          darkgreen: '#006400',
          darkkhaki: '#BDB76B',
          darkmagenta: '#8B008B',
          darkolivegreen: '#556B2F',
          darkorange: '#FF8C00',
          darkorchid: '#9932CC',
          darkred: '#8B0000',
          darksalmon: '#E9967A',
          darkseagreen: '#8FBC8F',
          darkslateblue: '#483D8B',
          darkslategray: '#2F4F4F',
          darkslategrey: '#2F4F4F',
          darkturquoise: '#00CED1',
          darkviolet: '#9400D3',
          deeppink: '#FF1493',
          deepskyblue: '#00BFFF',
          dimgray: '#696969',
          dimgrey: '#696969',
          dodgerblue: '#1E90FF',
          firebrick: '#B22222',
          floralwhite: '#FFFAF0',
          forestgreen: '#228B22',
          fuchsia: '#FF00FF',
          gainsboro: '#DCDCDC',
          ghostwhite: '#F8F8FF',
          gold: '#FFD700',
          goldenrod: '#DAA520',
          gray: '#808080',
          grey: '#808080',
          green: '#008000',
          greenyellow: '#ADFF2F',
          honeydew: '#F0FFF0',
          hotpink: '#FF69B4',
          indianred: '#CD5C5C',
          indigo: '#4B0082',
          ivory: '#FFFFF0',
          khaki: '#F0E68C',
          lavender: '#E6E6FA',
          lavenderblush: '#FFF0F5',
          lawngreen: '#7CFC00',
          lemonchiffon: '#FFFACD',
          lightblue: '#ADD8E6',
          lightcoral: '#F08080',
          lightcyan: '#E0FFFF',
          lightgoldenrodyellow: '#FAFAD2',
          lightgray: '#D3D3D3',
          lightgrey: '#D3D3D3',
          lightgreen: '#90EE90',
          lightpink: '#FFB6C1',
          lightsalmon: '#FFA07A',
          lightseagreen: '#20B2AA',
          lightskyblue: '#87CEFA',
          lightslategray: '#778899',
          lightslategrey: '#778899',
          lightsteelblue: '#B0C4DE',
          lightyellow: '#FFFFE0',
          lime: '#00FF00',
          limegreen: '#32CD32',
          linen: '#FAF0E6',
          magenta: '#FF00FF',
          maroon: '#800000',
          mediumaquamarine: '#66CDAA',
          mediumblue: '#0000CD',
          mediumorchid: '#BA55D3',
          mediumpurple: '#9370DB',
          mediumseagreen: '#3CB371',
          mediumslateblue: '#7B68EE',
          mediumspringgreen: '#00FA9A',
          mediumturquoise: '#48D1CC',
          mediumvioletred: '#C71585',
          midnightblue: '#191970',
          mintcream: '#F5FFFA',
          mistyrose: '#FFE4E1',
          moccasin: '#FFE4B5',
          navajowhite: '#FFDEAD',
          navy: '#000080',
          oldlace: '#FDF5E6',
          olive: '#808000',
          olivedrab: '#6B8E23',
          orange: '#FFA500',
          orangered: '#FF4500',
          orchid: '#DA70D6',
          palegoldenrod: '#EEE8AA',
          palegreen: '#98FB98',
          paleturquoise: '#AFEEEE',
          palevioletred: '#DB7093',
          papayawhip: '#FFEFD5',
          peachpuff: '#FFDAB9',
          peru: '#CD853F',
          pink: '#FFC0CB',
          plum: '#DDA0DD',
          powderblue: '#B0E0E6',
          purple: '#800080',
          rebeccapurple: '#663399',
          red: '#FF0000',
          rosybrown: '#BC8F8F',
          royalblue: '#4169E1',
          saddlebrown: '#8B4513',
          salmon: '#FA8072',
          sandybrown: '#F4A460',
          seagreen: '#2E8B57',
          seashell: '#FFF5EE',
          sienna: '#A0522D',
          silver: '#C0C0C0',
          skyblue: '#87CEEB',
          slateblue: '#6A5ACD',
          slategray: '#708090',
          slategrey: '#708090',
          snow: '#FFFAFA',
          springgreen: '#00FF7F',
          steelblue: '#4682B4',
          tan: '#D2B48C',
          teal: '#008080',
          thistle: '#D8BFD8',
          tomato: '#FF6347',
          turquoise: '#40E0D0',
          violet: '#EE82EE',
          wheat: '#F5DEB3',
          white: '#FFFFFF',
          whitesmoke: '#F5F5F5',
          yellow: '#FFFF00',
          yellowgreen: '#9ACD32'
        }, t.Color.fromRgb = function (e) {
          return i.fromSource(i.sourceFromRgb(e))
        }, t.Color.sourceFromRgb = function (e) {
          var t = e.match(i.reRGBa);
          if (t) {
            var r = parseInt(t[1], 10) / (/%$/.test(t[1]) ? 100 : 1) * (/%$/.test(t[1]) ? 255 : 1),
            n = parseInt(t[2], 10) / (/%$/.test(t[2]) ? 100 : 1) * (/%$/.test(t[2]) ? 255 : 1),
            o = parseInt(t[3], 10) / (/%$/.test(t[3]) ? 100 : 1) * (/%$/.test(t[3]) ? 255 : 1);
            return [parseInt(r, 10),
            parseInt(n, 10),
            parseInt(o, 10),
            t[4] ? parseFloat(t[4]) : 1]
          }
        }, t.Color.fromRgba = i.fromRgb, t.Color.fromHsl = function (e) {
          return i.fromSource(i.sourceFromHsl(e))
        }, t.Color.sourceFromHsl = function (e) {
          var t = e.match(i.reHSLa);
          if (t) {
            var n,
            o,
            s,
            a = (parseFloat(t[1]) % 360 + 360) % 360 / 360,
            l = parseFloat(t[2]) / (/%$/.test(t[2]) ? 100 : 1),
            h = parseFloat(t[3]) / (/%$/.test(t[3]) ? 100 : 1);
            if (0 === l) n = o = s = h;
             else {
              var c = h <= 0.5 ? h * (l + 1) : h + l - h * l,
              u = 2 * h - c;
              n = r(u, c, a + 1 / 3),
              o = r(u, c, a),
              s = r(u, c, a - 1 / 3)
            }
            return [Math.round(255 * n),
            Math.round(255 * o),
            Math.round(255 * s),
            t[4] ? parseFloat(t[4]) : 1]
          }
        }, t.Color.fromHsla = i.fromHsl, t.Color.fromHex = function (e) {
          return i.fromSource(i.sourceFromHex(e))
        }, t.Color.sourceFromHex = function (e) {
          if (e.match(i.reHex)) {
            var t = e.slice(e.indexOf('#') + 1),
            r = 3 === t.length || 4 === t.length,
            n = 8 === t.length || 4 === t.length,
            o = r ? t.charAt(0) + t.charAt(0) : t.substring(0, 2),
            s = r ? t.charAt(1) + t.charAt(1) : t.substring(2, 4),
            a = r ? t.charAt(2) + t.charAt(2) : t.substring(4, 6),
            l = n ? r ? t.charAt(3) + t.charAt(3) : t.substring(6, 8) : 'FF';
            return [parseInt(o, 16),
            parseInt(s, 16),
            parseInt(a, 16),
            parseFloat((parseInt(l, 16) / 255).toFixed(2))]
          }
        }, t.Color.fromSource = function (e) {
          var t = new i;
          return t.setSource(e),
          t
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = [
          'e',
          'se',
          's',
          'sw',
          'w',
          'nw',
          'n',
          'ne',
          'e'
        ],
        r = [
          'ns',
          'nesw',
          'ew',
          'nwse'
        ],
        n = {
        },
        o = 'left',
        s = 'top',
        a = 'right',
        l = 'bottom',
        h = 'center',
        c = {
          top: l,
          bottom: s,
          left: a,
          right: o,
          center: h
        },
        u = t.util.radiansToDegrees,
        d = Math.sign || function (e) {
          return (e > 0) - (e < 0) || + e
        };
        function f(e, t) {
          var i = e.angle + u(Math.atan2(t.y, t.x)) + 360;
          return Math.round(i % 360 / 45)
        }
        function g(e, i) {
          var r = i.transform.target,
          n = r.canvas,
          o = t.util.object.clone(i);
          o.target = r,
          n && n.fire('object:' + e, o),
          r.fire(e, i)
        }
        function _(e, t) {
          var i = t.canvas,
          r = e[i.uniScaleKey];
          return i.uniformScaling && !r || !i.uniformScaling && r
        }
        function p(e) {
          return e.originX === h && e.originY === h
        }
        function m(e, t, i) {
          var r = e.lockScalingX,
          n = e.lockScalingY;
          return !((!r || !n) && (t || !r && !n || !i) && (!r || 'x' !== t) && (!n || 'y' !== t))
        }
        function v(e, t, i, r) {
          return {
            e,
            transform: t,
            pointer: {
              x: i,
              y: r
            }
          }
        }
        function y(e) {
          return function (t, i, r, n) {
            var o = i.target,
            s = o.getCenterPoint(),
            a = o.translateToOriginPoint(s, i.originX, i.originY),
            l = e(t, i, r, n);
            return o.setPositionByOrigin(a, i.originX, i.originY),
            l
          }
        }
        function S(e, t) {
          return function (i, r, n, o) {
            var s = t(i, r, n, o);
            return s && g(e, v(i, r, n, o)),
            s
          }
        }
        function b(e, i, r, n, o) {
          var s = e.target,
          a = s.controls[e.corner],
          l = s.canvas.getZoom(),
          h = s.padding / l,
          c = s.toLocalPoint(new t.Point(n, o), i, r);
          return c.x >= h && (c.x -= h),
          c.x <= - h && (c.x += h),
          c.y >= h && (c.y -= h),
          c.y <= h && (c.y += h),
          c.x -= a.offsetX,
          c.y -= a.offsetY,
          c
        }
        function C(e) {
          return e.flipX !== e.flipY
        }
        function w(e, t, i, r, n) {
          if (0 !== e[t]) {
            var o = n / e._getTransformedDimensions() [r] * e[i];
            e.set(i, o)
          }
        }
        function T(e, t, i, r) {
          var n,
          h = t.target,
          c = h._getTransformedDimensions(0, h.skewY),
          d = b(t, t.originX, t.originY, i, r),
          f = Math.abs(2 * d.x) - c.x,
          g = h.skewX;
          f < 2 ? n = 0 : (n = u(Math.atan2(f / h.scaleX, c.y / h.scaleY)), t.originX === o && t.originY === l && (n = - n), t.originX === a && t.originY === s && (n = - n), C(h) && (n = - n));
          var _ = g !== n;
          if (_) {
            var p = h._getTransformedDimensions().y;
            h.set('skewX', n),
            w(h, 'skewY', 'scaleY', 'y', p)
          }
          return _
        }
        function x(e, t, i, r) {
          var n,
          h = t.target,
          c = h._getTransformedDimensions(h.skewX, 0),
          d = b(t, t.originX, t.originY, i, r),
          f = Math.abs(2 * d.y) - c.y,
          g = h.skewY;
          f < 2 ? n = 0 : (n = u(Math.atan2(f / h.scaleY, c.x / h.scaleX)), t.originX === o && t.originY === l && (n = - n), t.originX === a && t.originY === s && (n = - n), C(h) && (n = - n));
          var _ = g !== n;
          if (_) {
            var p = h._getTransformedDimensions().x;
            h.set('skewY', n),
            w(h, 'skewX', 'scaleX', 'x', p)
          }
          return _
        }
        function E(e, t, i, r, n) {
          n = n || {
          };
          var o,
          s,
          a,
          l,
          h,
          u,
          f = t.target,
          g = f.lockScalingX,
          v = f.lockScalingY,
          y = n.by,
          S = _(e, f),
          C = m(f, y, S),
          w = t.gestureScale;
          if (C) return !1;
          if (w) s = t.scaleX * w,
          a = t.scaleY * w;
           else {
            if (o = b(t, t.originX, t.originY, i, r), h = 'y' !== y ? d(o.x) : 1, u = 'x' !== y ? d(o.y) : 1, t.signX || (t.signX = h), t.signY || (t.signY = u), f.lockScalingFlip && (t.signX !== h || t.signY !== u)) return !1;
            if (l = f._getTransformedDimensions(), S && !y) {
              var T = Math.abs(o.x) + Math.abs(o.y),
              x = t.original,
              E = T / (Math.abs(l.x * x.scaleX / f.scaleX) + Math.abs(l.y * x.scaleY / f.scaleY));
              s = x.scaleX * E,
              a = x.scaleY * E
            } else s = Math.abs(o.x * f.scaleX / l.x),
            a = Math.abs(o.y * f.scaleY / l.y);
            p(t) && (s *= 2, a *= 2),
            t.signX !== h && 'y' !== y && (t.originX = c[t.originX], s *= - 1, t.signX = h),
            t.signY !== u && 'x' !== y && (t.originY = c[t.originY], a *= - 1, t.signY = u)
          }
          var A = f.scaleX,
          I = f.scaleY;
          return y ? ('x' === y && f.set('scaleX', s), 'y' === y && f.set('scaleY', a)) : (!g && f.set('scaleX', s), !v && f.set('scaleY', a)),
          A !== f.scaleX || I !== f.scaleY
        }
        n.scaleCursorStyleHandler = function (e, t, r) {
          var n = _(e, r),
          o = '';
          if (0 !== t.x && 0 === t.y ? o = 'x' : 0 === t.x && 0 !== t.y && (o = 'y'), m(r, o, n)) return 'not-allowed';
          var s = f(r, t);
          return i[s] + '-resize'
        },
        n.skewCursorStyleHandler = function (e, t, i) {
          var n = 'not-allowed';
          if (0 !== t.x && i.lockSkewingY) return n;
          if (0 !== t.y && i.lockSkewingX) return n;
          var o = f(i, t) % 4;
          return r[o] + '-resize'
        },
        n.scaleSkewCursorStyleHandler = function (e, t, i) {
          return e[i.canvas.altActionKey] ? n.skewCursorStyleHandler(e, t, i) : n.scaleCursorStyleHandler(e, t, i)
        },
        n.rotationWithSnapping = S('rotating', y((function (e, t, i, r) {
          var n = t,
          o = n.target,
          s = o.translateToOriginPoint(o.getCenterPoint(), n.originX, n.originY);
          if (o.lockRotation) return !1;
          var a,
          l = Math.atan2(n.ey - s.y, n.ex - s.x),
          h = Math.atan2(r - s.y, i - s.x),
          c = u(h - l + n.theta);
          if (o.snapAngle > 0) {
            var d = o.snapAngle,
            f = o.snapThreshold || d,
            g = Math.ceil(c / d) * d,
            _ = Math.floor(c / d) * d;
            Math.abs(c - _) < f ? c = _ : Math.abs(c - g) < f && (c = g)
          }
          return c < 0 && (c = 360 + c),
          c %= 360,
          a = o.angle !== c,
          o.angle = c,
          a
        }))),
        n.scalingEqually = S('scaling', y((function (e, t, i, r) {
          return E(e, t, i, r)
        }))),
        n.scalingX = S('scaling', y((function (e, t, i, r) {
          return E(e, t, i, r, {
            by: 'x'
          })
        }))),
        n.scalingY = S('scaling', y((function (e, t, i, r) {
          return E(e, t, i, r, {
            by: 'y'
          })
        }))),
        n.scalingYOrSkewingX = function (e, t, i, r) {
          return e[t.target.canvas.altActionKey] ? n.skewHandlerX(e, t, i, r) : n.scalingY(e, t, i, r)
        },
        n.scalingXOrSkewingY = function (e, t, i, r) {
          return e[t.target.canvas.altActionKey] ? n.skewHandlerY(e, t, i, r) : n.scalingX(e, t, i, r)
        },
        n.changeWidth = S('resizing', y((function (e, t, i, r) {
          var n = t.target,
          o = b(t, t.originX, t.originY, i, r),
          s = n.strokeWidth / (n.strokeUniform ? n.scaleX : 1),
          a = p(t) ? 2 : 1,
          l = n.width,
          h = Math.abs(o.x * a / n.scaleX) - s;
          return n.set('width', Math.max(h, 0)),
          l !== h
        }))),
        n.skewHandlerX = function (e, t, i, r) {
          var n,
          l = t.target,
          c = l.skewX,
          u = t.originY;
          return !l.lockSkewingX && (0 === c ? n = b(t, h, h, i, r).x > 0 ? o : a : (c > 0 && (n = u === s ? o : a), c < 0 && (n = u === s ? a : o), C(l) && (n = n === o ? a : o)), t.originX = n, S('skewing', y(T)) (e, t, i, r))
        },
        n.skewHandlerY = function (e, t, i, r) {
          var n,
          a = t.target,
          c = a.skewY,
          u = t.originX;
          return !a.lockSkewingY && (0 === c ? n = b(t, h, h, i, r).y > 0 ? s : l : (c > 0 && (n = u === o ? s : l), c < 0 && (n = u === o ? l : s), C(a) && (n = n === s ? l : s)), t.originY = n, S('skewing', y(x)) (e, t, i, r))
        },
        n.dragHandler = function (e, t, i, r) {
          var n = t.target,
          o = i - t.offsetX,
          s = r - t.offsetY,
          a = !n.get('lockMovementX') && n.left !== o,
          l = !n.get('lockMovementY') && n.top !== s;
          return a && n.set('left', o),
          l && n.set('top', s),
          (a || l) && g('moving', v(e, t, i, r)),
          a || l
        },
        n.scaleOrSkewActionName = function (e, t, i) {
          var r = e[i.canvas.altActionKey];
          return 0 === t.x ? r ? 'skewX' : 'scaleY' : 0 === t.y ? r ? 'skewY' : 'scaleX' : void 0
        },
        n.rotationStyleHandler = function (e, t, i) {
          return i.lockRotation ? 'not-allowed' : t.cursorStyle
        },
        n.fireEvent = g,
        n.wrapWithFixedAnchor = y,
        n.wrapWithFireEvent = S,
        n.getLocalPoint = b,
        t.controlsUtils = n
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.degreesToRadians,
        r = t.controlsUtils;
        r.renderCircleControl = function (e, t, i, r, n) {
          r = r || {
          };
          var o,
          s = this.sizeX || r.cornerSize || n.cornerSize,
          a = this.sizeY || r.cornerSize || n.cornerSize,
          l = void 0 !== r.transparentCorners ? r.transparentCorners : n.transparentCorners,
          h = l ? 'stroke' : 'fill',
          c = !l && (r.cornerStrokeColor || n.cornerStrokeColor),
          u = t,
          d = i;
          e.save(),
          e.fillStyle = r.cornerColor || n.cornerColor,
          e.strokeStyle = r.cornerStrokeColor || n.cornerStrokeColor,
          s > a ? (o = s, e.scale(1, a / s), d = i * s / a) : a > s ? (o = a, e.scale(s / a, 1), u = t * a / s) : o = s,
          e.lineWidth = 1,
          e.beginPath(),
          e.arc(u, d, o / 2, 0, 2 * Math.PI, !1),
          e[h](),
          c && e.stroke(),
          e.restore()
        },
        r.renderSquareControl = function (e, t, r, n, o) {
          n = n || {
          };
          var s = this.sizeX || n.cornerSize || o.cornerSize,
          a = this.sizeY || n.cornerSize || o.cornerSize,
          l = void 0 !== n.transparentCorners ? n.transparentCorners : o.transparentCorners,
          h = l ? 'stroke' : 'fill',
          c = !l && (n.cornerStrokeColor || o.cornerStrokeColor),
          u = s / 2,
          d = a / 2;
          e.save(),
          e.fillStyle = n.cornerColor || o.cornerColor,
          e.strokeStyle = n.cornerStrokeColor || o.cornerStrokeColor,
          e.lineWidth = 1,
          e.translate(t, r),
          e.rotate(i(o.angle)),
          e[h + 'Rect']( - u, - d, s, a),
          c && e.strokeRect( - u, - d, s, a),
          e.restore()
        }
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        t.Control = function (e) {
          for (var t in e) this[t] = e[t]
        },
        t.Control.prototype = {
          visible: !0,
          actionName: 'scale',
          angle: 0,
          x: 0,
          y: 0,
          offsetX: 0,
          offsetY: 0,
          sizeX: null,
          sizeY: null,
          touchSizeX: null,
          touchSizeY: null,
          cursorStyle: 'crosshair',
          withConnection: !1,
          actionHandler: function () {
          },
          mouseDownHandler: function () {
          },
          mouseUpHandler: function () {
          },
          getActionHandler: function () {
            return this.actionHandler
          },
          getMouseDownHandler: function () {
            return this.mouseDownHandler
          },
          getMouseUpHandler: function () {
            return this.mouseUpHandler
          },
          cursorStyleHandler: function (e, t) {
            return t.cursorStyle
          },
          getActionName: function (e, t) {
            return t.actionName
          },
          getVisibility: function (e, t) {
            var i = e._controlsVisibility;
            return i && void 0 !== i[t] ? i[t] : this.visible
          },
          setVisibility: function (e) {
            this.visible = e
          },
          positionHandler: function (e, i) {
            return t.util.transformPoint({
              x: this.x * e.x + this.offsetX,
              y: this.y * e.y + this.offsetY
            }, i)
          },
          calcCornerCoords: function (e, i, r, n, o) {
            var s,
            a,
            l,
            h,
            c = o ? this.touchSizeX : this.sizeX,
            u = o ? this.touchSizeY : this.sizeY;
            if (c && u && c !== u) {
              var d = Math.atan2(u, c),
              f = Math.sqrt(c * c + u * u) / 2,
              g = d - t.util.degreesToRadians(e),
              _ = Math.PI / 2 - d - t.util.degreesToRadians(e);
              s = f * t.util.cos(g),
              a = f * t.util.sin(g),
              l = f * t.util.cos(_),
              h = f * t.util.sin(_)
            } else f = 0.7071067812 * (c && u ? c : i),
            g = t.util.degreesToRadians(45 - e),
            s = l = f * t.util.cos(g),
            a = h = f * t.util.sin(g);
            return {
              tl: {
                x: r - h,
                y: n - l
              },
              tr: {
                x: r + s,
                y: n - a
              },
              bl: {
                x: r - s,
                y: n + a
              },
              br: {
                x: r + h,
                y: n + l
              }
            }
          },
          render: function (e, i, r, n, o) {
            'circle' === ((n = n || {
            }).cornerStyle || o.cornerStyle) ? t.controlsUtils.renderCircleControl.call(this, e, i, r, n, o) : t.controlsUtils.renderSquareControl.call(this, e, i, r, n, o)
          }
        }
      }(t),
      function () {
        function e(e, t) {
          var i,
          r,
          n,
          o,
          s = e.getAttribute('style'),
          a = e.getAttribute('offset') || 0;
          if (a = (a = parseFloat(a) / (/%$/.test(a) ? 100 : 1)) < 0 ? 0 : a > 1 ? 1 : a, s) {
            var l = s.split(/\s*;\s*/);
            for ('' === l[l.length - 1] && l.pop(), o = l.length; o--; ) {
              var h = l[o].split(/\s*:\s*/),
              c = h[0].trim(),
              u = h[1].trim();
              'stop-color' === c ? i = u : 'stop-opacity' === c && (n = u)
            }
          }
          return i || (i = e.getAttribute('stop-color') || 'rgb(0,0,0)'),
          n || (n = e.getAttribute('stop-opacity')),
          r = (i = new T.Color(i)).getAlpha(),
          n = isNaN(parseFloat(n)) ? 1 : parseFloat(n),
          n *= r * t,
          {
            offset: a,
            color: i.toRgb(),
            opacity: n
          }
        }
        var t = T.util.object.clone;
        T.Gradient = T.util.createClass({
          offsetX: 0,
          offsetY: 0,
          gradientTransform: null,
          gradientUnits: 'pixels',
          type: 'linear',
          initialize: function (e) {
            e || (e = {
            }),
            e.coords || (e.coords = {
            });
            var t,
            i = this;
            Object.keys(e).forEach((function (t) {
              i[t] = e[t]
            })),
            this.id ? this.id += '_' + T.Object.__uid++ : this.id = T.Object.__uid++,
            t = {
              x1: e.coords.x1 || 0,
              y1: e.coords.y1 || 0,
              x2: e.coords.x2 || 0,
              y2: e.coords.y2 || 0
            },
            'radial' === this.type && (t.r1 = e.coords.r1 || 0, t.r2 = e.coords.r2 || 0),
            this.coords = t,
            this.colorStops = e.colorStops.slice()
          },
          addColorStop: function (e) {
            for (var t in e) {
              var i = new T.Color(e[t]);
              this.colorStops.push({
                offset: parseFloat(t),
                color: i.toRgb(),
                opacity: i.getAlpha()
              })
            }
            return this
          },
          toObject: function (e) {
            var t = {
              type: this.type,
              coords: this.coords,
              colorStops: this.colorStops,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              gradientUnits: this.gradientUnits,
              gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
            };
            return T.util.populateWithProperties(this, t, e),
            t
          },
          toSVG: function (e, i) {
            var r,
            n,
            o,
            s,
            a = t(this.coords, !0),
            l = (i = i || {
            }, t(this.colorStops, !0)),
            h = a.r1 > a.r2,
            c = this.gradientTransform ? this.gradientTransform.concat() : T.iMatrix.concat(),
            u = - this.offsetX,
            d = - this.offsetY,
            f = !!i.additionalTransform,
            g = 'pixels' === this.gradientUnits ? 'userSpaceOnUse' : 'objectBoundingBox';
            if (l.sort((function (e, t) {
              return e.offset - t.offset
            })), 'objectBoundingBox' === g ? (u /= e.width, d /= e.height) : (u += e.width / 2, d += e.height / 2), 'path' === e.type && 'percentage' !== this.gradientUnits && (u -= e.pathOffset.x, d -= e.pathOffset.y), c[4] -= u, c[5] -= d, s = 'id="SVGID_' + this.id + '" gradientUnits="' + g + '"', s += ' gradientTransform="' + (f ? i.additionalTransform + ' ' : '') + T.util.matrixToSVG(c) + '" ', 'linear' === this.type ? o = [
              '<linearGradient ',
              s,
              ' x1="',
              a.x1,
              '" y1="',
              a.y1,
              '" x2="',
              a.x2,
              '" y2="',
              a.y2,
              '">\n'
            ] : 'radial' === this.type && (o = [
              '<radialGradient ',
              s,
              ' cx="',
              h ? a.x1 : a.x2,
              '" cy="',
              h ? a.y1 : a.y2,
              '" r="',
              h ? a.r1 : a.r2,
              '" fx="',
              h ? a.x2 : a.x1,
              '" fy="',
              h ? a.y2 : a.y1,
              '">\n'
            ]), 'radial' === this.type) {
              if (h) for ((l = l.concat()).reverse(), r = 0, n = l.length; r < n; r++) l[r].offset = 1 - l[r].offset;
              var _ = Math.min(a.r1, a.r2);
              if (_ > 0) {
                var p = _ / Math.max(a.r1, a.r2);
                for (r = 0, n = l.length; r < n; r++) l[r].offset += p * (1 - l[r].offset)
              }
            }
            for (r = 0, n = l.length; r < n; r++) {
              var m = l[r];
              o.push('<stop ', 'offset="', 100 * m.offset + '%', '" style="stop-color:', m.color, void 0 !== m.opacity ? ';stop-opacity: ' + m.opacity : ';', '"/>\n')
            }
            return o.push('linear' === this.type ? '</linearGradient>\n' : '</radialGradient>\n'),
            o.join('')
          },
          toLive: function (e) {
            var t,
            i,
            r,
            n = T.util.object.clone(this.coords);
            if (this.type) {
              for ('linear' === this.type ? t = e.createLinearGradient(n.x1, n.y1, n.x2, n.y2) : 'radial' === this.type && (t = e.createRadialGradient(n.x1, n.y1, n.r1, n.x2, n.y2, n.r2)), i = 0, r = this.colorStops.length; i < r; i++) {
                var o = this.colorStops[i].color,
                s = this.colorStops[i].opacity,
                a = this.colorStops[i].offset;
                void 0 !== s && (o = new T.Color(o).setAlpha(s).toRgba()),
                t.addColorStop(a, o)
              }
              return t
            }
          }
        }),
        T.util.object.extend(T.Gradient, {
          fromElement: function (t, i, r, n) {
            var o = parseFloat(r) / (/%$/.test(r) ? 100 : 1);
            o = o < 0 ? 0 : o > 1 ? 1 : o,
            isNaN(o) && (o = 1);
            var s,
            a,
            l,
            h,
            c = t.getElementsByTagName('stop'),
            u = 'userSpaceOnUse' === t.getAttribute('gradientUnits') ? 'pixels' : 'percentage',
            d = t.getAttribute('gradientTransform') || '',
            f = [
            ],
            g = 0,
            _ = 0;
            for ('linearGradient' === t.nodeName || 'LINEARGRADIENT' === t.nodeName ? (s = 'linear', a = function (e) {
              return {
                x1: e.getAttribute('x1') || 0,
                y1: e.getAttribute('y1') || 0,
                x2: e.getAttribute('x2') || '100%',
                y2: e.getAttribute('y2') || 0
              }
            }(t)) : (s = 'radial', a = function (e) {
              return {
                x1: e.getAttribute('fx') || e.getAttribute('cx') || '50%',
                y1: e.getAttribute('fy') || e.getAttribute('cy') || '50%',
                r1: 0,
                x2: e.getAttribute('cx') || '50%',
                y2: e.getAttribute('cy') || '50%',
                r2: e.getAttribute('r') || '50%'
              }
            }(t)), l = c.length; l--; ) f.push(e(c[l], o));
            return h = T.parseTransformAttribute(d),
            function (e, t, i, r) {
              var n,
              o;
              Object.keys(t).forEach((function (e) {
                'Infinity' === (n = t[e]) ? o = 1 : '-Infinity' === n ? o = 0 : (o = parseFloat(t[e], 10), 'string' == typeof n && /^(\d+\.\d+)%|(\d+)%$/.test(n) && (o *= 0.01, 'pixels' === r && ('x1' !== e && 'x2' !== e && 'r2' !== e || (o *= i.viewBoxWidth || i.width), 'y1' !== e && 'y2' !== e || (o *= i.viewBoxHeight || i.height)))),
                t[e] = o
              }))
            }(0, a, n, u),
            'pixels' === u && (g = - i.left, _ = - i.top),
            new T.Gradient({
              id: t.getAttribute('id'),
              type: s,
              coords: a,
              colorStops: f,
              gradientUnits: u,
              gradientTransform: h,
              offsetX: g,
              offsetY: _
            })
          }
        })
      }(),
      m = T.util.toFixed,
      T.Pattern = T.util.createClass({
        repeat: 'repeat',
        offsetX: 0,
        offsetY: 0,
        crossOrigin: '',
        patternTransform: null,
        initialize: function (e, t) {
          if (e || (e = {
          }), this.id = T.Object.__uid++, this.setOptions(e), !e.source || e.source && 'string' != typeof e.source) t && t(this);
           else {
            var i = this;
            this.source = T.util.createImage(),
            T.util.loadImage(e.source, (function (e, r) {
              i.source = e,
              t && t(i, r)
            }), null, this.crossOrigin)
          }
        },
        toObject: function (e) {
          var t,
          i,
          r = T.Object.NUM_FRACTION_DIGITS;
          return 'string' == typeof this.source.src ? t = this.source.src : 'object' == typeof this.source && this.source.toDataURL && (t = this.source.toDataURL()),
          i = {
            type: 'pattern',
            source: t,
            repeat: this.repeat,
            crossOrigin: this.crossOrigin,
            offsetX: m(this.offsetX, r),
            offsetY: m(this.offsetY, r),
            patternTransform: this.patternTransform ? this.patternTransform.concat() : null
          },
          T.util.populateWithProperties(this, i, e),
          i
        },
        toSVG: function (e) {
          var t = 'function' == typeof this.source ? this.source() : this.source,
          i = t.width / e.width,
          r = t.height / e.height,
          n = this.offsetX / e.width,
          o = this.offsetY / e.height,
          s = '';
          return 'repeat-x' !== this.repeat && 'no-repeat' !== this.repeat || (r = 1, o && (r += Math.abs(o))),
          'repeat-y' !== this.repeat && 'no-repeat' !== this.repeat || (i = 1, n && (i += Math.abs(n))),
          t.src ? s = t.src : t.toDataURL && (s = t.toDataURL()),
          '<pattern id="SVGID_' + this.id + '" x="' + n + '" y="' + o + '" width="' + i + '" height="' + r + '">\n<image x="0" y="0" width="' + t.width + '" height="' + t.height + '" xlink:href="' + s + '"></image>\n</pattern>\n'
        },
        setOptions: function (e) {
          for (var t in e) this[t] = e[t]
        },
        toLive: function (e) {
          var t = this.source;
          if (!t) return '';
          if (void 0 !== t.src) {
            if (!t.complete) return '';
            if (0 === t.naturalWidth || 0 === t.naturalHeight) return ''
          }
          return e.createPattern(t, this.repeat)
        }
      }),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.toFixed;
        t.Shadow ? t.warn('fabric.Shadow is already defined.') : (t.Shadow = t.util.createClass({
          color: 'rgb(0,0,0)',
          blur: 0,
          offsetX: 0,
          offsetY: 0,
          affectStroke: !1,
          includeDefaultValues: !0,
          nonScaling: !1,
          initialize: function (e) {
            for (var i in 'string' == typeof e && (e = this._parseShadow(e)), e) this[i] = e[i];
            this.id = t.Object.__uid++
          },
          _parseShadow: function (e) {
            var i = e.trim(),
            r = t.Shadow.reOffsetsAndBlur.exec(i) || [
            ];
            return {
              color: (i.replace(t.Shadow.reOffsetsAndBlur, '') || 'rgb(0,0,0)').trim(),
              offsetX: parseFloat(r[1], 10) || 0,
              offsetY: parseFloat(r[2], 10) || 0,
              blur: parseFloat(r[3], 10) || 0
            }
          },
          toString: function () {
            return [this.offsetX,
            this.offsetY,
            this.blur,
            this.color].join('px ')
          },
          toSVG: function (e) {
            var r = 40,
            n = 40,
            o = t.Object.NUM_FRACTION_DIGITS,
            s = t.util.rotateVector({
              x: this.offsetX,
              y: this.offsetY
            }, t.util.degreesToRadians( - e.angle)),
            a = new t.Color(this.color);
            return e.width && e.height && (r = 100 * i((Math.abs(s.x) + this.blur) / e.width, o) + 20, n = 100 * i((Math.abs(s.y) + this.blur) / e.height, o) + 20),
            e.flipX && (s.x *= - 1),
            e.flipY && (s.y *= - 1),
            '<filter id="SVGID_' + this.id + '" y="-' + n + '%" height="' + (100 + 2 * n) + '%" x="-' + r + '%" width="' + (100 + 2 * r) + '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' + i(this.blur ? this.blur / 2 : 0, o) + '"></feGaussianBlur>\n\t<feOffset dx="' + i(s.x, o) + '" dy="' + i(s.y, o) + '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' + a.toRgb() + '" flood-opacity="' + a.getAlpha() + '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
          },
          toObject: function () {
            if (this.includeDefaultValues) return {
              color: this.color,
              blur: this.blur,
              offsetX: this.offsetX,
              offsetY: this.offsetY,
              affectStroke: this.affectStroke,
              nonScaling: this.nonScaling
            };
            var e = {
            },
            i = t.Shadow.prototype;
            return ['color',
            'blur',
            'offsetX',
            'offsetY',
            'affectStroke',
            'nonScaling'].forEach((function (t) {
              this[t] !== i[t] && (e[t] = this[t])
            }), this),
            e
          }
        }), t.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/)
      }(t),
      function () {
        if (T.StaticCanvas) T.warn('fabric.StaticCanvas is already defined.');
         else {
          var e = T.util.object.extend,
          t = T.util.getElementOffset,
          i = T.util.removeFromArray,
          r = T.util.toFixed,
          n = T.util.transformPoint,
          o = T.util.invertTransform,
          s = T.util.getNodeCanvas,
          a = T.util.createCanvasElement,
          l = new Error('Could not initialize `canvas` element');
          T.StaticCanvas = T.util.createClass(T.CommonMethods, {
            initialize: function (e, t) {
              t || (t = {
              }),
              this.renderAndResetBound = this.renderAndReset.bind(this),
              this.requestRenderAllBound = this.requestRenderAll.bind(this),
              this._initStatic(e, t)
            },
            backgroundColor: '',
            backgroundImage: null,
            overlayColor: '',
            overlayImage: null,
            includeDefaultValues: !0,
            stateful: !1,
            renderOnAddRemove: !0,
            controlsAboveOverlay: !1,
            allowTouchScrolling: !1,
            imageSmoothingEnabled: !0,
            viewportTransform: T.iMatrix.concat(),
            backgroundVpt: !0,
            overlayVpt: !0,
            enableRetinaScaling: !0,
            vptCoords: {
            },
            skipOffscreen: !0,
            clipPath: void 0,
            _initStatic: function (e, t) {
              var i = this.requestRenderAllBound;
              this._objects = [
              ],
              this._createLowerCanvas(e),
              this._initOptions(t),
              this.interactive || this._initRetinaScaling(),
              t.overlayImage && this.setOverlayImage(t.overlayImage, i),
              t.backgroundImage && this.setBackgroundImage(t.backgroundImage, i),
              t.backgroundColor && this.setBackgroundColor(t.backgroundColor, i),
              t.overlayColor && this.setOverlayColor(t.overlayColor, i),
              this.calcOffset()
            },
            _isRetinaScaling: function () {
              return T.devicePixelRatio > 1 && this.enableRetinaScaling
            },
            getRetinaScaling: function () {
              return this._isRetinaScaling() ? Math.max(1, T.devicePixelRatio) : 1
            },
            _initRetinaScaling: function () {
              if (this._isRetinaScaling()) {
                var e = T.devicePixelRatio;
                this.__initRetinaScaling(e, this.lowerCanvasEl, this.contextContainer),
                this.upperCanvasEl && this.__initRetinaScaling(e, this.upperCanvasEl, this.contextTop)
              }
            },
            __initRetinaScaling: function (e, t, i) {
              t.setAttribute('width', this.width * e),
              t.setAttribute('height', this.height * e),
              i.scale(e, e)
            },
            calcOffset: function () {
              return this._offset = t(this.lowerCanvasEl),
              this
            },
            setOverlayImage: function (e, t, i) {
              return this.__setBgOverlayImage('overlayImage', e, t, i)
            },
            setBackgroundImage: function (e, t, i) {
              return this.__setBgOverlayImage('backgroundImage', e, t, i)
            },
            setOverlayColor: function (e, t) {
              return this.__setBgOverlayColor('overlayColor', e, t)
            },
            setBackgroundColor: function (e, t) {
              return this.__setBgOverlayColor('backgroundColor', e, t)
            },
            __setBgOverlayImage: function (e, t, i, r) {
              return 'string' == typeof t ? T.util.loadImage(t, (function (t, n) {
                if (t) {
                  var o = new T.Image(t, r);
                  this[e] = o,
                  o.canvas = this
                }
                i && i(t, n)
              }), this, r && r.crossOrigin) : (r && t.setOptions(r), this[e] = t, t && (t.canvas = this), i && i(t, !1)),
              this
            },
            __setBgOverlayColor: function (e, t, i) {
              return this[e] = t,
              this._initGradient(t, e),
              this._initPattern(t, e, i),
              this
            },
            _createCanvasElement: function () {
              var e = a();
              if (!e) throw l;
              if (e.style || (e.style = {
              }), void 0 === e.getContext) throw l;
              return e
            },
            _initOptions: function (e) {
              var t = this.lowerCanvasEl;
              this._setOptions(e),
              this.width = this.width || parseInt(t.width, 10) || 0,
              this.height = this.height || parseInt(t.height, 10) || 0,
              this.lowerCanvasEl.style && (t.width = this.width, t.height = this.height, t.style.width = this.width + 'px', t.style.height = this.height + 'px', this.viewportTransform = this.viewportTransform.slice())
            },
            _createLowerCanvas: function (e) {
              e && e.getContext ? this.lowerCanvasEl = e : this.lowerCanvasEl = T.util.getById(e) || this._createCanvasElement(),
              T.util.addClass(this.lowerCanvasEl, 'lower-canvas'),
              this._originalCanvasStyle = this.lowerCanvasEl.style,
              this.interactive && this._applyCanvasStyle(this.lowerCanvasEl),
              this.contextContainer = this.lowerCanvasEl.getContext('2d')
            },
            getWidth: function () {
              return this.width
            },
            getHeight: function () {
              return this.height
            },
            setWidth: function (e, t) {
              return this.setDimensions({
                width: e
              }, t)
            },
            setHeight: function (e, t) {
              return this.setDimensions({
                height: e
              }, t)
            },
            setDimensions: function (e, t) {
              var i;
              for (var r in t = t || {
              }, e) i = e[r],
              t.cssOnly || (this._setBackstoreDimension(r, e[r]), i += 'px', this.hasLostContext = !0),
              t.backstoreOnly || this._setCssDimension(r, i);
              return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop),
              this._initRetinaScaling(),
              this.calcOffset(),
              t.cssOnly || this.requestRenderAll(),
              this
            },
            _setBackstoreDimension: function (e, t) {
              return this.lowerCanvasEl[e] = t,
              this.upperCanvasEl && (this.upperCanvasEl[e] = t),
              this.cacheCanvasEl && (this.cacheCanvasEl[e] = t),
              this[e] = t,
              this
            },
            _setCssDimension: function (e, t) {
              return this.lowerCanvasEl.style[e] = t,
              this.upperCanvasEl && (this.upperCanvasEl.style[e] = t),
              this.wrapperEl && (this.wrapperEl.style[e] = t),
              this
            },
            getZoom: function () {
              return this.viewportTransform[0]
            },
            setViewportTransform: function (e) {
              var t,
              i,
              r,
              n = this._activeObject,
              o = this.backgroundImage,
              s = this.overlayImage;
              for (this.viewportTransform = e, i = 0, r = this._objects.length; i < r; i++) (t = this._objects[i]).group || t.setCoords(!0);
              return n && n.setCoords(),
              o && o.setCoords(!0),
              s && s.setCoords(!0),
              this.calcViewportBoundaries(),
              this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            zoomToPoint: function (e, t) {
              var i = e,
              r = this.viewportTransform.slice(0);
              e = n(e, o(this.viewportTransform)),
              r[0] = t,
              r[3] = t;
              var s = n(e, r);
              return r[4] += i.x - s.x,
              r[5] += i.y - s.y,
              this.setViewportTransform(r)
            },
            setZoom: function (e) {
              return this.zoomToPoint(new T.Point(0, 0), e),
              this
            },
            absolutePan: function (e) {
              var t = this.viewportTransform.slice(0);
              return t[4] = - e.x,
              t[5] = - e.y,
              this.setViewportTransform(t)
            },
            relativePan: function (e) {
              return this.absolutePan(new T.Point( - e.x - this.viewportTransform[4], - e.y - this.viewportTransform[5]))
            },
            getElement: function () {
              return this.lowerCanvasEl
            },
            _onObjectAdded: function (e) {
              this.stateful && e.setupState(),
              e._set('canvas', this),
              e.setCoords(),
              this.fire('object:added', {
                target: e
              }),
              e.fire('added')
            },
            _onObjectRemoved: function (e) {
              this.fire('object:removed', {
                target: e
              }),
              e.fire('removed'),
              delete e.canvas
            },
            clearContext: function (e) {
              return e.clearRect(0, 0, this.width, this.height),
              this
            },
            getContext: function () {
              return this.contextContainer
            },
            clear: function () {
              return this.remove.apply(this, this.getObjects()),
              this.backgroundImage = null,
              this.overlayImage = null,
              this.backgroundColor = '',
              this.overlayColor = '',
              this._hasITextHandlers && (this.off('mouse:up', this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1),
              this.clearContext(this.contextContainer),
              this.fire('canvas:cleared'),
              this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            renderAll: function () {
              var e = this.contextContainer;
              return this.renderCanvas(e, this._objects),
              this
            },
            renderAndReset: function () {
              this.isRendering = 0,
              this.renderAll()
            },
            requestRenderAll: function () {
              return this.isRendering || (this.isRendering = T.util.requestAnimFrame(this.renderAndResetBound)),
              this
            },
            calcViewportBoundaries: function () {
              var e = {
              },
              t = this.width,
              i = this.height,
              r = o(this.viewportTransform);
              return e.tl = n({
                x: 0,
                y: 0
              }, r),
              e.br = n({
                x: t,
                y: i
              }, r),
              e.tr = new T.Point(e.br.x, e.tl.y),
              e.bl = new T.Point(e.tl.x, e.br.y),
              this.vptCoords = e,
              e
            },
            cancelRequestedRender: function () {
              this.isRendering && (T.util.cancelAnimFrame(this.isRendering), this.isRendering = 0)
            },
            renderCanvas: function (e, t) {
              var i = this.viewportTransform,
              r = this.clipPath;
              this.cancelRequestedRender(),
              this.calcViewportBoundaries(),
              this.clearContext(e),
              T.util.setImageSmoothing(e, this.imageSmoothingEnabled),
              this.fire('before:render', {
                ctx: e
              }),
              this._renderBackground(e),
              e.save(),
              e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
              this._renderObjects(e, t),
              e.restore(),
              !this.controlsAboveOverlay && this.interactive && this.drawControls(e),
              r && (r.canvas = this, r.shouldCache(), r._transformDone = !0, r.renderCache({
                forClipping: !0
              }), this.drawClipPathOnCanvas(e)),
              this._renderOverlay(e),
              this.controlsAboveOverlay && this.interactive && this.drawControls(e),
              this.fire('after:render', {
                ctx: e
              })
            },
            drawClipPathOnCanvas: function (e) {
              var t = this.viewportTransform,
              i = this.clipPath;
              e.save(),
              e.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
              e.globalCompositeOperation = 'destination-in',
              i.transform(e),
              e.scale(1 / i.zoomX, 1 / i.zoomY),
              e.drawImage(i._cacheCanvas, - i.cacheTranslationX, - i.cacheTranslationY),
              e.restore()
            },
            _renderObjects: function (e, t) {
              var i,
              r;
              for (i = 0, r = t.length; i < r; ++i) t[i] && t[i].render(e)
            },
            _renderBackgroundOrOverlay: function (e, t) {
              var i = this[t + 'Color'],
              r = this[t + 'Image'],
              n = this.viewportTransform,
              o = this[t + 'Vpt'];
              if (i || r) {
                if (i) {
                  e.save(),
                  e.beginPath(),
                  e.moveTo(0, 0),
                  e.lineTo(this.width, 0),
                  e.lineTo(this.width, this.height),
                  e.lineTo(0, this.height),
                  e.closePath(),
                  e.fillStyle = i.toLive ? i.toLive(e, this) : i,
                  o && e.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                  e.transform(1, 0, 0, 1, i.offsetX || 0, i.offsetY || 0);
                  var s = i.gradientTransform || i.patternTransform;
                  s && e.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
                  e.fill(),
                  e.restore()
                }
                r && (e.save(), o && e.transform(n[0], n[1], n[2], n[3], n[4], n[5]), r.render(e), e.restore())
              }
            },
            _renderBackground: function (e) {
              this._renderBackgroundOrOverlay(e, 'background')
            },
            _renderOverlay: function (e) {
              this._renderBackgroundOrOverlay(e, 'overlay')
            },
            getCenter: function () {
              return {
                top: this.height / 2,
                left: this.width / 2
              }
            },
            getCenterPoint: function () {
              return new T.Point(this.width / 2, this.height / 2)
            },
            centerObjectH: function (e) {
              return this._centerObject(e, new T.Point(this.getCenterPoint().x, e.getCenterPoint().y))
            },
            centerObjectV: function (e) {
              return this._centerObject(e, new T.Point(e.getCenterPoint().x, this.getCenterPoint().y))
            },
            centerObject: function (e) {
              var t = this.getCenterPoint();
              return this._centerObject(e, t)
            },
            viewportCenterObject: function (e) {
              var t = this.getVpCenter();
              return this._centerObject(e, t)
            },
            viewportCenterObjectH: function (e) {
              var t = this.getVpCenter();
              return this._centerObject(e, new T.Point(t.x, e.getCenterPoint().y)),
              this
            },
            viewportCenterObjectV: function (e) {
              var t = this.getVpCenter();
              return this._centerObject(e, new T.Point(e.getCenterPoint().x, t.y))
            },
            getVpCenter: function () {
              var e = this.getCenterPoint(),
              t = o(this.viewportTransform);
              return n(e, t)
            },
            _centerObject: function (e, t) {
              return e.setPositionByOrigin(t, 'center', 'center'),
              e.setCoords(),
              this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            toDatalessJSON: function (e) {
              return this.toDatalessObject(e)
            },
            toObject: function (e) {
              return this._toObjectMethod('toObject', e)
            },
            toDatalessObject: function (e) {
              return this._toObjectMethod('toDatalessObject', e)
            },
            _toObjectMethod: function (t, i) {
              var r = this.clipPath,
              n = {
                version: T.version,
                objects: this._toObjects(t, i)
              };
              return r && !r.excludeFromExport && (n.clipPath = this._toObject(this.clipPath, t, i)),
              e(n, this.__serializeBgOverlay(t, i)),
              T.util.populateWithProperties(this, n, i),
              n
            },
            _toObjects: function (e, t) {
              return this._objects.filter((function (e) {
                return !e.excludeFromExport
              })).map((function (i) {
                return this._toObject(i, e, t)
              }), this)
            },
            _toObject: function (e, t, i) {
              var r;
              this.includeDefaultValues || (r = e.includeDefaultValues, e.includeDefaultValues = !1);
              var n = e[t](i);
              return this.includeDefaultValues || (e.includeDefaultValues = r),
              n
            },
            __serializeBgOverlay: function (e, t) {
              var i = {
              },
              r = this.backgroundImage,
              n = this.overlayImage,
              o = this.backgroundColor,
              s = this.overlayColor;
              return o && o.toObject ? o.excludeFromExport || (i.background = o.toObject(t)) : o && (i.background = o),
              s && s.toObject ? s.excludeFromExport || (i.overlay = s.toObject(t)) : s && (i.overlay = s),
              r && !r.excludeFromExport && (i.backgroundImage = this._toObject(r, e, t)),
              n && !n.excludeFromExport && (i.overlayImage = this._toObject(n, e, t)),
              i
            },
            svgViewportTransformation: !0,
            toSVG: function (e, t) {
              e || (e = {
              }),
              e.reviver = t;
              var i = [
              ];
              return this._setSVGPreamble(i, e),
              this._setSVGHeader(i, e),
              this.clipPath && i.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n'),
              this._setSVGBgOverlayColor(i, 'background'),
              this._setSVGBgOverlayImage(i, 'backgroundImage', t),
              this._setSVGObjects(i, t),
              this.clipPath && i.push('</g>\n'),
              this._setSVGBgOverlayColor(i, 'overlay'),
              this._setSVGBgOverlayImage(i, 'overlayImage', t),
              i.push('</svg>'),
              i.join('')
            },
            _setSVGPreamble: function (e, t) {
              t.suppressPreamble || e.push('<?xml version="1.0" encoding="', t.encoding || 'UTF-8', '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
            },
            _setSVGHeader: function (e, t) {
              var i,
              n = t.width || this.width,
              o = t.height || this.height,
              s = 'viewBox="0 0 ' + this.width + ' ' + this.height + '" ',
              a = T.Object.NUM_FRACTION_DIGITS;
              t.viewBox ? s = 'viewBox="' + t.viewBox.x + ' ' + t.viewBox.y + ' ' + t.viewBox.width + ' ' + t.viewBox.height + '" ' : this.svgViewportTransformation && (i = this.viewportTransform, s = 'viewBox="' + r( - i[4] / i[0], a) + ' ' + r( - i[5] / i[3], a) + ' ' + r(this.width / i[0], a) + ' ' + r(this.height / i[3], a) + '" '),
              e.push('<svg ', 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', n, '" ', 'height="', o, '" ', s, 'xml:space="preserve">\n', '<desc>Created with Fabric.js ', T.version, '</desc>\n', '<defs>\n', this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(t), '</defs>\n')
            },
            createSVGClipPathMarkup: function (e) {
              var t = this.clipPath;
              return t ? (t.clipPathId = 'CLIPPATH_' + T.Object.__uid++, '<clipPath id="' + t.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(e.reviver) + '</clipPath>\n') : ''
            },
            createSVGRefElementsMarkup: function () {
              var e = this;
              return ['background',
              'overlay'].map((function (t) {
                var i = e[t + 'Color'];
                if (i && i.toLive) {
                  var r = e[t + 'Vpt'],
                  n = e.viewportTransform,
                  o = {
                    width: e.width / (r ? n[0] : 1),
                    height: e.height / (r ? n[3] : 1)
                  };
                  return i.toSVG(o, {
                    additionalTransform: r ? T.util.matrixToSVG(n) : ''
                  })
                }
              })).join('')
            },
            createSVGFontFacesMarkup: function () {
              var e,
              t,
              i,
              r,
              n,
              o,
              s,
              a,
              l = '',
              h = {
              },
              c = T.fontPaths,
              u = [
              ];
              for (this._objects.forEach((function e(t) {
                u.push(t),
                t._objects && t._objects.forEach(e)
              })), s = 0, a = u.length; s < a; s++) if (t = (e = u[s]).fontFamily, - 1 !== e.type.indexOf('text') && !h[t] && c[t] && (h[t] = !0, e.styles)) for (n in i = e.styles) for (o in r = i[n]) !h[t = r[o].fontFamily] && c[t] && (h[t] = !0);
              for (var d in h) l += [
                '\t\t@font-face {\n',
                '\t\t\tfont-family: \'',
                d,
                '\';\n',
                '\t\t\tsrc: url(\'',
                c[d],
                '\');\n',
                '\t\t}\n'
              ].join('');
              return l && (l = [
                '\t<style type="text/css">',
                '<![CDATA[\n',
                l,
                ']]>',
                '</style>\n'
              ].join('')),
              l
            },
            _setSVGObjects: function (e, t) {
              var i,
              r,
              n,
              o = this._objects;
              for (r = 0, n = o.length; r < n; r++) (i = o[r]).excludeFromExport || this._setSVGObject(e, i, t)
            },
            _setSVGObject: function (e, t, i) {
              e.push(t.toSVG(i))
            },
            _setSVGBgOverlayImage: function (e, t, i) {
              this[t] && !this[t].excludeFromExport && this[t].toSVG && e.push(this[t].toSVG(i))
            },
            _setSVGBgOverlayColor: function (e, t) {
              var i = this[t + 'Color'],
              r = this.viewportTransform,
              n = this.width,
              o = this.height;
              if (i) if (i.toLive) {
                var s = i.repeat,
                a = T.util.invertTransform(r),
                l = this[t + 'Vpt'] ? T.util.matrixToSVG(a) : '';
                e.push('<rect transform="' + l + ' translate(', n / 2, ',', o / 2, ')"', ' x="', i.offsetX - n / 2, '" y="', i.offsetY - o / 2, '" ', 'width="', 'repeat-y' === s || 'no-repeat' === s ? i.source.width : n, '" height="', 'repeat-x' === s || 'no-repeat' === s ? i.source.height : o, '" fill="url(#SVGID_' + i.id + ')"', '></rect>\n')
              } else e.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', i, '"', '></rect>\n')
            },
            sendToBack: function (e) {
              if (!e) return this;
              var t,
              r,
              n,
              o = this._activeObject;
              if (e === o && 'activeSelection' === e.type) for (t = (n = o._objects).length; t--; ) r = n[t],
              i(this._objects, r),
              this._objects.unshift(r);
               else i(this._objects, e),
              this._objects.unshift(e);
              return this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            bringToFront: function (e) {
              if (!e) return this;
              var t,
              r,
              n,
              o = this._activeObject;
              if (e === o && 'activeSelection' === e.type) for (n = o._objects, t = 0; t < n.length; t++) r = n[t],
              i(this._objects, r),
              this._objects.push(r);
               else i(this._objects, e),
              this._objects.push(e);
              return this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            sendBackwards: function (e, t) {
              if (!e) return this;
              var r,
              n,
              o,
              s,
              a,
              l = this._activeObject,
              h = 0;
              if (e === l && 'activeSelection' === e.type) for (a = l._objects, r = 0; r < a.length; r++) n = a[r],
              (o = this._objects.indexOf(n)) > 0 + h && (s = o - 1, i(this._objects, n), this._objects.splice(s, 0, n)),
              h++;
               else 0 !== (o = this._objects.indexOf(e)) && (s = this._findNewLowerIndex(e, o, t), i(this._objects, e), this._objects.splice(s, 0, e));
              return this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            _findNewLowerIndex: function (e, t, i) {
              var r,
              n;
              if (i) {
                for (r = t, n = t - 1; n >= 0; --n) if (e.intersectsWithObject(this._objects[n]) || e.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(e)) {
                  r = n;
                  break
                }
              } else r = t - 1;
              return r
            },
            bringForward: function (e, t) {
              if (!e) return this;
              var r,
              n,
              o,
              s,
              a,
              l = this._activeObject,
              h = 0;
              if (e === l && 'activeSelection' === e.type) for (r = (a = l._objects).length; r--; ) n = a[r],
              (o = this._objects.indexOf(n)) < this._objects.length - 1 - h && (s = o + 1, i(this._objects, n), this._objects.splice(s, 0, n)),
              h++;
               else (o = this._objects.indexOf(e)) !== this._objects.length - 1 && (s = this._findNewUpperIndex(e, o, t), i(this._objects, e), this._objects.splice(s, 0, e));
              return this.renderOnAddRemove && this.requestRenderAll(),
              this
            },
            _findNewUpperIndex: function (e, t, i) {
              var r,
              n,
              o;
              if (i) {
                for (r = t, n = t + 1, o = this._objects.length; n < o; ++n) if (e.intersectsWithObject(this._objects[n]) || e.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(e)) {
                  r = n;
                  break
                }
              } else r = t + 1;
              return r
            },
            moveTo: function (e, t) {
              return i(this._objects, e),
              this._objects.splice(t, 0, e),
              this.renderOnAddRemove && this.requestRenderAll()
            },
            dispose: function () {
              return this.isRendering && (T.util.cancelAnimFrame(this.isRendering), this.isRendering = 0),
              this.forEachObject((function (e) {
                e.dispose && e.dispose()
              })),
              this._objects = [
              ],
              this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(),
              this.backgroundImage = null,
              this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(),
              this.overlayImage = null,
              this._iTextInstances = null,
              this.contextContainer = null,
              this.lowerCanvasEl.classList.remove('lower-canvas'),
              T.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle),
              delete this._originalCanvasStyle,
              this.lowerCanvasEl.setAttribute('width', this.width),
              this.lowerCanvasEl.setAttribute('height', this.height),
              T.util.cleanUpJsdomNode(this.lowerCanvasEl),
              this.lowerCanvasEl = void 0,
              this
            },
            toString: function () {
              return '#<fabric.Canvas (' + this.complexity() + '): { objects: ' + this._objects.length + ' }>'
            }
          }),
          e(T.StaticCanvas.prototype, T.Observable),
          e(T.StaticCanvas.prototype, T.Collection),
          e(T.StaticCanvas.prototype, T.DataURLExporter),
          e(T.StaticCanvas, {
            EMPTY_JSON: '{"objects": [], "background": "white"}',
            supports: function (e) {
              var t = a();
              if (!t || !t.getContext) return null;
              var i = t.getContext('2d');
              return i && 'setLineDash' === e ? void 0 !== i.setLineDash : null
            }
          }),
          T.StaticCanvas.prototype.toJSON = T.StaticCanvas.prototype.toObject,
          T.isLikelyNode && (T.StaticCanvas.prototype.createPNGStream = function () {
            var e = s(this.lowerCanvasEl);
            return e && e.createPNGStream()
          }, T.StaticCanvas.prototype.createJPEGStream = function (e) {
            var t = s(this.lowerCanvasEl);
            return t && t.createJPEGStream(e)
          })
        }
      }(),
      T.BaseBrush = T.util.createClass({
        color: 'rgb(0, 0, 0)',
        width: 1,
        shadow: null,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        strokeMiterLimit: 10,
        strokeDashArray: null,
        limitedToCanvasSize: !1,
        _setBrushStyles: function (e) {
          e.strokeStyle = this.color,
          e.lineWidth = this.width,
          e.lineCap = this.strokeLineCap,
          e.miterLimit = this.strokeMiterLimit,
          e.lineJoin = this.strokeLineJoin,
          e.setLineDash(this.strokeDashArray || [
          ])
        },
        _saveAndTransform: function (e) {
          var t = this.canvas.viewportTransform;
          e.save(),
          e.transform(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        _setShadow: function () {
          if (this.shadow) {
            var e = this.canvas,
            t = this.shadow,
            i = e.contextTop,
            r = e.getZoom();
            e && e._isRetinaScaling() && (r *= T.devicePixelRatio),
            i.shadowColor = t.color,
            i.shadowBlur = t.blur * r,
            i.shadowOffsetX = t.offsetX * r,
            i.shadowOffsetY = t.offsetY * r
          }
        },
        needsFullRender: function () {
          return new T.Color(this.color).getAlpha() < 1 || !!this.shadow
        },
        _resetShadow: function () {
          var e = this.canvas.contextTop;
          e.shadowColor = '',
          e.shadowBlur = e.shadowOffsetX = e.shadowOffsetY = 0
        },
        _isOutSideCanvas: function (e) {
          return e.x < 0 || e.x > this.canvas.getWidth() || e.y < 0 || e.y > this.canvas.getHeight()
        }
      }),
      T.PencilBrush = T.util.createClass(T.BaseBrush, {
        decimate: 0.4,
        drawStraightLine: !1,
        straightLineKey: 'shiftKey',
        initialize: function (e) {
          this.canvas = e,
          this._points = [
          ]
        },
        needsFullRender: function () {
          return this.callSuper('needsFullRender') || this._hasStraightLine
        },
        _drawSegment: function (e, t, i) {
          var r = t.midPointFrom(i);
          return e.quadraticCurveTo(t.x, t.y, r.x, r.y),
          r
        },
        onMouseDown: function (e, t) {
          this.canvas._isMainEvent(t.e) && (this.drawStraightLine = t.e[this.straightLineKey], this._prepareForDrawing(e), this._captureDrawingPath(e), this._render())
        },
        onMouseMove: function (e, t) {
          if (this.canvas._isMainEvent(t.e) && (this.drawStraightLine = t.e[this.straightLineKey], (!0 !== this.limitedToCanvasSize || !this._isOutSideCanvas(e)) && this._captureDrawingPath(e) && this._points.length > 1)) if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop),
          this._render();
           else {
            var i = this._points,
            r = i.length,
            n = this.canvas.contextTop;
            this._saveAndTransform(n),
            this.oldEnd && (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)),
            this.oldEnd = this._drawSegment(n, i[r - 2], i[r - 1], !0),
            n.stroke(),
            n.restore()
          }
        },
        onMouseUp: function (e) {
          return !this.canvas._isMainEvent(e.e) || (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1)
        },
        _prepareForDrawing: function (e) {
          var t = new T.Point(e.x, e.y);
          this._reset(),
          this._addPoint(t),
          this.canvas.contextTop.moveTo(t.x, t.y)
        },
        _addPoint: function (e) {
          return !(this._points.length > 1 && e.eq(this._points[this._points.length - 1]) || (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(e), 0))
        },
        _reset: function () {
          this._points = [
          ],
          this._setBrushStyles(this.canvas.contextTop),
          this._setShadow(),
          this._hasStraightLine = !1
        },
        _captureDrawingPath: function (e) {
          var t = new T.Point(e.x, e.y);
          return this._addPoint(t)
        },
        _render: function (e) {
          var t,
          i,
          r = this._points[0],
          n = this._points[1];
          if (e = e || this.canvas.contextTop, this._saveAndTransform(e), e.beginPath(), 2 === this._points.length && r.x === n.x && r.y === n.y) {
            var o = this.width / 1000;
            r = new T.Point(r.x, r.y),
            n = new T.Point(n.x, n.y),
            r.x -= o,
            n.x += o
          }
          for (e.moveTo(r.x, r.y), t = 1, i = this._points.length; t < i; t++) this._drawSegment(e, r, n),
          r = this._points[t],
          n = this._points[t + 1];
          e.lineTo(r.x, r.y),
          e.stroke(),
          e.restore()
        },
        convertPointsToSVGPath: function (e) {
          var t = this.width / 1000;
          return T.util.getSmoothPathFromPoints(e, t)
        },
        _isEmptySVGPath: function (e) {
          return 'M 0 0 Q 0 0 0 0 L 0 0' === T.util.joinPath(e)
        },
        createPath: function (e) {
          var t = new T.Path(e, {
            fill: null,
            stroke: this.color,
            strokeWidth: this.width,
            strokeLineCap: this.strokeLineCap,
            strokeMiterLimit: this.strokeMiterLimit,
            strokeLineJoin: this.strokeLineJoin,
            strokeDashArray: this.strokeDashArray
          });
          return this.shadow && (this.shadow.affectStroke = !0, t.shadow = new T.Shadow(this.shadow)),
          t
        },
        decimatePoints: function (e, t) {
          if (e.length <= 2) return e;
          var i,
          r = this.canvas.getZoom(),
          n = Math.pow(t / r, 2),
          o = e.length - 1,
          s = e[0],
          a = [
            s
          ];
          for (i = 1; i < o - 1; i++) Math.pow(s.x - e[i].x, 2) + Math.pow(s.y - e[i].y, 2) >= n && (s = e[i], a.push(s));
          return a.push(e[o]),
          a
        },
        _finalizeAndAddPath: function () {
          this.canvas.contextTop.closePath(),
          this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
          var e = this.convertPointsToSVGPath(this._points);
          if (this._isEmptySVGPath(e)) this.canvas.requestRenderAll();
           else {
            var t = this.createPath(e);
            this.canvas.clearContext(this.canvas.contextTop),
            this.canvas.fire('before:path:created', {
              path: t
            }),
            this.canvas.add(t),
            this.canvas.requestRenderAll(),
            t.setCoords(),
            this._resetShadow(),
            this.canvas.fire('path:created', {
              path: t
            })
          }
        }
      }),
      T.CircleBrush = T.util.createClass(T.BaseBrush, {
        width: 10,
        initialize: function (e) {
          this.canvas = e,
          this.points = [
          ]
        },
        drawDot: function (e) {
          var t = this.addPoint(e),
          i = this.canvas.contextTop;
          this._saveAndTransform(i),
          this.dot(i, t),
          i.restore()
        },
        dot: function (e, t) {
          e.fillStyle = t.fill,
          e.beginPath(),
          e.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !1),
          e.closePath(),
          e.fill()
        },
        onMouseDown: function (e) {
          this.points.length = 0,
          this.canvas.clearContext(this.canvas.contextTop),
          this._setShadow(),
          this.drawDot(e)
        },
        _render: function () {
          var e,
          t,
          i = this.canvas.contextTop,
          r = this.points;
          for (this._saveAndTransform(i), e = 0, t = r.length; e < t; e++) this.dot(i, r[e]);
          i.restore()
        },
        onMouseMove: function (e) {
          !0 === this.limitedToCanvasSize && this._isOutSideCanvas(e) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(e), this._render()) : this.drawDot(e))
        },
        onMouseUp: function () {
          var e,
          t,
          i = this.canvas.renderOnAddRemove;
          this.canvas.renderOnAddRemove = !1;
          var r = [
          ];
          for (e = 0, t = this.points.length; e < t; e++) {
            var n = this.points[e],
            o = new T.Circle({
              radius: n.radius,
              left: n.x,
              top: n.y,
              originX: 'center',
              originY: 'center',
              fill: n.fill
            });
            this.shadow && (o.shadow = new T.Shadow(this.shadow)),
            r.push(o)
          }
          var s = new T.Group(r);
          s.canvas = this.canvas,
          this.canvas.fire('before:path:created', {
            path: s
          }),
          this.canvas.add(s),
          this.canvas.fire('path:created', {
            path: s
          }),
          this.canvas.clearContext(this.canvas.contextTop),
          this._resetShadow(),
          this.canvas.renderOnAddRemove = i,
          this.canvas.requestRenderAll()
        },
        addPoint: function (e) {
          var t = new T.Point(e.x, e.y),
          i = T.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2,
          r = new T.Color(this.color).setAlpha(T.util.getRandomInt(0, 100) / 100).toRgba();
          return t.radius = i,
          t.fill = r,
          this.points.push(t),
          t
        }
      }),
      T.SprayBrush = T.util.createClass(T.BaseBrush, {
        width: 10,
        density: 20,
        dotWidth: 1,
        dotWidthVariance: 1,
        randomOpacity: !1,
        optimizeOverlapping: !0,
        initialize: function (e) {
          this.canvas = e,
          this.sprayChunks = [
          ]
        },
        onMouseDown: function (e) {
          this.sprayChunks.length = 0,
          this.canvas.clearContext(this.canvas.contextTop),
          this._setShadow(),
          this.addSprayChunk(e),
          this.render(this.sprayChunkPoints)
        },
        onMouseMove: function (e) {
          !0 === this.limitedToCanvasSize && this._isOutSideCanvas(e) || (this.addSprayChunk(e), this.render(this.sprayChunkPoints))
        },
        onMouseUp: function () {
          var e = this.canvas.renderOnAddRemove;
          this.canvas.renderOnAddRemove = !1;
          for (var t = [
          ], i = 0, r = this.sprayChunks.length; i < r; i++) for (var n = this.sprayChunks[i], o = 0, s = n.length; o < s; o++) {
            var a = new T.Rect({
              width: n[o].width,
              height: n[o].width,
              left: n[o].x + 1,
              top: n[o].y + 1,
              originX: 'center',
              originY: 'center',
              fill: this.color
            });
            t.push(a)
          }
          this.optimizeOverlapping && (t = this._getOptimizedRects(t));
          var l = new T.Group(t);
          this.shadow && l.set('shadow', new T.Shadow(this.shadow)),
          this.canvas.fire('before:path:created', {
            path: l
          }),
          this.canvas.add(l),
          this.canvas.fire('path:created', {
            path: l
          }),
          this.canvas.clearContext(this.canvas.contextTop),
          this._resetShadow(),
          this.canvas.renderOnAddRemove = e,
          this.canvas.requestRenderAll()
        },
        _getOptimizedRects: function (e) {
          var t,
          i,
          r,
          n = {
          };
          for (i = 0, r = e.length; i < r; i++) n[t = e[i].left + '' + e[i].top] || (n[t] = e[i]);
          var o = [
          ];
          for (t in n) o.push(n[t]);
          return o
        },
        render: function (e) {
          var t,
          i,
          r = this.canvas.contextTop;
          for (r.fillStyle = this.color, this._saveAndTransform(r), t = 0, i = e.length; t < i; t++) {
            var n = e[t];
            void 0 !== n.opacity && (r.globalAlpha = n.opacity),
            r.fillRect(n.x, n.y, n.width, n.width)
          }
          r.restore()
        },
        _render: function () {
          var e,
          t,
          i = this.canvas.contextTop;
          for (i.fillStyle = this.color, this._saveAndTransform(i), e = 0, t = this.sprayChunks.length; e < t; e++) this.render(this.sprayChunks[e]);
          i.restore()
        },
        addSprayChunk: function (e) {
          this.sprayChunkPoints = [
          ];
          var t,
          i,
          r,
          n,
          o = this.width / 2;
          for (n = 0; n < this.density; n++) {
            t = T.util.getRandomInt(e.x - o, e.x + o),
            i = T.util.getRandomInt(e.y - o, e.y + o),
            r = this.dotWidthVariance ? T.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
            var s = new T.Point(t, i);
            s.width = r,
            this.randomOpacity && (s.opacity = T.util.getRandomInt(0, 100) / 100),
            this.sprayChunkPoints.push(s)
          }
          this.sprayChunks.push(this.sprayChunkPoints)
        }
      }),
      T.PatternBrush = T.util.createClass(T.PencilBrush, {
        getPatternSrc: function () {
          var e = T.util.createCanvasElement(),
          t = e.getContext('2d');
          return e.width = e.height = 25,
          t.fillStyle = this.color,
          t.beginPath(),
          t.arc(10, 10, 10, 0, 2 * Math.PI, !1),
          t.closePath(),
          t.fill(),
          e
        },
        getPatternSrcFunction: function () {
          return String(this.getPatternSrc).replace('this.color', '"' + this.color + '"')
        },
        getPattern: function (e) {
          return e.createPattern(this.source || this.getPatternSrc(), 'repeat')
        },
        _setBrushStyles: function (e) {
          this.callSuper('_setBrushStyles', e),
          e.strokeStyle = this.getPattern(e)
        },
        createPath: function (e) {
          var t = this.callSuper('createPath', e),
          i = t._getLeftTopCoords().scalarAdd(t.strokeWidth / 2);
          return t.stroke = new T.Pattern({
            source: this.source || this.getPatternSrcFunction(),
            offsetX: - i.x,
            offsetY: - i.y
          }),
          t
        }
      }),
      function () {
        var e = T.util.getPointer,
        t = T.util.degreesToRadians,
        i = T.util.isTouchEvent;
        for (var r in T.Canvas = T.util.createClass(T.StaticCanvas, {
          initialize: function (e, t) {
            t || (t = {
            }),
            this.renderAndResetBound = this.renderAndReset.bind(this),
            this.requestRenderAllBound = this.requestRenderAll.bind(this),
            this._initStatic(e, t),
            this._initInteractive(),
            this._createCacheCanvas()
          },
          uniformScaling: !0,
          uniScaleKey: 'shiftKey',
          centeredScaling: !1,
          centeredRotation: !1,
          centeredKey: 'altKey',
          altActionKey: 'shiftKey',
          interactive: !0,
          selection: !0,
          selectionKey: 'shiftKey',
          altSelectionKey: null,
          selectionColor: 'rgba(100, 100, 255, 0.3)',
          selectionDashArray: [
          ],
          selectionBorderColor: 'rgba(255, 255, 255, 0.3)',
          selectionLineWidth: 1,
          selectionFullyContained: !1,
          hoverCursor: 'move',
          moveCursor: 'move',
          defaultCursor: 'default',
          freeDrawingCursor: 'crosshair',
          notAllowedCursor: 'not-allowed',
          containerClass: 'canvas-container',
          perPixelTargetFind: !1,
          targetFindTolerance: 0,
          skipTargetFind: !1,
          isDrawingMode: !1,
          preserveObjectStacking: !1,
          snapAngle: 0,
          snapThreshold: null,
          stopContextMenu: !1,
          fireRightClick: !1,
          fireMiddleClick: !1,
          targets: [
          ],
          enablePointerEvents: !1,
          _hoveredTarget: null,
          _hoveredTargets: [
          ],
          _initInteractive: function () {
            this._currentTransform = null,
            this._groupSelector = null,
            this._initWrapperElement(),
            this._createUpperCanvas(),
            this._initEventListeners(),
            this._initRetinaScaling(),
            this.freeDrawingBrush = T.PencilBrush && new T.PencilBrush(this),
            this.calcOffset()
          },
          _chooseObjectsToRender: function () {
            var e,
            t,
            i,
            r = this.getActiveObjects();
            if (r.length > 0 && !this.preserveObjectStacking) {
              t = [
              ],
              i = [
              ];
              for (var n = 0, o = this._objects.length; n < o; n++) e = this._objects[n],
              - 1 === r.indexOf(e) ? t.push(e) : i.push(e);
              r.length > 1 && (this._activeObject._objects = i),
              t.push.apply(t, i)
            } else t = this._objects;
            return t
          },
          renderAll: function () {
            !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1),
            this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
            var e = this.contextContainer;
            return this.renderCanvas(e, this._chooseObjectsToRender()),
            this
          },
          renderTopLayer: function (e) {
            e.save(),
            this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0),
            this.selection && this._groupSelector && (this._drawSelection(e), this.contextTopDirty = !0),
            e.restore()
          },
          renderTop: function () {
            var e = this.contextTop;
            return this.clearContext(e),
            this.renderTopLayer(e),
            this.fire('after:render'),
            this
          },
          _normalizePointer: function (e, t) {
            var i = e.calcTransformMatrix(),
            r = T.util.invertTransform(i),
            n = this.restorePointerVpt(t);
            return T.util.transformPoint(n, r)
          },
          isTargetTransparent: function (e, t, i) {
            if (e.shouldCache() && e._cacheCanvas && e !== this._activeObject) {
              var r = this._normalizePointer(e, {
                x: t,
                y: i
              }),
              n = Math.max(e.cacheTranslationX + r.x * e.zoomX, 0),
              o = Math.max(e.cacheTranslationY + r.y * e.zoomY, 0);
              return T.util.isTransparent(e._cacheContext, Math.round(n), Math.round(o), this.targetFindTolerance)
            }
            var s = this.contextCache,
            a = e.selectionBackgroundColor,
            l = this.viewportTransform;
            return e.selectionBackgroundColor = '',
            this.clearContext(s),
            s.save(),
            s.transform(l[0], l[1], l[2], l[3], l[4], l[5]),
            e.render(s),
            s.restore(),
            e.selectionBackgroundColor = a,
            T.util.isTransparent(s, t, i, this.targetFindTolerance)
          },
          _isSelectionKeyPressed: function (e) {
            return Array.isArray(this.selectionKey) ? !!this.selectionKey.find((function (t) {
              return !0 === e[t]
            })) : e[this.selectionKey]
          },
          _shouldClearSelection: function (e, t) {
            var i = this.getActiveObjects(),
            r = this._activeObject;
            return !t || t && r && i.length > 1 && - 1 === i.indexOf(t) && r !== t && !this._isSelectionKeyPressed(e) || t && !t.evented || t && !t.selectable && r && r !== t
          },
          _shouldCenterTransform: function (e, t, i) {
            var r;
            if (e) return 'scale' === t || 'scaleX' === t || 'scaleY' === t || 'resizing' === t ? r = this.centeredScaling || e.centeredScaling : 'rotate' === t && (r = this.centeredRotation || e.centeredRotation),
            r ? !i : i
          },
          _getOriginFromCorner: function (e, t) {
            var i = {
              x: e.originX,
              y: e.originY
            };
            return 'ml' === t || 'tl' === t || 'bl' === t ? i.x = 'right' : 'mr' !== t && 'tr' !== t && 'br' !== t || (i.x = 'left'),
            'tl' === t || 'mt' === t || 'tr' === t ? i.y = 'bottom' : 'bl' !== t && 'mb' !== t && 'br' !== t || (i.y = 'top'),
            i
          },
          _getActionFromCorner: function (e, t, i, r) {
            if (!t || !e) return 'drag';
            var n = r.controls[t];
            return n.getActionName(i, n, r)
          },
          _setupCurrentTransform: function (e, i, r) {
            if (i) {
              var n = this.getPointer(e),
              o = i.__corner,
              s = i.controls[o],
              a = r && o ? s.getActionHandler(e, i, s) : T.controlsUtils.dragHandler,
              l = this._getActionFromCorner(r, o, e, i),
              h = this._getOriginFromCorner(i, o),
              c = e[this.centeredKey],
              u = {
                target: i,
                action: l,
                actionHandler: a,
                corner: o,
                scaleX: i.scaleX,
                scaleY: i.scaleY,
                skewX: i.skewX,
                skewY: i.skewY,
                offsetX: n.x - i.left,
                offsetY: n.y - i.top,
                originX: h.x,
                originY: h.y,
                ex: n.x,
                ey: n.y,
                lastX: n.x,
                lastY: n.y,
                theta: t(i.angle),
                width: i.width * i.scaleX,
                shiftKey: e.shiftKey,
                altKey: c,
                original: T.util.saveObjectTransform(i)
              };
              this._shouldCenterTransform(i, l, c) && (u.originX = 'center', u.originY = 'center'),
              u.original.originX = h.x,
              u.original.originY = h.y,
              this._currentTransform = u,
              this._beforeTransform(e)
            }
          },
          setCursor: function (e) {
            this.upperCanvasEl.style.cursor = e
          },
          _drawSelection: function (e) {
            var t = this._groupSelector,
            i = new T.Point(t.ex, t.ey),
            r = T.util.transformPoint(i, this.viewportTransform),
            n = new T.Point(t.ex + t.left, t.ey + t.top),
            o = T.util.transformPoint(n, this.viewportTransform),
            s = Math.min(r.x, o.x),
            a = Math.min(r.y, o.y),
            l = Math.max(r.x, o.x),
            h = Math.max(r.y, o.y),
            c = this.selectionLineWidth / 2;
            this.selectionColor && (e.fillStyle = this.selectionColor, e.fillRect(s, a, l - s, h - a)),
            this.selectionLineWidth && this.selectionBorderColor && (e.lineWidth = this.selectionLineWidth, e.strokeStyle = this.selectionBorderColor, s += c, a += c, l -= c, h -= c, T.Object.prototype._setLineDash.call(this, e, this.selectionDashArray), e.strokeRect(s, a, l - s, h - a))
          },
          findTarget: function (e, t) {
            if (!this.skipTargetFind) {
              var r,
              n,
              o = this.getPointer(e, !0),
              s = this._activeObject,
              a = this.getActiveObjects(),
              l = i(e),
              h = a.length > 1 && !t || 1 === a.length;
              if (this.targets = [
              ], h && s._findTargetCorner(o, l)) return s;
              if (a.length > 1 && !t && s === this._searchPossibleTargets([s], o)) return s;
              if (1 === a.length && s === this._searchPossibleTargets([s], o)) {
                if (!this.preserveObjectStacking) return s;
                r = s,
                n = this.targets,
                this.targets = [
                ]
              }
              var c = this._searchPossibleTargets(this._objects, o);
              return e[this.altSelectionKey] && c && r && c !== r && (c = r, this.targets = n),
              c
            }
          },
          _checkTarget: function (e, t, i) {
            if (t && t.visible && t.evented && t.containsPoint(e)) {
              if (!this.perPixelTargetFind && !t.perPixelTargetFind || t.isEditing) return !0;
              if (!this.isTargetTransparent(t, i.x, i.y)) return !0
            }
          },
          _searchPossibleTargets: function (e, t) {
            for (var i, r, n = e.length; n--; ) {
              var o = e[n],
              s = o.group ? this._normalizePointer(o.group, t) : t;
              if (this._checkTarget(s, o, t)) {
                (i = e[n]).subTargetCheck && i instanceof T.Group && (r = this._searchPossibleTargets(i._objects, t)) && this.targets.push(r);
                break
              }
            }
            return i
          },
          restorePointerVpt: function (e) {
            return T.util.transformPoint(e, T.util.invertTransform(this.viewportTransform))
          },
          getPointer: function (t, i) {
            if (this._absolutePointer && !i) return this._absolutePointer;
            if (this._pointer && i) return this._pointer;
            var r,
            n = e(t),
            o = this.upperCanvasEl,
            s = o.getBoundingClientRect(),
            a = s.width || 0,
            l = s.height || 0;
            a && l || ('top' in s && 'bottom' in s && (l = Math.abs(s.top - s.bottom)), 'right' in s && 'left' in s && (a = Math.abs(s.right - s.left))),
            this.calcOffset(),
            n.x = n.x - this._offset.left,
            n.y = n.y - this._offset.top,
            i || (n = this.restorePointerVpt(n));
            var h = this.getRetinaScaling();
            return 1 !== h && (n.x /= h, n.y /= h),
            r = 0 === a || 0 === l ? {
              width: 1,
              height: 1
            }
             : {
              width: o.width / a,
              height: o.height / l
            },
            {
              x: n.x * r.width,
              y: n.y * r.height
            }
          },
          _createUpperCanvas: function () {
            var e = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ''),
            t = this.lowerCanvasEl,
            i = this.upperCanvasEl;
            i ? i.className = '' : (i = this._createCanvasElement(), this.upperCanvasEl = i),
            T.util.addClass(i, 'upper-canvas ' + e),
            this.wrapperEl.appendChild(i),
            this._copyCanvasStyle(t, i),
            this._applyCanvasStyle(i),
            this.contextTop = i.getContext('2d')
          },
          getTopContext: function () {
            return this.contextTop
          },
          _createCacheCanvas: function () {
            this.cacheCanvasEl = this._createCanvasElement(),
            this.cacheCanvasEl.setAttribute('width', this.width),
            this.cacheCanvasEl.setAttribute('height', this.height),
            this.contextCache = this.cacheCanvasEl.getContext('2d')
          },
          _initWrapperElement: function () {
            this.wrapperEl = T.util.wrapElement(this.lowerCanvasEl, 'div', {
              class : this.containerClass
            }),
            T.util.setStyle(this.wrapperEl, {
              width: this.width + 'px',
              height: this.height + 'px',
              position: 'relative'
            }),
            T.util.makeElementUnselectable(this.wrapperEl)
          },
          _applyCanvasStyle: function (e) {
            var t = this.width || e.width,
            i = this.height || e.height;
            T.util.setStyle(e, {
              position: 'absolute',
              width: t + 'px',
              height: i + 'px',
              left: 0,
              top: 0,
              'touch-action': this.allowTouchScrolling ? 'manipulation' : 'none',
              '-ms-touch-action': this.allowTouchScrolling ? 'manipulation' : 'none'
            }),
            e.width = t,
            e.height = i,
            T.util.makeElementUnselectable(e)
          },
          _copyCanvasStyle: function (e, t) {
            t.style.cssText = e.style.cssText
          },
          getSelectionContext: function () {
            return this.contextTop
          },
          getSelectionElement: function () {
            return this.upperCanvasEl
          },
          getActiveObject: function () {
            return this._activeObject
          },
          getActiveObjects: function () {
            var e = this._activeObject;
            return e ? 'activeSelection' === e.type && e._objects ? e._objects.slice(0) : [
              e
            ] : [
            ]
          },
          _onObjectRemoved: function (e) {
            e === this._activeObject && (this.fire('before:selection:cleared', {
              target: e
            }), this._discardActiveObject(), this.fire('selection:cleared', {
              target: e
            }), e.fire('deselected')),
            e === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = [
            ]),
            this.callSuper('_onObjectRemoved', e)
          },
          _fireSelectionEvents: function (e, t) {
            var i = !1,
            r = this.getActiveObjects(),
            n = [
            ],
            o = [
            ];
            e.forEach((function (e) {
              - 1 === r.indexOf(e) && (i = !0, e.fire('deselected', {
                e: t,
                target: e
              }), o.push(e))
            })),
            r.forEach((function (r) {
              - 1 === e.indexOf(r) && (i = !0, r.fire('selected', {
                e: t,
                target: r
              }), n.push(r))
            })),
            e.length > 0 && r.length > 0 ? i && this.fire('selection:updated', {
              e: t,
              selected: n,
              deselected: o
            }) : r.length > 0 ? this.fire('selection:created', {
              e: t,
              selected: n
            }) : e.length > 0 && this.fire('selection:cleared', {
              e: t,
              deselected: o
            })
          },
          setActiveObject: function (e, t) {
            var i = this.getActiveObjects();
            return this._setActiveObject(e, t),
            this._fireSelectionEvents(i, t),
            this
          },
          _setActiveObject: function (e, t) {
            return this._activeObject !== e && !!this._discardActiveObject(t, e) && !e.onSelect({
              e: t
            }) && (this._activeObject = e, !0)
          },
          _discardActiveObject: function (e, t) {
            var i = this._activeObject;
            if (i) {
              if (i.onDeselect({
                e,
                object: t
              })) return !1;
              this._activeObject = null
            }
            return !0
          },
          discardActiveObject: function (e) {
            var t = this.getActiveObjects(),
            i = this.getActiveObject();
            return t.length && this.fire('before:selection:cleared', {
              target: i,
              e
            }),
            this._discardActiveObject(e),
            this._fireSelectionEvents(t, e),
            this
          },
          dispose: function () {
            var e = this.wrapperEl;
            return this.removeListeners(),
            e.removeChild(this.upperCanvasEl),
            e.removeChild(this.lowerCanvasEl),
            this.contextCache = null,
            this.contextTop = null,
            [
              'upperCanvasEl',
              'cacheCanvasEl'
            ].forEach(function (e) {
              T.util.cleanUpJsdomNode(this[e]),
              this[e] = void 0
            }.bind(this)),
            e.parentNode && e.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl),
            delete this.wrapperEl,
            T.StaticCanvas.prototype.dispose.call(this),
            this
          },
          clear: function () {
            return this.discardActiveObject(),
            this.clearContext(this.contextTop),
            this.callSuper('clear')
          },
          drawControls: function (e) {
            var t = this._activeObject;
            t && t._renderControls(e)
          },
          _toObject: function (e, t, i) {
            var r = this._realizeGroupTransformOnObject(e),
            n = this.callSuper('_toObject', e, t, i);
            return this._unwindGroupTransformOnObject(e, r),
            n
          },
          _realizeGroupTransformOnObject: function (e) {
            if (e.group && 'activeSelection' === e.group.type && this._activeObject === e.group) {
              var t = {
              };
              return ['angle',
              'flipX',
              'flipY',
              'left',
              'scaleX',
              'scaleY',
              'skewX',
              'skewY',
              'top'].forEach((function (i) {
                t[i] = e[i]
              })),
              T.util.addTransformToObject(e, this._activeObject.calcOwnMatrix()),
              t
            }
            return null
          },
          _unwindGroupTransformOnObject: function (e, t) {
            t && e.set(t)
          },
          _setSVGObject: function (e, t, i) {
            var r = this._realizeGroupTransformOnObject(t);
            this.callSuper('_setSVGObject', e, t, i),
            this._unwindGroupTransformOnObject(t, r)
          },
          setViewportTransform: function (e) {
            this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(),
            T.StaticCanvas.prototype.setViewportTransform.call(this, e)
          }
        }), T.StaticCanvas) 'prototype' !== r && (T.Canvas[r] = T.StaticCanvas[r])
      }(),
      function () {
        var e = T.util.addListener,
        t = T.util.removeListener,
        i = {
          passive: !1
        };
        function r(e, t) {
          return e.button && e.button === t - 1
        }
        T.util.object.extend(T.Canvas.prototype, {
          mainTouchId: null,
          _initEventListeners: function () {
            this.removeListeners(),
            this._bindEvents(),
            this.addOrRemove(e, 'add')
          },
          _getEventPrefix: function () {
            return this.enablePointerEvents ? 'pointer' : 'mouse'
          },
          addOrRemove: function (e, t) {
            var r = this.upperCanvasEl,
            n = this._getEventPrefix();
            e(T.window, 'resize', this._onResize),
            e(r, n + 'down', this._onMouseDown),
            e(r, n + 'move', this._onMouseMove, i),
            e(r, n + 'out', this._onMouseOut),
            e(r, n + 'enter', this._onMouseEnter),
            e(r, 'wheel', this._onMouseWheel),
            e(r, 'contextmenu', this._onContextMenu),
            e(r, 'dblclick', this._onDoubleClick),
            e(r, 'dragover', this._onDragOver),
            e(r, 'dragenter', this._onDragEnter),
            e(r, 'dragleave', this._onDragLeave),
            e(r, 'drop', this._onDrop),
            this.enablePointerEvents || e(r, 'touchstart', this._onTouchStart, i),
            'undefined' != typeof eventjs && t in eventjs && (eventjs[t](r, 'gesture', this._onGesture), eventjs[t](r, 'drag', this._onDrag), eventjs[t](r, 'orientation', this._onOrientationChange), eventjs[t](r, 'shake', this._onShake), eventjs[t](r, 'longpress', this._onLongPress))
          },
          removeListeners: function () {
            this.addOrRemove(t, 'remove');
            var e = this._getEventPrefix();
            t(T.document, e + 'up', this._onMouseUp),
            t(T.document, 'touchend', this._onTouchEnd, i),
            t(T.document, e + 'move', this._onMouseMove, i),
            t(T.document, 'touchmove', this._onMouseMove, i)
          },
          _bindEvents: function () {
            this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, 'dragenter'), this._onDragLeave = this._simpleEventHandler.bind(this, 'dragleave'), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0)
          },
          _onGesture: function (e, t) {
            this.__onTransformGesture && this.__onTransformGesture(e, t)
          },
          _onDrag: function (e, t) {
            this.__onDrag && this.__onDrag(e, t)
          },
          _onMouseWheel: function (e) {
            this.__onMouseWheel(e)
          },
          _onMouseOut: function (e) {
            var t = this._hoveredTarget;
            this.fire('mouse:out', {
              target: t,
              e
            }),
            this._hoveredTarget = null,
            t && t.fire('mouseout', {
              e
            });
            var i = this;
            this._hoveredTargets.forEach((function (r) {
              i.fire('mouse:out', {
                target: t,
                e
              }),
              r && t.fire('mouseout', {
                e
              })
            })),
            this._hoveredTargets = [
            ],
            this._iTextInstances && this._iTextInstances.forEach((function (e) {
              e.isEditing && e.hiddenTextarea.focus()
            }))
          },
          _onMouseEnter: function (e) {
            this._currentTransform || this.findTarget(e) || (this.fire('mouse:over', {
              target: null,
              e
            }), this._hoveredTarget = null, this._hoveredTargets = [
            ])
          },
          _onOrientationChange: function (e, t) {
            this.__onOrientationChange && this.__onOrientationChange(e, t)
          },
          _onShake: function (e, t) {
            this.__onShake && this.__onShake(e, t)
          },
          _onLongPress: function (e, t) {
            this.__onLongPress && this.__onLongPress(e, t)
          },
          _onDragOver: function (e) {
            e.preventDefault();
            var t = this._simpleEventHandler('dragover', e);
            this._fireEnterLeaveEvents(t, e)
          },
          _onDrop: function (e) {
            return this._simpleEventHandler('drop:before', e),
            this._simpleEventHandler('drop', e)
          },
          _onContextMenu: function (e) {
            return this.stopContextMenu && (e.stopPropagation(), e.preventDefault()),
            !1
          },
          _onDoubleClick: function (e) {
            this._cacheTransformEventData(e),
            this._handleEvent(e, 'dblclick'),
            this._resetTransformEventData(e)
          },
          getPointerId: function (e) {
            var t = e.changedTouches;
            return t ? t[0] && t[0].identifier : this.enablePointerEvents ? e.pointerId : - 1
          },
          _isMainEvent: function (e) {
            return !0 === e.isPrimary || !1 !== e.isPrimary && ('touchend' === e.type && 0 === e.touches.length || !e.changedTouches || e.changedTouches[0].identifier === this.mainTouchId)
          },
          _onTouchStart: function (r) {
            r.preventDefault(),
            null === this.mainTouchId && (this.mainTouchId = this.getPointerId(r)),
            this.__onMouseDown(r),
            this._resetTransformEventData();
            var n = this.upperCanvasEl,
            o = this._getEventPrefix();
            e(T.document, 'touchend', this._onTouchEnd, i),
            e(T.document, 'touchmove', this._onMouseMove, i),
            t(n, o + 'down', this._onMouseDown)
          },
          _onMouseDown: function (r) {
            this.__onMouseDown(r),
            this._resetTransformEventData();
            var n = this.upperCanvasEl,
            o = this._getEventPrefix();
            t(n, o + 'move', this._onMouseMove, i),
            e(T.document, o + 'up', this._onMouseUp),
            e(T.document, o + 'move', this._onMouseMove, i)
          },
          _onTouchEnd: function (r) {
            if (!(r.touches.length > 0)) {
              this.__onMouseUp(r),
              this._resetTransformEventData(),
              this.mainTouchId = null;
              var n = this._getEventPrefix();
              t(T.document, 'touchend', this._onTouchEnd, i),
              t(T.document, 'touchmove', this._onMouseMove, i);
              var o = this;
              this._willAddMouseDown && clearTimeout(this._willAddMouseDown),
              this._willAddMouseDown = setTimeout((function () {
                e(o.upperCanvasEl, n + 'down', o._onMouseDown),
                o._willAddMouseDown = 0
              }), 400)
            }
          },
          _onMouseUp: function (r) {
            this.__onMouseUp(r),
            this._resetTransformEventData();
            var n = this.upperCanvasEl,
            o = this._getEventPrefix();
            this._isMainEvent(r) && (t(T.document, o + 'up', this._onMouseUp), t(T.document, o + 'move', this._onMouseMove, i), e(n, o + 'move', this._onMouseMove, i))
          },
          _onMouseMove: function (e) {
            !this.allowTouchScrolling && e.preventDefault && e.preventDefault(),
            this.__onMouseMove(e)
          },
          _onResize: function () {
            this.calcOffset()
          },
          _shouldRender: function (e) {
            var t = this._activeObject;
            return !!(!!t != !!e || t && e && t !== e) || (t && t.isEditing, !1)
          },
          __onMouseUp: function (e) {
            var t,
            i = this._currentTransform,
            n = this._groupSelector,
            o = !1,
            s = !n || 0 === n.left && 0 === n.top;
            if (this._cacheTransformEventData(e), t = this._target, this._handleEvent(e, 'up:before'), r(e, 3)) this.fireRightClick && this._handleEvent(e, 'up', 3, s);
             else {
              if (r(e, 2)) return this.fireMiddleClick && this._handleEvent(e, 'up', 2, s),
              void this._resetTransformEventData();
              if (this.isDrawingMode && this._isCurrentlyDrawing) this._onMouseUpInDrawingMode(e);
               else if (this._isMainEvent(e)) {
                if (i && (this._finalizeCurrentTransform(e), o = i.actionPerformed), !s) {
                  var a = t === this._activeObject;
                  this._maybeGroupObjects(e),
                  o || (o = this._shouldRender(t) || !a && t === this._activeObject)
                }
                var l,
                h;
                if (t) {
                  if (l = t._findTargetCorner(this.getPointer(e, !0), T.util.isTouchEvent(e)), t.selectable && t !== this._activeObject && 'up' === t.activeOn) this.setActiveObject(t, e),
                  o = !0;
                   else {
                    var c = t.controls[l],
                    u = c && c.getMouseUpHandler(e, t, c);
                    u && u(e, i, (h = this.getPointer(e)).x, h.y)
                  }
                  t.isMoving = !1
                }
                if (i && (i.target !== t || i.corner !== l)) {
                  var d = i.target && i.target.controls[i.corner],
                  f = d && d.getMouseUpHandler(e, t, c);
                  h = h || this.getPointer(e),
                  f && f(e, i, h.x, h.y)
                }
                this._setCursorFromEvent(e, t),
                this._handleEvent(e, 'up', 1, s),
                this._groupSelector = null,
                this._currentTransform = null,
                t && (t.__corner = 0),
                o ? this.requestRenderAll() : s || this.renderTop()
              }
            }
          },
          _simpleEventHandler: function (e, t) {
            var i = this.findTarget(t),
            r = this.targets,
            n = {
              e: t,
              target: i,
              subTargets: r
            };
            if (this.fire(e, n), i && i.fire(e, n), !r) return i;
            for (var o = 0; o < r.length; o++) r[o].fire(e, n);
            return i
          },
          _handleEvent: function (e, t, i, r) {
            var n = this._target,
            o = this.targets || [
            ],
            s = {
              e,
              target: n,
              subTargets: o,
              button: i || 1,
              isClick: r || !1,
              pointer: this._pointer,
              absolutePointer: this._absolutePointer,
              transform: this._currentTransform
            };
            'up' === t && (s.currentTarget = this.findTarget(e), s.currentSubTargets = this.targets),
            this.fire('mouse:' + t, s),
            n && n.fire('mouse' + t, s);
            for (var a = 0; a < o.length; a++) o[a].fire('mouse' + t, s)
          },
          _finalizeCurrentTransform: function (e) {
            var t = this._currentTransform,
            i = t.target,
            r = {
              e,
              target: i,
              transform: t,
              action: t.action
            };
            i._scaling && (i._scaling = !1),
            i.setCoords(),
            (t.actionPerformed || this.stateful && i.hasStateChanged()) && this._fire('modified', r)
          },
          _onMouseDownInDrawingMode: function (e) {
            this._isCurrentlyDrawing = !0,
            this.getActiveObject() && this.discardActiveObject(e).requestRenderAll();
            var t = this.getPointer(e);
            this.freeDrawingBrush.onMouseDown(t, {
              e,
              pointer: t
            }),
            this._handleEvent(e, 'down')
          },
          _onMouseMoveInDrawingMode: function (e) {
            if (this._isCurrentlyDrawing) {
              var t = this.getPointer(e);
              this.freeDrawingBrush.onMouseMove(t, {
                e,
                pointer: t
              })
            }
            this.setCursor(this.freeDrawingCursor),
            this._handleEvent(e, 'move')
          },
          _onMouseUpInDrawingMode: function (e) {
            var t = this.getPointer(e);
            this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({
              e,
              pointer: t
            }),
            this._handleEvent(e, 'up')
          },
          __onMouseDown: function (e) {
            this._cacheTransformEventData(e),
            this._handleEvent(e, 'down:before');
            var t = this._target;
            if (r(e, 3)) this.fireRightClick && this._handleEvent(e, 'down', 3);
             else if (r(e, 2)) this.fireMiddleClick && this._handleEvent(e, 'down', 2);
             else if (this.isDrawingMode) this._onMouseDownInDrawingMode(e);
             else if (this._isMainEvent(e) && !this._currentTransform) {
              var i = this._pointer;
              this._previousPointer = i;
              var n = this._shouldRender(t),
              o = this._shouldGroup(e, t);
              if (this._shouldClearSelection(e, t) ? this.discardActiveObject(e) : o && (this._handleGrouping(e, t), t = this._activeObject), !this.selection || t && (t.selectable || t.isEditing || t === this._activeObject) || (this._groupSelector = {
                ex: this._absolutePointer.x,
                ey: this._absolutePointer.y,
                top: 0,
                left: 0
              }), t) {
                var s = t === this._activeObject;
                t.selectable && 'down' === t.activeOn && this.setActiveObject(t, e);
                var a = t._findTargetCorner(this.getPointer(e, !0), T.util.isTouchEvent(e));
                if (t.__corner = a, t === this._activeObject && (a || !o)) {
                  this._setupCurrentTransform(e, t, s);
                  var l = t.controls[a],
                  h = (i = this.getPointer(e), l && l.getMouseDownHandler(e, t, l));
                  h && h(e, this._currentTransform, i.x, i.y)
                }
              }
              this._handleEvent(e, 'down'),
              (n || o) && this.requestRenderAll()
            }
          },
          _resetTransformEventData: function () {
            this._target = null,
            this._pointer = null,
            this._absolutePointer = null
          },
          _cacheTransformEventData: function (e) {
            this._resetTransformEventData(),
            this._pointer = this.getPointer(e, !0),
            this._absolutePointer = this.restorePointerVpt(this._pointer),
            this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(e) || null
          },
          _beforeTransform: function (e) {
            var t = this._currentTransform;
            this.stateful && t.target.saveState(),
            this.fire('before:transform', {
              e,
              transform: t
            })
          },
          __onMouseMove: function (e) {
            var t,
            i;
            if (this._handleEvent(e, 'move:before'), this._cacheTransformEventData(e), this.isDrawingMode) this._onMouseMoveInDrawingMode(e);
             else if (this._isMainEvent(e)) {
              var r = this._groupSelector;
              r ? (i = this._absolutePointer, r.left = i.x - r.ex, r.top = i.y - r.ey, this.renderTop()) : this._currentTransform ? this._transformObject(e) : (t = this.findTarget(e) || null, this._setCursorFromEvent(e, t), this._fireOverOutEvents(t, e)),
              this._handleEvent(e, 'move'),
              this._resetTransformEventData()
            }
          },
          _fireOverOutEvents: function (e, t) {
            var i = this._hoveredTarget,
            r = this._hoveredTargets,
            n = this.targets,
            o = Math.max(r.length, n.length);
            this.fireSyntheticInOutEvents(e, t, {
              oldTarget: i,
              evtOut: 'mouseout',
              canvasEvtOut: 'mouse:out',
              evtIn: 'mouseover',
              canvasEvtIn: 'mouse:over'
            });
            for (var s = 0; s < o; s++) this.fireSyntheticInOutEvents(n[s], t, {
              oldTarget: r[s],
              evtOut: 'mouseout',
              evtIn: 'mouseover'
            });
            this._hoveredTarget = e,
            this._hoveredTargets = this.targets.concat()
          },
          _fireEnterLeaveEvents: function (e, t) {
            var i = this._draggedoverTarget,
            r = this._hoveredTargets,
            n = this.targets,
            o = Math.max(r.length, n.length);
            this.fireSyntheticInOutEvents(e, t, {
              oldTarget: i,
              evtOut: 'dragleave',
              evtIn: 'dragenter'
            });
            for (var s = 0; s < o; s++) this.fireSyntheticInOutEvents(n[s], t, {
              oldTarget: r[s],
              evtOut: 'dragleave',
              evtIn: 'dragenter'
            });
            this._draggedoverTarget = e
          },
          fireSyntheticInOutEvents: function (e, t, i) {
            var r,
            n,
            o,
            s = i.oldTarget,
            a = s !== e,
            l = i.canvasEvtIn,
            h = i.canvasEvtOut;
            a && (r = {
              e: t,
              target: e,
              previousTarget: s
            }, n = {
              e: t,
              target: s,
              nextTarget: e
            }),
            o = e && a,
            s && a && (h && this.fire(h, n), s.fire(i.evtOut, n)),
            o && (l && this.fire(l, r), e.fire(i.evtIn, r))
          },
          __onMouseWheel: function (e) {
            this._cacheTransformEventData(e),
            this._handleEvent(e, 'wheel'),
            this._resetTransformEventData()
          },
          _transformObject: function (e) {
            var t = this.getPointer(e),
            i = this._currentTransform;
            i.reset = !1,
            i.shiftKey = e.shiftKey,
            i.altKey = e[this.centeredKey],
            this._performTransformAction(e, i, t),
            i.actionPerformed && this.requestRenderAll()
          },
          _performTransformAction: function (e, t, i) {
            var r = i.x,
            n = i.y,
            o = t.action,
            s = !1,
            a = t.actionHandler;
            a && (s = a(e, t, r, n)),
            'drag' === o && s && (t.target.isMoving = !0, this.setCursor(t.target.moveCursor || this.moveCursor)),
            t.actionPerformed = t.actionPerformed || s
          },
          _fire: T.controlsUtils.fireEvent,
          _setCursorFromEvent: function (e, t) {
            if (!t) return this.setCursor(this.defaultCursor),
            !1;
            var i = t.hoverCursor || this.hoverCursor,
            r = this._activeObject && 'activeSelection' === this._activeObject.type ? this._activeObject : null,
            n = (!r || !r.contains(t)) && t._findTargetCorner(this.getPointer(e, !0));
            n ? this.setCursor(this.getCornerCursor(n, t, e)) : (t.subTargetCheck && this.targets.concat().reverse().map((function (e) {
              i = e.hoverCursor || i
            })), this.setCursor(i))
          },
          getCornerCursor: function (e, t, i) {
            var r = t.controls[e];
            return r.cursorStyleHandler(i, r, t)
          }
        })
      }(),
      v = Math.min,
      y = Math.max,
      T.util.object.extend(T.Canvas.prototype, {
        _shouldGroup: function (e, t) {
          var i = this._activeObject;
          return i && this._isSelectionKeyPressed(e) && t && t.selectable && this.selection && (i !== t || 'activeSelection' === i.type) && !t.onSelect({
            e
          })
        },
        _handleGrouping: function (e, t) {
          var i = this._activeObject;
          i.__corner || (t !== i || (t = this.findTarget(e, !0)) && t.selectable) && (i && 'activeSelection' === i.type ? this._updateActiveSelection(t, e) : this._createActiveSelection(t, e))
        },
        _updateActiveSelection: function (e, t) {
          var i = this._activeObject,
          r = i._objects.slice(0);
          i.contains(e) ? (i.removeWithUpdate(e), this._hoveredTarget = e, this._hoveredTargets = this.targets.concat(), 1 === i.size() && this._setActiveObject(i.item(0), t)) : (i.addWithUpdate(e), this._hoveredTarget = i, this._hoveredTargets = this.targets.concat()),
          this._fireSelectionEvents(r, t)
        },
        _createActiveSelection: function (e, t) {
          var i = this.getActiveObjects(),
          r = this._createGroup(e);
          this._hoveredTarget = r,
          this._setActiveObject(r, t),
          this._fireSelectionEvents(i, t)
        },
        _createGroup: function (e) {
          var t = this._objects,
          i = t.indexOf(this._activeObject) < t.indexOf(e) ? [
            this._activeObject,
            e
          ] : [
            e,
            this._activeObject
          ];
          return this._activeObject.isEditing && this._activeObject.exitEditing(),
          new T.ActiveSelection(i, {
            canvas: this
          })
        },
        _groupSelectedObjects: function (e) {
          var t,
          i = this._collectObjects(e);
          1 === i.length ? this.setActiveObject(i[0], e) : i.length > 1 && (t = new T.ActiveSelection(i.reverse(), {
            canvas: this
          }), this.setActiveObject(t, e))
        },
        _collectObjects: function (e) {
          for (var t, i = [
          ], r = this._groupSelector.ex, n = this._groupSelector.ey, o = r + this._groupSelector.left, s = n + this._groupSelector.top, a = new T.Point(v(r, o), v(n, s)), l = new T.Point(y(r, o), y(n, s)), h = !this.selectionFullyContained, c = r === o && n === s, u = this._objects.length; u-- && !((t = this._objects[u]) && t.selectable && t.visible && (h && t.intersectsWithRect(a, l, !0) || t.isContainedWithinRect(a, l, !0) || h && t.containsPoint(a, null, !0) || h && t.containsPoint(l, null, !0)) && (i.push(t), c)); );
          return i.length > 1 && (i = i.filter((function (t) {
            return !t.onSelect({
              e
            })
          }))),
          i
        },
        _maybeGroupObjects: function (e) {
          this.selection && this._groupSelector && this._groupSelectedObjects(e),
          this.setCursor(this.defaultCursor),
          this._groupSelector = null
        }
      }),
      T.util.object.extend(T.StaticCanvas.prototype, {
        toDataURL: function (e) {
          e || (e = {
          });
          var t = e.format || 'png',
          i = e.quality || 1,
          r = (e.multiplier || 1) * (e.enableRetinaScaling ? this.getRetinaScaling() : 1),
          n = this.toCanvasElement(r, e);
          return T.util.toDataURL(n, t, i)
        },
        toCanvasElement: function (e, t) {
          e = e || 1;
          var i = ((t = t || {
          }).width || this.width) * e,
          r = (t.height || this.height) * e,
          n = this.getZoom(),
          o = this.width,
          s = this.height,
          a = n * e,
          l = this.viewportTransform,
          h = (l[4] - (t.left || 0)) * e,
          c = (l[5] - (t.top || 0)) * e,
          u = this.interactive,
          d = [
            a,
            0,
            0,
            a,
            h,
            c
          ],
          f = this.enableRetinaScaling,
          g = T.util.createCanvasElement(),
          _ = this.contextTop;
          return g.width = i,
          g.height = r,
          this.contextTop = null,
          this.enableRetinaScaling = !1,
          this.interactive = !1,
          this.viewportTransform = d,
          this.width = i,
          this.height = r,
          this.calcViewportBoundaries(),
          this.renderCanvas(g.getContext('2d'), this._objects),
          this.viewportTransform = l,
          this.width = o,
          this.height = s,
          this.calcViewportBoundaries(),
          this.interactive = u,
          this.enableRetinaScaling = f,
          this.contextTop = _,
          g
        }
      }),
      T.util.object.extend(T.StaticCanvas.prototype, {
        loadFromJSON: function (e, t, i) {
          if (e) {
            var r = 'string' == typeof e ? JSON.parse(e) : T.util.object.clone(e),
            n = this,
            o = r.clipPath,
            s = this.renderOnAddRemove;
            return this.renderOnAddRemove = !1,
            delete r.clipPath,
            this._enlivenObjects(r.objects, (function (e) {
              n.clear(),
              n._setBgOverlay(r, (function () {
                o ? n._enlivenObjects([o], (function (i) {
                  n.clipPath = i[0],
                  n.__setupCanvas.call(n, r, e, s, t)
                })) : n.__setupCanvas.call(n, r, e, s, t)
              }))
            }), i),
            this
          }
        },
        __setupCanvas: function (e, t, i, r) {
          var n = this;
          t.forEach((function (e, t) {
            n.insertAt(e, t)
          })),
          this.renderOnAddRemove = i,
          delete e.objects,
          delete e.backgroundImage,
          delete e.overlayImage,
          delete e.background,
          delete e.overlay,
          this._setOptions(e),
          this.renderAll(),
          r && r()
        },
        _setBgOverlay: function (e, t) {
          var i = {
            backgroundColor: !1,
            overlayColor: !1,
            backgroundImage: !1,
            overlayImage: !1
          };
          if (e.backgroundImage || e.overlayImage || e.background || e.overlay) {
            var r = function () {
              i.backgroundImage && i.overlayImage && i.backgroundColor && i.overlayColor && t && t()
            };
            this.__setBgOverlay('backgroundImage', e.backgroundImage, i, r),
            this.__setBgOverlay('overlayImage', e.overlayImage, i, r),
            this.__setBgOverlay('backgroundColor', e.background, i, r),
            this.__setBgOverlay('overlayColor', e.overlay, i, r)
          } else t && t()
        },
        __setBgOverlay: function (e, t, i, r) {
          var n = this;
          if (!t) return i[e] = !0,
          void (r && r());
          'backgroundImage' === e || 'overlayImage' === e ? T.util.enlivenObjects([t], (function (t) {
            n[e] = t[0],
            i[e] = !0,
            r && r()
          })) : this['set' + T.util.string.capitalize(e, !0)](t, (function () {
            i[e] = !0,
            r && r()
          }))
        },
        _enlivenObjects: function (e, t, i) {
          e && 0 !== e.length ? T.util.enlivenObjects(e, (function (e) {
            t && t(e)
          }), null, i) : t && t([])
        },
        _toDataURL: function (e, t) {
          this.clone((function (i) {
            t(i.toDataURL(e))
          }))
        },
        _toDataURLWithMultiplier: function (e, t, i) {
          this.clone((function (r) {
            i(r.toDataURLWithMultiplier(e, t))
          }))
        },
        clone: function (e, t) {
          var i = JSON.stringify(this.toJSON(t));
          this.cloneWithoutData((function (t) {
            t.loadFromJSON(i, (function () {
              e && e(t)
            }))
          }))
        },
        cloneWithoutData: function (e) {
          var t = T.util.createCanvasElement();
          t.width = this.width,
          t.height = this.height;
          var i = new T.Canvas(t);
          this.backgroundImage ? (i.setBackgroundImage(this.backgroundImage.src, (function () {
            i.renderAll(),
            e && e(i)
          })), i.backgroundImageOpacity = this.backgroundImageOpacity, i.backgroundImageStretch = this.backgroundImageStretch) : e && e(i)
        }
      }),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.util.object.clone,
        n = t.util.toFixed,
        o = t.util.string.capitalize,
        s = t.util.degreesToRadians,
        a = !t.isLikelyNode;
        t.Object || (t.Object = t.util.createClass(t.CommonMethods, {
          type: 'object',
          originX: 'left',
          originY: 'top',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          scaleX: 1,
          scaleY: 1,
          flipX: !1,
          flipY: !1,
          opacity: 1,
          angle: 0,
          skewX: 0,
          skewY: 0,
          cornerSize: 13,
          touchCornerSize: 24,
          transparentCorners: !0,
          hoverCursor: null,
          moveCursor: null,
          padding: 0,
          borderColor: 'rgb(178,204,255)',
          borderDashArray: null,
          cornerColor: 'rgb(178,204,255)',
          cornerStrokeColor: null,
          cornerStyle: 'rect',
          cornerDashArray: null,
          centeredScaling: !1,
          centeredRotation: !0,
          fill: 'rgb(0,0,0)',
          fillRule: 'nonzero',
          globalCompositeOperation: 'source-over',
          backgroundColor: '',
          selectionBackgroundColor: '',
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeDashOffset: 0,
          strokeLineCap: 'butt',
          strokeLineJoin: 'miter',
          strokeMiterLimit: 4,
          shadow: null,
          borderOpacityWhenMoving: 0.4,
          borderScaleFactor: 1,
          minScaleLimit: 0,
          selectable: !0,
          evented: !0,
          visible: !0,
          hasControls: !0,
          hasBorders: !0,
          perPixelTargetFind: !1,
          includeDefaultValues: !0,
          lockMovementX: !1,
          lockMovementY: !1,
          lockRotation: !1,
          lockScalingX: !1,
          lockScalingY: !1,
          lockSkewingX: !1,
          lockSkewingY: !1,
          lockScalingFlip: !1,
          excludeFromExport: !1,
          objectCaching: a,
          statefullCache: !1,
          noScaleCache: !0,
          strokeUniform: !1,
          dirty: !0,
          __corner: 0,
          paintFirst: 'fill',
          activeOn: 'down',
          stateProperties: 'top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform'.split(' '),
          cacheProperties: 'fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath'.split(' '),
          colorProperties: 'fill stroke backgroundColor'.split(' '),
          clipPath: void 0,
          inverted: !1,
          absolutePositioned: !1,
          initialize: function (e) {
            e && this.setOptions(e)
          },
          _createCacheCanvas: function () {
            this._cacheProperties = {
            },
            this._cacheCanvas = t.util.createCanvasElement(),
            this._cacheContext = this._cacheCanvas.getContext('2d'),
            this._updateCacheCanvas(),
            this.dirty = !0
          },
          _limitCacheSize: function (e) {
            var i = t.perfLimitSizeTotal,
            r = e.width,
            n = e.height,
            o = t.maxCacheSideLimit,
            s = t.minCacheSideLimit;
            if (r <= o && n <= o && r * n <= i) return r < s && (e.width = s),
            n < s && (e.height = s),
            e;
            var a = r / n,
            l = t.util.limitDimsByArea(a, i),
            h = t.util.capValue,
            c = h(s, l.x, o),
            u = h(s, l.y, o);
            return r > c && (e.zoomX /= r / c, e.width = c, e.capped = !0),
            n > u && (e.zoomY /= n / u, e.height = u, e.capped = !0),
            e
          },
          _getCacheCanvasDimensions: function () {
            var e = this.getTotalObjectScaling(),
            t = this._getTransformedDimensions(0, 0),
            i = t.x * e.scaleX / this.scaleX,
            r = t.y * e.scaleY / this.scaleY;
            return {
              width: i + 2,
              height: r + 2,
              zoomX: e.scaleX,
              zoomY: e.scaleY,
              x: i,
              y: r
            }
          },
          _updateCacheCanvas: function () {
            var e = this.canvas;
            if (this.noScaleCache && e && e._currentTransform) {
              var i = e._currentTransform.target,
              r = e._currentTransform.action;
              if (this === i && r.slice && 'scale' === r.slice(0, 5)) return !1
            }
            var n,
            o,
            s = this._cacheCanvas,
            a = this._limitCacheSize(this._getCacheCanvasDimensions()),
            l = t.minCacheSideLimit,
            h = a.width,
            c = a.height,
            u = a.zoomX,
            d = a.zoomY,
            f = h !== this.cacheWidth || c !== this.cacheHeight,
            g = this.zoomX !== u || this.zoomY !== d,
            _ = f || g,
            p = 0,
            m = 0,
            v = !1;
            if (f) {
              var y = this._cacheCanvas.width,
              S = this._cacheCanvas.height,
              b = h > y || c > S;
              v = b || (h < 0.9 * y || c < 0.9 * S) && y > l && S > l,
              b && !a.capped && (h > l || c > l) && (p = 0.1 * h, m = 0.1 * c)
            }
            return this instanceof t.Text && this.path && (_ = !0, v = !0, p += this.getHeightOfLine(0) * this.zoomX, m += this.getHeightOfLine(0) * this.zoomY),
            !!_ && (v ? (s.width = Math.ceil(h + p), s.height = Math.ceil(c + m)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, s.width, s.height)), n = a.x / 2, o = a.y / 2, this.cacheTranslationX = Math.round(s.width / 2 - n) + n, this.cacheTranslationY = Math.round(s.height / 2 - o) + o, this.cacheWidth = h, this.cacheHeight = c, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(u, d), this.zoomX = u, this.zoomY = d, !0)
          },
          setOptions: function (e) {
            this._setOptions(e),
            this._initGradient(e.fill, 'fill'),
            this._initGradient(e.stroke, 'stroke'),
            this._initPattern(e.fill, 'fill'),
            this._initPattern(e.stroke, 'stroke')
          },
          transform: function (e) {
            var t = this.group && !this.group._transformDone || this.group && this.canvas && e === this.canvas.contextTop,
            i = this.calcTransformMatrix(!t);
            e.transform(i[0], i[1], i[2], i[3], i[4], i[5])
          },
          toObject: function (e) {
            var i = t.Object.NUM_FRACTION_DIGITS,
            r = {
              type: this.type,
              version: t.version,
              originX: this.originX,
              originY: this.originY,
              left: n(this.left, i),
              top: n(this.top, i),
              width: n(this.width, i),
              height: n(this.height, i),
              fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
              stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
              strokeWidth: n(this.strokeWidth, i),
              strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
              strokeLineCap: this.strokeLineCap,
              strokeDashOffset: this.strokeDashOffset,
              strokeLineJoin: this.strokeLineJoin,
              strokeUniform: this.strokeUniform,
              strokeMiterLimit: n(this.strokeMiterLimit, i),
              scaleX: n(this.scaleX, i),
              scaleY: n(this.scaleY, i),
              angle: n(this.angle, i),
              flipX: this.flipX,
              flipY: this.flipY,
              opacity: n(this.opacity, i),
              shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
              visible: this.visible,
              backgroundColor: this.backgroundColor,
              fillRule: this.fillRule,
              paintFirst: this.paintFirst,
              globalCompositeOperation: this.globalCompositeOperation,
              skewX: n(this.skewX, i),
              skewY: n(this.skewY, i)
            };
            return this.clipPath && !this.clipPath.excludeFromExport && (r.clipPath = this.clipPath.toObject(e), r.clipPath.inverted = this.clipPath.inverted, r.clipPath.absolutePositioned = this.clipPath.absolutePositioned),
            t.util.populateWithProperties(this, r, e),
            this.includeDefaultValues || (r = this._removeDefaultValues(r)),
            r
          },
          toDatalessObject: function (e) {
            return this.toObject(e)
          },
          _removeDefaultValues: function (e) {
            var i = t.util.getKlass(e.type).prototype;
            return i.stateProperties.forEach((function (t) {
              'left' !== t && 'top' !== t && (e[t] === i[t] && delete e[t], Array.isArray(e[t]) && Array.isArray(i[t]) && 0 === e[t].length && 0 === i[t].length && delete e[t])
            })),
            e
          },
          toString: function () {
            return '#<fabric.' + o(this.type) + '>'
          },
          getObjectScaling: function () {
            if (!this.group) return {
              scaleX: this.scaleX,
              scaleY: this.scaleY
            };
            var e = t.util.qrDecompose(this.calcTransformMatrix());
            return {
              scaleX: Math.abs(e.scaleX),
              scaleY: Math.abs(e.scaleY)
            }
          },
          getTotalObjectScaling: function () {
            var e = this.getObjectScaling(),
            t = e.scaleX,
            i = e.scaleY;
            if (this.canvas) {
              var r = this.canvas.getZoom(),
              n = this.canvas.getRetinaScaling();
              t *= r * n,
              i *= r * n
            }
            return {
              scaleX: t,
              scaleY: i
            }
          },
          getObjectOpacity: function () {
            var e = this.opacity;
            return this.group && (e *= this.group.getObjectOpacity()),
            e
          },
          _set: function (e, i) {
            var r = 'scaleX' === e || 'scaleY' === e,
            n = this[e] !== i,
            o = !1;
            return r && (i = this._constrainScale(i)),
            'scaleX' === e && i < 0 ? (this.flipX = !this.flipX, i *= - 1) : 'scaleY' === e && i < 0 ? (this.flipY = !this.flipY, i *= - 1) : 'shadow' !== e || !i || i instanceof t.Shadow ? 'dirty' === e && this.group && this.group.set('dirty', i) : i = new t.Shadow(i),
            this[e] = i,
            n && (o = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(e) > - 1 ? (this.dirty = !0, o && this.group.set('dirty', !0)) : o && this.stateProperties.indexOf(e) > - 1 && this.group.set('dirty', !0)),
            this
          },
          setOnGroup: function () {
          },
          getViewportTransform: function () {
            return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : t.iMatrix.concat()
          },
          isNotVisible: function () {
            return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible
          },
          render: function (e) {
            this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (e.save(), this._setupCompositeOperation(e), this.drawSelectionBackground(e), this.transform(e), this._setOpacity(e), this._setShadow(e, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(e)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(e), this.objectCaching && this.statefullCache && this.saveState({
              propertySet: 'cacheProperties'
            })), e.restore())
          },
          renderCache: function (e) {
            e = e || {
            },
            this._cacheCanvas && this._cacheContext || this._createCacheCanvas(),
            this.isCacheDirty() && (this.statefullCache && this.saveState({
              propertySet: 'cacheProperties'
            }), this.drawObject(this._cacheContext, e.forClipping), this.dirty = !1)
          },
          _removeCacheCanvas: function () {
            this._cacheCanvas = null,
            this._cacheContext = null,
            this.cacheWidth = 0,
            this.cacheHeight = 0
          },
          hasStroke: function () {
            return this.stroke && 'transparent' !== this.stroke && 0 !== this.strokeWidth
          },
          hasFill: function () {
            return this.fill && 'transparent' !== this.fill
          },
          needsItsOwnCache: function () {
            return !('stroke' !== this.paintFirst || !this.hasFill() || !this.hasStroke() || 'object' != typeof this.shadow) || !!this.clipPath
          },
          shouldCache: function () {
            return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()),
            this.ownCaching
          },
          willDrawShadow: function () {
            return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
          },
          drawClipPathOnCache: function (e, i) {
            if (e.save(), i.inverted ? e.globalCompositeOperation = 'destination-out' : e.globalCompositeOperation = 'destination-in', i.absolutePositioned) {
              var r = t.util.invertTransform(this.calcTransformMatrix());
              e.transform(r[0], r[1], r[2], r[3], r[4], r[5])
            }
            i.transform(e),
            e.scale(1 / i.zoomX, 1 / i.zoomY),
            e.drawImage(i._cacheCanvas, - i.cacheTranslationX, - i.cacheTranslationY),
            e.restore()
          },
          drawObject: function (e, t) {
            var i = this.fill,
            r = this.stroke;
            t ? (this.fill = 'black', this.stroke = '', this._setClippingProperties(e)) : this._renderBackground(e),
            this._render(e),
            this._drawClipPath(e, this.clipPath),
            this.fill = i,
            this.stroke = r
          },
          _drawClipPath: function (e, t) {
            t && (t.canvas = this.canvas, t.shouldCache(), t._transformDone = !0, t.renderCache({
              forClipping: !0
            }), this.drawClipPathOnCache(e, t))
          },
          drawCacheOnCanvas: function (e) {
            e.scale(1 / this.zoomX, 1 / this.zoomY),
            e.drawImage(this._cacheCanvas, - this.cacheTranslationX, - this.cacheTranslationY)
          },
          isCacheDirty: function (e) {
            if (this.isNotVisible()) return !1;
            if (this._cacheCanvas && this._cacheContext && !e && this._updateCacheCanvas()) return !0;
            if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged('cacheProperties')) {
              if (this._cacheCanvas && this._cacheContext && !e) {
                var t = this.cacheWidth / this.zoomX,
                i = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect( - t / 2, - i / 2, t, i)
              }
              return !0
            }
            return !1
          },
          _renderBackground: function (e) {
            if (this.backgroundColor) {
              var t = this._getNonTransformedDimensions();
              e.fillStyle = this.backgroundColor,
              e.fillRect( - t.x / 2, - t.y / 2, t.x, t.y),
              this._removeShadow(e)
            }
          },
          _setOpacity: function (e) {
            this.group && !this.group._transformDone ? e.globalAlpha = this.getObjectOpacity() : e.globalAlpha *= this.opacity
          },
          _setStrokeStyles: function (e, t) {
            var i = t.stroke;
            i && (e.lineWidth = t.strokeWidth, e.lineCap = t.strokeLineCap, e.lineDashOffset = t.strokeDashOffset, e.lineJoin = t.strokeLineJoin, e.miterLimit = t.strokeMiterLimit, i.toLive ? 'percentage' === i.gradientUnits || i.gradientTransform || i.patternTransform ? this._applyPatternForTransformedGradient(e, i) : (e.strokeStyle = i.toLive(e, this), this._applyPatternGradientTransform(e, i)) : e.strokeStyle = t.stroke)
          },
          _setFillStyles: function (e, t) {
            var i = t.fill;
            i && (i.toLive ? (e.fillStyle = i.toLive(e, this), this._applyPatternGradientTransform(e, t.fill)) : e.fillStyle = i)
          },
          _setClippingProperties: function (e) {
            e.globalAlpha = 1,
            e.strokeStyle = 'transparent',
            e.fillStyle = '#000000'
          },
          _setLineDash: function (e, t) {
            t && 0 !== t.length && (1 & t.length && t.push.apply(t, t), e.setLineDash(t))
          },
          _renderControls: function (e, i) {
            var r,
            n,
            o,
            a = this.getViewportTransform(),
            l = this.calcTransformMatrix();
            n = void 0 !== (i = i || {
            }).hasBorders ? i.hasBorders : this.hasBorders,
            o = void 0 !== i.hasControls ? i.hasControls : this.hasControls,
            l = t.util.multiplyTransformMatrices(a, l),
            r = t.util.qrDecompose(l),
            e.save(),
            e.translate(r.translateX, r.translateY),
            e.lineWidth = 1 * this.borderScaleFactor,
            this.group || (e.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
            this.flipX && (r.angle -= 180),
            e.rotate(s(this.group ? r.angle : this.angle)),
            i.forActiveSelection || this.group ? n && this.drawBordersInGroup(e, r, i) : n && this.drawBorders(e, i),
            o && this.drawControls(e, i),
            e.restore()
          },
          _setShadow: function (e) {
            if (this.shadow) {
              var i,
              r = this.shadow,
              n = this.canvas,
              o = n && n.viewportTransform[0] || 1,
              s = n && n.viewportTransform[3] || 1;
              i = r.nonScaling ? {
                scaleX: 1,
                scaleY: 1
              }
               : this.getObjectScaling(),
              n && n._isRetinaScaling() && (o *= t.devicePixelRatio, s *= t.devicePixelRatio),
              e.shadowColor = r.color,
              e.shadowBlur = r.blur * t.browserShadowBlurConstant * (o + s) * (i.scaleX + i.scaleY) / 4,
              e.shadowOffsetX = r.offsetX * o * i.scaleX,
              e.shadowOffsetY = r.offsetY * s * i.scaleY
            }
          },
          _removeShadow: function (e) {
            this.shadow && (e.shadowColor = '', e.shadowBlur = e.shadowOffsetX = e.shadowOffsetY = 0)
          },
          _applyPatternGradientTransform: function (e, t) {
            if (!t || !t.toLive) return {
              offsetX: 0,
              offsetY: 0
            };
            var i = t.gradientTransform || t.patternTransform,
            r = - this.width / 2 + t.offsetX || 0,
            n = - this.height / 2 + t.offsetY || 0;
            return 'percentage' === t.gradientUnits ? e.transform(this.width, 0, 0, this.height, r, n) : e.transform(1, 0, 0, 1, r, n),
            i && e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
            {
              offsetX: r,
              offsetY: n
            }
          },
          _renderPaintInOrder: function (e) {
            'stroke' === this.paintFirst ? (this._renderStroke(e), this._renderFill(e)) : (this._renderFill(e), this._renderStroke(e))
          },
          _render: function () {
          },
          _renderFill: function (e) {
            this.fill && (e.save(), this._setFillStyles(e, this), 'evenodd' === this.fillRule ? e.fill('evenodd') : e.fill(), e.restore())
          },
          _renderStroke: function (e) {
            if (this.stroke && 0 !== this.strokeWidth) {
              if (this.shadow && !this.shadow.affectStroke && this._removeShadow(e), e.save(), this.strokeUniform && this.group) {
                var t = this.getObjectScaling();
                e.scale(1 / t.scaleX, 1 / t.scaleY)
              } else this.strokeUniform && e.scale(1 / this.scaleX, 1 / this.scaleY);
              this._setLineDash(e, this.strokeDashArray),
              this._setStrokeStyles(e, this),
              e.stroke(),
              e.restore()
            }
          },
          _applyPatternForTransformedGradient: function (e, i) {
            var r,
            n = this._limitCacheSize(this._getCacheCanvasDimensions()),
            o = t.util.createCanvasElement(),
            s = this.canvas.getRetinaScaling(),
            a = n.x / this.scaleX / s,
            l = n.y / this.scaleY / s;
            o.width = a,
            o.height = l,
            (r = o.getContext('2d')).beginPath(),
            r.moveTo(0, 0),
            r.lineTo(a, 0),
            r.lineTo(a, l),
            r.lineTo(0, l),
            r.closePath(),
            r.translate(a / 2, l / 2),
            r.scale(n.zoomX / this.scaleX / s, n.zoomY / this.scaleY / s),
            this._applyPatternGradientTransform(r, i),
            r.fillStyle = i.toLive(e),
            r.fill(),
            e.translate( - this.width / 2 - this.strokeWidth / 2, - this.height / 2 - this.strokeWidth / 2),
            e.scale(s * this.scaleX / n.zoomX, s * this.scaleY / n.zoomY),
            e.strokeStyle = r.createPattern(o, 'no-repeat')
          },
          _findCenterFromElement: function () {
            return {
              x: this.left + this.width / 2,
              y: this.top + this.height / 2
            }
          },
          _assignTransformMatrixProps: function () {
            if (this.transformMatrix) {
              var e = t.util.qrDecompose(this.transformMatrix);
              this.flipX = !1,
              this.flipY = !1,
              this.set('scaleX', e.scaleX),
              this.set('scaleY', e.scaleY),
              this.angle = e.angle,
              this.skewX = e.skewX,
              this.skewY = 0
            }
          },
          _removeTransformMatrix: function (e) {
            var i = this._findCenterFromElement();
            this.transformMatrix && (this._assignTransformMatrixProps(), i = t.util.transformPoint(i, this.transformMatrix)),
            this.transformMatrix = null,
            e && (this.scaleX *= e.scaleX, this.scaleY *= e.scaleY, this.cropX = e.cropX, this.cropY = e.cropY, i.x += e.offsetLeft, i.y += e.offsetTop, this.width = e.width, this.height = e.height),
            this.setPositionByOrigin(i, 'center', 'center')
          },
          clone: function (e, i) {
            var r = this.toObject(i);
            this.constructor.fromObject ? this.constructor.fromObject(r, e) : t.Object._fromObject('Object', r, e)
          },
          cloneAsImage: function (e, i) {
            var r = this.toCanvasElement(i);
            return e && e(new t.Image(r)),
            this
          },
          toCanvasElement: function (e) {
            e || (e = {
            });
            var i = t.util,
            r = i.saveObjectTransform(this),
            n = this.group,
            o = this.shadow,
            s = Math.abs,
            a = (e.multiplier || 1) * (e.enableRetinaScaling ? t.devicePixelRatio : 1);
            delete this.group,
            e.withoutTransform && i.resetObjectTransform(this),
            e.withoutShadow && (this.shadow = null);
            var l,
            h,
            c,
            u,
            d = t.util.createCanvasElement(),
            f = this.getBoundingRect(!0, !0),
            g = this.shadow,
            _ = {
              x: 0,
              y: 0
            };
            g && (h = g.blur, l = g.nonScaling ? {
              scaleX: 1,
              scaleY: 1
            }
             : this.getObjectScaling(), _.x = 2 * Math.round(s(g.offsetX) + h) * s(l.scaleX), _.y = 2 * Math.round(s(g.offsetY) + h) * s(l.scaleY)),
            c = f.width + _.x,
            u = f.height + _.y,
            d.width = Math.ceil(c),
            d.height = Math.ceil(u);
            var p = new t.StaticCanvas(d, {
              enableRetinaScaling: !1,
              renderOnAddRemove: !1,
              skipOffscreen: !1
            });
            'jpeg' === e.format && (p.backgroundColor = '#fff'),
            this.setPositionByOrigin(new t.Point(p.width / 2, p.height / 2), 'center', 'center');
            var m = this.canvas;
            p.add(this);
            var v = p.toCanvasElement(a || 1, e);
            return this.shadow = o,
            this.set('canvas', m),
            n && (this.group = n),
            this.set(r).setCoords(),
            p._objects = [
            ],
            p.dispose(),
            p = null,
            v
          },
          toDataURL: function (e) {
            return e || (e = {
            }),
            t.util.toDataURL(this.toCanvasElement(e), e.format || 'png', e.quality || 1)
          },
          isType: function (e) {
            return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === e
          },
          complexity: function () {
            return 1
          },
          toJSON: function (e) {
            return this.toObject(e)
          },
          rotate: function (e) {
            var t = ('center' !== this.originX || 'center' !== this.originY) && this.centeredRotation;
            return t && this._setOriginToCenter(),
            this.set('angle', e),
            t && this._resetOrigin(),
            this
          },
          centerH: function () {
            return this.canvas && this.canvas.centerObjectH(this),
            this
          },
          viewportCenterH: function () {
            return this.canvas && this.canvas.viewportCenterObjectH(this),
            this
          },
          centerV: function () {
            return this.canvas && this.canvas.centerObjectV(this),
            this
          },
          viewportCenterV: function () {
            return this.canvas && this.canvas.viewportCenterObjectV(this),
            this
          },
          center: function () {
            return this.canvas && this.canvas.centerObject(this),
            this
          },
          viewportCenter: function () {
            return this.canvas && this.canvas.viewportCenterObject(this),
            this
          },
          getLocalPointer: function (e, i) {
            i = i || this.canvas.getPointer(e);
            var r = new t.Point(i.x, i.y),
            n = this._getLeftTopCoords();
            return this.angle && (r = t.util.rotatePoint(r, n, s( - this.angle))),
            {
              x: r.x - n.x,
              y: r.y - n.y
            }
          },
          _setupCompositeOperation: function (e) {
            this.globalCompositeOperation && (e.globalCompositeOperation = this.globalCompositeOperation)
          },
          dispose: function () {
            t.runningAnimations && t.runningAnimations.cancelByTarget(this)
          }
        }), t.util.createAccessors && t.util.createAccessors(t.Object), i(t.Object.prototype, t.Observable), t.Object.NUM_FRACTION_DIGITS = 2, t.Object.ENLIVEN_PROPS = [
          'clipPath'
        ], t.Object._fromObject = function (e, i, n, o) {
          var s = t[e];
          i = r(i, !0),
          t.util.enlivenPatterns([i.fill,
          i.stroke], (function (e) {
            void 0 !== e[0] && (i.fill = e[0]),
            void 0 !== e[1] && (i.stroke = e[1]),
            t.util.enlivenObjectEnlivables(i, i, (function () {
              var e = o ? new s(i[o], i) : new s(i);
              n && n(e)
            }))
          }))
        }, t.Object.__uid = 0)
      }(t),
      S = T.util.degreesToRadians,
      b = {
        left: - 0.5,
        center: 0,
        right: 0.5
      },
      C = {
        top: - 0.5,
        center: 0,
        bottom: 0.5
      },
      T.util.object.extend(T.Object.prototype, {
        translateToGivenOrigin: function (e, t, i, r, n) {
          var o,
          s,
          a,
          l = e.x,
          h = e.y;
          return 'string' == typeof t ? t = b[t] : t -= 0.5,
          'string' == typeof r ? r = b[r] : r -= 0.5,
          'string' == typeof i ? i = C[i] : i -= 0.5,
          'string' == typeof n ? n = C[n] : n -= 0.5,
          s = n - i,
          ((o = r - t) || s) && (a = this._getTransformedDimensions(), l = e.x + o * a.x, h = e.y + s * a.y),
          new T.Point(l, h)
        },
        translateToCenterPoint: function (e, t, i) {
          var r = this.translateToGivenOrigin(e, t, i, 'center', 'center');
          return this.angle ? T.util.rotatePoint(r, e, S(this.angle)) : r
        },
        translateToOriginPoint: function (e, t, i) {
          var r = this.translateToGivenOrigin(e, 'center', 'center', t, i);
          return this.angle ? T.util.rotatePoint(r, e, S(this.angle)) : r
        },
        getCenterPoint: function () {
          var e = new T.Point(this.left, this.top);
          return this.translateToCenterPoint(e, this.originX, this.originY)
        },
        getPointByOrigin: function (e, t) {
          var i = this.getCenterPoint();
          return this.translateToOriginPoint(i, e, t)
        },
        toLocalPoint: function (e, t, i) {
          var r,
          n,
          o = this.getCenterPoint();
          return r = void 0 !== t && void 0 !== i ? this.translateToGivenOrigin(o, 'center', 'center', t, i) : new T.Point(this.left, this.top),
          n = new T.Point(e.x, e.y),
          this.angle && (n = T.util.rotatePoint(n, o, - S(this.angle))),
          n.subtractEquals(r)
        },
        setPositionByOrigin: function (e, t, i) {
          var r = this.translateToCenterPoint(e, t, i),
          n = this.translateToOriginPoint(r, this.originX, this.originY);
          this.set('left', n.x),
          this.set('top', n.y)
        },
        adjustPosition: function (e) {
          var t,
          i,
          r = S(this.angle),
          n = this.getScaledWidth(),
          o = T.util.cos(r) * n,
          s = T.util.sin(r) * n;
          t = 'string' == typeof this.originX ? b[this.originX] : this.originX - 0.5,
          i = 'string' == typeof e ? b[e] : e - 0.5,
          this.left += o * (i - t),
          this.top += s * (i - t),
          this.setCoords(),
          this.originX = e
        },
        _setOriginToCenter: function () {
          this._originalOriginX = this.originX,
          this._originalOriginY = this.originY;
          var e = this.getCenterPoint();
          this.originX = 'center',
          this.originY = 'center',
          this.left = e.x,
          this.top = e.y
        },
        _resetOrigin: function () {
          var e = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
          this.originX = this._originalOriginX,
          this.originY = this._originalOriginY,
          this.left = e.x,
          this.top = e.y,
          this._originalOriginX = null,
          this._originalOriginY = null
        },
        _getLeftTopCoords: function () {
          return this.translateToOriginPoint(this.getCenterPoint(), 'left', 'top')
        }
      }),
      function () {
        var e = T.util,
        t = e.degreesToRadians,
        i = e.multiplyTransformMatrices,
        r = e.transformPoint;
        e.object.extend(T.Object.prototype, {
          oCoords: null,
          aCoords: null,
          lineCoords: null,
          ownMatrixCache: null,
          matrixCache: null,
          controls: {
          },
          _getCoords: function (e, t) {
            return t ? e ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), e ? this.aCoords : this.lineCoords)
          },
          getCoords: function (e, t) {
            return i = this._getCoords(e, t),
            [
              new T.Point(i.tl.x, i.tl.y),
              new T.Point(i.tr.x, i.tr.y),
              new T.Point(i.br.x, i.br.y),
              new T.Point(i.bl.x, i.bl.y)
            ];
            var i
          },
          intersectsWithRect: function (e, t, i, r) {
            var n = this.getCoords(i, r);
            return 'Intersection' === T.Intersection.intersectPolygonRectangle(n, e, t).status
          },
          intersectsWithObject: function (e, t, i) {
            return 'Intersection' === T.Intersection.intersectPolygonPolygon(this.getCoords(t, i), e.getCoords(t, i)).status || e.isContainedWithinObject(this, t, i) || this.isContainedWithinObject(e, t, i)
          },
          isContainedWithinObject: function (e, t, i) {
            for (var r = this.getCoords(t, i), n = t ? e.aCoords : e.lineCoords, o = 0, s = e._getImageLines(n); o < 4; o++) if (!e.containsPoint(r[o], s)) return !1;
            return !0
          },
          isContainedWithinRect: function (e, t, i, r) {
            var n = this.getBoundingRect(i, r);
            return n.left >= e.x && n.left + n.width <= t.x && n.top >= e.y && n.top + n.height <= t.y
          },
          containsPoint: function (e, t, i, r) {
            var n = this._getCoords(i, r),
            o = (t = t || this._getImageLines(n), this._findCrossPoints(e, t));
            return 0 !== o && o % 2 == 1
          },
          isOnScreen: function (e) {
            if (!this.canvas) return !1;
            var t = this.canvas.vptCoords.tl,
            i = this.canvas.vptCoords.br;
            return !!this.getCoords(!0, e).some((function (e) {
              return e.x <= i.x && e.x >= t.x && e.y <= i.y && e.y >= t.y
            })) || !!this.intersectsWithRect(t, i, !0, e) || this._containsCenterOfCanvas(t, i, e)
          },
          _containsCenterOfCanvas: function (e, t, i) {
            var r = {
              x: (e.x + t.x) / 2,
              y: (e.y + t.y) / 2
            };
            return !!this.containsPoint(r, null, !0, i)
          },
          isPartiallyOnScreen: function (e) {
            if (!this.canvas) return !1;
            var t = this.canvas.vptCoords.tl,
            i = this.canvas.vptCoords.br;
            return !!this.intersectsWithRect(t, i, !0, e) || this.getCoords(!0, e).every((function (e) {
              return (e.x >= i.x || e.x <= t.x) && (e.y >= i.y || e.y <= t.y)
            })) && this._containsCenterOfCanvas(t, i, e)
          },
          _getImageLines: function (e) {
            return {
              topline: {
                o: e.tl,
                d: e.tr
              },
              rightline: {
                o: e.tr,
                d: e.br
              },
              bottomline: {
                o: e.br,
                d: e.bl
              },
              leftline: {
                o: e.bl,
                d: e.tl
              }
            }
          },
          _findCrossPoints: function (e, t) {
            var i,
            r,
            n,
            o = 0;
            for (var s in t) if (!((n = t[s]).o.y < e.y && n.d.y < e.y || n.o.y >= e.y && n.d.y >= e.y || (n.o.x === n.d.x && n.o.x >= e.x ? r = n.o.x : (i = (n.d.y - n.o.y) / (n.d.x - n.o.x), r = - (e.y - 0 * e.x - (n.o.y - i * n.o.x)) / (0 - i)), r >= e.x && (o += 1), 2 !== o))) break;
            return o
          },
          getBoundingRect: function (t, i) {
            var r = this.getCoords(t, i);
            return e.makeBoundingBoxFromPoints(r)
          },
          getScaledWidth: function () {
            return this._getTransformedDimensions().x
          },
          getScaledHeight: function () {
            return this._getTransformedDimensions().y
          },
          _constrainScale: function (e) {
            return Math.abs(e) < this.minScaleLimit ? e < 0 ? - this.minScaleLimit : this.minScaleLimit : 0 === e ? 0.0001 : e
          },
          scale: function (e) {
            return this._set('scaleX', e),
            this._set('scaleY', e),
            this.setCoords()
          },
          scaleToWidth: function (e, t) {
            var i = this.getBoundingRect(t).width / this.getScaledWidth();
            return this.scale(e / this.width / i)
          },
          scaleToHeight: function (e, t) {
            var i = this.getBoundingRect(t).height / this.getScaledHeight();
            return this.scale(e / this.height / i)
          },
          calcLineCoords: function () {
            var i = this.getViewportTransform(),
            n = this.padding,
            o = t(this.angle),
            s = e.cos(o) * n,
            a = e.sin(o) * n,
            l = s + a,
            h = s - a,
            c = this.calcACoords(),
            u = {
              tl: r(c.tl, i),
              tr: r(c.tr, i),
              bl: r(c.bl, i),
              br: r(c.br, i)
            };
            return n && (u.tl.x -= h, u.tl.y -= l, u.tr.x += l, u.tr.y -= h, u.bl.x -= l, u.bl.y += h, u.br.x += h, u.br.y += l),
            u
          },
          calcOCoords: function () {
            var e = this._calcRotateMatrix(),
            t = this._calcTranslateMatrix(),
            r = this.getViewportTransform(),
            n = i(r, t),
            o = i(n, e),
            s = (o = i(o, [
              1 / r[0],
              0,
              0,
              1 / r[3],
              0,
              0
            ]), this._calculateCurrentDimensions()),
            a = {
            };
            return this.forEachControl((function (e, t, i) {
              a[t] = e.positionHandler(s, o, i)
            })),
            a
          },
          calcACoords: function () {
            var e = this._calcRotateMatrix(),
            t = this._calcTranslateMatrix(),
            n = i(t, e),
            o = this._getTransformedDimensions(),
            s = o.x / 2,
            a = o.y / 2;
            return {
              tl: r({
                x: - s,
                y: - a
              }, n),
              tr: r({
                x: s,
                y: - a
              }, n),
              bl: r({
                x: - s,
                y: a
              }, n),
              br: r({
                x: s,
                y: a
              }, n)
            }
          },
          setCoords: function (e) {
            return this.aCoords = this.calcACoords(),
            this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(),
            e || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()),
            this
          },
          _calcRotateMatrix: function () {
            return e.calcRotateMatrix(this)
          },
          _calcTranslateMatrix: function () {
            var e = this.getCenterPoint();
            return [1,
            0,
            0,
            1,
            e.x,
            e.y]
          },
          transformMatrixKey: function (e) {
            var t = '_',
            i = '';
            return !e && this.group && (i = this.group.transformMatrixKey(e) + t),
            i + this.top + t + this.left + t + this.scaleX + t + this.scaleY + t + this.skewX + t + this.skewY + t + this.angle + t + this.originX + t + this.originY + t + this.width + t + this.height + t + this.strokeWidth + this.flipX + this.flipY
          },
          calcTransformMatrix: function (e) {
            var t = this.calcOwnMatrix();
            if (e || !this.group) return t;
            var r = this.transformMatrixKey(e),
            n = this.matrixCache || (this.matrixCache = {
            });
            return n.key === r ? n.value : (this.group && (t = i(this.group.calcTransformMatrix(!1), t)), n.key = r, n.value = t, t)
          },
          calcOwnMatrix: function () {
            var t = this.transformMatrixKey(!0),
            i = this.ownMatrixCache || (this.ownMatrixCache = {
            });
            if (i.key === t) return i.value;
            var r = this._calcTranslateMatrix(),
            n = {
              angle: this.angle,
              translateX: r[4],
              translateY: r[5],
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              skewX: this.skewX,
              skewY: this.skewY,
              flipX: this.flipX,
              flipY: this.flipY
            };
            return i.key = t,
            i.value = e.composeMatrix(n),
            i.value
          },
          _getNonTransformedDimensions: function () {
            var e = this.strokeWidth;
            return {
              x: this.width + e,
              y: this.height + e
            }
          },
          _getTransformedDimensions: function (t, i) {
            void 0 === t && (t = this.skewX),
            void 0 === i && (i = this.skewY);
            var r,
            n,
            o,
            s = 0 === t && 0 === i;
            if (this.strokeUniform ? (n = this.width, o = this.height) : (n = (r = this._getNonTransformedDimensions()).x, o = r.y), s) return this._finalizeDimensions(n * this.scaleX, o * this.scaleY);
            var a = e.sizeAfterTransform(n, o, {
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              skewX: t,
              skewY: i
            });
            return this._finalizeDimensions(a.x, a.y)
          },
          _finalizeDimensions: function (e, t) {
            return this.strokeUniform ? {
              x: e + this.strokeWidth,
              y: t + this.strokeWidth
            }
             : {
              x: e,
              y: t
            }
          },
          _calculateCurrentDimensions: function () {
            var e = this.getViewportTransform(),
            t = this._getTransformedDimensions();
            return r(t, e, !0).scalarAdd(2 * this.padding)
          }
        })
      }(),
      T.util.object.extend(T.Object.prototype, {
        sendToBack: function () {
          return this.group ? T.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this),
          this
        },
        bringToFront: function () {
          return this.group ? T.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this),
          this
        },
        sendBackwards: function (e) {
          return this.group ? T.StaticCanvas.prototype.sendBackwards.call(this.group, this, e) : this.canvas && this.canvas.sendBackwards(this, e),
          this
        },
        bringForward: function (e) {
          return this.group ? T.StaticCanvas.prototype.bringForward.call(this.group, this, e) : this.canvas && this.canvas.bringForward(this, e),
          this
        },
        moveTo: function (e) {
          return this.group && 'activeSelection' !== this.group.type ? T.StaticCanvas.prototype.moveTo.call(this.group, this, e) : this.canvas && this.canvas.moveTo(this, e),
          this
        }
      }),
      function () {
        function e(e, t) {
          if (t) {
            if (t.toLive) return e + ': url(#SVGID_' + t.id + '); ';
            var i = new T.Color(t),
            r = e + ': ' + i.toRgb() + '; ',
            n = i.getAlpha();
            return 1 !== n && (r += e + '-opacity: ' + n.toString() + '; '),
            r
          }
          return e + ': none; '
        }
        var t = T.util.toFixed;
        T.util.object.extend(T.Object.prototype, {
          getSvgStyles: function (t) {
            var i = this.fillRule ? this.fillRule : 'nonzero',
            r = this.strokeWidth ? this.strokeWidth : '0',
            n = this.strokeDashArray ? this.strokeDashArray.join(' ') : 'none',
            o = this.strokeDashOffset ? this.strokeDashOffset : '0',
            s = this.strokeLineCap ? this.strokeLineCap : 'butt',
            a = this.strokeLineJoin ? this.strokeLineJoin : 'miter',
            l = this.strokeMiterLimit ? this.strokeMiterLimit : '4',
            h = void 0 !== this.opacity ? this.opacity : '1',
            c = this.visible ? '' : ' visibility: hidden;',
            u = t ? '' : this.getSvgFilter(),
            d = e('fill', this.fill);
            return [e('stroke', this.stroke),
            'stroke-width: ',
            r,
            '; ',
            'stroke-dasharray: ',
            n,
            '; ',
            'stroke-linecap: ',
            s,
            '; ',
            'stroke-dashoffset: ',
            o,
            '; ',
            'stroke-linejoin: ',
            a,
            '; ',
            'stroke-miterlimit: ',
            l,
            '; ',
            d,
            'fill-rule: ',
            i,
            '; ',
            'opacity: ',
            h,
            ';',
            u,
            c].join('')
          },
          getSvgSpanStyles: function (t, i) {
            var r = '; ',
            n = t.fontFamily ? 'font-family: ' + ( - 1 === t.fontFamily.indexOf('\'') && - 1 === t.fontFamily.indexOf('"') ? '\'' + t.fontFamily + '\'' : t.fontFamily) + r : '',
            o = t.strokeWidth ? 'stroke-width: ' + t.strokeWidth + r : '',
            s = t.fontSize ? 'font-size: ' + t.fontSize + 'px' + r : '',
            a = t.fontStyle ? 'font-style: ' + t.fontStyle + r : '',
            l = t.fontWeight ? 'font-weight: ' + t.fontWeight + r : '',
            h = t.fill ? e('fill', t.fill) : '',
            c = t.stroke ? e('stroke', t.stroke) : '',
            u = this.getSvgTextDecoration(t);
            return u && (u = 'text-decoration: ' + u + r),
            [
              c,
              o,
              n,
              s,
              a,
              l,
              u,
              h,
              t.deltaY ? 'baseline-shift: ' + - t.deltaY + '; ' : '',
              i ? 'white-space: pre; ' : ''
            ].join('')
          },
          getSvgTextDecoration: function (e) {
            return ['overline',
            'underline',
            'line-through'].filter((function (t) {
              return e[t.replace('-', '')]
            })).join(' ')
          },
          getSvgFilter: function () {
            return this.shadow ? 'filter: url(#SVGID_' + this.shadow.id + ');' : ''
          },
          getSvgCommons: function () {
            return [this.id ? 'id="' + this.id + '" ' : '',
            this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ''].join('')
          },
          getSvgTransform: function (e, t) {
            var i = e ? this.calcTransformMatrix() : this.calcOwnMatrix();
            return 'transform="' + T.util.matrixToSVG(i) + (t || '') + '" '
          },
          _setSVGBg: function (e) {
            if (this.backgroundColor) {
              var i = T.Object.NUM_FRACTION_DIGITS;
              e.push('\t\t<rect ', this._getFillAttributes(this.backgroundColor), ' x="', t( - this.width / 2, i), '" y="', t( - this.height / 2, i), '" width="', t(this.width, i), '" height="', t(this.height, i), '"></rect>\n')
            }
          },
          toSVG: function (e) {
            return this._createBaseSVGMarkup(this._toSVG(e), {
              reviver: e
            })
          },
          toClipPathSVG: function (e) {
            return '\t' + this._createBaseClipPathSVGMarkup(this._toSVG(e), {
              reviver: e
            })
          },
          _createBaseClipPathSVGMarkup: function (e, t) {
            var i = (t = t || {
            }).reviver,
            r = t.additionalTransform || '',
            n = [
              this.getSvgTransform(!0, r),
              this.getSvgCommons()
            ].join(''),
            o = e.indexOf('COMMON_PARTS');
            return e[o] = n,
            i ? i(e.join('')) : e.join('')
          },
          _createBaseSVGMarkup: function (e, t) {
            var i,
            r,
            n = (t = t || {
            }).noStyle,
            o = t.reviver,
            s = n ? '' : 'style="' + this.getSvgStyles() + '" ',
            a = t.withShadow ? 'style="' + this.getSvgFilter() + '" ' : '',
            l = this.clipPath,
            h = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : '',
            c = l && l.absolutePositioned,
            u = this.stroke,
            d = this.fill,
            f = this.shadow,
            g = [
            ],
            _ = e.indexOf('COMMON_PARTS'),
            p = t.additionalTransform;
            return l && (l.clipPathId = 'CLIPPATH_' + T.Object.__uid++, r = '<clipPath id="' + l.clipPathId + '" >\n' + l.toClipPathSVG(o) + '</clipPath>\n'),
            c && g.push('<g ', a, this.getSvgCommons(), ' >\n'),
            g.push('<g ', this.getSvgTransform(!1), c ? '' : a + this.getSvgCommons(), ' >\n'),
            i = [
              s,
              h,
              n ? '' : this.addPaintOrder(),
              ' ',
              p ? 'transform="' + p + '" ' : ''
            ].join(''),
            e[_] = i,
            d && d.toLive && g.push(d.toSVG(this)),
            u && u.toLive && g.push(u.toSVG(this)),
            f && g.push(f.toSVG(this)),
            l && g.push(r),
            g.push(e.join('')),
            g.push('</g>\n'),
            c && g.push('</g>\n'),
            o ? o(g.join('')) : g.join('')
          },
          addPaintOrder: function () {
            return 'fill' !== this.paintFirst ? ' paint-order="' + this.paintFirst + '" ' : ''
          }
        })
      }(),
      function () {
        var e = T.util.object.extend,
        t = 'stateProperties';
        function i(t, i, r) {
          var n = {
          };
          r.forEach((function (e) {
            n[e] = t[e]
          })),
          e(t[i], n, !0)
        }
        function r(e, t, i) {
          if (e === t) return !0;
          if (Array.isArray(e)) {
            if (!Array.isArray(t) || e.length !== t.length) return !1;
            for (var n = 0, o = e.length; n < o; n++) if (!r(e[n], t[n])) return !1;
            return !0
          }
          if (e && 'object' == typeof e) {
            var s,
            a = Object.keys(e);
            if (!t || 'object' != typeof t || !i && a.length !== Object.keys(t).length) return !1;
            for (n = 0, o = a.length; n < o; n++) if ('canvas' !== (s = a[n]) && 'group' !== s && !r(e[s], t[s])) return !1;
            return !0
          }
        }
        T.util.object.extend(T.Object.prototype, {
          hasStateChanged: function (e) {
            var i = '_' + (e = e || t);
            return Object.keys(this[i]).length < this[e].length || !r(this[i], this, !0)
          },
          saveState: function (e) {
            var r = e && e.propertySet || t,
            n = '_' + r;
            return this[n] ? (i(this, n, this[r]), e && e.stateProperties && i(this, n, e.stateProperties), this) : this.setupState(e)
          },
          setupState: function (e) {
            var i = (e = e || {
            }).propertySet || t;
            return e.propertySet = i,
            this['_' + i] = {
            },
            this.saveState(e),
            this
          }
        })
      }(),
      function () {
        var e = T.util.degreesToRadians;
        T.util.object.extend(T.Object.prototype, {
          _findTargetCorner: function (e, t) {
            if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return !1;
            var i,
            r,
            n,
            o = e.x,
            s = e.y,
            a = Object.keys(this.oCoords),
            l = a.length - 1;
            for (this.__corner = 0; l >= 0; l--) if (n = a[l], this.isControlVisible(n) && (r = this._getImageLines(t ? this.oCoords[n].touchCorner : this.oCoords[n].corner), 0 !== (i = this._findCrossPoints({
              x: o,
              y: s
            }, r)) && i % 2 == 1)) return this.__corner = n,
            n;
            return !1
          },
          forEachControl: function (e) {
            for (var t in this.controls) e(this.controls[t], t, this)
          },
          _setCornerCoords: function () {
            var e = this.oCoords;
            for (var t in e) {
              var i = this.controls[t];
              e[t].corner = i.calcCornerCoords(this.angle, this.cornerSize, e[t].x, e[t].y, !1),
              e[t].touchCorner = i.calcCornerCoords(this.angle, this.touchCornerSize, e[t].x, e[t].y, !0)
            }
          },
          drawSelectionBackground: function (t) {
            if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) return this;
            t.save();
            var i = this.getCenterPoint(),
            r = this._calculateCurrentDimensions(),
            n = this.canvas.viewportTransform;
            return t.translate(i.x, i.y),
            t.scale(1 / n[0], 1 / n[3]),
            t.rotate(e(this.angle)),
            t.fillStyle = this.selectionBackgroundColor,
            t.fillRect( - r.x / 2, - r.y / 2, r.x, r.y),
            t.restore(),
            this
          },
          drawBorders: function (e, t) {
            t = t || {
            };
            var i = this._calculateCurrentDimensions(),
            r = this.borderScaleFactor,
            n = i.x + r,
            o = i.y + r,
            s = void 0 !== t.hasControls ? t.hasControls : this.hasControls,
            a = !1;
            return e.save(),
            e.strokeStyle = t.borderColor || this.borderColor,
            this._setLineDash(e, t.borderDashArray || this.borderDashArray),
            e.strokeRect( - n / 2, - o / 2, n, o),
            s && (e.beginPath(), this.forEachControl((function (t, i, r) {
              t.withConnection && t.getVisibility(r, i) && (a = !0, e.moveTo(t.x * n, t.y * o), e.lineTo(t.x * n + t.offsetX, t.y * o + t.offsetY))
            })), a && e.stroke()),
            e.restore(),
            this
          },
          drawBordersInGroup: function (e, t, i) {
            i = i || {
            };
            var r = T.util.sizeAfterTransform(this.width, this.height, t),
            n = this.strokeWidth,
            o = this.strokeUniform,
            s = this.borderScaleFactor,
            a = r.x + n * (o ? this.canvas.getZoom() : t.scaleX) + s,
            l = r.y + n * (o ? this.canvas.getZoom() : t.scaleY) + s;
            return e.save(),
            this._setLineDash(e, i.borderDashArray || this.borderDashArray),
            e.strokeStyle = i.borderColor || this.borderColor,
            e.strokeRect( - a / 2, - l / 2, a, l),
            e.restore(),
            this
          },
          drawControls: function (e, t) {
            t = t || {
            },
            e.save();
            var i,
            r,
            n = this.canvas.getRetinaScaling();
            return e.setTransform(n, 0, 0, n, 0, 0),
            e.strokeStyle = e.fillStyle = t.cornerColor || this.cornerColor,
            this.transparentCorners || (e.strokeStyle = t.cornerStrokeColor || this.cornerStrokeColor),
            this._setLineDash(e, t.cornerDashArray || this.cornerDashArray),
            this.setCoords(),
            this.group && (i = this.group.calcTransformMatrix()),
            this.forEachControl((function (n, o, s) {
              r = s.oCoords[o],
              n.getVisibility(s, o) && (i && (r = T.util.transformPoint(r, i)), n.render(e, r.x, r.y, t, s))
            })),
            e.restore(),
            this
          },
          isControlVisible: function (e) {
            return this.controls[e] && this.controls[e].getVisibility(this, e)
          },
          setControlVisible: function (e, t) {
            return this._controlsVisibility || (this._controlsVisibility = {
            }),
            this._controlsVisibility[e] = t,
            this
          },
          setControlsVisibility: function (e) {
            for (var t in e || (e = {
            }), e) this.setControlVisible(t, e[t]);
            return this
          },
          onDeselect: function () {
          },
          onSelect: function () {
          }
        })
      }(),
      T.util.object.extend(T.StaticCanvas.prototype, {
        FX_DURATION: 500,
        fxCenterObjectH: function (e, t) {
          var i = function () {
          },
          r = (t = t || {
          }).onComplete || i,
          n = t.onChange || i,
          o = this;
          return T.util.animate({
            target: this,
            startValue: e.left,
            endValue: this.getCenterPoint().x,
            duration: this.FX_DURATION,
            onChange: function (t) {
              e.set('left', t),
              o.requestRenderAll(),
              n()
            },
            onComplete: function () {
              e.setCoords(),
              r()
            }
          })
        },
        fxCenterObjectV: function (e, t) {
          var i = function () {
          },
          r = (t = t || {
          }).onComplete || i,
          n = t.onChange || i,
          o = this;
          return T.util.animate({
            target: this,
            startValue: e.top,
            endValue: this.getCenterPoint().y,
            duration: this.FX_DURATION,
            onChange: function (t) {
              e.set('top', t),
              o.requestRenderAll(),
              n()
            },
            onComplete: function () {
              e.setCoords(),
              r()
            }
          })
        },
        fxRemove: function (e, t) {
          var i = function () {
          },
          r = (t = t || {
          }).onComplete || i,
          n = t.onChange || i,
          o = this;
          return T.util.animate({
            target: this,
            startValue: e.opacity,
            endValue: 0,
            duration: this.FX_DURATION,
            onChange: function (t) {
              e.set('opacity', t),
              o.requestRenderAll(),
              n()
            },
            onComplete: function () {
              o.remove(e),
              r()
            }
          })
        }
      }),
      T.util.object.extend(T.Object.prototype, {
        animate: function () {
          if (arguments[0] && 'object' == typeof arguments[0]) {
            var e,
            t,
            i = [
            ],
            r = [
            ];
            for (e in arguments[0]) i.push(e);
            for (var n = 0, o = i.length; n < o; n++) e = i[n],
            t = n !== o - 1,
            r.push(this._animate(e, arguments[0][e], arguments[1], t));
            return r
          }
          return this._animate.apply(this, arguments)
        },
        _animate: function (e, t, i, r) {
          var n,
          o = this;
          t = t.toString(),
          i = i ? T.util.object.clone(i) : {
          },
          ~e.indexOf('.') && (n = e.split('.'));
          var s = o.colorProperties.indexOf(e) > - 1 || n && o.colorProperties.indexOf(n[1]) > - 1,
          a = n ? this.get(n[0]) [n[1]] : this.get(e);
          'from' in i || (i.from = a),
          s || (t = ~t.indexOf('=') ? a + parseFloat(t.replace('=', '')) : parseFloat(t));
          var l = {
            target: this,
            startValue: i.from,
            endValue: t,
            byValue: i.by,
            easing: i.easing,
            duration: i.duration,
            abort: i.abort && function (e, t, r) {
              return i.abort.call(o, e, t, r)
            },
            onChange: function (t, s, a) {
              n ? o[n[0]][n[1]] = t : o.set(e, t),
              r || i.onChange && i.onChange(t, s, a)
            },
            onComplete: function (e, t, n) {
              r || (o.setCoords(), i.onComplete && i.onComplete(e, t, n))
            }
          };
          return s ? T.util.animateColor(l.startValue, l.endValue, l.duration, l) : T.util.animate(l)
        }
      }),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.util.object.clone,
        n = {
          x1: 1,
          x2: 1,
          y1: 1,
          y2: 1
        };
        function o(e, t) {
          var i = e.origin,
          r = e.axis1,
          n = e.axis2,
          o = e.dimension,
          s = t.nearest,
          a = t.center,
          l = t.farthest;
          return function () {
            switch (this.get(i)) {
              case s:
                return Math.min(this.get(r), this.get(n));
              case a:
                return Math.min(this.get(r), this.get(n)) + 0.5 * this.get(o);
              case l:
                return Math.max(this.get(r), this.get(n))
            }
          }
        }
        t.Line ? t.warn('fabric.Line is already defined') : (t.Line = t.util.createClass(t.Object, {
          type: 'line',
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          cacheProperties: t.Object.prototype.cacheProperties.concat('x1', 'x2', 'y1', 'y2'),
          initialize: function (e, t) {
            e || (e = [
              0,
              0,
              0,
              0
            ]),
            this.callSuper('initialize', t),
            this.set('x1', e[0]),
            this.set('y1', e[1]),
            this.set('x2', e[2]),
            this.set('y2', e[3]),
            this._setWidthHeight(t)
          },
          _setWidthHeight: function (e) {
            e || (e = {
            }),
            this.width = Math.abs(this.x2 - this.x1),
            this.height = Math.abs(this.y2 - this.y1),
            this.left = 'left' in e ? e.left : this._getLeftToOriginX(),
            this.top = 'top' in e ? e.top : this._getTopToOriginY()
          },
          _set: function (e, t) {
            return this.callSuper('_set', e, t),
            void 0 !== n[e] && this._setWidthHeight(),
            this
          },
          _getLeftToOriginX: o({
            origin: 'originX',
            axis1: 'x1',
            axis2: 'x2',
            dimension: 'width'
          }, {
            nearest: 'left',
            center: 'center',
            farthest: 'right'
          }),
          _getTopToOriginY: o({
            origin: 'originY',
            axis1: 'y1',
            axis2: 'y2',
            dimension: 'height'
          }, {
            nearest: 'top',
            center: 'center',
            farthest: 'bottom'
          }),
          _render: function (e) {
            e.beginPath();
            var t = this.calcLinePoints();
            e.moveTo(t.x1, t.y1),
            e.lineTo(t.x2, t.y2),
            e.lineWidth = this.strokeWidth;
            var i = e.strokeStyle;
            e.strokeStyle = this.stroke || e.fillStyle,
            this.stroke && this._renderStroke(e),
            e.strokeStyle = i
          },
          _findCenterFromElement: function () {
            return {
              x: (this.x1 + this.x2) / 2,
              y: (this.y1 + this.y2) / 2
            }
          },
          toObject: function (e) {
            return i(this.callSuper('toObject', e), this.calcLinePoints())
          },
          _getNonTransformedDimensions: function () {
            var e = this.callSuper('_getNonTransformedDimensions');
            return 'butt' === this.strokeLineCap && (0 === this.width && (e.y -= this.strokeWidth), 0 === this.height && (e.x -= this.strokeWidth)),
            e
          },
          calcLinePoints: function () {
            var e = this.x1 <= this.x2 ? - 1 : 1,
            t = this.y1 <= this.y2 ? - 1 : 1,
            i = e * this.width * 0.5,
            r = t * this.height * 0.5;
            return {
              x1: i,
              x2: e * this.width * - 0.5,
              y1: r,
              y2: t * this.height * - 0.5
            }
          },
          _toSVG: function () {
            var e = this.calcLinePoints();
            return ['<line ',
            'COMMON_PARTS',
            'x1="',
            e.x1,
            '" y1="',
            e.y1,
            '" x2="',
            e.x2,
            '" y2="',
            e.y2,
            '" />\n']
          }
        }), t.Line.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat('x1 y1 x2 y2'.split(' ')), t.Line.fromElement = function (e, r, n) {
          n = n || {
          };
          var o = t.parseAttributes(e, t.Line.ATTRIBUTE_NAMES),
          s = [
            o.x1 || 0,
            o.y1 || 0,
            o.x2 || 0,
            o.y2 || 0
          ];
          r(new t.Line(s, i(o, n)))
        }, t.Line.fromObject = function (e, i) {
          var n = r(e, !0);
          n.points = [
            e.x1,
            e.y1,
            e.x2,
            e.y2
          ],
          t.Object._fromObject('Line', n, (function (e) {
            delete e.points,
            i && i(e)
          }), 'points')
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.degreesToRadians;
        t.Circle ? t.warn('fabric.Circle is already defined.') : (t.Circle = t.util.createClass(t.Object, {
          type: 'circle',
          radius: 0,
          startAngle: 0,
          endAngle: 360,
          cacheProperties: t.Object.prototype.cacheProperties.concat('radius', 'startAngle', 'endAngle'),
          _set: function (e, t) {
            return this.callSuper('_set', e, t),
            'radius' === e && this.setRadius(t),
            this
          },
          toObject: function (e) {
            return this.callSuper('toObject', [
              'radius',
              'startAngle',
              'endAngle'
            ].concat(e))
          },
          _toSVG: function () {
            var e,
            r = (this.endAngle - this.startAngle) % 360;
            if (0 === r) e = [
              '<circle ',
              'COMMON_PARTS',
              'cx="0" cy="0" ',
              'r="',
              this.radius,
              '" />\n'
            ];
             else {
              var n = i(this.startAngle),
              o = i(this.endAngle),
              s = this.radius;
              e = [
                '<path d="M ' + t.util.cos(n) * s + ' ' + t.util.sin(n) * s,
                ' A ' + s + ' ' + s,
                ' 0 ',
                + (r > 180 ? '1' : '0') + ' 1',
                ' ' + t.util.cos(o) * s + ' ' + t.util.sin(o) * s,
                '" ',
                'COMMON_PARTS',
                ' />\n'
              ]
            }
            return e
          },
          _render: function (e) {
            e.beginPath(),
            e.arc(0, 0, this.radius, i(this.startAngle), i(this.endAngle), !1),
            this._renderPaintInOrder(e)
          },
          getRadiusX: function () {
            return this.get('radius') * this.get('scaleX')
          },
          getRadiusY: function () {
            return this.get('radius') * this.get('scaleY')
          },
          setRadius: function (e) {
            return this.radius = e,
            this.set('width', 2 * e).set('height', 2 * e)
          }
        }), t.Circle.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat('cx cy r'.split(' ')), t.Circle.fromElement = function (e, i) {
          var r,
          n = t.parseAttributes(e, t.Circle.ATTRIBUTE_NAMES);
          if (!('radius' in (r = n) && r.radius >= 0)) throw new Error('value of `r` attribute is required and can not be negative');
          n.left = (n.left || 0) - n.radius,
          n.top = (n.top || 0) - n.radius,
          i(new t.Circle(n))
        }, t.Circle.fromObject = function (e, i) {
          t.Object._fromObject('Circle', e, i)
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        t.Triangle ? t.warn('fabric.Triangle is already defined') : (t.Triangle = t.util.createClass(t.Object, {
          type: 'triangle',
          width: 100,
          height: 100,
          _render: function (e) {
            var t = this.width / 2,
            i = this.height / 2;
            e.beginPath(),
            e.moveTo( - t, i),
            e.lineTo(0, - i),
            e.lineTo(t, i),
            e.closePath(),
            this._renderPaintInOrder(e)
          },
          _toSVG: function () {
            var e = this.width / 2,
            t = this.height / 2;
            return ['<polygon ',
            'COMMON_PARTS',
            'points="',
            [
              - e + ' ' + t,
              '0 ' + - t,
              e + ' ' + t
            ].join(','),
            '" />']
          }
        }), t.Triangle.fromObject = function (e, i) {
          return t.Object._fromObject('Triangle', e, i)
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = 2 * Math.PI;
        t.Ellipse ? t.warn('fabric.Ellipse is already defined.') : (t.Ellipse = t.util.createClass(t.Object, {
          type: 'ellipse',
          rx: 0,
          ry: 0,
          cacheProperties: t.Object.prototype.cacheProperties.concat('rx', 'ry'),
          initialize: function (e) {
            this.callSuper('initialize', e),
            this.set('rx', e && e.rx || 0),
            this.set('ry', e && e.ry || 0)
          },
          _set: function (e, t) {
            switch (this.callSuper('_set', e, t), e) {
              case 'rx':
                this.rx = t,
                this.set('width', 2 * t);
                break;
              case 'ry':
                this.ry = t,
                this.set('height', 2 * t)
            }
            return this
          },
          getRx: function () {
            return this.get('rx') * this.get('scaleX')
          },
          getRy: function () {
            return this.get('ry') * this.get('scaleY')
          },
          toObject: function (e) {
            return this.callSuper('toObject', [
              'rx',
              'ry'
            ].concat(e))
          },
          _toSVG: function () {
            return ['<ellipse ',
            'COMMON_PARTS',
            'cx="0" cy="0" ',
            'rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" />\n']
          },
          _render: function (e) {
            e.beginPath(),
            e.save(),
            e.transform(1, 0, 0, this.ry / this.rx, 0, 0),
            e.arc(0, 0, this.rx, 0, i, !1),
            e.restore(),
            this._renderPaintInOrder(e)
          }
        }), t.Ellipse.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat('cx cy rx ry'.split(' ')), t.Ellipse.fromElement = function (e, i) {
          var r = t.parseAttributes(e, t.Ellipse.ATTRIBUTE_NAMES);
          r.left = (r.left || 0) - r.rx,
          r.top = (r.top || 0) - r.ry,
          i(new t.Ellipse(r))
        }, t.Ellipse.fromObject = function (e, i) {
          t.Object._fromObject('Ellipse', e, i)
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend;
        t.Rect ? t.warn('fabric.Rect is already defined') : (t.Rect = t.util.createClass(t.Object, {
          stateProperties: t.Object.prototype.stateProperties.concat('rx', 'ry'),
          type: 'rect',
          rx: 0,
          ry: 0,
          cacheProperties: t.Object.prototype.cacheProperties.concat('rx', 'ry'),
          initialize: function (e) {
            this.callSuper('initialize', e),
            this._initRxRy()
          },
          _initRxRy: function () {
            this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry)
          },
          _render: function (e) {
            var t = this.rx ? Math.min(this.rx, this.width / 2) : 0,
            i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
            r = this.width,
            n = this.height,
            o = - this.width / 2,
            s = - this.height / 2,
            a = 0 !== t || 0 !== i,
            l = 0.4477152502;
            e.beginPath(),
            e.moveTo(o + t, s),
            e.lineTo(o + r - t, s),
            a && e.bezierCurveTo(o + r - l * t, s, o + r, s + l * i, o + r, s + i),
            e.lineTo(o + r, s + n - i),
            a && e.bezierCurveTo(o + r, s + n - l * i, o + r - l * t, s + n, o + r - t, s + n),
            e.lineTo(o + t, s + n),
            a && e.bezierCurveTo(o + l * t, s + n, o, s + n - l * i, o, s + n - i),
            e.lineTo(o, s + i),
            a && e.bezierCurveTo(o, s + l * i, o + l * t, s, o + t, s),
            e.closePath(),
            this._renderPaintInOrder(e)
          },
          toObject: function (e) {
            return this.callSuper('toObject', [
              'rx',
              'ry'
            ].concat(e))
          },
          _toSVG: function () {
            return ['<rect ',
            'COMMON_PARTS',
            'x="',
            - this.width / 2,
            '" y="',
            - this.height / 2,
            '" rx="',
            this.rx,
            '" ry="',
            this.ry,
            '" width="',
            this.width,
            '" height="',
            this.height,
            '" />\n']
          }
        }), t.Rect.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat('x y rx ry width height'.split(' ')), t.Rect.fromElement = function (e, r, n) {
          if (!e) return r(null);
          n = n || {
          };
          var o = t.parseAttributes(e, t.Rect.ATTRIBUTE_NAMES);
          o.left = o.left || 0,
          o.top = o.top || 0,
          o.height = o.height || 0,
          o.width = o.width || 0;
          var s = new t.Rect(i(n ? t.util.object.clone(n) : {
          }, o));
          s.visible = s.visible && s.width > 0 && s.height > 0,
          r(s)
        }, t.Rect.fromObject = function (e, i) {
          return t.Object._fromObject('Rect', e, i)
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.util.array.min,
        n = t.util.array.max,
        o = t.util.toFixed,
        s = t.util.projectStrokeOnPoints;
        t.Polyline ? t.warn('fabric.Polyline is already defined') : (t.Polyline = t.util.createClass(t.Object, {
          type: 'polyline',
          points: null,
          exactBoundingBox: !1,
          cacheProperties: t.Object.prototype.cacheProperties.concat('points'),
          initialize: function (e, t) {
            t = t || {
            },
            this.points = e || [
            ],
            this.callSuper('initialize', t),
            this._setPositionDimensions(t)
          },
          _projectStrokeOnPoints: function () {
            return s(this.points, this, !0)
          },
          _setPositionDimensions: function (e) {
            var t,
            i = this._calcDimensions(e),
            r = this.exactBoundingBox ? this.strokeWidth : 0;
            this.width = i.width - r,
            this.height = i.height - r,
            e.fromSVG || (t = this.translateToGivenOrigin({
              x: i.left - this.strokeWidth / 2 + r / 2,
              y: i.top - this.strokeWidth / 2 + r / 2
            }, 'left', 'top', this.originX, this.originY)),
            void 0 === e.left && (this.left = e.fromSVG ? i.left : t.x),
            void 0 === e.top && (this.top = e.fromSVG ? i.top : t.y),
            this.pathOffset = {
              x: i.left + this.width / 2 + r / 2,
              y: i.top + this.height / 2 + r / 2
            }
          },
          _calcDimensions: function () {
            var e = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points,
            t = r(e, 'x') || 0,
            i = r(e, 'y') || 0;
            return {
              left: t,
              top: i,
              width: (n(e, 'x') || 0) - t,
              height: (n(e, 'y') || 0) - i
            }
          },
          toObject: function (e) {
            return i(this.callSuper('toObject', e), {
              points: this.points.concat()
            })
          },
          _toSVG: function () {
            for (var e = [
            ], i = this.pathOffset.x, r = this.pathOffset.y, n = t.Object.NUM_FRACTION_DIGITS, s = 0, a = this.points.length; s < a; s++) e.push(o(this.points[s].x - i, n), ',', o(this.points[s].y - r, n), ' ');
            return ['<' + this.type + ' ',
            'COMMON_PARTS',
            'points="',
            e.join(''),
            '" />\n']
          },
          commonRender: function (e) {
            var t,
            i = this.points.length,
            r = this.pathOffset.x,
            n = this.pathOffset.y;
            if (!i || isNaN(this.points[i - 1].y)) return !1;
            e.beginPath(),
            e.moveTo(this.points[0].x - r, this.points[0].y - n);
            for (var o = 0; o < i; o++) t = this.points[o],
            e.lineTo(t.x - r, t.y - n);
            return !0
          },
          _render: function (e) {
            this.commonRender(e) && this._renderPaintInOrder(e)
          },
          complexity: function () {
            return this.get('points').length
          }
        }), t.Polyline.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat(), t.Polyline.fromElementGenerator = function (e) {
          return function (r, n, o) {
            if (!r) return n(null);
            o || (o = {
            });
            var s = t.parsePointsAttribute(r.getAttribute('points')),
            a = t.parseAttributes(r, t[e].ATTRIBUTE_NAMES);
            a.fromSVG = !0,
            n(new t[e](s, i(a, o)))
          }
        }, t.Polyline.fromElement = t.Polyline.fromElementGenerator('Polyline'), t.Polyline.fromObject = function (e, i) {
          return t.Object._fromObject('Polyline', e, i, 'points')
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.projectStrokeOnPoints;
        t.Polygon ? t.warn('fabric.Polygon is already defined') : (t.Polygon = t.util.createClass(t.Polyline, {
          type: 'polygon',
          _projectStrokeOnPoints: function () {
            return i(this.points, this)
          },
          _render: function (e) {
            this.commonRender(e) && (e.closePath(), this._renderPaintInOrder(e))
          }
        }), t.Polygon.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat(), t.Polygon.fromElement = t.Polyline.fromElementGenerator('Polygon'), t.Polygon.fromObject = function (e, i) {
          t.Object._fromObject('Polygon', e, i, 'points')
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.array.min,
        r = t.util.array.max,
        n = t.util.object.extend,
        o = t.util.object.clone,
        s = t.util.toFixed;
        t.Path ? t.warn('fabric.Path is already defined') : (t.Path = t.util.createClass(t.Object, {
          type: 'path',
          path: null,
          cacheProperties: t.Object.prototype.cacheProperties.concat('path', 'fillRule'),
          stateProperties: t.Object.prototype.stateProperties.concat('path'),
          initialize: function (e, t) {
            delete (t = o(t || {
            })).path,
            this.callSuper('initialize', t),
            this._setPath(e || [
            ], t)
          },
          _setPath: function (e, i) {
            this.path = t.util.makePathSimpler(Array.isArray(e) ? e : t.util.parsePath(e)),
            t.Polyline.prototype._setPositionDimensions.call(this, i || {
            })
          },
          _renderPathCommands: function (e) {
            var t,
            i = 0,
            r = 0,
            n = 0,
            o = 0,
            s = 0,
            a = 0,
            l = - this.pathOffset.x,
            h = - this.pathOffset.y;
            e.beginPath();
            for (var c = 0, u = this.path.length; c < u; ++c) switch ((t = this.path[c]) [0]) {
              case 'L':
                n = t[1],
                o = t[2],
                e.lineTo(n + l, o + h);
                break;
              case 'M':
                i = n = t[1],
                r = o = t[2],
                e.moveTo(n + l, o + h);
                break;
              case 'C':
                n = t[5],
                o = t[6],
                s = t[3],
                a = t[4],
                e.bezierCurveTo(t[1] + l, t[2] + h, s + l, a + h, n + l, o + h);
                break;
              case 'Q':
                e.quadraticCurveTo(t[1] + l, t[2] + h, t[3] + l, t[4] + h),
                n = t[3],
                o = t[4],
                s = t[1],
                a = t[2];
                break;
              case 'z':
              case 'Z':
                n = i,
                o = r,
                e.closePath()
            }
          },
          _render: function (e) {
            this._renderPathCommands(e),
            this._renderPaintInOrder(e)
          },
          toString: function () {
            return '#<fabric.Path (' + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + ' }>'
          },
          toObject: function (e) {
            return n(this.callSuper('toObject', e), {
              path: this.path.map((function (e) {
                return e.slice()
              }))
            })
          },
          toDatalessObject: function (e) {
            var t = this.toObject(['sourcePath'].concat(e));
            return t.sourcePath && delete t.path,
            t
          },
          _toSVG: function () {
            return ['<path ',
            'COMMON_PARTS',
            'd="',
            t.util.joinPath(this.path),
            '" stroke-linecap="round" ',
            '/>\n']
          },
          _getOffsetTransform: function () {
            var e = t.Object.NUM_FRACTION_DIGITS;
            return ' translate(' + s( - this.pathOffset.x, e) + ', ' + s( - this.pathOffset.y, e) + ')'
          },
          toClipPathSVG: function (e) {
            var t = this._getOffsetTransform();
            return '\t' + this._createBaseClipPathSVGMarkup(this._toSVG(), {
              reviver: e,
              additionalTransform: t
            })
          },
          toSVG: function (e) {
            var t = this._getOffsetTransform();
            return this._createBaseSVGMarkup(this._toSVG(), {
              reviver: e,
              additionalTransform: t
            })
          },
          complexity: function () {
            return this.path.length
          },
          _calcDimensions: function () {
            for (var e, n, o = [
            ], s = [
            ], a = 0, l = 0, h = 0, c = 0, u = 0, d = this.path.length; u < d; ++u) {
              switch ((e = this.path[u]) [0]) {
                case 'L':
                  h = e[1],
                  c = e[2],
                  n = [
                  ];
                  break;
                case 'M':
                  a = h = e[1],
                  l = c = e[2],
                  n = [
                  ];
                  break;
                case 'C':
                  n = t.util.getBoundsOfCurve(h, c, e[1], e[2], e[3], e[4], e[5], e[6]),
                  h = e[5],
                  c = e[6];
                  break;
                case 'Q':
                  n = t.util.getBoundsOfCurve(h, c, e[1], e[2], e[1], e[2], e[3], e[4]),
                  h = e[3],
                  c = e[4];
                  break;
                case 'z':
                case 'Z':
                  h = a,
                  c = l
              }
              n.forEach((function (e) {
                o.push(e.x),
                s.push(e.y)
              })),
              o.push(h),
              s.push(c)
            }
            var f = i(o) || 0,
            g = i(s) || 0;
            return {
              left: f,
              top: g,
              width: (r(o) || 0) - f,
              height: (r(s) || 0) - g
            }
          }
        }), t.Path.fromObject = function (e, i) {
          if ('string' == typeof e.sourcePath) {
            var r = e.sourcePath;
            t.loadSVGFromURL(r, (function (t) {
              var r = t[0];
              r.setOptions(e),
              i && i(r)
            }))
          } else t.Object._fromObject('Path', e, i, 'path')
        }, t.Path.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat(['d']), t.Path.fromElement = function (e, i, r) {
          var o = t.parseAttributes(e, t.Path.ATTRIBUTE_NAMES);
          o.fromSVG = !0,
          i(new t.Path(o.d, n(o, r)))
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.array.min,
        r = t.util.array.max;
        t.Group || (t.Group = t.util.createClass(t.Object, t.Collection, {
          type: 'group',
          strokeWidth: 0,
          subTargetCheck: !1,
          cacheProperties: [
          ],
          useSetOnGroup: !1,
          initialize: function (e, t, i) {
            t = t || {
            },
            this._objects = [
            ],
            i && this.callSuper('initialize', t),
            this._objects = e || [
            ];
            for (var r = this._objects.length; r--; ) this._objects[r].group = this;
            if (i) this._updateObjectsACoords();
             else {
              var n = t && t.centerPoint;
              void 0 !== t.originX && (this.originX = t.originX),
              void 0 !== t.originY && (this.originY = t.originY),
              n || this._calcBounds(),
              this._updateObjectsCoords(n),
              delete t.centerPoint,
              this.callSuper('initialize', t)
            }
            this.setCoords()
          },
          _updateObjectsACoords: function () {
            for (var e = this._objects.length; e--; ) this._objects[e].setCoords(!0)
          },
          _updateObjectsCoords: function (e) {
            e = e || this.getCenterPoint();
            for (var t = this._objects.length; t--; ) this._updateObjectCoords(this._objects[t], e)
          },
          _updateObjectCoords: function (e, t) {
            var i = e.left,
            r = e.top;
            e.set({
              left: i - t.x,
              top: r - t.y
            }),
            e.group = this,
            e.setCoords(!0)
          },
          toString: function () {
            return '#<fabric.Group: (' + this.complexity() + ')>'
          },
          addWithUpdate: function (e) {
            var i = !!this.group;
            return this._restoreObjectsState(),
            t.util.resetObjectTransform(this),
            e && (i && t.util.removeTransformFromObject(e, this.group.calcTransformMatrix()), this._objects.push(e), e.group = this, e._set('canvas', this.canvas)),
            this._calcBounds(),
            this._updateObjectsCoords(),
            this.dirty = !0,
            i ? this.group.addWithUpdate() : this.setCoords(),
            this
          },
          removeWithUpdate: function (e) {
            return this._restoreObjectsState(),
            t.util.resetObjectTransform(this),
            this.remove(e),
            this._calcBounds(),
            this._updateObjectsCoords(),
            this.setCoords(),
            this.dirty = !0,
            this
          },
          _onObjectAdded: function (e) {
            this.dirty = !0,
            e.group = this,
            e._set('canvas', this.canvas)
          },
          _onObjectRemoved: function (e) {
            this.dirty = !0,
            delete e.group
          },
          _set: function (e, i) {
            var r = this._objects.length;
            if (this.useSetOnGroup) for (; r--; ) this._objects[r].setOnGroup(e, i);
            if ('canvas' === e) for (; r--; ) this._objects[r]._set(e, i);
            t.Object.prototype._set.call(this, e, i)
          },
          toObject: function (e) {
            var i = this.includeDefaultValues,
            r = this._objects.filter((function (e) {
              return !e.excludeFromExport
            })).map((function (t) {
              var r = t.includeDefaultValues;
              t.includeDefaultValues = i;
              var n = t.toObject(e);
              return t.includeDefaultValues = r,
              n
            })),
            n = t.Object.prototype.toObject.call(this, e);
            return n.objects = r,
            n
          },
          toDatalessObject: function (e) {
            var i,
            r = this.sourcePath;
            if (r) i = r;
             else {
              var n = this.includeDefaultValues;
              i = this._objects.map((function (t) {
                var i = t.includeDefaultValues;
                t.includeDefaultValues = n;
                var r = t.toDatalessObject(e);
                return t.includeDefaultValues = i,
                r
              }))
            }
            var o = t.Object.prototype.toDatalessObject.call(this, e);
            return o.objects = i,
            o
          },
          render: function (e) {
            this._transformDone = !0,
            this.callSuper('render', e),
            this._transformDone = !1
          },
          shouldCache: function () {
            var e = t.Object.prototype.shouldCache.call(this);
            if (e) for (var i = 0, r = this._objects.length; i < r; i++) if (this._objects[i].willDrawShadow()) return this.ownCaching = !1,
            !1;
            return e
          },
          willDrawShadow: function () {
            if (t.Object.prototype.willDrawShadow.call(this)) return !0;
            for (var e = 0, i = this._objects.length; e < i; e++) if (this._objects[e].willDrawShadow()) return !0;
            return !1
          },
          isOnACache: function () {
            return this.ownCaching || this.group && this.group.isOnACache()
          },
          drawObject: function (e) {
            for (var t = 0, i = this._objects.length; t < i; t++) this._objects[t].render(e);
            this._drawClipPath(e, this.clipPath)
          },
          isCacheDirty: function (e) {
            if (this.callSuper('isCacheDirty', e)) return !0;
            if (!this.statefullCache) return !1;
            for (var t = 0, i = this._objects.length; t < i; t++) if (this._objects[t].isCacheDirty(!0)) {
              if (this._cacheCanvas) {
                var r = this.cacheWidth / this.zoomX,
                n = this.cacheHeight / this.zoomY;
                this._cacheContext.clearRect( - r / 2, - n / 2, r, n)
              }
              return !0
            }
            return !1
          },
          _restoreObjectsState: function () {
            var e = this.calcOwnMatrix();
            return this._objects.forEach((function (i) {
              t.util.addTransformToObject(i, e),
              delete i.group,
              i.setCoords()
            })),
            this
          },
          destroy: function () {
            return this._objects.forEach((function (e) {
              e.set('dirty', !0)
            })),
            this._restoreObjectsState()
          },
          dispose: function () {
            this.callSuper('dispose'),
            this.forEachObject((function (e) {
              e.dispose && e.dispose()
            })),
            this._objects = [
            ]
          },
          toActiveSelection: function () {
            if (this.canvas) {
              var e = this._objects,
              i = this.canvas;
              this._objects = [
              ];
              var r = this.toObject();
              delete r.objects;
              var n = new t.ActiveSelection([]);
              return n.set(r),
              n.type = 'activeSelection',
              i.remove(this),
              e.forEach((function (e) {
                e.group = n,
                e.dirty = !0,
                i.add(e)
              })),
              n.canvas = i,
              n._objects = e,
              i._activeObject = n,
              n.setCoords(),
              n
            }
          },
          ungroupOnCanvas: function () {
            return this._restoreObjectsState()
          },
          setObjectsCoords: function () {
            return this.forEachObject((function (e) {
              e.setCoords(!0)
            })),
            this
          },
          _calcBounds: function (e) {
            for (var t, i, r, n, o = [
            ], s = [
            ], a = [
              'tr',
              'br',
              'bl',
              'tl'
            ], l = 0, h = this._objects.length, c = a.length; l < h; ++l) {
              for (r = (t = this._objects[l]).calcACoords(), n = 0; n < c; n++) i = a[n],
              o.push(r[i].x),
              s.push(r[i].y);
              t.aCoords = r
            }
            this._getBounds(o, s, e)
          },
          _getBounds: function (e, n, o) {
            var s = new t.Point(i(e), i(n)),
            a = new t.Point(r(e), r(n)),
            l = s.y || 0,
            h = s.x || 0,
            c = a.x - s.x || 0,
            u = a.y - s.y || 0;
            this.width = c,
            this.height = u,
            o || this.setPositionByOrigin({
              x: h,
              y: l
            }, 'left', 'top')
          },
          _toSVG: function (e) {
            for (var t = [
              '<g ',
              'COMMON_PARTS',
              ' >\n'
            ], i = 0, r = this._objects.length; i < r; i++) t.push('\t\t', this._objects[i].toSVG(e));
            return t.push('</g>\n'),
            t
          },
          getSvgStyles: function () {
            var e = void 0 !== this.opacity && 1 !== this.opacity ? 'opacity: ' + this.opacity + ';' : '',
            t = this.visible ? '' : ' visibility: hidden;';
            return [e,
            this.getSvgFilter(),
            t].join('')
          },
          toClipPathSVG: function (e) {
            for (var t = [
            ], i = 0, r = this._objects.length; i < r; i++) t.push('\t', this._objects[i].toClipPathSVG(e));
            return this._createBaseClipPathSVGMarkup(t, {
              reviver: e
            })
          }
        }), t.Group.fromObject = function (e, i) {
          var r = e.objects,
          n = t.util.object.clone(e, !0);
          delete n.objects,
          'string' != typeof r ? t.util.enlivenObjects(r, (function (r) {
            var n = t.util.object.clone(e, !0);
            delete n.objects,
            t.util.enlivenObjectEnlivables(e, n, (function () {
              i && i(new t.Group(r, n, !0))
            }))
          })) : t.loadSVGFromURL(r, (function (o) {
            var s = t.util.groupSVGElements(o, e, r);
            s.set(n),
            i && i(s)
          }))
        })
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        t.ActiveSelection || (t.ActiveSelection = t.util.createClass(t.Group, {
          type: 'activeSelection',
          initialize: function (e, i) {
            i = i || {
            },
            this._objects = e || [
            ];
            for (var r = this._objects.length; r--; ) this._objects[r].group = this;
            i.originX && (this.originX = i.originX),
            i.originY && (this.originY = i.originY),
            this._calcBounds(),
            this._updateObjectsCoords(),
            t.Object.prototype.initialize.call(this, i),
            this.setCoords()
          },
          toGroup: function () {
            var e = this._objects.concat();
            this._objects = [
            ];
            var i = t.Object.prototype.toObject.call(this),
            r = new t.Group([]);
            if (delete i.type, r.set(i), e.forEach((function (e) {
              e.canvas.remove(e),
              e.group = r
            })), r._objects = e, !this.canvas) return r;
            var n = this.canvas;
            return n.add(r),
            n._activeObject = r,
            r.setCoords(),
            r
          },
          onDeselect: function () {
            return this.destroy(),
            !1
          },
          toString: function () {
            return '#<fabric.ActiveSelection: (' + this.complexity() + ')>'
          },
          shouldCache: function () {
            return !1
          },
          isOnACache: function () {
            return !1
          },
          _renderControls: function (e, t, i) {
            e.save(),
            e.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1,
            this.callSuper('_renderControls', e, t),
            void 0 === (i = i || {
            }).hasControls && (i.hasControls = !1),
            i.forActiveSelection = !0;
            for (var r = 0, n = this._objects.length; r < n; r++) this._objects[r]._renderControls(e, i);
            e.restore()
          }
        }), t.ActiveSelection.fromObject = function (e, i) {
          t.util.enlivenObjects(e.objects, (function (r) {
            delete e.objects,
            i && i(new t.ActiveSelection(r, e, !0))
          }))
        })
      }(t),
      function (e) {
        var t = T.util.object.extend;
        e.fabric || (e.fabric = {
        }),
        e.fabric.Image ? T.warn('fabric.Image is already defined.') : (T.Image = T.util.createClass(T.Object, {
          type: 'image',
          strokeWidth: 0,
          srcFromAttribute: !1,
          _lastScaleX: 1,
          _lastScaleY: 1,
          _filterScalingX: 1,
          _filterScalingY: 1,
          minimumScaleTrigger: 0.5,
          stateProperties: T.Object.prototype.stateProperties.concat('cropX', 'cropY'),
          cacheProperties: T.Object.prototype.cacheProperties.concat('cropX', 'cropY'),
          cacheKey: '',
          cropX: 0,
          cropY: 0,
          imageSmoothing: !0,
          initialize: function (e, t) {
            t || (t = {
            }),
            this.filters = [
            ],
            this.cacheKey = 'texture' + T.Object.__uid++,
            this.callSuper('initialize', t),
            this._initElement(e, t)
          },
          getElement: function () {
            return this._element || {
            }
          },
          setElement: function (e, t) {
            return this.removeTexture(this.cacheKey),
            this.removeTexture(this.cacheKey + '_filtered'),
            this._element = e,
            this._originalElement = e,
            this._initConfig(t),
            0 !== this.filters.length && this.applyFilters(),
            this.resizeFilter && this.applyResizeFilters(),
            this
          },
          removeTexture: function (e) {
            var t = T.filterBackend;
            t && t.evictCachesForKey && t.evictCachesForKey(e)
          },
          dispose: function () {
            this.callSuper('dispose'),
            this.removeTexture(this.cacheKey),
            this.removeTexture(this.cacheKey + '_filtered'),
            this._cacheContext = void 0,
            [
              '_originalElement',
              '_element',
              '_filteredEl',
              '_cacheCanvas'
            ].forEach(function (e) {
              T.util.cleanUpJsdomNode(this[e]),
              this[e] = void 0
            }.bind(this))
          },
          getCrossOrigin: function () {
            return this._originalElement && (this._originalElement.crossOrigin || null)
          },
          getOriginalSize: function () {
            var e = this.getElement();
            return {
              width: e.naturalWidth || e.width,
              height: e.naturalHeight || e.height
            }
          },
          _stroke: function (e) {
            if (this.stroke && 0 !== this.strokeWidth) {
              var t = this.width / 2,
              i = this.height / 2;
              e.beginPath(),
              e.moveTo( - t, - i),
              e.lineTo(t, - i),
              e.lineTo(t, i),
              e.lineTo( - t, i),
              e.lineTo( - t, - i),
              e.closePath()
            }
          },
          toObject: function (e) {
            var i = [
            ];
            this.filters.forEach((function (e) {
              e && i.push(e.toObject())
            }));
            var r = t(this.callSuper('toObject', [
              'cropX',
              'cropY'
            ].concat(e)), {
              src: this.getSrc(),
              crossOrigin: this.getCrossOrigin(),
              filters: i
            });
            return this.resizeFilter && (r.resizeFilter = this.resizeFilter.toObject()),
            r
          },
          hasCrop: function () {
            return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height
          },
          _toSVG: function () {
            var e,
            t = [
            ],
            i = [
            ],
            r = this._element,
            n = - this.width / 2,
            o = - this.height / 2,
            s = '',
            a = '';
            if (!r) return [];
            if (this.hasCrop()) {
              var l = T.Object.__uid++;
              t.push('<clipPath id="imageCrop_' + l + '">\n', '\t<rect x="' + n + '" y="' + o + '" width="' + this.width + '" height="' + this.height + '" />\n', '</clipPath>\n'),
              s = ' clip-path="url(#imageCrop_' + l + ')" '
            }
            if (this.imageSmoothing || (a = '" image-rendering="optimizeSpeed'), i.push('\t<image ', 'COMMON_PARTS', 'xlink:href="', this.getSvgSrc(!0), '" x="', n - this.cropX, '" y="', o - this.cropY, '" width="', r.width || r.naturalWidth, '" height="', r.height || r.height, a, '"', s, '></image>\n'), this.stroke || this.strokeDashArray) {
              var h = this.fill;
              this.fill = null,
              e = [
                '\t<rect ',
                'x="',
                n,
                '" y="',
                o,
                '" width="',
                this.width,
                '" height="',
                this.height,
                '" style="',
                this.getSvgStyles(),
                '"/>\n'
              ],
              this.fill = h
            }
            return 'fill' !== this.paintFirst ? t.concat(e, i) : t.concat(i, e)
          },
          getSrc: function (e) {
            var t = e ? this._element : this._originalElement;
            return t ? t.toDataURL ? t.toDataURL() : this.srcFromAttribute ? t.getAttribute('src') : t.src : this.src || ''
          },
          setSrc: function (e, t, i) {
            return T.util.loadImage(e, (function (e, r) {
              this.setElement(e, i),
              this._setWidthHeight(),
              t && t(this, r)
            }), this, i && i.crossOrigin),
            this
          },
          toString: function () {
            return '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
          },
          applyResizeFilters: function () {
            var e = this.resizeFilter,
            t = this.minimumScaleTrigger,
            i = this.getTotalObjectScaling(),
            r = i.scaleX,
            n = i.scaleY,
            o = this._filteredEl || this._originalElement;
            if (this.group && this.set('dirty', !0), !e || r > t && n > t) return this._element = o,
            this._filterScalingX = 1,
            this._filterScalingY = 1,
            this._lastScaleX = r,
            void (this._lastScaleY = n);
            T.filterBackend || (T.filterBackend = T.initFilterBackend());
            var s = T.util.createCanvasElement(),
            a = this._filteredEl ? this.cacheKey + '_filtered' : this.cacheKey,
            l = o.width,
            h = o.height;
            s.width = l,
            s.height = h,
            this._element = s,
            this._lastScaleX = e.scaleX = r,
            this._lastScaleY = e.scaleY = n,
            T.filterBackend.applyFilters([e], o, l, h, this._element, a),
            this._filterScalingX = s.width / this._originalElement.width,
            this._filterScalingY = s.height / this._originalElement.height
          },
          applyFilters: function (e) {
            if (e = (e = e || this.filters || [
            ]).filter((function (e) {
              return e && !e.isNeutralState()
            })), this.set('dirty', !0), this.removeTexture(this.cacheKey + '_filtered'), 0 === e.length) return this._element = this._originalElement,
            this._filteredEl = null,
            this._filterScalingX = 1,
            this._filterScalingY = 1,
            this;
            var t = this._originalElement,
            i = t.naturalWidth || t.width,
            r = t.naturalHeight || t.height;
            if (this._element === this._originalElement) {
              var n = T.util.createCanvasElement();
              n.width = i,
              n.height = r,
              this._element = n,
              this._filteredEl = n
            } else this._element = this._filteredEl,
            this._filteredEl.getContext('2d').clearRect(0, 0, i, r),
            this._lastScaleX = 1,
            this._lastScaleY = 1;
            return T.filterBackend || (T.filterBackend = T.initFilterBackend()),
            T.filterBackend.applyFilters(e, this._originalElement, i, r, this._element, this.cacheKey),
            this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height),
            this
          },
          _render: function (e) {
            T.util.setImageSmoothing(e, this.imageSmoothing),
            !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(),
            this._stroke(e),
            this._renderPaintInOrder(e)
          },
          drawCacheOnCanvas: function (e) {
            T.util.setImageSmoothing(e, this.imageSmoothing),
            T.Object.prototype.drawCacheOnCanvas.call(this, e)
          },
          shouldCache: function () {
            return this.needsItsOwnCache()
          },
          _renderFill: function (e) {
            var t = this._element;
            if (t) {
              var i = this._filterScalingX,
              r = this._filterScalingY,
              n = this.width,
              o = this.height,
              s = Math.min,
              a = Math.max,
              l = a(this.cropX, 0),
              h = a(this.cropY, 0),
              c = t.naturalWidth || t.width,
              u = t.naturalHeight || t.height,
              d = l * i,
              f = h * r,
              g = s(n * i, c - d),
              _ = s(o * r, u - f),
              p = - n / 2,
              m = - o / 2,
              v = s(n, c / i - l),
              y = s(o, u / r - h);
              t && e.drawImage(t, d, f, g, _, p, m, v, y)
            }
          },
          _needsResize: function () {
            var e = this.getTotalObjectScaling();
            return e.scaleX !== this._lastScaleX || e.scaleY !== this._lastScaleY
          },
          _resetWidthHeight: function () {
            this.set(this.getOriginalSize())
          },
          _initElement: function (e, t) {
            this.setElement(T.util.getById(e), t),
            T.util.addClass(this.getElement(), T.Image.CSS_CANVAS)
          },
          _initConfig: function (e) {
            e || (e = {
            }),
            this.setOptions(e),
            this._setWidthHeight(e)
          },
          _initFilters: function (e, t) {
            e && e.length ? T.util.enlivenObjects(e, (function (e) {
              t && t(e)
            }), 'fabric.Image.filters') : t && t()
          },
          _setWidthHeight: function (e) {
            e || (e = {
            });
            var t = this.getElement();
            this.width = e.width || t.naturalWidth || t.width || 0,
            this.height = e.height || t.naturalHeight || t.height || 0
          },
          parsePreserveAspectRatioAttribute: function () {
            var e,
            t = T.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ''),
            i = this._element.width,
            r = this._element.height,
            n = 1,
            o = 1,
            s = 0,
            a = 0,
            l = 0,
            h = 0,
            c = this.width,
            u = this.height,
            d = {
              width: c,
              height: u
            };
            return !t || 'none' === t.alignX && 'none' === t.alignY ? (n = c / i, o = u / r) : ('meet' === t.meetOrSlice && (e = (c - i * (n = o = T.util.findScaleToFit(this._element, d))) / 2, 'Min' === t.alignX && (s = - e), 'Max' === t.alignX && (s = e), e = (u - r * o) / 2, 'Min' === t.alignY && (a = - e), 'Max' === t.alignY && (a = e)), 'slice' === t.meetOrSlice && (e = i - c / (n = o = T.util.findScaleToCover(this._element, d)), 'Mid' === t.alignX && (l = e / 2), 'Max' === t.alignX && (l = e), e = r - u / o, 'Mid' === t.alignY && (h = e / 2), 'Max' === t.alignY && (h = e), i = c / n, r = u / o)),
            {
              width: i,
              height: r,
              scaleX: n,
              scaleY: o,
              offsetLeft: s,
              offsetTop: a,
              cropX: l,
              cropY: h
            }
          }
        }), T.Image.CSS_CANVAS = 'canvas-img', T.Image.prototype.getSvgSrc = T.Image.prototype.getSrc, T.Image.fromObject = function (e, t) {
          var i = T.util.object.clone(e);
          T.util.loadImage(i.src, (function (e, r) {
            r ? t && t(null, !0) : T.Image.prototype._initFilters.call(i, i.filters, (function (r) {
              i.filters = r || [
              ],
              T.Image.prototype._initFilters.call(i, [
                i.resizeFilter
              ], (function (r) {
                i.resizeFilter = r[0],
                T.util.enlivenObjectEnlivables(i, i, (function () {
                  var r = new T.Image(e, i);
                  t(r, !1)
                }))
              }))
            }))
          }), null, i.crossOrigin)
        }, T.Image.fromURL = function (e, t, i) {
          T.util.loadImage(e, (function (e, r) {
            t && t(new T.Image(e, i), r)
          }), null, i && i.crossOrigin)
        }, T.Image.ATTRIBUTE_NAMES = T.SHARED_ATTRIBUTES.concat('x y width height preserveAspectRatio xlink:href crossOrigin image-rendering'.split(' ')), T.Image.fromElement = function (e, i, r) {
          var n = T.parseAttributes(e, T.Image.ATTRIBUTE_NAMES);
          T.Image.fromURL(n['xlink:href'], i, t(r ? T.util.object.clone(r) : {
          }, n))
        })
      }(t),
      T.util.object.extend(T.Object.prototype, {
        _getAngleValueForStraighten: function () {
          var e = this.angle % 360;
          return e > 0 ? 90 * Math.round((e - 1) / 90) : 90 * Math.round(e / 90)
        },
        straighten: function () {
          return this.rotate(this._getAngleValueForStraighten())
        },
        fxStraighten: function (e) {
          var t = function () {
          },
          i = (e = e || {
          }).onComplete || t,
          r = e.onChange || t,
          n = this;
          return T.util.animate({
            target: this,
            startValue: this.get('angle'),
            endValue: this._getAngleValueForStraighten(),
            duration: this.FX_DURATION,
            onChange: function (e) {
              n.rotate(e),
              r()
            },
            onComplete: function () {
              n.setCoords(),
              i()
            }
          })
        }
      }),
      T.util.object.extend(T.StaticCanvas.prototype, {
        straightenObject: function (e) {
          return e.straighten(),
          this.requestRenderAll(),
          this
        },
        fxStraightenObject: function (e) {
          return e.fxStraighten({
            onChange: this.requestRenderAllBound
          })
        }
      }),
      function () {
        function e(e, t) {
          var i = 'precision ' + t + ' float;\nvoid main(){}',
          r = e.createShader(e.FRAGMENT_SHADER);
          return e.shaderSource(r, i),
          e.compileShader(r),
          !!e.getShaderParameter(r, e.COMPILE_STATUS)
        }
        function t(e) {
          e && e.tileSize && (this.tileSize = e.tileSize),
          this.setupGLContext(this.tileSize, this.tileSize),
          this.captureGPUInfo()
        }
        T.isWebglSupported = function (t) {
          if (T.isLikelyNode) return !1;
          t = t || T.WebglFilterBackend.prototype.tileSize;
          var i = document.createElement('canvas'),
          r = i.getContext('webgl') || i.getContext('experimental-webgl'),
          n = !1;
          if (r) {
            T.maxTextureSize = r.getParameter(r.MAX_TEXTURE_SIZE),
            n = T.maxTextureSize >= t;
            for (var o = [
              'highp',
              'mediump',
              'lowp'
            ], s = 0; s < 3; s++) if (e(r, o[s])) {
              T.webGlPrecision = o[s];
              break
            }
          }
          return this.isSupported = n,
          n
        },
        T.WebglFilterBackend = t,
        t.prototype = {
          tileSize: 2048,
          resources: {
          },
          setupGLContext: function (e, t) {
            this.dispose(),
            this.createWebGLCanvas(e, t),
            this.aPosition = new Float32Array([0,
            0,
            0,
            1,
            1,
            0,
            1,
            1]),
            this.chooseFastestCopyGLTo2DMethod(e, t)
          },
          chooseFastestCopyGLTo2DMethod: function (e, t) {
            var i,
            r = void 0 !== window.performance;
            try {
              new ImageData(1, 1),
              i = !0
            } catch (e) {
              i = !1
            }
            var n = 'undefined' != typeof ArrayBuffer,
            o = 'undefined' != typeof Uint8ClampedArray;
            if (r && i && n && o) {
              var s = T.util.createCanvasElement(),
              a = new ArrayBuffer(e * t * 4);
              if (T.forceGLPutImageData) return this.imageBuffer = a,
              void (this.copyGLTo2D = A);
              var l,
              h,
              c = {
                imageBuffer: a,
                destinationWidth: e,
                destinationHeight: t,
                targetCanvas: s
              };
              s.width = e,
              s.height = t,
              l = window.performance.now(),
              E.call(c, this.gl, c),
              h = window.performance.now() - l,
              l = window.performance.now(),
              A.call(c, this.gl, c),
              h > window.performance.now() - l ? (this.imageBuffer = a, this.copyGLTo2D = A) : this.copyGLTo2D = E
            }
          },
          createWebGLCanvas: function (e, t) {
            var i = T.util.createCanvasElement();
            i.width = e,
            i.height = t;
            var r = {
              alpha: !0,
              premultipliedAlpha: !1,
              depth: !1,
              stencil: !1,
              antialias: !1
            },
            n = i.getContext('webgl', r);
            n || (n = i.getContext('experimental-webgl', r)),
            n && (n.clearColor(0, 0, 0, 0), this.canvas = i, this.gl = n)
          },
          applyFilters: function (e, t, i, r, n, o) {
            var s,
            a = this.gl;
            o && (s = this.getCachedTexture(o, t));
            var l = {
              originalWidth: t.width || t.originalWidth,
              originalHeight: t.height || t.originalHeight,
              sourceWidth: i,
              sourceHeight: r,
              destinationWidth: i,
              destinationHeight: r,
              context: a,
              sourceTexture: this.createTexture(a, i, r, !s && t),
              targetTexture: this.createTexture(a, i, r),
              originalTexture: s || this.createTexture(a, i, r, !s && t),
              passes: e.length,
              webgl: !0,
              aPosition: this.aPosition,
              programCache: this.programCache,
              pass: 0,
              filterBackend: this,
              targetCanvas: n
            },
            h = a.createFramebuffer();
            return a.bindFramebuffer(a.FRAMEBUFFER, h),
            e.forEach((function (e) {
              e && e.applyTo(l)
            })),
            function (e) {
              var t = e.targetCanvas,
              i = t.width,
              r = t.height,
              n = e.destinationWidth,
              o = e.destinationHeight;
              i === n && r === o || (t.width = n, t.height = o)
            }(l),
            this.copyGLTo2D(a, l),
            a.bindTexture(a.TEXTURE_2D, null),
            a.deleteTexture(l.sourceTexture),
            a.deleteTexture(l.targetTexture),
            a.deleteFramebuffer(h),
            n.getContext('2d').setTransform(1, 0, 0, 1, 0, 0),
            l
          },
          dispose: function () {
            this.canvas && (this.canvas = null, this.gl = null),
            this.clearWebGLCaches()
          },
          clearWebGLCaches: function () {
            this.programCache = {
            },
            this.textureCache = {
            }
          },
          createTexture: function (e, t, i, r) {
            var n = e.createTexture();
            return e.bindTexture(e.TEXTURE_2D, n),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            r ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, i, 0, e.RGBA, e.UNSIGNED_BYTE, null),
            n
          },
          getCachedTexture: function (e, t) {
            if (this.textureCache[e]) return this.textureCache[e];
            var i = this.createTexture(this.gl, t.width, t.height, t);
            return this.textureCache[e] = i,
            i
          },
          evictCachesForKey: function (e) {
            this.textureCache[e] && (this.gl.deleteTexture(this.textureCache[e]), delete this.textureCache[e])
          },
          copyGLTo2D: E,
          captureGPUInfo: function () {
            if (this.gpuInfo) return this.gpuInfo;
            var e = this.gl,
            t = {
              renderer: '',
              vendor: ''
            };
            if (!e) return t;
            var i = e.getExtension('WEBGL_debug_renderer_info');
            if (i) {
              var r = e.getParameter(i.UNMASKED_RENDERER_WEBGL),
              n = e.getParameter(i.UNMASKED_VENDOR_WEBGL);
              r && (t.renderer = r.toLowerCase()),
              n && (t.vendor = n.toLowerCase())
            }
            return this.gpuInfo = t,
            t
          }
        }
      }(),
      function () {
        var e = function () {
        };
        function t() {
        }
        T.Canvas2dFilterBackend = t,
        t.prototype = {
          evictCachesForKey: e,
          dispose: e,
          clearWebGLCaches: e,
          resources: {
          },
          applyFilters: function (e, t, i, r, n) {
            var o = n.getContext('2d');
            o.drawImage(t, 0, 0, i, r);
            var s = {
              sourceWidth: i,
              sourceHeight: r,
              imageData: o.getImageData(0, 0, i, r),
              originalEl: t,
              originalImageData: o.getImageData(0, 0, i, r),
              canvasEl: n,
              ctx: o,
              filterBackend: this
            };
            return e.forEach((function (e) {
              e.applyTo(s)
            })),
            s.imageData.width === i && s.imageData.height === r || (n.width = s.imageData.width, n.height = s.imageData.height),
            o.putImageData(s.imageData, 0, 0),
            s
          }
        }
      }(),
      T.Image = T.Image || {
      },
      T.Image.filters = T.Image.filters || {
      },
      T.Image.filters.BaseFilter = T.util.createClass({
        type: 'BaseFilter',
        vertexSource: 'attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}',
        fragmentSource: 'precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}',
        initialize: function (e) {
          e && this.setOptions(e)
        },
        setOptions: function (e) {
          for (var t in e) this[t] = e[t]
        },
        createProgram: function (e, t, i) {
          t = t || this.fragmentSource,
          i = i || this.vertexSource,
          'highp' !== T.webGlPrecision && (t = t.replace(/precision highp float/g, 'precision ' + T.webGlPrecision + ' float'));
          var r = e.createShader(e.VERTEX_SHADER);
          if (e.shaderSource(r, i), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw new Error('Vertex shader compile error for ' + this.type + ': ' + e.getShaderInfoLog(r));
          var n = e.createShader(e.FRAGMENT_SHADER);
          if (e.shaderSource(n, t), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) throw new Error('Fragment shader compile error for ' + this.type + ': ' + e.getShaderInfoLog(n));
          var o = e.createProgram();
          if (e.attachShader(o, r), e.attachShader(o, n), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) throw new Error('Shader link error for "${this.type}" ' + e.getProgramInfoLog(o));
          var s = this.getAttributeLocations(e, o),
          a = this.getUniformLocations(e, o) || {
          };
          return a.uStepW = e.getUniformLocation(o, 'uStepW'),
          a.uStepH = e.getUniformLocation(o, 'uStepH'),
          {
            program: o,
            attributeLocations: s,
            uniformLocations: a
          }
        },
        getAttributeLocations: function (e, t) {
          return {
            aPosition: e.getAttribLocation(t, 'aPosition')
          }
        },
        getUniformLocations: function () {
          return {
          }
        },
        sendAttributeData: function (e, t, i) {
          var r = t.aPosition,
          n = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, n),
          e.enableVertexAttribArray(r),
          e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0),
          e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW)
        },
        _setupFrameBuffer: function (e) {
          var t,
          i,
          r = e.context;
          e.passes > 1 ? (t = e.destinationWidth, i = e.destinationHeight, e.sourceWidth === t && e.sourceHeight === i || (r.deleteTexture(e.targetTexture), e.targetTexture = e.filterBackend.createTexture(r, t, i)), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e.targetTexture, 0)) : (r.bindFramebuffer(r.FRAMEBUFFER, null), r.finish())
        },
        _swapTextures: function (e) {
          e.passes--,
          e.pass++;
          var t = e.targetTexture;
          e.targetTexture = e.sourceTexture,
          e.sourceTexture = t
        },
        isNeutralState: function () {
          var e = this.mainParameter,
          t = T.Image.filters[this.type].prototype;
          if (e) {
            if (Array.isArray(t[e])) {
              for (var i = t[e].length; i--; ) if (this[e][i] !== t[e][i]) return !1;
              return !0
            }
            return t[e] === this[e]
          }
          return !1
        },
        applyTo: function (e) {
          e.webgl ? (this._setupFrameBuffer(e), this.applyToWebGL(e), this._swapTextures(e)) : this.applyTo2d(e)
        },
        retrieveShader: function (e) {
          return e.programCache.hasOwnProperty(this.type) || (e.programCache[this.type] = this.createProgram(e.context)),
          e.programCache[this.type]
        },
        applyToWebGL: function (e) {
          var t = e.context,
          i = this.retrieveShader(e);
          0 === e.pass && e.originalTexture ? t.bindTexture(t.TEXTURE_2D, e.originalTexture) : t.bindTexture(t.TEXTURE_2D, e.sourceTexture),
          t.useProgram(i.program),
          this.sendAttributeData(t, i.attributeLocations, e.aPosition),
          t.uniform1f(i.uniformLocations.uStepW, 1 / e.sourceWidth),
          t.uniform1f(i.uniformLocations.uStepH, 1 / e.sourceHeight),
          this.sendUniformData(t, i.uniformLocations),
          t.viewport(0, 0, e.destinationWidth, e.destinationHeight),
          t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
        },
        bindAdditionalTexture: function (e, t, i) {
          e.activeTexture(i),
          e.bindTexture(e.TEXTURE_2D, t),
          e.activeTexture(e.TEXTURE0)
        },
        unbindAdditionalTexture: function (e, t) {
          e.activeTexture(t),
          e.bindTexture(e.TEXTURE_2D, null),
          e.activeTexture(e.TEXTURE0)
        },
        getMainParameter: function () {
          return this[this.mainParameter]
        },
        setMainParameter: function (e) {
          this[this.mainParameter] = e
        },
        sendUniformData: function () {
        },
        createHelpLayer: function (e) {
          if (!e.helpLayer) {
            var t = document.createElement('canvas');
            t.width = e.sourceWidth,
            t.height = e.sourceHeight,
            e.helpLayer = t
          }
        },
        toObject: function () {
          var e = {
            type: this.type
          },
          t = this.mainParameter;
          return t && (e[t] = this[t]),
          e
        },
        toJSON: function () {
          return this.toObject()
        }
      }),
      T.Image.filters.BaseFilter.fromObject = function (e, t) {
        var i = new T.Image.filters[e.type](e);
        return t && t(i),
        i
      },
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.ColorMatrix = r(i.BaseFilter, {
          type: 'ColorMatrix',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}',
          matrix: [
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          mainParameter: 'matrix',
          colorsOnly: !0,
          initialize: function (e) {
            this.callSuper('initialize', e),
            this.matrix = this.matrix.slice(0)
          },
          applyTo2d: function (e) {
            var t,
            i,
            r,
            n,
            o,
            s = e.imageData.data,
            a = s.length,
            l = this.matrix,
            h = this.colorsOnly;
            for (o = 0; o < a; o += 4) t = s[o],
            i = s[o + 1],
            r = s[o + 2],
            h ? (s[o] = t * l[0] + i * l[1] + r * l[2] + 255 * l[4], s[o + 1] = t * l[5] + i * l[6] + r * l[7] + 255 * l[9], s[o + 2] = t * l[10] + i * l[11] + r * l[12] + 255 * l[14]) : (n = s[o + 3], s[o] = t * l[0] + i * l[1] + r * l[2] + n * l[3] + 255 * l[4], s[o + 1] = t * l[5] + i * l[6] + r * l[7] + n * l[8] + 255 * l[9], s[o + 2] = t * l[10] + i * l[11] + r * l[12] + n * l[13] + 255 * l[14], s[o + 3] = t * l[15] + i * l[16] + r * l[17] + n * l[18] + 255 * l[19])
          },
          getUniformLocations: function (e, t) {
            return {
              uColorMatrix: e.getUniformLocation(t, 'uColorMatrix'),
              uConstants: e.getUniformLocation(t, 'uConstants')
            }
          },
          sendUniformData: function (e, t) {
            var i = this.matrix,
            r = [
              i[0],
              i[1],
              i[2],
              i[3],
              i[5],
              i[6],
              i[7],
              i[8],
              i[10],
              i[11],
              i[12],
              i[13],
              i[15],
              i[16],
              i[17],
              i[18]
            ],
            n = [
              i[4],
              i[9],
              i[14],
              i[19]
            ];
            e.uniformMatrix4fv(t.uColorMatrix, !1, r),
            e.uniform4fv(t.uConstants, n)
          }
        }),
        t.Image.filters.ColorMatrix.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Brightness = r(i.BaseFilter, {
          type: 'Brightness',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}',
          brightness: 0,
          mainParameter: 'brightness',
          applyTo2d: function (e) {
            if (0 !== this.brightness) {
              var t,
              i = e.imageData.data,
              r = i.length,
              n = Math.round(255 * this.brightness);
              for (t = 0; t < r; t += 4) i[t] = i[t] + n,
              i[t + 1] = i[t + 1] + n,
              i[t + 2] = i[t + 2] + n
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uBrightness: e.getUniformLocation(t, 'uBrightness')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uBrightness, this.brightness)
          }
        }),
        t.Image.filters.Brightness.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.Image.filters,
        n = t.util.createClass;
        r.Convolute = n(r.BaseFilter, {
          type: 'Convolute',
          opaque: !1,
          matrix: [
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          fragmentSource: {
            Convolute_3_1: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}',
            Convolute_3_0: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}',
            Convolute_5_1: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}',
            Convolute_5_0: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}',
            Convolute_7_1: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}',
            Convolute_7_0: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}',
            Convolute_9_1: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}',
            Convolute_9_0: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}'
          },
          retrieveShader: function (e) {
            var t = Math.sqrt(this.matrix.length),
            i = this.type + '_' + t + '_' + (this.opaque ? 1 : 0),
            r = this.fragmentSource[i];
            return e.programCache.hasOwnProperty(i) || (e.programCache[i] = this.createProgram(e.context, r)),
            e.programCache[i]
          },
          applyTo2d: function (e) {
            var t,
            i,
            r,
            n,
            o,
            s,
            a,
            l,
            h,
            c,
            u,
            d,
            f,
            g = e.imageData,
            _ = g.data,
            p = this.matrix,
            m = Math.round(Math.sqrt(p.length)),
            v = Math.floor(m / 2),
            y = g.width,
            S = g.height,
            b = e.ctx.createImageData(y, S),
            C = b.data,
            w = this.opaque ? 1 : 0;
            for (u = 0; u < S; u++) for (c = 0; c < y; c++) {
              for (o = 4 * (u * y + c), t = 0, i = 0, r = 0, n = 0, f = 0; f < m; f++) for (d = 0; d < m; d++) s = c + d - v,
              (a = u + f - v) < 0 || a >= S || s < 0 || s >= y || (l = 4 * (a * y + s), h = p[f * m + d], t += _[l] * h, i += _[l + 1] * h, r += _[l + 2] * h, w || (n += _[l + 3] * h));
              C[o] = t,
              C[o + 1] = i,
              C[o + 2] = r,
              C[o + 3] = w ? _[o + 3] : n
            }
            e.imageData = b
          },
          getUniformLocations: function (e, t) {
            return {
              uMatrix: e.getUniformLocation(t, 'uMatrix'),
              uOpaque: e.getUniformLocation(t, 'uOpaque'),
              uHalfSize: e.getUniformLocation(t, 'uHalfSize'),
              uSize: e.getUniformLocation(t, 'uSize')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1fv(t.uMatrix, this.matrix)
          },
          toObject: function () {
            return i(this.callSuper('toObject'), {
              opaque: this.opaque,
              matrix: this.matrix
            })
          }
        }),
        t.Image.filters.Convolute.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Grayscale = r(i.BaseFilter, {
          type: 'Grayscale',
          fragmentSource: {
            average: 'precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}',
            lightness: 'precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}',
            luminosity: 'precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}'
          },
          mode: 'average',
          mainParameter: 'mode',
          applyTo2d: function (e) {
            var t,
            i,
            r = e.imageData.data,
            n = r.length,
            o = this.mode;
            for (t = 0; t < n; t += 4) 'average' === o ? i = (r[t] + r[t + 1] + r[t + 2]) / 3 : 'lightness' === o ? i = (Math.min(r[t], r[t + 1], r[t + 2]) + Math.max(r[t], r[t + 1], r[t + 2])) / 2 : 'luminosity' === o && (i = 0.21 * r[t] + 0.72 * r[t + 1] + 0.07 * r[t + 2]),
            r[t] = i,
            r[t + 1] = i,
            r[t + 2] = i
          },
          retrieveShader: function (e) {
            var t = this.type + '_' + this.mode;
            if (!e.programCache.hasOwnProperty(t)) {
              var i = this.fragmentSource[this.mode];
              e.programCache[t] = this.createProgram(e.context, i)
            }
            return e.programCache[t]
          },
          getUniformLocations: function (e, t) {
            return {
              uMode: e.getUniformLocation(t, 'uMode')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1i(t.uMode, 1)
          },
          isNeutralState: function () {
            return !1
          }
        }),
        t.Image.filters.Grayscale.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Invert = r(i.BaseFilter, {
          type: 'Invert',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}',
          invert: !0,
          mainParameter: 'invert',
          applyTo2d: function (e) {
            var t,
            i = e.imageData.data,
            r = i.length;
            for (t = 0; t < r; t += 4) i[t] = 255 - i[t],
            i[t + 1] = 255 - i[t + 1],
            i[t + 2] = 255 - i[t + 2]
          },
          isNeutralState: function () {
            return !this.invert
          },
          getUniformLocations: function (e, t) {
            return {
              uInvert: e.getUniformLocation(t, 'uInvert')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1i(t.uInvert, this.invert)
          }
        }),
        t.Image.filters.Invert.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.Image.filters,
        n = t.util.createClass;
        r.Noise = n(r.BaseFilter, {
          type: 'Noise',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}',
          mainParameter: 'noise',
          noise: 0,
          applyTo2d: function (e) {
            if (0 !== this.noise) {
              var t,
              i,
              r = e.imageData.data,
              n = r.length,
              o = this.noise;
              for (t = 0, n = r.length; t < n; t += 4) i = (0.5 - Math.random()) * o,
              r[t] += i,
              r[t + 1] += i,
              r[t + 2] += i
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uNoise: e.getUniformLocation(t, 'uNoise'),
              uSeed: e.getUniformLocation(t, 'uSeed')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uNoise, this.noise / 255),
            e.uniform1f(t.uSeed, Math.random())
          },
          toObject: function () {
            return i(this.callSuper('toObject'), {
              noise: this.noise
            })
          }
        }),
        t.Image.filters.Noise.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Pixelate = r(i.BaseFilter, {
          type: 'Pixelate',
          blocksize: 4,
          mainParameter: 'blocksize',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}',
          applyTo2d: function (e) {
            var t,
            i,
            r,
            n,
            o,
            s,
            a,
            l,
            h,
            c,
            u,
            d = e.imageData,
            f = d.data,
            g = d.height,
            _ = d.width;
            for (i = 0; i < g; i += this.blocksize) for (r = 0; r < _; r += this.blocksize) for (n = f[t = 4 * i * _ + 4 * r], o = f[t + 1], s = f[t + 2], a = f[t + 3], c = Math.min(i + this.blocksize, g), u = Math.min(r + this.blocksize, _), l = i; l < c; l++) for (h = r; h < u; h++) f[t = 4 * l * _ + 4 * h] = n,
            f[t + 1] = o,
            f[t + 2] = s,
            f[t + 3] = a
          },
          isNeutralState: function () {
            return 1 === this.blocksize
          },
          getUniformLocations: function (e, t) {
            return {
              uBlocksize: e.getUniformLocation(t, 'uBlocksize'),
              uStepW: e.getUniformLocation(t, 'uStepW'),
              uStepH: e.getUniformLocation(t, 'uStepH')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uBlocksize, this.blocksize)
          }
        }),
        t.Image.filters.Pixelate.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.extend,
        r = t.Image.filters,
        n = t.util.createClass;
        r.RemoveColor = n(r.BaseFilter, {
          type: 'RemoveColor',
          color: '#FFFFFF',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}',
          distance: 0.02,
          useAlpha: !1,
          applyTo2d: function (e) {
            var i,
            r,
            n,
            o,
            s = e.imageData.data,
            a = 255 * this.distance,
            l = new t.Color(this.color).getSource(),
            h = [
              l[0] - a,
              l[1] - a,
              l[2] - a
            ],
            c = [
              l[0] + a,
              l[1] + a,
              l[2] + a
            ];
            for (i = 0; i < s.length; i += 4) r = s[i],
            n = s[i + 1],
            o = s[i + 2],
            r > h[0] && n > h[1] && o > h[2] && r < c[0] && n < c[1] && o < c[2] && (s[i + 3] = 0)
          },
          getUniformLocations: function (e, t) {
            return {
              uLow: e.getUniformLocation(t, 'uLow'),
              uHigh: e.getUniformLocation(t, 'uHigh')
            }
          },
          sendUniformData: function (e, i) {
            var r = new t.Color(this.color).getSource(),
            n = parseFloat(this.distance),
            o = [
              0 + r[0] / 255 - n,
              0 + r[1] / 255 - n,
              0 + r[2] / 255 - n,
              1
            ],
            s = [
              r[0] / 255 + n,
              r[1] / 255 + n,
              r[2] / 255 + n,
              1
            ];
            e.uniform4fv(i.uLow, o),
            e.uniform4fv(i.uHigh, s)
          },
          toObject: function () {
            return i(this.callSuper('toObject'), {
              color: this.color,
              distance: this.distance
            })
          }
        }),
        t.Image.filters.RemoveColor.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass,
        n = {
          Brownie: [
            0.5997,
            0.34553,
            - 0.27082,
            0,
            0.186,
            - 0.0377,
            0.86095,
            0.15059,
            0,
            - 0.1449,
            0.24113,
            - 0.07441,
            0.44972,
            0,
            - 0.02965,
            0,
            0,
            0,
            1,
            0
          ],
          Vintage: [
            0.62793,
            0.32021,
            - 0.03965,
            0,
            0.03784,
            0.02578,
            0.64411,
            0.03259,
            0,
            0.02926,
            0.0466,
            - 0.08512,
            0.52416,
            0,
            0.02023,
            0,
            0,
            0,
            1,
            0
          ],
          Kodachrome: [
            1.12855,
            - 0.39673,
            - 0.03992,
            0,
            0.24991,
            - 0.16404,
            1.08352,
            - 0.05498,
            0,
            0.09698,
            - 0.16786,
            - 0.56034,
            1.60148,
            0,
            0.13972,
            0,
            0,
            0,
            1,
            0
          ],
          Technicolor: [
            1.91252,
            - 0.85453,
            - 0.09155,
            0,
            0.04624,
            - 0.30878,
            1.76589,
            - 0.10601,
            0,
            - 0.27589,
            - 0.2311,
            - 0.75018,
            1.84759,
            0,
            0.12137,
            0,
            0,
            0,
            1,
            0
          ],
          Polaroid: [
            1.438,
            - 0.062,
            - 0.062,
            0,
            0,
            - 0.122,
            1.378,
            - 0.122,
            0,
            0,
            - 0.016,
            - 0.016,
            1.483,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          Sepia: [
            0.393,
            0.769,
            0.189,
            0,
            0,
            0.349,
            0.686,
            0.168,
            0,
            0,
            0.272,
            0.534,
            0.131,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          BlackWhite: [
            1.5,
            1.5,
            1.5,
            0,
            - 1,
            1.5,
            1.5,
            1.5,
            0,
            - 1,
            1.5,
            1.5,
            1.5,
            0,
            - 1,
            0,
            0,
            0,
            1,
            0
          ]
        };
        for (var o in n) i[o] = r(i.ColorMatrix, {
          type: o,
          matrix: n[o],
          mainParameter: !1,
          colorsOnly: !0
        }),
        t.Image.filters[o].fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric,
        i = t.Image.filters,
        r = t.util.createClass;
        i.BlendColor = r(i.BaseFilter, {
          type: 'BlendColor',
          color: '#F95C63',
          mode: 'multiply',
          alpha: 1,
          fragmentSource: {
            multiply: 'gl_FragColor.rgb *= uColor.rgb;\n',
            screen: 'gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n',
            add: 'gl_FragColor.rgb += uColor.rgb;\n',
            diff: 'gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n',
            subtract: 'gl_FragColor.rgb -= uColor.rgb;\n',
            lighten: 'gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n',
            darken: 'gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n',
            exclusion: 'gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n',
            overlay: 'if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n',
            tint: 'gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n'
          },
          buildSource: function (e) {
            return 'precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n' + this.fragmentSource[e] + '}\n}'
          },
          retrieveShader: function (e) {
            var t,
            i = this.type + '_' + this.mode;
            return e.programCache.hasOwnProperty(i) || (t = this.buildSource(this.mode), e.programCache[i] = this.createProgram(e.context, t)),
            e.programCache[i]
          },
          applyTo2d: function (e) {
            var i,
            r,
            n,
            o,
            s,
            a,
            l,
            h = e.imageData.data,
            c = h.length,
            u = 1 - this.alpha;
            i = (l = new t.Color(this.color).getSource()) [0] * this.alpha,
            r = l[1] * this.alpha,
            n = l[2] * this.alpha;
            for (var d = 0; d < c; d += 4) switch (o = h[d], s = h[d + 1], a = h[d + 2], this.mode) {
              case 'multiply':
                h[d] = o * i / 255,
                h[d + 1] = s * r / 255,
                h[d + 2] = a * n / 255;
                break;
              case 'screen':
                h[d] = 255 - (255 - o) * (255 - i) / 255,
                h[d + 1] = 255 - (255 - s) * (255 - r) / 255,
                h[d + 2] = 255 - (255 - a) * (255 - n) / 255;
                break;
              case 'add':
                h[d] = o + i,
                h[d + 1] = s + r,
                h[d + 2] = a + n;
                break;
              case 'diff':
              case 'difference':
                h[d] = Math.abs(o - i),
                h[d + 1] = Math.abs(s - r),
                h[d + 2] = Math.abs(a - n);
                break;
              case 'subtract':
                h[d] = o - i,
                h[d + 1] = s - r,
                h[d + 2] = a - n;
                break;
              case 'darken':
                h[d] = Math.min(o, i),
                h[d + 1] = Math.min(s, r),
                h[d + 2] = Math.min(a, n);
                break;
              case 'lighten':
                h[d] = Math.max(o, i),
                h[d + 1] = Math.max(s, r),
                h[d + 2] = Math.max(a, n);
                break;
              case 'overlay':
                h[d] = i < 128 ? 2 * o * i / 255 : 255 - 2 * (255 - o) * (255 - i) / 255,
                h[d + 1] = r < 128 ? 2 * s * r / 255 : 255 - 2 * (255 - s) * (255 - r) / 255,
                h[d + 2] = n < 128 ? 2 * a * n / 255 : 255 - 2 * (255 - a) * (255 - n) / 255;
                break;
              case 'exclusion':
                h[d] = i + o - 2 * i * o / 255,
                h[d + 1] = r + s - 2 * r * s / 255,
                h[d + 2] = n + a - 2 * n * a / 255;
                break;
              case 'tint':
                h[d] = i + o * u,
                h[d + 1] = r + s * u,
                h[d + 2] = n + a * u
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uColor: e.getUniformLocation(t, 'uColor')
            }
          },
          sendUniformData: function (e, i) {
            var r = new t.Color(this.color).getSource();
            r[0] = this.alpha * r[0] / 255,
            r[1] = this.alpha * r[1] / 255,
            r[2] = this.alpha * r[2] / 255,
            r[3] = this.alpha,
            e.uniform4fv(i.uColor, r)
          },
          toObject: function () {
            return {
              type: this.type,
              color: this.color,
              mode: this.mode,
              alpha: this.alpha
            }
          }
        }),
        t.Image.filters.BlendColor.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric,
        i = t.Image.filters,
        r = t.util.createClass;
        i.BlendImage = r(i.BaseFilter, {
          type: 'BlendImage',
          image: null,
          mode: 'multiply',
          alpha: 1,
          vertexSource: 'attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}',
          fragmentSource: {
            multiply: 'precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}',
            mask: 'precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}'
          },
          retrieveShader: function (e) {
            var t = this.type + '_' + this.mode,
            i = this.fragmentSource[this.mode];
            return e.programCache.hasOwnProperty(t) || (e.programCache[t] = this.createProgram(e.context, i)),
            e.programCache[t]
          },
          applyToWebGL: function (e) {
            var t = e.context,
            i = this.createTexture(e.filterBackend, this.image);
            this.bindAdditionalTexture(t, i, t.TEXTURE1),
            this.callSuper('applyToWebGL', e),
            this.unbindAdditionalTexture(t, t.TEXTURE1)
          },
          createTexture: function (e, t) {
            return e.getCachedTexture(t.cacheKey, t._element)
          },
          calculateMatrix: function () {
            var e = this.image,
            t = e._element.width,
            i = e._element.height;
            return [1 / e.scaleX,
            0,
            0,
            0,
            1 / e.scaleY,
            0,
            - e.left / t,
            - e.top / i,
            1]
          },
          applyTo2d: function (e) {
            var i,
            r,
            n,
            o,
            s,
            a,
            l,
            h,
            c,
            u,
            d,
            f = e.imageData,
            g = e.filterBackend.resources,
            _ = f.data,
            p = _.length,
            m = f.width,
            v = f.height,
            y = this.image;
            g.blendImage || (g.blendImage = t.util.createCanvasElement()),
            u = (c = g.blendImage).getContext('2d'),
            c.width !== m || c.height !== v ? (c.width = m, c.height = v) : u.clearRect(0, 0, m, v),
            u.setTransform(y.scaleX, 0, 0, y.scaleY, y.left, y.top),
            u.drawImage(y._element, 0, 0, m, v),
            d = u.getImageData(0, 0, m, v).data;
            for (var S = 0; S < p; S += 4) switch (s = _[S], a = _[S + 1], l = _[S + 2], h = _[S + 3], i = d[S], r = d[S + 1], n = d[S + 2], o = d[S + 3], this.mode) {
              case 'multiply':
                _[S] = s * i / 255,
                _[S + 1] = a * r / 255,
                _[S + 2] = l * n / 255,
                _[S + 3] = h * o / 255;
                break;
              case 'mask':
                _[S + 3] = o
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uTransformMatrix: e.getUniformLocation(t, 'uTransformMatrix'),
              uImage: e.getUniformLocation(t, 'uImage')
            }
          },
          sendUniformData: function (e, t) {
            var i = this.calculateMatrix();
            e.uniform1i(t.uImage, 1),
            e.uniformMatrix3fv(t.uTransformMatrix, !1, i)
          },
          toObject: function () {
            return {
              type: this.type,
              image: this.image && this.image.toObject(),
              mode: this.mode,
              alpha: this.alpha
            }
          }
        }),
        t.Image.filters.BlendImage.fromObject = function (e, i) {
          t.Image.fromObject(e.image, (function (r) {
            var n = t.util.object.clone(e);
            n.image = r,
            i(new t.Image.filters.BlendImage(n))
          }))
        }
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = Math.pow,
        r = Math.floor,
        n = Math.sqrt,
        o = Math.abs,
        s = Math.round,
        a = Math.sin,
        l = Math.ceil,
        h = t.Image.filters,
        c = t.util.createClass;
        h.Resize = c(h.BaseFilter, {
          type: 'Resize',
          resizeType: 'hermite',
          scaleX: 1,
          scaleY: 1,
          lanczosLobes: 3,
          getUniformLocations: function (e, t) {
            return {
              uDelta: e.getUniformLocation(t, 'uDelta'),
              uTaps: e.getUniformLocation(t, 'uTaps')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform2fv(t.uDelta, this.horizontal ? [
              1 / this.width,
              0
            ] : [
              0,
              1 / this.height
            ]),
            e.uniform1fv(t.uTaps, this.taps)
          },
          retrieveShader: function (e) {
            var t = this.getFilterWindow(),
            i = this.type + '_' + t;
            if (!e.programCache.hasOwnProperty(i)) {
              var r = this.generateShader(t);
              e.programCache[i] = this.createProgram(e.context, r)
            }
            return e.programCache[i]
          },
          getFilterWindow: function () {
            var e = this.tempScale;
            return Math.ceil(this.lanczosLobes / e)
          },
          getTaps: function () {
            for (var e = this.lanczosCreate(this.lanczosLobes), t = this.tempScale, i = this.getFilterWindow(), r = new Array(i), n = 1; n <= i; n++) r[n - 1] = e(n * t);
            return r
          },
          generateShader: function (e) {
            for (var t = new Array(e), i = this.fragmentSourceTOP, r = 1; r <= e; r++) t[r - 1] = r + '.0 * uDelta';
            return i += 'uniform float uTaps[' + e + '];\n',
            i += 'void main() {\n',
            i += '  vec4 color = texture2D(uTexture, vTexCoord);\n',
            i += '  float sum = 1.0;\n',
            t.forEach((function (e, t) {
              i += '  color += texture2D(uTexture, vTexCoord + ' + e + ') * uTaps[' + t + '];\n',
              i += '  color += texture2D(uTexture, vTexCoord - ' + e + ') * uTaps[' + t + '];\n',
              i += '  sum += 2.0 * uTaps[' + t + '];\n'
            })),
            i += '  gl_FragColor = color / sum;\n',
            i += '}'
          },
          fragmentSourceTOP: 'precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n',
          applyTo: function (e) {
            e.webgl ? (e.passes++, this.width = e.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = e.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), e.destinationWidth = this.dW, this._setupFrameBuffer(e), this.applyToWebGL(e), this._swapTextures(e), e.sourceWidth = e.destinationWidth, this.height = e.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), e.destinationHeight = this.dH, this._setupFrameBuffer(e), this.applyToWebGL(e), this._swapTextures(e), e.sourceHeight = e.destinationHeight) : this.applyTo2d(e)
          },
          isNeutralState: function () {
            return 1 === this.scaleX && 1 === this.scaleY
          },
          lanczosCreate: function (e) {
            return function (t) {
              if (t >= e || t <= - e) return 0;
              if (t < 1.1920929e-7 && t > - 1.1920929e-7) return 1;
              var i = (t *= Math.PI) / e;
              return a(t) / t * a(i) / i
            }
          },
          applyTo2d: function (e) {
            var t = e.imageData,
            i = this.scaleX,
            r = this.scaleY;
            this.rcpScaleX = 1 / i,
            this.rcpScaleY = 1 / r;
            var n,
            o = t.width,
            a = t.height,
            l = s(o * i),
            h = s(a * r);
            'sliceHack' === this.resizeType ? n = this.sliceByTwo(e, o, a, l, h) : 'hermite' === this.resizeType ? n = this.hermiteFastResize(e, o, a, l, h) : 'bilinear' === this.resizeType ? n = this.bilinearFiltering(e, o, a, l, h) : 'lanczos' === this.resizeType && (n = this.lanczosResize(e, o, a, l, h)),
            e.imageData = n
          },
          sliceByTwo: function (e, i, n, o, s) {
            var a,
            l,
            h = e.imageData,
            c = 0.5,
            u = !1,
            d = !1,
            f = i * c,
            g = n * c,
            _ = t.filterBackend.resources,
            p = 0,
            m = 0,
            v = i,
            y = 0;
            for (_.sliceByTwo || (_.sliceByTwo = document.createElement('canvas')), ((a = _.sliceByTwo).width < 1.5 * i || a.height < n) && (a.width = 1.5 * i, a.height = n), (l = a.getContext('2d')).clearRect(0, 0, 1.5 * i, n), l.putImageData(h, 0, 0), o = r(o), s = r(s); !u || !d; ) i = f,
            n = g,
            o < r(f * c) ? f = r(f * c) : (f = o, u = !0),
            s < r(g * c) ? g = r(g * c) : (g = s, d = !0),
            l.drawImage(a, p, m, i, n, v, y, f, g),
            p = v,
            m = y,
            y += g;
            return l.getImageData(p, m, o, s)
          },
          lanczosResize: function (e, t, s, a, h) {
            var c = e.imageData.data,
            u = e.ctx.createImageData(a, h),
            d = u.data,
            f = this.lanczosCreate(this.lanczosLobes),
            g = this.rcpScaleX,
            _ = this.rcpScaleY,
            p = 2 / this.rcpScaleX,
            m = 2 / this.rcpScaleY,
            v = l(g * this.lanczosLobes / 2),
            y = l(_ * this.lanczosLobes / 2),
            S = {
            },
            b = {
            },
            C = {
            };
            return function e(l) {
              var w,
              T,
              x,
              E,
              A,
              I,
              O,
              R,
              D,
              M,
              L;
              for (b.x = (l + 0.5) * g, C.x = r(b.x), w = 0; w < h; w++) {
                for (b.y = (w + 0.5) * _, C.y = r(b.y), A = 0, I = 0, O = 0, R = 0, D = 0, T = C.x - v; T <= C.x + v; T++) if (!(T < 0 || T >= t)) {
                  M = r(1000 * o(T - b.x)),
                  S[M] || (S[M] = {
                  });
                  for (var F = C.y - y; F <= C.y + y; F++) F < 0 || F >= s || (L = r(1000 * o(F - b.y)), S[M][L] || (S[M][L] = f(n(i(M * p, 2) + i(L * m, 2)) / 1000)), (x = S[M][L]) > 0 && (A += x, I += x * c[E = 4 * (F * t + T)], O += x * c[E + 1], R += x * c[E + 2], D += x * c[E + 3]))
                }
                d[E = 4 * (w * a + l)] = I / A,
                d[E + 1] = O / A,
                d[E + 2] = R / A,
                d[E + 3] = D / A
              }
              return ++l < a ? e(l) : u
            }(0)
          },
          bilinearFiltering: function (e, t, i, n, o) {
            var s,
            a,
            l,
            h,
            c,
            u,
            d,
            f,
            g,
            _ = 0,
            p = this.rcpScaleX,
            m = this.rcpScaleY,
            v = 4 * (t - 1),
            y = e.imageData.data,
            S = e.ctx.createImageData(n, o),
            b = S.data;
            for (l = 0; l < o; l++) for (h = 0; h < n; h++) for (c = p * h - (s = r(p * h)), u = m * l - (a = r(m * l)), g = 4 * (a * t + s), d = 0; d < 4; d++) f = y[g + d] * (1 - c) * (1 - u) + y[g + 4 + d] * c * (1 - u) + y[g + v + d] * u * (1 - c) + y[g + v + 4 + d] * c * u,
            b[_++] = f;
            return S
          },
          hermiteFastResize: function (e, t, i, s, a) {
            for (var h = this.rcpScaleX, c = this.rcpScaleY, u = l(h / 2), d = l(c / 2), f = e.imageData.data, g = e.ctx.createImageData(s, a), _ = g.data, p = 0; p < a; p++) for (var m = 0; m < s; m++) {
              for (var v = 4 * (m + p * s), y = 0, S = 0, b = 0, C = 0, w = 0, T = 0, x = 0, E = (p + 0.5) * c, A = r(p * c); A < (p + 1) * c; A++) for (var I = o(E - (A + 0.5)) / d, O = (m + 0.5) * h, R = I * I, D = r(m * h); D < (m + 1) * h; D++) {
                var M = o(O - (D + 0.5)) / u,
                L = n(R + M * M);
                L > 1 && L < - 1 || (y = 2 * L * L * L - 3 * L * L + 1) > 0 && (x += y * f[3 + (M = 4 * (D + A * t))], b += y, f[M + 3] < 255 && (y = y * f[M + 3] / 250), C += y * f[M], w += y * f[M + 1], T += y * f[M + 2], S += y)
              }
              _[v] = C / S,
              _[v + 1] = w / S,
              _[v + 2] = T / S,
              _[v + 3] = x / b
            }
            return g
          },
          toObject: function () {
            return {
              type: this.type,
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              resizeType: this.resizeType,
              lanczosLobes: this.lanczosLobes
            }
          }
        }),
        t.Image.filters.Resize.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Contrast = r(i.BaseFilter, {
          type: 'Contrast',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}',
          contrast: 0,
          mainParameter: 'contrast',
          applyTo2d: function (e) {
            if (0 !== this.contrast) {
              var t,
              i = e.imageData.data,
              r = i.length,
              n = Math.floor(255 * this.contrast),
              o = 259 * (n + 255) / (255 * (259 - n));
              for (t = 0; t < r; t += 4) i[t] = o * (i[t] - 128) + 128,
              i[t + 1] = o * (i[t + 1] - 128) + 128,
              i[t + 2] = o * (i[t + 2] - 128) + 128
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uContrast: e.getUniformLocation(t, 'uContrast')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uContrast, this.contrast)
          }
        }),
        t.Image.filters.Contrast.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Saturation = r(i.BaseFilter, {
          type: 'Saturation',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}',
          saturation: 0,
          mainParameter: 'saturation',
          applyTo2d: function (e) {
            if (0 !== this.saturation) {
              var t,
              i,
              r = e.imageData.data,
              n = r.length,
              o = - this.saturation;
              for (t = 0; t < n; t += 4) i = Math.max(r[t], r[t + 1], r[t + 2]),
              r[t] += i !== r[t] ? (i - r[t]) * o : 0,
              r[t + 1] += i !== r[t + 1] ? (i - r[t + 1]) * o : 0,
              r[t + 2] += i !== r[t + 2] ? (i - r[t + 2]) * o : 0
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uSaturation: e.getUniformLocation(t, 'uSaturation')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uSaturation, - this.saturation)
          }
        }),
        t.Image.filters.Saturation.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Vibrance = r(i.BaseFilter, {
          type: 'Vibrance',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform float uVibrance;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat max = max(color.r, max(color.g, color.b));\nfloat avg = (color.r + color.g + color.b) / 3.0;\nfloat amt = (abs(max - avg) * 2.0) * uVibrance;\ncolor.r += max != color.r ? (max - color.r) * amt : 0.00;\ncolor.g += max != color.g ? (max - color.g) * amt : 0.00;\ncolor.b += max != color.b ? (max - color.b) * amt : 0.00;\ngl_FragColor = color;\n}',
          vibrance: 0,
          mainParameter: 'vibrance',
          applyTo2d: function (e) {
            if (0 !== this.vibrance) {
              var t,
              i,
              r,
              n,
              o = e.imageData.data,
              s = o.length,
              a = - this.vibrance;
              for (t = 0; t < s; t += 4) i = Math.max(o[t], o[t + 1], o[t + 2]),
              r = (o[t] + o[t + 1] + o[t + 2]) / 3,
              n = 2 * Math.abs(i - r) / 255 * a,
              o[t] += i !== o[t] ? (i - o[t]) * n : 0,
              o[t + 1] += i !== o[t + 1] ? (i - o[t + 1]) * n : 0,
              o[t + 2] += i !== o[t + 2] ? (i - o[t + 2]) * n : 0
            }
          },
          getUniformLocations: function (e, t) {
            return {
              uVibrance: e.getUniformLocation(t, 'uVibrance')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform1f(t.uVibrance, - this.vibrance)
          }
        }),
        t.Image.filters.Vibrance.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Blur = r(i.BaseFilter, {
          type: 'Blur',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}',
          blur: 0,
          mainParameter: 'blur',
          applyTo: function (e) {
            e.webgl ? (this.aspectRatio = e.sourceWidth / e.sourceHeight, e.passes++, this._setupFrameBuffer(e), this.horizontal = !0, this.applyToWebGL(e), this._swapTextures(e), this._setupFrameBuffer(e), this.horizontal = !1, this.applyToWebGL(e), this._swapTextures(e)) : this.applyTo2d(e)
          },
          applyTo2d: function (e) {
            e.imageData = this.simpleBlur(e)
          },
          simpleBlur: function (e) {
            var i,
            r,
            n = e.filterBackend.resources,
            o = e.imageData.width,
            s = e.imageData.height;
            n.blurLayer1 || (n.blurLayer1 = t.util.createCanvasElement(), n.blurLayer2 = t.util.createCanvasElement()),
            i = n.blurLayer1,
            r = n.blurLayer2,
            i.width === o && i.height === s || (r.width = i.width = o, r.height = i.height = s);
            var a,
            l,
            h,
            c,
            u = i.getContext('2d'),
            d = r.getContext('2d'),
            f = 0.06 * this.blur * 0.5;
            for (u.putImageData(e.imageData, 0, 0), d.clearRect(0, 0, o, s), c = - 15; c <= 15; c++) h = f * (l = c / 15) * o + (a = (Math.random() - 0.5) / 4),
            d.globalAlpha = 1 - Math.abs(l),
            d.drawImage(i, h, a),
            u.drawImage(r, 0, 0),
            d.globalAlpha = 1,
            d.clearRect(0, 0, r.width, r.height);
            for (c = - 15; c <= 15; c++) h = f * (l = c / 15) * s + (a = (Math.random() - 0.5) / 4),
            d.globalAlpha = 1 - Math.abs(l),
            d.drawImage(i, a, h),
            u.drawImage(r, 0, 0),
            d.globalAlpha = 1,
            d.clearRect(0, 0, r.width, r.height);
            e.ctx.drawImage(i, 0, 0);
            var g = e.ctx.getImageData(0, 0, i.width, i.height);
            return u.globalAlpha = 1,
            u.clearRect(0, 0, i.width, i.height),
            g
          },
          getUniformLocations: function (e, t) {
            return {
              delta: e.getUniformLocation(t, 'uDelta')
            }
          },
          sendUniformData: function (e, t) {
            var i = this.chooseRightDelta();
            e.uniform2fv(t.delta, i)
          },
          chooseRightDelta: function () {
            var e,
            t = 1,
            i = [
              0,
              0
            ];
            return this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio),
            e = t * this.blur * 0.12,
            this.horizontal ? i[0] = e : i[1] = e,
            i
          }
        }),
        i.Blur.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Gamma = r(i.BaseFilter, {
          type: 'Gamma',
          fragmentSource: 'precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}',
          gamma: [
            1,
            1,
            1
          ],
          mainParameter: 'gamma',
          initialize: function (e) {
            this.gamma = [
              1,
              1,
              1
            ],
            i.BaseFilter.prototype.initialize.call(this, e)
          },
          applyTo2d: function (e) {
            var t,
            i = e.imageData.data,
            r = this.gamma,
            n = i.length,
            o = 1 / r[0],
            s = 1 / r[1],
            a = 1 / r[2];
            for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), t = 0, n = 256; t < n; t++) this.rVals[t] = 255 * Math.pow(t / 255, o),
            this.gVals[t] = 255 * Math.pow(t / 255, s),
            this.bVals[t] = 255 * Math.pow(t / 255, a);
            for (t = 0, n = i.length; t < n; t += 4) i[t] = this.rVals[i[t]],
            i[t + 1] = this.gVals[i[t + 1]],
            i[t + 2] = this.bVals[i[t + 2]]
          },
          getUniformLocations: function (e, t) {
            return {
              uGamma: e.getUniformLocation(t, 'uGamma')
            }
          },
          sendUniformData: function (e, t) {
            e.uniform3fv(t.uGamma, this.gamma)
          }
        }),
        t.Image.filters.Gamma.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.Composed = r(i.BaseFilter, {
          type: 'Composed',
          subFilters: [
          ],
          initialize: function (e) {
            this.callSuper('initialize', e),
            this.subFilters = this.subFilters.slice(0)
          },
          applyTo: function (e) {
            e.passes += this.subFilters.length - 1,
            this.subFilters.forEach((function (t) {
              t.applyTo(e)
            }))
          },
          toObject: function () {
            return t.util.object.extend(this.callSuper('toObject'), {
              subFilters: this.subFilters.map((function (e) {
                return e.toObject()
              }))
            })
          },
          isNeutralState: function () {
            return !this.subFilters.some((function (e) {
              return !e.isNeutralState()
            }))
          }
        }),
        t.Image.filters.Composed.fromObject = function (e, i) {
          var r = (e.subFilters || [
          ]).map((function (e) {
            return new t.Image.filters[e.type](e)
          })),
          n = new t.Image.filters.Composed({
            subFilters: r
          });
          return i && i(n),
          n
        }
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.Image.filters,
        r = t.util.createClass;
        i.HueRotation = r(i.ColorMatrix, {
          type: 'HueRotation',
          rotation: 0,
          mainParameter: 'rotation',
          calculateMatrix: function () {
            var e = this.rotation * Math.PI,
            i = t.util.cos(e),
            r = t.util.sin(e),
            n = 1 / 3,
            o = Math.sqrt(n) * r,
            s = 1 - i;
            this.matrix = [
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1,
              0
            ],
            this.matrix[0] = i + s / 3,
            this.matrix[1] = n * s - o,
            this.matrix[2] = n * s + o,
            this.matrix[5] = n * s + o,
            this.matrix[6] = i + n * s,
            this.matrix[7] = n * s - o,
            this.matrix[10] = n * s - o,
            this.matrix[11] = n * s + o,
            this.matrix[12] = i + n * s
          },
          isNeutralState: function (e) {
            return this.calculateMatrix(),
            i.BaseFilter.prototype.isNeutralState.call(this, e)
          },
          applyTo: function (e) {
            this.calculateMatrix(),
            i.BaseFilter.prototype.applyTo.call(this, e)
          }
        }),
        t.Image.filters.HueRotation.fromObject = t.Image.filters.BaseFilter.fromObject
      }(t),
      function (e) {
        var t = e.fabric || (e.fabric = {
        }),
        i = t.util.object.clone;
        if (t.Text) t.warn('fabric.Text is already defined');
         else {
          var r = 'fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign'.split(' ');
          t.Text = t.util.createClass(t.Object, {
            _dimensionAffectingProps: [
              'fontSize',
              'fontWeight',
              'fontFamily',
              'fontStyle',
              'lineHeight',
              'text',
              'charSpacing',
              'textAlign',
              'styles',
              'path',
              'pathStartOffset',
              'pathSide',
              'pathAlign'
            ],
            _reNewline: /\r?\n/,
            _reSpacesAndTabs: /[ \t\r]/g,
            _reSpaceAndTab: /[ \t\r]/,
            _reWords: /\S+/g,
            type: 'text',
            fontSize: 40,
            fontWeight: 'normal',
            fontFamily: 'Times New Roman',
            underline: !1,
            overline: !1,
            linethrough: !1,
            textAlign: 'left',
            fontStyle: 'normal',
            lineHeight: 1.16,
            superscript: {
              size: 0.6,
              baseline: - 0.35
            },
            subscript: {
              size: 0.6,
              baseline: 0.11
            },
            textBackgroundColor: '',
            stateProperties: t.Object.prototype.stateProperties.concat(r),
            cacheProperties: t.Object.prototype.cacheProperties.concat(r),
            stroke: null,
            shadow: null,
            path: null,
            pathStartOffset: 0,
            pathSide: 'left',
            pathAlign: 'baseline',
            _fontSizeFraction: 0.222,
            offsets: {
              underline: 0.1,
              linethrough: - 0.315,
              overline: - 0.88
            },
            _fontSizeMult: 1.13,
            charSpacing: 0,
            styles: null,
            _measuringContext: null,
            deltaY: 0,
            direction: 'ltr',
            _styleProperties: [
              'stroke',
              'strokeWidth',
              'fill',
              'fontFamily',
              'fontSize',
              'fontWeight',
              'fontStyle',
              'underline',
              'overline',
              'linethrough',
              'deltaY',
              'textBackgroundColor'
            ],
            __charBounds: [
            ],
            CACHE_FONT_SIZE: 400,
            MIN_TEXT_WIDTH: 2,
            initialize: function (e, t) {
              this.styles = t && t.styles || {
              },
              this.text = e,
              this.__skipDimension = !0,
              this.callSuper('initialize', t),
              this.path && this.setPathInfo(),
              this.__skipDimension = !1,
              this.initDimensions(),
              this.setCoords(),
              this.setupState({
                propertySet: '_dimensionAffectingProps'
              })
            },
            setPathInfo: function () {
              var e = this.path;
              e && (e.segmentsInfo = t.util.getPathSegmentsInfo(e.path))
            },
            getMeasuringContext: function () {
              return t._measuringContext || (t._measuringContext = this.canvas && this.canvas.contextCache || t.util.createCanvasElement().getContext('2d')),
              t._measuringContext
            },
            _splitText: function () {
              var e = this._splitTextIntoLines(this.text);
              return this.textLines = e.lines,
              this._textLines = e.graphemeLines,
              this._unwrappedTextLines = e._unwrappedLines,
              this._text = e.graphemeText,
              e
            },
            initDimensions: function () {
              this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), - 1 !== this.textAlign.indexOf('justify') && this.enlargeSpaces(), this.saveState({
                propertySet: '_dimensionAffectingProps'
              }))
            },
            enlargeSpaces: function () {
              for (var e, t, i, r, n, o, s, a = 0, l = this._textLines.length; a < l; a++) if (('justify' === this.textAlign || a !== l - 1 && !this.isEndOfWrapping(a)) && (r = 0, n = this._textLines[a], (t = this.getLineWidth(a)) < this.width && (s = this.textLines[a].match(this._reSpacesAndTabs)))) {
                i = s.length,
                e = (this.width - t) / i;
                for (var h = 0, c = n.length; h <= c; h++) o = this.__charBounds[a][h],
                this._reSpaceAndTab.test(n[h]) ? (o.width += e, o.kernedWidth += e, o.left += r, r += e) : o.left += r
              }
            },
            isEndOfWrapping: function (e) {
              return e === this._textLines.length - 1
            },
            missingNewlineOffset: function () {
              return 1
            },
            toString: function () {
              return '#<fabric.Text (' + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>'
            },
            _getCacheCanvasDimensions: function () {
              var e = this.callSuper('_getCacheCanvasDimensions'),
              t = this.fontSize;
              return e.width += t * e.zoomX,
              e.height += t * e.zoomY,
              e
            },
            _render: function (e) {
              var t = this.path;
              t && !t.isNotVisible() && t._render(e),
              this._setTextStyles(e),
              this._renderTextLinesBackground(e),
              this._renderTextDecoration(e, 'underline'),
              this._renderText(e),
              this._renderTextDecoration(e, 'overline'),
              this._renderTextDecoration(e, 'linethrough')
            },
            _renderText: function (e) {
              'stroke' === this.paintFirst ? (this._renderTextStroke(e), this._renderTextFill(e)) : (this._renderTextFill(e), this._renderTextStroke(e))
            },
            _setTextStyles: function (e, t, i) {
              if (e.textBaseline = 'alphabetical', this.path) switch (this.pathAlign) {
                case 'center':
                  e.textBaseline = 'middle';
                  break;
                case 'ascender':
                  e.textBaseline = 'top';
                  break;
                case 'descender':
                  e.textBaseline = 'bottom'
              }
              e.font = this._getFontDeclaration(t, i)
            },
            calcTextWidth: function () {
              for (var e = this.getLineWidth(0), t = 1, i = this._textLines.length; t < i; t++) {
                var r = this.getLineWidth(t);
                r > e && (e = r)
              }
              return e
            },
            _renderTextLine: function (e, t, i, r, n, o) {
              this._renderChars(e, t, i, r, n, o)
            },
            _renderTextLinesBackground: function (e) {
              if (this.textBackgroundColor || this.styleHas('textBackgroundColor')) {
                for (var t, i, r, n, o, s, a, l = e.fillStyle, h = this._getLeftOffset(), c = this._getTopOffset(), u = 0, d = 0, f = this.path, g = 0, _ = this._textLines.length; g < _; g++) if (t = this.getHeightOfLine(g), this.textBackgroundColor || this.styleHas('textBackgroundColor', g)) {
                  r = this._textLines[g],
                  i = this._getLineLeftOffset(g),
                  d = 0,
                  u = 0,
                  n = this.getValueOfPropertyAt(g, 0, 'textBackgroundColor');
                  for (var p = 0, m = r.length; p < m; p++) o = this.__charBounds[g][p],
                  s = this.getValueOfPropertyAt(g, p, 'textBackgroundColor'),
                  f ? (e.save(), e.translate(o.renderLeft, o.renderTop), e.rotate(o.angle), e.fillStyle = s, s && e.fillRect( - o.width / 2, - t / this.lineHeight * (1 - this._fontSizeFraction), o.width, t / this.lineHeight), e.restore()) : s !== n ? (a = h + i + u, 'rtl' === this.direction && (a = this.width - a - d), e.fillStyle = n, n && e.fillRect(a, c, d, t / this.lineHeight), u = o.left, d = o.width, n = s) : d += o.kernedWidth;
                  s && !f && (a = h + i + u, 'rtl' === this.direction && (a = this.width - a - d), e.fillStyle = s, e.fillRect(a, c, d, t / this.lineHeight)),
                  c += t
                } else c += t;
                e.fillStyle = l,
                this._removeShadow(e)
              }
            },
            getFontCache: function (e) {
              var i = e.fontFamily.toLowerCase();
              t.charWidthsCache[i] || (t.charWidthsCache[i] = {
              });
              var r = t.charWidthsCache[i],
              n = e.fontStyle.toLowerCase() + '_' + (e.fontWeight + '').toLowerCase();
              return r[n] || (r[n] = {
              }),
              r[n]
            },
            _measureChar: function (e, t, i, r) {
              var n,
              o,
              s,
              a,
              l = this.getFontCache(t),
              h = i + e,
              c = this._getFontDeclaration(t) === this._getFontDeclaration(r),
              u = t.fontSize / this.CACHE_FONT_SIZE;
              if (i && void 0 !== l[i] && (s = l[i]), void 0 !== l[e] && (a = n = l[e]), c && void 0 !== l[h] && (a = (o = l[h]) - s), void 0 === n || void 0 === s || void 0 === o) {
                var d = this.getMeasuringContext();
                this._setTextStyles(d, t, !0)
              }
              return void 0 === n && (a = n = d.measureText(e).width, l[e] = n),
              void 0 === s && c && i && (s = d.measureText(i).width, l[i] = s),
              c && void 0 === o && (o = d.measureText(h).width, l[h] = o, a = o - s),
              {
                width: n * u,
                kernedWidth: a * u
              }
            },
            getHeightOfChar: function (e, t) {
              return this.getValueOfPropertyAt(e, t, 'fontSize')
            },
            measureLine: function (e) {
              var t = this._measureLine(e);
              return 0 !== this.charSpacing && (t.width -= this._getWidthOfCharSpacing()),
              t.width < 0 && (t.width = 0),
              t
            },
            _measureLine: function (e) {
              var i,
              r,
              n,
              o,
              s,
              a,
              l = 0,
              h = this._textLines[e],
              c = new Array(h.length),
              u = 0,
              d = this.path,
              f = 'right' === this.pathSide;
              for (this.__charBounds[e] = c, i = 0; i < h.length; i++) r = h[i],
              o = this._getGraphemeBox(r, e, i, n),
              c[i] = o,
              l += o.kernedWidth,
              n = r;
              if (c[i] = {
                left: o ? o.left + o.width : 0,
                width: 0,
                kernedWidth: 0,
                height: this.fontSize
              }, d) {
                switch (a = d.segmentsInfo[d.segmentsInfo.length - 1].length, (s = t.util.getPointOnPath(d.path, 0, d.segmentsInfo)).x += d.pathOffset.x, s.y += d.pathOffset.y, this.textAlign) {
                  case 'left':
                    u = f ? a - l : 0;
                    break;
                  case 'center':
                    u = (a - l) / 2;
                    break;
                  case 'right':
                    u = f ? 0 : a - l
                }
                for (u += this.pathStartOffset * (f ? - 1 : 1), i = f ? h.length - 1 : 0; f ? i >= 0 : i < h.length; f ? i-- : i++) o = c[i],
                u > a ? u %= a : u < 0 && (u += a),
                this._setGraphemeOnPath(u, o, s),
                u += o.kernedWidth
              }
              return {
                width: l,
                numOfSpaces: 0
              }
            },
            _setGraphemeOnPath: function (e, i, r) {
              var n = e + i.kernedWidth / 2,
              o = this.path,
              s = t.util.getPointOnPath(o.path, n, o.segmentsInfo);
              i.renderLeft = s.x - r.x,
              i.renderTop = s.y - r.y,
              i.angle = s.angle + ('right' === this.pathSide ? Math.PI : 0)
            },
            _getGraphemeBox: function (e, t, i, r, n) {
              var o,
              s = this.getCompleteStyleDeclaration(t, i),
              a = r ? this.getCompleteStyleDeclaration(t, i - 1) : {
              },
              l = this._measureChar(e, s, r, a),
              h = l.kernedWidth,
              c = l.width;
              0 !== this.charSpacing && (c += o = this._getWidthOfCharSpacing(), h += o);
              var u = {
                width: c,
                left: 0,
                height: s.fontSize,
                kernedWidth: h,
                deltaY: s.deltaY
              };
              if (i > 0 && !n) {
                var d = this.__charBounds[t][i - 1];
                u.left = d.left + d.width + l.kernedWidth - l.width
              }
              return u
            },
            getHeightOfLine: function (e) {
              if (this.__lineHeights[e]) return this.__lineHeights[e];
              for (var t = this._textLines[e], i = this.getHeightOfChar(e, 0), r = 1, n = t.length; r < n; r++) i = Math.max(this.getHeightOfChar(e, r), i);
              return this.__lineHeights[e] = i * this.lineHeight * this._fontSizeMult
            },
            calcTextHeight: function () {
              for (var e, t = 0, i = 0, r = this._textLines.length; i < r; i++) e = this.getHeightOfLine(i),
              t += i === r - 1 ? e / this.lineHeight : e;
              return t
            },
            _getLeftOffset: function () {
              return 'ltr' === this.direction ? - this.width / 2 : this.width / 2
            },
            _getTopOffset: function () {
              return - this.height / 2
            },
            _renderTextCommon: function (e, t) {
              e.save();
              for (var i = 0, r = this._getLeftOffset(), n = this._getTopOffset(), o = 0, s = this._textLines.length; o < s; o++) {
                var a = this.getHeightOfLine(o),
                l = a / this.lineHeight,
                h = this._getLineLeftOffset(o);
                this._renderTextLine(t, e, this._textLines[o], r + h, n + i + l, o),
                i += a
              }
              e.restore()
            },
            _renderTextFill: function (e) {
              (this.fill || this.styleHas('fill')) && this._renderTextCommon(e, 'fillText')
            },
            _renderTextStroke: function (e) {
              (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(e), e.save(), this._setLineDash(e, this.strokeDashArray), e.beginPath(), this._renderTextCommon(e, 'strokeText'), e.closePath(), e.restore())
            },
            _renderChars: function (e, t, i, r, n, o) {
              var s,
              a,
              l,
              h,
              c,
              u = this.getHeightOfLine(o),
              d = - 1 !== this.textAlign.indexOf('justify'),
              f = '',
              g = 0,
              _ = this.path,
              p = !d && 0 === this.charSpacing && this.isEmptyStyles(o) && !_,
              m = 'ltr' === this.direction,
              v = 'ltr' === this.direction ? 1 : - 1,
              y = t.canvas.getAttribute('dir');
              if (t.save(), y !== this.direction && (t.canvas.setAttribute('dir', m ? 'ltr' : 'rtl'), t.direction = m ? 'ltr' : 'rtl', t.textAlign = m ? 'left' : 'right'), n -= u * this._fontSizeFraction / this.lineHeight, p) return this._renderChar(e, t, o, 0, i.join(''), r, n, u),
              void t.restore();
              for (var S = 0, b = i.length - 1; S <= b; S++) h = S === b || this.charSpacing || _,
              f += i[S],
              l = this.__charBounds[o][S],
              0 === g ? (r += v * (l.kernedWidth - l.width), g += l.width) : g += l.kernedWidth,
              d && !h && this._reSpaceAndTab.test(i[S]) && (h = !0),
              h || (s = s || this.getCompleteStyleDeclaration(o, S), a = this.getCompleteStyleDeclaration(o, S + 1), h = this._hasStyleChanged(s, a)),
              h && (_ ? (t.save(), t.translate(l.renderLeft, l.renderTop), t.rotate(l.angle), this._renderChar(e, t, o, S, f, - g / 2, 0, u), t.restore()) : (c = r, this._renderChar(e, t, o, S, f, c, n, u)), f = '', s = a, r += v * g, g = 0);
              t.restore()
            },
            _applyPatternGradientTransformText: function (e) {
              var i,
              r = t.util.createCanvasElement(),
              n = this.width + this.strokeWidth,
              o = this.height + this.strokeWidth;
              return r.width = n,
              r.height = o,
              (i = r.getContext('2d')).beginPath(),
              i.moveTo(0, 0),
              i.lineTo(n, 0),
              i.lineTo(n, o),
              i.lineTo(0, o),
              i.closePath(),
              i.translate(n / 2, o / 2),
              i.fillStyle = e.toLive(i),
              this._applyPatternGradientTransform(i, e),
              i.fill(),
              i.createPattern(r, 'no-repeat')
            },
            handleFiller: function (e, t, i) {
              var r,
              n;
              return i.toLive ? 'percentage' === i.gradientUnits || i.gradientTransform || i.patternTransform ? (r = - this.width / 2, n = - this.height / 2, e.translate(r, n), e[t] = this._applyPatternGradientTransformText(i), {
                offsetX: r,
                offsetY: n
              }) : (e[t] = i.toLive(e, this), this._applyPatternGradientTransform(e, i)) : (e[t] = i, {
                offsetX: 0,
                offsetY: 0
              })
            },
            _setStrokeStyles: function (e, t) {
              return e.lineWidth = t.strokeWidth,
              e.lineCap = this.strokeLineCap,
              e.lineDashOffset = this.strokeDashOffset,
              e.lineJoin = this.strokeLineJoin,
              e.miterLimit = this.strokeMiterLimit,
              this.handleFiller(e, 'strokeStyle', t.stroke)
            },
            _setFillStyles: function (e, t) {
              return this.handleFiller(e, 'fillStyle', t.fill)
            },
            _renderChar: function (e, t, i, r, n, o, s) {
              var a,
              l,
              h = this._getStyleDeclaration(i, r),
              c = this.getCompleteStyleDeclaration(i, r),
              u = 'fillText' === e && c.fill,
              d = 'strokeText' === e && c.stroke && c.strokeWidth;
              (d || u) && (t.save(), u && (a = this._setFillStyles(t, c)), d && (l = this._setStrokeStyles(t, c)), t.font = this._getFontDeclaration(c), h && h.textBackgroundColor && this._removeShadow(t), h && h.deltaY && (s += h.deltaY), u && t.fillText(n, o - a.offsetX, s - a.offsetY), d && t.strokeText(n, o - l.offsetX, s - l.offsetY), t.restore())
            },
            setSuperscript: function (e, t) {
              return this._setScript(e, t, this.superscript)
            },
            setSubscript: function (e, t) {
              return this._setScript(e, t, this.subscript)
            },
            _setScript: function (e, t, i) {
              var r = this.get2DCursorLocation(e, !0),
              n = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, 'fontSize'),
              o = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, 'deltaY'),
              s = {
                fontSize: n * i.size,
                deltaY: o + n * i.baseline
              };
              return this.setSelectionStyles(s, e, t),
              this
            },
            _hasStyleChanged: function (e, t) {
              return e.fill !== t.fill || e.stroke !== t.stroke || e.strokeWidth !== t.strokeWidth || e.fontSize !== t.fontSize || e.fontFamily !== t.fontFamily || e.fontWeight !== t.fontWeight || e.fontStyle !== t.fontStyle || e.deltaY !== t.deltaY
            },
            _hasStyleChangedForSvg: function (e, t) {
              return this._hasStyleChanged(e, t) || e.overline !== t.overline || e.underline !== t.underline || e.linethrough !== t.linethrough
            },
            _getLineLeftOffset: function (e) {
              var t = this.getLineWidth(e),
              i = this.width - t,
              r = this.textAlign,
              n = this.direction,
              o = 0,
              s = this.isEndOfWrapping(e);
              return 'justify' === r || 'justify-center' === r && !s || 'justify-right' === r && !s || 'justify-left' === r && !s ? 0 : ('center' === r && (o = i / 2), 'right' === r && (o = i), 'justify-center' === r && (o = i / 2), 'justify-right' === r && (o = i), 'rtl' === n && (o -= i), o)
            },
            _clearCache: function () {
              this.__lineWidths = [
              ],
              this.__lineHeights = [
              ],
              this.__charBounds = [
              ]
            },
            _shouldClearDimensionCache: function () {
              var e = this._forceClearCache;
              return e || (e = this.hasStateChanged('_dimensionAffectingProps')),
              e && (this.dirty = !0, this._forceClearCache = !1),
              e
            },
            getLineWidth: function (e) {
              if (void 0 !== this.__lineWidths[e]) return this.__lineWidths[e];
              var t = this.measureLine(e).width;
              return this.__lineWidths[e] = t,
              t
            },
            _getWidthOfCharSpacing: function () {
              return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1000 : 0
            },
            getValueOfPropertyAt: function (e, t, i) {
              var r = this._getStyleDeclaration(e, t);
              return r && void 0 !== r[i] ? r[i] : this[i]
            },
            _renderTextDecoration: function (e, t) {
              if (this[t] || this.styleHas(t)) {
                for (var i, r, n, o, s, a, l, h, c, u, d, f, g, _, p, m, v = this._getLeftOffset(), y = this._getTopOffset(), S = this.path, b = this._getWidthOfCharSpacing(), C = this.offsets[t], w = 0, T = this._textLines.length; w < T; w++) if (i = this.getHeightOfLine(w), this[t] || this.styleHas(t, w)) {
                  l = this._textLines[w],
                  _ = i / this.lineHeight,
                  o = this._getLineLeftOffset(w),
                  u = 0,
                  d = 0,
                  h = this.getValueOfPropertyAt(w, 0, t),
                  m = this.getValueOfPropertyAt(w, 0, 'fill'),
                  c = y + _ * (1 - this._fontSizeFraction),
                  r = this.getHeightOfChar(w, 0),
                  s = this.getValueOfPropertyAt(w, 0, 'deltaY');
                  for (var x = 0, E = l.length; x < E; x++) if (f = this.__charBounds[w][x], g = this.getValueOfPropertyAt(w, x, t), p = this.getValueOfPropertyAt(w, x, 'fill'), n = this.getHeightOfChar(w, x), a = this.getValueOfPropertyAt(w, x, 'deltaY'), S && g && p) e.save(),
                  e.fillStyle = m,
                  e.translate(f.renderLeft, f.renderTop),
                  e.rotate(f.angle),
                  e.fillRect( - f.kernedWidth / 2, C * n + a, f.kernedWidth, this.fontSize / 15),
                  e.restore();
                   else if ((g !== h || p !== m || n !== r || a !== s) && d > 0) {
                    var A = v + o + u;
                    'rtl' === this.direction && (A = this.width - A - d),
                    h && m && (e.fillStyle = m, e.fillRect(A, c + C * r + s, d, this.fontSize / 15)),
                    u = f.left,
                    d = f.width,
                    h = g,
                    m = p,
                    r = n,
                    s = a
                  } else d += f.kernedWidth;
                  A = v + o + u,
                  'rtl' === this.direction && (A = this.width - A - d),
                  e.fillStyle = p,
                  g && p && e.fillRect(A, c + C * r + s, d - b, this.fontSize / 15),
                  y += i
                } else y += i;
                this._removeShadow(e)
              }
            },
            _getFontDeclaration: function (e, i) {
              var r = e || this,
              n = this.fontFamily,
              o = t.Text.genericFonts.indexOf(n.toLowerCase()) > - 1,
              s = void 0 === n || n.indexOf('\'') > - 1 || n.indexOf(',') > - 1 || n.indexOf('"') > - 1 || o ? r.fontFamily : '"' + r.fontFamily + '"';
              return [t.isLikelyNode ? r.fontWeight : r.fontStyle,
              t.isLikelyNode ? r.fontStyle : r.fontWeight,
              i ? this.CACHE_FONT_SIZE + 'px' : r.fontSize + 'px',
              s].join(' ')
            },
            render: function (e) {
              this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper('render', e)))
            },
            _splitTextIntoLines: function (e) {
              for (var i = e.split(this._reNewline), r = new Array(i.length), n = [
                '\n'
              ], o = [
              ], s = 0; s < i.length; s++) r[s] = t.util.string.graphemeSplit(i[s]),
              o = o.concat(r[s], n);
              return o.pop(),
              {
                _unwrappedLines: r,
                lines: i,
                graphemeText: o,
                graphemeLines: r
              }
            },
            toObject: function (e) {
              var t = r.concat(e),
              n = this.callSuper('toObject', t);
              return n.styles = i(this.styles, !0),
              n.path && (n.path = this.path.toObject()),
              n
            },
            set: function (e, t) {
              this.callSuper('set', e, t);
              var i = !1,
              r = !1;
              if ('object' == typeof e) for (var n in e) 'path' === n && this.setPathInfo(),
              i = i || - 1 !== this._dimensionAffectingProps.indexOf(n),
              r = r || 'path' === n;
               else i = - 1 !== this._dimensionAffectingProps.indexOf(e),
              r = 'path' === e;
              return r && this.setPathInfo(),
              i && (this.initDimensions(), this.setCoords()),
              this
            },
            complexity: function () {
              return 1
            }
          }),
          t.Text.ATTRIBUTE_NAMES = t.SHARED_ATTRIBUTES.concat('x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor'.split(' ')),
          t.Text.DEFAULT_SVG_FONT_SIZE = 16,
          t.Text.fromElement = function (e, r, n) {
            if (!e) return r(null);
            var o = t.parseAttributes(e, t.Text.ATTRIBUTE_NAMES),
            s = o.textAnchor || 'left';
            if ((n = t.util.object.extend(n ? i(n) : {
            }, o)).top = n.top || 0, n.left = n.left || 0, o.textDecoration) {
              var a = o.textDecoration;
              - 1 !== a.indexOf('underline') && (n.underline = !0),
              - 1 !== a.indexOf('overline') && (n.overline = !0),
              - 1 !== a.indexOf('line-through') && (n.linethrough = !0),
              delete n.textDecoration
            }
            'dx' in o && (n.left += o.dx),
            'dy' in o && (n.top += o.dy),
            'fontSize' in n || (n.fontSize = t.Text.DEFAULT_SVG_FONT_SIZE);
            var l = '';
            'textContent' in e ? l = e.textContent : 'firstChild' in e && null !== e.firstChild && 'data' in e.firstChild && null !== e.firstChild.data && (l = e.firstChild.data),
            l = l.replace(/^\s+|\s+$|\n+/g, '').replace(/\s+/g, ' ');
            var h = n.strokeWidth;
            n.strokeWidth = 0;
            var c = new t.Text(l, n),
            u = c.getScaledHeight() / c.height,
            d = ((c.height + c.strokeWidth) * c.lineHeight - c.height) * u,
            f = c.getScaledHeight() + d,
            g = 0;
            'center' === s && (g = c.getScaledWidth() / 2),
            'right' === s && (g = c.getScaledWidth()),
            c.set({
              left: c.left - g,
              top: c.top - (f - c.fontSize * (0.07 + c._fontSizeFraction)) / c.lineHeight,
              strokeWidth: void 0 !== h ? h : 1
            }),
            r(c)
          },
          t.Text.fromObject = function (e, r) {
            var n = i(e),
            o = e.path;
            return delete n.path,
            t.Object._fromObject('Text', n, (function (e) {
              o ? t.Object._fromObject('Path', o, (function (t) {
                e.set('path', t),
                r(e)
              }), 'path') : r(e)
            }), 'text')
          },
          t.Text.genericFonts = [
            'sans-serif',
            'serif',
            'cursive',
            'fantasy',
            'monospace'
          ],
          t.util.createAccessors && t.util.createAccessors(t.Text)
        }
      }(t),
      T.util.object.extend(T.Text.prototype, {
        isEmptyStyles: function (e) {
          if (!this.styles) return !0;
          if (void 0 !== e && !this.styles[e]) return !0;
          var t = void 0 === e ? this.styles : {
            line: this.styles[e]
          };
          for (var i in t) for (var r in t[i]) for (var n in t[i][r]) return !1;
          return !0
        },
        styleHas: function (e, t) {
          if (!this.styles || !e || '' === e) return !1;
          if (void 0 !== t && !this.styles[t]) return !1;
          var i = void 0 === t ? this.styles : {
            0: this.styles[t]
          };
          for (var r in i) for (var n in i[r]) if (void 0 !== i[r][n][e]) return !0;
          return !1
        },
        cleanStyle: function (e) {
          if (!this.styles || !e || '' === e) return !1;
          var t,
          i,
          r = this.styles,
          n = 0,
          o = !0,
          s = 0;
          for (var a in r) {
            for (var l in t = 0, r[a]) {
              var h;
              n++,
              (h = r[a][l]).hasOwnProperty(e) ? (i ? h[e] !== i && (o = !1) : i = h[e], h[e] === this[e] && delete h[e]) : o = !1,
              0 !== Object.keys(h).length ? t++ : delete r[a][l]
            }
            0 === t && delete r[a]
          }
          for (var c = 0; c < this._textLines.length; c++) s += this._textLines[c].length;
          o && n === s && (this[e] = i, this.removeStyle(e))
        },
        removeStyle: function (e) {
          if (this.styles && e && '' !== e) {
            var t,
            i,
            r,
            n = this.styles;
            for (i in n) {
              for (r in t = n[i]) delete t[r][e],
              0 === Object.keys(t[r]).length && delete t[r];
              0 === Object.keys(t).length && delete n[i]
            }
          }
        },
        _extendStyles: function (e, t) {
          var i = this.get2DCursorLocation(e);
          this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex),
          this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {
          }),
          T.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), t)
        },
        get2DCursorLocation: function (e, t) {
          void 0 === e && (e = this.selectionStart);
          for (var i = t ? this._unwrappedTextLines : this._textLines, r = i.length, n = 0; n < r; n++) {
            if (e <= i[n].length) return {
              lineIndex: n,
              charIndex: e
            };
            e -= i[n].length + this.missingNewlineOffset(n)
          }
          return {
            lineIndex: n - 1,
            charIndex: i[n - 1].length < e ? i[n - 1].length : e
          }
        },
        getSelectionStyles: function (e, t, i) {
          void 0 === e && (e = this.selectionStart || 0),
          void 0 === t && (t = this.selectionEnd || e);
          for (var r = [
          ], n = e; n < t; n++) r.push(this.getStyleAtPosition(n, i));
          return r
        },
        getStyleAtPosition: function (e, t) {
          var i = this.get2DCursorLocation(e);
          return (t ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex) : this._getStyleDeclaration(i.lineIndex, i.charIndex)) || {
          }
        },
        setSelectionStyles: function (e, t, i) {
          void 0 === t && (t = this.selectionStart || 0),
          void 0 === i && (i = this.selectionEnd || t);
          for (var r = t; r < i; r++) this._extendStyles(r, e);
          return this._forceClearCache = !0,
          this
        },
        _getStyleDeclaration: function (e, t) {
          var i = this.styles && this.styles[e];
          return i ? i[t] : null
        },
        getCompleteStyleDeclaration: function (e, t) {
          for (var i, r = this._getStyleDeclaration(e, t) || {
          }, n = {
          }, o = 0; o < this._styleProperties.length; o++) n[i = this._styleProperties[o]] = void 0 === r[i] ? this[i] : r[i];
          return n
        },
        _setStyleDeclaration: function (e, t, i) {
          this.styles[e][t] = i
        },
        _deleteStyleDeclaration: function (e, t) {
          delete this.styles[e][t]
        },
        _getLineStyle: function (e) {
          return !!this.styles[e]
        },
        _setLineStyle: function (e) {
          this.styles[e] = {
          }
        },
        _deleteLineStyle: function (e) {
          delete this.styles[e]
        }
      }),
      function () {
        function e(e) {
          e.textDecoration && (e.textDecoration.indexOf('underline') > - 1 && (e.underline = !0), e.textDecoration.indexOf('line-through') > - 1 && (e.linethrough = !0), e.textDecoration.indexOf('overline') > - 1 && (e.overline = !0), delete e.textDecoration)
        }
        T.IText = T.util.createClass(T.Text, T.Observable, {
          type: 'i-text',
          selectionStart: 0,
          selectionEnd: 0,
          selectionColor: 'rgba(17,119,255,0.3)',
          isEditing: !1,
          editable: !0,
          editingBorderColor: 'rgba(102,153,255,0.25)',
          cursorWidth: 2,
          cursorColor: '',
          cursorDelay: 1000,
          cursorDuration: 600,
          caching: !0,
          hiddenTextareaContainer: null,
          _reSpace: /\s|\n/,
          _currentCursorOpacity: 0,
          _selectionDirection: null,
          _abortCursorAnimation: !1,
          __widthOfSpace: [
          ],
          inCompositionMode: !1,
          initialize: function (e, t) {
            this.callSuper('initialize', e, t),
            this.initBehavior()
          },
          setSelectionStart: function (e) {
            e = Math.max(e, 0),
            this._updateAndFire('selectionStart', e)
          },
          setSelectionEnd: function (e) {
            e = Math.min(e, this.text.length),
            this._updateAndFire('selectionEnd', e)
          },
          _updateAndFire: function (e, t) {
            this[e] !== t && (this._fireSelectionChanged(), this[e] = t),
            this._updateTextarea()
          },
          _fireSelectionChanged: function () {
            this.fire('selection:changed'),
            this.canvas && this.canvas.fire('text:selection:changed', {
              target: this
            })
          },
          initDimensions: function () {
            this.isEditing && this.initDelayedCursor(),
            this.clearContextTop(),
            this.callSuper('initDimensions')
          },
          render: function (e) {
            this.clearContextTop(),
            this.callSuper('render', e),
            this.cursorOffsetCache = {
            },
            this.renderCursorOrSelection()
          },
          _render: function (e) {
            this.callSuper('_render', e)
          },
          clearContextTop: function (e) {
            if (this.isEditing && this.canvas && this.canvas.contextTop) {
              var t = this.canvas.contextTop,
              i = this.canvas.viewportTransform;
              t.save(),
              t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
              this.transform(t),
              this._clearTextArea(t),
              e || t.restore()
            }
          },
          renderCursorOrSelection: function () {
            if (this.isEditing && this.canvas && this.canvas.contextTop) {
              var e = this._getCursorBoundaries(),
              t = this.canvas.contextTop;
              this.clearContextTop(!0),
              this.selectionStart === this.selectionEnd ? this.renderCursor(e, t) : this.renderSelection(e, t),
              t.restore()
            }
          },
          _clearTextArea: function (e) {
            var t = this.width + 4,
            i = this.height + 4;
            e.clearRect( - t / 2, - i / 2, t, i)
          },
          _getCursorBoundaries: function (e) {
            void 0 === e && (e = this.selectionStart);
            var t = this._getLeftOffset(),
            i = this._getTopOffset(),
            r = this._getCursorBoundariesOffsets(e);
            return {
              left: t,
              top: i,
              leftOffset: r.left,
              topOffset: r.top
            }
          },
          _getCursorBoundariesOffsets: function (e) {
            if (this.cursorOffsetCache && 'top' in this.cursorOffsetCache) return this.cursorOffsetCache;
            var t,
            i,
            r,
            n,
            o = 0,
            s = 0,
            a = this.get2DCursorLocation(e);
            r = a.charIndex,
            i = a.lineIndex;
            for (var l = 0; l < i; l++) o += this.getHeightOfLine(l);
            t = this._getLineLeftOffset(i);
            var h = this.__charBounds[i][r];
            return h && (s = h.left),
            0 !== this.charSpacing && r === this._textLines[i].length && (s -= this._getWidthOfCharSpacing()),
            n = {
              top: o,
              left: t + (s > 0 ? s : 0)
            },
            'rtl' === this.direction && (n.left *= - 1),
            this.cursorOffsetCache = n,
            this.cursorOffsetCache
          },
          renderCursor: function (e, t) {
            var i = this.get2DCursorLocation(),
            r = i.lineIndex,
            n = i.charIndex > 0 ? i.charIndex - 1 : 0,
            o = this.getValueOfPropertyAt(r, n, 'fontSize'),
            s = this.scaleX * this.canvas.getZoom(),
            a = this.cursorWidth / s,
            l = e.topOffset,
            h = this.getValueOfPropertyAt(r, n, 'deltaY');
            l += (1 - this._fontSizeFraction) * this.getHeightOfLine(r) / this.lineHeight - o * (1 - this._fontSizeFraction),
            this.inCompositionMode && this.renderSelection(e, t),
            t.fillStyle = this.cursorColor || this.getValueOfPropertyAt(r, n, 'fill'),
            t.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity,
            t.fillRect(e.left + e.leftOffset - a / 2, l + e.top + h, a, o)
          },
          renderSelection: function (e, t) {
            for (var i = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, r = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, n = - 1 !== this.textAlign.indexOf('justify'), o = this.get2DCursorLocation(i), s = this.get2DCursorLocation(r), a = o.lineIndex, l = s.lineIndex, h = o.charIndex < 0 ? 0 : o.charIndex, c = s.charIndex < 0 ? 0 : s.charIndex, u = a; u <= l; u++) {
              var d,
              f = this._getLineLeftOffset(u) || 0,
              g = this.getHeightOfLine(u),
              _ = 0,
              p = 0;
              if (u === a && (_ = this.__charBounds[a][h].left), u >= a && u < l) p = n && !this.isEndOfWrapping(u) ? this.width : this.getLineWidth(u) || 5;
               else if (u === l) if (0 === c) p = this.__charBounds[l][c].left;
               else {
                var m = this._getWidthOfCharSpacing();
                p = this.__charBounds[l][c - 1].left + this.__charBounds[l][c - 1].width - m
              }
              d = g,
              (this.lineHeight < 1 || u === l && this.lineHeight > 1) && (g /= this.lineHeight);
              var v = e.left + f + _,
              y = p - _,
              S = g,
              b = 0;
              this.inCompositionMode ? (t.fillStyle = this.compositionColor || 'black', S = 1, b = g) : t.fillStyle = this.selectionColor,
              'rtl' === this.direction && (v = this.width - v - y),
              t.fillRect(v, e.top + e.topOffset + b, y, S),
              e.topOffset += d
            }
          },
          getCurrentCharFontSize: function () {
            var e = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(e.l, e.c, 'fontSize')
          },
          getCurrentCharColor: function () {
            var e = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(e.l, e.c, 'fill')
          },
          _getCurrentCharIndex: function () {
            var e = this.get2DCursorLocation(this.selectionStart, !0),
            t = e.charIndex > 0 ? e.charIndex - 1 : 0;
            return {
              l: e.lineIndex,
              c: t
            }
          }
        }),
        T.IText.fromObject = function (t, i) {
          if (e(t), t.styles) for (var r in t.styles) for (var n in t.styles[r]) e(t.styles[r][n]);
          T.Object._fromObject('IText', t, i, 'text')
        }
      }(),
      w = T.util.object.clone,
      T.util.object.extend(T.IText.prototype, {
        initBehavior: function () {
          this.initAddedHandler(),
          this.initRemovedHandler(),
          this.initCursorSelectionHandlers(),
          this.initDoubleClickSimulation(),
          this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
        },
        onDeselect: function () {
          this.isEditing && this.exitEditing(),
          this.selected = !1
        },
        initAddedHandler: function () {
          var e = this;
          this.on('added', (function () {
            var t = e.canvas;
            t && (t._hasITextHandlers || (t._hasITextHandlers = !0, e._initCanvasHandlers(t)), t._iTextInstances = t._iTextInstances || [
            ], t._iTextInstances.push(e))
          }))
        },
        initRemovedHandler: function () {
          var e = this;
          this.on('removed', (function () {
            var t = e.canvas;
            t && (t._iTextInstances = t._iTextInstances || [
            ], T.util.removeFromArray(t._iTextInstances, e), 0 === t._iTextInstances.length && (t._hasITextHandlers = !1, e._removeCanvasHandlers(t)))
          }))
        },
        _initCanvasHandlers: function (e) {
          e._mouseUpITextHandler = function () {
            e._iTextInstances && e._iTextInstances.forEach((function (e) {
              e.__isMousedown = !1
            }))
          },
          e.on('mouse:up', e._mouseUpITextHandler)
        },
        _removeCanvasHandlers: function (e) {
          e.off('mouse:up', e._mouseUpITextHandler)
        },
        _tick: function () {
          this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, '_onTickComplete')
        },
        _animateCursor: function (e, t, i, r) {
          var n;
          return n = {
            isAborted: !1,
            abort: function () {
              this.isAborted = !0
            }
          },
          e.animate('_currentCursorOpacity', t, {
            duration: i,
            onComplete: function () {
              n.isAborted || e[r]()
            },
            onChange: function () {
              e.canvas && e.selectionStart === e.selectionEnd && e.renderCursorOrSelection()
            },
            abort: function () {
              return n.isAborted
            }
          }),
          n
        },
        _onTickComplete: function () {
          var e = this;
          this._cursorTimeout1 && clearTimeout(this._cursorTimeout1),
          this._cursorTimeout1 = setTimeout((function () {
            e._currentTickCompleteState = e._animateCursor(e, 0, this.cursorDuration / 2, '_tick')
          }), 100)
        },
        initDelayedCursor: function (e) {
          var t = this,
          i = e ? 0 : this.cursorDelay;
          this.abortCursorAnimation(),
          this._currentCursorOpacity = 1,
          this._cursorTimeout2 = setTimeout((function () {
            t._tick()
          }), i)
        },
        abortCursorAnimation: function () {
          var e = this._currentTickState || this._currentTickCompleteState,
          t = this.canvas;
          this._currentTickState && this._currentTickState.abort(),
          this._currentTickCompleteState && this._currentTickCompleteState.abort(),
          clearTimeout(this._cursorTimeout1),
          clearTimeout(this._cursorTimeout2),
          this._currentCursorOpacity = 0,
          e && t && t.clearContext(t.contextTop || t.contextContainer)
        },
        selectAll: function () {
          return this.selectionStart = 0,
          this.selectionEnd = this._text.length,
          this._fireSelectionChanged(),
          this._updateTextarea(),
          this
        },
        getSelectedText: function () {
          return this._text.slice(this.selectionStart, this.selectionEnd).join('')
        },
        findWordBoundaryLeft: function (e) {
          var t = 0,
          i = e - 1;
          if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]); ) t++,
          i--;
          for (; /\S/.test(this._text[i]) && i > - 1; ) t++,
          i--;
          return e - t
        },
        findWordBoundaryRight: function (e) {
          var t = 0,
          i = e;
          if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]); ) t++,
          i++;
          for (; /\S/.test(this._text[i]) && i < this._text.length; ) t++,
          i++;
          return e + t
        },
        findLineBoundaryLeft: function (e) {
          for (var t = 0, i = e - 1; !/\n/.test(this._text[i]) && i > - 1; ) t++,
          i--;
          return e - t
        },
        findLineBoundaryRight: function (e) {
          for (var t = 0, i = e; !/\n/.test(this._text[i]) && i < this._text.length; ) t++,
          i++;
          return e + t
        },
        searchWordBoundary: function (e, t) {
          for (var i = this._text, r = this._reSpace.test(i[e]) ? e - 1 : e, n = i[r], o = T.reNonWord; !o.test(n) && r > 0 && r < i.length; ) n = i[r += t];
          return o.test(n) && (r += 1 === t ? 0 : 1),
          r
        },
        selectWord: function (e) {
          e = e || this.selectionStart;
          var t = this.searchWordBoundary(e, - 1),
          i = this.searchWordBoundary(e, 1);
          this.selectionStart = t,
          this.selectionEnd = i,
          this._fireSelectionChanged(),
          this._updateTextarea(),
          this.renderCursorOrSelection()
        },
        selectLine: function (e) {
          e = e || this.selectionStart;
          var t = this.findLineBoundaryLeft(e),
          i = this.findLineBoundaryRight(e);
          return this.selectionStart = t,
          this.selectionEnd = i,
          this._fireSelectionChanged(),
          this._updateTextarea(),
          this
        },
        enterEditing: function (e) {
          if (!this.isEditing && this.editable) return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)),
          this.isEditing = !0,
          this.initHiddenTextarea(e),
          this.hiddenTextarea.focus(),
          this.hiddenTextarea.value = this.text,
          this._updateTextarea(),
          this._saveEditingProps(),
          this._setEditingProps(),
          this._textBeforeEdit = this.text,
          this._tick(),
          this.fire('editing:entered'),
          this._fireSelectionChanged(),
          this.canvas ? (this.canvas.fire('text:editing:entered', {
            target: this
          }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this
        },
        exitEditingOnOthers: function (e) {
          e._iTextInstances && e._iTextInstances.forEach((function (e) {
            e.selected = !1,
            e.isEditing && e.exitEditing()
          }))
        },
        initMouseMoveHandler: function () {
          this.canvas.on('mouse:move', this.mouseMoveHandler)
        },
        mouseMoveHandler: function (e) {
          if (this.__isMousedown && this.isEditing) {
            var t = this.getSelectionStartFromPointer(e.e),
            i = this.selectionStart,
            r = this.selectionEnd;
            (t === this.__selectionStartOnMouseDown && i !== r || i !== t && r !== t) && (t > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = t) : (this.selectionStart = t, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i && this.selectionEnd === r || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()))
          }
        },
        _setEditingProps: function () {
          this.hoverCursor = 'text',
          this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = 'text'),
          this.borderColor = this.editingBorderColor,
          this.hasControls = this.selectable = !1,
          this.lockMovementX = this.lockMovementY = !0
        },
        fromStringToGraphemeSelection: function (e, t, i) {
          var r = i.slice(0, e),
          n = T.util.string.graphemeSplit(r).length;
          if (e === t) return {
            selectionStart: n,
            selectionEnd: n
          };
          var o = i.slice(e, t);
          return {
            selectionStart: n,
            selectionEnd: n + T.util.string.graphemeSplit(o).length
          }
        },
        fromGraphemeToStringSelection: function (e, t, i) {
          var r = i.slice(0, e).join('').length;
          return e === t ? {
            selectionStart: r,
            selectionEnd: r
          }
           : {
            selectionStart: r,
            selectionEnd: r + i.slice(e, t).join('').length
          }
        },
        _updateTextarea: function () {
          if (this.cursorOffsetCache = {
          }, this.hiddenTextarea) {
            if (!this.inCompositionMode) {
              var e = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
              this.hiddenTextarea.selectionStart = e.selectionStart,
              this.hiddenTextarea.selectionEnd = e.selectionEnd
            }
            this.updateTextareaPosition()
          }
        },
        updateFromTextArea: function () {
          if (this.hiddenTextarea) {
            this.cursorOffsetCache = {
            },
            this.text = this.hiddenTextarea.value,
            this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
            var e = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
            this.selectionEnd = this.selectionStart = e.selectionEnd,
            this.inCompositionMode || (this.selectionStart = e.selectionStart),
            this.updateTextareaPosition()
          }
        },
        updateTextareaPosition: function () {
          if (this.selectionStart === this.selectionEnd) {
            var e = this._calcTextareaPosition();
            this.hiddenTextarea.style.left = e.left,
            this.hiddenTextarea.style.top = e.top
          }
        },
        _calcTextareaPosition: function () {
          if (!this.canvas) return {
            x: 1,
            y: 1
          };
          var e = this.inCompositionMode ? this.compositionStart : this.selectionStart,
          t = this._getCursorBoundaries(e),
          i = this.get2DCursorLocation(e),
          r = i.lineIndex,
          n = i.charIndex,
          o = this.getValueOfPropertyAt(r, n, 'fontSize') * this.lineHeight,
          s = t.leftOffset,
          a = this.calcTransformMatrix(),
          l = {
            x: t.left + s,
            y: t.top + t.topOffset + o
          },
          h = this.canvas.getRetinaScaling(),
          c = this.canvas.upperCanvasEl,
          u = c.width / h,
          d = c.height / h,
          f = u - o,
          g = d - o,
          _ = c.clientWidth / u,
          p = c.clientHeight / d;
          return l = T.util.transformPoint(l, a),
          (l = T.util.transformPoint(l, this.canvas.viewportTransform)).x *= _,
          l.y *= p,
          l.x < 0 && (l.x = 0),
          l.x > f && (l.x = f),
          l.y < 0 && (l.y = 0),
          l.y > g && (l.y = g),
          l.x += this.canvas._offset.left,
          l.y += this.canvas._offset.top,
          {
            left: l.x + 'px',
            top: l.y + 'px',
            fontSize: o + 'px',
            charHeight: o
          }
        },
        _saveEditingProps: function () {
          this._savedProps = {
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            lockMovementX: this.lockMovementX,
            lockMovementY: this.lockMovementY,
            hoverCursor: this.hoverCursor,
            selectable: this.selectable,
            defaultCursor: this.canvas && this.canvas.defaultCursor,
            moveCursor: this.canvas && this.canvas.moveCursor
          }
        },
        _restoreEditingProps: function () {
          this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor))
        },
        exitEditing: function () {
          var e = this._textBeforeEdit !== this.text,
          t = this.hiddenTextarea;
          return this.selected = !1,
          this.isEditing = !1,
          this.selectionEnd = this.selectionStart,
          t && (t.blur && t.blur(), t.parentNode && t.parentNode.removeChild(t)),
          this.hiddenTextarea = null,
          this.abortCursorAnimation(),
          this._restoreEditingProps(),
          this._currentCursorOpacity = 0,
          this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
          this.fire('editing:exited'),
          e && this.fire('modified'),
          this.canvas && (this.canvas.off('mouse:move', this.mouseMoveHandler), this.canvas.fire('text:editing:exited', {
            target: this
          }), e && this.canvas.fire('object:modified', {
            target: this
          })),
          this
        },
        _removeExtraneousStyles: function () {
          for (var e in this.styles) this._textLines[e] || delete this.styles[e]
        },
        removeStyleFromTo: function (e, t) {
          var i,
          r,
          n = this.get2DCursorLocation(e, !0),
          o = this.get2DCursorLocation(t, !0),
          s = n.lineIndex,
          a = n.charIndex,
          l = o.lineIndex,
          h = o.charIndex;
          if (s !== l) {
            if (this.styles[s]) for (i = a; i < this._unwrappedTextLines[s].length; i++) delete this.styles[s][i];
            if (this.styles[l]) for (i = h; i < this._unwrappedTextLines[l].length; i++) (r = this.styles[l][i]) && (this.styles[s] || (this.styles[s] = {
            }), this.styles[s][a + i - h] = r);
            for (i = s + 1; i <= l; i++) delete this.styles[i];
            this.shiftLineStyles(l, s - l)
          } else if (this.styles[s]) {
            r = this.styles[s];
            var c,
            u,
            d = h - a;
            for (i = a; i < h; i++) delete r[i];
            for (u in this.styles[s]) (c = parseInt(u, 10)) >= h && (r[c - d] = r[u], delete r[u])
          }
        },
        shiftLineStyles: function (e, t) {
          var i = w(this.styles);
          for (var r in this.styles) {
            var n = parseInt(r, 10);
            n > e && (this.styles[n + t] = i[n], i[n - t] || delete this.styles[n])
          }
        },
        restartCursorIfNeeded: function () {
          this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor()
        },
        insertNewlineStyleObject: function (e, t, i, r) {
          var n,
          o = {
          },
          s = !1,
          a = this._unwrappedTextLines[e].length === t;
          for (var l in i || (i = 1), this.shiftLineStyles(e, i), this.styles[e] && (n = this.styles[e][0 === t ? t : t - 1]), this.styles[e]) {
            var h = parseInt(l, 10);
            h >= t && (s = !0, o[h - t] = this.styles[e][l], a && 0 === t || delete this.styles[e][l])
          }
          var c = !1;
          for (s && !a && (this.styles[e + i] = o, c = !0), c && i--; i > 0; ) r && r[i - 1] ? this.styles[e + i] = {
            0: w(r[i - 1])
          }
           : n ? this.styles[e + i] = {
            0: w(n)
          }
           : delete this.styles[e + i],
          i--;
          this._forceClearCache = !0
        },
        insertCharStyleObject: function (e, t, i, r) {
          this.styles || (this.styles = {
          });
          var n = this.styles[e],
          o = n ? w(n) : {
          };
          for (var s in i || (i = 1), o) {
            var a = parseInt(s, 10);
            a >= t && (n[a + i] = o[a], o[a - i] || delete n[a])
          }
          if (this._forceClearCache = !0, r) for (; i--; ) Object.keys(r[i]).length && (this.styles[e] || (this.styles[e] = {
          }), this.styles[e][t + i] = w(r[i]));
           else if (n) for (var l = n[t ? t - 1 : 1]; l && i--; ) this.styles[e][t + i] = w(l)
        },
        insertNewStyleBlock: function (e, t, i) {
          for (var r = this.get2DCursorLocation(t, !0), n = [
            0
          ], o = 0, s = 0; s < e.length; s++) '\n' === e[s] ? n[++o] = 0 : n[o]++;
          for (n[0] > 0 && (this.insertCharStyleObject(r.lineIndex, r.charIndex, n[0], i), i = i && i.slice(n[0] + 1)), o && this.insertNewlineStyleObject(r.lineIndex, r.charIndex + n[0], o), s = 1; s < o; s++) n[s] > 0 ? this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i) : i && this.styles[r.lineIndex + s] && i[0] && (this.styles[r.lineIndex + s][0] = i[0]),
          i = i && i.slice(n[s] + 1);
          n[s] > 0 && this.insertCharStyleObject(r.lineIndex + s, 0, n[s], i)
        },
        setSelectionStartEndWithShift: function (e, t, i) {
          i <= e ? (t === e ? this._selectionDirection = 'left' : 'right' === this._selectionDirection && (this._selectionDirection = 'left', this.selectionEnd = e), this.selectionStart = i) : i > e && i < t ? 'right' === this._selectionDirection ? this.selectionEnd = i : this.selectionStart = i : (t === e ? this._selectionDirection = 'right' : 'left' === this._selectionDirection && (this._selectionDirection = 'right', this.selectionStart = t), this.selectionEnd = i)
        },
        setSelectionInBoundaries: function () {
          var e = this.text.length;
          this.selectionStart > e ? this.selectionStart = e : this.selectionStart < 0 && (this.selectionStart = 0),
          this.selectionEnd > e ? this.selectionEnd = e : this.selectionEnd < 0 && (this.selectionEnd = 0)
        }
      }),
      T.util.object.extend(T.IText.prototype, {
        initDoubleClickSimulation: function () {
          this.__lastClickTime = + new Date,
          this.__lastLastClickTime = + new Date,
          this.__lastPointer = {
          },
          this.on('mousedown', this.onMouseDown)
        },
        onMouseDown: function (e) {
          if (this.canvas) {
            this.__newClickTime = + new Date;
            var t = e.pointer;
            this.isTripleClick(t) && (this.fire('tripleclick', e), this._stopEvent(e.e)),
            this.__lastLastClickTime = this.__lastClickTime,
            this.__lastClickTime = this.__newClickTime,
            this.__lastPointer = t,
            this.__lastIsEditing = this.isEditing,
            this.__lastSelected = this.selected
          }
        },
        isTripleClick: function (e) {
          return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === e.x && this.__lastPointer.y === e.y
        },
        _stopEvent: function (e) {
          e.preventDefault && e.preventDefault(),
          e.stopPropagation && e.stopPropagation()
        },
        initCursorSelectionHandlers: function () {
          this.initMousedownHandler(),
          this.initMouseupHandler(),
          this.initClicks()
        },
        doubleClickHandler: function (e) {
          this.isEditing && this.selectWord(this.getSelectionStartFromPointer(e.e))
        },
        tripleClickHandler: function (e) {
          this.isEditing && this.selectLine(this.getSelectionStartFromPointer(e.e))
        },
        initClicks: function () {
          this.on('mousedblclick', this.doubleClickHandler),
          this.on('tripleclick', this.tripleClickHandler)
        },
        _mouseDownHandler: function (e) {
          !this.canvas || !this.editable || e.e.button && 1 !== e.e.button || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(e.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()))
        },
        _mouseDownHandlerBefore: function (e) {
          !this.canvas || !this.editable || e.e.button && 1 !== e.e.button || (this.selected = this === this.canvas._activeObject)
        },
        initMousedownHandler: function () {
          this.on('mousedown', this._mouseDownHandler),
          this.on('mousedown:before', this._mouseDownHandlerBefore)
        },
        initMouseupHandler: function () {
          this.on('mouseup', this.mouseUpHandler)
        },
        mouseUpHandler: function (e) {
          if (this.__isMousedown = !1, !(!this.editable || this.group || e.transform && e.transform.actionPerformed || e.e.button && 1 !== e.e.button)) {
            if (this.canvas) {
              var t = this.canvas._activeObject;
              if (t && t !== this) return
            }
            this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(e.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0
          }
        },
        setCursorByClick: function (e) {
          var t = this.getSelectionStartFromPointer(e),
          i = this.selectionStart,
          r = this.selectionEnd;
          e.shiftKey ? this.setSelectionStartEndWithShift(i, r, t) : (this.selectionStart = t, this.selectionEnd = t),
          this.isEditing && (this._fireSelectionChanged(), this._updateTextarea())
        },
        getSelectionStartFromPointer: function (e) {
          for (var t, i = this.getLocalPointer(e), r = 0, n = 0, o = 0, s = 0, a = 0, l = 0, h = this._textLines.length; l < h && o <= i.y; l++) o += this.getHeightOfLine(l) * this.scaleY,
          a = l,
          l > 0 && (s += this._textLines[l - 1].length + this.missingNewlineOffset(l - 1));
          n = this._getLineLeftOffset(a) * this.scaleX,
          t = this._textLines[a],
          'rtl' === this.direction && (i.x = this.width * this.scaleX - i.x + n);
          for (var c = 0, u = t.length; c < u && (r = n, (n += this.__charBounds[a][c].kernedWidth * this.scaleX) <= i.x); c++) s++;
          return this._getNewSelectionStartFromOffset(i, r, n, s, u)
        },
        _getNewSelectionStartFromOffset: function (e, t, i, r, n) {
          var o = e.x - t,
          s = i - e.x,
          a = r + (s > o || s < 0 ? 0 : 1);
          return this.flipX && (a = n - a),
          a > this._text.length && (a = this._text.length),
          a
        }
      }),
      T.util.object.extend(T.IText.prototype, {
        initHiddenTextarea: function () {
          this.hiddenTextarea = T.document.createElement('textarea'),
          this.hiddenTextarea.setAttribute('autocapitalize', 'off'),
          this.hiddenTextarea.setAttribute('autocorrect', 'off'),
          this.hiddenTextarea.setAttribute('autocomplete', 'off'),
          this.hiddenTextarea.setAttribute('spellcheck', 'false'),
          this.hiddenTextarea.setAttribute('data-fabric-hiddentextarea', ''),
          this.hiddenTextarea.setAttribute('wrap', 'off');
          var e = this._calcTextareaPosition();
          this.hiddenTextarea.style.cssText = 'position: absolute; top: ' + e.top + '; left: ' + e.left + '; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingptop: ' + e.fontSize + ';',
          this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : T.document.body.appendChild(this.hiddenTextarea),
          T.util.addListener(this.hiddenTextarea, 'keydown', this.onKeyDown.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'keyup', this.onKeyUp.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'input', this.onInput.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'copy', this.copy.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'cut', this.copy.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'paste', this.paste.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'compositionstart', this.onCompositionStart.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'compositionupdate', this.onCompositionUpdate.bind(this)),
          T.util.addListener(this.hiddenTextarea, 'compositionend', this.onCompositionEnd.bind(this)),
          !this._clickHandlerInitialized && this.canvas && (T.util.addListener(this.canvas.upperCanvasEl, 'click', this.onClick.bind(this)), this._clickHandlerInitialized = !0)
        },
        keysMap: {
          9: 'exitEditing',
          27: 'exitEditing',
          33: 'moveCursorUp',
          34: 'moveCursorDown',
          35: 'moveCursorRight',
          36: 'moveCursorLeft',
          37: 'moveCursorLeft',
          38: 'moveCursorUp',
          39: 'moveCursorRight',
          40: 'moveCursorDown'
        },
        keysMapRtl: {
          9: 'exitEditing',
          27: 'exitEditing',
          33: 'moveCursorUp',
          34: 'moveCursorDown',
          35: 'moveCursorLeft',
          36: 'moveCursorRight',
          37: 'moveCursorRight',
          38: 'moveCursorUp',
          39: 'moveCursorLeft',
          40: 'moveCursorDown'
        },
        ctrlKeysMapUp: {
          67: 'copy',
          88: 'cut'
        },
        ctrlKeysMapDown: {
          65: 'selectAll'
        },
        onClick: function () {
          this.hiddenTextarea && this.hiddenTextarea.focus()
        },
        onKeyDown: function (e) {
          if (this.isEditing) {
            var t = 'rtl' === this.direction ? this.keysMapRtl : this.keysMap;
            if (e.keyCode in t) this[t[e.keyCode]](e);
             else {
              if (!(e.keyCode in this.ctrlKeysMapDown) || !e.ctrlKey && !e.metaKey) return;
              this[this.ctrlKeysMapDown[e.keyCode]](e)
            }
            e.stopImmediatePropagation(),
            e.preventDefault(),
            e.keyCode >= 33 && e.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll()
          }
        },
        onKeyUp: function (e) {
          !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : e.keyCode in this.ctrlKeysMapUp && (e.ctrlKey || e.metaKey) && (this[this.ctrlKeysMapUp[e.keyCode]](e), e.stopImmediatePropagation(), e.preventDefault(), this.canvas && this.canvas.requestRenderAll())
        },
        onInput: function (e) {
          var t = this.fromPaste;
          if (this.fromPaste = !1, e && e.stopPropagation(), this.isEditing) {
            var i,
            r,
            n,
            o,
            s,
            a = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
            l = this._text.length,
            h = a.length,
            c = h - l,
            u = this.selectionStart,
            d = this.selectionEnd,
            f = u !== d;
            if ('' === this.hiddenTextarea.value) return this.styles = {
            },
            this.updateFromTextArea(),
            this.fire('changed'),
            void (this.canvas && (this.canvas.fire('text:changed', {
              target: this
            }), this.canvas.requestRenderAll()));
            var g = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
            _ = u > g.selectionStart;
            f ? (i = this._text.slice(u, d), c += d - u) : h < l && (i = _ ? this._text.slice(d + c, d) : this._text.slice(u, u - c)),
            r = a.slice(g.selectionEnd - c, g.selectionEnd),
            i && i.length && (r.length && (n = this.getSelectionStyles(u, u + 1, !1), n = r.map((function () {
              return n[0]
            }))), f ? (o = u, s = d) : _ ? (o = d - i.length, s = d) : (o = d, s = d + i.length), this.removeStyleFromTo(o, s)),
            r.length && (t && r.join('') === T.copiedText && !T.disableStyleCopyPaste && (n = T.copiedTextStyle), this.insertNewStyleBlock(r, u, n)),
            this.updateFromTextArea(),
            this.fire('changed'),
            this.canvas && (this.canvas.fire('text:changed', {
              target: this
            }), this.canvas.requestRenderAll())
          }
        },
        onCompositionStart: function () {
          this.inCompositionMode = !0
        },
        onCompositionEnd: function () {
          this.inCompositionMode = !1
        },
        onCompositionUpdate: function (e) {
          this.compositionStart = e.target.selectionStart,
          this.compositionEnd = e.target.selectionEnd,
          this.updateTextareaPosition()
        },
        copy: function () {
          this.selectionStart !== this.selectionEnd && (T.copiedText = this.getSelectedText(), T.disableStyleCopyPaste ? T.copiedTextStyle = null : T.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0)
        },
        paste: function () {
          this.fromPaste = !0
        },
        _getClipboardData: function (e) {
          return e && e.clipboardData || T.window.clipboardData
        },
        _getWidthBeforeCursor: function (e, t) {
          var i,
          r = this._getLineLeftOffset(e);
          return t > 0 && (r += (i = this.__charBounds[e][t - 1]).left + i.width),
          r
        },
        getDownCursorOffset: function (e, t) {
          var i = this._getSelectionForOffset(e, t),
          r = this.get2DCursorLocation(i),
          n = r.lineIndex;
          if (n === this._textLines.length - 1 || e.metaKey || 34 === e.keyCode) return this._text.length - i;
          var o = r.charIndex,
          s = this._getWidthBeforeCursor(n, o),
          a = this._getIndexOnLine(n + 1, s);
          return this._textLines[n].slice(o).length + a + 1 + this.missingNewlineOffset(n)
        },
        _getSelectionForOffset: function (e, t) {
          return e.shiftKey && this.selectionStart !== this.selectionEnd && t ? this.selectionEnd : this.selectionStart
        },
        getUpCursorOffset: function (e, t) {
          var i = this._getSelectionForOffset(e, t),
          r = this.get2DCursorLocation(i),
          n = r.lineIndex;
          if (0 === n || e.metaKey || 33 === e.keyCode) return - i;
          var o = r.charIndex,
          s = this._getWidthBeforeCursor(n, o),
          a = this._getIndexOnLine(n - 1, s),
          l = this._textLines[n].slice(0, o),
          h = this.missingNewlineOffset(n - 1);
          return - this._textLines[n - 1].length + a - l.length + (1 - h)
        },
        _getIndexOnLine: function (e, t) {
          for (var i, r, n = this._textLines[e], o = this._getLineLeftOffset(e), s = 0, a = 0, l = n.length; a < l; a++) if ((o += i = this.__charBounds[e][a].width) > t) {
            r = !0;
            var h = o - i,
            c = o,
            u = Math.abs(h - t);
            s = Math.abs(c - t) < u ? a : a - 1;
            break
          }
          return r || (s = n.length - 1),
          s
        },
        moveCursorDown: function (e) {
          this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown('Down', e)
        },
        moveCursorUp: function (e) {
          0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown('Up', e)
        },
        _moveCursorUpOrDown: function (e, t) {
          var i = this['get' + e + 'CursorOffset'](t, 'right' === this._selectionDirection);
          t.shiftKey ? this.moveCursorWithShift(i) : this.moveCursorWithoutShift(i),
          0 !== i && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
        },
        moveCursorWithShift: function (e) {
          var t = 'left' === this._selectionDirection ? this.selectionStart + e : this.selectionEnd + e;
          return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, t),
          0 !== e
        },
        moveCursorWithoutShift: function (e) {
          return e < 0 ? (this.selectionStart += e, this.selectionEnd = this.selectionStart) : (this.selectionEnd += e, this.selectionStart = this.selectionEnd),
          0 !== e
        },
        moveCursorLeft: function (e) {
          0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight('Left', e)
        },
        _move: function (e, t, i) {
          var r;
          if (e.altKey) r = this['findWordBoundary' + i](this[t]);
           else {
            if (!e.metaKey && 35 !== e.keyCode && 36 !== e.keyCode) return this[t] += 'Left' === i ? - 1 : 1,
            !0;
            r = this['findLineBoundary' + i](this[t])
          }
          if (void 0 !== typeof r && this[t] !== r) return this[t] = r,
          !0
        },
        _moveLeft: function (e, t) {
          return this._move(e, t, 'Left')
        },
        _moveRight: function (e, t) {
          return this._move(e, t, 'Right')
        },
        moveCursorLeftWithoutShift: function (e) {
          var t = !0;
          return this._selectionDirection = 'left',
          this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (t = this._moveLeft(e, 'selectionStart')),
          this.selectionEnd = this.selectionStart,
          t
        },
        moveCursorLeftWithShift: function (e) {
          return 'right' === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveLeft(e, 'selectionEnd') : 0 !== this.selectionStart ? (this._selectionDirection = 'left', this._moveLeft(e, 'selectionStart')) : void 0
        },
        moveCursorRight: function (e) {
          this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight('Right', e)
        },
        _moveCursorLeftOrRight: function (e, t) {
          var i = 'moveCursor' + e + 'With';
          this._currentCursorOpacity = 1,
          t.shiftKey ? i += 'Shift' : i += 'outShift',
          this[i](t) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
        },
        moveCursorRightWithShift: function (e) {
          return 'left' === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveRight(e, 'selectionStart') : this.selectionEnd !== this._text.length ? (this._selectionDirection = 'right', this._moveRight(e, 'selectionEnd')) : void 0
        },
        moveCursorRightWithoutShift: function (e) {
          var t = !0;
          return this._selectionDirection = 'right',
          this.selectionStart === this.selectionEnd ? (t = this._moveRight(e, 'selectionStart'), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd,
          t
        },
        removeChars: function (e, t) {
          void 0 === t && (t = e + 1),
          this.removeStyleFromTo(e, t),
          this._text.splice(e, t - e),
          this.text = this._text.join(''),
          this.set('dirty', !0),
          this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
          this._removeExtraneousStyles()
        },
        insertChars: function (e, t, i, r) {
          void 0 === r && (r = i),
          r > i && this.removeStyleFromTo(i, r);
          var n = T.util.string.graphemeSplit(e);
          this.insertNewStyleBlock(n, i, t),
          this._text = [
          ].concat(this._text.slice(0, i), n, this._text.slice(r)),
          this.text = this._text.join(''),
          this.set('dirty', !0),
          this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()),
          this._removeExtraneousStyles()
        }
      }),
      function () {
        var e = T.util.toFixed,
        t = /  +/g;
        T.util.object.extend(T.Text.prototype, {
          _toSVG: function () {
            var e = this._getSVGLeftTopOffsets(),
            t = this._getSVGTextAndBg(e.textTop, e.textLeft);
            return this._wrapSVGTextAndBg(t)
          },
          toSVG: function (e) {
            return this._createBaseSVGMarkup(this._toSVG(), {
              reviver: e,
              noStyle: !0,
              withShadow: !0
            })
          },
          _getSVGLeftTopOffsets: function () {
            return {
              textLeft: - this.width / 2,
              textTop: - this.height / 2,
              lineTop: this.getHeightOfLine(0)
            }
          },
          _wrapSVGTextAndBg: function (e) {
            var t = this.getSvgTextDecoration(this);
            return [e.textBgRects.join(''),
            '\t\t<text xml:space="preserve" ',
            this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, '\'') + '" ' : '',
            this.fontSize ? 'font-size="' + this.fontSize + '" ' : '',
            this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : '',
            this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : '',
            t ? 'text-decoration="' + t + '" ' : '',
            'style="',
            this.getSvgStyles(!0),
            '"',
            this.addPaintOrder(),
            ' >',
            e.textSpans.join(''),
            '</text>\n']
          },
          _getSVGTextAndBg: function (e, t) {
            var i,
            r = [
            ],
            n = [
            ],
            o = e;
            this._setSVGBg(n);
            for (var s = 0, a = this._textLines.length; s < a; s++) i = this._getLineLeftOffset(s),
            (this.textBackgroundColor || this.styleHas('textBackgroundColor', s)) && this._setSVGTextLineBg(n, s, t + i, o),
            this._setSVGTextLineText(r, s, t + i, o),
            o += this.getHeightOfLine(s);
            return {
              textSpans: r,
              textBgRects: n
            }
          },
          _createTextCharSpan: function (i, r, n, o) {
            var s = i !== i.trim() || i.match(t),
            a = this.getSvgSpanStyles(r, s),
            l = a ? 'style="' + a + '"' : '',
            h = r.deltaY,
            c = '',
            u = T.Object.NUM_FRACTION_DIGITS;
            return h && (c = ' dy="' + e(h, u) + '" '),
            [
              '<tspan x="',
              e(n, u),
              '" y="',
              e(o, u),
              '" ',
              c,
              l,
              '>',
              T.util.string.escapeXml(i),
              '</tspan>'
            ].join('')
          },
          _setSVGTextLineText: function (e, t, i, r) {
            var n,
            o,
            s,
            a,
            l,
            h = this.getHeightOfLine(t),
            c = - 1 !== this.textAlign.indexOf('justify'),
            u = '',
            d = 0,
            f = this._textLines[t];
            r += h * (1 - this._fontSizeFraction) / this.lineHeight;
            for (var g = 0, _ = f.length - 1; g <= _; g++) l = g === _ || this.charSpacing,
            u += f[g],
            s = this.__charBounds[t][g],
            0 === d ? (i += s.kernedWidth - s.width, d += s.width) : d += s.kernedWidth,
            c && !l && this._reSpaceAndTab.test(f[g]) && (l = !0),
            l || (n = n || this.getCompleteStyleDeclaration(t, g), o = this.getCompleteStyleDeclaration(t, g + 1), l = this._hasStyleChangedForSvg(n, o)),
            l && (a = this._getStyleDeclaration(t, g) || {
            }, e.push(this._createTextCharSpan(u, a, i, r)), u = '', n = o, i += d, d = 0)
          },
          _pushTextBgRect: function (t, i, r, n, o, s) {
            var a = T.Object.NUM_FRACTION_DIGITS;
            t.push('\t\t<rect ', this._getFillAttributes(i), ' x="', e(r, a), '" y="', e(n, a), '" width="', e(o, a), '" height="', e(s, a), '"></rect>\n')
          },
          _setSVGTextLineBg: function (e, t, i, r) {
            for (var n, o, s = this._textLines[t], a = this.getHeightOfLine(t) / this.lineHeight, l = 0, h = 0, c = this.getValueOfPropertyAt(t, 0, 'textBackgroundColor'), u = 0, d = s.length; u < d; u++) n = this.__charBounds[t][u],
            (o = this.getValueOfPropertyAt(t, u, 'textBackgroundColor')) !== c ? (c && this._pushTextBgRect(e, c, i + h, r, l, a), h = n.left, l = n.width, c = o) : l += n.kernedWidth;
            o && this._pushTextBgRect(e, o, i + h, r, l, a)
          },
          _getFillAttributes: function (e) {
            var t = e && 'string' == typeof e ? new T.Color(e) : '';
            return t && t.getSource() && 1 !== t.getAlpha() ? 'opacity="' + t.getAlpha() + '" fill="' + t.setAlpha(1).toRgb() + '"' : 'fill="' + e + '"'
          },
          _getSVGLineTopOffset: function (e) {
            for (var t, i = 0, r = 0; r < e; r++) i += this.getHeightOfLine(r);
            return t = this.getHeightOfLine(r),
            {
              lineTop: i,
              offset: (this._fontSizeMult - this._fontSizeFraction) * t / (this.lineHeight * this._fontSizeMult)
            }
          },
          getSvgStyles: function (e) {
            return T.Object.prototype.getSvgStyles.call(this, e) + ' white-space: pre;'
          }
        })
      }(),
      function (e) {
        var t = e.fabric || (e.fabric = {
        });
        t.Textbox = t.util.createClass(t.IText, t.Observable, {
          type: 'textbox',
          minWidth: 20,
          dynamicMinWidth: 2,
          __cachedLines: null,
          lockScalingFlip: !0,
          noScaleCache: !1,
          _dimensionAffectingProps: t.Text.prototype._dimensionAffectingProps.concat('width'),
          _wordJoiners: /[ \t\r]/,
          splitByGrapheme: !1,
          initDimensions: function () {
            this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set('width', this.dynamicMinWidth), - 1 !== this.textAlign.indexOf('justify') && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({
              propertySet: '_dimensionAffectingProps'
            }))
          },
          _generateStyleMap: function (e) {
            for (var t = 0, i = 0, r = 0, n = {
            }, o = 0; o < e.graphemeLines.length; o++) '\n' === e.graphemeText[r] && o > 0 ? (i = 0, r++, t++) : !this.splitByGrapheme && this._reSpaceAndTab.test(e.graphemeText[r]) && o > 0 && (i++, r++),
            n[o] = {
              line: t,
              offset: i
            },
            r += e.graphemeLines[o].length,
            i += e.graphemeLines[o].length;
            return n
          },
          styleHas: function (e, i) {
            if (this._styleMap && !this.isWrapping) {
              var r = this._styleMap[i];
              r && (i = r.line)
            }
            return t.Text.prototype.styleHas.call(this, e, i)
          },
          isEmptyStyles: function (e) {
            if (!this.styles) return !0;
            var t,
            i,
            r = 0,
            n = !1,
            o = this._styleMap[e],
            s = this._styleMap[e + 1];
            for (var a in o && (e = o.line, r = o.offset), s && (n = s.line === e, t = s.offset), i = void 0 === e ? this.styles : {
              line: this.styles[e]
            }) for (var l in i[a]) if (l >= r && (!n || l < t)) for (var h in i[a][l]) return !1;
            return !0
          },
          _getStyleDeclaration: function (e, t) {
            if (this._styleMap && !this.isWrapping) {
              var i = this._styleMap[e];
              if (!i) return null;
              e = i.line,
              t = i.offset + t
            }
            return this.callSuper('_getStyleDeclaration', e, t)
          },
          _setStyleDeclaration: function (e, t, i) {
            var r = this._styleMap[e];
            e = r.line,
            t = r.offset + t,
            this.styles[e][t] = i
          },
          _deleteStyleDeclaration: function (e, t) {
            var i = this._styleMap[e];
            e = i.line,
            t = i.offset + t,
            delete this.styles[e][t]
          },
          _getLineStyle: function (e) {
            var t = this._styleMap[e];
            return !!this.styles[t.line]
          },
          _setLineStyle: function (e) {
            var t = this._styleMap[e];
            this.styles[t.line] = {
            }
          },
          _wrapText: function (e, t) {
            var i,
            r = [
            ];
            for (this.isWrapping = !0, i = 0; i < e.length; i++) r = r.concat(this._wrapLine(e[i], i, t));
            return this.isWrapping = !1,
            r
          },
          _measureWord: function (e, t, i) {
            var r,
            n = 0;
            i = i || 0;
            for (var o = 0, s = e.length; o < s; o++) n += this._getGraphemeBox(e[o], t, o + i, r, !0).kernedWidth,
            r = e[o];
            return n
          },
          _wrapLine: function (e, i, r, n) {
            var o = 0,
            s = this.splitByGrapheme,
            a = [
            ],
            l = [
            ],
            h = s ? t.util.string.graphemeSplit(e) : e.split(this._wordJoiners),
            c = '',
            u = 0,
            d = s ? '' : ' ',
            f = 0,
            g = 0,
            _ = 0,
            p = !0,
            m = this._getWidthOfCharSpacing();
            n = n || 0,
            0 === h.length && h.push([]),
            r -= n;
            for (var v = 0; v < h.length; v++) c = s ? h[v] : t.util.string.graphemeSplit(h[v]),
            f = this._measureWord(c, i, u),
            u += c.length,
            (o += g + f - m) > r && !p ? (a.push(l), l = [
            ], o = f, p = !0) : o += m,
            p || s || l.push(d),
            l = l.concat(c),
            g = s ? 0 : this._measureWord([d], i, u),
            u++,
            p = !1,
            f > _ && (_ = f);
            return v && a.push(l),
            _ + n > this.dynamicMinWidth && (this.dynamicMinWidth = _ - m + n),
            a
          },
          isEndOfWrapping: function (e) {
            return !this._styleMap[e + 1] || this._styleMap[e + 1].line !== this._styleMap[e].line
          },
          missingNewlineOffset: function (e) {
            return this.splitByGrapheme ? this.isEndOfWrapping(e) ? 1 : 0 : 1
          },
          _splitTextIntoLines: function (e) {
            for (var i = t.Text.prototype._splitTextIntoLines.call(this, e), r = this._wrapText(i.lines, this.width), n = new Array(r.length), o = 0; o < r.length; o++) n[o] = r[o].join('');
            return i.lines = n,
            i.graphemeLines = r,
            i
          },
          getMinWidth: function () {
            return Math.max(this.minWidth, this.dynamicMinWidth)
          },
          _removeExtraneousStyles: function () {
            var e = {
            };
            for (var t in this._styleMap) this._textLines[t] && (e[this._styleMap[t].line] = 1);
            for (var t in this.styles) e[t] || delete this.styles[t]
          },
          toObject: function (e) {
            return this.callSuper('toObject', [
              'minWidth',
              'splitByGrapheme'
            ].concat(e))
          }
        }),
        t.Textbox.fromObject = function (e, i) {
          return t.Object._fromObject('Textbox', e, i, 'text')
        }
      }(t),
      function () {
        var e = T.controlsUtils,
        t = e.scaleSkewCursorStyleHandler,
        i = e.scaleCursorStyleHandler,
        r = e.scalingEqually,
        n = e.scalingYOrSkewingX,
        o = e.scalingXOrSkewingY,
        s = e.scaleOrSkewActionName,
        a = T.Object.prototype.controls;
        if (a.ml = new T.Control({
          x: - 0.5,
          y: 0,
          cursorStyleHandler: t,
          actionHandler: o,
          getActionName: s
        }), a.mr = new T.Control({
          x: 0.5,
          y: 0,
          cursorStyleHandler: t,
          actionHandler: o,
          getActionName: s
        }), a.mb = new T.Control({
          x: 0,
          y: 0.5,
          cursorStyleHandler: t,
          actionHandler: n,
          getActionName: s
        }), a.mt = new T.Control({
          x: 0,
          y: - 0.5,
          cursorStyleHandler: t,
          actionHandler: n,
          getActionName: s
        }), a.tl = new T.Control({
          x: - 0.5,
          y: - 0.5,
          cursorStyleHandler: i,
          actionHandler: r
        }), a.tr = new T.Control({
          x: 0.5,
          y: - 0.5,
          cursorStyleHandler: i,
          actionHandler: r
        }), a.bl = new T.Control({
          x: - 0.5,
          y: 0.5,
          cursorStyleHandler: i,
          actionHandler: r
        }), a.br = new T.Control({
          x: 0.5,
          y: 0.5,
          cursorStyleHandler: i,
          actionHandler: r
        }), a.mtr = new T.Control({
          x: 0,
          y: - 0.5,
          actionHandler: e.rotationWithSnapping,
          cursorStyleHandler: e.rotationStyleHandler,
          offsetY: - 40,
          withConnection: !0,
          actionName: 'rotate'
        }), T.Textbox) {
          var l = T.Textbox.prototype.controls = {
          };
          l.mtr = a.mtr,
          l.tr = a.tr,
          l.br = a.br,
          l.tl = a.tl,
          l.bl = a.bl,
          l.mt = a.mt,
          l.mb = a.mb,
          l.mr = new T.Control({
            x: 0.5,
            y: 0,
            actionHandler: e.changeWidth,
            cursorStyleHandler: t,
            actionName: 'resizing'
          }),
          l.ml = new T.Control({
            x: - 0.5,
            y: 0,
            actionHandler: e.changeWidth,
            cursorStyleHandler: t,
            actionName: 'resizing'
          })
        }
      }()
    },
    192: () =>{
    },
    898: () =>{
    },
    245: () =>{
    }
  },
  F = {
  };
  function P(e) {
    var t = F[e];
    if (void 0 !== t) return t.exports;
    var i = F[e] = {
      exports: {
      }
    };
    return L[e](i, i.exports, P),
    i.exports
  }
  P.d = (e, t) =>{
    for (var i in t) P.o(t, i) && !P.o(e, i) && Object.defineProperty(e, i, {
      enumerable: !0,
      get: t[i]
    })
  },
  P.o = (e, t) =>Object.prototype.hasOwnProperty.call(e, t);
  var k = {
  };
  (() =>{
    let e;
    P.d(k, {
      R: () =>e
    }),
    e = 'undefined' != typeof document && 'undefined' != typeof window ? P(653).fabric : {
      version: '5.2.1'
    }
  }) ();
  var B = k.R;
  /*!
     * Dynamsoft JavaScript Library
     * @product Dynamsoft Camera Enhancer JS Edition
     * @website https://www.dynamsoft.com
     * @copyright Copyright 2022, Dynamsoft Corporation
     * @author Dynamsoft
     * @version 3.0.1 (js 20220803)
     * @fileoverview Dynamsoft JavaScript Library for Camera Enhancer
     * More info on DCE JS: https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/?ver=latest
     */
  function j(e, t, i, r) {
    return new (i || (i = Promise)) ((function (n, o) {
      function s(e) {
        try {
          l(r.next(e))
        } catch (e) {
          o(e)
        }
      }
      function a(e) {
        try {
          l(r.throw(e))
        } catch (e) {
          o(e)
        }
      }
      function l(e) {
        var t;
        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
          e(t)
        }))).then(s, a)
      }
      l((r = r.apply(e, t || [
      ])).next())
    }))
  }
  const N = 'undefined' == typeof self;
  let V,
  U,
  G,
  W,
  H;
  if ('undefined' != typeof navigator && (V = navigator, U = V.userAgent, G = V.platform, W = V.mediaDevices), !N) {
    const e = {
      init: function () {
        this.browser = this.searchString(this.dataBrowser) || 'unknownBrowser',
        this.version = this.searchVersion(U) || this.searchVersion(V.appVersion) || 0,
        this.OS = this.searchString(this.dataOS) || 'unknownOS',
        'Linux' == this.OS && - 1 != U.indexOf('Windows NT') && (this.OS = 'HarmonyOS')
      },
      searchString: function (e) {
        for (let t = 0; t < e.length; t++) {
          let i = e[t].string,
          r = e[t].prop;
          if (this.versionSearchString = e[t].versionSearch || e[t].identity, i) {
            if ( - 1 != i.indexOf(e[t].subString)) return e[t].identity
          } else if (r) return e[t].identity
        }
      },
      searchVersion: function (e) {
        let t = e.indexOf(this.versionSearchString);
        if ( - 1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
      },
      dataBrowser: [
        {
          string: U,
          subString: 'Edge',
          identity: 'Edge'
        },
        {
          string: U,
          subString: 'OPR',
          identity: 'OPR'
        },
        {
          string: U,
          subString: 'Chrome',
          identity: 'Chrome'
        },
        {
          string: V.vendor,
          subString: 'Apple',
          identity: 'Safari',
          versionSearch: 'Version'
        },
        {
          string: U,
          subString: 'Firefox',
          identity: 'Firefox'
        },
        {
          string: U,
          subString: 'MSIE',
          identity: 'Explorer',
          versionSearch: 'MSIE'
        }
      ],
      dataOS: [
        {
          string: U,
          subString: 'HarmonyOS',
          identity: 'HarmonyOS'
        },
        {
          string: U,
          subString: 'Android',
          identity: 'Android'
        },
        {
          string: U,
          subString: 'iPhone',
          identity: 'iPhone'
        },
        {
          string: G,
          subString: 'Win',
          identity: 'Windows'
        },
        {
          string: G,
          subString: 'Mac',
          identity: 'Mac'
        },
        {
          string: G,
          subString: 'Linux',
          identity: 'Linux'
        }
      ]
    };
    e.init(),
    H = {
      browser: e.browser,
      version: e.version,
      OS: e.OS
    }
  }
  N && (H = {
    browser: 'ssr',
    version: 0,
    OS: 'ssr'
  });
  const X = 'undefined' != typeof WebAssembly && U && !(/Safari/.test(U) && !/Chrome/.test(U) && /\(.+\s11_2_([2-6]).*\)/.test(U)),
  Y = !('undefined' == typeof Worker),
  z = !(!W || !W.getUserMedia),
  K = async() =>{
    let e = !1;
    if (z) try {
      (await W.getUserMedia({
        video: !0
      })).getTracks().forEach((e=>{
        e.stop()
      })),
      e = !0
    } catch (e) {
    }
    return e
  };
  'Chrome' === H.browser && H.version > 66 || 'Safari' === H.browser && H.version > 13 || 'OPR' === H.browser && H.version > 43 || 'Edge' === H.browser && H.version;
  const J = (() =>{
    if (!N && document.currentScript) {
      let e = document.currentScript.src,
      t = e.indexOf('?');
      if ( - 1 != t) e = e.substring(0, t);
       else {
        let t = e.indexOf('#');
        - 1 != t && (e = e.substring(0, t))
      }
      return e.substring(0, e.lastIndexOf('/') + 1)
    }
    return './'
  }) ();
  class q {
    constructor(e, t) {
      this._zIndex = null,
      this._drawingLayer = null,
      this._drawingLayerId = null,
      this._mapStyle = new Map,
      this.mapEvents = new Map([['select',
      [
      ]],
      [
        'deselect',
        [
        ]
      ]]),
      this.isDrawingItem = !0,
      this._setFabricObject(e),
      this._mediaType = e.type,
      this.styleSelector = 'default',
      this.styleId = t;
      for (let e of q.arrStyleSelectors) this._mapStyle.set(e, null)
    }
    get mediaType() {
      return this._mediaType
    }
    get drawingLayerId() {
      return this._drawingLayerId
    }
    _setFabricObject(e) {
      this._fabricObject = e;
      const t = this.mapEvents;
      this._fabricObject.onSelect = () =>{
        this.styleSelector = 'selected';
        const e = this.mapEvents.get('select');
        for (let t of e) t && t.apply(this)
      },
      this._fabricObject.onDeselect = () =>{
        this.styleSelector = 'default';
        const e = t.get('deselect');
        for (let t of e) t && t.apply(this)
      },
      e.getDrawingItem = () =>this
    }
    _getFabricObject() {
      return this._fabricObject
    }
    on(e, t, i) {
      const r = this.mapEvents.get(e);
      r.includes(t) || r.push(t)
    }
    off(e, t) {
      const i = this.mapEvents.get(e),
      r = i.indexOf(t);
      - 1 !== r && i.splice(r, 1)
    }
    _setEditable(e) {
      const t = this._fabricObject;
      e ? (t.selectable = !0, t.evented = !0, t.hasControls = !0) : (t.selectable = !1, t.evented = !1, t.hasControls = !1)
    }
    _extendSet(e, t) {
      return !1
    }
    _extendGet(e) {
    }
    set(e, t) {
      this._extendSet(e, t) || ('x' === e ? this._fabricObject.set('left', t) : 'y' === e ? this._fabricObject.set('top', t) : this._fabricObject.set(e, t)),
      [
        'vertices',
        'left',
        'top',
        'width',
        'height',
        'scaleX',
        'scaleY',
        'skewX',
        'skewY',
        'padding',
        'angle',
        'strokeWidth'
      ].includes(e) && this._fabricObject.setCoords()
    }
    get(e) {
      let t = this._extendGet(e);
      return void 0 === t && (t = 'x' === e ? this._fabricObject.get('left') : 'y' === e ? this._fabricObject.get('top') : this._fabricObject.get(e)),
      t
    }
  }
  function Q(e, t, i) {
    let r = i.points[this.pointIndex].x - i.pathOffset.x,
    n = i.points[this.pointIndex].y - i.pathOffset.y;
    return B.util.transformPoint({
      x: r,
      y: n
    }, B.util.multiplyTransformMatrices(i.canvas.viewportTransform, i.calcTransformMatrix()))
  }
  function Z(e) {
    let t = new B.Point(e.strokeUniform ? 1 / e.scaleX : 1, e.strokeUniform ? 1 / e.scaleY : 1).multiply(e.strokeWidth);
    return new B.Point(e.width + t.x, e.height + t.y)
  }
  function $(e, t, i, r) {
    let n = t.target,
    o = n.controls[n.__corner],
    s = n.toLocalPoint(new B.Point(i, r), 'center', 'center'),
    a = Z(n),
    l = n._getTransformedDimensions(0, 0),
    h = {
      x: s.x * a.x / l.x + n.pathOffset.x,
      y: s.y * a.y / l.y + n.pathOffset.y
    };
    return n.points[o.pointIndex] = h,
    !0
  }
  function ee(e, t) {
    return function (i, r, n, o) {
      let s = r.target,
      a = B.util.transformPoint({
        x: s.points[e].x - s.pathOffset.x,
        y: s.points[e].y - s.pathOffset.y
      }, s.calcTransformMatrix()),
      l = t(i, r, n, o);
      s._setPositionDimensions({
      });
      let h = Z(s),
      c = (s.points[e].x - s.pathOffset.x) / h.x,
      u = (s.points[e].y - s.pathOffset.y) / h.y;
      return s.setPositionByOrigin(a, c + 0.5, u + 0.5),
      l
    }
  }
  q.arrMediaTypes = [
    'rect',
    'arc',
    'polygon',
    'image',
    'text',
    'line',
    'path'
  ],
  q.arrStyleSelectors = [
    'default',
    'selected'
  ],
  'undefined' != typeof document && 'undefined' != typeof window && (B.StaticCanvas.prototype.dispose = function () {
    return this.isRendering && (B.util.cancelAnimFrame(this.isRendering), this.isRendering = 0),
    this.forEachObject((function (e) {
      e.dispose && e.dispose()
    })),
    this._objects = [
    ],
    this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(),
    this.backgroundImage = null,
    this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(),
    this.overlayImage = null,
    this._iTextInstances = null,
    this.contextContainer = null,
    this.lowerCanvasEl.classList.remove('lower-canvas'),
    delete this._originalCanvasStyle,
    this.lowerCanvasEl.setAttribute('width', this.width),
    this.lowerCanvasEl.setAttribute('height', this.height),
    B.util.cleanUpJsdomNode(this.lowerCanvasEl),
    this.lowerCanvasEl = void 0,
    this
  }, B.Object.prototype.transparentCorners = !1, B.Object.prototype.cornerSize = 20, B.Object.prototype.touchCornerSize = 100, B.Object.prototype.cornerColor = 'rgb(254,142,20)', B.Object.prototype.cornerStyle = 'circle', B.Object.prototype.strokeUniform = !0, B.Object.prototype.hasBorders = !1, B.ActiveSelection.prototype.onDeselect = function () {
    return this.getObjects().forEach((e=>{
      setTimeout(e.onDeselect, 0)
    })),
    this.destroy(),
    !1
  }, B.Canvas.prototype.containerClass = '', B.Canvas.prototype.getPointer = function (e, t) {
    if (this._absolutePointer && !t) return this._absolutePointer;
    if (this._pointer && t) return this._pointer;
    var i,
    r = this.upperCanvasEl,
    n = B.util.getPointer(e, r),
    o = r.getBoundingClientRect(),
    s = o.width || 0,
    a = o.height || 0;
    s && a || ('top' in o && 'bottom' in o && (a = Math.abs(o.top - o.bottom)), 'right' in o && 'left' in o && (s = Math.abs(o.right - o.left))),
    this.calcOffset(),
    n.x = n.x - this._offset.left,
    n.y = n.y - this._offset.top,
    t || (n = this.restorePointerVpt(n));
    var l = this.getRetinaScaling();
    if (1 !== l && (n.x /= l, n.y /= l), 0 !== s && 0 !== a) {
      var h = window.getComputedStyle(r).objectFit,
      c = r.width,
      u = r.height,
      d = s,
      f = a;
      i = {
        width: c / d,
        height: u / f
      };
      var g,
      _,
      p = c / u,
      m = d / f;
      return 'contain' === h ? p > m ? (g = d, _ = d / p, {
        x: n.x * i.width,
        y: (n.y - (f - _) / 2) * i.width
      }) : (g = f * p, _ = f, {
        x: (n.x - (d - g) / 2) * i.height,
        y: n.y * i.height
      }) : 'cover' === h ? p > m ? {
        x: (c - i.height * d) / 2 + n.x * i.height,
        y: n.y * i.height
      }
       : {
        x: n.x * i.width,
        y: (u - i.width * f) / 2 + n.y * i.width
      }
       : {
        x: n.x * i.width,
        y: n.y * i.height
      }
    }
    return i = {
      width: 1,
      height: 1
    },
    {
      x: n.x * i.width,
      y: n.y * i.height
    }
  });
  class te {
    constructor(e, t, i, r) {
      let n,
      o;
      switch (this.mapMediaType_Style = new Map, this.mode = 'viewer', this.onSelectionChange = null, this._arrDrwaingItem = [
        ], this._arrFabricObject = [
        ], this._visible = !0, e.hasOwnProperty('getFabricCanvas') ? this.fabricCanvas = e.getFabricCanvas() : (this.fabricCanvas = new B.Canvas(e, r), this.fabricCanvas.setDimensions({
          width: '100%',
          height: '100%'
        }, {
          cssOnly: !0
        }), this.fabricCanvas.lowerCanvasEl.className = '', this.fabricCanvas.upperCanvasEl.className = '', this.fabricCanvas.on('selection:created', (function (e) {
          const t = e.selected,
          i = [
          ];
          for (let e of t) {
            const t = e.getDrawingItem()._drawingLayer;
            t && !i.includes(t) && i.push(t)
          }
          for (let e of i) {
            const i = [
            ];
            for (let r of t) {
              const t = r.getDrawingItem();
              t._drawingLayer === e && i.push(t)
            }
            setTimeout((() =>{
              e.onSelectionChange && e.onSelectionChange(i, [
              ])
            }), 0)
          }
        })), this.fabricCanvas.on('before:selection:cleared', (function (e) {
          const t = this.getActiveObjects(),
          i = [
          ];
          for (let e of t) {
            const t = e.getDrawingItem()._drawingLayer;
            t && !i.includes(t) && i.push(t)
          }
          for (let e of i) {
            const i = [
            ];
            for (let r of t) {
              const t = r.getDrawingItem();
              t._drawingLayer === e && i.push(t)
            }
            setTimeout((() =>{
              const t = [
              ];
              for (let r of i) e.hasDrawingItem(r) && t.push(r);
              t.length > 0 && e.onSelectionChange && e.onSelectionChange([], t)
            }), 0)
          }
        })), this.fabricCanvas.on('selection:updated', (function (e) {
          const t = e.selected,
          i = e.deselected,
          r = [
          ];
          for (let e of t) {
            const t = e.getDrawingItem()._drawingLayer;
            t && !r.includes(t) && r.push(t)
          }
          for (let e of i) {
            const t = e.getDrawingItem()._drawingLayer;
            t && !r.includes(t) && r.push(t)
          }
          for (let e of r) {
            const r = [
            ],
            n = [
            ];
            for (let i of t) {
              const t = i.getDrawingItem();
              t._drawingLayer === e && r.push(t)
            }
            for (let t of i) {
              const i = t.getDrawingItem();
              i._drawingLayer === e && n.push(i)
            }
            setTimeout((() =>{
              e.onSelectionChange && e.onSelectionChange(r, n)
            }), 0)
          }
        })), this.fabricCanvas.wrapperEl.style.position = 'absolute', e.getFabricCanvas = () =>this.fabricCanvas), this.id = t, this._mapDrawingStyles = i, t) {
        case 1:
          n = i.get(1),
          o = i.get(5);
          break;
        case 2:
          n = i.get(2),
          o = i.get(6);
          break;
        case 3:
          n = i.get(3),
          o = i.get(7);
          break;
        default:
          n = i.get(4),
          o = i.get(8)
      }
      for (let e of q.arrMediaTypes) this.mapMediaType_Style.set(e, {
      default:
        n,
        selected: o
      })
    }
    getId() {
      return this.id
    }
    _getDrawingStyle(e, t) {
      if ('number' != typeof e) throw new Error('Invalid style id.');
      const i = this._mapDrawingStyles.get(e);
      return i ? t ? JSON.parse(JSON.stringify(i)) : i : null
    }
    setVisible(e) {
      if (e) {
        for (let e of this._arrFabricObject) e.visible = !0;
        this._visible = !0
      } else {
        for (let e of this._arrFabricObject) e.visible = !1;
        this._visible = !1
      }
      this.fabricCanvas.renderAll()
    }
    isVisible() {
      return this._visible
    }
    _getItemCurrentStyleId(e) {
      return e.styleId ? e.styleId : this.mapMediaType_Style.get(e._mediaType) [e.styleSelector].styleId
    }
    _getItemCurrentStyle(e) {
      if (e.styleId) return this._getDrawingStyle(e.styleId);
      return e._mapStyle.get(e.styleSelector) || null
    }
    _changeMediaTypeCurStyleInStyleSelector(e, t, i, r) {
      let n;
      switch (e) {
        case 'rect':
          n = this.fabricCanvas.getObjects('rect');
          break;
        case 'arc':
          n = this.fabricCanvas.getObjects('circle');
          break;
        case 'polygon':
          n = this.fabricCanvas.getObjects('polygon');
          break;
        case 'image':
          n = this.fabricCanvas.getObjects('image');
          break;
        case 'text':
          n = this.fabricCanvas.getObjects('text');
          break;
        case 'line':
          n = this.fabricCanvas.getObjects('line');
          break;
        case 'path':
          n = this.fabricCanvas.getObjects('path')
      }
      for (let e of n) {
        if (!this._arrFabricObject.includes(e)) continue;
        const r = e.getDrawingItem();
        r.styleSelector === t && this._changeItemStyle(r, i, !0)
      }
      r || this.fabricCanvas.renderAll()
    }
    _changeItemStyle(e, t, i) {
      if (!e || !t) return;
      const r = e._getFabricObject();
      'number' == typeof e.styleId && (t = this._getDrawingStyle(e.styleId)),
      r.strokeWidth = t.lineWidth,
      'fill' === t.paintMode ? (r.fill = t.fillStyle, r.stroke = t.fillStyle) : 'stroke' === t.paintMode ? (r.fill = 'transparent', r.stroke = t.strokeStyle) : 'strokeAndFill' === t.paintMode && (r.fill = t.fillStyle, r.stroke = t.strokeStyle),
      r.fontFamily && (r.fontFamily = t.fontFamily),
      r.fontSize && (r.fontSize = t.fontSize),
      r.group || (r.dirty = !0),
      i || this.fabricCanvas.renderAll()
    }
    _updateGroupItem(e, t, i) {
      if (!e || !t) return;
      const r = e.getChildItems();
      if ('add' === i) {
        if (r.includes(t)) return;
        const i = t._getFabricObject();
        if (this.fabricCanvas.getObjects().includes(i)) {
          if (!this._arrFabricObject.includes(i)) throw new Error('Existed in other drawing layers.');
          t._zIndex = null
        } else {
          let i;
          if (t.styleId) i = this._getDrawingStyle(t.styleId);
           else {
            i = this.mapMediaType_Style.get(t._mediaType) [e.styleSelector];
            const r = () =>{
              this._changeItemStyle(t, this.mapMediaType_Style.get(t._mediaType).selected, !0)
            },
            n = () =>{
              this._changeItemStyle(t, this.mapMediaType_Style.get(t._mediaType).default, !0)
            };
            t.on('select', r),
            t.on('deselect', n),
            t._funcChangeStyleToSelected = r,
            t._funcChangeStyleToDefault = n
          }
          t._drawingLayer = this,
          t._drawingLayerId = this.id,
          this._changeItemStyle(t, i, !0)
        }
        e._fabricObject.addWithUpdate(t._getFabricObject())
      } else {
        if ('remove' !== i) return;
        if (!r.includes(t)) return;
        t._zIndex = null,
        t._drawingLayer = null,
        t._drawingLayerId = null,
        t.off('select', t._funcChangeStyleToSelected),
        t.off('deselect', t._funcChangeStyleToDefault),
        t._funcChangeStyleToSelected = null,
        t._funcChangeStyleToDefault = null,
        e._fabricObject.removeWithUpdate(t._getFabricObject())
      }
      this.fabricCanvas.renderAll()
    }
    _addDrawingItem(e, t) {
      let i = e._getFabricObject();
      const r = this.fabricCanvas.getObjects();
      let n,
      o;
      if (r.includes(i)) {
        if (this._arrFabricObject.includes(i)) return;
        throw new Error('Existed in other drawing layers.')
      }
      if ('group' === e._mediaType) {
        n = e.getChildItems();
        for (let e of n) if (e._drawingLayer && e._drawingLayer !== this) throw new Error('The childItems of DT_Group have existed in other drawing layers.')
      }
      if (t && 'object' == typeof t && !Array.isArray(t)) for (let e in t) i.set(e, t[e]);
      if (n) {
        for (let e of n) {
          if (e.styleId) o = this._getDrawingStyle(e.styleId);
           else {
            const t = this.mapMediaType_Style.get(e._mediaType);
            for (let i of q.arrStyleSelectors) e._mapStyle.set(i, t[i]);
            o = t.default;
            const i = () =>{
              this._changeItemStyle(e, this.mapMediaType_Style.get(e._mediaType).selected, !0)
            },
            r = () =>{
              this._changeItemStyle(e, this.mapMediaType_Style.get(e._mediaType).default, !0)
            };
            e.on('select', i),
            e.on('deselect', r),
            e._funcChangeStyleToSelected = i,
            e._funcChangeStyleToDefault = r
          }
          e._drawingLayer = this,
          e._drawingLayerId = this.id,
          this._changeItemStyle(e, o, !0)
        }
        i.dirty = !0,
        this.fabricCanvas.renderAll()
      } else {
        if (e.styleId) o = this._getDrawingStyle(e.styleId);
         else {
          const t = this.mapMediaType_Style.get(e._mediaType);
          for (let i of q.arrStyleSelectors) e._mapStyle.set(i, t[i]);
          o = t.default;
          const i = () =>{
            this._changeItemStyle(e, this.mapMediaType_Style.get(e._mediaType).selected)
          },
          r = () =>{
            this._changeItemStyle(e, this.mapMediaType_Style.get(e._mediaType).default)
          };
          e.on('select', i),
          e.on('deselect', r),
          e._funcChangeStyleToSelected = i,
          e._funcChangeStyleToDefault = r
        }
        this._changeItemStyle(e, o)
      }
      e._zIndex = this.id,
      e._drawingLayer = this,
      e._drawingLayerId = this.id;
      const s = this._arrFabricObject.length;
      let a = r.length;
      if (s) a = r.indexOf(this._arrFabricObject[s - 1]) + 1;
       else for (let t = 0; t < r.length; t++) if (e._zIndex < r[t].getDrawingItem()._zIndex) {
        a = t;
        break
      }
      this._arrDrwaingItem.push(e),
      this._arrFabricObject.push(i),
      this._visible ? i.visible = !0 : i.visible = !1,
      this.fabricCanvas.insertAt(i, a, !1)
    }
    addDrawingItem(e) {
      if (!e || !e.isDrawingItem) throw TypeError('Illegal drawing item.');
      if ('viewer' === this.mode) e._setEditable(!1);
       else {
        if ('editor' !== this.mode) throw new Error('Illegal \'mode\'.');
        e._setEditable(!0)
      }
      this._addDrawingItem(e)
    }
    addDrawingItems(e) {
      for (let t of e) this.addDrawingItem(t)
    }
    removeDrawingItem(e) {
      if (!e || !e.isDrawingItem) throw TypeError('Illegal drawing item.');
      if (!this.hasDrawingItem(e)) return;
      if (e._zIndex = null, e._drawingLayer = null, e._drawingLayerId = null, 'group' === e._mediaType) {
        const t = e.getChildItems();
        for (let e of t) e._zIndex = null,
        e._drawingLayer = null,
        e._drawingLayerId = null,
        e.off('select', e._funcChangeStyleToSelected),
        e.off('deselect', e._funcChangeStyleToDefault),
        e._funcChangeStyleToSelected = null,
        e._funcChangeStyleToDefault = null,
        e._mapStyle.clear()
      } else e.off('select', e._funcChangeStyleToSelected),
      e.off('deselect', e._funcChangeStyleToDefault),
      e._funcChangeStyleToSelected = null,
      e._funcChangeStyleToDefault = null,
      e._mapStyle.clear();
      'selected' === e.styleSelector && (this.fabricCanvas._activeObject = null, e.styleSelector = 'default');
      const t = e._getFabricObject();
      this.fabricCanvas.remove(t),
      this._arrDrwaingItem.splice(this._arrDrwaingItem.indexOf(e), 1),
      this._arrFabricObject.splice(this._arrFabricObject.indexOf(t), 1)
    }
    removeDrawingItems(e) {
      for (let t of e) this.removeDrawingItem(t)
    }
    setDrawingItems(e) {
      this.clearDrawingItems(),
      this.addDrawingItems(e)
    }
    getDrawingItems() {
      return this._arrDrwaingItem
    }
    getSelectedDrawingItems() {
      const e = this.fabricCanvas.getActiveObjects(),
      t = [
      ];
      for (let i of e) this._arrFabricObject.includes(i) && t.push(i.getDrawingItem());
      return t
    }
    hasDrawingItem(e) {
      if (!e || !e.isDrawingItem) throw TypeError('Illegal drawing item.');
      return this._arrDrwaingItem.includes(e)
    }
    clearDrawingItems() {
      this.removeDrawingItems(Array.from(this._arrDrwaingItem))
    }
    setDrawingStyle(e, t, i) {
      let r,
      n;
      if (t = t ? t.toLocaleLowerCase() : 'all', i = i ? i.toLocaleLowerCase() : 'all', r = 'number' == typeof e ? this._getDrawingStyle(e) : e, 'all' === t) {
        const e = this.mapMediaType_Style.keys();
        for (let t of e) if (n = this.mapMediaType_Style.get(t), 'all' === i) for (let e of q.arrStyleSelectors) {
          this._changeMediaTypeCurStyleInStyleSelector(t, e, r, !0),
          n[e] = r;
          for (let t of this._arrDrwaingItem) 'number' != typeof t.styleId && t._mapStyle.set(e, r)
        } else {
          this._changeMediaTypeCurStyleInStyleSelector(t, i, r, !0),
          n[i] = r;
          for (let e of this._arrDrwaingItem) 'number' != typeof e.styleId && e._mapStyle.set(i, r)
        }
        this.fabricCanvas.renderAll()
      } else if (n = this.mapMediaType_Style.get(t), 'all' === i) for (let e of q.arrStyleSelectors) {
        this._changeMediaTypeCurStyleInStyleSelector(t, e, r, !0),
        n[e] = r;
        for (let i of this._arrDrwaingItem) 'number' != typeof i.styleId && i._mediaType === t && i._mapStyle.set(e, r)
      } else {
        this._changeMediaTypeCurStyleInStyleSelector(t, i, r, !0),
        n[i] = r;
        for (let e of this._arrDrwaingItem) 'number' != typeof e.styleId && e._mediaType === t && e._mapStyle.set(i, r)
      }
    }
    setMode(e) {
      if ('viewer' === (e = e.toLocaleLowerCase())) {
        for (let e of this._arrDrwaingItem) e._setEditable(!1);
        this.fabricCanvas.discardActiveObject(),
        this.fabricCanvas.renderAll(),
        this.mode = 'viewer'
      } else {
        if ('editor' !== e) throw new RangeError('Invalid value.');
        for (let e of this._arrDrwaingItem) e._setEditable(!0);
        this.mode = 'editor'
      }
      this._manager._switchPointerEvent()
    }
    getMode() {
      return this.mode
    }
    _setDimensions(e, t) {
      this.fabricCanvas.setDimensions(e, t)
    }
    _setObjectFit(e) {
      if (e = e.toLowerCase(), !['contain',
      'cover'].includes(e)) throw new Error(`Unsupported value '${ e }'.`);
      this.fabricCanvas.lowerCanvasEl.style.objectFit = e,
      this.fabricCanvas.upperCanvasEl.style.objectFit = e
    }
    _getObjectFit() {
      return this.fabricCanvas.lowerCanvasEl.style.objectFit
    }
    renderAll() {
      for (let e of this._arrDrwaingItem) {
        const t = this._getItemCurrentStyle(e);
        this._changeItemStyle(e, t, !0)
      }
      this.fabricCanvas.renderAll()
    }
    dispose() {
      this.clearDrawingItems(),
      1 === this._manager._arrDrawingLayer.length && (this.fabricCanvas.wrapperEl.style.pointerEvents = 'none', this.fabricCanvas.dispose(), this._arrDrwaingItem.length = 0, this._arrFabricObject.length = 0)
    }
  }
  class ie {
    constructor() {
      this._arrDrawingLayer = [
      ],
      this._mapDrawingStyles = new Map([[1,
      {
        id: 1,
        lineWidth: 2,
        fillStyle: 'rgba(73, 173, 245, 0.3)',
        strokeStyle: 'rgba(73, 173, 245, 1)',
        paintMode: 'stroke',
        fontFamily: 'sans-serif',
        fontSize: 10
      }
      ],
      [
        2,
        {
          id: 2,
          lineWidth: 2,
          fillStyle: 'rgba(73, 245, 73, 0.3)',
          strokeStyle: 'rgba(73, 245, 73, 0.9)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        3,
        {
          id: 3,
          lineWidth: 2,
          fillStyle: 'rgba(254, 180, 32, 0.3)',
          strokeStyle: 'rgba(254, 180, 32, 0.9)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        4,
        {
          id: 4,
          lineWidth: 2,
          fillStyle: 'rgba(245, 236, 73, 0.3)',
          strokeStyle: 'rgba(245, 236, 73, 1)',
          paintMode: 'stroke',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        5,
        {
          id: 5,
          lineWidth: 2,
          fillStyle: 'rgba(73, 173, 245, 0.3)',
          strokeStyle: 'rgba(73, 173, 245, 1)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        6,
        {
          id: 6,
          lineWidth: 2,
          fillStyle: 'rgba(73, 245, 73, 0.3)',
          strokeStyle: 'rgba(73, 245, 73, 0.9)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        7,
        {
          id: 7,
          lineWidth: 2,
          fillStyle: 'rgba(254, 180, 32, 0.3)',
          strokeStyle: 'rgba(254, 180, 32, 1)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ],
      [
        8,
        {
          id: 8,
          lineWidth: 2,
          fillStyle: 'rgba(245, 236, 73, 0.3)',
          strokeStyle: 'rgba(245, 236, 73, 1)',
          paintMode: 'strokeAndFill',
          fontFamily: 'sans-serif',
          fontSize: 10
        }
      ]]),
      this._defaultStyleTemplate = {
        lineWidth: 2,
        fillStyle: 'rgba(245, 236, 73, 0.3)',
        strokeStyle: 'rgba(245, 236, 73, 1)',
        paintMode: 'stroke',
        fontFamily: 'sans-serif',
        fontSize: 10
      }
    }
    createDrawingStyle(e) {
      let t;
      if (e.hasOwnProperty('id')) {
        if (this._mapDrawingStyles.has(e.id)) throw new Error('Existing drawing style id.');
        t = e.id
      } else {
        let e = 100;
        for (; this._mapDrawingStyles.has(e); ) e++;
        t = e
      }
      const i = JSON.parse(JSON.stringify(e));
      i.id = t;
      for (let e in this._defaultStyleTemplate) i.hasOwnProperty(e) || (i[e] = this._defaultStyleTemplate[e]);
      return this._mapDrawingStyles.set(t, i),
      i.id
    }
    _getDrawingStyle(e, t) {
      if ('number' != typeof e) throw new Error('Invalid style id.');
      const i = this._mapDrawingStyles.get(e);
      return i ? t ? JSON.parse(JSON.stringify(i)) : i : null
    }
    getDrawingStyle(e) {
      return this._getDrawingStyle(e, !0)
    }
    getDrawingStyles() {
      return JSON.parse(JSON.stringify(Array.from(this._mapDrawingStyles.values())))
    }
    _updateDrawingStyle(e, t) {
      const i = this._mapDrawingStyles.get(e);
      if (i) for (let e in t) i.hasOwnProperty(e) && (i[e] = t[e])
    }
    updateDrawingStyle(e, t) {
      this._updateDrawingStyle(e, t);
      for (let e of this._arrDrawingLayer) e.renderAll()
    }
    createDrawingLayer(e, t) {
      const i = e=>{
        for (let t of this._arrDrawingLayer) if (t.getId() === e) return !0;
        return !1
      };
      if (void 0 === t) {
        for (let e = 100; ; e++) if (!i(e)) {
          t = e;
          break
        }
      } else if (i(t)) throw new Error('Existed drawing layer id.');
      const r = new te(e, t, this._mapDrawingStyles, {
        enableRetinaScaling: !1
      });
      return r._manager = this,
      this._arrDrawingLayer.push(r),
      this._switchPointerEvent(),
      r
    }
    deleteDrwaingLayer(e) {
      const t = this.getDrawingLayer(e);
      if (!t) return;
      const i = this._arrDrawingLayer;
      t.dispose(),
      i.splice(i.indexOf(t), 1),
      this._switchPointerEvent()
    }
    clearDrawingLayers() {
      for (let e of this._arrDrawingLayer) e.dispose();
      this._arrDrawingLayer.length = 0
    }
    getDrawingLayer(e) {
      for (let t of this._arrDrawingLayer) if (t.getId() === e) return t;
      return null
    }
    getDrawingLayers() {
      return Array.from(this._arrDrawingLayer)
    }
    getSelectedDrawingItems() {
      if (!this._arrDrawingLayer.length) return;
      const e = this._arrDrawingLayer[0].fabricCanvas.getActiveObjects(),
      t = [
      ];
      for (let i of e) t.push(i.getDrawingItem());
      return t
    }
    setDimensions(e, t) {
      this._arrDrawingLayer.length && this._arrDrawingLayer[0]._setDimensions(e, t)
    }
    setObjectFit(e) {
      for (let t of this._arrDrawingLayer) t && t._setObjectFit(e)
    }
    getObjectFit() {
      return this._arrDrawingLayer.length ? this._arrDrawingLayer[0]._getObjectFit() : null
    }
    setVisible(e) {
      this._arrDrawingLayer.length && (this._arrDrawingLayer[0].fabricCanvas.wrapperEl.style.display = e ? 'block' : 'none')
    }
    _switchPointerEvent() {
      if (!this._arrDrawingLayer.length) return;
      let e = !1;
      for (let t of this._arrDrawingLayer) 'editor' === t.getMode() && (e = !0);
      this._arrDrawingLayer[0].fabricCanvas.wrapperEl.style.pointerEvents = e ? '' : 'none'
    }
  }
  class re {
    constructor(e) {
      this._controlTarget = null,
      this._arrUsers = [
      ],
      this._mapAction_UserArgs = new Map,
      this._mapProperty_UserValue = new Map,
      this._mapAction_Callbacks = new Map,
      this._controlTarget = e
    }
    setControlTarget(e) {
      this._controlTarget = e
    }
    getControlTarget() {
      return this._controlTarget
    }
    register(e) {
      this._arrUsers.includes(e) || this._arrUsers.push(e)
    }
    logout(e) {
      const t = this._arrUsers.indexOf(e);
      - 1 !== t && (this.clearUserDisiredAction({
        user: e
      }), this.clearUserDisiredValue({
        user: e
      }), this._arrUsers.splice(t, 1))
    }
    getRegisteredUsers() {
      return this._arrUsers
    }
    ifUserExisted(e) {
      return this._arrUsers.includes(e)
    }
    setDisiredValue(e, t, i, r) {
      if (!this._arrUsers.includes(e)) throw new Error('Unregistered user.');
      r && (this._controlTarget[t] = i),
      this._mapProperty_UserValue.get(t) ? this._mapProperty_UserValue.get(t).set(e, i) : this._mapProperty_UserValue.set(t, new Map([[e,
      i]]))
    }
    clearUserDisiredValue(e) {
      if (e && (e.user || e.property)) {
        if (e.property && e.user) {
          const t = this._mapProperty_UserValue.get(e.property);
          if (!t) return;
          t.delete(e.user)
        } else if (e.property) this._mapProperty_UserValue.delete(e.property);
         else if (e.user) for (let t of this._mapProperty_UserValue.values()) t.delete(e.user)
      } else this._mapProperty_UserValue = new Map
    }
    getValue(e) {
      if (!this._controlTarget) throw new Error('Control target is not set.');
      return this._controlTarget[e]
    }
    getPropertyDisiredValue(e) {
      if (this._mapProperty_UserValue.get(e)) {
        const t = [
        ],
        i = this._mapProperty_UserValue.get(e);
        for (let e of i.values()) t.push(e);
        return t
      }
      return null
    }
    setDisiredAction(e, t, i, r) {
      if (!this._arrUsers.includes(e)) throw new Error('Unregistered user.');
      return i || (i = [
      ]),
      r ? this._controlTarget[t](...i) : (this._mapAction_UserArgs.get(t) ? this._mapAction_UserArgs.get(t).set(e, i) : this._mapAction_UserArgs.set(t, new Map([[e,
      i]])), this._render(t))
    }
    clearUserDisiredAction(e) {
      if (e && (e.user || e.actionName)) {
        if (e.actionName && e.user) {
          const t = this._mapAction_UserArgs.get(e.actionName);
          if (!t) return;
          t.delete(e.user)
        } else if (e.actionName) this._mapAction_UserArgs.delete(e.actionName);
         else if (e.user) for (let t of this._mapAction_UserArgs.values()) t.delete(e.user);
        this.render()
      } else this._mapAction_UserArgs = new Map
    }
    addCallback(e, t) {
      const i = this._mapAction_Callbacks.get(e);
      i ? i.push(t) : this._mapAction_Callbacks.set(e, [
        t
      ])
    }
    removeCallback(e, t) {
      const i = this._mapAction_Callbacks.get(e);
      if (!i) return;
      const r = i.indexOf(t);
      - 1 !== r && i.splice(r, 1)
    }
    clearCallback(e) {
      e ? this._mapAction_Callbacks.delete(e) : this._mapAction_Callbacks.clear()
    }
    _fireCallback(e) {
      const t = this._mapAction_Callbacks.get(e);
      if (t) for (let e of t) {
        if (!e) return;
        setTimeout(e.bind(this._controlTarget), 0)
      }
    }
    _render(e) {
      const t = this._mapAction_UserArgs.get(e);
      if (!t) throw new Error('Unrecorded action.');
      if (t.size === this._arrUsers.length) {
        let i = [
        ];
        for (let e of t.values()) e.length > 0 && (i = e);
        if (this._controlTarget[e]) {
          const t = this._controlTarget[e](...i);
          return this._mapAction_UserArgs.delete(e),
          this._fireCallback(e),
          t
        }
      }
    }
    render(e) {
      if (e) return this._render(e);
      for (let e of this._mapAction_UserArgs.keys()) this._render(e)
    }
  }
  class ne {
    constructor() {
      this._maxCvsSideLength = void 0,
      this._defaultMaxCvsSideLength = null,
      this._predefinedResolutions = [
        {
          width: 160,
          height: 120
        },
        {
          width: 320,
          height: 240
        },
        {
          width: 480,
          height: 360
        },
        {
          width: 640,
          height: 480
        },
        {
          width: 800,
          height: 600
        },
        {
          width: 960,
          height: 720
        },
        {
          width: 1280,
          height: 720
        },
        {
          width: 1920,
          height: 1080
        },
        {
          width: 2560,
          height: 1440
        },
        {
          width: 3840,
          height: 2160
        }
      ],
      this._mapCameraResolutions = new Map,
      this._bWebGLSupported = !0,
      this.extraBindings = [
      ],
      this._singleFrameMode = !(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
      this._cvsSingleFrameMode = null,
      this._cvsOriginalImage = null,
      this._imgWidth = 0,
      this._imgHeight = 0,
      this._singleFrameModeIpt = null,
      this._clickIptSingleFrameMode = () =>{
        if (this.singleFrameMode) {
          if (!this._singleFrameModeIpt) {
            const e = document.createElement('input');
            this._singleFrameModeIpt = e,
            e.setAttribute('type', 'file'),
            e.setAttribute('accept', '.jpg,.jpeg,.icon,.gif,.svg,.webp,.png,.bmp'),
            e.setAttribute('capture', ''),
            e.addEventListener('change', (() =>j(this, void 0, void 0, (function * () {
              const t = e.files[0];
              e.value = '';
              const i = yield(e=>j(this, void 0, void 0, (function * () {
                let t = null,
                i = null;
                if ('undefined' != typeof createImageBitmap) try {
                  if (t = yield createImageBitmap(e), t) return t
                } catch (e) {
                }
                var r;
                return t || (i = yield(r = e, new Promise(((e, t) =>{
                  let i = URL.createObjectURL(r),
                  n = new Image;
                  n.dbrObjUrl = i,
                  n.src = i,
                  n.onload = () =>{
                    e(n)
                  },
                  n.onerror = e=>{
                    t(new Error('Can\'t convert blob to image : ' + (e instanceof Event ? e.type : e)))
                  }
                })))),
                i
              }))) (t),
              r = i instanceof HTMLImageElement ? i.naturalWidth : i.width,
              n = i instanceof HTMLImageElement ? i.naturalHeight : i.height;
              this._imgWidth = r,
              this._imgHeight = n;
              const o = e=>{
                const t = Date.now();
                if (0 === r || 0 === n) return null;
                const i = this._scanRegion,
                o = this.getFrameSize(r, n, i, this.maxCvsSideLength);
                if (!o) return null;
                let s,
                a;
                s = r !== o.sWidth || n !== o.sHeight,
                a = o.sWidth !== o.dWidth || o.sHeight !== o.dHeight;
                const l = (() =>!(!this._bWebGLSupported || a)) (),
                h = {
                  data: null,
                  region: i ? JSON.parse(JSON.stringify(i)) : null,
                  sx: o.sx,
                  sy: o.sy,
                  width: o.dWidth,
                  height: o.dHeight,
                  colorMode: null,
                  timeSpent: null,
                  timeStamp: null,
                  isCropped: s,
                  toCanvas: this._toCanvas,
                  _sWidth: o.sWidth,
                  _sHeight: o.sHeight,
                  _bUseWebGL: null
                };
                let c;
                try {
                  c = this._getImageData(e, r, n, o, null, {
                    targetColorMode: this.frameColorMode,
                    bUseWebGL: l
                  })
                } catch (t) {
                  if ('WebGLError' !== t.name) throw t;
                  c = this._getImageData(e, r, n, o, null, {
                    targetColorMode: this.frameColorMode,
                    bUseWebGL: !1
                  })
                }
                if (!c) return null;
                const u = Date.now();
                return ne._onLog && ne._onLog('DCE: _getVideoFrame(region?) END: ' + u),
                h.data = c.data,
                h.colorMode = c.colorMode,
                h._bUseWebGL = c._bUseWebGL,
                h.timeSpent = u - t,
                h.timeStamp = u,
                h
              };
              (e=>{
                let t = this._cvsSingleFrameMode;
                if (!t) {
                  if (t = document.createElement('canvas'), t.style.pointerEvents = 'none', !this._video) throw new Error('\'video\' is null.');
                  this._video.after(t),
                  t.style.position = 'absolute',
                  t.style.width = '100%',
                  t.style.height = '100%',
                  t.style.left = '0',
                  t.style.top = '0',
                  t.style.objectFit = 'contain',
                  this._cvsSingleFrameMode = t
                }
                t.width == r && t.height == n || (t.width = r, t.height = n);
                const i = t.getContext('2d');
                i.clearRect(0, 0, t.width, t.height),
                i.drawImage(e, 0, 0)
              }) (i),
              this._updateScanRegionCanvas(),
              this._updateScanAreaDiv(),
              this._updateViewDecorator();
              for (let e of this._arrScanRegionOverlays) e && this._updateScanRegionOverlay(e);
              let s;
              this._updateDrawingLayersSize();
              try {
                s = o(i)
              } catch (e) {
                throw e
              }
              const a = this.mapCameraEvents.get('singleFrameAcquired');
              for (let e of a) if (e) try {
                const t = {
                  data: new Uint8Array(s.data),
                  region: JSON.parse(JSON.stringify(s.region)),
                  sx: s.sx,
                  sy: s.sy,
                  width: s.width,
                  height: s.height,
                  colorMode: s.colorMode,
                  timeSpent: s.timeSpent,
                  timeStamp: s.timeStamp,
                  isCropped: s.isCropped,
                  toCanvas: s.toCanvas,
                  _sWidth: s._sWidth,
                  _sHeight: s._sHeight,
                  _bUseWebGL: s._bUseWebGL
                };
                yield e.apply(this, [
                  t
                ])
              } catch (e) {
                console.error(e)
              }
            })))),
            e.style.position = 'fixed',
            e.style.left = '-1px',
            e.style.top = '-1px',
            e.style.width = '1px',
            e.style.height = '1px',
            e.style.backgroundColor = 'transparent',
            e.style.color = 'transparent',
            document.body.appendChild(e)
          }
          this._singleFrameModeIpt.click()
        }
      },
      this.styleEls = [
      ],
      this._frameColorMode = void 0,
      this._defaultFrameColorMode = 'RGBA',
      this.currentFSColorMode = 'rgba',
      this.ifReuseArrayBufferView = !1,
      this.maxVideoCvsLength = 3,
      this._reusedCvs = null,
      this._reusedWebGLCvs = null,
      this._reusedWebGLCtx = null,
      this._reusedDataContainer = null,
      this._webGLTexture = null,
      this._webGLProgramInfo = null,
      this._webGLBuffers = null,
      this._recordedStates = {
      },
      this._toCanvas = function () {
        const e = document.createElement('canvas');
        let t;
        if (e.width = this.width, e.height = this.height, 'grey' === this.colorMode) {
          t = new Uint8ClampedArray(this.width * this.height * 4);
          for (let e = 0; e < t.length; e += 4) t[e] = this.data[e / 4],
          t[e + 1] = this.data[e / 4],
          t[e + 2] = this.data[e / 4],
          t[e + 3] = 255
        } else t = new Uint8ClampedArray(this.data);
        const i = new ImageData(t, this.width, this.height);
        return e.getContext('2d').putImageData(i, 0, 0),
        e
      },
      this._onCameraSelChange = () =>j(this, void 0, void 0, (function * () {
        yield this.selectCamera(this._selCam.value),
        this._bOpen || this.stop()
      })),
      this._onResolutionSelChange = () =>j(this, void 0, void 0, (function * () {
        let e,
        t;
        if (this._selRsl && - 1 != this._selRsl.selectedIndex) {
          let i = this._selRsl.options[this._selRsl.selectedIndex];
          e = i.getAttribute('data-width'),
          t = i.getAttribute('data-height')
        }
        yield this.setResolution(e, t),
        this._bOpen || this.stop()
      })),
      this._onCloseBtnClick = () =>{
        this.close(!0)
      },
      this._bOpen = !1,
      this.isCameraEnhancer = !0,
      this.isDisposed = !1,
      this.videoSrc = null,
      this.videoSettings = {
        video: {
          width: {
            ideal: 1280
          },
          height: {
            ideal: 720
          },
          facingMode: {
            ideal: 'environment'
          }
        }
      },
      this.iPlayRound = 0,
      this.promisePlay = null,
      this._ifSaveLastUsedCamera = !1,
      this.ifSkipCameraInspection = !1,
      this._allCameras = [
      ],
      this._currentCamera = null,
      this._videoTrack = null,
      this._lastDeviceId = void 0,
      this._vc_bPlayingVideoBeforeHide = !1,
      this._ev_documentHideEvent = () =>{
        'visible' === document.visibilityState ? this._vc_bPlayingVideoBeforeHide && ('Firefox' == H.browser ? this.play() : this._video.play(), this._vc_bPlayingVideoBeforeHide = !1) : this._video && !this._video.paused && (this._vc_bPlayingVideoBeforeHide = !0, this._video.pause())
      },
      this._divVideoContainer = null,
      this._video = null,
      this.videoFit = 'contain',
      this._cvsScanRegion = null,
      this._divScanArea = null,
      this._divScanLight = null,
      this._bgLoading = null,
      this._selCam = null,
      this._bgCamera = null,
      this._selRsl = null,
      this._optGotRsl = null,
      this._btnClose = null,
      this._selMinLtr = null,
      this._optGotMinLtr = null,
      this.regionMaskFillStyle = 'rgba(0,0,0,0.5)',
      this.regionMaskStrokeStyle = 'rgb(254,142,20)',
      this.regionMaskLineWidth = 2,
      this._bShowScanRegionMask = !0,
      this._bShowScanRegionLaser = void 0,
      this._defaultBShowScanRegionLaser = !1,
      this._scanRegion = null,
      this._arrScanRegionOverlays = [
      ],
      this._layerBaseCvs = null,
      this._cvsViewDecorator = null,
      this._decoratorType = [
      ],
      this._decoratorArea = null,
      this._viewDecoratorInfo = {
        rectangle: {
          lineWidth: 4,
          strokeStyle: 'rgb(254,142,20)',
          fillStyle: 'transparent',
          maskFillStyle: 'transparent'
        },
        focus: {
          lineWidth: 4,
          strokeStyle: 'rgb(254,142,20)',
          fillStyle: 'transparent',
          maskFillStyle: 'transparent'
        },
        crossline: {
          lineWidth: 2,
          strokeStyle: 'rgb(254,142,20)'
        },
        crosshair: {
          lineWidth: 4,
          strokeStyle: 'rgb(254,142,20)'
        }
      },
      this._croppingRegions = void 0,
      this._defaultCroppingRegions = [
        null
      ],
      this.bIncreaseRegionIndexAuto = !0,
      this._croppingRegionIndex = 0,
      this._loopInterval = void 0,
      this._defaultLoopInterval = 0,
      this._maxNumberOfFramesInBuffer = void 0,
      this._defaultMaxNumberOfFramesInBuffer = 1,
      this._frameQueue = [
      ],
      this._bFetchingLoopStarted = !1,
      this._refreshInterval = void 0,
      this._defaultRefreshInterval = - 1,
      this._updateLayersTimeout = 100,
      this._updateLayers = () =>{
        this._resizeTimeoutId && clearTimeout(this._resizeTimeoutId),
        this._resizeTimeoutId = setTimeout((() =>{
          if (!this.isDisposed) {
            this._updateScanRegionCanvas(),
            this._updateScanAreaDiv(),
            this._updateViewDecorator();
            for (let e of this._arrScanRegionOverlays) e && this._updateScanRegionOverlay(e);
            this._updateDrawingLayersSize()
          }
        }), this._updateLayersTimeout)
      },
      this.mapCameraEvents = new Map([['cameraOpen',
      [
      ]],
      [
        'cameraClose',
        [
        ]
      ],
      [
        'cameraChange',
        [
        ]
      ],
      [
        'resolutionChange',
        [
        ]
      ],
      [
        'played',
        [
        ]
      ],
      [
        'singleFrameAcquired',
        [
        ]
      ],
      [
        'frameAddedToBuffer',
        [
        ]
      ]]),
      this._controler = null
    }
    static getVersion() {
      return this._version
    }
    static detectEnvironment() {
      return j(this, void 0, void 0, (function * () {
        return yield(async() =>({
          wasm: X,
          worker: Y,
          getUserMedia: z,
          camera: await K(),
          browser: H.browser,
          version: H.version,
          OS: H.OS
        })) ()
      }))
    }
    static set engineResourcePath(e) {
      if (this._hasEngineResourceLoaded) throw new Error('`engineResourcePath` is not allowed to change after `createInstance` is called.');
      ne._engineResourcePath = (e=>{
        if (null == e && (e = './'), !N) {
          let t = document.createElement('a');
          t.href = e,
          e = t.href
        }
        return e.endsWith('/') || (e += '/'),
        e
      }) (e)
    }
    static get engineResourcePath() {
      return this._engineResourcePath
    }
    static isStorageAvailable(e) {
      let t;
      try {
        t = window[e];
        const i = '__storage_test__';
        return t.setItem(i, i),
        t.removeItem(i),
        !0
      } catch (e) {
        return e instanceof DOMException && (22 === e.code || 1014 === e.code || 'QuotaExceededError' === e.name || 'NS_ERROR_DOM_QUOTA_REACHED' === e.name) && t && 0 !== t.length
      }
    }
    static isDCEFrame(e) {
      return !(!e || 'object' != typeof e || Array.isArray(e)) && 'data' in e && 'region' in e && 'sx' in e && 'sy' in e && 'width' in e && 'height' in e && 'colorMode' in e && 'timeSpent' in e && 'timeStamp' in e && 'isCropped' in e && 'toCanvas' in e && '_sWidth' in e && '_sHeight' in e && '_bUseWebGL' in e
    }
    set maxCvsSideLength(e) {
      if (e <= 0) throw new Error('Invalid value.');
      this._maxCvsSideLength = e
    }
    get maxCvsSideLength() {
      if (void 0 !== this._maxCvsSideLength) return this._maxCvsSideLength;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('maxCvsSideLength');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultMaxCvsSideLength
    }
    static set defaultUIElementURL(e) {
      ne._defaultUIElementURL = e
    }
    static get defaultUIElementURL() {
      var e;
      return null === (e = ne._defaultUIElementURL) || void 0 === e ? void 0 : e.replace('@engineResourcePath/', ne.engineResourcePath)
    }
    getUIElement() {
      return this.UIElement
    }
    setUIElement(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._bOpen) throw new Error('It is not allowed to change the UIElement when the camera is open.');
        if ('string' == typeof e || e instanceof String) {
          if (!e.trim().startsWith('<')) {
            let t = yield fetch(e);
            if (!t.ok) throw Error('setUIElement(elementOrUrl): Network Error: ' + t.statusText);
            e = yield t.text()
          }
          if (!e.trim().startsWith('<')) throw Error('setUIElement(elementOrUrl): Can\'t get valid HTMLElement.');
          let t = document.createElement('div');
          t.innerHTML = e;
          for (let e = 0; e < t.childElementCount; ++e) {
            let i = t.children[e];
            i instanceof HTMLStyleElement && (this.styleEls.push(i), document.head.append(i))
          }(e = 1 == t.childElementCount ? t.children[0] : t).remove()
        }
        this.UIElement = e,
        this._uiOriginalState = {
          display: e && e.style.display,
          inDom: document.body.contains(e)
        }
      }))
    }
    appendAndShowUI() {
      this.UIElement && (this.UIElement.parentNode || (this.UIElement.style.position = 'fixed', this.UIElement.style.left = '0', this.UIElement.style.top = '0', document.body.append(this.UIElement)), 'none' == this.UIElement.style.display && (this.UIElement.style.display = ''))
    }
    hideUI() {
      this.UIElement && (this.UIElement.style.display = 'none')
    }
    get singleFrameMode() {
      return this._singleFrameMode
    }
    set singleFrameMode(e) {
      if (this._bOpen) throw new Error('It is not allowed to change `singleFrameMode` when the camera is open.');
      this._singleFrameMode = e
    }
    set frameColorMode(e) {
      this._frameColorMode = e
    }
    get frameColorMode() {
      if (void 0 !== this._frameColorMode) return this._frameColorMode;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('frameColorMode');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultFrameColorMode
    }
    set bOpen(e) {
      if (this._bOpen = e, e) {
        this._updateScanRegionCanvas(),
        this._updateScanAreaDiv(),
        this._updateViewDecorator();
        for (let e of this._arrScanRegionOverlays) e && this._updateScanRegionOverlay(e);
        this._updateDrawingLayersSize(),
        this.ifShowScanRegionMask ? this.showScanRegionMask() : this.hideScanRegionMask(),
        this.ifShowScanRegionLaser ? this.showScanRegionLaser() : this.hideScanRegionLaser(),
        this.showViewDecorator(),
        this.showScanRegionOverlays(),
        this._drawingLayersManager.setVisible(!0)
      }
    }
    set ifSaveLastUsedCamera(e) {
      e ? ne.isStorageAvailable('localStorage') ? this._ifSaveLastUsedCamera = !0 : (this._ifSaveLastUsedCamera = !1, console.warn('Local storage is unavailable')) : this._ifSaveLastUsedCamera = !1
    }
    get ifSaveLastUsedCamera() {
      return this._ifSaveLastUsedCamera
    }
    get video() {
      return this._video
    }
    setVideoFit(e) {
      if (e = e.toLowerCase(), !['contain',
      'cover'].includes(e)) throw new Error(`Unsupported value '${ e }'.`);
      if (this.videoFit = e, this._video && (this._video.style.objectFit = e, !this.singleFrameMode)) {
        this._updateScanRegionCanvas(),
        this._updateScanAreaDiv(),
        this._updateViewDecorator();
        for (let e of this._arrScanRegionOverlays) e && this._updateScanRegionOverlay(e);
        this._drawingLayersManager.setObjectFit(e)
      }
    }
    getVideoFit() {
      return this.videoFit
    }
    set ifShowScanRegionMask(e) {
      this._bShowScanRegionMask = e,
      e ? this.showScanRegionMask() : this.hideScanRegionMask()
    }
    get ifShowScanRegionMask() {
      return this._bShowScanRegionMask
    }
    showScanRegionMask() {
      this._cvsScanRegion && ('none' == this._cvsScanRegion.style.display && (this._cvsScanRegion.style.display = ''), this._recordedStates.maskShow = !0)
    }
    hideScanRegionMask() {
      this._cvsScanRegion && (this._cvsScanRegion.style.display = 'none', this._recordedStates.maskShow = !1)
    }
    set ifShowScanRegionLaser(e) {
      this._bShowScanRegionLaser = e,
      e ? this.showScanRegionLaser() : this.hideScanRegionLaser()
    }
    get ifShowScanRegionLaser() {
      if (void 0 !== this._bShowScanRegionLaser) return this._bShowScanRegionLaser;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('ifShowScanRegionLaser');
        if (e && e.length) {
          let t = 0;
          for (let i of e) i || t++;
          return t !== this._controler.getRegisteredUsers().length
        }
      }
      return this._defaultBShowScanRegionLaser
    }
    showScanRegionLaser() {
      this._divScanLight && ('none' == this._divScanLight.style.display && (this._divScanLight.style.display = 'block'), this._recordedStates.laserShow = !0)
    }
    hideScanRegionLaser() {
      this._divScanLight && (this._divScanLight.style.display = 'none', this._recordedStates.laserShow = !1)
    }
    _checkValidRegion(e) {
      return !(null !== e && (!e || !(e.hasOwnProperty('regionLeft') && e.hasOwnProperty('regionTop') && e.hasOwnProperty('regionRight') && e.hasOwnProperty('regionBottom') && e.hasOwnProperty('regionMeasuredByPercentage')) || e.regionLeft < 0 || e.regionTop < 0 || e.regionRight < 0 || e.regionBottom < 0 || e.regionMeasuredByPercentage && (e.regionLeft > 100 || e.regionTop > 100 || e.regionRight > 100 || e.regionBottom > 100)))
    }
    set scanRegion(e) {
      if (!this._checkValidRegion(e)) throw new Error('Invalid region.');
      this._scanRegion = JSON.parse(JSON.stringify(e)),
      this._updateScanRegionCanvas(),
      this._updateScanAreaDiv();
      for (let e of this._arrScanRegionOverlays) e && this._updateScanRegionOverlay(e)
    }
    setScanRegion(e) {
      this.scanRegion = e
    }
    getScanRegion() {
      return JSON.parse(JSON.stringify(this._scanRegion))
    }
    _calculateCvsSize() {
      if (!this._bOpen) return null;
      let e,
      t,
      i;
      if (this.singleFrameMode) e = this._imgWidth,
      t = this._imgHeight,
      i = 'contain';
       else {
        if (!this._video) return null;
        e = this._video.videoWidth,
        t = this._video.videoHeight,
        i = this.getVideoFit()
      }
      return {
        width: e,
        height: t,
        objectFit: i
      }
    }
    addScanRegionOverlayCanvas() {
      this._assertOpen();
      const e = document.createElement('canvas');
      if (this._updateScanRegionOverlay(e), !this._scanRegionOverlayContainer) {
        const e = document.createElement('div');
        if (this._scanRegionOverlayContainer = e, e.style.position = 'absolute', e.style.left = '0', e.style.top = '0', e.style.width = '100%', e.style.height = '100%', e.style.overflow = 'hidden', e.style.pointerEvents = 'none', this._layerBaseCvs) this._layerBaseCvs.parentElement.after(e);
         else if (this._cvsScanRegion) this._cvsScanRegion.before(e);
         else if (this._cvsSingleFrameMode) this._cvsSingleFrameMode.after(e);
         else {
          if (!this._video) throw new Error('\'video\' is null.');
          this._video.after(e)
        }
        this._recordedStates.overlayShow = !0
      }
      return this._scanRegionOverlayContainer.append(e),
      this._arrScanRegionOverlays.push(e),
      e
    }
    removeScanRegionOverlayCanvas(e) {
      const t = this._arrScanRegionOverlays.indexOf(e);
      - 1 !== t && (e.remove(), this._arrScanRegionOverlays.splice(t, 1))
    }
    _updateScanRegionOverlay(e) {
      if (!e) return;
      const t = this._calculateCvsSize();
      if (!t) return;
      const {
        width: i,
        height: r,
        objectFit: n
      }
      = t;
      if (i <= 0 || r <= 0) return e.width = 0,
      void (e.height = 0);
      const o = this._getRegionInPixels(i, r, this._scanRegion),
      s = this.getFrameSize(i, r, this._scanRegion, this.maxCvsSideLength),
      a = s.dWidth,
      l = s.dHeight;
      e.width == a && e.height == l || (e.width = a, e.height = l);
      const h = window.getComputedStyle(this._video),
      c = parseFloat(h.width),
      u = parseFloat(h.height),
      d = c / u,
      f = i / r;
      let g,
      _,
      p,
      m,
      v = 1;
      'contain' === n ? (d < f ? (v = c / i, g = 0, _ = (u - r * v) / 2) : (v = u / r, g = (c - i * v) / 2, _ = 0), g += o.regionLeft * v, _ += o.regionTop * v, p = (o.regionRight - o.regionLeft) * v, m = (o.regionBottom - o.regionTop) * v) : 'cover' === n ? (f > d ? (v = u / r, g = o.regionLeft * v - (i * v - c) / 2, _ = o.regionTop * v) : (v = c / i, g = o.regionLeft * v, _ = o.regionTop * v - (r * v - u) / 2), p = (o.regionRight - o.regionLeft) * v, m = (o.regionBottom - o.regionTop) * v) : (g = 0, _ = 0, p = 0, m = 0),
      e.style.position = 'absolute',
      e.style.left = g + 'px',
      e.style.top = _ + 'px',
      e.style.width = p + 'px',
      e.style.height = m + 'px'
    }
    showScanRegionOverlays() {
      this._scanRegionOverlayContainer && ('none' == this._scanRegionOverlayContainer.style.display && (this._scanRegionOverlayContainer.style.display = ''), this._recordedStates.overlayShow = !0)
    }
    hideScanRegionOverlays() {
      this._scanRegionOverlayContainer && (this._scanRegionOverlayContainer.style.display = 'none', this._recordedStates.overlayShow = !1)
    }
    setViewDecorator(e, t) {
      if (!e) return void (this._cvsViewDecorator && (this._cvsViewDecorator.remove(), this._cvsViewDecorator = null));
      this._assertOpen();
      let i = [
      ];
      if ('string' == typeof e ? i.push(e) : Array.isArray(e) && (i = JSON.parse(JSON.stringify(e))), !this._cvsViewDecorator) {
        if (this._cvsViewDecorator = document.createElement('canvas'), this._cvsViewDecorator.style.pointerEvents = 'none', this._cvsScanRegion) this._cvsScanRegion.after(this._cvsViewDecorator);
         else if (this._scanRegionOverlayContainer) this._scanRegionOverlayContainer.after(this._cvsViewDecorator);
         else if (this._layerBaseCvs) this._layerBaseCvs.parentElement.after(this._cvsViewDecorator);
         else if (this._cvsSingleFrameMode) this._cvsSingleFrameMode.after(this._cvsViewDecorator);
         else {
          if (!this._video) throw new Error('\'video\' is null.');
          this._video.after(this._cvsViewDecorator)
        }
        this._recordedStates.decoratorShow = !0
      }
      this._decoratorArea = JSON.parse(JSON.stringify(t)),
      this._decoratorType.length = 0;
      const r = [
        'rectangle',
        'focus'
      ],
      n = [
        'crossline',
        'crosshair'
      ];
      let o = !1,
      s = !1;
      for (let e of i) e = e.toLowerCase(),
      r.includes(e) && !o && (o = !0, this._decoratorType.push(e)),
      n.includes(e) && !s && (s = !0, !this._decoratorType.includes(e) && this._decoratorType.push(e));
      this._updateViewDecorator()
    }
    getViewDecorator() {
      return {
        type: JSON.parse(JSON.stringify(this._decoratorType)),
        area: JSON.parse(JSON.stringify(this._decoratorArea)),
        canvas: this._cvsViewDecorator
      }
    }
    showViewDecorator() {
      this._cvsViewDecorator && ('none' == this._cvsViewDecorator.style.display && (this._cvsViewDecorator.style.display = ''), this._recordedStates.decoratorShow = !0)
    }
    hideViewDecorator() {
      this._cvsViewDecorator && (this._cvsViewDecorator.style.display = 'none', this._recordedStates.decoratorShow = !1)
    }
    setViewDecoratorLineWidth(e, t) {
      if ('string' != typeof e) throw new Error('The \'type\' should be a string.');
      if (e = e.toLowerCase(), !this._viewDecoratorInfo.hasOwnProperty(e)) throw new Error(`The type of '${ e }' doesn't exist.`);
      if (!this._viewDecoratorInfo[e].hasOwnProperty('lineWidth')) throw new Error(`It is not allowed to change the property 'lineWidth' when the decorator type is '${ e }'.`);
      this._viewDecoratorInfo[e].lineWidth = t,
      this._updateViewDecorator()
    }
    setViewDecoratorStrokeStyle(e, t) {
      if ('string' != typeof e) throw new Error('The \'type\' should be a string.');
      if (e = e.toLowerCase(), !this._viewDecoratorInfo.hasOwnProperty(e)) throw new Error(`The type of '${ e }' doesn't exist.`);
      if (!this._viewDecoratorInfo[e].hasOwnProperty('strokeStyle')) throw new Error(`It is not allowed to change the property 'strokeStyle' when the decorator type is '${ e }'.`);
      this._viewDecoratorInfo[e].strokeStyle = t,
      this._updateViewDecorator()
    }
    setViewDecoratorFillStyle(e, t) {
      if ('string' != typeof e) throw new Error('The \'type\' should be a string.');
      if (e = e.toLowerCase(), !this._viewDecoratorInfo.hasOwnProperty(e)) throw new Error(`The type of '${ e }' doesn't exist.`);
      if (!this._viewDecoratorInfo[e].hasOwnProperty('fillStyle')) throw new Error(`It is not allowed to change the property 'fillStyle' when the decorator type is '${ e }'.`);
      this._viewDecoratorInfo[e].fillStyle = t,
      this._updateViewDecorator()
    }
    setViewDecoratorMaskFillStyle(e, t) {
      if ('string' != typeof e) throw new Error('The \'type\' should be a string.');
      if (e = e.toLowerCase(), !this._viewDecoratorInfo.hasOwnProperty(e)) throw new Error(`The type of '${ e }' doesn't exist.`);
      if (!this._viewDecoratorInfo[e].hasOwnProperty('maskFillStyle')) throw new Error(`It is not allowed to change the property 'maskFillStyle' when the decorator type is '${ e }'.`);
      this._viewDecoratorInfo[e].maskFillStyle = t,
      this._updateViewDecorator()
    }
    _updateViewDecorator() {
      if (!this._bOpen) return;
      if (!this._cvsViewDecorator || !this._decoratorArea) return;
      let e;
      if (this.singleFrameMode) e = 'contain';
       else {
        if (!this._video) return;
        e = this.getVideoFit()
      }
      const t = this._cvsViewDecorator;
      t.style.position = 'absolute',
      t.style.width = '100%',
      t.style.height = '100%',
      t.style.left = '0',
      t.style.top = '0',
      t.style.objectFit = e;
      const i = this.getVisibleRegion(!0),
      r = i.regionRight - i.regionLeft,
      n = i.regionBottom - i.regionTop;
      if (t.width == r && t.height == n || (t.width = r, t.height = n), r <= 0 || n <= 0) return;
      const o = t.getContext('2d');
      o.clearRect(0, 0, t.width, t.height);
      const s = this._decoratorArea.x / 100 * r,
      a = this._decoratorArea.y / 100 * n,
      l = this._decoratorArea.width / 100 * r,
      h = this._decoratorArea.height / 100 * n;
      for (let e of this._decoratorType) {
        if ('rectangle' === e) {
          o.fillStyle = this._viewDecoratorInfo.rectangle.maskFillStyle,
          o.fillRect(0, 0, t.width, t.height),
          o.clearRect(Math.round(s), Math.round(a), Math.round(l), Math.round(h)),
          o.fillStyle = this._viewDecoratorInfo.rectangle.fillStyle,
          o.fillRect(Math.round(s), Math.round(a), Math.round(l), Math.round(h)),
          o.lineWidth = this._viewDecoratorInfo.rectangle.lineWidth,
          o.strokeStyle = this._viewDecoratorInfo.rectangle.strokeStyle;
          const e = o.lineWidth / 2;
          o.strokeRect(Math.round(s - e), Math.round(a - e), Math.round(l + o.lineWidth), Math.round(h + o.lineWidth))
        }
        if ('focus' === e) {
          o.fillStyle = this._viewDecoratorInfo.focus.maskFillStyle,
          o.fillRect(0, 0, t.width, t.height),
          o.clearRect(Math.round(s), Math.round(a), Math.round(l), Math.round(h)),
          o.fillStyle = this._viewDecoratorInfo.focus.fillStyle,
          o.fillRect(Math.round(s), Math.round(a), Math.round(l), Math.round(h)),
          o.lineWidth = this._viewDecoratorInfo.focus.lineWidth,
          o.strokeStyle = this._viewDecoratorInfo.focus.strokeStyle;
          const e = o.lineWidth / 2,
          i = [
            0,
            0.25,
            0.75,
            1
          ],
          r = [
            0,
            0.25,
            0.75,
            1
          ];
          o.beginPath();
          for (let e = 0; e < i.length; e++) if (0 == e || 3 == e) for (let t = 0; t < r.length; t += 2) o.moveTo(Math.round(s + i[e] * l), Math.round(a + r[t] * h)),
          o.lineTo(Math.round(s + i[e] * l), Math.round(a + r[t + 1] * h));
          for (let t = 0; t < r.length; t++) if (0 == t || 3 == t) for (let n = 0; n < i.length; n += 2) o.moveTo(Math.round(s + i[n] * l - e), Math.round(a + r[t] * h)),
          o.lineTo(Math.round(s + i[n + 1] * l + e), Math.round(a + r[t] * h));
          o.stroke()
        }
        if ('crossline' === e && (o.beginPath(), o.lineWidth = this._viewDecoratorInfo.crossline.lineWidth, o.strokeStyle = this._viewDecoratorInfo.crossline.strokeStyle, o.moveTo(Math.round(s), Math.round(a + h / 2)), o.lineTo(Math.round(s + l), Math.round(a + h / 2)), o.moveTo(Math.round(s + l / 2), Math.round(a)), o.lineTo(Math.round(s + l / 2), Math.round(a + h)), o.stroke()), 'crosshair' === e) {
          o.beginPath();
          const e = 0.05 * Math.min(l, h);
          o.lineWidth = this._viewDecoratorInfo.crosshair.lineWidth,
          o.strokeStyle = this._viewDecoratorInfo.crosshair.strokeStyle,
          o.moveTo(Math.round(s + (l - e) / 2), Math.round(a + h / 2)),
          o.lineTo(Math.round(s + (l + e) / 2), Math.round(a + h / 2)),
          o.moveTo(Math.round(s + l / 2), Math.round(a + (h - e) / 2)),
          o.lineTo(Math.round(s + l / 2), Math.round(a + (h + e) / 2)),
          o.stroke()
        }
      }
    }
    getVisibleRegion(e) {
      this._assertOpen();
      const t = this._calculateCvsSize();
      if (!t) return null;
      const {
        width: i,
        height: r,
        objectFit: n
      }
      = t;
      let o = (() =>{
        const e = parseFloat(window.getComputedStyle(this._video).width),
        t = parseFloat(window.getComputedStyle(this._video).height);
        let o,
        s = {
          regionBottom: r,
          regionRight: i,
          regionLeft: 0,
          regionTop: 0,
          regionMeasuredByPercentage: !1
        };
        return 'cover' === n ? e / t < i / r ? (o = t / r, s.regionLeft = Math.floor((i - e / o) / 2), s.regionRight = Math.ceil(i - s.regionLeft), s.regionTop = 0, s.regionBottom = r) : (o = e / i, s.regionTop = Math.floor((r - t / o) / 2), s.regionBottom = Math.ceil(r - s.regionTop), s.regionLeft = 0, s.regionRight = i) : 'none' === n && (e < i && t < r ? (s.regionLeft = Math.floor((i - e) / 2), s.regionRight = Math.ceil(i - s.regionLeft), s.regionTop = Math.floor((r - t) / 2), s.regionBottom = Math.ceil(r - s.regionTop)) : e < i ? (s.regionLeft = Math.floor((i - e) / 2), s.regionRight = Math.ceil(i - s.regionLeft), s.regionTop = 0, s.regionBottom = r) : t < r && (s.regionTop = Math.floor((r - t) / 2), s.regionBottom = Math.ceil(r - s.regionTop), s.regionLeft = 0, s.regionRight = i)),
        s
      }) ();
      return e ? o.regionMeasuredByPercentage = !1 : (o.regionBottom = Math.ceil(o.regionBottom / r * 100), o.regionRight = Math.ceil(o.regionRight / i * 100), o.regionLeft = Math.floor(o.regionLeft / i * 100), o.regionTop = Math.floor(o.regionTop / r * 100), o.regionMeasuredByPercentage = !0),
      o
    }
    setScanRegionMaskStyle(e) {
      e && (e.fillStyle && (this.regionMaskFillStyle = e.fillStyle), e.strokeStyle && (this.regionMaskStrokeStyle = e.strokeStyle), e.lineWidth && (this.regionMaskLineWidth = e.lineWidth), this._updateScanRegionCanvas())
    }
    _getRegionInPixels(e, t, i) {
      if (!(e <= 0 || t <= 0)) return i ? i.regionMeasuredByPercentage ? {
        regionLeft: Math.round(i.regionLeft / 100 * e),
        regionTop: Math.round(i.regionTop / 100 * t),
        regionRight: Math.round(i.regionRight / 100 * e),
        regionBottom: Math.round(i.regionBottom / 100 * t),
        regionMeasuredByPercentage: !1
      }
       : JSON.parse(JSON.stringify(i)) : {
        regionLeft: 0,
        regionTop: 0,
        regionRight: e,
        regionBottom: t,
        regionMeasuredByPercentage: !1
      }
    }
    _updateScanRegionCanvas() {
      if (!this._bOpen) return;
      const e = this._calculateCvsSize();
      if (!e) return;
      const {
        width: t,
        height: i,
        objectFit: r
      }
      = e;
      if (t <= 0 || i <= 0) return void (this._cvsScanRegion && (this._cvsScanRegion.width = 0, this._cvsScanRegion.height = 0));
      const n = this._getRegionInPixels(t, i, this._scanRegion);
      this._cvsScanRegion || (this._cvsScanRegion = document.createElement('canvas'), this._cvsScanRegion.style.pointerEvents = 'none', this._scanRegionOverlayContainer ? this._scanRegionOverlayContainer.after(this._cvsScanRegion) : this._layerBaseCvs ? this._layerBaseCvs.parentElement.after(this._cvsScanRegion) : this._cvsSingleFrameMode ? this._cvsSingleFrameMode.after(this._cvsScanRegion) : this._video.after(this._cvsScanRegion), this._recordedStates.maskShow = !0);
      const o = this._cvsScanRegion;
      o.style.position = 'absolute',
      o.style.width = '100%',
      o.style.height = '100%',
      o.style.left = '0',
      o.style.top = '0',
      o.style.objectFit = r,
      o.width == t && o.height == i || (o.width = t, o.height = i);
      const s = o.getContext('2d');
      if (s.clearRect(0, 0, o.width, o.height), 0 != n.regionLeft || n.regionRight != t || 0 != n.regionTop || n.regionBottom != i) {
        const e = n.regionLeft,
        t = n.regionTop,
        i = n.regionRight - n.regionLeft,
        r = n.regionBottom - n.regionTop;
        s.fillStyle = this.regionMaskFillStyle,
        s.fillRect(0, 0, o.width, o.height),
        s.clearRect(Math.round(e), Math.round(t), Math.round(i), Math.round(r)),
        s.strokeStyle = this.regionMaskStrokeStyle,
        s.lineWidth = this.regionMaskLineWidth;
        const a = s.lineWidth / 2;
        s.strokeRect(Math.round(e - a), Math.round(t - a), Math.round(i + s.lineWidth), Math.round(r + s.lineWidth))
      }
    }
    _updateScanAreaDiv() {
      if (!this._bOpen) return;
      const e = this._calculateCvsSize();
      if (!e) return;
      const {
        width: t,
        height: i,
        objectFit: r
      }
      = e;
      if (!this._divScanArea) return;
      if (t <= 0 || i <= 0) return this._divScanArea.style.width = '0',
      void (this._divScanArea.style.height = '0');
      const n = this._getRegionInPixels(t, i, this._scanRegion),
      o = window.getComputedStyle(this._video),
      s = parseFloat(o.width),
      a = parseFloat(o.height),
      l = s / a,
      h = t / i;
      let c,
      u,
      d,
      f,
      g = 1;
      if ('contain' === r) l < h ? (g = s / t, c = 0, u = (a - i * g) / 2) : (g = a / i, c = (s - t * g) / 2, u = 0),
      c += n.regionLeft * g,
      u += n.regionTop * g,
      d = (n.regionRight - n.regionLeft) * g,
      f = (n.regionBottom - n.regionTop) * g;
       else if ('cover' === r) if (l < h) {
        g = a / i,
        c = n.regionLeft * g - (t * g - s) / 2,
        c = Math.max(c, 0),
        c = Math.min(c, parseFloat(o.width)),
        u = n.regionTop * g;
        let e = n.regionRight * g - (t * g - s) / 2;
        e = Math.max(e, 0),
        e = Math.min(e, parseFloat(o.width)),
        d = e - c,
        f = (n.regionBottom - n.regionTop) * g
      } else {
        g = s / t,
        c = n.regionLeft * g,
        u = n.regionTop * g - (i * g - a) / 2,
        u = Math.max(u, 0),
        u = Math.min(u, parseFloat(o.height));
        let e = n.regionBottom * g - (i * g - a) / 2;
        e = Math.max(e, 0),
        e = Math.min(e, parseFloat(o.height)),
        d = (n.regionRight - n.regionLeft) * g,
        f = e - u
      } else c = 0,
      u = 0,
      d = 0,
      f = 0;
      this._divScanArea.style.left = c + 'px',
      this._divScanArea.style.top = u + 'px',
      this._divScanArea.style.width = d + 'px',
      this._divScanArea.style.height = f + 'px'
    }
    set croppingRegions(e) {
      this._croppingRegions = e,
      this._bFetchingLoopStarted && (this.bIncreaseRegionIndexAuto && (this._croppingRegionIndex = 0), this._fetchingLoop(!1))
    }
    get croppingRegions() {
      if (void 0 !== this._croppingRegions) return this._croppingRegions;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('croppingRegions');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultCroppingRegions
    }
    set croppingRegionIndex(e) {
      e < 0 ? (this.bIncreaseRegionIndexAuto = !0, this._croppingRegionIndex = 0) : (this.bIncreaseRegionIndexAuto = !1, this._croppingRegionIndex = e)
    }
    get croppingRegionIndex() {
      return this._croppingRegionIndex
    }
    set loopInterval(e) {
      if (e < 0) throw new Error('\'Invalid value.');
      this._loopInterval = e,
      this._bFetchingLoopStarted && this._fetchingLoop(!1)
    }
    get loopInterval() {
      if (void 0 !== this._loopInterval) return this._loopInterval;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('loopInterval');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultLoopInterval
    }
    set maxNumberOfFramesInBuffer(e) {
      if (e <= 0) throw new Error('Invalid value.');
      for (this._maxNumberOfFramesInBuffer = e; this._frameQueue && this._frameQueue.length > this.maxNumberOfFramesInBuffer; ) this._frameQueue.shift()
    }
    get maxNumberOfFramesInBuffer() {
      if (void 0 !== this._maxNumberOfFramesInBuffer) return this._maxNumberOfFramesInBuffer;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('maxNumberOfFramesInBuffer');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultMaxNumberOfFramesInBuffer
    }
    get numberOfFramesInBuffer() {
      return this._frameQueue.length
    }
    set refreshInterval(e) {
      this._refreshInterval = e
    }
    get refreshInterval() {
      if (void 0 !== this._refreshInterval) return this._refreshInterval;
      if (this._controler) {
        const e = this._controler.getPropertyDisiredValue('refreshInterval');
        if (e && 1 === e.length) return e[0]
      }
      return this._defaultRefreshInterval
    }
    static createInstance(e) {
      return j(this, void 0, void 0, (function * () {
        let t = new ne;
        ('string' == typeof e || e instanceof String) && (e = JSON.parse(e));
        for (let i in e) t[i] = e[i];
        return this._hasEngineResourceLoaded = !0,
        ne.onWarning && (location && 'file:' === location.protocol ? setTimeout((() =>{
          ne.onWarning && ne.onWarning({
            id: 1,
            message: 'Not using HTTP protocol, the SDK may not work correctly.'
          })
        }), 0) : location && 'https:' !== location.protocol && setTimeout((() =>{
          ne.onWarning && ne.onWarning({
            id: 2,
            message: 'Not connected via SSL (HTTPS), the SDK may not work correctly.'
          })
        }), 0)),
        t._drawingLayersManager = new ie,
        t
      }))
    }
    play(e, t, i, r) {
      return j(this, void 0, void 0, (function * () {
        if (this._video && this.videoSrc) {
          yield new Promise(((e, t) =>{
            this._video.onloadedmetadata = () =>j(this, void 0, void 0, (function * () {
              this._video && (this._video.onloadedmetadata = null, yield this._video.play(), e())
            })),
            'string' == typeof this.videoSrc || this.videoSrc instanceof String ? this._video.src = this.videoSrc : this._video.srcObject = this.videoSrc,
            setTimeout((() =>t(new Error('Failed to play video. Timeout.'))), 4000)
          }));
          const e = {
            width: this._video.videoWidth,
            height: this._video.videoHeight,
            deviceId: this._currentCamera && this._currentCamera.deviceId
          };
          this.playCallbackInfo = JSON.parse(JSON.stringify(e));
          const t = this.mapCameraEvents.get('played');
          for (let i of t) {
            if (!i) continue;
            const t = JSON.parse(JSON.stringify(e));
            setTimeout((() =>i.apply(this, [
              t
            ])), 0)
          }
          return this._recordedStates.videoPlaying = !0,
          e
        }
        if (this.singleFrameMode) return r && r.notTriggerSingleFrameClick || this._clickIptSingleFrameMode(),
        this.playCallbackInfo = {
          width: 0,
          height: 0,
          deviceId: null
        },
        JSON.parse(JSON.stringify(this.playCallbackInfo));
        if (!this._video) return this.playCallbackInfo = null,
        null;
        const n = ++this.iPlayRound;
        let o = null,
        s = 0,
        a = 0;
        if (this._currentCamera && (o = this._currentCamera.deviceId), this._video && (s = this._video.videoWidth, a = this._video.videoHeight), this.promisePlay && (yield this.promisePlay, n < this.iPlayRound)) return this.playCallbackInfo = {
          width: this._video.videoWidth,
          height: this._video.videoHeight,
          deviceId: this._currentCamera && this._currentCamera.deviceId
        },
        JSON.parse(JSON.stringify(this.playCallbackInfo));
        this.promisePlay = (() =>j(this, void 0, void 0, (function * () {
          var r;
          try {
            this._video && this._video.srcObject && this.stop(),
            ne._onLog && ne._onLog('DCE: ======before video========');
            const n = () =>{
              if (!this._video) throw d && d.getTracks().forEach((e=>{
                e.stop()
              })),
              this._videoTrack = null,
              this._currentCamera = null,
              new Error('\'video\' is null.')
            },
            l = this.getVideoSettings();
            let h;
            'boolean' == typeof l.video && (l.video = {
            });
            const c = [
              'rear',
              'back',
              'r�ck',
              'arri�re',
              'trasera',
              'tr�s',
              'traseira',
              'posteriore',
              'b',
              '�b',
              '�b',
              'n',
              '�n',
              '�n',
              '704=59',
              'D.DAJ)',
              '�',
              'arka',
              'achterzijde',
              '+%1',
              'baksidan',
              'bagside',
              'sau',
              'bak',
              'tylny',
              'takakamera',
              'belakang',
              '������',
              '����',
              'spate',
              'h�ts�',
              'zadn�',
              'darrere',
              'zadn�',
              '704=O',
              'stra~nja',
              'belakang',
              ',H'
            ],
            u = () =>{
              for (let e of this._allCameras) {
                let t = e.label.toLowerCase();
                if (t && c.some((e=> - 1 != t.indexOf(e))) && /\b0(\b)?/.test(t)) {
                  delete l.video.facingMode,
                  l.video.deviceId = {
                    ideal: e.deviceId
                  };
                  break
                }
              }
              l.video.deviceId || - 1 == ['Android',
              'HarmonyOS'].indexOf(H.OS) || (delete l.video.facingMode, l.video.deviceId = {
                ideal: this._allCameras[this._allCameras.length - 1].deviceId
              })
            };
            if (e) delete l.video.facingMode,
            l.video.deviceId = {
              exact: e
            };
             else if (l.video.deviceId);
             else if (this._lastDeviceId) delete l.video.facingMode,
            l.video.deviceId = {
              exact: this._lastDeviceId
            };
             else if (this.ifSaveLastUsedCamera && ne.isStorageAvailable && window.localStorage.getItem('dce_last_camera_id')) {
              delete l.video.facingMode,
              l.video.deviceId = {
                exact: window.localStorage.getItem('dce_last_camera_id')
              };
              const w = JSON.parse(window.localStorage.getItem('dce_last_apply_width')),
              T = JSON.parse(window.localStorage.getItem('dce_last_apply_height'));
              w && T && (l.video.width = w, l.video.height = T)
            } else if (this.ifSkipCameraInspection);
             else if (l.video.facingMode) {
              if ('iPhone' !== H.OS && 'Mac' !== H.OS && (yield this.getAllCameras(!0)), !this._video) return null;
              let x = l.video.facingMode;
              x instanceof Array && x.length && (x = x[0]),
              x = x.exact || x.ideal || x,
              'environment' === x && (h = !!l.video.facingMode, u())
            }
            let d;
            t && (l.video.width = {
              ideal: t
            }),
            i && (l.video.height = {
              ideal: i
            }),
            ne._onLog && ne._onLog('DCE: ======try getUserMedia========');
            let f,
            g = [
              0,
              500
            ],
            _ = null,
            p = null;
            function m(e) {
              return j(this, void 0, void 0, (function * () {
                for (let t of g) {
                  n(),
                  t && (yield new Promise((e=>setTimeout(e, t)))),
                  n();
                  {
                    const t = e.video.deviceId;
                    p = t ? t.exact || t.ideal || t : null
                  }
                  try {
                    ne._onLog && ne._onLog('DCE: ask ' + JSON.stringify(e)),
                    d = yield navigator.mediaDevices.getUserMedia(e),
                    n();
                    break
                  } catch (e) {
                    _ = e,
                    ne._onLog && ne._onLog('DCE: ' + e.message || e)
                  }
                }
              }))
            }
            if (yield m(l), d || (ne._onLog && ne._onLog('DCE: ======try getUserMedia again========'), f = JSON.parse(JSON.stringify(l)), 'object' == typeof f.video && ('iPhone' == H.OS ? (t >= 1280 || i >= 1280 ? f.video.width = 1280 : t >= 640 || i >= 640 ? f.video.width = 640 : (t < 640 || i < 640) && (f.video.width = 320), delete f.video.height) : h && !l.video.deviceId ? (delete f.video.facingMode, this._allCameras.length && (f.video.deviceId = {
              ideal: this._allCameras[this._allCameras.length - 1].deviceId
            })) : f.video = !0), ne._onLog && ne._onLog('DCE: ' + f), yield m(f)), d || (g = [
              1000,
              2000
            ], yield m(l)), d || (yield m(f)), !d) throw _;
            const v = () =>{
              const e = d.getVideoTracks();
              let t,
              i;
              if (e.length && (t = this._videoTrack = e[0]), this._video && t) {
                const e = t.getSettings();
                if (e) for (let r of this._allCameras) if (e.deviceId === r.deviceId) {
                  r._checked = !0,
                  r.label = t.label,
                  i = r;
                  break
                }
                if (!i && p) for (let e of this._allCameras) if (p == e.deviceId) {
                  t.label && (e._checked = !0, e.label = t.label),
                  i = e;
                  break
                }
              }
              this._currentCamera = i
            };
            if (yield this.getAllCameras(!0), n(), h) {
              v(),
              u();
              let E = l.video.deviceId;
              E && (E = E.exact || E.ideal || E);
              let A = null === (r = this._currentCamera) || void 0 === r ? void 0 : r.deviceId;
              !E || A && E == A || (d.getTracks().forEach((e=>{
                e.stop()
              })), g = [
                0,
                500,
                1000,
                2000
              ], yield m(l))
            }
            n();
            const y = () =>j(this, void 0, void 0, (function * () {
              ne._onLog && ne._onLog('======play video========'),
              yield new Promise(((e, t) =>{
                n(),
                this._video.onloadedmetadata = () =>j(this, void 0, void 0, (function * () {
                  n(),
                  this._video.onloadedmetadata = null,
                  yield this._video.play(),
                  e()
                })),
                this._video.srcObject = d,
                setTimeout((() =>t(new Error('Failed to play video. Timeout.'))), 4000)
              }))
            }));
            yield y(),
            n(),
            ne._onLog && ne._onLog('DCE: ======played video========'),
            this._bgLoading && (this._bgLoading.style.animationPlayState = 'paused');
            const S = this._video.videoWidth + 'x' + this._video.videoHeight;
            this._optGotRsl && (this._optGotRsl.setAttribute('data-width', this._video.videoWidth), this._optGotRsl.setAttribute('data-height', this._video.videoHeight), this._optGotRsl.innerText = S, this._selRsl && this._optGotRsl.parentNode == this._selRsl && (this._selRsl.value = 'got')),
            ne._onLog && ne._onLog('DCE: got ' + S),
            v(),
            n(),
            this._renderSelCameraInfo();
            const b = {
              width: this._video.videoWidth,
              height: this._video.videoHeight,
              deviceId: this._currentCamera && this._currentCamera.deviceId
            };
            b.deviceId && (this._lastDeviceId = b.deviceId, this.ifSaveLastUsedCamera && ne.isStorageAvailable && (window.localStorage.setItem('dce_last_camera_id', this._lastDeviceId), l.video.width && l.video.height && (window.localStorage.setItem('dce_last_apply_width', JSON.stringify(l.video.width)), window.localStorage.setItem('dce_last_apply_height', JSON.stringify(l.video.height)))));
            const C = this.mapCameraEvents.get('played');
            for (let I of C) {
              if (!I) continue;
              const O = JSON.parse(JSON.stringify(b));
              setTimeout((() =>I.apply(this, [
                O
              ])), 0)
            }
            if (o && o != b.deviceId) {
              const R = this.mapCameraEvents.get('cameraChange');
              for (let D of R) {
                if (!D) continue;
                const M = JSON.parse(JSON.stringify(b));
                setTimeout((() =>D.apply(this, [
                  M
                ])), 0)
              }
            }
            if (s && a && (s != b.width || a != b.height)) {
              this._updateScanRegionCanvas(),
              this._updateScanAreaDiv(),
              this._updateViewDecorator();
              for (let F of this._arrScanRegionOverlays) F && this._updateScanRegionOverlay(F);
              this._cvsOriginalImage || this._updateDrawingLayersSize();
              const L = this.mapCameraEvents.get('resolutionChange');
              for (let P of L) {
                if (!P) continue;
                const k = JSON.parse(JSON.stringify(b));
                setTimeout((() =>P.apply(this, [
                  k
                ])), 0)
              }
            }
            return this.promisePlay = null,
            b
          } catch (B) {
            throw this.promisePlay = null,
            this._bgLoading && (this._bgLoading.style.display = 'none'),
            'NotFoundError' === B.name && (DOMException ? B = new DOMException('No camera available, please use a device with an accessible camera.', B.name) : (B = new Error('No camera available, please use a device with an accessible camera.')).name = 'NotFoundError'),
            B
          }
        }))) ();
        const l = yield this.promisePlay;
        return this.playCallbackInfo = JSON.parse(JSON.stringify(l)),
        this._recordedStates.videoPlaying = !0,
        l
      }))
    }
    resume() {
      return j(this, void 0, void 0, (function * () {
        this._assertOpen(),
        yield this.play(),
        this.ifShowScanRegionLaser && this.showScanRegionLaser()
      }))
    }
    pause() {
      this._assertOpen(),
      this._video && (this._video.pause(), this._recordedStates.videoPlaying = !1),
      this.ifShowScanRegionLaser && this.hideScanRegionLaser()
    }
    _bindUI() {
      if (!this.UIElement) throw new Error('Need to define `UIElement` before opening.');
      const e = [
        this.UIElement
      ];
      for (let t = 0; t < e.length; ++t) for (let i of e[t].children) e.push(i);
      for (let t of e) {
        if (!this._video && t.classList.contains('dce-video-container')) {
          this._divVideoContainer = t;
          const e = document.createElement('video');
          e.style.position = 'absolute',
          e.style.left = '0',
          e.style.top = '0',
          e.style.width = '100%',
          e.style.height = '100%',
          e.style.objectFit = this.getVideoFit(),
          e.setAttribute('playsinline', 'true'),
          e.setAttribute('muted', 'true'),
          t.prepend(e),
          this._video = e
        } else !this._divScanArea && t.classList.contains('dce-scanarea') ? this._divScanArea = t : !this._divScanLight && t.classList.contains('dce-scanlight') ? this._divScanLight = t : !this._bgLoading && t.classList.contains('dce-bg-loading') ? this._bgLoading = t : !this._bgCamera && t.classList.contains('dce-bg-camera') ? this._bgCamera = t : !this._selCam && t.classList.contains('dce-sel-camera') ? this._selCam = t : !this._selRsl && t.classList.contains('dce-sel-resolution') ? (this._selRsl = t, this.videoSrc || this.singleFrameMode || this._selRsl.options.length || (this._selRsl.innerHTML = [
          this._optGotRsl ? '' : '<option class="dce-opt-gotResolution" value="got"></option>',
          '<option data-width="3840" data-height="2160">3840x2160</option>',
          '<option data-width="1920" data-height="1080">1920x1080</option>',
          '<option data-width="1280" data-height="720">1280x720</option>'
        ].join(''), this._optGotRsl = this._optGotRsl || this._selRsl.options[0])) : !this._optGotRsl && t.classList.contains('dce-opt-gotResolution') ? this._optGotRsl = t : !this._btnClose && t.classList.contains('dce-btn-close') ? this._btnClose = t : !this._selMinLtr && t.classList.contains('dlr-sel-minletter') ? (this._selMinLtr = t, this._selMinLtr.options.length || (this._selMinLtr.innerHTML = [
          this._optGotMinLtr ? '' : '<option class="dlr-opt-gotMinLtr" value="got"></option>',
          '<option value="0" selected>any letter</option>',
          '<option value="3">3+ letters</option>',
          '<option value="5">5+ letters</option>',
          '<option value="8">8+ letters</option>',
          '<option value="12">12+ letters</option>',
          '<option value="17">17+ letters</option>',
          '<option value="30">30+ letters</option>',
          '<option value="50">50+ letters</option>',
          '<option value="80">80+ letters</option>',
          '<option value="120">120+ letters</option>'
        ].join(''), this._optGotMinLtr = this._optGotMinLtr || this._selMinLtr.options[0])) : !this._optGotMinLtr && t.classList.contains('dlr-opt-gotMinLtr') && (this._optGotMinLtr = t);
        if (this.extraBindings && this.extraBindings.length) for (let i of this.extraBindings) try {
          i(t)
        } catch (e) {
        }
      }
      if (!this._video) throw this._unbindUI(),
      Error('Can not find the video container element with class \'dce-video-container\'');
      this.singleFrameMode ? (this._video && (this._video.addEventListener('click', this._clickIptSingleFrameMode), this._video.style.cursor = 'pointer', this._video.setAttribute('title', 'Take a photo')), this._selCam && (this._selCam.style.display = 'none'), this._selRsl && (this._selRsl.style.display = 'none'), this._selMinLtr && (this._selMinLtr.style.display = 'none'), this._bgCamera && (this._bgCamera.style.display = 'block')) : (this._selCam && (this._selCam.style.display = 'block', this._selCam.addEventListener('change', this._onCameraSelChange)), this._selRsl && (this._selRsl.style.display = 'block', this._selRsl.addEventListener('change', this._onResolutionSelChange)), this._selMinLtr && (this._selMinLtr.style.display = 'block'), this._bgLoading && (this._bgLoading.style.display = 'block')),
      this._btnClose && this._btnClose.addEventListener('click', this._onCloseBtnClick),
      document.addEventListener('visibilitychange', this._ev_documentHideEvent),
      window.ResizeObserver ? (this._resizeObserver || (this._resizeObserver = new ResizeObserver((e=>{
        for (let t of e) t.target === this._divVideoContainer && this._updateLayers()
      }))), this._divVideoContainer && this._resizeObserver.observe(this._divVideoContainer)) : window.addEventListener('resize', this._updateLayers)
    }
    _unbindUI() {
      this.singleFrameMode ? (this._video && (this._video.removeEventListener('click', this._clickIptSingleFrameMode), this._video.style.cursor = '', this._video.removeAttribute('title')), this._bgCamera && (this._bgCamera.style.display = 'none')) : this._bgLoading && (this._bgLoading.style.display = 'none'),
      this._selCam && this._selCam.removeEventListener('change', this._onCameraSelChange),
      this._selRsl && this._selRsl.removeEventListener('change', this._onResolutionSelChange),
      this._btnClose && this._btnClose.removeEventListener('click', this._onCloseBtnClick),
      this.hideScanRegionLaser(),
      this.hideViewDecorator(),
      this.hideScanRegionOverlays(),
      this._drawingLayersManager.setVisible(!1),
      this._hideOriginalImageCvs(),
      this._video && (this._video.onloadedmetadata = null, this._video.remove()),
      this._divVideoContainer = null,
      this._video = null,
      this._selCam = null,
      this._selRsl = null,
      this._optGotRsl = null,
      this._btnClose = null,
      this._selMinLtr = null,
      this._optGotMinLtr = null,
      this._divScanArea = null,
      this._divScanLight = null,
      this._cvsScanRegion && (this._cvsScanRegion.remove(), this._cvsScanRegion = null),
      this._singleFrameModeIpt && (this._singleFrameModeIpt.remove(), this._singleFrameModeIpt = null),
      this._cvsSingleFrameMode && (this._cvsSingleFrameMode.remove(), this._cvsSingleFrameMode = null),
      document.removeEventListener('visibilitychange', this._ev_documentHideEvent),
      window.ResizeObserver ? this._resizeObserver && this._resizeObserver.disconnect() : window.removeEventListener('resize', this._updateLayers)
    }
    _assertOpen() {
      if (!this._bOpen) throw Error('The camera is not open.')
    }
    open(e) {
      return j(this, void 0, void 0, (function * () {
        this.UIElement || (yield this.setUIElement(ne.defaultUIElementURL)),
        this._bindUI(),
        e && this.appendAndShowUI();
        let t = yield this.play();
        this.bOpen = !0;
        const i = this.mapCameraEvents.get('cameraOpen');
        for (let e of i) {
          if (!e) continue;
          const i = JSON.parse(JSON.stringify(t));
          setTimeout((() =>e.apply(this, [
            i
          ])), 0)
        }
        return t
      }))
    }
    close(e) {
      if (!this._video) return;
      this.stop(),
      this._hideOriginalImage(!1),
      this._unbindUI(),
      e && this.hideUI(),
      this.stopFetchingLoop(),
      this.bOpen = !1;
      const t = this.mapCameraEvents.get('cameraClose');
      for (let e of t) {
        if (!e) continue;
        const t = {
          width: 0,
          height: 0,
          deviceId: null
        };
        setTimeout((() =>e.apply(this, [
          t
        ])), 0)
      }
    }
    stop() {
      this._video && this._video.srcObject && (ne._onLog && ne._onLog('DCE: ======stop video========'), this._video.srcObject.getTracks().forEach((e=>{
        e.stop()
      })), this._video.srcObject = null, this._videoTrack = null, this._currentCamera = null),
      this._video && this.videoSrc && (ne._onLog && ne._onLog('DCE: ======stop existing video========'), this._video.pause(), this._video.currentTime = 0),
      this._bgLoading && (this._bgLoading.style.animationPlayState = ''),
      this._frameQueue.length = 0,
      this._reusedCvs && this._reusedCvs.ctx2d && this._reusedCvs.ctx2d.clearRect(0, 0, this._reusedCvs.width, this._reusedCvs.height),
      this.forceLoseContext()
    }
    getAllCameras(e) {
      return j(this, void 0, void 0, (function * () {
        let t = yield navigator.mediaDevices.enumerateDevices();
        if (!e && t && t.length && !t[0].deviceId) {
          let e = yield navigator.mediaDevices.getUserMedia({
            video: !0
          });
          t = yield navigator.mediaDevices.enumerateDevices(),
          e.getTracks().forEach((e=>{
            e.stop()
          })),
          e = null
        }
        const i = [
        ],
        r = [
        ];
        if (this._allCameras) for (let e of this._allCameras) e._checked && r.push(e);
        for (let e = 0; e < t.length; e++) {
          let n,
          o = t[e];
          if ('videoinput' == o.kind) {
            for (let e of r) o.deviceId == e.deviceId && (n = e);
            n || (n = {
            }, n.deviceId = o.deviceId, n.label = o.label ? o.label : 'camera ' + e),
            i.push(n)
          }
        }
        return this._allCameras = i,
        ne._onLog && ne._onLog('DCE: ' + JSON.stringify(this._allCameras)),
        Promise.resolve(i)
      }))
    }
    _renderSelCameraInfo() {
      if (this._selCam && (this._selCam.innerHTML = ''), this._selCam) {
        let e;
        for (let t of this._allCameras) {
          let i = document.createElement('option');
          i.value = t.deviceId,
          i.innerText = t.label,
          this._selCam.append(i),
          t.deviceId && this._currentCamera && this._currentCamera.deviceId == t.deviceId && (e = i)
        }
        this._selCam.value = e ? e.value : ''
      }
    }
    getSelectedCamera() {
      if (!this._bOpen) {
        let e = '';
        const t = this.videoSettings.video.deviceId;
        t && (e = t.exact || t.ideal || t);
        for (let t of this._allCameras) if (t.deviceId === e) return JSON.parse(JSON.stringify(t));
        return {
          deviceId: e,
          label: '',
          _checked: !1
        }
      }
      return this._currentCamera
    }
    selectCamera(e) {
      return j(this, void 0, void 0, (function * () {
        let t = '';
        return e && (t = e.deviceId || e),
        this.videoSettings.video.deviceId = {
          exact: t
        },
        this._bOpen ? yield this.play(e.deviceId || e) : null
      }))
    }
    getResolution() {
      if (this._bOpen) return [this._video.videoWidth,
      this._video.videoHeight];
      {
        let e = 0,
        t = 0;
        const i = this.videoSettings.video.width,
        r = this.videoSettings.video.height;
        return i && (e = i.exact || i.ideal || i),
        r && (t = r.exact || r.ideal || r),
        [
          e,
          t
        ]
      }
    }
    setResolution(e, t) {
      return j(this, void 0, void 0, (function * () {
        let i,
        r;
        return e instanceof Array ? (i = e[0], r = e[1]) : (i = e, r = t),
        this.videoSettings.video.width = {
          ideal: i
        },
        this.videoSettings.video.height = {
          ideal: r
        },
        this._bOpen ? yield this.play(null, i, r) : null
      }))
    }
    getResolutions(e) {
      return j(this, void 0, void 0, (function * () {
        let t = '';
        const i = (e, t) =>{
          const i = this._mapCameraResolutions.get(e);
          if (!i || !i.length) return !1;
          for (let e of i) if (e[0] === t.width && e[1] === t.height) return !0;
          return !1
        },
        r = (e, t, i) =>j(this, void 0, void 0, (function * () {
          const r = {
            video: {
              deviceId: {
                exact: e
              },
              width: {
                ideal: t
              },
              height: {
                ideal: i
              }
            }
          };
          let n = null;
          try {
            n = yield navigator.mediaDevices.getUserMedia(r)
          } catch (e) {
            return null
          }
          if (!n) return null;
          const o = n.getVideoTracks();
          let s = null;
          try {
            const e = o[0].getSettings();
            s = {
              width: e.width,
              height: e.height
            }
          } catch (e) {
            const t = document.createElement('video');
            t.srcObject = n,
            s = {
              width: t.videoWidth,
              height: t.videoHeight
            },
            t.srcObject = null
          }
          return o.forEach((e=>{
            e.stop()
          })),
          s
        }));
        if (!this._bOpen) {
          const n = this.videoSettings.video.deviceId;
          if (!n) return null;
          if (t = n.hasOwnProperty('exact') ? this.videoSettings.video.deviceId.exact : n.hasOwnProperty('ideal') ? this.videoSettings.video.deviceId.ideal : this.videoSettings.video.deviceId, !t) return null;
          let o = this._mapCameraResolutions.get(t);
          if (o && !e) return this._mapCameraResolutions.get(t);
          this._mapCameraResolutions.set(t, [
          ]),
          o = this._mapCameraResolutions.get(t);
          for (let e of this._predefinedResolutions) {
            const n = yield r(t, e.width, e.height);
            n && !i(t, n) && o.push([n.width,
            n.height])
          }
          return o
        }
        if (this._currentCamera) {
          t = this._currentCamera.deviceId;
          let r = this._mapCameraResolutions.get(t);
          if (r && !e) return this._mapCameraResolutions.get(t);
          this._mapCameraResolutions.set(t, [
          ]),
          r = this._mapCameraResolutions.get(t);
          const n = this.getConstraints();
          for (let e of this._predefinedResolutions) {
            yield this._videoTrack.applyConstraints({
              width: {
                ideal: e.width
              },
              height: {
                ideal: e.height
              }
            });
            const n = this._videoTrack.getSettings(),
            o = {
              width: n.width,
              height: n.height
            };
            i(t, o) || r.push([o.width,
            o.height])
          }
          return yield this._videoTrack.applyConstraints(n),
          r
        }
        return null
      }))
    }
    on(e, t) {
      if (!this.mapCameraEvents.has(e)) throw new Error(`Event '${ e }' is not exists.`);
      const i = this.mapCameraEvents.get(e);
      i.includes(t) || i.push(t)
    }
    off(e, t) {
      if (!this.mapCameraEvents.has(e)) throw new Error(`Event '${ e }' is not exists.`);
      const i = this.mapCameraEvents.get(e),
      r = i.indexOf(t);
      - 1 !== r && i.splice(r, 1)
    }
    offAll(e) {
      if (e) {
        if ('string' == typeof e) {
          const t = this.mapCameraEvents.get(e);
          t && (t.length = 0)
        }
      } else for (let e of this.mapCameraEvents.values()) e && (e.length = 0)
    }
    getVideoSettings() {
      return JSON.parse(JSON.stringify(this.videoSettings))
    }
    updateVideoSettings(e) {
      return this.videoSettings = JSON.parse(JSON.stringify(e)),
      this._lastDeviceId = null,
      this._bOpen ? this.play() : Promise.resolve()
    }
    isOpen() {
      return this._bOpen
    }
    getCapabilities() {
      if (this._assertOpen(), this.singleFrameMode) throw new Error('\'getCapabilities()\' is unavailable in singleFrameMode.');
      return this._videoTrack && this._videoTrack.getCapabilities ? this._videoTrack.getCapabilities() : {
      }
    }
    getCameraSettings() {
      if (this._assertOpen(), this.singleFrameMode) throw new Error('\'getCameraSettings()\' is unavailable in singleFrameMode.');
      return this._videoTrack ? this._videoTrack.getSettings() : null
    }
    getConstraints() {
      if (this._assertOpen(), this.singleFrameMode) throw new Error('\'getConstraints()\' is unavailable in singleFrameMode.');
      return this._videoTrack ? this._videoTrack.getConstraints() : null
    }
    applyConstraints(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'applyConstraints()\' is unavailable in singleFrameMode.');
        if (!this._videoTrack) throw new Error('"_videoTrack" is null.');
        if (!this._videoTrack.applyConstraints) throw Error('Not supported.');
        return yield this._videoTrack.applyConstraints(e)
      }))
    }
    turnOnTorch() {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'turnOnTorch()\' is unavailable in singleFrameMode.');
        if (this.getCapabilities().torch) return yield this._videoTrack.applyConstraints({
          advanced: [
            {
              torch: !0
            }
          ]
        });
        throw Error('Not supported.')
      }))
    }
    turnOffTorch() {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'turnOffTorch()\' is unavailable in singleFrameMode.');
        if (this.getCapabilities().torch) return yield this._videoTrack.applyConstraints({
          advanced: [
            {
              torch: !1
            }
          ]
        });
        throw Error('Not supported.')
      }))
    }
    setColorTemperature(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'setColorTemperature()\' is unavailable in singleFrameMode.');
        let t = this.getCapabilities().colorTemperature;
        if (!t) throw Error('Not supported.');
        return e < t.min ? e = t.min : e > t.max && (e = t.max),
        yield this._videoTrack.applyConstraints({
          advanced: [
            {
              colorTemperature: e
            }
          ]
        })
      }))
    }
    setExposureCompensation(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'setExposureCompensation()\' is unavailable in singleFrameMode.');
        let t = this.getCapabilities().exposureCompensation;
        if (!t) throw Error('Not supported.');
        return e < t.min ? e = t.min : e > t.max && (e = t.max),
        yield this._videoTrack.applyConstraints({
          advanced: [
            {
              exposureCompensation: e
            }
          ]
        })
      }))
    }
    setZoom(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'setZoom()\' is unavailable in singleFrameMode.');
        let t = this.getCapabilities().zoom;
        if (!t) throw Error('Not supported.');
        return e < t.min ? e = t.min : e > t.max && (e = t.max),
        yield this._videoTrack.applyConstraints({
          advanced: [
            {
              zoom: e
            }
          ]
        })
      }))
    }
    setFrameRate(e) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'setFrameRate()\' is unavailable in singleFrameMode.');
        let t = this.getCapabilities().frameRate;
        if (!t) throw Error('Not supported.');
        return e < t.min ? e = t.min : e > t.max && (e = t.max),
        yield this._videoTrack.applyConstraints({
          width: {
            ideal: Math.max(this._video.videoWidth, this._video.videoHeight)
          },
          frameRate: e
        })
      }))
    }
    getFrameRate() {
      return this.getCameraSettings().frameRate
    }
    setFocus(e, t) {
      return j(this, void 0, void 0, (function * () {
        if (this._assertOpen(), this.singleFrameMode) throw new Error('\'setFocus()\' is unavailable in singleFrameMode.');
        const i = this.getCapabilities().focusMode,
        r = this.getCapabilities().focusDistance;
        if (!i || !i.includes(e) || !r) throw Error('Not supported.');
        return t ? (t < r.min ? t = r.min : t > r.max && (t = r.max), yield this._videoTrack.applyConstraints({
          advanced: [
            {
              focusMode: e,
              focusDistance: t
            }
          ]
        })) : yield this._videoTrack.applyConstraints({
          advanced: [
            {
              focusMode: e
            }
          ]
        })
      }))
    }
    getFocus() {
      const e = this.getCameraSettings().focusMode;
      return 'continuous' === e ? {
        mode: e
      }
       : {
        mode: e,
        distance: this.getCameraSettings().focusDistance
      }
    }
    getFrameSize(e, t, i, r) {
      if (!e || !t) return null;
      let n,
      o,
      s,
      a,
      l = e,
      h = t;
      const c = {
        regionLeft: 0,
        regionTop: 0,
        regionRight: l,
        regionBottom: h,
        regionMeasuredByPercentage: !1
      };
      i ? (i.regionMeasuredByPercentage ? (c.regionLeft = i.regionLeft * l / 100, c.regionTop = i.regionTop * h / 100, c.regionRight = i.regionRight * l / 100, c.regionBottom = i.regionBottom * h / 100) : (c.regionLeft = i.regionLeft, c.regionTop = i.regionTop, c.regionRight = i.regionRight, c.regionBottom = i.regionBottom), n = c.regionLeft, o = c.regionTop, l = Math.round(c.regionRight - c.regionLeft), h = Math.round(c.regionBottom - c.regionTop)) : (n = 0, o = 0);
      const u = Math.max(l, h);
      if (r && r > 0 && u > r) {
        const e = r / u;
        l > h ? (s = r, a = Math.round(h * e)) : (s = Math.round(l * e), a = r)
      } else s = l,
      a = h;
      return s <= 0 || a <= 0 ? null : {
        sx: n,
        sy: o,
        sWidth: l,
        sHeight: h,
        dWidth: s,
        dHeight: a
      }
    }
    getFrame() {
      if (this.singleFrameMode) throw Error('\'getFrame()\' is unavailable in singleFrameMode.');
      if (this._assertOpen(), this.singleFrameMode) throw new Error('\'getFrame()\' is unavailable in singleFrameMode.');
      return this._getVideoFrame(this._scanRegion)
    }
    getImage() {
      const e = this.getFrame();
      return e.pixelFormat = e.colorMode,
      Object.assign(Object.assign({
      }, e), {
        pixelFormat: e.colorMode
      })
    }
    _getVideoFrame(e, t) {
      if (this.isDisposed) throw Error('The \'CameraEnhancer\' instance has been disposed.');
      if (this._assertOpen(), this.singleFrameMode) throw new Error('\'_getVideoFrame()\' is unavailable in singleFrameMode.');
      const i = Date.now();
      ne._onLog && ne._onLog('DCE: _getVideoFrame() START: ' + i);
      const r = this._video.videoWidth,
      n = this._video.videoHeight;
      if (0 === r || 0 === n) return null;
      const o = this.getFrameSize(r, n, e, this.maxCvsSideLength);
      if (!o) return null;
      let s,
      a;
      s = r !== o.sWidth || n !== o.sHeight,
      a = o.sWidth !== o.dWidth || o.sHeight !== o.dHeight;
      const l = (() =>!(!this._bWebGLSupported || a)) (),
      h = {
        data: null,
        region: e ? JSON.parse(JSON.stringify(e)) : null,
        sx: o.sx,
        sy: o.sy,
        width: o.dWidth,
        height: o.dHeight,
        colorMode: null,
        timeSpent: null,
        timeStamp: null,
        isCropped: s,
        toCanvas: this._toCanvas,
        _sWidth: o.sWidth,
        _sHeight: o.sHeight,
        _bUseWebGL: null
      };
      let c;
      try {
        c = this._getImageData(this._video, r, n, o, t, {
          targetColorMode: this.frameColorMode,
          bUseWebGL: l
        })
      } catch (e) {
        if ('WebGLError' !== e.name) throw e;
        ne._onLog && ne._onLog('DCE: get WebGLError, try again in canvas.'),
        c = this._getImageData(this._video, r, n, o, t, {
          targetColorMode: this.frameColorMode,
          bUseWebGL: !1
        })
      }
      if (!c) return null;
      const u = Date.now();
      return ne._onLog && ne._onLog('DCE: _getVideoFrame() END: ' + u),
      h.data = c.data,
      h.colorMode = c.colorMode,
      h._bUseWebGL = c._bUseWebGL,
      h.timeSpent = u - i,
      h.timeStamp = u,
      h
    }
    _getImageData(e, t, i, r, n, o) {
      if (this.isDisposed) throw Error('The \'CameraEnhancer\' instance has been disposed.');
      if (!t || !i) return null;
      ne._onLog && ne._onLog('DCE: _getImageData(), START: ' + Date.now());
      const {
        sx: s,
        sy: a,
        sWidth: l,
        sHeight: h,
        dWidth: c,
        dHeight: u
      }
      = r;
      let d;
      if (d = o && o.targetColorMode ? o.targetColorMode.toLowerCase() : 'rgba', o && o.bUseWebGL) {
        ne._onLog && ne._onLog('DCE:  _getImageData() in WebGL.'),
        this._reusedWebGLCvs || (this._reusedWebGLCvs = document.createElement('canvas'));
        const r = this._reusedWebGLCvs;
        r.width == t && r.height == i || (r.width = t, r.height = i, this._reusedWebGLCtx && this._reusedWebGLCtx.viewport(0, 0, t, i));
        const o = this._reusedWebGLCtx || r.getContext('webgl', {
          antialias: !1
        }) || r.getContext('experimental-webgl', {
          antialias: !1
        });
        if (!o) {
          ne._onLog && ne._onLog('DCE: WebGL unavailable.'),
          this._reusedWebGLCtx = null,
          this._bWebGLSupported = !1;
          const e = new Error('WebGL error: unable to initialize WebGL. Your browser or machine may not support it.');
          throw e.name = 'WebGLError',
          e
        }
        if (o.enable(o.SCISSOR_TEST), o.scissor(s, a, c, u), !this._reusedWebGLCtx || d !== this.currentFSColorMode) {
          this._reusedWebGLCtx = o;
          const e = e=>{
            const t = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, t),
            e.bufferData(e.ARRAY_BUFFER, new Float32Array([ - 1,
            - 1,
            1,
            - 1,
            1,
            1,
            - 1,
            1]), e.STATIC_DRAW);
            const i = e.createBuffer();
            return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i),
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,
            1,
            2,
            0,
            2,
            3]), e.STATIC_DRAW),
            {
              position: t,
              indices: i
            }
          },
          t = e=>{
            const t = e.createTexture();
            return e.bindTexture(e.TEXTURE_2D, t),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            t
          },
          i = (e, t, i) =>{
            const n = r(e, e.VERTEX_SHADER, t),
            o = r(e, e.FRAGMENT_SHADER, i),
            s = e.createProgram();
            return e.attachShader(s, n),
            e.attachShader(s, o),
            e.linkProgram(s),
            e.getProgramParameter(s, e.LINK_STATUS) ? s : (alert('Unable to initialize the shader program: ' + e.getProgramInfoLog(s)), null)
          },
          r = (e, t, i) =>{
            const r = e.createShader(t);
            return e.shaderSource(r, i),
            e.compileShader(r),
            e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (alert('An error occurred compiling the shaders: ' + e.getShaderInfoLog(r)), e.deleteShader(r), null)
          },
          n = '\n                  attribute mediump vec2 aVertexPosition;\n                  varying mediump vec2 vDirection;\n          \n                  void main( void )\n                  {\n                      gl_Position = vec4(aVertexPosition, 1.0, 1.0) * 2.0;\n                      vDirection = aVertexPosition;\n                  }\n                ';
          let s;
          s = [
            'rgba',
            'rbga',
            'grba',
            'gbra',
            'brga',
            'bgra'
          ].includes(d) ? d.slice(0, 3) : 'rgb';
          const a = i(o, n, `
                    precision mediump float;

                    varying mediump vec2 vDirection;
                    uniform sampler2D uSampler;
                    uniform lowp float uColorFactor;

                    void main(void)
                    {
                        vec4 sample = texture2D(uSampler, vec2(vDirection.x * 0.5 + 0.5, vDirection.y * 0.5 + 0.5));
                        lowp float grey = 0.21 * sample.r + 0.71 * sample.g + 0.07 * sample.b;
                        gl_FragColor = vec4(sample.${ s } * (1.0 - uColorFactor) + (grey * uColorFactor), sample.a);
                    }
                `);
          this._webGLProgramInfo = {
            program: a,
            attribLocations: {
              vertexPosition: o.getAttribLocation(a, 'aVertexPosition')
            },
            uniformLocations: {
              uSampler: o.getUniformLocation(a, 'uSampler'),
              uColorFactor: o.getUniformLocation(a, 'uColorFactor')
            }
          },
          this._webGLBuffers = e(o),
          this._webGLTexture = t(o),
          this.currentFSColorMode = d
        }
        const l = (e, t, i) =>{
          const r = e.RGBA,
          n = e.RGBA,
          o = e.UNSIGNED_BYTE;
          e.bindTexture(e.TEXTURE_2D, t),
          e.texImage2D(e.TEXTURE_2D, 0, r, n, o, i)
        },
        h = (e, t, i, r) =>{
          e.clearColor(0, 0, 0, 1),
          e.clearDepth(1),
          e.enable(e.DEPTH_TEST),
          e.depthFunc(e.LEQUAL),
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.indices),
          e.useProgram(t.program);
          {
            const r = 2,
            n = e.FLOAT,
            o = !1,
            s = 0,
            a = 0;
            e.bindBuffer(e.ARRAY_BUFFER, i.position),
            e.vertexAttribPointer(t.attribLocations.vertexPosition, r, n, o, s, a),
            e.enableVertexAttribArray(t.attribLocations.vertexPosition)
          }
          e.activeTexture(e.TEXTURE0),
          e.bindTexture(e.TEXTURE_2D, r),
          e.uniform1i(t.uniformLocations.uSampler, 0),
          e.uniform1f(t.uniformLocations.uColorFactor, 'grey' === d || 'grey32' === d ? 1 : 0);
          const n = e.UNSIGNED_SHORT;
          e.drawElements(e.TRIANGLES, 6, n, 0)
        };
        let f;
        if (l(o, this._webGLTexture, e), h(o, this._webGLProgramInfo, this._webGLBuffers, this._webGLTexture), n) {
          if (n.length < c * u * 4) return null;
          f = n
        } else this.ifReuseArrayBufferView || 'grey' === d ? (this._reusedDataContainer && this._reusedDataContainer.length === c * u * 4 || (this._reusedDataContainer = new Uint8Array(c * u * 4)), f = this._reusedDataContainer) : f = new Uint8Array(c * u * 4);
        if (o.readPixels(s, a, c, u, o.RGBA, o.UNSIGNED_BYTE, f), o.disable(o.SCISSOR_TEST), 255 !== f[3]) {
          ne._onLog && ne._onLog('DCE: WebGL drawing incorrect.'),
          this.forceLoseContext(),
          this._bWebGLSupported = !1;
          const e = new Error('WebGL error: incorrect WebGL drawing.');
          throw e.name = 'WebGLError',
          e
        }
        if ('grey' === d) {
          let e = ne._onLog ? Date.now() : 0;
          if (f = new Uint8Array(new Uint32Array(f.buffer)), n) {
            if (n.length < f.length) return null;
            n.set(f)
          }
          ne._onLog && ne._onLog('DCE: Extract grey cost: ' + (Date.now() - e))
        }
        return ne._onLog && ne._onLog('DCE: _getImageData() in WebGL, END: ' + Date.now()),
        {
          data: f,
          colorMode: d,
          _bUseWebGL: !0
        }
      }
      {
        ne._onLog && ne._onLog('DCE:  _getImageData() in canvas.'),
        this._reusedCvs || (this._reusedCvs = document.createElement('canvas'));
        const t = this._reusedCvs;
        t.width === c && t.height === u || (t.width = c, t.height = u),
        t.ctx2d || (t.ctx2d = t.getContext('2d'));
        const i = t.ctx2d;
        i.drawImage(e, s, a, l, h, 0, 0, c, u);
        let r = i.getImageData(0, 0, t.width, t.height).data;
        if (['rbga',
        'grba',
        'gbra',
        'brga',
        'bgra'].includes(d)) {
          const e = d.indexOf('r'),
          t = d.indexOf('g'),
          i = d.indexOf('b');
          let n = 0;
          1 === e || 2 === e ? n = e : 2 === t && (n = t);
          for (let o = 0; o < r.length; o += 4) {
            let s;
            n && (s = r[o + n]),
            r[o + e] = r[o],
            r[o + t] = 1 === n ? s : r[o + 1],
            r[o + i] = 2 === n ? s : r[o + 2]
          }
        } else if ('grey' === d || 'grey32' === d) for (let e = 0; e < r.length; e += 4) {
          const t = 0.21 * r[e] + 0.71 * r[e + 1] + 0.07 * r[e + 2];
          r[e] = t,
          r[e + 1] = t,
          r[e + 2] = t
        }
        if (r = 'grey' === d ? new Uint8Array(new Uint32Array(r.buffer)) : new Uint8Array(r.buffer), n) {
          if (n.length < r.length) return null;
          n.set(r)
        }
        return ne._onLog && ne._onLog('DCE: _getImageData() in canvas, END: ' + Date.now()),
        {
          data: r,
          colorMode: d,
          _bUseWebGL: !1
        }
      }
    }
    getCurrentRegion() {
      let e = null;
      if (this._scanRegion) e = this._scanRegion;
       else if (this.croppingRegions) {
        if (this._croppingRegionIndex >= this.croppingRegions.length || this._croppingRegionIndex < 0) throw new Error('The \'croppingRegionIndex\' is out of bounds.');
        e = this.croppingRegions[this._croppingRegionIndex],
        this.bIncreaseRegionIndexAuto && ++this._croppingRegionIndex >= this.croppingRegions.length && (this._croppingRegionIndex = 0)
      }
      return e
    }
    _fetchingLoop(e) {
      if (this.isDisposed) return;
      if (!this._bOpen || !this.isFetchingLoopStarted()) return void this.stopFetchingLoop();
      const t = () =>{
        ne._onLog && ne._onLog('DCE: start fetching a frame: ' + Date.now());
        const e = this.getCurrentRegion();
        let t = this._getVideoFrame(e);
        if (!t) return void (ne._onLog && ne._onLog('DCE: get a invalid frame, abandon it: ' + Date.now()));
        for (; this._frameQueue && this._frameQueue.length >= this.maxNumberOfFramesInBuffer; ) this._frameQueue.shift();
        this._frameQueue.push(t),
        ne._onLog && ne._onLog('DCE: finish fetching a frame: ' + Date.now());
        const i = this.mapCameraEvents.get('frameAddedToBuffer');
        for (let e of i) e && setTimeout(e.bind(this), 0)
      },
      i = () =>{
        this.isDisposed || (this._frameLoopTimeoutId2 && clearTimeout(this._frameLoopTimeoutId2), this.refreshInterval <= 0 || (this._frameLoopTimeoutId2 = setTimeout((() =>{
          this.isDisposed || (this._bOpen && this.isFetchingLoopStarted() ? (ne._onLog && ne._onLog('DCE: second timeout executes: ' + Date.now()), t(), i()) : this.stopFetchingLoop())
        }), this.refreshInterval)))
      };
      e && (this._frameQueue.length < this.maxNumberOfFramesInBuffer ? (t(), this.refreshInterval > 0 && i()) : this.refreshInterval > 0 ? (t(), i()) : 0 === this.refreshInterval ? t() : this.refreshInterval),
      this._frameLoopTimeoutId && clearTimeout(this._frameLoopTimeoutId),
      this._frameLoopTimeoutId = setTimeout((() =>{
        this.isDisposed || this._fetchingLoop(!0)
      }), this.loopInterval)
    }
    startFetchingLoop() {
      if (this.isDisposed) throw Error('The \'CameraEnhancer\' instance has been disposed.');
      if (this._assertOpen(), this.singleFrameMode) throw Error('\'startFetchingLoop()\' is unavailable in singleFrameMode.');
      this.isFetchingLoopStarted() || (this._bFetchingLoopStarted = !0, this._recordedStates.fetchingLoopStart = !0, ne._onLog && ne._onLog('start fetching loop: ' + Date.now()), this._fetchingLoop(!0))
    }
    isFetchingLoopStarted() {
      return this._bFetchingLoopStarted
    }
    stopFetchingLoop() {
      this._bFetchingLoopStarted && (ne._onLog && ne._onLog('stop fetching loop: ' + Date.now()), this._frameLoopTimeoutId && clearTimeout(this._frameLoopTimeoutId), this._frameQueue.length = 0, this._bFetchingLoopStarted = !1, this._recordedStates.fetchingLoopStart = !1)
    }
    getFrameFromBuffer(e) {
      return this._frameQueue && this._frameQueue.length ? e ? e < this._frameQueue.length ? (this._frameLoopTimeoutId2 && clearTimeout(this._frameLoopTimeoutId2), this._frameQueue.splice(e, 1) [0]) : void 0 : (this._frameLoopTimeoutId2 && clearTimeout(this._frameLoopTimeoutId2), this._frameQueue.shift()) : null
    }
    forceLoseContext() {
      if (!this._reusedWebGLCtx) return;
      const e = this._reusedWebGLCtx;
      e && !e.isContextLost() && e.getExtension('WEBGL_lose_context') && e.getExtension('WEBGL_lose_context').loseContext(),
      this._webGLTexture = null,
      this._webGLProgramInfo = null,
      this._webGLBuffers = null,
      this._reusedWebGLCtx = null,
      this._reusedWebGLCvs = null
    }
    _createDrawingLayerBaseCvs() {
      this._assertOpen();
      const e = this._calculateCvsSize();
      if (!e) throw new Error('Camera is not open.');
      const {
        width: t,
        height: i,
        objectFit: r
      }
      = e;
      if (t <= 0 || i <= 0) throw new Error('Invalid dimension of video or image.');
      const n = document.createElement('canvas');
      if (n.width == t && n.height == i || (n.width = t, n.height = i), n.style.objectFit = r, this._scanRegionOverlayContainer) this._scanRegionOverlayContainer.before(n);
       else if (this._cvsScanRegion) this._cvsScanRegion.before(n);
       else if (this._cvsSingleFrameMode) this._cvsSingleFrameMode.after(n);
       else {
        if (!this._video) throw new Error('\'_video\' is lost.');
        this._video.after(n)
      }
      return n
    }
    _updateDrawingLayersSize(e) {
      let t;
      if (t = e && e.width && e.height && e.objectFit ? {
        width: e.width,
        height: e.height,
        objectFit: e.objectFit
      }
       : this._calculateCvsSize(), !t) return;
      const {
        width: i,
        height: r,
        objectFit: n
      }
      = t;
      this._drawingLayersManager.setDimensions({
        width: i,
        height: r
      }, {
        backstoreOnly: !0
      }),
      this._drawingLayersManager.setObjectFit(n)
    }
    _createDrawingLayer(e) {
      this._layerBaseCvs || (this._layerBaseCvs = this._createDrawingLayerBaseCvs());
      const t = this._layerBaseCvs;
      return this._drawingLayersManager.createDrawingLayer(t, e)
    }
    createDrawingLayer() {
      return this._createDrawingLayer()
    }
    getDrawingLayer(e) {
      return this._drawingLayersManager.getDrawingLayer(e) || ([1,
      2,
      3].includes(e) ? this._createDrawingLayer(e) : null)
    }
    getDrawingLayers() {
      return this._drawingLayersManager.getDrawingLayers()
    }
    getSelectedDrawingItems() {
      return this._drawingLayersManager.getSelectedDrawingItems()
    }
    createDrawingStyle(e) {
      return this._drawingLayersManager.createDrawingStyle(e)
    }
    getDrawingStyle(e) {
      return this._drawingLayersManager.getDrawingStyle(e)
    }
    getDrawingStyles() {
      return this._drawingLayersManager.getDrawingStyles()
    }
    updateDrawingStyle(e, t) {
      return this._drawingLayersManager.updateDrawingStyle(e, t)
    }
    clearDrawingLayers() {
      this._drawingLayersManager.clearDrawingLayers(),
      this._layerBaseCvs && (this._layerBaseCvs.remove(), this._layerBaseCvs = null)
    }
    _createControler() {
      if (this._controler || (this._controler = new re(this)), this._controler) return this._controler
    }
    _destroyControler() {
      this._controler = null
    }
    setOriginalImage(e, t, i) {
      if (!e || !t || !i) throw new Error('Invalid arguments');
      this._originalImageData = {
        imageData: e,
        width: t,
        height: i
      };
      let r = this._cvsOriginalImage;
      r || (r = document.createElement('canvas'), r.style.position = 'absolute', r.style.width = '100%', r.style.height = '100%', r.style.left = '0', r.style.top = '0', r.style.backgroundColor = 'white', r.style.objectFit = 'contain', this._cvsOriginalImage = r),
      r.width === t && r.height === i || (r.width = t, r.height = i);
      const n = r.getContext('2d');
      n.clearRect(0, 0, r.width, r.height),
      e instanceof Uint8Array || e instanceof Uint8ClampedArray ? (e instanceof Uint8Array && (e = new Uint8ClampedArray(e)), n.putImageData(new ImageData(e, t, i), 0, 0)) : e instanceof HTMLCanvasElement && n.drawImage(e, 0, 0),
      document.body.contains(r) && '' === r.style.display && this._updateDrawingLayersSize({
        width: t,
        height: i,
        objectFit: 'contain'
      })
    }
    getOriginalImage() {
      return this._originalImageData ? Object.assign({
      }, this._originalImageData) : null
    }
    deleteOriginalImage() {
      return j(this, void 0, void 0, (function * () {
        yield this.hideOriginalImage(),
        this._cvsOriginalImage && (this._cvsOriginalImage.remove(), this._cvsOriginalImage = null),
        this._originalImageData = null
      }))
    }
    _showOriginalImageCvs() {
      this._cvsOriginalImage && 'none' == this._cvsOriginalImage.style.display && (this._cvsOriginalImage.style.display = '')
    }
    _hideOriginalImageCvs() {
      this._cvsOriginalImage && (this._cvsOriginalImage.style.display = 'none')
    }
    showOriginalImage() {
      if (!this._originalImageData) throw new Error('No original image is set.');
      const e = this._cvsOriginalImage;
      if ('' === e.style.display && document.body.contains(e)) return;
      const {
        width: t,
        height: i
      }
      = this._originalImageData;
      if (this._updateDrawingLayersSize({
        width: t,
        height: i,
        objectFit: 'contain'
      }), this._bOpen && (this._video && !this._video.paused && this._video.pause(), this._bFetchingLoopStarted && (this.stopFetchingLoop(), this._recordedStates.fetchingLoopStart = !0), this.ifShowScanRegionMask && this._cvsScanRegion && (this._cvsScanRegion.style.display = 'none'), this.ifShowScanRegionLaser && this._divScanLight && (this._divScanLight.style.display = 'none'), this._cvsViewDecorator && (this._cvsViewDecorator.style.display = 'none'), this._scanRegionOverlayContainer && (this._scanRegionOverlayContainer.style.display = 'none'), this._selCam && (this._selCam.parentElement.style.display = 'none')), !document.body.contains(e)) if (this._cvsSingleFrameMode) this._cvsSingleFrameMode.after(e);
       else {
        if (!this._video) throw new Error('\'video\' is null.');
        this._video.after(e)
      }
      this._showOriginalImageCvs()
    }
    _hideOriginalImage(e) {
      return j(this, void 0, void 0, (function * () {
        this._originalImageData && this._cvsOriginalImage && 'none' !== this._cvsOriginalImage.style.display && (this._updateDrawingLayersSize(), this._bOpen && e && (this._video && this._recordedStates.videoPlaying && (yield this.play(null, null, null, {
          notTriggerSingleFrameClick: !0
        })), this._recordedStates.fetchingLoopStart && !this.singleFrameMode && this.startFetchingLoop(), this.ifShowScanRegionMask && this._cvsScanRegion && this._recordedStates.maskShow && this.showScanRegionMask(), this.ifShowScanRegionLaser && this._divScanLight && this._recordedStates.laserShow && this.showScanRegionLaser(), this._cvsViewDecorator && this._recordedStates.decoratorShow && this.showViewDecorator(), this._scanRegionOverlayContainer && this._recordedStates.overlayShow && this.showScanRegionOverlays()), this._selCam && (this._selCam.parentElement.style.display = ''), this._hideOriginalImageCvs())
      }))
    }
    hideOriginalImage() {
      return j(this, void 0, void 0, (function * () {
        return this._hideOriginalImage(!0)
      }))
    }
    dispose(e) {
      this.UIElement && (this._uiOriginalState && this._uiOriginalState.inDom ? this.UIElement.style.display = this._uiOriginalState.display : this.UIElement.style.display = 'none'),
      this.clearDrawingLayers(),
      this.close(),
      this.forceLoseContext(),
      this.setViewDecorator(null, null),
      this._scanRegionOverlayContainer && this._scanRegionOverlayContainer.remove(),
      this._arrScanRegionOverlays.length = 0,
      e && this.UIElement && this.UIElement.remove(),
      this.__proto__ = null;
      for (let e in this) delete this[e];
      Object.defineProperty(this, 'isCameraEnhancer', {
        value: !0
      }),
      Object.defineProperty(this, 'isDisposed', {
        value: !0
      })
    }
  }
  ne._jsVersion = '3.0.1',
  ne._jsEditVersion = '20220803',
  ne._version = 'JS ' + ne._jsVersion + '.' + ne._jsEditVersion,
  ne.browserInfo = H,
  ne._hasEngineResourceLoaded = !1,
  ne._engineResourcePath = J,
  ne._defaultUIElementURL = '@engineResourcePath/dce.ui.html';
  const oe = {
    DT_Arc: class extends q {
      constructor(e, t, i, r, n, o) {
        super (new B.Circle({
          left: e,
          top: t,
          radius: i,
          startAngle: r,
          endAngle: n
        }), o),
        this._mediaType = 'arc'
      }
    },
    DT_Polygon: class extends q {
      constructor(e, t) {
        super (new B.Polygon(e, {
          objectCaching: !1
        }), t);
        const i = this._fabricObject;
        let r = i.points.length - 1;
        i.controls = i.points.reduce((function (e, t, i) {
          return e['p' + i] = new B.Control({
            positionHandler: Q,
            actionHandler: ee(i > 0 ? i - 1 : r, $),
            actionName: 'modifyPolygon',
            pointIndex: i
          }),
          e
        }), {
        })
      }
      _extendSet(e, t) {
        if ('vertices' === e) {
          const e = this._fabricObject;
          e.points = t;
          const i = e.points.length - 1;
          return e.controls = e.points.reduce((function (e, t, r) {
            return e['p' + r] = new B.Control({
              positionHandler: Q,
              actionHandler: ee(r > 0 ? r - 1 : i, $),
              actionName: 'modifyPolygon',
              pointIndex: r
            }),
            e
          }), {
          }),
          e._setPositionDimensions({
          }),
          !0
        }
      }
      _extendGet(e) {
        if ('vertices' === e) {
          const e = [
          ],
          t = this._fabricObject;
          if (t.selectable) for (let i in t.oCoords) e.push({
            x: t.oCoords[i].x,
            y: t.oCoords[i].y
          });
           else for (let i in t.getCoords()) e.push({
            x: t.getCoords() [i].x,
            y: t.getCoords() [i].y
          });
          return e
        }
      }
    },
    DT_Rect: class extends q {
      constructor(e, t, i, r, n) {
        super (new B.Rect({
          left: e,
          top: t,
          width: i,
          height: r
        }), n)
      }
    },
    DT_Image: class extends q {
      constructor(e, t, i, r) {
        super (new B.Image(e, {
          left: t,
          top: i
        }), r),
        this.image = e
      }
      _extendSet(e, t) {
        if ('image' === e) {
          if (t instanceof HTMLImageElement) return this._fabricObject.setElement(t),
          this.image = t,
          !0;
          if (t instanceof HTMLCanvasElement) {
            const e = new Image;
            return e.src = t.toDataURL(),
            this._fabricObject.setElement(e),
            this.image = t,
            !0
          }
          throw new Error('Unsupported value.')
        }
      }
      _extendGet(e) {
        if ('image' === e) return this.image
      }
    },
    DT_Text: class extends q {
      constructor(e, t, i, r) {
        super (new B.IText(e, {
          left: t,
          top: i
        }), r),
        this._mediaType = 'text'
      }
    },
    DT_Line: class extends q {
      constructor(e, t, i) {
        super (new B.Line([e.x,
        e.y,
        t.x,
        t.y]), i)
      }
      _extendSet(e, t) {
        return 'startPoint' === e ? (this._fabricObject.set('x1', t.x), this._fabricObject.set('y1', t.y), !0) : 'endPoint' === e ? (this._fabricObject.set('x2', t.x), this._fabricObject.set('y2', t.y), !0) : void 0
      }
      _extendGet(e) {
        return 'startPoint' === e ? {
          x: this._fabricObject.get('x1'),
          y: this._fabricObject.get('y1')
        }
         : 'endPoint' === e ? {
          x: this._fabricObject.get('x2'),
          y: this._fabricObject.get('y2')
        }
         : void 0
      }
    },
    DT_Group: class extends q {
      constructor(e) {
        super (new B.Group(e.map((e=>e._getFabricObject()))));
        const t = this.mapEvents;
        this._fabricObject.onSelect = () =>{
          this.styleSelector = 'selected';
          const e = this.mapEvents.get('select');
          for (let t of e) t && t.apply(this);
          const t = this._fabricObject._objects;
          for (let e of t) setTimeout((() =>{
            e.onSelect && e.onSelect()
          }), 0);
          setTimeout((() =>{
            this._fabricObject && this._fabricObject.canvas && (this._fabricObject.dirty = !0, this._fabricObject.canvas.renderAll())
          }), 0)
        },
        this._fabricObject.onDeselect = () =>{
          this.styleSelector = 'default';
          const e = t.get('deselect');
          for (let t of e) t && t.apply(this);
          const i = this._fabricObject._objects;
          for (let e of i) setTimeout((() =>{
            e.onDeselect && e.onDeselect()
          }), 0);
          setTimeout((() =>{
            this._fabricObject && this._fabricObject.canvas && (this._fabricObject.dirty = !0, this._fabricObject.canvas.renderAll())
          }), 0)
        }
      }
      getChildItems() {
        return this._fabricObject._objects.map((e=>e.getDrawingItem()))
      }
      addChildItem(e) {
        if (!e || !e.isDrawingItem) throw TypeError('Illegal drawing item.');
        this._drawingLayer ? this._drawingLayer._updateGroupItem(this, e, 'add') : this._fabricObject.addWithUpdate(e._getFabricObject())
      }
      removeChildItem(e) {
        e && e.isDrawingItem && (this._drawingLayer ? this._drawingLayer._updateGroupItem(this, e, 'remove') : this._fabricObject.removeWithUpdate(e._getFabricObject()))
      }
    }
  };
  class se extends M {
    constructor() {
      super (),
      this._barcodeFillStyle = 'rgba(254,180,32,0.3)',
      this._barcodeStrokeStyle = 'rgba(254,180,32,0.9)',
      this._barcodeLineWidth = 1,
      this._barcodeFillStyleBeforeVerification = 'rgba(248,252,0,0.2)',
      this._barcodeStrokeStyleBeforeVerification = 'transparent',
      this._barcodeLineWidthBeforeVerification = 2,
      this.bFilterRegionInJs = !0,
      this._onCameraSelChange = () =>{
      },
      this._onResolutionSelChange = () =>{
      },
      this._onCloseBtnClick = () =>{
      },
      this._onPlayed = null
    }
    static get version() {
      return this._version + `(DCE ${ ne.getVersion() })`
    }
    static _fireHTTPSWarnning() {
      se.onWarning && location && 'https:' !== location.protocol && setTimeout((() =>{
        se.onWarning && se.onWarning({
          id: 2,
          message: 'Not connected via SSL (HTTPS), the SDK may not work correctly.'
        })
      }), 0)
    }
    _fireResolutionWarning() {
      if (!this.singleFrameMode && this.onWarning && this.dce.isOpen()) {
        const e = this.dce.getConstraints();
        e && e.width < 1280 && e.height < 720 && setTimeout((() =>{
          this.onWarning && this.onWarning({
            id: 3,
            message: 'Camera resolution too low, please use a higher resolution (720P or better).'
          })
        }), 0)
      }
    }
    getUIElement() {
      return this.dce.getUIElement()
    }
    async setUIElement(e) {
      await this.dce.setUIElement(e)
    }
    get singleFrameMode() {
      return this.dce.singleFrameMode
    }
    set singleFrameMode(e) {
      this.dce.singleFrameMode = e,
      e && (this.dce.ifShowScanRegionLaser = !1, (async() =>{
        let e = await this.getScanSettings();
        e.oneDTrustFrameCount = 1,
        await this.updateScanSettings(e)
      }) ())
    }
    get onUnduplicatedRead() {
      return this.onUniqueRead
    }
    set onUnduplicatedRead(e) {
      this.onUniqueRead = e
    }
    get video() {
      return this.dce && this.dce.video
    }
    set videoSrc(e) {
      this.dce && (this.dce.videoSrc = e)
    }
    get videoSrc() {
      return this.dce && this.dce.videoSrc
    }
    _assertOpen() {
      if (!this.dce.isOpen()) throw Error('The scanner is not open.')
    }
    set barcodeFillStyle(e) {
      this._barcodeFillStyle = e,
      this.dce && this.dce.updateDrawingStyle(3, {
        fillStyle: e
      })
    }
    get barcodeFillStyle() {
      return this._barcodeFillStyle
    }
    set barcodeStrokeStyle(e) {
      this._barcodeStrokeStyle = e,
      this.dce && this.dce.updateDrawingStyle(3, {
        strokeStyle: e
      })
    }
    get barcodeStrokeStyle() {
      return this._barcodeStrokeStyle
    }
    set barcodeLineWidth(e) {
      this._barcodeLineWidth = e,
      this.dce && this.dce.updateDrawingStyle(3, {
        lineWidth: e
      })
    }
    get barcodeLineWidth() {
      return this._barcodeLineWidth
    }
    set barcodeFillStyleBeforeVerification(e) {
      this._barcodeFillStyleBeforeVerification = e,
      this._styleIdBeforeVerification && this.dce.updateDrawingStyle(this._styleIdBeforeVerification, {
        fillStyle: e
      })
    }
    get barcodeFillStyleBeforeVerification() {
      return this._barcodeFillStyleBeforeVerification
    }
    set barcodeStrokeStyleBeforeVerification(e) {
      this._barcodeStrokeStyleBeforeVerification = e,
      this._styleIdBeforeVerification && this.dce.updateDrawingStyle(this._styleIdBeforeVerification, {
        strokeStyle: e
      })
    }
    get barcodeStrokeStyleBeforeVerification() {
      return this._barcodeStrokeStyleBeforeVerification
    }
    set barcodeLineWidthBeforeVerification(e) {
      this._barcodeLineWidthBeforeVerification = e,
      this._styleIdBeforeVerification && this.dce.updateDrawingStyle(this._styleIdBeforeVerification, {
        lineWidth: e
      })
    }
    get barcodeLineWidthBeforeVerification() {
      return this._barcodeLineWidthBeforeVerification
    }
    set regionMaskFillStyle(e) {
      this.dce.setScanRegionMaskStyle({
        fillStyle: e
      })
    }
    get regionMaskFillStyle() {
      return this.dce.regionMaskFillStyle
    }
    set regionMaskStrokeStyle(e) {
      this.dce.setScanRegionMaskStyle({
        strokeStyle: e
      })
    }
    get regionMaskStrokeStyle() {
      return this.dce.regionMaskStrokeStyle
    }
    set regionMaskLineWidth(e) {
      this.dce.setScanRegionMaskStyle({
        lineWidth: e
      })
    }
    get regionMaskLineWidth() {
      return this.dce.regionMaskLineWidth
    }
    set region(e) {
      this._region = e,
      this.dce && (e ? e instanceof Array || this.dce.setScanRegion(e) : this.dce.setScanRegion(null)),
      this.array_decodeFrameTimeCost.length = 0,
      this.array_getFrameTimeCost.length = 0,
      this._intervalGetVideoFrame = 0
    }
    get region() {
      return this._region
    }
    set ifSaveOriginalImageInACanvas(e) {
      this._ifSaveOriginalImageInACanvas = e,
      this.dce.frameColorMode = e ? 'rgba' : 'grey'
    }
    get ifSaveOriginalImageInACanvas() {
      return this._ifSaveOriginalImageInACanvas
    }
    async createDCEInstance() {
      this.dce || (M._onLog && M._onLog('createDCEInstance()'), ne.defaultUIElementURL = null, this.dce = await ne.createInstance(), this.dce.refreshInterval = 200, this.dce.frameColorMode = 'grey', this.dce.maxCvsSideLength = this.maxCvsSideLength, this._drawingItemNamespace = oe, 'iPhone' !== M.browserInfo.OS && 'Android' !== M.browserInfo.OS && 'HarmonyOS' !== M.browserInfo.OS && this.dce.setResolution(1920, 1080), this._styleIdBeforeVerification = this.dce.createDrawingStyle({
        fillStyle: 'rgba(248,252,0,0.2)',
        strokeStyle: 'transparent',
        paintMode: 'strokeAndFill'
      }), this.barcodeLineWidth = this._barcodeLineWidth, this.dce.on('cameraChange', (() =>{
        this._drawResults(null),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0
      })), this.dce.on('resolutionChange', (() =>{
        this._drawResults(null),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0
      })), this.dce.on('cameraClose', (() =>{
        this._drawResults(null),
        this.array_decodeFrameTimeCost.length = 0,
        this.array_getFrameTimeCost.length = 0,
        this._intervalGetVideoFrame = 0,
        this._bPauseScan = !1
      })), this.dce.on('singleFrameAcquired', (async t=>{
        if (!t) return;
        if (!t.data) return;
        let i;
        this.ifSaveOriginalImageInACanvas && (this.oriCanvas = null, this.oriCanvasData = {
          width: t.width,
          height: t.height,
          colorMode: t.colorMode,
          data: new Uint8Array(t.data),
          toCanvas: t.toCanvas
        });
        const {
          data: r,
          sx: n,
          sy: o,
          width: s,
          height: a,
          colorMode: l,
          timeStamp: h,
          _sWidth: c,
          _sHeight: u
        }
        = t,
        d = {
          timeStamp: h
        };
        if ('grey' === l) i = await this._decodeBuffer_Uint8Array(r, s, a, s, e.EnumImagePixelFormat.IPF_GrayScaled, d);
         else if ('rgba' === l) i = await this._decodeBuffer_Uint8Array(r, s, a, 4 * s, e.EnumImagePixelFormat.IPF_ABGR_8888, d);
         else {
          if ('bgra' !== l) throw new Error(`Color mode '${ l }' is not supported.`);
          i = await this._decodeBuffer_Uint8Array(r, s, a, 4 * s, e.EnumImagePixelFormat.IPF_ARGB_8888, d)
        }
        if (await this.clearMapDecodeRecord(), M.recalculateResultLocation(i, n, o, c, u, s, a), this._drawResults(i), this.onFrameRead && this.isOpen() && !this._bPauseScan) {
          let e = this._cloneDecodeResults(i);
          this.onFrameRead(e)
        }
        if (this.onUniqueRead && this.isOpen() && !this._bPauseScan) for (let e of i) this.onUniqueRead(e.barcodeText, this._cloneDecodeResults(e))
      })))
    }
    set maxCvsSideLength(e) {
      this._maxCvsSideLength = e,
      this.dce.maxCvsSideLength = e
    }
    get maxCvsSideLength() {
      return this._maxCvsSideLength
    }
    static async createInstance(e) {
      let t = new se;
      t._instanceID = await se.createInstanceInWorker(!0),
      await t.createDCEInstance(),
      'string' == typeof e && (e = JSON.parse(e));
      for (let i in e) t[i] = e[i];
      return await t.dce.setUIElement(se.defaultUIElementURL),
      t.singleFrameMode && console.warn('The `navigator.mediaDevices.getUserMedia` is unavailable. automatically change to `singleFrameMode`.'),
      se._fireHTTPSWarnning(),
      t.singleFrameMode || await t.updateRuntimeSettings('single'),
      t
    }
    async decodeCurrentFrame(e) {
      this._assertOpen();
      let t = null;
      e && e.region && (t = e.region);
      const i = this.dce._getVideoFrame(t);
      return this._decode_DCEFrame(i)
    }
    async updateRuntimeSettings(t) {
      let i;
      if ('string' == typeof t) if ('speed' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region),
        i.expectedBarcodesCount = 0,
        i.localizationModes = [
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        i.barcodeZoneMinDistanceToImageBorders = 9
      } else if ('balance' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region),
        i.expectedBarcodesCount = 512,
        i.deblurLevel = 3,
        i.localizationModes = [
          2,
          16,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        i.barcodeZoneMinDistanceToImageBorders = 9,
        i.timeout = 100000
      } else if ('coverage' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region),
        i.expectedBarcodesCount = 512,
        i.deblurLevel = 5,
        i.scaleDownThreshold = 100000,
        i.localizationModes = [
          2,
          16,
          4,
          8,
          0,
          0,
          0,
          0
        ],
        i.barcodeZoneMinDistanceToImageBorders = 9,
        i.timeout = 100000
      } else if ('single' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region)
      } else if ('dense' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        this.maxCvsSideLength = 4096,
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region),
        i.expectedBarcodesCount = 0,
        i.deblurLevel = 7,
        i.scaleDownThreshold = 100000,
        i.localizationModes = [
          2,
          8,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        i.minResultConfidence = 0,
        i.barcodeZoneMinDistanceToImageBorders = 9,
        i.timeout = 100000
      } else if ('distance' == t) {
        let e = await this.getRuntimeSettings();
        await this.resetRuntimeSettings(),
        this.maxCvsSideLength = 4096,
        i = await this.getRuntimeSettings(),
        i.barcodeFormatIds = e.barcodeFormatIds,
        i.barcodeFormatIds_2 = e.barcodeFormatIds_2,
        e.region && (i.region = e.region),
        i.expectedBarcodesCount = 0,
        i.scaleDownThreshold = 100000,
        i.localizationModes = [
          2,
          8,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        i.barcodeZoneMinDistanceToImageBorders = 9,
        i.timeout = 100000
      } else i = JSON.parse(t);
       else {
        if ('object' != typeof t) throw TypeError('\'UpdateRuntimeSettings(settings)\': Type of \'settings\' should be \'string\' or \'PlainObject\'.');
        if (i = JSON.parse(JSON.stringify(t)), i.region instanceof Array) {
          let e = t.region;
          [
            e.regionLeft,
            e.regionTop,
            e.regionLeft,
            e.regionBottom,
            e.regionMeasuredByPercentage
          ].some((e=>void 0 !== e)) && (i.region = {
            regionLeft: e.regionLeft || 0,
            regionTop: e.regionTop || 0,
            regionRight: e.regionRight || 0,
            regionBottom: e.regionBottom || 0,
            regionMeasuredByPercentage: e.regionMeasuredByPercentage || 0
          })
        }
      }
      if (!M._bUseFullFeature) {
        if (0 != (i.barcodeFormatIds & ~(e.EnumBarcodeFormat.BF_ONED | e.EnumBarcodeFormat.BF_QR_CODE | e.EnumBarcodeFormat.BF_PDF417 | e.EnumBarcodeFormat.BF_DATAMATRIX)) || 0 != i.barcodeFormatIds_2) throw Error('Some of the specified barcode formats are not supported in the compact version. Please try the full-featured version.');
        if (0 != i.intermediateResultTypes) throw Error('Intermediate results is not supported in the compact version. Please try the full-featured version.')
      }
      {
        let e = i.region;
        if (this.bFilterRegionInJs ? this.userDefinedRegion = JSON.parse(JSON.stringify(e)) : this.userDefinedRegion = null, e instanceof Array) if (e.length) {
          for (let t = 0; t < e.length; ++t) {
            let i = e[t];
            i && ((i.regionLeft || i.regionTop || i.regionRight || i.regionBottom || i.regionMeasuredByPercentage) && (i.regionLeft || i.regionTop || 100 != i.regionRight || 100 != i.regionBottom || !i.regionMeasuredByPercentage) || (e[t] = null))
          }
          this.region = e
        } else this.region = null;
         else e && (e.regionLeft || e.regionTop || e.regionRight || e.regionBottom || e.regionMeasuredByPercentage) && (e.regionLeft || e.regionTop || 100 != e.regionRight || 100 != e.regionBottom || !e.regionMeasuredByPercentage) ? this.region = e : this.region = null;
        this.bFilterRegionInJs && (i.region = {
          regionLeft: 0,
          regionTop: 0,
          regionRight: 0,
          regionBottom: 0,
          regionMeasuredByPercentage: 0
        })
      }
      await new Promise(((e, t) =>{
        let r = M._nextTaskID++;
        M._taskCallbackMap.set(r, (i=>{
          if (i.success) {
            try {
              this._handleRetJsonString(i.updateReturn)
            } catch (e) {
              t(e)
            }
            return e()
          }
          {
            let e = new Error(i.message);
            return e.stack = i.stack + '\n' + e.stack,
            t(e)
          }
        })),
        M._dbrWorker.postMessage({
          type: 'updateRuntimeSettings',
          id: r,
          instanceID: this._instanceID,
          body: {
            settings: JSON.stringify(i)
          }
        })
      })),
      'string' == typeof t && [
        'speed',
        'balance',
        'coverage',
        'dense',
        'distance'
      ].includes(t) && (await this.setModeArgument('BinarizationModes', 0, 'EnableFillBinaryVacancy', '1'), await this.setModeArgument('BinarizationModes', 0, 'BlockSizeX', '0'), await this.setModeArgument('BinarizationModes', 0, 'BlockSizeY', '0'))
    }
    _bindUI() {
      if (!this.getUIElement()) throw new Error('Need to define `UIElement` before opening.');
      if (this.dce._bindUI(), !this.dce.video) throw this._unbindUI(),
      Error('Can not find the video container element with class \'dce-video-container\'')
    }
    _unbindUI() {
      this.dce._unbindUI()
    }
    set onPlayed(e) {
      this.dce.off('played', this._onPlayed),
      this._onPlayed = e,
      this.dce.on('played', this._onPlayed)
    }
    get onPlayed() {
      return this._onPlayed
    }
    async getAllCameras() {
      return this.dce.getAllCameras()
    }
    async getCurrentCamera() {
      return this.dce.getSelectedCamera()
    }
    async setCurrentCamera(e) {
      const t = await this.dce.selectCamera(e);
      return this._fireResolutionWarning(),
      t
    }
    getResolution() {
      return this.dce.getResolution()
    }
    async setResolution(e, t) {
      const i = await this.dce.setResolution(e, t);
      return this._fireResolutionWarning(),
      i
    }
    getVideoSettings() {
      return this.dce.getVideoSettings()
    }
    updateVideoSettings(e) {
      return this.dce.updateVideoSettings(e)
    }
    isOpen() {
      return this.dce && this.dce.isOpen()
    }
    setVideoFit(e) {
      return this.dce && this.dce.setVideoFit(e)
    }
    set ifShowScanRegionMask(e) {
      this.dce && (this.dce.ifShowScanRegionMask = e)
    }
    get ifShowScanRegionMask() {
      return this.dce && this.dce.ifShowScanRegionMask
    }
    set ifSaveLastUsedCamera(e) {
      this.dce && (this.dce.ifSaveLastUsedCamera = e)
    }
    get ifSaveLastUsedCamera() {
      return this.dce && this.dce.ifSaveLastUsedCamera
    }
    set ifSkipCameraInspection(e) {
      this.dce && (this.dce.ifSkipCameraInspection = e)
    }
    get ifSkipCameraInspection() {
      return this.dce && this.dce.ifSkipCameraInspection
    }
    stop() {
      this._drawResults(null),
      this.dce.stop(),
      this.dce.ifShowScanRegionLaser = !1,
      this.dce.hideViewDecorator(),
      this.array_decodeFrameTimeCost.length = 0,
      this.array_getFrameTimeCost.length = 0,
      this._intervalGetVideoFrame = 0
    }
    pause() {
      this.dce.pause()
    }
    async play(e, t, i) {
      this.dce.ifShowScanRegionLaser = !0;
      const r = await this.dce.play(e, t, i);
      return this._fireResolutionWarning(),
      r
    }
    pauseScan(e) {
      this._assertOpen(),
      e && e.keepResultsHighlighted || this._drawResults(null),
      this._bPauseScan = !0,
      this.dce.ifShowScanRegionLaser = !1,
      this.dce.stopFetchingLoop()
    }
    resumeScan() {
      this._assertOpen(),
      this._bPauseScan = !1,
      this.dce.ifShowScanRegionLaser = !0
    }
    getCapabilities() {
      return this.dce.getCapabilities()
    }
    getCameraSettings() {
      return this.dce.getCameraSettings()
    }
    getConstraints() {
      return this.dce.getConstraints()
    }
    async applyConstraints(e) {
      return this.dce.applyConstraints(e)
    }
    async turnOnTorch() {
      return this.dce.turnOnTorch()
    }
    async turnOffTorch() {
      return this.dce.turnOffTorch()
    }
    async setColorTemperature(e) {
      return this.dce.setColorTemperature(e)
    }
    async setExposureCompensation(e) {
      return this.dce.setExposureCompensation(e)
    }
    async setZoom(e) {
      return this.dce.setZoom(e)
    }
    async setFrameRate(e) {
      return this.dce.setFrameRate(e)
    }
    getFrameRate() {
      return this.dce.getFrameRate()
    }
    async setFocus(e, t) {
      return this.dce.setFocus(e, t)
    }
    getFocus() {
      return this.dce.getFocus()
    }
    async _loopReadVideo() {
      if (this.bDestroyed) return this.dce && this.dce.stopFetchingLoop(),
      void this._drawResults(null);
      if (!this.isOpen()) return this._drawResults(null),
      void await this.clearMapDecodeRecord();
      if (!this.dce.video || this.dce.video.paused || this._bPauseScan) return M._onLog && M._onLog('Video or scan is paused. Ask in 1s.'),
      await this.clearMapDecodeRecord(),
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
      void (this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), this._intervalDetectVideoPause));
      M._onLog && M._onLog('======= once read ======='),
      M._onLog && (this._timeStartDecode = Date.now());
      const t = this._getVideoFrame();
      if (!t) return M._onLog && M._onLog('Get invalid frame.'),
      this._drawResults(null),
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
      void (this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0));
      (async() =>{
        t._bUseWebGL || 'grey' !== t.colorMode || (this.dce.frameColorMode = 'rgba');
        let i = [
        ];
        this.ifSaveOriginalImageInACanvas && (this.oriCanvas = null, this.oriCanvasData = {
          width: t.width,
          height: t.height,
          colorMode: t.colorMode,
          data: new Uint8Array(t.data),
          toCanvas: t.toCanvas
        });
        const {
          data: r,
          sx: n,
          sy: o,
          width: s,
          height: a,
          colorMode: l,
          timeStamp: h,
          _sWidth: c,
          _sHeight: u
        }
        = t,
        d = {
          timeStamp: h
        };
        if ('grey' === l) i = await this._decodeBuffer_Uint8Array(r, s, a, s, e.EnumImagePixelFormat.IPF_GrayScaled, d);
         else if ('rgba' === l) i = await this._decodeBuffer_Uint8Array(r, s, a, 4 * s, e.EnumImagePixelFormat.IPF_ABGR_8888, d);
         else {
          if ('bgra' !== l) throw new Error(`Color mode '${ l }' is not supported.`);
          i = await this._decodeBuffer_Uint8Array(r, s, a, 4 * s, e.EnumImagePixelFormat.IPF_ARGB_8888, d)
        }
        return M.recalculateResultLocation(i, n, o, c, u, s, a),
        this._drawResults(i),
        i
      }) ().then((e=>{
        if (M._onLog && M._onLog(e), this.captureAndDecodeInParallel) {
          let e = this.array_decodeFrameTimeCost,
          t = this.array_getFrameTimeCost,
          i = this._indexCurrentDecodingFrame;
          const r = () =>{
            let r = 0;
            if (this.region instanceof Array) {
              let n = 0,
              o = 0;
              n = i + 1 >= this.region.length ? 0 : i + 1,
              o = n + 1 >= this.region.length ? 0 : n + 1,
              r = e[n] && e[n].length && t[o] && t[o].length ? Math.min(...e[n]) - Math.max(...t[o]) : 0
            } else if (t && t.length) {
              let i = Math.min(...e),
              n = Math.max(...t);
              i && n && (r = i - n)
            } else r = 0;
            return r > 0 ? r : 0
          };
          (() =>{
            if (this.region instanceof Array) {
              for (e[i] && e[i] instanceof Array || (e[i] = [
              ]); e[i].length >= 5; ) e[i].shift();
              e[i].push(this._lastInnerDecodeDuration)
            } else {
              for (; e.length >= 5; ) e.shift();
              e.push(this._lastInnerDecodeDuration)
            }
          }) (),
          this._intervalGetVideoFrame = r() + this.intervalTime,
          M._onLog && M._onLog('Next fetching frame loop interval: ' + this._intervalGetVideoFrame)
        }
        if (this.isOpen() && this.dce.video && !this.dce.video.paused && !this._bPauseScan) {
          if (this.bPlaySoundOnSuccessfulRead && e.length) {
            let t = !1;
            !0 === this.bPlaySoundOnSuccessfulRead || 'frame' === this.bPlaySoundOnSuccessfulRead ? t = e.some((e=>e.resultState >= 0)) : 'unique' === this.bPlaySoundOnSuccessfulRead && (t = e.some((e=>0 === e.resultState))),
            t && (this.beepSound.stop(), this.beepSound.play())
          }
          if (navigator.vibrate && this.bVibrateOnSuccessfulRead && e.length) {
            let t = !1;
            if (!0 === this.bVibrateOnSuccessfulRead || 'frame' === this.bVibrateOnSuccessfulRead ? t = e.some((e=>e.resultState >= 0)) : 'unique' === this.bVibrateOnSuccessfulRead && (t = e.some((e=>0 === e.resultState))), t) try {
              navigator.vibrate(this.vibrateDuration)
            } catch (e) {
              console.warn('Vibration not allowed. User interaction required: ' + (e.message || e))
            }
          }
          if (this.onFrameRead) {
            e = e.filter((e=>e.resultState >= 0));
            const t = this._cloneDecodeResults(e);
            this.onFrameRead(t)
          }
          if (this.onUniqueRead) {
            e = e.filter((e=>0 == e.resultState));
            const t = this._cloneDecodeResults(e);
            for (let e of t) this.onUniqueRead(e.barcodeText, e)
          }
        }
        this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
        this.intervalTime ? this._loopReadVideoTimeoutId = setTimeout((() =>{
          this._loopReadVideo()
        }), this.intervalTime) : this._loopReadVideo()
      })).catch((e=>{
        this.dce.stopFetchingLoop(),
        M._onLog && M._onLog(e.message || e),
        this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId),
        this._loopReadVideoTimeoutId = setTimeout((() =>{
          this._loopReadVideo()
        }), Math.max(this.intervalTime, 1000)),
        'platform error' == e.message || console.warn(e.message || e)
      }))
    }
    _getVideoFrame() {
      if (!this.dce) return null;
      let e;
      if (this.captureAndDecodeInParallel) {
        M._onLog && M._onLog('Get frame in parallel.');
        let t = this.dce.isFetchingLoopStarted();
        if (this.dce.loopInterval = this._intervalGetVideoFrame, t || this.dce.startFetchingLoop(), !this.dce.numberOfFramesInBuffer) return this.dce.loopInterval = 0,
        null;
        e = this.dce.getFrameFromBuffer();
        const i = e=>{
          if (!e) return;
          let t = e.timeSpent,
          i = this.array_getFrameTimeCost;
          for (; i.length >= 5; ) i.shift();
          i.push(t)
        };
        i(e)
      } else M._onLog && M._onLog('Get frame in serial.'),
      this.dce.stopFetchingLoop(),
      e = this.dce.getFrame();
      return e
    }
    async open() {
      this._bindUI();
      const e = await this.dce.open();
      return this._bPauseScan = !1,
      this.singleFrameMode || (this.dce && (this.dce.ifShowScanRegionLaser = !0), this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId), this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0)),
      this._fireResolutionWarning(),
      this.keepAlive(),
      e
    }
    async openVideo() {
      this._bindUI(),
      this.dce.ifShowScanRegionLaser = !1;
      const e = await this.dce.open();
      return this._bPauseScan = !0,
      this.singleFrameMode || (this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId), this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0)),
      this._fireResolutionWarning(),
      this.keepAlive(),
      e
    }
    close() {
      this.dce.close(),
      this._bPauseScan = !0,
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId)
    }
    async show() {
      this._bindUI();
      const e = await this.dce.open(!0);
      return this._bPauseScan = !1,
      this.singleFrameMode || (this.dce && (this.dce.ifShowScanRegionLaser = !0), this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId), this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0)),
      this._fireResolutionWarning(),
      this.keepAlive(),
      e
    }
    async showVideo() {
      this._bindUI(),
      this.dce.ifShowScanRegionLaser = !1;
      const e = await this.dce.open(!0);
      return this._bPauseScan = !0,
      this.singleFrameMode || (this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId), this._loopReadVideoTimeoutId = setTimeout((() =>{
        this._loopReadVideo()
      }), 0)),
      this._fireResolutionWarning(),
      this.keepAlive(),
      e
    }
    hide() {
      this.dce.close(!0),
      this._bPauseScan = !0,
      this._loopReadVideoTimeoutId && clearTimeout(this._loopReadVideoTimeoutId)
    }
    destroyContext() {
      this.close(),
      this.dce && this.dce.dispose(!1),
      this.bDestroyed || super.destroyContext()
    }
  }
  var ae,
  le,
  he,
  ce,
  ue,
  de,
  fe,
  ge,
  _e,
  pe,
  me,
  ve,
  ye,
  Se,
  be,
  Ce,
  we,
  Te,
  xe,
  Ee,
  Ae,
  Ie,
  Oe,
  Re,
  De,
  Me,
  Le;
  e.EnumBarcodeColourMode = void 0,
  (ae = e.EnumBarcodeColourMode || (e.EnumBarcodeColourMode = {
  })) [ae.BICM_DARK_ON_LIGHT = 1] = 'BICM_DARK_ON_LIGHT',
  ae[ae.BICM_LIGHT_ON_DARK = 2] = 'BICM_LIGHT_ON_DARK',
  ae[ae.BICM_DARK_ON_DARK = 4] = 'BICM_DARK_ON_DARK',
  ae[ae.BICM_LIGHT_ON_LIGHT = 8] = 'BICM_LIGHT_ON_LIGHT',
  ae[ae.BICM_DARK_LIGHT_MIXED = 16] = 'BICM_DARK_LIGHT_MIXED',
  ae[ae.BICM_DARK_ON_LIGHT_DARK_SURROUNDING = 32] = 'BICM_DARK_ON_LIGHT_DARK_SURROUNDING',
  ae[ae.BICM_SKIP = 0] = 'BICM_SKIP',
  ae[ae.BICM_REV = 2147483648] = 'BICM_REV',
  e.EnumBarcodeComplementMode = void 0,
  (le = e.EnumBarcodeComplementMode || (e.EnumBarcodeComplementMode = {
  })) [le.BCM_AUTO = 1] = 'BCM_AUTO',
  le[le.BCM_GENERAL = 2] = 'BCM_GENERAL',
  le[le.BCM_SKIP = 0] = 'BCM_SKIP',
  le[le.BCM_REV = 2147483648] = 'BCM_REV',
  e.EnumBarcodeFormat_2 = void 0,
  (he = e.EnumBarcodeFormat_2 || (e.EnumBarcodeFormat_2 = {
  })) [he.BF2_NULL = 0] = 'BF2_NULL',
  he[he.BF2_POSTALCODE = 32505856] = 'BF2_POSTALCODE',
  he[he.BF2_NONSTANDARD_BARCODE = 1] = 'BF2_NONSTANDARD_BARCODE',
  he[he.BF2_USPSINTELLIGENTMAIL = 1048576] = 'BF2_USPSINTELLIGENTMAIL',
  he[he.BF2_POSTNET = 2097152] = 'BF2_POSTNET',
  he[he.BF2_PLANET = 4194304] = 'BF2_PLANET',
  he[he.BF2_AUSTRALIANPOST = 8388608] = 'BF2_AUSTRALIANPOST',
  he[he.BF2_RM4SCC = 16777216] = 'BF2_RM4SCC',
  he[he.BF2_DOTCODE = 2] = 'BF2_DOTCODE',
  he[he.BF2_PHARMACODE_ONE_TRACK = 4] = 'BF2_PHARMACODE_ONE_TRACK',
  he[he.BF2_PHARMACODE_TWO_TRACK = 8] = 'BF2_PHARMACODE_TWO_TRACK',
  he[he.BF2_PHARMACODE = 12] = 'BF2_PHARMACODE',
  e.EnumBinarizationMode = void 0,
  (ce = e.EnumBinarizationMode || (e.EnumBinarizationMode = {
  })) [ce.BM_AUTO = 1] = 'BM_AUTO',
  ce[ce.BM_LOCAL_BLOCK = 2] = 'BM_LOCAL_BLOCK',
  ce[ce.BM_SKIP = 0] = 'BM_SKIP',
  ce[ce.BM_THRESHOLD = 4] = 'BM_THRESHOLD',
  ce[ce.BM_REV = 2147483648] = 'BM_REV',
  e.EnumClarityCalculationMethod = void 0,
  (ue = e.EnumClarityCalculationMethod || (e.EnumClarityCalculationMethod = {
  })) [ue.ECCM_CONTRAST = 1] = 'ECCM_CONTRAST',
  e.EnumClarityFilterMode = void 0,
  (de = e.EnumClarityFilterMode || (e.EnumClarityFilterMode = {
  })) [de.CFM_GENERAL = 1] = 'CFM_GENERAL',
  e.EnumColourClusteringMode = void 0,
  (fe = e.EnumColourClusteringMode || (e.EnumColourClusteringMode = {
  })) [fe.CCM_AUTO = 1] = 'CCM_AUTO',
  fe[fe.CCM_GENERAL_HSV = 2] = 'CCM_GENERAL_HSV',
  fe[fe.CCM_SKIP = 0] = 'CCM_SKIP',
  fe[fe.CCM_REV = 2147483648] = 'CCM_REV',
  e.EnumColourConversionMode = void 0,
  (ge = e.EnumColourConversionMode || (e.EnumColourConversionMode = {
  })) [ge.CICM_GENERAL = 1] = 'CICM_GENERAL',
  ge[ge.CICM_SKIP = 0] = 'CICM_SKIP',
  ge[ge.CICM_REV = 2147483648] = 'CICM_REV',
  e.EnumConflictMode = void 0,
  (_e = e.EnumConflictMode || (e.EnumConflictMode = {
  })) [_e.CM_IGNORE = 1] = 'CM_IGNORE',
  _e[_e.CM_OVERWRITE = 2] = 'CM_OVERWRITE',
  e.EnumDeblurMode = void 0,
  (pe = e.EnumDeblurMode || (e.EnumDeblurMode = {
  })) [pe.DM_SKIP = 0] = 'DM_SKIP',
  pe[pe.DM_DIRECT_BINARIZATION = 1] = 'DM_DIRECT_BINARIZATION',
  pe[pe.DM_THRESHOLD_BINARIZATION = 2] = 'DM_THRESHOLD_BINARIZATION',
  pe[pe.DM_GRAY_EQUALIZATION = 4] = 'DM_GRAY_EQUALIZATION',
  pe[pe.DM_SMOOTHING = 8] = 'DM_SMOOTHING',
  pe[pe.DM_MORPHING = 16] = 'DM_MORPHING',
  pe[pe.DM_DEEP_ANALYSIS = 32] = 'DM_DEEP_ANALYSIS',
  pe[pe.DM_SHARPENING = 64] = 'DM_SHARPENING',
  pe[pe.DM_BASED_ON_LOC_BIN = 128] = 'DM_BASED_ON_LOC_BIN',
  pe[pe.DM_SHARPENING_SMOOTHING = 256] = 'DM_SHARPENING_SMOOTHING',
  e.EnumDeformationResistingMode = void 0,
  (me = e.EnumDeformationResistingMode || (e.EnumDeformationResistingMode = {
  })) [me.DRM_AUTO = 1] = 'DRM_AUTO',
  me[me.DRM_GENERAL = 2] = 'DRM_GENERAL',
  me[me.DRM_BROAD_WARP = 4] = 'DRM_BROAD_WARP',
  me[me.DRM_LOCAL_REFERENCE = 8] = 'DRM_LOCAL_REFERENCE',
  me[me.DRM_DEWRINKLE = 16] = 'DRM_DEWRINKLE',
  me[me.DRM_SKIP = 0] = 'DRM_SKIP',
  me[me.DRM_REV = 2147483648] = 'DRM_REV',
  e.EnumDPMCodeReadingMode = void 0,
  (ve = e.EnumDPMCodeReadingMode || (e.EnumDPMCodeReadingMode = {
  })) [ve.DPMCRM_AUTO = 1] = 'DPMCRM_AUTO',
  ve[ve.DPMCRM_GENERAL = 2] = 'DPMCRM_GENERAL',
  ve[ve.DPMCRM_SKIP = 0] = 'DPMCRM_SKIP',
  ve[ve.DPMCRM_REV = 2147483648] = 'DPMCRM_REV',
  e.EnumGrayscaleTransformationMode = void 0,
  (ye = e.EnumGrayscaleTransformationMode || (e.EnumGrayscaleTransformationMode = {
  })) [ye.GTM_INVERTED = 1] = 'GTM_INVERTED',
  ye[ye.GTM_ORIGINAL = 2] = 'GTM_ORIGINAL',
  ye[ye.GTM_SKIP = 0] = 'GTM_SKIP',
  ye[ye.GTM_REV = 2147483648] = 'GTM_REV',
  e.EnumImagePreprocessingMode = void 0,
  (Se = e.EnumImagePreprocessingMode || (e.EnumImagePreprocessingMode = {
  })) [Se.IPM_AUTO = 1] = 'IPM_AUTO',
  Se[Se.IPM_GENERAL = 2] = 'IPM_GENERAL',
  Se[Se.IPM_GRAY_EQUALIZE = 4] = 'IPM_GRAY_EQUALIZE',
  Se[Se.IPM_GRAY_SMOOTH = 8] = 'IPM_GRAY_SMOOTH',
  Se[Se.IPM_SHARPEN_SMOOTH = 16] = 'IPM_SHARPEN_SMOOTH',
  Se[Se.IPM_MORPHOLOGY = 32] = 'IPM_MORPHOLOGY',
  Se[Se.IPM_SKIP = 0] = 'IPM_SKIP',
  Se[Se.IPM_REV = 2147483648] = 'IPM_REV',
  e.EnumIntermediateResultSavingMode = void 0,
  (be = e.EnumIntermediateResultSavingMode || (e.EnumIntermediateResultSavingMode = {
  })) [be.IRSM_MEMORY = 1] = 'IRSM_MEMORY',
  be[be.IRSM_FILESYSTEM = 2] = 'IRSM_FILESYSTEM',
  be[be.IRSM_BOTH = 4] = 'IRSM_BOTH',
  e.EnumIntermediateResultType = void 0,
  (Ce = e.EnumIntermediateResultType || (e.EnumIntermediateResultType = {
  })) [Ce.IRT_NO_RESULT = 0] = 'IRT_NO_RESULT',
  Ce[Ce.IRT_ORIGINAL_IMAGE = 1] = 'IRT_ORIGINAL_IMAGE',
  Ce[Ce.IRT_COLOUR_CLUSTERED_IMAGE = 2] = 'IRT_COLOUR_CLUSTERED_IMAGE',
  Ce[Ce.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE = 4] = 'IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE',
  Ce[Ce.IRT_TRANSFORMED_GRAYSCALE_IMAGE = 8] = 'IRT_TRANSFORMED_GRAYSCALE_IMAGE',
  Ce[Ce.IRT_PREDETECTED_REGION = 16] = 'IRT_PREDETECTED_REGION',
  Ce[Ce.IRT_PREPROCESSED_IMAGE = 32] = 'IRT_PREPROCESSED_IMAGE',
  Ce[Ce.IRT_BINARIZED_IMAGE = 64] = 'IRT_BINARIZED_IMAGE',
  Ce[Ce.IRT_TEXT_ZONE = 128] = 'IRT_TEXT_ZONE',
  Ce[Ce.IRT_CONTOUR = 256] = 'IRT_CONTOUR',
  Ce[Ce.IRT_LINE_SEGMENT = 512] = 'IRT_LINE_SEGMENT',
  Ce[Ce.IRT_FORM = 1024] = 'IRT_FORM',
  Ce[Ce.IRT_SEGMENTATION_BLOCK = 2048] = 'IRT_SEGMENTATION_BLOCK',
  Ce[Ce.IRT_TYPED_BARCODE_ZONE = 4096] = 'IRT_TYPED_BARCODE_ZONE',
  Ce[Ce.IRT_PREDETECTED_QUADRILATERAL = 8192] = 'IRT_PREDETECTED_QUADRILATERAL',
  e.EnumLocalizationMode = void 0,
  (we = e.EnumLocalizationMode || (e.EnumLocalizationMode = {
  })) [we.LM_SKIP = 0] = 'LM_SKIP',
  we[we.LM_AUTO = 1] = 'LM_AUTO',
  we[we.LM_CONNECTED_BLOCKS = 2] = 'LM_CONNECTED_BLOCKS',
  we[we.LM_LINES = 8] = 'LM_LINES',
  we[we.LM_STATISTICS = 4] = 'LM_STATISTICS',
  we[we.LM_SCAN_DIRECTLY = 16] = 'LM_SCAN_DIRECTLY',
  we[we.LM_STATISTICS_MARKS = 32] = 'LM_STATISTICS_MARKS',
  we[we.LM_STATISTICS_POSTAL_CODE = 64] = 'LM_STATISTICS_POSTAL_CODE',
  we[we.LM_CENTRE = 128] = 'LM_CENTRE',
  we[we.LM_ONED_FAST_SCAN = 256] = 'LM_ONED_FAST_SCAN',
  we[we.LM_REV = 2147483648] = 'LM_REV',
  e.EnumPDFReadingMode = void 0,
  (Te = e.EnumPDFReadingMode || (e.EnumPDFReadingMode = {
  })) [Te.PDFRM_RASTER = 1] = 'PDFRM_RASTER',
  Te[Te.PDFRM_AUTO = 2] = 'PDFRM_AUTO',
  Te[Te.PDFRM_VECTOR = 4] = 'PDFRM_VECTOR',
  Te[Te.PDFRM_REV = 2147483648] = 'PDFRM_REV',
  e.EnumQRCodeErrorCorrectionLevel = void 0,
  (xe = e.EnumQRCodeErrorCorrectionLevel || (e.EnumQRCodeErrorCorrectionLevel = {
  })) [xe.QRECL_ERROR_CORRECTION_H = 0] = 'QRECL_ERROR_CORRECTION_H',
  xe[xe.QRECL_ERROR_CORRECTION_L = 1] = 'QRECL_ERROR_CORRECTION_L',
  xe[xe.QRECL_ERROR_CORRECTION_M = 2] = 'QRECL_ERROR_CORRECTION_M',
  xe[xe.QRECL_ERROR_CORRECTION_Q = 3] = 'QRECL_ERROR_CORRECTION_Q',
  e.EnumRegionPredetectionMode = void 0,
  (Ee = e.EnumRegionPredetectionMode || (e.EnumRegionPredetectionMode = {
  })) [Ee.RPM_AUTO = 1] = 'RPM_AUTO',
  Ee[Ee.RPM_GENERAL = 2] = 'RPM_GENERAL',
  Ee[Ee.RPM_GENERAL_RGB_CONTRAST = 4] = 'RPM_GENERAL_RGB_CONTRAST',
  Ee[Ee.RPM_GENERAL_GRAY_CONTRAST = 8] = 'RPM_GENERAL_GRAY_CONTRAST',
  Ee[Ee.RPM_GENERAL_HSV_CONTRAST = 16] = 'RPM_GENERAL_HSV_CONTRAST',
  Ee[Ee.RPM_SKIP = 0] = 'RPM_SKIP',
  Ee[Ee.RPM_REV = 2147483648] = 'RPM_REV',
  e.EnumResultCoordinateType = void 0,
  (Ae = e.EnumResultCoordinateType || (e.EnumResultCoordinateType = {
  })) [Ae.RCT_PIXEL = 1] = 'RCT_PIXEL',
  Ae[Ae.RCT_PERCENTAGE = 2] = 'RCT_PERCENTAGE',
  e.EnumResultType = void 0,
  (Ie = e.EnumResultType || (e.EnumResultType = {
  })) [Ie.RT_STANDARD_TEXT = 0] = 'RT_STANDARD_TEXT',
  Ie[Ie.RT_RAW_TEXT = 1] = 'RT_RAW_TEXT',
  Ie[Ie.RT_CANDIDATE_TEXT = 2] = 'RT_CANDIDATE_TEXT',
  Ie[Ie.RT_PARTIAL_TEXT = 3] = 'RT_PARTIAL_TEXT',
  e.EnumScaleUpMode = void 0,
  (Oe = e.EnumScaleUpMode || (e.EnumScaleUpMode = {
  })) [Oe.SUM_AUTO = 1] = 'SUM_AUTO',
  Oe[Oe.SUM_LINEAR_INTERPOLATION = 2] = 'SUM_LINEAR_INTERPOLATION',
  Oe[Oe.SUM_NEAREST_NEIGHBOUR_INTERPOLATION = 4] = 'SUM_NEAREST_NEIGHBOUR_INTERPOLATION',
  Oe[Oe.SUM_SKIP = 0] = 'SUM_SKIP',
  Oe[Oe.SUM_REV = 2147483648] = 'SUM_REV',
  e.EnumTerminatePhase = void 0,
  (Re = e.EnumTerminatePhase || (e.EnumTerminatePhase = {
  })) [Re.TP_REGION_PREDETECTED = 1] = 'TP_REGION_PREDETECTED',
  Re[Re.TP_IMAGE_PREPROCESSED = 2] = 'TP_IMAGE_PREPROCESSED',
  Re[Re.TP_IMAGE_BINARIZED = 4] = 'TP_IMAGE_BINARIZED',
  Re[Re.TP_BARCODE_LOCALIZED = 8] = 'TP_BARCODE_LOCALIZED',
  Re[Re.TP_BARCODE_TYPE_DETERMINED = 16] = 'TP_BARCODE_TYPE_DETERMINED',
  Re[Re.TP_BARCODE_RECOGNIZED = 32] = 'TP_BARCODE_RECOGNIZED',
  e.EnumTextFilterMode = void 0,
  (De = e.EnumTextFilterMode || (e.EnumTextFilterMode = {
  })) [De.TFM_AUTO = 1] = 'TFM_AUTO',
  De[De.TFM_GENERAL_CONTOUR = 2] = 'TFM_GENERAL_CONTOUR',
  De[De.TFM_SKIP = 0] = 'TFM_SKIP',
  De[De.TFM_REV = 2147483648] = 'TFM_REV',
  e.EnumTextResultOrderMode = void 0,
  (Me = e.EnumTextResultOrderMode || (e.EnumTextResultOrderMode = {
  })) [Me.TROM_CONFIDENCE = 1] = 'TROM_CONFIDENCE',
  Me[Me.TROM_POSITION = 2] = 'TROM_POSITION',
  Me[Me.TROM_FORMAT = 4] = 'TROM_FORMAT',
  Me[Me.TROM_SKIP = 0] = 'TROM_SKIP',
  Me[Me.TROM_REV = 2147483648] = 'TROM_REV',
  e.EnumTextureDetectionMode = void 0,
  (Le = e.EnumTextureDetectionMode || (e.EnumTextureDetectionMode = {
  })) [Le.TDM_AUTO = 1] = 'TDM_AUTO',
  Le[Le.TDM_GENERAL_WIDTH_CONCENTRATION = 2] = 'TDM_GENERAL_WIDTH_CONCENTRATION',
  Le[Le.TDM_SKIP = 0] = 'TDM_SKIP',
  Le[Le.TDM_REV = 2147483648] = 'TDM_REV',
  e.BarcodeReader = M,
  e.BarcodeScanner = se,
  Object.defineProperty(e, '__esModule', {
    value: !0
  })
}));