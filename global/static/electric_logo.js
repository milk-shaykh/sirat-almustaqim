function Vv(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var ws = { exports: {} }, ht = {};
var v1;
function Qv() {
  if (v1) return ht;
  v1 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), C = Symbol.iterator;
  function H(E) {
    return E === null || typeof E != "object" ? null : (E = C && E[C] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var w = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, q = {};
  function lt(E, B, Q) {
    this.props = E, this.context = B, this.refs = q, this.updater = Q || w;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, lt.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function $() {
  }
  $.prototype = lt.prototype;
  function L(E, B, Q) {
    this.props = E, this.context = B, this.refs = q, this.updater = Q || w;
  }
  var k = L.prototype = new $();
  k.constructor = L, R(k, lt.prototype), k.isPureReactComponent = !0;
  var I = Array.isArray;
  function K() {
  }
  var V = { H: null, A: null, T: null, S: null }, ct = Object.prototype.hasOwnProperty;
  function J(E, B, Q) {
    var tt = Q.ref;
    return {
      $$typeof: f,
      type: E,
      key: B,
      ref: tt !== void 0 ? tt : null,
      props: Q
    };
  }
  function rt(E, B) {
    return J(E.type, B, E.props);
  }
  function vt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === f;
  }
  function ot(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Q) {
      return B[Q];
    });
  }
  var et = /\/+/g;
  function zt(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? ot("" + E.key) : B.toString(36);
  }
  function G(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(K, K) : (E.status = "pending", E.then(
          function(B) {
            E.status === "pending" && (E.status = "fulfilled", E.value = B);
          },
          function(B) {
            E.status === "pending" && (E.status = "rejected", E.reason = B);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Y(E, B, Q, tt, mt) {
    var pt = typeof E;
    (pt === "undefined" || pt === "boolean") && (E = null);
    var bt = !1;
    if (E === null) bt = !0;
    else
      switch (pt) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case f:
            case u:
              bt = !0;
              break;
            case T:
              return bt = E._init, Y(
                bt(E._payload),
                B,
                Q,
                tt,
                mt
              );
          }
      }
    if (bt)
      return mt = mt(E), bt = tt === "" ? "." + zt(E, 0) : tt, I(mt) ? (Q = "", bt != null && (Q = bt.replace(et, "$&/") + "/"), Y(mt, B, Q, "", function(gl) {
        return gl;
      })) : mt != null && (vt(mt) && (mt = rt(
        mt,
        Q + (mt.key == null || E && E.key === mt.key ? "" : ("" + mt.key).replace(
          et,
          "$&/"
        ) + "/") + bt
      )), B.push(mt)), 1;
    bt = 0;
    var P = tt === "" ? "." : tt + ":";
    if (I(E))
      for (var nt = 0; nt < E.length; nt++)
        tt = E[nt], pt = P + zt(tt, nt), bt += Y(
          tt,
          B,
          Q,
          pt,
          mt
        );
    else if (nt = H(E), typeof nt == "function")
      for (E = nt.call(E), nt = 0; !(tt = E.next()).done; )
        tt = tt.value, pt = P + zt(tt, nt++), bt += Y(
          tt,
          B,
          Q,
          pt,
          mt
        );
    else if (pt === "object") {
      if (typeof E.then == "function")
        return Y(
          G(E),
          B,
          Q,
          tt,
          mt
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return bt;
  }
  function ut(E, B, Q) {
    if (E == null) return E;
    var tt = [], mt = 0;
    return Y(E, tt, "", "", function(pt) {
      return B.call(Q, pt, mt++);
    }), tt;
  }
  function j(E) {
    if (E._status === -1) {
      var B = E._result, Q = B();
      Q.then(
        function(tt) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = tt, Q.status === void 0 && (Q.status = "fulfilled", Q.value = tt));
        },
        function(tt) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = tt, Q.status === void 0 && (Q.status = "rejected", Q.reason = tt));
        }
      ), E._status === -1 && (E._status = 0, E._result = Q);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var F = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function it(E) {
    var B = V.T, Q = {};
    Q.types = B !== null ? B.types : null, V.T = Q;
    try {
      var tt = E(), mt = V.S;
      mt !== null && mt(Q, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(K, F);
    } catch (pt) {
      F(pt);
    } finally {
      B !== null && Q.types !== null && (B.types = Q.types), V.T = B;
    }
  }
  function Ct(E) {
    var B = V.T;
    if (B !== null) {
      var Q = B.types;
      Q === null ? B.types = [E] : Q.indexOf(E) === -1 && Q.push(E);
    } else it(Ct.bind(null, E));
  }
  var Zt = {
    map: ut,
    forEach: function(E, B, Q) {
      ut(
        E,
        function() {
          B.apply(this, arguments);
        },
        Q
      );
    },
    count: function(E) {
      var B = 0;
      return ut(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return ut(E, function(B) {
        return B;
      }) || [];
    },
    only: function(E) {
      if (!vt(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return ht.Activity = y, ht.Children = Zt, ht.Component = lt, ht.Fragment = c, ht.Profiler = o, ht.PureComponent = L, ht.StrictMode = s, ht.Suspense = v, ht.ViewTransition = x, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return V.H.useMemoCache(E);
    }
  }, ht.addTransitionType = Ct, ht.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(E, B, Q) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var tt = R({}, E.props), mt = E.key;
    if (B != null)
      for (pt in B.key !== void 0 && (mt = "" + B.key), B)
        !ct.call(B, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && B.ref === void 0 || (tt[pt] = B[pt]);
    var pt = arguments.length - 2;
    if (pt === 1) tt.children = Q;
    else if (1 < pt) {
      for (var bt = Array(pt), P = 0; P < pt; P++)
        bt[P] = arguments[P + 2];
      tt.children = bt;
    }
    return J(E.type, mt, tt);
  }, ht.createContext = function(E) {
    return E = {
      $$typeof: g,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: d,
      _context: E
    }, E;
  }, ht.createElement = function(E, B, Q) {
    var tt, mt = {}, pt = null;
    if (B != null)
      for (tt in B.key !== void 0 && (pt = "" + B.key), B)
        ct.call(B, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (mt[tt] = B[tt]);
    var bt = arguments.length - 2;
    if (bt === 1) mt.children = Q;
    else if (1 < bt) {
      for (var P = Array(bt), nt = 0; nt < bt; nt++)
        P[nt] = arguments[nt + 2];
      mt.children = P;
    }
    if (E && E.defaultProps)
      for (tt in bt = E.defaultProps, bt)
        mt[tt] === void 0 && (mt[tt] = bt[tt]);
    return J(E, pt, mt);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(E) {
    return { $$typeof: S, render: E };
  }, ht.isValidElement = vt, ht.lazy = function(E) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: E },
      _init: j
    };
  }, ht.memo = function(E, B) {
    return {
      $$typeof: _,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, ht.startTransition = it, ht.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, ht.use = function(E) {
    return V.H.use(E);
  }, ht.useActionState = function(E, B, Q) {
    return V.H.useActionState(E, B, Q);
  }, ht.useCallback = function(E, B) {
    return V.H.useCallback(E, B);
  }, ht.useContext = function(E) {
    return V.H.useContext(E);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(E, B) {
    return V.H.useDeferredValue(E, B);
  }, ht.useEffect = function(E, B) {
    return V.H.useEffect(E, B);
  }, ht.useEffectEvent = function(E) {
    return V.H.useEffectEvent(E);
  }, ht.useId = function() {
    return V.H.useId();
  }, ht.useImperativeHandle = function(E, B, Q) {
    return V.H.useImperativeHandle(E, B, Q);
  }, ht.useInsertionEffect = function(E, B) {
    return V.H.useInsertionEffect(E, B);
  }, ht.useLayoutEffect = function(E, B) {
    return V.H.useLayoutEffect(E, B);
  }, ht.useMemo = function(E, B) {
    return V.H.useMemo(E, B);
  }, ht.useOptimistic = function(E, B) {
    return V.H.useOptimistic(E, B);
  }, ht.useReducer = function(E, B, Q) {
    return V.H.useReducer(E, B, Q);
  }, ht.useRef = function(E) {
    return V.H.useRef(E);
  }, ht.useState = function(E) {
    return V.H.useState(E);
  }, ht.useSyncExternalStore = function(E, B, Q) {
    return V.H.useSyncExternalStore(
      E,
      B,
      Q
    );
  }, ht.useTransition = function() {
    return V.H.useTransition();
  }, ht.version = "19.3.0", ht;
}
var m1;
function Fs() {
  return m1 || (m1 = 1, ws.exports = Qv()), ws.exports;
}
var Ya = Fs();
const W1 = /* @__PURE__ */ Vv(Ya);
var qs = { exports: {} }, zu = {}, Gs = { exports: {} }, Ys = {};
var y1;
function Zv() {
  return y1 || (y1 = 1, (function(f) {
    function u(G, Y) {
      var ut = G.length;
      G.push(Y);
      t: for (; 0 < ut; ) {
        var j = ut - 1 >>> 1, F = G[j];
        if (0 < o(F, Y))
          G[j] = Y, G[ut] = F, ut = j;
        else break t;
      }
    }
    function c(G) {
      return G.length === 0 ? null : G[0];
    }
    function s(G) {
      if (G.length === 0) return null;
      var Y = G[0], ut = G.pop();
      if (ut !== Y) {
        G[0] = ut;
        t: for (var j = 0, F = G.length, it = F >>> 1; j < it; ) {
          var Ct = 2 * (j + 1) - 1, Zt = G[Ct], E = Ct + 1, B = G[E];
          if (0 > o(Zt, ut))
            E < F && 0 > o(B, Zt) ? (G[j] = B, G[E] = ut, j = E) : (G[j] = Zt, G[Ct] = ut, j = Ct);
          else if (E < F && 0 > o(B, ut))
            G[j] = B, G[E] = ut, j = E;
          else break t;
        }
      }
      return Y;
    }
    function o(G, Y) {
      var ut = G.sortIndex - Y.sortIndex;
      return ut !== 0 ? ut : G.id - Y.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      f.unstable_now = function() {
        return d.now();
      };
    } else {
      var g = Date, S = g.now();
      f.unstable_now = function() {
        return g.now() - S;
      };
    }
    var v = [], _ = [], T = 1, y = null, x = 3, C = !1, H = !1, w = !1, R = !1, q = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function L(G) {
      for (var Y = c(_); Y !== null; ) {
        if (Y.callback === null) s(_);
        else if (Y.startTime <= G)
          s(_), Y.sortIndex = Y.expirationTime, u(v, Y);
        else break;
        Y = c(_);
      }
    }
    function k(G) {
      if (w = !1, L(G), !H)
        if (c(v) !== null)
          H = !0, I || (I = !0, vt());
        else {
          var Y = c(_);
          Y !== null && zt(k, Y.startTime - G);
        }
    }
    var I = !1, K = -1, V = 5, ct = -1;
    function J() {
      return R ? !0 : !(f.unstable_now() - ct < V);
    }
    function rt() {
      if (R = !1, I) {
        var G = f.unstable_now();
        ct = G;
        var Y = !0;
        try {
          t: {
            H = !1, w && (w = !1, lt(K), K = -1), C = !0;
            var ut = x;
            try {
              l: {
                for (L(G), y = c(v); y !== null && !(y.expirationTime > G && J()); ) {
                  var j = y.callback;
                  if (typeof j == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var F = j(
                      y.expirationTime <= G
                    );
                    if (G = f.unstable_now(), typeof F == "function") {
                      y.callback = F, L(G), Y = !0;
                      break l;
                    }
                    y === c(v) && s(v), L(G);
                  } else s(v);
                  y = c(v);
                }
                if (y !== null) Y = !0;
                else {
                  var it = c(_);
                  it !== null && zt(
                    k,
                    it.startTime - G
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              y = null, x = ut, C = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? vt() : I = !1;
        }
      }
    }
    var vt;
    if (typeof $ == "function")
      vt = function() {
        $(rt);
      };
    else if (typeof MessageChannel < "u") {
      var ot = new MessageChannel(), et = ot.port2;
      ot.port1.onmessage = rt, vt = function() {
        et.postMessage(null);
      };
    } else
      vt = function() {
        q(rt, 0);
      };
    function zt(G, Y) {
      K = q(function() {
        G(f.unstable_now());
      }, Y);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, f.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < G ? Math.floor(1e3 / G) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, f.unstable_next = function(G) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = x;
      }
      var ut = x;
      x = Y;
      try {
        return G();
      } finally {
        x = ut;
      }
    }, f.unstable_requestPaint = function() {
      R = !0;
    }, f.unstable_runWithPriority = function(G, Y) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var ut = x;
      x = G;
      try {
        return Y();
      } finally {
        x = ut;
      }
    }, f.unstable_scheduleCallback = function(G, Y, ut) {
      var j = f.unstable_now();
      switch (typeof ut == "object" && ut !== null ? (ut = ut.delay, ut = typeof ut == "number" && 0 < ut ? j + ut : j) : ut = j, G) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = ut + F, G = {
        id: T++,
        callback: Y,
        priorityLevel: G,
        startTime: ut,
        expirationTime: F,
        sortIndex: -1
      }, ut > j ? (G.sortIndex = ut, u(_, G), c(v) === null && G === c(_) && (w ? (lt(K), K = -1) : w = !0, zt(k, ut - j))) : (G.sortIndex = F, u(v, G), H || C || (H = !0, I || (I = !0, vt()))), G;
    }, f.unstable_shouldYield = J, f.unstable_wrapCallback = function(G) {
      var Y = x;
      return function() {
        var ut = x;
        x = Y;
        try {
          return G.apply(this, arguments);
        } finally {
          x = ut;
        }
      };
    };
  })(Ys)), Ys;
}
var S1;
function Kv() {
  return S1 || (S1 = 1, Gs.exports = Zv()), Gs.exports;
}
var Xs = { exports: {} }, dl = {};
var E1;
function Jv() {
  if (E1) return dl;
  E1 = 1;
  var f = Fs();
  function u(T) {
    var y = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        y += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + T + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var s = {
    d: {
      f: c,
      r: function() {
        throw Error(u(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.recoverable"), g = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function S(T, y, x) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: C == null ? null : C === g ? g : "" + C,
      children: T,
      containerInfo: y,
      implementation: x
    };
  }
  var v = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(T, y) {
    if (T === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return dl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, dl.browser = function(T) {
    return { $$typeof: d, _reason: T };
  }, dl.createPortal = function(T, y) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(u(299));
    return S(T, y, null, x);
  }, dl.flushSync = function(T) {
    var y = v.T, x = s.p;
    try {
      if (v.T = null, s.p = 2, T) return T();
    } finally {
      v.T = y, s.p = x, s.d.f();
    }
  }, dl.preconnect = function(T, y) {
    typeof T == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(T, y));
  }, dl.prefetchDNS = function(T) {
    typeof T == "string" && s.d.D(T);
  }, dl.preinit = function(T, y) {
    if (typeof T == "string" && y && typeof y.as == "string") {
      var x = y.as, C = _(x, y.crossOrigin), H = typeof y.integrity == "string" ? y.integrity : void 0, w = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      x === "style" ? s.d.S(
        T,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: C,
          integrity: H,
          fetchPriority: w
        }
      ) : x === "script" && s.d.X(T, {
        crossOrigin: C,
        integrity: H,
        fetchPriority: w,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, dl.preinitModule = function(T, y) {
    if (typeof T == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var x = _(
            y.as,
            y.crossOrigin
          );
          s.d.M(T, {
            crossOrigin: x,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && s.d.M(T);
  }, dl.preload = function(T, y) {
    if (typeof T == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var x = y.as, C = _(x, y.crossOrigin);
      s.d.L(T, x, {
        crossOrigin: C,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, dl.preloadModule = function(T, y) {
    if (typeof T == "string")
      if (y) {
        var x = _(y.as, y.crossOrigin);
        s.d.m(T, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: x,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else s.d.m(T);
  }, dl.requestFormReset = function(T) {
    s.d.r(T);
  }, dl.unstable_batchedUpdates = function(T, y) {
    return T(y);
  }, dl.useFormState = function(T, y, x) {
    return v.H.useFormState(T, y, x);
  }, dl.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, dl.version = "19.3.0", dl;
}
var T1;
function Fv() {
  if (T1) return Xs.exports;
  T1 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (u) {
        console.error(u);
      }
  }
  return f(), Xs.exports = Jv(), Xs.exports;
}
var p1;
function Wv() {
  if (p1) return zu;
  p1 = 1;
  var f = Kv(), u = Fs(), c = Fv();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t)
      throw Error(s(188));
  }
  function _(t) {
    var l = t.alternate;
    if (!l) {
      if (l = d(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === e) return v(n), t;
          if (i === a) return v(n), l;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) e = n, a = i;
      else {
        for (var r = !1, h = n.child; h; ) {
          if (h === e) {
            r = !0, e = n, a = i;
            break;
          }
          if (h === a) {
            r = !0, a = n, e = i;
            break;
          }
          h = h.sibling;
        }
        if (!r) {
          for (h = i.child; h; ) {
            if (h === e) {
              r = !0, e = i, a = n;
              break;
            }
            if (h === a) {
              r = !0, a = i, e = n;
              break;
            }
            h = h.sibling;
          }
          if (!r) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function T(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = T(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function y(t, l, e, a, n, i) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, a, n, i) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        l,
        e,
        a,
        n,
        i
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function x(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function C(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function H(t) {
    var l = [null, null], e = x(t);
    return e === null || w(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function w(t, l, e, a) {
    for (; e !== null; ) {
      if (e === l) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && w(
        t,
        l,
        e.child,
        a
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function R(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var q = null, lt = null;
  function $(t, l, e) {
    return t === e ? !0 : t === l ? (q = t, !0) : !1;
  }
  function L(t, l, e) {
    return t === e ? (lt = t, !1) : t === l ? (lt !== null && (q = t), !0) : !1;
  }
  function k(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function I(t, l, e) {
    for (var a = 0, n = t; n; n = e(n)) a++;
    n = 0;
    for (var i = l; i; i = e(i)) n++;
    for (; 0 < a - n; ) t = e(t), a--;
    for (; 0 < n - a; ) l = e(l), n--;
    for (; a--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var K = Object.assign, V = /* @__PURE__ */ Symbol.for("react.element"), ct = /* @__PURE__ */ Symbol.for("react.transitional.element"), J = /* @__PURE__ */ Symbol.for("react.portal"), rt = /* @__PURE__ */ Symbol.for("react.fragment"), vt = /* @__PURE__ */ Symbol.for("react.strict_mode"), ot = /* @__PURE__ */ Symbol.for("react.profiler"), et = /* @__PURE__ */ Symbol.for("react.consumer"), zt = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), ut = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), it = /* @__PURE__ */ Symbol.for("react.activity"), Ct = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Zt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), B = /* @__PURE__ */ Symbol.for("react.recoverable"), Q = Symbol.iterator;
  function tt(t) {
    return t === null || typeof t != "object" ? null : (t = Q && t[Q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var mt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function pt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === mt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case rt:
        return "Fragment";
      case ot:
        return "Profiler";
      case vt:
        return "StrictMode";
      case Y:
        return "Suspense";
      case ut:
        return "SuspenseList";
      case it:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case J:
          return "Portal";
        case zt:
          return t.displayName || "Context";
        case et:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case j:
          return l = t.displayName || null, l !== null ? l : pt(t.type) || "Memo";
        case F:
          l = t._payload, t = t._init;
          try {
            return pt(t(l));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, P = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nt = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, gl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], Ll = -1;
  function Tl(t) {
    return { current: t };
  }
  function Kt(t) {
    0 > Ll || (t.current = ie[Ll], ie[Ll] = null, Ll--);
  }
  function wt(t, l) {
    Ll++, ie[Ll] = t.current, t.current = l;
  }
  var Ol = Tl(null), Be = Tl(null), Il = Tl(null), ha = Tl(null);
  function we(t, l) {
    switch (wt(Il, l), wt(Be, t), wt(Ol, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Ao(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Ao(l), t = zo(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Kt(Ol), wt(Ol, t);
  }
  function Se() {
    Kt(Ol), Kt(Be), Kt(Il);
  }
  function qe(t) {
    var l = t.memoizedState;
    l !== null && (Nn._currentValue = l.memoizedState, wt(ha, t)), l = Ol.current;
    var e = zo(l, t.type);
    l !== e && (wt(Be, t), wt(Ol, e));
  }
  function oa(t) {
    Be.current === t && (Kt(Ol), Kt(Be)), ha.current === t && (Kt(ha), Nn._currentValue = gl);
  }
  var Xa, Ot;
  function st(t) {
    if (Xa === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Xa = l && l[1] || "", Ot = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xa + t + Ot;
  }
  var $t = !1;
  function da(t, l) {
    if (!t || $t) return "";
    $t = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (X) {
                  var b = X;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (X) {
                  b = X;
                }
                U = !1;
                try {
                  var O = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), U = !0, new t();
                } finally {
                  U && (O !== void 0 ? Object.defineProperty(t.prototype, "props", O) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                b = X;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (X) {
            if (X && b && typeof X.stack == "string")
              return [X.stack, b.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), r = i[0], h = i[1];
      if (r && h) {
        var m = r.split(`
`), z = h.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < z.length && !z[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === z.length)
          for (a = m.length - 1, n = z.length - 1; 1 <= a && 0 <= n && m[a] !== z[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== z[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== z[n]) {
                  var N = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      $t = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? st(e) : "";
  }
  function Nl(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return st(t.type);
      case 16:
        return st("Lazy");
      case 13:
        return t.child !== l && l !== null ? st("Suspense Fallback") : st("Suspense");
      case 19:
        return st("SuspenseList");
      case 0:
      case 15:
        return da(t.type, !1);
      case 11:
        return da(t.type.render, !1);
      case 1:
        return da(t.type, !0);
      case 31:
        return st("Activity");
      case 30:
        return st("ViewTransition");
      default:
        return "";
    }
  }
  function kl(t) {
    try {
      var l = "", e = null;
      do
        l += Nl(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ga = Object.prototype.hasOwnProperty, Vt = f.unstable_scheduleCallback, Ee = f.unstable_cancelCallback, nf = f.unstable_shouldYield, uf = f.unstable_requestPaint, il = f.unstable_now, ff = f.unstable_getCurrentPriorityLevel, Dn = f.unstable_ImmediatePriority, La = f.unstable_UserBlockingPriority, va = f.unstable_NormalPriority, Nu = f.unstable_LowPriority, Cu = f.unstable_IdlePriority, cf = f.log, St = f.unstable_setDisableYieldValue, Mt = null, qt = null;
  function pl(t) {
    if (typeof cf == "function" && St(t), qt && typeof qt.setStrictMode == "function")
      try {
        qt.setStrictMode(Mt, t);
      } catch {
      }
  }
  var Cl = Math.clz32 ? Math.clz32 : ed, td = Math.log, ld = Math.LN2;
  function ed(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (td(t) / ld | 0) | 0;
  }
  var Ru = 256, Du = 262144, Uu = 4194304;
  function ma(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Hu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, r = t.pingedLanes;
    t = t.warmLanes;
    var h = a & 134217727;
    return h !== 0 ? (a = h & ~i, a !== 0 ? n = ma(a) : (r &= h, r !== 0 ? n = ma(r) : e || (e = h & ~t, e !== 0 && (n = ma(e))))) : (h = a & ~i, h !== 0 ? n = ma(h) : r !== 0 ? n = ma(r) : e || (e = a & ~t, e !== 0 && (n = ma(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & i) === 0 && (i = n & -n, e = l & -l, i >= e || i === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function Un(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Ws(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var a = 31 - Cl(e), n = 1 << a;
        l |= t[a], e &= ~n;
      }
    return l;
  }
  function ad(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $s() {
    var t = Uu;
    return Uu <<= 1, (Uu & 62914560) === 0 && (Uu = 4194304), t;
  }
  function sf(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Hn(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function nd(t, l, e, a, n, i) {
    var r = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var h = t.entanglements, m = t.expirationTimes, z = t.hiddenUpdates;
    for (e = r & ~e; 0 < e; ) {
      var N = 31 - Cl(e), U = 1 << N;
      h[N] = 0, m[N] = -1;
      var b = z[N];
      if (b !== null)
        for (z[N] = null, N = 0; N < b.length; N++) {
          var O = b[N];
          O !== null && (O.lane &= -536870913);
        }
      e &= ~U;
    }
    a !== 0 && Is(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(r & ~l));
  }
  function Is(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - Cl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function ks(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - Cl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function Ps(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : rf(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function rf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function hf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tr() {
    var t = nt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : c1(t.type));
  }
  function lr(t, l) {
    var e = nt.p;
    try {
      return nt.p = t, l();
    } finally {
      nt.p = e;
    }
  }
  var Te = Math.random().toString(36).slice(2), fl = "__reactFiber$" + Te, bl = "__reactProps$" + Te, ja = "__reactContainer$" + Te, er = "__reactEvents$" + Te, ud = "__reactListeners$" + Te, id = "__reactHandles$" + Te, ar = "__reactResources$" + Te, Bn = "__reactMarker$" + Te, Bu = "__reactLoad$" + Te;
  function wu(t) {
    delete t[fl], delete t[bl], delete t[ud], delete t[id];
  }
  function ya(t) {
    var l;
    if (l = t[fl]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[ja] || e[fl]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = jo(t); t !== null; ) {
            if (e = t[fl]) return e;
            t = jo(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Va(t) {
    if (t = t[fl] || t[ja]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function wn(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Qa(t) {
    var l = t[ar];
    return l || (l = t[ar] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function el(t) {
    t[Bn] = !0;
  }
  function nr(t) {
    t[Bu] = void 0;
  }
  var ur = /* @__PURE__ */ new Set(), ir = {};
  function Sa(t, l) {
    Za(t, l), Za(t + "Capture", l);
  }
  function Za(t, l) {
    for (ir[t] = l, t = 0; t < l.length; t++)
      ur.add(l[t]);
  }
  var fd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fr = {}, cr = {};
  function cd(t) {
    return ga.call(cr, t) ? !0 : ga.call(fr, t) ? !1 : fd.test(t) ? cr[t] = !0 : (fr[t] = !0, !1);
  }
  var Nt = !1;
  function sr() {
    var t = Nt;
    return Nt = !1, t;
  }
  function qu(t, l, e) {
    if (cd(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function Gu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, e);
    }
  }
  function pe(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, a);
    }
  }
  function Rl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function rr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function sd(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(r) {
          e = "" + r, i.call(this, r);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(r) {
          e = "" + r;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function of(t) {
    if (!t._valueTracker) {
      var l = rr(t) ? "checked" : "value";
      t._valueTracker = sd(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function hr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = rr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  var rd = /[\n"\\]/g;
  function jl(t) {
    return t.replace(
      rd,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function df(t, l, e, a, n, i, r, h) {
    t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), l != null ? r === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Rl(l)) : t.value !== "" + Rl(l) && (t.value = "" + Rl(l)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), l != null ? r === "number" && t.value == l ? gf(t, Rl(t.value)) : gf(t, Rl(l)) : e != null ? gf(t, Rl(e)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Rl(h) : t.removeAttribute("name");
  }
  function or(t, l, e, a, n, i, r, h) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), l != null || e != null) {
      if (!(i !== "submit" && i !== "reset" || l != null)) {
        of(t);
        return;
      }
      e = e != null ? "" + Rl(e) : "", l = l != null ? "" + Rl(l) : e, h || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = h ? t.checked : !!a, t.defaultChecked = !!a, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), of(t);
  }
  function gf(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Ka(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + Rl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function dr(t, l, e) {
    if (l != null && (l = "" + Rl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + Rl(e) : "";
  }
  function gr(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (bt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = Rl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), of(t);
  }
  function Ja(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var hd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vr(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || hd.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function mr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Nt = !0);
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && (vr(t, n, a), Nt = !0);
    } else
      for (var i in l)
        l.hasOwnProperty(i) && vr(t, i, l[i]);
  }
  function vf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var od = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), dd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yu(t) {
    return dd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function fe() {
  }
  var mf = null;
  function yf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Fa = null, Wa = null;
  function yr(t) {
    var l = Va(t);
    if (l && (t = l.stateNode)) {
      var e = t[bl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (df(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + jl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[bl] || null;
                if (!n) throw Error(s(90));
                df(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && hr(a);
          }
          break t;
        case "textarea":
          dr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ka(t, !!e.multiple, l, !1);
      }
    }
  }
  var Sf = !1;
  function Sr(t, l, e) {
    if (Sf) return t(l, e);
    Sf = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (Sf = !1, (Fa !== null || Wa !== null) && (Yi(), Fa && (l = Fa, t = Wa, Wa = Fa = null, yr(l), t)))
        for (l = 0; l < t.length; l++) yr(t[l]);
    }
  }
  function qn(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[bl] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        s(231, l, typeof e)
      );
    return e;
  }
  var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ef = !1;
  if (be)
    try {
      var Gn = {};
      Object.defineProperty(Gn, "passive", {
        get: function() {
          Ef = !0;
        }
      }), window.addEventListener("test", Gn, Gn), window.removeEventListener("test", Gn, Gn);
    } catch {
      Ef = !1;
    }
  var Ge = null, Tf = null, Xu = null;
  function Er() {
    if (Xu) return Xu;
    var t, l = Tf, e = l.length, a, n = "value" in Ge ? Ge.value : Ge.textContent, i = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var r = e - t;
    for (a = 1; a <= r && l[e - a] === n[i - a]; a++) ;
    return Xu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Lu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ju() {
    return !0;
  }
  function Tr() {
    return !1;
  }
  function ml(t) {
    function l(e, a, n, i, r) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = r, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (e = t[h], this[h] = e ? e(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ju : Tr, this.isPropagationStopped = Tr, this;
    }
    return K(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = ju);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = ju);
      },
      persist: function() {
      },
      isPersistent: ju
    }), l;
  }
  var Ye = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Vu = ml(Ye), Yn = K({}, Ye, { view: 0, detail: 0 }), gd = ml(Yn), pf, bf, Xn, Qu = K({}, Yn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Af,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Xn && (Xn && t.type === "mousemove" ? (pf = t.screenX - Xn.screenX, bf = t.screenY - Xn.screenY) : bf = pf = 0, Xn = t), pf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : bf;
    }
  }), pr = ml(Qu), vd = K({}, Qu, { dataTransfer: 0 }), md = ml(vd), yd = K({}, Yn, { relatedTarget: 0 }), _f = ml(yd), Sd = K({}, Ye, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ed = ml(Sd), Td = K({}, Ye, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), pd = ml(Td), bd = K({}, Ye, { data: 0 }), br = ml(bd), _d = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ad = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Md(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = zd[t]) ? !!l[t] : !1;
  }
  function Af() {
    return Md;
  }
  var xd = K({}, Yn, {
    key: function(t) {
      if (t.key) {
        var l = _d[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Lu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ad[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Af,
    charCode: function(t) {
      return t.type === "keypress" ? Lu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Od = ml(xd), Nd = K({}, Qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), _r = ml(Nd), Cd = K({}, Ye, { submitter: 0 }), Rd = ml(Cd), Dd = K({}, Yn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Af
  }), Ud = ml(Dd), Hd = K({}, Ye, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bd = ml(Hd), wd = K({}, Qu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qd = ml(wd), Gd = K({}, Ye, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Yd = ml(Gd), Xd = [9, 13, 27, 32], zf = be && "CompositionEvent" in window, Ln = null;
  be && "documentMode" in document && (Ln = document.documentMode);
  var Ld = be && "TextEvent" in window && !Ln, Ar = be && (!zf || Ln && 8 < Ln && 11 >= Ln), zr = " ", Mr = !1;
  function xr(t, l) {
    switch (t) {
      case "keyup":
        return Xd.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Or(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var $a = !1;
  function jd(t, l) {
    switch (t) {
      case "compositionend":
        return Or(l);
      case "keypress":
        return l.which !== 32 ? null : (Mr = !0, zr);
      case "textInput":
        return t = l.data, t === zr && Mr ? null : t;
      default:
        return null;
    }
  }
  function Vd(t, l) {
    if ($a)
      return t === "compositionend" || !zf && xr(t, l) ? (t = Er(), Xu = Tf = Ge = null, $a = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Ar && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Qd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Nr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Qd[t.type] : l === "textarea";
  }
  function Cr(t, l, e, a) {
    Fa ? Wa ? Wa.push(a) : Wa = [a] : Fa = a, l = Zi(l, "onChange"), 0 < l.length && (e = new Vu(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var jn = null, Vn = null;
  function Zd(t) {
    So(t, 0);
  }
  function Zu(t) {
    var l = wn(t);
    if (hr(l)) return t;
  }
  function Rr(t, l) {
    if (t === "change") return l;
  }
  var Dr = !1;
  if (be) {
    var Mf;
    if (be) {
      var xf = "oninput" in document;
      if (!xf) {
        var Ur = document.createElement("div");
        Ur.setAttribute("oninput", "return;"), xf = typeof Ur.oninput == "function";
      }
      Mf = xf;
    } else Mf = !1;
    Dr = Mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Hr() {
    jn && (jn.detachEvent("onpropertychange", Br), Vn = jn = null);
  }
  function Br(t) {
    if (t.propertyName === "value" && Zu(Vn)) {
      var l = [];
      Cr(
        l,
        Vn,
        t,
        yf(t)
      ), Sr(Zd, l);
    }
  }
  function Kd(t, l, e) {
    t === "focusin" ? (Hr(), jn = l, Vn = e, jn.attachEvent("onpropertychange", Br)) : t === "focusout" && Hr();
  }
  function Jd(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zu(Vn);
  }
  function Fd(t, l) {
    if (t === "click") return Zu(l);
  }
  function Wd(t, l) {
    if (t === "input" || t === "change")
      return Zu(l);
  }
  function $d(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Dl = typeof Object.is == "function" ? Object.is : $d;
  function Qn(t, l) {
    if (Dl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ga.call(l, n) || !Dl(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function Of(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function wr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qr(t, l) {
    var e = wr(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = wr(e);
    }
  }
  function Gr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Gr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Yr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Of(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Of(t.document);
    }
    return l;
  }
  function Nf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Id = be && "documentMode" in document && 11 >= document.documentMode, Ia = null, Cf = null, Zn = null, Rf = !1;
  function Xr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Rf || Ia == null || Ia !== Of(a) || (a = Ia, "selectionStart" in a && Nf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Zn && Qn(Zn, a) || (Zn = a, a = Zi(Cf, "onSelect"), 0 < a.length && (l = new Vu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = Ia)));
  }
  function Ea(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ka = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Df = {}, Lr = {};
  be && (Lr = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function Ta(t) {
    if (Df[t]) return Df[t];
    if (!ka[t]) return t;
    var l = ka[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Lr)
        return Df[t] = l[e];
    return t;
  }
  var jr = Ta("animationend"), Vr = Ta("animationiteration"), Qr = Ta("animationstart"), kd = Ta("transitionrun"), Pd = Ta("transitionstart"), tg = Ta("transitioncancel"), Zr = Ta("transitionend"), Kr = /* @__PURE__ */ new Map(), Uf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uf.push("scrollEnd");
  function Pl(t, l) {
    Kr.set(t, l), Sa(l, [t]);
  }
  var lg = 0;
  function _e(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = ae.identifierPrefix;
    var e = lg++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function Jr(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = En;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = t[e[a]];
        if (n != null) {
          if (n === "none") return "none";
          l = l == null ? n : l + (" " + n);
        }
      }
    return l ?? t.default;
  }
  function Ae(t, l) {
    return t = Jr(t), l = Jr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Ku = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Vl = [], Pa = 0, Hf = 0;
  function Ju() {
    for (var t = Pa, l = Hf = Pa = 0; l < t; ) {
      var e = Vl[l];
      Vl[l++] = null;
      var a = Vl[l];
      Vl[l++] = null;
      var n = Vl[l];
      Vl[l++] = null;
      var i = Vl[l];
      if (Vl[l++] = null, a !== null && n !== null) {
        var r = a.pending;
        r === null ? n.next = n : (n.next = r.next, r.next = n), a.pending = n;
      }
      i !== 0 && Fr(e, n, i);
    }
  }
  function Fu(t, l, e, a) {
    Vl[Pa++] = t, Vl[Pa++] = l, Vl[Pa++] = e, Vl[Pa++] = a, Hf |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Bf(t, l, e, a) {
    return Fu(t, l, e, a), Wu(t);
  }
  function pa(t, l) {
    return Fu(t, null, null, l), Wu(t);
  }
  function Fr(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= e, a = i.alternate, a !== null && (a.childLanes |= e), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && l !== null && (n = 31 - Cl(e), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), i) : null;
  }
  function Wu(t) {
    if (50 < du)
      throw du = 0, Gi = null, Error(s(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var tn = {};
  function eg(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _l(t, l, e, a) {
    return new eg(t, l, e, a);
  }
  function wf(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ze(t, l) {
    var e = t.alternate;
    return e === null ? (e = _l(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Wr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function $u(t, l, e, a, n, i) {
    var r = 0;
    if (a = t, typeof a == "function") wf(a) && (r = 1);
    else if (typeof a == "string")
      r = Cv(
        t,
        e,
        Ol.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case it:
          return t = _l(31, e, l, n), t.elementType = it, t.lanes = i, t;
        case rt:
          return ba(e.children, n, i, l);
        case vt:
          r = 8, n |= 24;
          break;
        case ot:
          return t = _l(12, e, l, n | 2), t.elementType = ot, t.lanes = i, t;
        case Y:
          return t = _l(13, e, l, n), t.elementType = Y, t.lanes = i, t;
        case ut:
          return t = _l(19, e, l, n), t.elementType = ut, t.lanes = i, t;
        case Ct:
        case E:
          return t = n | 32, t = _l(30, e, l, t), t.elementType = E, t.lanes = i, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case zt:
                r = 10;
                break t;
              case et:
                r = 9;
                break t;
              case G:
                r = 11;
                break t;
              case j:
                r = 14;
                break t;
              case F:
                r = 16, a = null;
                break t;
            }
          r = 29, e = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = _l(r, e, l, n), l.elementType = t, l.type = a, l.lanes = i, l;
  }
  function ba(t, l, e, a) {
    return t = _l(7, t, a, l), t.lanes = e, t;
  }
  function qf(t, l, e) {
    return t = _l(6, t, null, l), t.lanes = e, t;
  }
  function $r(t) {
    var l = _l(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Gf(t, l, e) {
    return l = _l(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Ir = /* @__PURE__ */ new WeakMap();
  function Ql(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ir.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: kl(l)
      }, Ir.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: kl(l)
    };
  }
  var ln = [], en = 0, Iu = null, Kn = 0, Zl = [], Kl = 0, Xe = null, ce = 1, se = "";
  function Me(t, l) {
    ln[en++] = Kn, ln[en++] = Iu, Iu = t, Kn = l;
  }
  function kr(t, l, e) {
    Zl[Kl++] = ce, Zl[Kl++] = se, Zl[Kl++] = Xe, Xe = t;
    var a = ce;
    t = se;
    var n = 32 - Cl(a) - 1;
    a &= ~(1 << n), e += 1;
    var i = 32 - Cl(l) + n;
    if (30 < i) {
      var r = n - n % 5;
      i = (a & (1 << r) - 1).toString(32), a >>= r, n -= r, ce = 1 << 32 - Cl(l) + n | e << n | a, se = i + t;
    } else
      ce = 1 << i | e << n | a, se = t;
  }
  function ku(t) {
    t.return !== null && (Me(t, 1), kr(t, 1, 0));
  }
  function Yf(t) {
    for (; t === Iu; )
      Iu = ln[--en], ln[en] = null, Kn = ln[--en], ln[en] = null;
    for (; t === Xe; )
      Xe = Zl[--Kl], Zl[Kl] = null, se = Zl[--Kl], Zl[Kl] = null, ce = Zl[--Kl], Zl[Kl] = null;
  }
  function Pr(t, l) {
    Zl[Kl++] = ce, Zl[Kl++] = se, Zl[Kl++] = Xe, ce = l.id, se = l.overflow, Xe = t;
  }
  var al = null, Xt = null, yt = !1, Le = null, Jl = !1, Xf = Error(s(519));
  function je(t) {
    var l = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Jn(Ql(l, t)), Xf;
  }
  function th(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[fl] = t, l[bl] = a, e) {
      case "dialog":
        Tt("cancel", l), Tt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < vu.length; e++)
          Tt(vu[e], l);
        break;
      case "source":
        Tt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", l), Tt("load", l);
        break;
      case "details":
        Tt("toggle", l);
        break;
      case "input":
        Tt("invalid", l), or(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Tt("invalid", l);
        break;
      case "textarea":
        Tt("invalid", l), gr(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || bo(l.textContent, e) ? (a.popover != null && (Tt("beforetoggle", l), Tt("toggle", l)), a.onScroll != null && Tt("scroll", l), a.onScrollEnd != null && Tt("scrollend", l), a.onClick != null && (l.onclick = fe), l = !0) : l = !1, l || je(t, !0);
  }
  function Pu(t) {
    for (al = t.return; al; )
      switch (al.tag) {
        case 5:
        case 31:
        case 13:
          Jl = !1;
          return;
        case 27:
        case 3:
          Jl = !0;
          return;
        default:
          al = al.return;
      }
  }
  function an(t) {
    if (t !== al) return !1;
    if (!yt) return Pu(t), yt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ms(t.type, t.memoizedProps)), e = !e), e && Xt && je(t), Pu(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      Xt = Lo(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      Xt = Lo(t);
    } else
      l === 27 ? (l = Xt, na(t.type) ? (t = zs, zs = null, Xt = t) : Xt = l) : Xt = al ? Wl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    Xt = al = null, yt = !1;
  }
  function Lf() {
    var t = Le;
    return t !== null && (Ml === null ? Ml = t : Ml.push.apply(
      Ml,
      t
    ), Le = null), t;
  }
  function Jn(t) {
    Le === null ? Le = [t] : Le.push(t);
  }
  var jf = Tl(null), Aa = null, xe = null;
  function Ve(t, l, e) {
    wt(jf, l._currentValue), l._currentValue = e;
  }
  function Oe(t) {
    t._currentValue = jf.current, Kt(jf);
  }
  function ti(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Vf(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var r = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var h = i;
          i = n;
          for (var m = 0; m < l.length; m++)
            if (h.context === l[m]) {
              i.lanes |= e, h = i.alternate, h !== null && (h.lanes |= e), ti(
                i.return,
                e,
                t
              ), a || (r = null);
              break t;
            }
          i = h.next;
        }
      } else if (n.tag === 18) {
        if (r = n.return, r === null) throw Error(s(341));
        r.lanes |= e, i = r.alternate, i !== null && (i.lanes |= e), ti(r, e, t), r = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= e, r = n.alternate, r !== null && (r.lanes |= e), ti(
          n.return,
          e,
          t
        ), r = n.child, r = r !== null ? r.sibling : null) : r = n.child;
      if (r !== null) r.return = n;
      else
        for (r = n; r !== null; ) {
          if (r === t) {
            r = null;
            break;
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, r = n;
            break;
          }
          r = r.return;
        }
      n = r;
    }
  }
  function za(t, l, e, a) {
    t = null;
    for (var n = l, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var r = n.alternate;
        if (r === null) throw Error(s(387));
        if (r = r.memoizedProps, r !== null) {
          var h = n.type;
          Dl(n.pendingProps.value, r.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (n === ha.current) {
        if (r = n.alternate, r === null) throw Error(s(387));
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Nn) : t = [Nn]);
      }
      n = n.return;
    }
    return t !== null && Vf(
      l,
      t,
      e,
      a
    ), l.flags |= 262144, t !== null;
  }
  function li(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Dl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ma(t) {
    Aa = t, xe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function cl(t) {
    return lh(Aa, t);
  }
  function ei(t, l) {
    return Aa === null && Ma(t), lh(t, l);
  }
  function lh(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, xe === null) {
      if (t === null) throw Error(s(308));
      xe = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else xe = xe.next = l;
    return e;
  }
  var ag = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, ng = f.unstable_scheduleCallback, ug = f.unstable_NormalPriority, It = {
    $$typeof: zt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qf() {
    return {
      controller: new ag(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fn(t) {
    t.refCount--, t.refCount === 0 && ng(ug, function() {
      t.controller.abort();
    });
  }
  function eh(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var a = l[t];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var Wn = null;
  function ig(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var $n = null, Zf = 0, xa = 0, nn = null;
  function fg(t, l) {
    if ($n === null) {
      var e = $n = [];
      Zf = 0, xa = fs(), nn = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Zf++, l.then(ah, ah), l;
  }
  function ah() {
    if (--Zf === 0 && (Wn = null, $n !== null)) {
      nn !== null && (nn.status = "fulfilled");
      var t = $n;
      $n = null, xa = 0, nn = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function cg(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var nh = P.S;
  P.S = function(t, l) {
    if ($0 = il(), typeof l == "object" && l !== null && typeof l.then == "function" && fg(t, l), Wn !== null)
      for (var e = _n; e !== null; )
        eh(e, Wn), e = e.next;
    if (e = t.types, e !== null) {
      for (var a = _n; a !== null; )
        eh(a, e), a = a.next;
      if (xa !== 0) {
        a = Wn, a === null && (a = Wn = []);
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    nh !== null && nh(t, l);
  };
  var Oa = Tl(null);
  function Kf() {
    var t = Oa.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function ai(t, l) {
    l === null ? wt(Oa, Oa.current) : wt(Oa, l.pool);
  }
  function uh() {
    var t = Kf();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var un = Error(s(460)), Jf = Error(s(474)), ni = Error(s(542)), ui = { then: function() {
  } };
  function ih(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function fh(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(fe, fe), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, sh(t), t === void 0 && !("reason" in l) ? Error(s(600)) : t;
      default:
        if (typeof l.status == "string") l.then(fe, fe);
        else {
          if (t = Yt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, sh(t), t;
        }
        throw Ca = l, un;
    }
  }
  function Na(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ca = e, un) : e;
    }
  }
  var Ca = null;
  function ch() {
    if (Ca === null) throw Error(s(459));
    var t = Ca;
    return Ca = null, t;
  }
  function sh(t) {
    if (t === un || t === ni)
      throw Error(s(483));
  }
  var fn = null, In = 0;
  function ii(t) {
    var l = In;
    return In += 1, fn === null && (fn = []), fh(fn, t, l);
  }
  function Qe(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function fi(t, l) {
    throw l.$$typeof === V ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function rh(t) {
    function l(A, p) {
      if (t) {
        var M = A.deletions;
        M === null ? (A.deletions = [p], A.flags |= 16) : M.push(p);
      }
    }
    function e(A, p) {
      if (!t) return null;
      for (; p !== null; )
        l(A, p), p = p.sibling;
      return null;
    }
    function a(A) {
      for (var p = /* @__PURE__ */ new Map(); A !== null; )
        A.key === null ? p.set(A.index, A) : p.set(A.key, A), A = A.sibling;
      return p;
    }
    function n(A, p) {
      return A = ze(A, p), A.index = 0, A.sibling = null, A;
    }
    function i(A, p, M) {
      return A.index = M, t ? (M = A.alternate, M !== null ? (M = M.index, M < p ? (A.flags |= 2, p) : M) : (A.flags |= 134217730, p)) : (A.flags |= 1048576, p);
    }
    function r(A) {
      return t && A.alternate === null && (A.flags |= 134217730), A;
    }
    function h(A, p, M, D) {
      return p === null || p.tag !== 6 ? (p = qf(M, A.mode, D), p.return = A, p) : (p = n(p, M), p.return = A, p);
    }
    function m(A, p, M, D) {
      var Z = M.type;
      return Z === rt ? (A = N(
        A,
        p,
        M.props.children,
        D,
        M.key
      ), Qe(A, M), A) : p !== null && (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === F && Na(Z) === p.type) ? (p = n(p, M.props), Qe(p, M), p.return = A, p) : (p = $u(
        M.type,
        M.key,
        M.props,
        null,
        A.mode,
        D
      ), Qe(p, M), p.return = A, p);
    }
    function z(A, p, M, D) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== M.containerInfo || p.stateNode.implementation !== M.implementation ? (p = Gf(M, A.mode, D), p.return = A, p) : (p = n(p, M.children || []), p.return = A, p);
    }
    function N(A, p, M, D, Z) {
      return p === null || p.tag !== 7 ? (p = ba(
        M,
        A.mode,
        D,
        Z
      ), p.return = A, p) : (p = n(p, M), p.return = A, p);
    }
    function U(A, p, M) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = qf(
          "" + p,
          A.mode,
          M
        ), p.return = A, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ct:
            return M = $u(
              p.type,
              p.key,
              p.props,
              null,
              A.mode,
              M
            ), Qe(M, p), M.return = A, M;
          case J:
            return p = Gf(
              p,
              A.mode,
              M
            ), p.return = A, p;
          case F:
            return p = Na(p), U(A, p, M);
        }
        if (bt(p) || tt(p))
          return p = ba(
            p,
            A.mode,
            M,
            null
          ), p.return = A, p;
        if (typeof p.then == "function")
          return U(A, ii(p), M);
        if (p.$$typeof === zt)
          return U(
            A,
            ei(A, p),
            M
          );
        fi(A, p);
      }
      return null;
    }
    function b(A, p, M, D) {
      var Z = p !== null ? p.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return Z !== null ? null : h(A, p, "" + M, D);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ct:
            return M.key === Z ? m(A, p, M, D) : null;
          case J:
            return M.key === Z ? z(A, p, M, D) : null;
          case F:
            return M = Na(M), b(A, p, M, D);
        }
        if (bt(M) || tt(M))
          return Z !== null ? null : N(A, p, M, D, null);
        if (typeof M.then == "function")
          return b(
            A,
            p,
            ii(M),
            D
          );
        if (M.$$typeof === zt)
          return b(
            A,
            p,
            ei(A, M),
            D
          );
        fi(A, M);
      }
      return null;
    }
    function O(A, p, M, D, Z) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return A = A.get(M) || null, h(p, A, "" + D, Z);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ct:
            return A = A.get(
              D.key === null ? M : D.key
            ) || null, m(p, A, D, Z);
          case J:
            return A = A.get(
              D.key === null ? M : D.key
            ) || null, z(p, A, D, Z);
          case F:
            return D = Na(D), O(
              A,
              p,
              M,
              D,
              Z
            );
        }
        if (bt(D) || tt(D))
          return A = A.get(M) || null, N(p, A, D, Z, null);
        if (typeof D.then == "function")
          return O(
            A,
            p,
            M,
            ii(D),
            Z
          );
        if (D.$$typeof === zt)
          return O(
            A,
            p,
            M,
            ei(p, D),
            Z
          );
        fi(p, D);
      }
      return null;
    }
    function X(A, p, M, D) {
      for (var Z = null, At = null, at = p, ft = p = 0, tl = null; at !== null && ft < M.length; ft++) {
        at.index > ft ? (tl = at, at = null) : tl = at.sibling;
        var xt = b(
          A,
          at,
          M[ft],
          D
        );
        if (xt === null) {
          at === null && (at = tl);
          break;
        }
        t && at && xt.alternate === null && l(A, at), p = i(xt, p, ft), At === null ? Z = xt : At.sibling = xt, At = xt, at = tl;
      }
      if (ft === M.length)
        return e(A, at), yt && Me(A, ft), Z;
      if (at === null) {
        for (; ft < M.length; ft++)
          at = U(A, M[ft], D), at !== null && (p = i(
            at,
            p,
            ft
          ), At === null ? Z = at : At.sibling = at, At = at);
        return yt && Me(A, ft), Z;
      }
      for (at = a(at); ft < M.length; ft++)
        tl = O(
          at,
          A,
          ft,
          M[ft],
          D
        ), tl !== null && (t && (xt = tl.alternate, xt !== null && at.delete(xt.key === null ? ft : xt.key)), p = i(
          tl,
          p,
          ft
        ), At === null ? Z = tl : At.sibling = tl, At = tl);
      return t && at.forEach(function(sa) {
        return l(A, sa);
      }), yt && Me(A, ft), Z;
    }
    function W(A, p, M, D) {
      if (M == null) throw Error(s(151));
      for (var Z = null, At = null, at = p, ft = p = 0, tl = null, xt = M.next(); at !== null && !xt.done; ft++, xt = M.next()) {
        at.index > ft ? (tl = at, at = null) : tl = at.sibling;
        var sa = b(A, at, xt.value, D);
        if (sa === null) {
          at === null && (at = tl);
          break;
        }
        t && at && sa.alternate === null && l(A, at), p = i(sa, p, ft), At === null ? Z = sa : At.sibling = sa, At = sa, at = tl;
      }
      if (xt.done)
        return e(A, at), yt && Me(A, ft), Z;
      if (at === null) {
        for (; !xt.done; ft++, xt = M.next())
          xt = U(A, xt.value, D), xt !== null && (p = i(xt, p, ft), At === null ? Z = xt : At.sibling = xt, At = xt);
        return yt && Me(A, ft), Z;
      }
      for (at = a(at); !xt.done; ft++, xt = M.next())
        xt = O(at, A, ft, xt.value, D), xt !== null && (t && (tl = xt.alternate, tl !== null && at.delete(
          tl.key === null ? ft : tl.key
        )), p = i(xt, p, ft), At === null ? Z = xt : At.sibling = xt, At = xt);
      return t && at.forEach(function(jv) {
        return l(A, jv);
      }), yt && Me(A, ft), Z;
    }
    function gt(A, p, M, D) {
      if (typeof M == "object" && M !== null && M.type === rt && M.key === null && M.props.ref === void 0 && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ct:
            t: {
              for (var Z = M.key; p !== null; ) {
                if (p.key === Z) {
                  if (Z = M.type, Z === rt) {
                    if (p.tag === 7) {
                      e(
                        A,
                        p.sibling
                      ), D = n(
                        p,
                        M.props.children
                      ), Qe(D, M), D.return = A, A = D;
                      break t;
                    }
                  } else if (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === F && Na(Z) === p.type) {
                    e(
                      A,
                      p.sibling
                    ), D = n(p, M.props), Qe(D, M), D.return = A, A = D;
                    break t;
                  }
                  e(A, p);
                  break;
                } else l(A, p);
                p = p.sibling;
              }
              M.type === rt ? (D = ba(
                M.props.children,
                A.mode,
                D,
                M.key
              ), Qe(D, M), D.return = A, A = D) : (D = $u(
                M.type,
                M.key,
                M.props,
                null,
                A.mode,
                D
              ), Qe(D, M), D.return = A, A = D);
            }
            return r(A);
          case J:
            t: {
              for (Z = M.key; p !== null; ) {
                if (p.key === Z)
                  if (p.tag === 4 && p.stateNode.containerInfo === M.containerInfo && p.stateNode.implementation === M.implementation) {
                    e(
                      A,
                      p.sibling
                    ), D = n(p, M.children || []), D.return = A, A = D;
                    break t;
                  } else {
                    e(A, p);
                    break;
                  }
                else l(A, p);
                p = p.sibling;
              }
              D = Gf(M, A.mode, D), D.return = A, A = D;
            }
            return r(A);
          case F:
            return M = Na(M), gt(
              A,
              p,
              M,
              D
            );
        }
        if (bt(M))
          return X(
            A,
            p,
            M,
            D
          );
        if (tt(M)) {
          if (Z = tt(M), typeof Z != "function") throw Error(s(150));
          return M = Z.call(M), W(
            A,
            p,
            M,
            D
          );
        }
        if (typeof M.then == "function")
          return gt(
            A,
            p,
            ii(M),
            D
          );
        if (M.$$typeof === zt)
          return gt(
            A,
            p,
            ei(A, M),
            D
          );
        fi(A, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, p !== null && p.tag === 6 ? (e(A, p.sibling), D = n(p, M), D.return = A, A = D) : (e(A, p), D = qf(M, A.mode, D), D.return = A, A = D), r(A)) : e(A, p);
    }
    return function(A, p, M, D) {
      try {
        In = 0;
        var Z = gt(
          A,
          p,
          M,
          D
        );
        return fn = null, Z;
      } catch (at) {
        if (at === un || at === ni) throw at;
        var At = _l(29, at, null, A.mode);
        return At.lanes = D, At.return = A, At;
      }
    };
  }
  var Ra = rh(!0), hh = rh(!1), Ze = !1;
  function Ff(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wf(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ke(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Je(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Rt & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = Wu(t), Fr(t, null, e), l;
    }
    return Fu(t, a, l, e), Wu(t);
  }
  function kn(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, ks(t, e);
    }
  }
  function $f(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, i = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var r = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = r : i = i.next = r, e = e.next;
        } while (e !== null);
        i === null ? n = i = l : i = i.next = l;
      } else n = i = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var If = !1;
  function Pn() {
    if (If) {
      var t = nn;
      if (t !== null) throw t;
    }
  }
  function tu(t, l, e, a) {
    If = !1;
    var n = t.updateQueue;
    Ze = !1;
    var i = n.firstBaseUpdate, r = n.lastBaseUpdate, h = n.shared.pending;
    if (h !== null) {
      n.shared.pending = null;
      var m = h, z = m.next;
      m.next = null, r === null ? i = z : r.next = z, r = m;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, h = N.lastBaseUpdate, h !== r && (h === null ? N.firstBaseUpdate = z : h.next = z, N.lastBaseUpdate = m));
    }
    if (i !== null) {
      var U = n.baseState;
      r = 0, N = z = m = null, h = i;
      do {
        var b = h.lane & -536870913, O = b !== h.lane;
        if (O ? (_t & b) === b : (a & b) === b) {
          b !== 0 && b === xa && (If = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var X = t, W = h;
            b = l;
            var gt = e;
            switch (W.tag) {
              case 1:
                if (X = W.payload, typeof X == "function") {
                  U = X.call(gt, U, b);
                  break t;
                }
                U = X;
                break t;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = W.payload, b = typeof X == "function" ? X.call(gt, U, b) : X, b == null) break t;
                U = K({}, U, b);
                break t;
              case 2:
                Ze = !0;
            }
          }
          b = h.callback, b !== null && (t.flags |= 64, O && (t.flags |= 8192), O = n.callbacks, O === null ? n.callbacks = [b] : O.push(b));
        } else
          O = {
            lane: b,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, N === null ? (z = N = O, m = U) : N = N.next = O, r |= b;
        if (h = h.next, h === null) {
          if (h = n.shared.pending, h === null)
            break;
          O = h, h = O.next, O.next = null, n.lastBaseUpdate = O, n.shared.pending = null;
        }
      } while (!0);
      N === null && (m = U), n.baseState = m, n.firstBaseUpdate = z, n.lastBaseUpdate = N, i === null && (n.shared.lanes = 0), ta |= r, t.lanes = r, t.memoizedState = U;
    }
  }
  function oh(t, l) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(l);
  }
  function dh(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        oh(e[t], l);
  }
  var Fe = Tl(null), ci = Tl(0);
  function gh(t, l) {
    t = Ue, wt(ci, t), wt(Fe, l), Ue = t | l.baseLanes;
  }
  function kf() {
    wt(ci, Ue), wt(Fe, Fe.current);
  }
  function Pf() {
    Ue = ci.current, Kt(Fe), Kt(ci);
  }
  var sl = Tl(null), vl = null;
  function We(t) {
    var l = t.alternate;
    wt(rl, rl.current & 1), wt(sl, t), vl === null && (l === null || Fe.current !== null || l.memoizedState !== null) && (vl = t);
  }
  function tc(t) {
    wt(rl, rl.current), wt(sl, t), vl === null && (vl = t);
  }
  function vh(t) {
    t.tag === 22 ? (wt(rl, rl.current), wt(sl, t), vl === null && (vl = t)) : $e();
  }
  function $e() {
    wt(rl, rl.current), wt(sl, sl.current);
  }
  function Ul(t) {
    Kt(sl), vl === t && (vl = null), Kt(rl);
  }
  var rl = Tl(0);
  function lu(t, l) {
    wt(sl, sl.current), wt(rl, l);
  }
  function lc(t) {
    Kt(rl), Kt(sl), vl === t && (vl = null);
  }
  function si(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || _s(e) || As(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== "independent") {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Ne = 0, dt = null, Gt = null, kt = null, ri = !1, cn = !1, Da = !1, hi = 0, eu = 0, sn = null, sg = 0;
  function Jt() {
    throw Error(s(321));
  }
  function ec(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Dl(t[e], l[e])) return !1;
    return !0;
  }
  function ac(t, l, e, a, n, i) {
    return Ne = i, dt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, P.H = t === null || t.memoizedState === null ? kh : Ph, Da = !1, i = e(a, n), Da = !1, cn && (i = yh(
      l,
      e,
      a,
      n
    )), mh(t), i;
  }
  function mh(t) {
    P.H = Si;
    var l = Gt !== null && Gt.next !== null;
    if (Ne = 0, kt = Gt = dt = null, ri = !1, eu = 0, sn = null, l) throw Error(s(300));
    t === null || Pt || (t = t.dependencies, t !== null && li(t) && (Pt = !0));
  }
  function yh(t, l, e, a) {
    dt = t;
    var n = 0;
    do {
      if (cn && (sn = null), eu = 0, cn = !1, 25 <= n) throw Error(s(301));
      if (n += 1, kt = Gt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      P.H = yg, i = l(e, a);
    } while (cn);
    return i;
  }
  function rg() {
    var t = P.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? au(l) : l, t = t.useState()[0], (Gt !== null ? Gt.memoizedState : null) !== t && (dt.flags |= 1024), l;
  }
  function nc() {
    var t = hi !== 0;
    return hi = 0, t;
  }
  function uc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ic(t) {
    if (ri) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      ri = !1;
    }
    Ne = 0, kt = Gt = dt = null, cn = !1, eu = hi = 0, sn = null;
  }
  function yl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return kt === null ? dt.memoizedState = kt = t : kt = kt.next = t, kt;
  }
  function Wt() {
    if (Gt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Gt.next;
    var l = kt === null ? dt.memoizedState : kt.next;
    if (l !== null)
      kt = l, Gt = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(s(467)) : Error(s(310));
      Gt = t, t = {
        memoizedState: Gt.memoizedState,
        baseState: Gt.baseState,
        baseQueue: Gt.baseQueue,
        queue: Gt.queue,
        next: null
      }, kt === null ? dt.memoizedState = kt = t : kt = kt.next = t;
    }
    return kt;
  }
  function oi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function au(t) {
    var l = eu;
    return eu += 1, sn === null && (sn = []), t = fh(sn, t, l), l = dt, (kt === null ? l.memoizedState : kt.next) === null && (l = l.alternate, P.H = l === null || l.memoizedState === null ? kh : Ph), t;
  }
  function di(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return au(t);
      if (t.$$typeof === B) return;
      if (t.$$typeof === zt) return cl(t);
    }
    throw Error(s(438, String(t)));
  }
  function fc(t) {
    var l = null, e = dt.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = dt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = oi(), dt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Zt;
    return l.index++, e;
  }
  function Ce(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function gi(t) {
    var l = Wt();
    return cc(l, Gt, t);
  }
  function cc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var r = n.next;
        n.next = i.next, i.next = r;
      }
      l.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      l = n.next;
      var h = r = null, m = null, z = l, N = !1;
      do {
        var U = z.lane & -536870913;
        if (U !== z.lane ? (_t & U) === U : (Ne & U) === U) {
          var b = z.revertLane;
          if (b === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), U === xa && (N = !0);
          else if ((Ne & b) === b) {
            z = z.next, b === xa && (N = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, m === null ? (h = m = U, r = i) : m = m.next = U, dt.lanes |= b, ta |= b;
          U = z.action, Da && e(i, U), i = z.hasEagerState ? z.eagerState : e(i, U);
        } else
          b = {
            lane: U,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, m === null ? (h = m = b, r = i) : m = m.next = b, dt.lanes |= U, ta |= U;
        z = z.next;
      } while (z !== null && z !== l);
      if (m === null ? r = i : m.next = h, !Dl(i, t.memoizedState) && (Pt = !0, N && (e = nn, e !== null)))
        throw e;
      t.memoizedState = i, t.baseState = r, t.baseQueue = m, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function sc(t) {
    var l = Wt(), e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, i = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var r = n = n.next;
      do
        i = t(i, r.action), r = r.next;
      while (r !== n);
      Dl(i, l.memoizedState) || (Pt = !0), l.memoizedState = i, l.baseQueue === null && (l.baseState = i), e.lastRenderedState = i;
    }
    return [i, a];
  }
  function Sh(t, l, e) {
    var a = dt, n = Wt(), i = yt;
    if (i) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var r = !Dl(
      (Gt || n).memoizedState,
      e
    );
    if (r && (n.memoizedState = e, Pt = !0), n = n.queue, oc(ph.bind(null, a, n, t), [
      t
    ]), t = n.getSnapshot !== l || r || kt !== null && (kt.memoizedState.tag & 1) !== 0, rn(
      t ? 9 : 8,
      { destroy: void 0 },
      Th.bind(null, a, n, e, l),
      null
    ), t) {
      if (a.flags |= 2048, Yt === null) throw Error(s(349));
      i || (Ne & 127) !== 0 || Eh(a, l, e);
    }
    return e;
  }
  function Eh(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = dt.updateQueue, l === null ? (l = oi(), dt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Th(t, l, e, a) {
    l.value = e, l.getSnapshot = a, bh(l) && _h(t);
  }
  function ph(t, l, e) {
    return e(function() {
      bh(l) && _h(t);
    });
  }
  function bh(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Dl(t, e);
    } catch {
      return !0;
    }
  }
  function _h(t) {
    var l = pa(t, 2);
    l !== null && xl(l, t, 2);
  }
  function rc(t) {
    var l = yl();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Da) {
        pl(!0);
        try {
          e();
        } finally {
          pl(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ce,
      lastRenderedState: t
    }, l;
  }
  function Ah(t, l, e, a) {
    return t.baseState = e, cc(
      t,
      Gt,
      typeof a == "function" ? a : Ce
    );
  }
  function hg(t, l, e, a, n) {
    if (yi(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(r) {
          i.listeners.push(r);
        }
      };
      P.T !== null ? e(!0) : i.isTransition = !1, a(i), e = l.pending, e === null ? (i.next = l.pending = i, zh(l, i)) : (i.next = e.next, l.pending = e.next = i);
    }
  }
  function zh(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var i = P.T, r = {};
      r.types = i !== null ? i.types : null, P.T = r;
      try {
        var h = e(n, a), m = P.S;
        m !== null && m(r, h), Mh(t, l, h);
      } catch (z) {
        hc(t, l, z);
      } finally {
        i !== null && r.types !== null && (i.types = r.types), P.T = i;
      }
    } else
      try {
        i = e(n, a), Mh(t, l, i);
      } catch (z) {
        hc(t, l, z);
      }
  }
  function Mh(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        xh(t, l, a);
      },
      function(a) {
        return hc(t, l, a);
      }
    ) : xh(t, l, e);
  }
  function xh(t, l, e) {
    l.status = "fulfilled", l.value = e, Oh(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, zh(t, e)));
  }
  function hc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, Oh(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function Oh(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Nh(t, l) {
    return l;
  }
  function Ch(t, l) {
    if (yt) {
      var e = Yt.formState;
      if (e !== null) {
        t: {
          var a = dt;
          if (yt) {
            if (Xt) {
              l: {
                for (var n = Xt, i = Jl; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break l;
                  }
                  if (n = Wl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Xt = Wl(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            je(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = yl(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nh,
      lastRenderedState: l
    }, e.queue = a, e = Wh.bind(
      null,
      dt,
      a
    ), a.dispatch = e, a = rc(!1), i = yc.bind(
      null,
      dt,
      !1,
      a.queue
    ), a = yl(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = hg.bind(
      null,
      dt,
      n,
      i,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function Rh(t) {
    var l = Wt();
    return Dh(l, Gt, t);
  }
  function Dh(t, l, e) {
    if (l = cc(
      t,
      l,
      Nh
    )[0], t = gi(Ce)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = au(l);
      } catch (r) {
        throw r === un ? ni : r;
      }
    else a = l;
    l = Wt();
    var n = l.queue, i = n.dispatch;
    return e !== l.memoizedState && (dt.flags |= 2048, rn(
      9,
      { destroy: void 0 },
      og.bind(null, n, e),
      null
    )), [a, i, t];
  }
  function og(t, l) {
    t.action = l;
  }
  function Uh(t) {
    var l = Wt(), e = Gt;
    if (e !== null)
      return Dh(l, e, t);
    Wt(), l = l.memoizedState, e = Wt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function rn(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = dt.updateQueue, l === null && (l = oi(), dt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function Hh() {
    return Wt().memoizedState;
  }
  function vi(t, l, e, a) {
    var n = yl();
    dt.flags |= t, n.memoizedState = rn(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function mi(t, l, e, a) {
    var n = Wt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Gt !== null && a !== null && ec(a, Gt.memoizedState.deps) ? n.memoizedState = rn(l, i, e, a) : (dt.flags |= t, n.memoizedState = rn(
      1 | l,
      i,
      e,
      a
    ));
  }
  function Bh(t, l) {
    vi(8390656, 8, t, l);
  }
  function oc(t, l) {
    mi(2048, 8, t, l);
  }
  function dg(t) {
    dt.flags |= 4;
    var l = dt.updateQueue;
    if (l === null)
      l = oi(), dt.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function wh(t) {
    var l = Wt().memoizedState;
    return dg({ ref: l, nextImpl: t }), function() {
      if ((Rt & 2) !== 0) throw Error(s(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function qh(t, l) {
    return mi(4, 2, t, l);
  }
  function Gh(t, l) {
    return mi(4, 4, t, l);
  }
  function Yh(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Xh(t, l, e) {
    e = e != null ? e.concat([t]) : null, mi(4, 4, Yh.bind(null, l, t), e);
  }
  function dc() {
  }
  function Lh(t, l) {
    var e = Wt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && ec(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function jh(t, l) {
    var e = Wt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && ec(l, a[1]))
      return a[0];
    if (a = t(), Da) {
      pl(!0);
      try {
        t();
      } finally {
        pl(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function gc(t, l, e) {
    return e === void 0 || (Ne & 1073741824) !== 0 && (_t & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = k0(), dt.lanes |= t, ta |= t, e);
  }
  function Vh(t, l, e, a) {
    return Dl(e, l) ? e : Fe.current !== null ? (t = gc(t, e, a), Dl(t, l) || (Pt = !0), t) : (Ne & 106) === 0 || (Ne & 1073741824) !== 0 && (_t & 261930) === 0 ? (Pt = !0, t.memoizedState = e) : (t = k0(), dt.lanes |= t, ta |= t, l);
  }
  function Qh(t, l, e, a, n) {
    var i = nt.p;
    nt.p = i !== 0 && 8 > i ? i : 8;
    var r = P.T, h = {};
    h.types = r !== null ? r.types : null, P.T = h, yc(t, !1, l, e);
    try {
      var m = n(), z = P.S;
      if (z !== null && z(h, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var N = cg(
          m,
          a
        );
        nu(
          t,
          l,
          N,
          ql(t)
        );
      } else
        nu(
          t,
          l,
          a,
          ql(t)
        );
    } catch (U) {
      nu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: U },
        ql()
      );
    } finally {
      nt.p = i, r !== null && h.types !== null && (r.types = h.types), P.T = r;
    }
  }
  function gg() {
  }
  function vc(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var n = Zh(t).queue;
    Qh(
      t,
      n,
      l,
      gl,
      e === null ? gg : function() {
        return Kh(t), e(a);
      }
    );
  }
  function Zh(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: gl,
      baseState: gl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ce,
        lastRenderedState: gl
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ce,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Kh(t) {
    var l = Zh(t);
    l.next === null && (l = t.alternate.memoizedState), nu(
      t,
      l.next.queue,
      {},
      ql()
    );
  }
  function mc() {
    return cl(Nn);
  }
  function Jh() {
    return Wt().memoizedState;
  }
  function Fh() {
    return Wt().memoizedState;
  }
  function vg(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = ql();
          t = Ke(e);
          var a = Je(l, t, e);
          a !== null && (xl(a, l, e), kn(a, l, e)), l = { cache: Qf() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function mg(t, l, e) {
    var a = ql();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(t) ? $h(l, e) : (e = Bf(t, l, e, a), e !== null && (xl(e, t, a), Ih(e, l, a)));
  }
  function Wh(t, l, e) {
    var a = ql();
    nu(t, l, e, a);
  }
  function nu(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yi(t)) $h(l, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = l.lastRenderedReducer, i !== null))
        try {
          var r = l.lastRenderedState, h = i(r, e);
          if (n.hasEagerState = !0, n.eagerState = h, Dl(h, r))
            return Fu(t, l, n, 0), Yt === null && Ju(), !1;
        } catch {
        }
      if (e = Bf(t, l, n, a), e !== null)
        return xl(e, t, a), Ih(e, l, a), !0;
    }
    return !1;
  }
  function yc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: fs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yi(t)) {
      if (l) throw Error(s(479));
    } else
      l = Bf(
        t,
        e,
        a,
        2
      ), l !== null && xl(l, t, 2);
  }
  function yi(t) {
    var l = t.alternate;
    return t === dt || l !== null && l === dt;
  }
  function $h(t, l) {
    cn = ri = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Ih(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, ks(t, e);
    }
  }
  var Si = {
    readContext: cl,
    use: di,
    useCallback: Jt,
    useContext: Jt,
    useEffect: Jt,
    useImperativeHandle: Jt,
    useLayoutEffect: Jt,
    useInsertionEffect: Jt,
    useMemo: Jt,
    useReducer: Jt,
    useRef: Jt,
    useState: Jt,
    useDebugValue: Jt,
    useDeferredValue: Jt,
    useTransition: Jt,
    useSyncExternalStore: Jt,
    useId: Jt,
    useHostTransitionStatus: Jt,
    useFormState: Jt,
    useActionState: Jt,
    useOptimistic: Jt,
    useMemoCache: Jt,
    useCacheRefresh: Jt,
    useEffectEvent: Jt
  }, kh = {
    readContext: cl,
    use: di,
    useCallback: function(t, l) {
      return yl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: cl,
    useEffect: Bh,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, vi(
        4194308,
        4,
        Yh.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return vi(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      vi(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = yl();
      l = l === void 0 ? null : l;
      var a = t();
      if (Da) {
        pl(!0);
        try {
          t();
        } finally {
          pl(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = yl();
      if (e !== void 0) {
        var n = e(l);
        if (Da) {
          pl(!0);
          try {
            e(l);
          } finally {
            pl(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = mg.bind(
        null,
        dt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = yl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = rc(t);
      var l = t.queue, e = Wh.bind(null, dt, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: dc,
    useDeferredValue: function(t, l) {
      var e = yl();
      return gc(e, t, l);
    },
    useTransition: function() {
      var t = rc(!1);
      return t = Qh.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), yl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = dt, n = yl();
      if (yt) {
        if (e === void 0)
          throw Error(s(407));
        e = e();
      } else {
        if (e = l(), Yt === null)
          throw Error(s(349));
        (_t & 127) !== 0 || Eh(a, l, e);
      }
      n.memoizedState = e;
      var i = { value: e, getSnapshot: l };
      return n.queue = i, Bh(ph.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, rn(
        9,
        { destroy: void 0 },
        Th.bind(
          null,
          a,
          i,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = yl(), l = Yt.identifierPrefix;
      if (yt) {
        var e = se, a = ce;
        e = (a & ~(1 << 32 - Cl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = hi++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = sg++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: mc,
    useFormState: Ch,
    useActionState: Ch,
    useOptimistic: function(t) {
      var l = yl();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = yc.bind(
        null,
        dt,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: fc,
    useCacheRefresh: function() {
      return yl().memoizedState = vg.bind(
        null,
        dt
      );
    },
    useEffectEvent: function(t) {
      var l = yl(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((Rt & 2) !== 0)
          throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Ph = {
    readContext: cl,
    use: di,
    useCallback: Lh,
    useContext: cl,
    useEffect: oc,
    useImperativeHandle: Xh,
    useInsertionEffect: qh,
    useLayoutEffect: Gh,
    useMemo: jh,
    useReducer: gi,
    useRef: Hh,
    useState: function() {
      return gi(Ce);
    },
    useDebugValue: dc,
    useDeferredValue: function(t, l) {
      var e = Wt();
      return Vh(
        e,
        Gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = gi(Ce)[0], l = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : au(t),
        l
      ];
    },
    useSyncExternalStore: Sh,
    useId: Jh,
    useHostTransitionStatus: mc,
    useFormState: Rh,
    useActionState: Rh,
    useOptimistic: function(t, l) {
      var e = Wt();
      return Ah(e, Gt, t, l);
    },
    useMemoCache: fc,
    useCacheRefresh: Fh,
    useEffectEvent: wh
  }, yg = {
    readContext: cl,
    use: di,
    useCallback: Lh,
    useContext: cl,
    useEffect: oc,
    useImperativeHandle: Xh,
    useInsertionEffect: qh,
    useLayoutEffect: Gh,
    useMemo: jh,
    useReducer: sc,
    useRef: Hh,
    useState: function() {
      return sc(Ce);
    },
    useDebugValue: dc,
    useDeferredValue: function(t, l) {
      var e = Wt();
      return Gt === null ? gc(e, t, l) : Vh(
        e,
        Gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = sc(Ce)[0], l = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : au(t),
        l
      ];
    },
    useSyncExternalStore: Sh,
    useId: Jh,
    useHostTransitionStatus: mc,
    useFormState: Uh,
    useActionState: Uh,
    useOptimistic: function(t, l) {
      var e = Wt();
      return Gt !== null ? Ah(e, Gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: fc,
    useCacheRefresh: Fh,
    useEffectEvent: wh
  };
  function Sc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : K({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Ec = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = ql(), n = Ke(a);
      n.payload = l, e != null && (n.callback = e), l = Je(t, n, a), l !== null && (xl(l, t, a), kn(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = ql(), n = Ke(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = Je(t, n, a), l !== null && (xl(l, t, a), kn(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = ql(), a = Ke(e);
      a.tag = 2, l != null && (a.callback = l), l = Je(t, a, e), l !== null && (xl(l, t, e), kn(l, t, e));
    }
  };
  function t0(t, l, e, a, n, i, r) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, r) : l.prototype && l.prototype.isPureReactComponent ? !Qn(e, a) || !Qn(n, i) : !0;
  }
  function l0(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Ec.enqueueReplaceState(l, l.state, null);
  }
  function Ua(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = K({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function e0(t) {
    Ku(t);
  }
  function a0(t) {
    console.error(t);
  }
  function n0(t) {
    Ku(t);
  }
  function Ei(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function u0(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Tc(t, l, e) {
    return e = Ke(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Ei(t, l);
    }, e;
  }
  function i0(t) {
    return t = Ke(t), t.tag = 3, t;
  }
  function f0(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        u0(l, e, a);
      };
    }
    var r = e.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
      u0(l, e, a), typeof n != "function" && (la === null ? la = /* @__PURE__ */ new Set([this]) : la.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Sg(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && za(
        l,
        e,
        n,
        !0
      ), e = sl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return vl === null ? Xi() : e.alternate === null && Ft === 0 && (Ft = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === ui ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), ns(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === ui ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), ns(t, a, n)), !1;
        }
        throw Error(s(435, e.tag));
      }
      return ns(t, a, n), Xi(), !1;
    }
    if (yt)
      return l = sl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Xf && (t = Error(s(422), { cause: a }), Jn(Ql(t, e)))) : (a !== Xf && (l = Error(s(423), {
        cause: a
      }), Jn(
        Ql(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ql(a, e), n = Tc(
        t.stateNode,
        a,
        n
      ), $f(t, n), Ft !== 4 && (Ft = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = Ql(i, e), ou === null ? ou = [i] : ou.push(i), Ft !== 4 && (Ft = 2), l === null) return !0;
    a = Ql(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = Tc(e.stateNode, a, t), $f(e, t), !1;
        case 1:
          if (l = e.type, i = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (la === null || !la.has(i))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = i0(n), f0(
              n,
              t,
              e,
              a
            ), $f(e, n), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var pc = Error(s(461)), Pt = !1;
  function ll(t, l, e, a) {
    l.child = t === null ? hh(l, null, e, a) : Ra(
      l,
      t.child,
      e,
      a
    );
  }
  function c0(t, l, e, a, n) {
    e = e.render;
    var i = l.ref;
    if ("ref" in a) {
      var r = {};
      for (var h in a)
        h !== "ref" && (r[h] = a[h]);
    } else r = a;
    return Ma(l), a = ac(
      t,
      l,
      e,
      r,
      i,
      n
    ), h = nc(), t !== null && !Pt ? (uc(t, l, n), Re(t, l, n)) : (yt && h && ku(l), l.flags |= 1, ll(t, l, a, n), l.child);
  }
  function s0(t, l, e, a, n) {
    if (t === null) {
      var i = e.type;
      return typeof i == "function" && !wf(i) && i.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = i, r0(
        t,
        l,
        i,
        a,
        n
      )) : (t = $u(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (i = t.child, !Nc(t, n)) {
      var r = i.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Qn, e(r, a) && t.ref === l.ref)
        return Re(t, l, n);
    }
    return l.flags |= 1, t = ze(i, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function r0(t, l, e, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Qn(i, a) && t.ref === l.ref)
        if (Pt = !1, l.pendingProps = a = i, Nc(t, n))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return l.lanes = t.lanes, Re(t, l, n);
    }
    return bc(
      t,
      l,
      e,
      a,
      n
    );
  }
  function h0(t, l, e, a) {
    var n = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, l.child = null;
        return o0(
          t,
          l,
          i,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ai(
          l,
          i !== null ? i.cachePool : null
        ), i !== null ? gh(l, i) : kf(), vh(l);
      else
        return a = l.lanes = 536870912, o0(
          t,
          l,
          i !== null ? i.baseLanes | e : e,
          e,
          a
        );
    } else
      i !== null ? (ai(l, i.cachePool), gh(l, i), $e(), l.memoizedState = null) : (t !== null && ai(l, null), kf(), $e());
    return ll(t, l, n, e), l.child;
  }
  function uu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function o0(t, l, e, a, n) {
    var i = Kf();
    return i = i === null ? null : { parent: It._currentValue, pool: i }, l.memoizedState = {
      baseLanes: e,
      cachePool: i
    }, t !== null && ai(l, null), kf(), vh(l), t !== null && za(t, l, a, !0), l.childLanes = n, null;
  }
  function Ti(t, l) {
    return l = pi(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function d0(t, l, e) {
    return Ra(l, t.child, null, e), t = Ti(l, l.pendingProps), t.flags |= 2, Ul(l), l.memoizedState = null, t;
  }
  function Eg(t, l, e) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (yt) {
        if (a.mode === "hidden")
          return t = Ti(l, a), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, uu(null, t);
        if (tc(l), (t = Xt) ? (t = Xo(
          t,
          Jl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Xe !== null ? { id: ce, overflow: se } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = $r(t), e.return = l, l.child = e, al = l, Xt = null)) : t = null, t === null) throw je(l);
        return l.lanes = 536870912, null;
      }
      return Ti(l, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var r = i.dehydrated;
      if (tc(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = d0(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(s(558));
      else if (Pt || za(t, l, e, !1), n = (e & t.childLanes) !== 0, Pt || n) {
        if (Fe.current === null) {
          if (a = Yt, a !== null && (r = Ps(a, e), r !== 0 && r !== i.retryLane))
            throw i.retryLane = r, pa(t, r), xl(a, t, r), pc;
          Xi();
        }
        l = d0(
          t,
          l,
          e
        );
      } else
        t = i.treeContext, Xt = Wl(r.nextSibling), al = l, yt = !0, Le = null, Jl = !1, t !== null && Pr(l, t), l = Ti(l, a), l.flags |= 134221824;
      return l;
    }
    return t = ze(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function hn(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function bc(t, l, e, a, n) {
    return Ma(l), e = ac(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = nc(), t !== null && !Pt ? (uc(t, l, n), Re(t, l, n)) : (yt && a && ku(l), l.flags |= 1, ll(t, l, e, n), l.child);
  }
  function g0(t, l, e, a, n, i) {
    return Ma(l), l.updateQueue = null, e = yh(
      l,
      a,
      e,
      n
    ), mh(t), a = nc(), t !== null && !Pt ? (uc(t, l, i), Re(t, l, i)) : (yt && a && ku(l), l.flags |= 1, ll(t, l, e, i), l.child);
  }
  function v0(t, l, e, a, n) {
    if (Ma(l), l.stateNode === null) {
      var i = tn, r = e.contextType;
      typeof r == "object" && r !== null && (i = cl(r)), i = new e(a, i), l.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ec, l.stateNode = i, i._reactInternals = l, i = l.stateNode, i.props = a, i.state = l.memoizedState, i.refs = {}, Ff(l), r = e.contextType, i.context = typeof r == "object" && r !== null ? cl(r) : tn, i.state = l.memoizedState, r = e.getDerivedStateFromProps, typeof r == "function" && (Sc(
        l,
        e,
        r,
        a
      ), i.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (r = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), r !== i.state && Ec.enqueueReplaceState(i, i.state, null), tu(l, a, i, n), Pn(), i.state = l.memoizedState), typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = l.stateNode;
      var h = l.memoizedProps, m = Ua(e, h);
      i.props = m;
      var z = i.context, N = e.contextType;
      r = tn, typeof N == "object" && N !== null && (r = cl(N));
      var U = e.getDerivedStateFromProps;
      N = typeof U == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = l.pendingProps !== h, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || z !== r) && l0(
        l,
        i,
        a,
        r
      ), Ze = !1;
      var b = l.memoizedState;
      i.state = b, tu(l, a, i, n), Pn(), z = l.memoizedState, h || b !== z || Ze ? (typeof U == "function" && (Sc(
        l,
        e,
        U,
        a
      ), z = l.memoizedState), (m = Ze || t0(
        l,
        e,
        m,
        a,
        b,
        z,
        r
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = z), i.props = a, i.state = z, i.context = r, a = m) : (typeof i.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      i = l.stateNode, Wf(t, l), r = l.memoizedProps, N = Ua(e, r), i.props = N, U = l.pendingProps, b = i.context, z = e.contextType, m = tn, typeof z == "object" && z !== null && (m = cl(z)), h = e.getDerivedStateFromProps, (z = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r !== U || b !== m) && l0(
        l,
        i,
        a,
        m
      ), Ze = !1, b = l.memoizedState, i.state = b, tu(l, a, i, n), Pn();
      var O = l.memoizedState;
      r !== U || b !== O || Ze || t !== null && t.dependencies !== null && li(t.dependencies) ? (typeof h == "function" && (Sc(
        l,
        e,
        h,
        a
      ), O = l.memoizedState), (N = Ze || t0(
        l,
        e,
        N,
        a,
        b,
        O,
        m
      ) || t !== null && t.dependencies !== null && li(t.dependencies)) ? (z || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, O, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        O,
        m
      )), typeof i.componentDidUpdate == "function" && (l.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || r === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = O), i.props = a, i.state = O, i.context = m, a = N) : (typeof i.componentDidUpdate != "function" || r === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return i = a, hn(t, l), a = (l.flags & 128) !== 0, i || a ? (i = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : i.render(), l.flags |= 1, t !== null && a ? (l.child = Ra(
      l,
      t.child,
      null,
      n
    ), l.child = Ra(
      l,
      null,
      e,
      n
    )) : ll(t, l, e, n), l.memoizedState = i.state, t = l.child) : t = Re(
      t,
      l,
      n
    ), t;
  }
  function m0(t, l, e, a) {
    return _a(), l.flags |= 256, ll(t, l, e, a), l.child;
  }
  var _c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ac(t) {
    return { baseLanes: t, cachePool: uh() };
  }
  function zc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= wl), t;
  }
  function y0(t, l, e) {
    var a = l.pendingProps, n = !1, i = (l.flags & 128) !== 0, r;
    if ((r = i) || (r = t !== null && t.memoizedState === null ? !1 : (rl.current & 2) !== 0), r && (n = !0, l.flags &= -129), r = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (yt) {
        if (n ? We(l) : $e(), (t = Xt) ? (t = Xo(
          t,
          Jl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Xe !== null ? { id: ce, overflow: se } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = $r(t), e.return = l, l.child = e, al = l, Xt = null)) : t = null, t === null) throw je(l);
        return As(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, n ? ($e(), n = l.mode, i = pi(
        { mode: "hidden", children: i },
        n
      ), a = ba(
        a,
        n,
        e,
        null
      ), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = Ac(e), a.childLanes = zc(
        t,
        r,
        e
      ), l.memoizedState = _c, uu(null, a)) : (We(l), Mc(l, i));
    }
    var h = t.memoizedState;
    if (h !== null) {
      var m = h.dehydrated;
      if (m !== null)
        return Tg(
          t,
          l,
          i,
          r,
          a,
          m,
          h,
          e
        );
    }
    return n ? ($e(), n = a.fallback, i = l.mode, h = t.child, m = h.sibling, a = ze(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 1206910976, m !== null ? n = ze(m, n) : (n = ba(
      n,
      i,
      e,
      null
    ), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, uu(null, a), a = l.child, n = t.child.memoizedState, n === null ? n = Ac(e) : (i = n.cachePool, i !== null ? (h = It._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = uh(), n = {
      baseLanes: n.baseLanes | e,
      cachePool: i
    }), a.memoizedState = n, a.childLanes = zc(
      t,
      r,
      e
    ), l.memoizedState = _c, uu(t.child, a)) : (We(l), e = t.child, t = e.sibling, e = ze(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (r = l.deletions, r === null ? (l.deletions = [t], l.flags |= 16) : r.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Mc(t, l) {
    return l = pi(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function pi(t, l) {
    return t = _l(22, t, null, l), t.lanes = 0, t;
  }
  function bi(t, l, e) {
    return Ra(l, t.child, null, e), t = Mc(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Tg(t, l, e, a, n, i, r, h) {
    if (e)
      return l.flags & 256 ? (We(l), l.flags &= -257, bi(
        t,
        l,
        h
      )) : l.memoizedState !== null ? ($e(), l.child = t.child, l.flags |= 128, null) : ($e(), i = n.fallback, r = l.mode, n = pi(
        { mode: "visible", children: n.children },
        r
      ), i = ba(
        i,
        r,
        h,
        null
      ), i.flags |= 2, n.return = l, i.return = l, n.sibling = i, l.child = n, Ra(l, t.child, null, h), n = l.child, n.memoizedState = Ac(h), n.childLanes = zc(
        t,
        a,
        h
      ), l.memoizedState = _c, uu(null, n));
    if (We(l), As(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var m = a.dgst;
      return a = m, a !== "" && (n = Error(s(419)), n.stack = "", n.digest = a, Jn({ value: n, source: null, stack: null })), bi(
        t,
        l,
        h
      );
    }
    if (Pt || za(t, l, h, !1), a = (h & t.childLanes) !== 0, Pt || a) {
      if (Fe.current !== null)
        return bi(
          t,
          l,
          h
        );
      if (a = Yt, a !== null && (n = Ps(
        a,
        h
      ), n !== 0 && n !== r.retryLane))
        throw r.retryLane = n, pa(t, n), xl(a, t, n), pc;
      return _s(i) || Xi(), bi(
        t,
        l,
        h
      );
    }
    return _s(i) ? (l.flags |= 192, l.child = t.child, null) : (t = r.treeContext, Xt = Wl(i.nextSibling), al = l, yt = !0, Le = null, Jl = !1, t !== null && Pr(l, t), l = Mc(
      l,
      n.children
    ), l.flags |= 134221824, l);
  }
  function S0(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), ti(t.return, l, e);
  }
  function E0(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && si(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function _i(t, l, e, a, n, i) {
    var r = t.memoizedState;
    r === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: i
    } : (r.isBackwards = l, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = e, r.tailMode = n, r.treeForkCount = i);
  }
  function xc(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Oc(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var r = rl.current;
    if (l.flags & 128)
      return lu(l, r), null;
    var h = (r & 2) !== 0;
    if (h ? (r = r & 1 | 2, l.flags |= 128) : r &= 1, lu(l, r), n === "backwards" && t !== null ? (xc(t), ll(t, l, a, e), xc(t)) : ll(t, l, a, e), a = yt ? Kn : 0, !h && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && S0(t, e, l);
        else if (t.tag === 19)
          S0(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "backwards":
        e = E0(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null, xc(l)), _i(
          l,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && si(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        _i(
          l,
          !0,
          e,
          null,
          i,
          a
        );
        break;
      case "together":
        _i(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = E0(l.child), e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), _i(
          l,
          !1,
          n,
          e,
          i,
          a
        );
    }
    return l.child;
  }
  function T0(t, l, e) {
    var a = l.pendingProps;
    return Ve(l, l.type, a.value), ll(t, l, a.children, e), l.child;
  }
  function Re(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), ta |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (za(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, e = ze(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = ze(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Nc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && li(t)));
  }
  function pg(t, l, e) {
    switch (l.tag) {
      case 3:
        we(l, l.stateNode.containerInfo), Ve(l, It, t.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        qe(l);
        break;
      case 4:
        we(l, l.stateNode.containerInfo);
        break;
      case 10:
        Ve(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, tc(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return We(l), l.flags |= 128, null;
          a = za(
            t,
            l,
            e,
            !1
          );
          var n = l.child.childLanes;
          return a || (e & n) !== 0 ? y0(t, l, e) : (We(l), t = Re(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        We(l);
        break;
      case 19:
        if (l.flags & 128)
          return Oc(
            t,
            l,
            e
          );
        if (n = (t.flags & 128) !== 0, a = (e & l.childLanes) !== 0, a || (za(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return Oc(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), lu(l, rl.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, h0(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Ve(l, It, t.memoizedState.cache);
    }
    return Re(t, l, e);
  }
  function p0(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Pt = !0;
      else {
        if (!Nc(t, e) && (l.flags & 128) === 0)
          return Pt = !1, pg(
            t,
            l,
            e
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, yt && (l.flags & 1048576) !== 0 && kr(l, Kn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = Na(l.elementType), l.type = t, typeof t == "function")
            wf(t) ? (a = Ua(t, a), l.tag = 1, l = v0(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = bc(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === G) {
                l.tag = 11, l = c0(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === j) {
                l.tag = 14, l = s0(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === zt) {
                l.tag = 10, l.type = t, l = T0(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = pt(t) || t, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return bc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = Ua(
          a,
          l.pendingProps
        ), v0(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (we(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          a = l.pendingProps;
          var i = l.memoizedState;
          n = i.element, Wf(t, l), tu(l, a, null, e);
          var r = l.memoizedState;
          if (a = r.cache, Ve(l, It, a), a !== i.cache && Vf(
            l,
            [It],
            e,
            !0
          ), Pn(), a = r.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: r.cache
            }, l.updateQueue.baseState = i, l.memoizedState = i, l.flags & 256) {
              l = m0(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = Ql(
                Error(s(424)),
                l
              ), Jn(n), l = m0(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Xt = Wl(t.firstChild), al = l, yt = !0, Le = null, Jl = !0, e = hh(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (_a(), a === n) {
              l = Re(
                t,
                l,
                e
              );
              break t;
            }
            ll(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return hn(t, l), t === null ? (e = Jo(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : yt || (l.stateNode = Mo(
          l.type,
          l.pendingProps,
          Il.current,
          l
        )) : l.memoizedState = Jo(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return qe(l), t === null && yt && (a = l.stateNode = Vo(
          l.type,
          l.pendingProps,
          Il.current
        ), al = l, Jl = !0, n = Xt, na(l.type) ? (zs = n, Xt = Wl(a.firstChild)) : Xt = n), ll(
          t,
          l,
          l.pendingProps.children,
          e
        ), hn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && yt && ((n = a = Xt) && (a = vv(
          a,
          l.type,
          l.pendingProps,
          Jl
        ), a !== null ? (l.stateNode = a, al = l, Xt = Wl(a.firstChild), Jl = !1, n = !0) : n = !1), n || je(l)), qe(l), n = l.type, i = l.pendingProps, r = t !== null ? t.memoizedProps : null, a = i.children, ms(n, i) ? a = null : r !== null && ms(n, r) && (l.flags |= 32), l.memoizedState !== null && (n = ac(
          t,
          l,
          rg,
          null,
          null,
          e
        ), Nn._currentValue = n), hn(t, l), ll(t, l, a, e), l.child;
      case 6:
        return t === null && yt && ((t = e = Xt) && (e = mv(
          e,
          l.pendingProps,
          Jl
        ), e !== null ? (l.stateNode = e, al = l, Xt = null, t = !0) : t = !1), t || je(l)), null;
      case 13:
        return y0(t, l, e);
      case 4:
        return we(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = Ra(
          l,
          null,
          a,
          e
        ) : ll(t, l, a, e), l.child;
      case 11:
        return c0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return a = l.pendingProps, hn(t, l), ll(t, l, a, e), l.child;
      case 8:
        return ll(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return ll(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return T0(t, l, e);
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Ma(l), n = cl(n), a = a(n), l.flags |= 1, ll(t, l, a, e), l.child;
      case 14:
        return s0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return r0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Oc(t, l, e);
      case 31:
        return Eg(t, l, e);
      case 22:
        return h0(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Ma(l), a = cl(It), t === null ? (n = Kf(), n === null && (n = Yt, i = Qf(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= e), n = i), l.memoizedState = { parent: a, cache: n }, Ff(l), Ve(l, It, n)) : ((t.lanes & e) !== 0 && (Wf(t, l), tu(l, null, null, e), Pn()), n = t.memoizedState, i = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), Ve(l, It, a)) : (a = i.cache, Ve(l, It, a), a !== n.cache && Vf(
          l,
          [It],
          e,
          !0
        ))), ll(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 30:
        return l.stateNode === null && (l.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = l.pendingProps, a.name != null && a.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : yt && ku(l), t !== null && t.memoizedProps.name !== a.name ? l.flags |= 4194816 : hn(t, l), ll(t, l, a.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function De(t) {
    t.flags |= 4;
  }
  function Cc(t, l, e, a, n) {
    var i;
    if ((i = (t.mode & 32) !== 0) && (i = e === null ? Io(l, a) : Io(l, a) && (a.src !== e.src || a.srcSet !== e.srcSet)), i) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (eo()) t.flags |= 8192;
        else
          throw Ca = ui, Jf;
    } else t.flags &= -16777217;
  }
  function b0(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ko(l))
      if (eo()) t.flags |= 8192;
      else
        throw Ca = ui, Jf;
  }
  function Ai(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? $s() : 536870912, t.lanes |= l, mn |= l);
  }
  function iu(t, l) {
    if (!yt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function Lt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function bg(t, l, e) {
    var a = l.pendingProps;
    switch (Yf(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(l), null;
      case 1:
        return Lt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Oe(It), Se(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (an(l) ? De(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Lf())), Lt(l), null;
      case 26:
        var n = l.type, i = l.memoizedState;
        return t === null ? (De(l), i !== null ? (Lt(l), b0(l, i)) : (Lt(l), Cc(
          l,
          n,
          null,
          a,
          e
        ))) : i ? i !== t.memoizedState ? (De(l), Lt(l), b0(l, i)) : (Lt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && De(l), Lt(l), Cc(
          l,
          n,
          t,
          a,
          e
        )), null;
      case 27:
        if (oa(l), e = Il.current, n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && De(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Lt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ol.current, an(l) ? th(l) : (t = Vo(n, a, e), l.stateNode = t, De(l));
        }
        return Lt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (oa(l), n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && De(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Lt(l), l.subtreeFlags &= -33554433, null;
          }
          if (i = Ol.current, an(l))
            th(l);
          else {
            var r = yu(
              Il.current
            );
            switch (i) {
              case 1:
                i = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = r.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? r.createElement("select", {
                      is: a.is
                    }) : r.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? r.createElement(n, { is: a.is }) : r.createElement(n);
                }
            }
            i[fl] = l, i[bl] = a;
            t: for (r = l.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                i.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === l) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === l)
                  break t;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            l.stateNode = i;
            t: switch (ol(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && De(l);
          }
        }
        return Lt(l), l.subtreeFlags &= -33554433, Cc(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && De(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(s(166));
          if (t = Il.current, an(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = al, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[fl] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || bo(t.nodeValue, e)), t || je(l, !0);
          } else
            t = yu(t).createTextNode(
              a
            ), t[fl] = l, l.stateNode = t;
        }
        return Lt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = an(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[fl] = l;
            } else
              _a(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Lt(l), t = !1;
          } else
            e = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (Ul(l), l) : (Ul(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Lt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = an(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[fl] = l;
            } else
              _a(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Lt(l), n = !1;
          } else
            n = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (Ul(l), l) : (Ul(l), null);
        }
        return Ul(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Ai(l, l.updateQueue), Lt(l), null);
      case 4:
        return Se(), t === null && hs(l.stateNode.containerInfo), l.flags |= 67108864, Lt(l), null;
      case 10:
        return Oe(l.type), Lt(l), null;
      case 19:
        if (lc(l), a = l.memoizedState, a === null) return Lt(l), null;
        if (n = (l.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) iu(a, !1);
          else {
            if (Ft !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (i = si(t), i !== null) {
                  for (l.flags |= 128, iu(a, !1), t = i.updateQueue, l.updateQueue = t, Ai(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Wr(e, t), e = e.sibling;
                  return lu(
                    l,
                    rl.current & 1 | 2
                  ), yt && Me(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && il() > wi && (l.flags |= 128, n = !0, iu(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = si(i), t !== null) {
              if (l.flags |= 128, n = !0, t = t.updateQueue, l.updateQueue = t, Ai(l, t), iu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !yt)
                return Lt(l), null;
            } else
              2 * il() - a.renderingStartTime > wi && e !== 536870912 && (l.flags |= 128, n = !0, iu(a, !1), l.lanes = 4194304);
          a.isBackwards ? (i.sibling = l.child, l.child = i) : (t = a.last, t !== null ? t.sibling = i : l.child = i, a.last = i);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (e = t; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break t;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = il(), t.sibling = null, i = rl.current, i = n ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !e || yt ? lu(l, i) : (e = i, wt(sl, l), wt(rl, e), vl === null && (vl = l)), yt && Me(l, a.treeForkCount), t;
        }
        return Lt(l), null;
      case 22:
      case 23:
        return Ul(l), Pf(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Lt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Lt(l), e = l.updateQueue, e !== null && Ai(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && Kt(Oa), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Oe(It), Lt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Lt(l), null;
    }
    throw Error(s(156, l.tag));
  }
  function _g(t, l) {
    switch (Yf(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Oe(It), Se(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return oa(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (Ul(l), l.alternate === null)
            throw Error(s(340));
          _a();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (Ul(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          _a();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return lc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Se(), null;
      case 10:
        return Oe(l.type), null;
      case 22:
      case 23:
        return Ul(l), Pf(), t !== null && Kt(Oa), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Oe(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _0(t, l) {
    switch (Yf(l), l.tag) {
      case 3:
        Oe(It), Se();
        break;
      case 26:
      case 27:
      case 5:
        oa(l);
        break;
      case 4:
        Se();
        break;
      case 31:
        l.memoizedState !== null && Ul(l);
        break;
      case 13:
        Ul(l);
        break;
      case 19:
        lc(l);
        break;
      case 10:
        Oe(l.type);
        break;
      case 22:
      case 23:
        Ul(l), Pf(), t !== null && Kt(Oa);
        break;
      case 24:
        Oe(It);
    }
  }
  function fu(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var i = e.create, r = e.inst;
            a = i(), r.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (h) {
      Ht(l, l.return, h);
    }
  }
  function Ie(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var r = a.inst, h = r.destroy;
            if (h !== void 0) {
              r.destroy = void 0, n = l;
              var m = e, z = h;
              try {
                z();
              } catch (N) {
                Ht(
                  n,
                  m,
                  N
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (N) {
      Ht(l, l.return, N);
    }
  }
  function A0(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        dh(l, e);
      } catch (a) {
        Ht(t, t.return, a);
      }
    }
  }
  function z0(t, l, e) {
    e.props = Ua(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      Ht(t, l, a);
    }
  }
  function re(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var n = t.stateNode, i = _e(t.memoizedProps, n);
            (n.ref === null || n.ref.name !== i) && (n.ref = Uo(i)), a = n.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var r = new Gl(t);
              y(
                t.child,
                !1,
                dv,
                r,
                void 0,
                void 0
              ), t.stateNode = r;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (h) {
      Ht(t, l, h);
    }
  }
  function hl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ht(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          Ht(t, l, n);
        }
      else e.current = null;
  }
  function zi(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        Yo(
          t.stateNode,
          l[e]
        );
  }
  function M0(t) {
    for (var l = t.return; l !== null && (Dc(l) && Yo(t.stateNode, l.stateNode), !Rc(l)); )
      l = l.return;
  }
  function cu(t) {
    for (var l = t.return; l !== null && (Dc(l) && gv(t.stateNode, l.stateNode), !Rc(l)); )
      l = l.return;
  }
  function Rc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Dc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Uc(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      Ht(t, t.return, n);
    }
  }
  function Hc(t, l, e) {
    try {
      var a = t.stateNode;
      Wg(a, t.type, e, l), a[bl] = l;
    } catch (n) {
      Ht(t, t.return, n);
    }
  }
  function x0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && na(t.type) || t.tag === 4;
  }
  function Bc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || x0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && na(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function wc(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(n, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(n), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = fe)), zi(t, a), Nt = !0;
    else if (n !== 4 && (n === 27 && (zi(t, a), a = null, na(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (wc(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        wc(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function Mi(t, l, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, l ? e.insertBefore(n, l) : e.appendChild(n), zi(t, a), Nt = !0;
    else if (n !== 4 && (n === 27 && (zi(t, a), a = null, na(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (Mi(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        Mi(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function O0(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      ol(l, a, e), l[fl] = t, l[bl] = e;
    } catch (i) {
      Ht(t, t.return, i);
    }
  }
  var xi = !1, Hl = null;
  function N0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (xi = !0);
  }
  var he = null;
  function C0() {
    var t = he;
    return he = null, t;
  }
  var Al = 0;
  function on(t, l, e, a, n) {
    return Al = 0, R0(
      t.child,
      l,
      e,
      a,
      n
    );
  }
  function R0(t, l, e, a, n) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var r = t.stateNode;
        if (a !== null) {
          var h = Es(r);
          a.push(h), h.view && (i = !0);
        } else
          i || Es(r).view && (i = !0);
        xi = !0, Ro(
          r,
          Al === 0 ? l : l + "_" + Al,
          e
        ), Al++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && n || R0(
        t.child,
        l,
        e,
        a,
        n
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function oe(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Do(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || oe(
        t.child,
        l
      )), t = t.sibling;
  }
  function Oi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Oi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(s(544));
          var e = l.name;
          l = Ae(l.default, l.share), l !== "none" && (on(
            t,
            e,
            l,
            null,
            !1
          ) || oe(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function qc(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, a = t.memoizedProps, n = _e(a, e), i = Ae(
        a.default,
        e.paired ? a.share : a.enter
      );
      i !== "none" ? on(t, n, i, null, !1) ? (Oi(t), e.paired || l || Tn(t, a.onEnter)) : oe(t.child, !1) : Oi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        qc(t, l), t = t.sibling;
    else Oi(t);
  }
  function Gc(t) {
    if (Hl !== null && Hl.size !== 0) {
      var l = Hl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, a = e.name;
              if (a != null && a !== "auto") {
                var n = l.get(a);
                if (n !== void 0) {
                  var i = Ae(
                    e.default,
                    e.share
                  );
                  if (i !== "none" && (on(
                    t,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = t.stateNode, n.paired = i, i.paired = n, Tn(t, e.onShare)) : oe(t.child, !1)), l.delete(a), l.size === 0) break;
                }
              }
            }
            Gc(t);
          }
          t = t.sibling;
        }
    }
  }
  function Yc(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = _e(l, t.stateNode), a = Hl !== null ? Hl.get(e) : void 0, n = Ae(
        l.default,
        a !== void 0 ? l.share : l.exit
      );
      n !== "none" && (on(t, e, n, null, !1) ? a !== void 0 ? (n = t.stateNode, a.paired = n, n.paired = a, Hl.delete(e), Tn(t, l.onShare)) : Tn(t, l.onExit) : oe(t.child, !1)), Hl !== null && Gc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Yc(t), t = t.sibling;
    else
      Hl !== null && Gc(t);
  }
  function D0(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = _e(l, t.stateNode);
        l = Ae(l.default, l.update), t.flags &= -5, l !== "none" && on(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && D0(t);
      t = t.sibling;
    }
  }
  function Xc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, oe(t.child, !1));
          }
          Xc(t);
        }
        t = t.sibling;
      }
  }
  function Ni(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, oe(t.child, !1), Xc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ni(t), t = t.sibling;
    else Xc(t);
  }
  function U0(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? oe(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && U0(t), t = t.sibling;
  }
  function Lc(t, l, e, a, n, i, r) {
    for (var h = !1; l !== null; ) {
      if (l.tag === 5) {
        var m = l.stateNode;
        if (i !== null && Al < i.length) {
          var z = i[Al], N = Es(m);
          (z.view || N.view) && (h = !0);
          var U;
          if (U = (t.flags & 4) === 0)
            if (N.clip) U = !0;
            else {
              U = z.rect;
              var b = N.rect;
              U = U.y !== b.y || U.x !== b.x || U.height !== b.height || U.width !== b.width;
            }
          U && (t.flags |= 4), N.abs ? N = !z.abs : (z = z.rect, N = N.rect, N = z.height !== N.height || z.width !== N.width), N && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Ro(
          m,
          Al === 0 ? e : e + "_" + Al,
          n
        ), h && (t.flags & 4) !== 0 || (he === null && (he = []), he.push(
          m,
          Al === 0 ? a : a + "_" + Al,
          l.memoizedProps
        )), Al++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && r ? t.flags |= l.flags & 32 : Lc(
        t,
        l.child,
        e,
        a,
        n,
        i,
        r
      ) && (h = !0));
      l = l.sibling;
    }
    return h;
  }
  function H0(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = t.stateNode, n = _e(e, a), i = Ae(e.default, e.update), r;
        r = t.memoizedState, t.memoizedState = null, a = t;
        var h = t.child;
        Al = 0, n = Lc(
          a,
          h,
          n,
          n,
          i,
          r,
          !1
        ), (t.flags & 4) !== 0 && n && Tn(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && H0(t);
      t = t.sibling;
    }
  }
  var nl = !1, Dt = !1, de = !1, jc = !1, B0 = typeof WeakSet == "function" ? WeakSet : Set, ul = null, ge = !1, su = !1, Ci = !1, Vc = !1;
  function Ag(t, l, e) {
    if (t = t.containerInfo, gs = Cn, t = Yr(t), Nf(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var i = n.anchorOffset, r = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, r.nodeType;
            } catch {
              a = null;
              break t;
            }
            var h = 0, m = -1, z = -1, N = 0, U = 0, b = t, O = null;
            l: for (; ; ) {
              for (var X; b !== a || i !== 0 && b.nodeType !== 3 || (m = h + i), b !== r || n !== 0 && b.nodeType !== 3 || (z = h + n), b.nodeType === 3 && (h += b.nodeValue.length), (X = b.firstChild) !== null; )
                O = b, b = X;
              for (; ; ) {
                if (b === t) break l;
                if (O === a && ++N === i && (m = h), O === r && ++U === n && (z = h), (X = b.nextSibling) !== null) break;
                b = O, O = b.parentNode;
              }
              b = X;
            }
            a = m === -1 || z === -1 ? null : { start: m, end: z };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (vs = { focusedElem: t, selectionRange: a }, Cn = !1, e = (e & 335544064) === e, ul = l, l = e ? 9270 : 1024; ul !== null; ) {
      if (t = ul, e && (a = t.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          e && Yc(a[i]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && N0(t), Ri(e);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && e && Yc(a), Ri(e);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            e && N0(t), Ri(e);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & l) !== 0 && a !== null ? (a.return = t, ul = a) : (e && D0(t), Ri(e));
      }
    }
    Hl = null;
  }
  function Ri(t) {
    for (; ul !== null; ) {
      var l = ul, e = t, a = l.alternate, n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            e = void 0, n = a.memoizedProps, a = a.memoizedState;
            var i = l.stateNode;
            try {
              var r = Ua(
                l.type,
                n
              );
              e = i.getSnapshotBeforeUpdate(
                r,
                a
              ), i.__reactInternalSnapshotBeforeUpdate = e;
            } catch (h) {
              Ht(l, l.return, h);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = l.stateNode.containerInfo, e = a.nodeType, e === 9)
              bs(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  bs(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          e && a !== null && (e = _e(
            a.memoizedProps,
            a.stateNode
          ), n = l.memoizedProps, n = Ae(n.default, n.update), n !== "none" && on(
            a,
            e,
            n,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(s(163));
      }
      if (a = l.sibling, a !== null) {
        a.return = l.return, ul = a;
        break;
      }
      ul = l.return;
    }
  }
  function w0(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ve(t, e), a & 4 && fu(5, e);
        break;
      case 1:
        if (ve(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (r) {
              Ht(e, e.return, r);
            }
          else {
            var n = Ua(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (r) {
              Ht(
                e,
                e.return,
                r
              );
            }
          }
        a & 64 && A0(e), a & 512 && re(e, e.return);
        break;
      case 3:
        if (ve(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            dh(t, l);
          } catch (r) {
            Ht(e, e.return, r);
          }
        }
        break;
      case 27:
        l === null && a & 4 && O0(e);
      case 26:
      case 5:
        ve(t, e), l === null && a & 4 && Uc(e), a & 512 && re(e, e.return);
        break;
      case 12:
        ve(t, e);
        break;
      case 31:
        ve(t, e), a & 4 && X0(t, e);
        break;
      case 13:
        ve(t, e), a & 4 && L0(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = wg.bind(
          null,
          e
        ), yv(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || nl, !a) {
          var i = l !== null && l.memoizedState !== null || Dt;
          l = nl, n = Dt, nl = a, (Dt = i) && !n ? (a = 2, (e.subtreeFlags & 8772) !== 0 && (a |= 1), ee(
            t,
            e,
            a
          )) : ve(t, e), nl = l, Dt = n;
        }
        break;
      case 30:
        ve(t, e), a & 512 && re(e, e.return);
        break;
      case 7:
        a & 512 && re(e, e.return);
      default:
        ve(t, e);
    }
  }
  function Qc(t, l) {
    for (t = t.child; t !== null; )
      q0(t, l), t = t.sibling;
  }
  function q0(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var a = e.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var n = t.stateNode, i = t.memoizedProps.style, r = i != null && i.hasOwnProperty("display") ? i.display : null;
            n.style.display = r == null || typeof r == "boolean" ? "" : ("" + r).trim();
          }
        } catch (m) {
          Ht(t, t.return, m);
        }
        Zc(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, Nt = !0;
        } catch (m) {
          Ht(t, t.return, m);
        }
        break;
      case 18:
        try {
          var h = t.stateNode;
          l ? Co(h, !0) : Co(t.stateNode, !1);
        } catch (m) {
          Ht(t, t.return, m);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Qc(t, l);
        break;
      default:
        Qc(t, l);
    }
  }
  function Zc(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, a = l;
          switch (e.tag) {
            case 4:
              q0(e, a);
              break t;
            case 22:
              e.memoizedState === null && Zc(e, a);
              break t;
            default:
              Zc(e, a);
          }
        }
        t = t.sibling;
      }
  }
  function G0(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, G0(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && wu(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var jt = null, zl = !1;
  function te(t, l, e) {
    for (e = e.child; e !== null; )
      Y0(t, l, e), e = e.sibling;
  }
  function Y0(t, l, e) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
      try {
        qt.onCommitFiberUnmount(Mt, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Dt || hl(e, l), te(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !Dt && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Dt || hl(e, l), cu(e);
        var a = jt, n = zl;
        na(e.type) && (jt = e.stateNode, zl = !1), te(
          t,
          l,
          e
        ), Qo(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), jt = a, zl = n;
        break;
      case 5:
        Dt || hl(e, l), cu(e);
      case 6:
        if (e.tag === 6 && cu(e), a = jt, n = zl, jt = null, te(
          t,
          l,
          e
        ), jt = a, zl = n, jt !== null)
          if (zl)
            try {
              (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(e.stateNode), Nt = !0;
            } catch (i) {
              Ht(
                e,
                l,
                i
              );
            }
          else
            try {
              jt.removeChild(e.stateNode), Nt = !0;
            } catch (i) {
              Ht(
                e,
                l,
                i
              );
            }
        break;
      case 18:
        jt !== null && (zl ? (t = jt, No(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Rn(t)) : No(jt, e.stateNode));
        break;
      case 4:
        a = jt, n = zl, jt = e.stateNode.containerInfo, zl = !0, te(
          t,
          l,
          e
        ), jt = a, zl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ie(2, e, l), Dt || Ie(4, e, l), te(
          t,
          l,
          e
        );
        break;
      case 1:
        Dt || (hl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && z0(
          e,
          l,
          a
        )), te(
          t,
          l,
          e
        );
        break;
      case 21:
        te(
          t,
          l,
          e
        );
        break;
      case 22:
        Dt = (a = Dt) || e.memoizedState !== null, te(
          t,
          l,
          e
        ), Dt = a;
        break;
      case 30:
        hl(e, l), te(
          t,
          l,
          e
        );
        break;
      case 7:
        Dt || hl(e, l), te(
          t,
          l,
          e
        );
        break;
      default:
        te(
          t,
          l,
          e
        );
    }
  }
  function X0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Rn(t);
      } catch (e) {
        Ht(l, l.return, e);
      }
    }
  }
  function L0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Rn(t);
      } catch (e) {
        Ht(l, l.return, e);
      }
  }
  function zg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new B0()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new B0()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Di(t, l) {
    var e = zg(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = qg.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Sl(t, l, e) {
    var a = l.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n], r = t, h = l, m = h;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (na(m.type)) {
                jt = m.stateNode, zl = !1;
                break t;
              }
              break;
            case 5:
              jt = m.stateNode, zl = !1;
              break t;
            case 3:
            case 4:
              jt = m.stateNode.containerInfo, zl = !0;
              break t;
          }
          m = m.return;
        }
        if (jt === null) throw Error(s(160));
        Y0(r, h, i), jt = null, zl = !1, r = i.alternate, r !== null && (r.return = null), i.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        j0(l, t, e), l = l.sibling;
  }
  var le = null;
  function j0(t, l, e) {
    var a = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var i = 0; i < a.length; i++) {
            var r = a[i];
            r.ref.impl = r.nextImpl;
          }
        Sl(l, t, e), El(t), n & 4 && (Ie(3, t, t.return), fu(3, t), Ie(5, t, t.return));
        break;
      case 1:
        Sl(l, t, e), El(t), n & 512 && (Dt || a === null || hl(a, a.return)), n & 64 && nl && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (i = le, Sl(l, t, e), El(t), n & 512 && (Dt || a === null || hl(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, e = t.memoizedState, a === null)
            if (e === null)
              if (t.stateNode === null)
                if (nl)
                  t.stateNode = Mo(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, n = i.ownerDocument || i;
                    l: switch (l) {
                      case "title":
                        a = n.getElementsByTagName("title")[0], (!a || a[Bn] || a[fl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(l), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), ol(a, l, e), a[fl] = t, el(a), l = a;
                        break t;
                      case "link":
                        if (i = $o(
                          "link",
                          "href",
                          n
                        ).get(l + (e.href || ""))) {
                          for (r = 0; r < i.length; r++)
                            if (a = i[r], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              i.splice(r, 1);
                              break l;
                            }
                        }
                        a = n.createElement(l), ol(a, l, e), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = $o(
                          "meta",
                          "content",
                          n
                        ).get(l + (e.content || ""))) {
                          for (r = 0; r < i.length; r++)
                            if (a = i[r], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              i.splice(r, 1);
                              break l;
                            }
                        }
                        a = n.createElement(l), ol(a, l, e), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(s(468, l));
                    }
                    a[fl] = t, el(a), l = a;
                  }
                  t.stateNode = l;
                }
              else
                nl || Ns(i, t.type, t.stateNode);
            else
              t.stateNode = Wo(
                i,
                e,
                t.memoizedProps
              );
          else
            n !== e ? (n === null ? (l = a.stateNode, l === null || Dt || l.parentNode.removeChild(l)) : n.count--, e === null ? nl || Ns(i, t.type, t.stateNode) : Wo(i, e, t.memoizedProps)) : e === null && t.stateNode !== null && Hc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Sl(l, t, e), El(t), n & 512 && (Dt || a === null || hl(a, a.return)), a !== null && n & 4 && Hc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = de, de = !1, Sl(l, t, e), de = i, El(t), n & 512 && (Dt || a === null || hl(a, a.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Ja(l, ""), Nt = !0;
          } catch (N) {
            Ht(t, t.return, N);
          }
        }
        n & 4 && t.stateNode != null && (l = t.memoizedProps, Hc(
          t,
          l,
          a !== null ? a.memoizedProps : l
        )), n & 1024 && (jc = !0);
        break;
      case 6:
        if (Sl(l, t, e), El(t), n & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, Nt = !0;
          } catch (N) {
            Ht(t, t.return, N);
          }
        }
        break;
      case 3:
        if (Nt = !1, Ji = null, i = le, le = Su(l.containerInfo), Sl(l, t, e), le = i, El(t), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rn(l.containerInfo);
          } catch (N) {
            Ht(t, t.return, N);
          }
        jc && (jc = !1, V0(t)), Nt = !1;
        break;
      case 4:
        n = de, de = nl, a = sr(), i = le, le = Su(
          t.stateNode.containerInfo
        ), Sl(l, t, e), El(t), le = i, Nt && su && (Ci = !0), Nt = a, de = n;
        break;
      case 12:
        Sl(l, t, e), El(t);
        break;
      case 31:
        Sl(l, t, e), El(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 13:
        Sl(l, t, e), El(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Bi = il()), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 22:
        i = t.memoizedState !== null, r = a !== null && a.memoizedState !== null;
        var h = nl, m = Dt, z = de;
        nl = h || i, de = z || i, Dt = m || r, Sl(l, t, e), Dt = m, de = z, nl = h, El(t), n & 8192 && (l = t.stateNode, l._visibility = i ? l._visibility & -2 : l._visibility | 1, !i || a === null || r || nl || Dt || (l = r || Dt, e = nl, a = Dt, nl = i || nl, Dt = l, ke(t, 2), nl = e, Dt = a), !i && de || Qc(t, i)), n & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Di(t, e))));
        break;
      case 19:
        Sl(l, t, e), El(t), n & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Di(t, l)));
        break;
      case 30:
        n & 512 && (Dt || a === null || hl(a, a.return)), n = sr(), i = su, r = (e & 335544064) === e, h = t.memoizedProps, su = r && Ae(
          h.default,
          h.update
        ) !== "none", Sl(l, t, e), El(t), r && a !== null && Nt && (t.flags |= 4), su = i, Nt = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (Dt || a === null || hl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Sl(l, t, e), El(t);
    }
  }
  function El(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (x0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = t.return; n !== null; ) {
          if (Dc(n)) {
            var i = n.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (Rc(n)) break;
          n = n.return;
        }
        var r = a;
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var h = e.stateNode, m = Bc(t);
            Mi(
              t,
              m,
              h,
              r
            );
            break;
          case 5:
            var z = e.stateNode;
            e.flags & 32 && (Ja(z, ""), e.flags &= -33);
            var N = Bc(t);
            Mi(
              t,
              N,
              z,
              r
            );
            break;
          case 3:
          case 4:
            var U = e.stateNode.containerInfo, b = Bc(t);
            wc(
              t,
              b,
              U,
              r
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (O) {
        Ht(t, t.return, O);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function V0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        V0(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, Cn = !0, l.reset(), Cn = !1), t = t.sibling;
      }
  }
  function dn(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Q0(l, t), l = l.sibling;
    else H0(l);
  }
  function Q0(t, l) {
    var e = t.alternate;
    if (e === null) qc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Vc = ge = !1, C0(), dn(l, t), !ge && !Ci) {
            if (t = he, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                e = t[a];
                var n = t[a + 1];
                Do(e, t[a + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            t = l.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Vc = !0;
          }
          he = null;
          break;
        case 5:
          dn(l, t);
          break;
        case 4:
          a = ge, ge = !1, dn(l, t), ge && (Ci = !0), ge = a;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? qc(t, !1) : dn(l, t));
          break;
        case 30:
          a = ge, n = C0(), ge = !1, dn(l, t), ge && (t.flags |= 4);
          var i = t.memoizedProps, r = t.stateNode;
          l = _e(i, r), r = _e(e.memoizedProps, r);
          var h = Ae(i.default, i.update);
          h === "none" ? l = !1 : (i = e.memoizedState, e.memoizedState = null, e = t.child, Al = 0, l = Lc(
            t,
            e,
            l,
            r,
            h,
            i,
            !0
          ), Al !== (i === null ? 0 : i.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (Tn(
            t,
            t.memoizedProps.onUpdate
          ), he = n) : n !== null && (n.push.apply(n, he), he = n), ge = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          dn(l, t);
      }
  }
  function ve(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        w0(t, l.alternate, l), l = l.sibling;
  }
  function ke(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, a = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ie(4, e, e.return), ke(
            e,
            a
          );
          break;
        case 1:
          hl(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && z0(
            e,
            e.return,
            n
          ), ke(
            e,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Qo(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          hl(e, e.return), e.tag !== 5 && e.tag !== 27 || cu(e), ke(
            e,
            a
          );
          break;
        case 6:
          cu(e);
          break;
        case 26:
          hl(e, e.return), n = e.stateNode, e.memoizedState !== null || n === null || Dt || n.parentNode.removeChild(n), ke(
            e,
            a
          );
          break;
        case 22:
          e.memoizedState === null && ke(
            e,
            a
          );
          break;
        case 30:
          hl(e, e.return), ke(
            e,
            a
          );
          break;
        case 7:
          hl(e, e.return);
        default:
          ke(
            e,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ee(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, i = l, r = i.flags, h = (e & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ee(
            n,
            i,
            e
          ), fu(4, i);
          break;
        case 1:
          if (ee(
            n,
            i,
            e
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (N) {
              Ht(a, a.return, N);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var m = a.stateNode;
            try {
              var z = n.shared.hiddenCallbacks;
              if (z !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < z.length; n++)
                  oh(z[n], m);
            } catch (N) {
              Ht(a, a.return, N);
            }
          }
          h && r & 64 && A0(i), re(i, i.return);
          break;
        case 27:
          (e & 2) !== 0 && O0(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || M0(i), ee(
            n,
            i,
            e
          ), h && a === null && r & 4 && Uc(i), re(i, i.return);
          break;
        case 6:
          M0(i);
          break;
        case 26:
          m = i.stateNode, i.memoizedState !== null || m === null || nl || Ns(
            Su(m.ownerDocument),
            i.type,
            m
          ), ee(
            n,
            i,
            e
          ), h && a === null && r & 4 && Uc(i), re(i, i.return);
          break;
        case 12:
          ee(
            n,
            i,
            e
          );
          break;
        case 31:
          ee(
            n,
            i,
            e
          ), h && r & 4 && X0(n, i);
          break;
        case 13:
          ee(
            n,
            i,
            e
          ), h && r & 4 && L0(n, i);
          break;
        case 22:
          i.memoizedState === null && ee(
            n,
            i,
            e
          ), re(i, i.return);
          break;
        case 30:
          ee(
            n,
            i,
            e
          ), re(i, i.return);
          break;
        case 7:
          re(i, i.return);
        default:
          ee(
            n,
            i,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Kc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Fn(e));
  }
  function Jc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Fn(t));
  }
  function Fl(t, l, e, a) {
    var n = (e & 335544064) === e;
    if (l.subtreeFlags & (n ? 10262 : 10256))
      for (l = l.child; l !== null; )
        Z0(
          t,
          l,
          e,
          a
        ), l = l.sibling;
    else n && U0(l);
  }
  function Z0(t, l, e, a) {
    var n = (e & 335544064) === e;
    n && l.alternate === null && l.return !== null && l.return.alternate !== null && Ni(l);
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fl(
          t,
          l,
          e,
          a
        ), i & 2048 && fu(9, l);
        break;
      case 1:
        Fl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Fl(
          t,
          l,
          e,
          a
        ), n && Vc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), i & 2048 && (i = null, l.alternate !== null && (i = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== i && (l.refCount++, i != null && Fn(i)));
        break;
      case 12:
        if (i & 2048) {
          Fl(
            t,
            l,
            e,
            a
          ), i = l.stateNode;
          try {
            var r = l.memoizedProps, h = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              h,
              l.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (z) {
            Ht(l, l.return, z);
          }
        } else
          Fl(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        Fl(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        Fl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        r = l.stateNode, h = l.alternate, l.memoizedState !== null ? (n && h !== null && h.memoizedState === null && Ni(h), r._visibility & 2 ? Fl(
          t,
          l,
          e,
          a
        ) : ru(
          t,
          l
        )) : (n && h !== null && h.memoizedState !== null && Ni(l), r._visibility & 2 ? Fl(
          t,
          l,
          e,
          a
        ) : (r._visibility |= 2, gn(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && Kc(h, l);
        break;
      case 24:
        Fl(
          t,
          l,
          e,
          a
        ), i & 2048 && Jc(l.alternate, l);
        break;
      case 30:
        n && (i = l.alternate, i !== null && (oe(i.child, !0), oe(l.child, !0))), Fl(
          t,
          l,
          e,
          a
        );
        break;
      default:
        Fl(
          t,
          l,
          e,
          a
        );
    }
  }
  function gn(t, l, e, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var i = t, r = l, h = e, m = a, z = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            i,
            r,
            h,
            m,
            n
          ), fu(8, r);
          break;
        case 23:
          break;
        case 22:
          var N = r.stateNode;
          r.memoizedState !== null ? N._visibility & 2 ? gn(
            i,
            r,
            h,
            m,
            n
          ) : ru(
            i,
            r
          ) : (N._visibility |= 2, gn(
            i,
            r,
            h,
            m,
            n
          )), n && z & 2048 && Kc(
            r.alternate,
            r
          );
          break;
        case 24:
          gn(
            i,
            r,
            h,
            m,
            n
          ), n && z & 2048 && Jc(r.alternate, r);
          break;
        default:
          gn(
            i,
            r,
            h,
            m,
            n
          );
      }
      l = l.sibling;
    }
  }
  function ru(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            ru(e, a), n & 2048 && Kc(
              a.alternate,
              a
            );
            break;
          case 24:
            ru(e, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            ru(e, a);
        }
        l = l.sibling;
      }
  }
  var Ha = 8192;
  function Ba(t, l, e) {
    if (t.subtreeFlags & Ha)
      for (t = t.child; t !== null; )
        K0(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function K0(t, l, e) {
    switch (t.tag) {
      case 26:
        Ba(
          t,
          l,
          e
        ), t.flags & Ha && (t.memoizedState !== null ? Rv(
          e,
          le,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && t1(e, t)));
        break;
      case 5:
        Ba(
          t,
          l,
          e
        ), t.flags & Ha && (t = t.stateNode, (l & 335544128) === l && t1(e, t));
        break;
      case 3:
      case 4:
        var a = le;
        le = Su(t.stateNode.containerInfo), Ba(
          t,
          l,
          e
        ), le = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ha, Ha = 16777216, Ba(
          t,
          l,
          e
        ), Ha = a) : Ba(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & Ha) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var n = t.stateNode;
          n.paired = null, Hl === null && (Hl = /* @__PURE__ */ new Map()), Hl.set(a, n);
        }
        Ba(
          t,
          l,
          e
        );
        break;
      default:
        Ba(
          t,
          l,
          e
        );
    }
  }
  function J0(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function hu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ul = a, W0(
            a,
            t
          );
        }
      J0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        F0(t), t = t.sibling;
  }
  function F0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hu(t), t.flags & 2048 && Ie(9, t, t.return);
        break;
      case 3:
        hu(t);
        break;
      case 12:
        hu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Ui(t)) : hu(t);
        break;
      default:
        hu(t);
    }
  }
  function Ui(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ul = a, W0(
            a,
            t
          );
        }
      J0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Ie(8, l, l.return), Ui(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Ui(l));
          break;
        default:
          Ui(l);
      }
      t = t.sibling;
    }
  }
  function W0(t, l) {
    for (; ul !== null; ) {
      var e = ul;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ie(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fn(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, ul = a;
      else
        t: for (e = t; ul !== null; ) {
          a = ul;
          var n = a.sibling, i = a.return;
          if (G0(a), a === e) {
            ul = null;
            break t;
          }
          if (n !== null) {
            n.return = i, ul = n;
            break t;
          }
          ul = i;
        }
    }
  }
  var Mg = {
    getCacheForType: function(t) {
      var l = cl(It), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return cl(It).controller.signal;
    }
  }, xg = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Yt = null, Et = null, _t = 0, Ut = 0, Bl = null, Pe = !1, vn = !1, Fc = !1, Ue = 0, Ft = 0, ta = 0, wa = 0, Hi = 0, wl = 0, mn = 0, ou = null, Ml = null, Wc = !1, Bi = 0, $0 = 0, wi = 1 / 0, qi = null, la = null, Qt = 0, ae = null, qa = null, me = 0, $c = 0, Ic = null, I0 = null, yn = null, Sn = null, En = null, du = 0, Gi = null;
  function ql() {
    return (Rt & 2) !== 0 && _t !== 0 ? _t & -_t : P.T !== null ? fs() : tr();
  }
  function k0() {
    if (wl === 0)
      if ((_t & 536870912) === 0 || yt) {
        var t = Du;
        Du <<= 1, (Du & 3932160) === 0 && (Du = 262144), wl = t;
      } else wl = 536870912;
    return t = sl.current, t !== null && (t.flags |= 32), wl;
  }
  function Tn(t, l) {
    if (l != null) {
      var e = t.stateNode, a = e.ref;
      a === null && (a = e.ref = Uo(
        _e(t.memoizedProps, e)
      )), Sn === null && (Sn = []), Sn.push(l.bind(null, a));
    }
  }
  function xl(t, l, e) {
    (t === Yt && (Ut === 2 || Ut === 9) || t.cancelPendingCommit !== null) && (pn(t, 0), ea(
      t,
      _t,
      wl,
      !1
    )), Hn(t, e), ((Rt & 2) === 0 || t !== Yt) && (t === Yt && ((Rt & 2) === 0 && (wa |= e), Ft === 4 && ea(
      t,
      _t,
      wl,
      !1
    )), ye(t));
  }
  function P0(t, l, e) {
    if ((Rt & 6) !== 0) throw Error(s(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Un(t, l), n = a ? Cg(t, l) : Pc(t, l, !0), i = a;
    do {
      if (n === 0) {
        vn && !a && ea(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, i && !Og(e)) {
          n = Pc(t, l, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = l, t.errorRecoveryDisabledLanes & i)
            var r = 0;
          else
            r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            l = r;
            t: {
              var h = t;
              n = ou;
              var m = h.current.memoizedState.isDehydrated;
              if (m && (pn(h, r).flags |= 256), r = Pc(
                h,
                r,
                !1
              ), r !== 2 && r !== 6) {
                if (Fc && !m) {
                  h.errorRecoveryDisabledLanes |= i, wa |= i, n = 4;
                  break t;
                }
                i = Ml, Ml = n, i !== null && (Ml === null ? Ml = i : Ml.push.apply(
                  Ml,
                  i
                ));
              }
              n = r;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          pn(t, 0), ea(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              ea(
                a,
                l,
                wl,
                !Pe
              );
              break t;
            case 2:
              Ml = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (n = Bi + 300 - il(), 10 < n)) {
            if (ea(
              a,
              l,
              wl,
              !Pe
            ), Hu(a, 0, !0) !== 0) break t;
            me = l, a.timeoutHandle = Ss(
              to.bind(
                null,
                a,
                e,
                Ml,
                qi,
                Wc,
                l,
                wl,
                wa,
                mn,
                Pe,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          to(
            a,
            e,
            Ml,
            qi,
            Wc,
            l,
            wl,
            wa,
            mn,
            Pe,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ye(t);
  }
  function to(t, l, e, a, n, i, r, h, m, z, N, U, b, O) {
    t.timeoutHandle = -1;
    var X = l.subtreeFlags, W = (i & 335544064) === i;
    if (U = null, (W || X & 8192 || (X & 16785408) === 16785408) && (U = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: fe
    }, Hl = null, K0(
      l,
      i,
      U
    ), W && (X = U, W = t.containerInfo, W = (W.nodeType === 9 ? W : W.ownerDocument).__reactViewTransition, W != null && (X.count++, X.waitingForViewTransition = !0, X = pu.bind(X), W.finished.then(X, X))), X = (i & 62914560) === i ? Bi - il() : (i & 4194048) === i ? $0 - il() : 0, X = Dv(
      U,
      X
    ), X !== null)) {
      me = i, t.cancelPendingCommit = X(
        co.bind(
          null,
          t,
          l,
          i,
          e,
          a,
          n,
          r,
          h,
          m,
          z,
          N,
          U,
          null,
          b,
          O
        )
      ), ea(t, i, r, !z);
      return;
    }
    co(
      t,
      l,
      i,
      e,
      a,
      n,
      r,
      h,
      m,
      z,
      N,
      U
    );
  }
  function Og(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Dl(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ea(t, l, e, a) {
    l = Ws(t, l), l &= ~Hi, l &= ~wa, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var i = 31 - Cl(n), r = 1 << i;
      a[i] = -1, n &= ~r;
    }
    e !== 0 && Is(t, e, l);
  }
  function Yi() {
    return (Rt & 6) === 0 ? (gu(0), !1) : !0;
  }
  function kc() {
    if (Et !== null) {
      if (Ut === 0)
        var t = Et.return;
      else
        t = Et, xe = Aa = null, ic(t), fn = null, In = 0, t = Et;
      for (; t !== null; )
        _0(t.alternate, t), t = t.return;
      Et = null;
    }
  }
  function pn(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, kg(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), me = 0, kc(), Yt = t, Et = e = ze(t.current, null), _t = l, Ut = 0, Bl = null, Pe = !1, vn = Un(t, l), Fc = !1, mn = wl = Hi = wa = ta = Ft = 0, Ml = ou = null, Wc = !1, Ue = Ws(t, l), Ju(), e;
  }
  function lo(t, l) {
    dt = null, P.H = Si, l === un || l === ni ? (l = ch(), Ut = 3) : l === Jf ? (l = ch(), Ut = 4) : Ut = l === pc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Bl = l, Et === null && (Ft = 1, Ei(
      t,
      Ql(l, t.current)
    ));
  }
  function eo() {
    var t = sl.current;
    return t === null ? !0 : (_t & 4194048) === _t ? vl === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? t === vl : !1;
  }
  function ao() {
    var t = P.H;
    return P.H = Si, t === null ? Si : t;
  }
  function no() {
    var t = P.A;
    return P.A = Mg, t;
  }
  function Xi() {
    Ft = 4, Pe || (_t & 4194048) !== _t && sl.current !== null || (vn = !0), (ta & 134217727) === 0 && (wa & 134217727) === 0 || Yt === null || ea(
      Yt,
      _t,
      wl,
      !1
    );
  }
  function Pc(t, l, e) {
    var a = Rt;
    Rt |= 2;
    var n = ao(), i = no();
    (Yt !== t || _t !== l) && (qi = null, pn(t, l)), l = !1;
    var r = Ft;
    t: do
      try {
        if (Ut !== 0 && Et !== null) {
          var h = Et, m = Bl;
          switch (Ut) {
            case 8:
              kc(), r = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              sl.current === null && (l = !0);
              var z = Ut;
              if (Ut = 0, Bl = null, bn(t, h, m, z), e && vn) {
                r = 0;
                break t;
              }
              break;
            default:
              z = Ut, Ut = 0, Bl = null, bn(t, h, m, z);
          }
        }
        Ng(), r = Ft;
        break;
      } catch (N) {
        lo(t, N);
      }
    while (!0);
    return l && t.shellSuspendCounter++, xe = Aa = null, Rt = a, P.H = n, P.A = i, Et === null && (Yt = null, _t = 0, Ju()), r;
  }
  function Ng() {
    for (; Et !== null; ) uo(Et);
  }
  function Cg(t, l) {
    var e = Rt;
    Rt |= 2;
    var a = ao(), n = no();
    Yt !== t || _t !== l ? (qi = null, wi = il() + 500, pn(t, l)) : vn = Un(
      t,
      l
    );
    t: do
      try {
        if (Ut !== 0 && Et !== null) {
          l = Et;
          var i = Bl;
          l: switch (Ut) {
            case 1:
              Ut = 0, Bl = null, bn(t, l, i, 1);
              break;
            case 2:
            case 9:
              if (ih(i)) {
                Ut = 0, Bl = null, io(l);
                break;
              }
              l = function() {
                Ut !== 2 && Ut !== 9 || Yt !== t || (Ut = 7), ye(t);
              }, i.then(l, l);
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              ih(i) ? (Ut = 0, Bl = null, io(l)) : (Ut = 0, Bl = null, bn(t, l, i, 7));
              break;
            case 5:
              var r = null;
              switch (Et.tag) {
                case 26:
                  r = Et.memoizedState;
                case 5:
                case 27:
                  var h = Et;
                  if (r ? ko(r) : h.stateNode.complete) {
                    Ut = 0, Bl = null;
                    var m = h.sibling;
                    if (m !== null) Et = m;
                    else {
                      var z = h.return;
                      z !== null ? (Et = z, Li(z)) : Et = null;
                    }
                    break l;
                  }
              }
              Ut = 0, Bl = null, bn(t, l, i, 5);
              break;
            case 6:
              Ut = 0, Bl = null, bn(t, l, i, 6);
              break;
            case 8:
              kc(), Ft = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Rg();
        break;
      } catch (N) {
        lo(t, N);
      }
    while (!0);
    return xe = Aa = null, P.H = a, P.A = n, Rt = e, Et !== null ? 0 : (Yt = null, _t = 0, Ju(), Ft);
  }
  function Rg() {
    for (; Et !== null && !nf(); )
      uo(Et);
  }
  function uo(t) {
    var l = p0(t.alternate, t, Ue);
    t.memoizedProps = t.pendingProps, l === null ? Li(t) : Et = l;
  }
  function io(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = g0(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          _t
        );
        break;
      case 11:
        l = g0(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          _t
        );
        break;
      case 5:
        ic(l);
        var a = l;
        a === al && (yt ? (Pu(a), a.tag === 5 && a.stateNode != null && (Xt = a.stateNode)) : (Pu(a), yt = !0));
      default:
        _0(e, l), l = Et = Wr(l, Ue), l = p0(e, l, Ue);
    }
    t.memoizedProps = t.pendingProps, l === null ? Li(t) : Et = l;
  }
  function bn(t, l, e, a) {
    xe = Aa = null, ic(l), fn = null, In = 0;
    var n = l.return;
    try {
      if (Sg(
        t,
        n,
        l,
        e,
        _t
      )) {
        Ft = 1, Ei(
          t,
          Ql(e, t.current)
        ), Et = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw Et = n, i;
      Ft = 1, Ei(
        t,
        Ql(e, t.current)
      ), Et = null;
      return;
    }
    l.flags & 32768 ? (yt || a === 1 ? t = !0 : vn || (_t & 536870912) !== 0 ? t = !1 : (Pe = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = sl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), fo(l, t)) : Li(l);
  }
  function Li(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        fo(
          l,
          Pe
        );
        return;
      }
      t = l.return;
      var e = bg(
        l.alternate,
        l,
        Ue
      );
      if (e !== null) {
        Et = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        Et = l;
        return;
      }
      Et = l = t;
    } while (l !== null);
    Ft === 0 && (Ft = 5);
  }
  function fo(t, l) {
    do {
      var e = _g(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, Et = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        Et = t;
        return;
      }
      Et = t = e;
    } while (t !== null);
    Ft = 6, Et = null;
  }
  function co(t, l, e, a, n, i, r, h, m, z, N, U) {
    t.cancelPendingCommit = null;
    do
      ji();
    while (Qt !== 0);
    if ((Rt & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      t === Yt && (Et = Yt = null, _t = 0), qa = l, ae = t, me = e, Ic = n, I0 = a, Dg(
        t,
        l,
        e,
        r,
        h,
        m,
        U
      );
    }
  }
  function Dg(t, l, e, a, n, i, r) {
    var h = l.lanes | l.childLanes;
    if ($c = h, h |= Hf, nd(
      t,
      e,
      h,
      a,
      n,
      i
    ), Sn = null, (e & 335544064) === e ? (En = ig(t), a = 10262) : (En = null, a = 10256), (l.subtreeFlags & a) !== 0 || (l.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Gg(va, function() {
      return as(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), xi = !1, a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
      a = P.T, P.T = null, n = nt.p, nt.p = 2, i = Rt, Rt |= 4;
      try {
        Ag(t, l, e);
      } finally {
        Rt = i, nt.p = n, P.T = a;
      }
    }
    Qt = 1, xi ? yn = nv(
      r,
      t.containerInfo,
      En,
      ts,
      ls,
      Hg,
      es,
      as,
      Ug
    ) : (ts(), ls(), es());
  }
  function Ug(t) {
    if (Qt !== 0) {
      var l = ae.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function Hg() {
    Qt === 3 && (Qt = 0, Q0(qa, ae), Qt = 4);
  }
  function ts() {
    if (Qt === 1) {
      Qt = 0;
      var t = ae, l = qa, e = me, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = P.T, P.T = null;
        var n = nt.p;
        nt.p = 2;
        var i = Rt;
        Rt |= 4;
        try {
          su = Ci = !1, j0(l, t, e), e = vs;
          var r = Yr(t.containerInfo), h = e.focusedElem, m = e.selectionRange;
          if (r !== h && h && h.ownerDocument && Gr(
            h.ownerDocument.documentElement,
            h
          )) {
            if (m !== null && Nf(h)) {
              var z = m.start, N = m.end;
              if (N === void 0 && (N = z), "selectionStart" in h)
                h.selectionStart = z, h.selectionEnd = Math.min(
                  N,
                  h.value.length
                );
              else {
                var U = h.ownerDocument || document, b = U && U.defaultView || window;
                if (b.getSelection) {
                  var O = b.getSelection(), X = h.textContent.length, W = Math.min(m.start, X), gt = m.end === void 0 ? W : Math.min(m.end, X);
                  !O.extend && W > gt && (r = gt, gt = W, W = r);
                  var A = qr(
                    h,
                    W
                  ), p = qr(
                    h,
                    gt
                  );
                  if (A && p && (O.rangeCount !== 1 || O.anchorNode !== A.node || O.anchorOffset !== A.offset || O.focusNode !== p.node || O.focusOffset !== p.offset)) {
                    var M = U.createRange();
                    M.setStart(A.node, A.offset), O.removeAllRanges(), W > gt ? (O.addRange(M), O.extend(p.node, p.offset)) : (M.setEnd(p.node, p.offset), O.addRange(M));
                  }
                }
              }
            }
            for (U = [], O = h; O = O.parentNode; )
              O.nodeType === 1 && U.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < U.length; h++) {
              var D = U[h];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Cn = !!gs, vs = gs = null;
        } finally {
          Rt = i, nt.p = n, P.T = a;
        }
      }
      t.current = l, Qt = 2;
    }
  }
  function ls() {
    if (Qt === 2) {
      Qt = 0;
      var t = ae, l = qa, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = P.T, P.T = null;
        var a = nt.p;
        nt.p = 2;
        var n = Rt;
        Rt |= 4;
        try {
          w0(t, l.alternate, l);
        } finally {
          Rt = n, nt.p = a, P.T = e;
        }
      }
      Qt = 3;
    }
  }
  function es() {
    if (Qt === 4 || Qt === 3) {
      Qt = 0;
      var t = yn;
      yn = null, uf();
      var l = ae, e = qa, a = me, n = I0, i = (a & 335544064) === a ? 10262 : 10256;
      if ((e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? Qt = 5 : (Qt = 0, qa = ae = null, so(l, l.pendingLanes)), i = l.pendingLanes, i === 0 && (la = null), hf(a), e = e.stateNode, qt && typeof qt.onCommitFiberRoot == "function")
        try {
          qt.onCommitFiberRoot(
            Mt,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = P.T, i = nt.p, nt.p = 2, P.T = null;
        try {
          for (var r = l.onRecoverableError, h = 0; h < n.length; h++) {
            var m = n[h];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          P.T = e, nt.p = i;
        }
      }
      if (n = Sn, r = En, En = null, n !== null && (Sn = null, r === null && (r = []), t !== null))
        for (m = 0; m < n.length; m++)
          e = (0, n[m])(
            r
          ), e !== void 0 && t.finished.finally(e);
      (me & 3) !== 0 && ji(), ye(l), i = l.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? l === Gi ? du++ : (du = 0, Gi = l) : (du = 0, Gi = null), gu(0);
    }
  }
  function so(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Fn(l)));
  }
  function ji() {
    return yn !== null && (yn.skipTransition(), yn = null), ts(), ls(), es(), as();
  }
  function as() {
    if (Qt !== 5) return !1;
    var t = ae, l = $c;
    $c = 0;
    var e = hf(me), a = P.T, n = nt.p;
    try {
      nt.p = 32 > e ? 32 : e, P.T = null, e = Ic, Ic = null;
      var i = ae, r = me;
      if (Qt = 0, qa = ae = null, me = 0, (Rt & 6) !== 0) throw Error(s(331));
      var h = Rt;
      if (Rt |= 4, F0(i.current), Z0(
        i,
        i.current,
        r,
        e
      ), Rt = h, gu(0, !1), qt && typeof qt.onPostCommitFiberRoot == "function")
        try {
          qt.onPostCommitFiberRoot(Mt, i);
        } catch {
        }
      return !0;
    } finally {
      nt.p = n, P.T = a, so(t, l);
    }
  }
  function ro(t, l, e) {
    l = Ql(e, l), l = Tc(t.stateNode, l, 2), t = Je(t, l, 2), t !== null && (Hn(t, 2), ye(t));
  }
  function Ht(t, l, e) {
    if (t.tag === 3)
      ro(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          ro(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (la === null || !la.has(a))) {
            t = Ql(e, t), e = i0(2), a = Je(l, e, 2), a !== null && (f0(
              e,
              a,
              l,
              t
            ), Hn(a, 2), ye(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function ns(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new xg();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Fc = !0, n.add(e), t = Bg.bind(null, t, l, e), l.then(t, t));
  }
  function Bg(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Yt === t && (_t & e) === e && ((Ft === 4 || Ft === 3 && (_t & 62914560) === _t && 300 > il() - Bi) && (Rt & 2) === 0 ? pn(t, 0) : Hi |= e, mn === _t && (mn = 0)), ye(t);
  }
  function ho(t, l) {
    l === 0 && (l = $s()), t = pa(t, l), t !== null && (Hn(t, l), ye(t));
  }
  function wg(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), ho(t, e);
  }
  function qg(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), ho(t, e);
  }
  function Gg(t, l) {
    return Vt(t, l);
  }
  var _n = null, An = null, us = !1, Vi = !1, is = !1, aa = 0;
  function ye(t) {
    t !== An && t.next === null && (An === null ? _n = An = t : An = An.next = t), Vi = !0, us || (us = !0, Xg());
  }
  function gu(t, l) {
    if (!is && Vi) {
      is = !0;
      do
        for (var e = !1, a = _n; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var r = a.suspendedLanes, h = a.pingedLanes;
              i = (1 << 31 - Cl(42 | t) + 1) - 1, i &= n & ~(r & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (e = !0, mo(a, i));
          } else
            i = _t, i = Hu(
              a,
              a === Yt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Un(a, i) || (e = !0, mo(a, i));
          a = a.next;
        }
      while (e);
      is = !1;
    }
  }
  function Yg() {
    oo();
  }
  function oo() {
    Vi = us = !1;
    var t = 0;
    aa !== 0 && Ig() && (t = aa);
    for (var l = il(), e = null, a = _n; a !== null; ) {
      var n = a.next, i = go(a, l);
      i === 0 ? (a.next = null, e === null ? _n = n : e.next = n, n === null && (An = e)) : (e = a, (t !== 0 || (i & 3) !== 0) && (Vi = !0)), a = n;
    }
    Qt !== 0 && Qt !== 5 || gu(t), aa !== 0 && (aa = 0);
  }
  function go(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var r = 31 - Cl(i), h = 1 << r, m = n[r];
      m === -1 ? ((h & e) === 0 || (h & a) !== 0) && (n[r] = ad(h, l)) : m <= l && (t.expiredLanes |= h), i &= ~h;
    }
    if (l = Yt, e = _t, e = Hu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (Ut === 2 || Ut === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ee(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Un(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && Ee(a), hf(e)) {
        case 2:
        case 8:
          e = La;
          break;
        case 32:
          e = va;
          break;
        case 268435456:
          e = Cu;
          break;
        default:
          e = va;
      }
      return a = vo.bind(null, t), e = Vt(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && Ee(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function vo(t, l) {
    if (Qt !== 0 && Qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (ji() && t.callbackNode !== e)
      return null;
    var a = _t;
    return a = Hu(
      t,
      t === Yt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (P0(t, a, l), go(t, il()), t.callbackNode != null && t.callbackNode === e ? vo.bind(null, t) : null);
  }
  function mo(t, l) {
    if (ji()) return null;
    P0(t, l, !0);
  }
  function Xg() {
    Pg(function() {
      (Rt & 6) !== 0 ? Vt(
        Dn,
        Yg
      ) : oo();
    });
  }
  function fs() {
    if (aa === 0) {
      var t = xa;
      t === 0 && (t = Ru, Ru <<= 1, (Ru & 261888) === 0 && (Ru = 256)), aa = t;
    }
    return aa;
  }
  function yo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Yu(t);
  }
  function Lg(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var i = yo(
        (n[bl] || null).action
      ), r = a.submitter;
      r && (l = (l = r[bl] || null) ? yo(l.formAction) : r.getAttribute("formAction"), l !== null && (i = l, r = null));
      var h = new Vu(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (aa !== 0) {
                  var m = new FormData(n, r);
                  vc(
                    e,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (h.preventDefault(), m = new FormData(n, r), vc(
                  e,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var cs = 0; cs < Uf.length; cs++) {
    var ss = Uf[cs], jg = ss.toLowerCase(), Vg = ss[0].toUpperCase() + ss.slice(1);
    Pl(
      jg,
      "on" + Vg
    );
  }
  Pl(jr, "onAnimationEnd"), Pl(Vr, "onAnimationIteration"), Pl(Qr, "onAnimationStart"), Pl("dblclick", "onDoubleClick"), Pl("focusin", "onFocus"), Pl("focusout", "onBlur"), Pl(kd, "onTransitionRun"), Pl(Pd, "onTransitionStart"), Pl(tg, "onTransitionCancel"), Pl(Zr, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), Sa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Sa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Sa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Sa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Sa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Sa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu)
  );
  function So(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (l)
          for (var r = a.length - 1; 0 <= r; r--) {
            var h = a[r], m = h.instance, z = h.currentTarget;
            if (h = h.listener, m !== i && n.isPropagationStopped())
              break t;
            i = h, n.currentTarget = z;
            try {
              i(n);
            } catch (N) {
              Ku(N);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (r = 0; r < a.length; r++) {
            if (h = a[r], m = h.instance, z = h.currentTarget, h = h.listener, m !== i && n.isPropagationStopped())
              break t;
            i = h, n.currentTarget = z;
            try {
              i(n);
            } catch (N) {
              Ku(N);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function Tt(t, l) {
    var e = l[er];
    e === void 0 && (e = l[er] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Eo(l, t, 2, !1), e.add(a));
  }
  function rs(t, l, e) {
    var a = 0;
    l && (a |= 4), Eo(
      e,
      t,
      a,
      l
    );
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function hs(t) {
    if (!t[Qi]) {
      t[Qi] = !0, ur.forEach(function(e) {
        e !== "selectionchange" && (Qg.has(e) || rs(e, !1, t), rs(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Qi] || (l[Qi] = !0, rs("selectionchange", !1, l));
    }
  }
  function Eo(t, l, e, a) {
    switch (c1(l)) {
      case 2:
        var n = wv;
        break;
      case 8:
        n = qv;
        break;
      default:
        n = Rs;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !Ef || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function os(t, l, e, a, n) {
    var i = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var r = a.tag;
        if (r === 3 || r === 4) {
          var h = a.stateNode.containerInfo;
          if (h === n) break;
          if (r === 4)
            for (r = a.return; r !== null; ) {
              var m = r.tag;
              if ((m === 3 || m === 4) && r.stateNode.containerInfo === n)
                return;
              r = r.return;
            }
          for (; h !== null; ) {
            if (r = ya(h), r === null) return;
            if (m = r.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = r;
              continue t;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Sr(function() {
      var z = i, N = yf(e), U = [];
      t: {
        var b = Kr.get(t);
        if (b !== void 0) {
          var O = Vu, X = t;
          switch (t) {
            case "keypress":
              if (Lu(e) === 0) break t;
            case "keydown":
            case "keyup":
              O = Od;
              break;
            case "focusin":
              X = "focus", O = _f;
              break;
            case "focusout":
              X = "blur", O = _f;
              break;
            case "beforeblur":
            case "afterblur":
              O = _f;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = pr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = md;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Ud;
              break;
            case jr:
            case Vr:
            case Qr:
              O = Ed;
              break;
            case Zr:
              O = Bd;
              break;
            case "scroll":
            case "scrollend":
              O = gd;
              break;
            case "wheel":
              O = qd;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = pd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = _r;
              break;
            case "submit":
              O = Rd;
              break;
            case "toggle":
            case "beforetoggle":
              O = Yd;
          }
          var W = (l & 4) !== 0, gt = !W && (t === "scroll" || t === "scrollend"), A = W ? b !== null ? b + "Capture" : null : b;
          W = [];
          for (var p = z, M; p !== null; ) {
            var D = p;
            if (M = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || M === null || A === null || (D = qn(p, A), D != null && W.push(
              mu(p, D, M)
            )), gt) break;
            p = p.return;
          }
          0 < W.length && (b = new O(
            b,
            X,
            null,
            e,
            N
          ), U.push({ event: b, listeners: W }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (O = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout", O && e !== mf && (X = e.relatedTarget || e.fromElement) && (ya(X) || X[ja]))
            break t;
          (b || O) && (X = N.window === N ? N : (O = N.ownerDocument) ? O.defaultView || O.parentWindow : window, b ? (O = e.relatedTarget || e.toElement, b = z, O = O ? ya(O) : null, O !== null && (gt = d(O), W = O.tag, O !== gt || W !== 5 && W !== 27 && W !== 6) && (O = null)) : (b = null, O = z), b !== O && (W = pr, D = "onMouseLeave", A = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (W = _r, D = "onPointerLeave", A = "onPointerEnter", p = "pointer"), gt = b == null ? X : wn(b), M = O == null ? X : wn(O), X = new W(
            D,
            p + "leave",
            b,
            e,
            N
          ), X.target = gt, X.relatedTarget = M, D = null, ya(N) === z && (W = new W(
            A,
            p + "enter",
            O,
            e,
            N
          ), W.target = M, W.relatedTarget = gt, D = W), gt = D, W = b && O ? I(
            b,
            O,
            Zg
          ) : null, b !== null && To(
            U,
            X,
            b,
            W,
            !1
          ), O !== null && gt !== null && To(
            U,
            gt,
            O,
            W,
            !0
          )));
        }
        t: {
          if (b = z ? wn(z) : window, O = b.nodeName && b.nodeName.toLowerCase(), O === "select" || O === "input" && b.type === "file")
            var Z = Rr;
          else if (Nr(b))
            if (Dr)
              Z = Wd;
            else {
              Z = Jd;
              var At = Kd;
            }
          else
            O = b.nodeName, !O || O.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? z && vf(z.elementType) && (Z = Rr) : Z = Fd;
          if (Z && (Z = Z(t, z))) {
            Cr(
              U,
              Z,
              e,
              N
            );
            break t;
          }
          At && At(t, b, z);
        }
        switch (At = z ? wn(z) : window, t) {
          case "focusin":
            (Nr(At) || At.contentEditable === "true") && (Ia = At, Cf = z, Zn = null);
            break;
          case "focusout":
            Zn = Cf = Ia = null;
            break;
          case "mousedown":
            Rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rf = !1, Xr(U, e, N);
            break;
          case "selectionchange":
            if (Id) break;
          case "keydown":
          case "keyup":
            Xr(U, e, N);
        }
        var at;
        if (zf)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          $a ? xr(t, e) && (ft = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (ft = "onCompositionStart");
        ft && (Ar && e.locale !== "ko" && ($a || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && $a && (at = Er()) : (Ge = N, Tf = "value" in Ge ? Ge.value : Ge.textContent, $a = !0)), At = Zi(z, ft), 0 < At.length && (ft = new br(
          ft,
          t,
          null,
          e,
          N
        ), U.push({ event: ft, listeners: At }), at ? ft.data = at : (at = Or(e), at !== null && (ft.data = at)))), (at = Ld ? jd(t, e) : Vd(t, e)) && (ft = Zi(z, "onBeforeInput"), 0 < ft.length && (At = new br(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          N
        ), U.push({
          event: At,
          listeners: ft
        }), At.data = at)), Lg(
          U,
          t,
          z,
          e,
          N
        );
      }
      So(U, l);
    });
  }
  function mu(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Zi(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = qn(t, e), n != null && a.unshift(
        mu(t, n, i)
      ), n = qn(t, l), n != null && a.push(
        mu(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Zg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function To(t, l, e, a, n) {
    for (var i = l._reactName, r = []; e !== null && e !== a; ) {
      var h = e, m = h.alternate, z = h.stateNode;
      if (h = h.tag, m !== null && m === a) break;
      h !== 5 && h !== 26 && h !== 27 || z === null || (m = z, n ? (z = qn(e, i), z != null && r.unshift(
        mu(e, z, m)
      )) : n || (z = qn(e, i), z != null && r.push(
        mu(e, z, m)
      ))), e = e.return;
    }
    r.length !== 0 && t.push({ event: l, listeners: r });
  }
  var Kg = /\r\n?/g, Jg = /\u0000|\uFFFD/g;
  function po(t) {
    return (typeof t == "string" ? t : "" + t).replace(Kg, `
`).replace(Jg, "");
  }
  function bo(t, l) {
    return l = po(l), po(t) === l;
  }
  function Bt(t, l, e, a, n, i) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          l === "body" || l === "textarea" && a === "" || Ja(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          l !== "body" && Ja(t, "" + a);
        else return;
        break;
      case "className":
        Gu(t, "class", a);
        break;
      case "tabIndex":
        Gu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gu(t, e, a);
        break;
      case "style":
        mr(t, a, i);
        return;
      case "data":
        if (l !== "object") {
          Gu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Yu(a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (e === "formAction" ? (l !== "input" && Bt(t, l, "name", n.name, n, null), Bt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Bt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Bt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Bt(t, l, "encType", n.encType, n, null), Bt(t, l, "method", n.method, n, null), Bt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Yu(a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = fe);
        return;
      case "onScroll":
        a != null && Tt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
            i?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Yu(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        Tt("beforetoggle", t), Tt("toggle", t), qu(t, "popover", a);
        break;
      case "xlinkActuate":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        qu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = od.get(e) || e, qu(t, e, a);
        else return;
    }
    Nt = !0;
  }
  function ds(t, l, e, a, n, i) {
    switch (e) {
      case "style":
        mr(t, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(s(60));
            i?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Ja(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Ja(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Tt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = fe);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ir.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), i = e.slice(2, n ? e.length - 7 : void 0), l = t[bl] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(i, l, n), typeof a == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(i, a, n);
              break t;
            }
            Nt = !0, e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : qu(t, e, a);
          }
        return;
    }
    Nt = !0;
  }
  function ol(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Tt("error", t), Tt("load", t);
        var a = !1, n = !1, i;
        for (i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (r != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  Bt(t, l, i, r, e, null);
              }
          }
        n && Bt(t, l, "srcSet", e.srcSet, e, null), a && Bt(t, l, "src", e.src, e, null);
        return;
      case "input":
        Tt("invalid", t);
        var h = i = r = n = null, m = null, z = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var N = e[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  r = N;
                  break;
                case "checked":
                  m = N;
                  break;
                case "defaultChecked":
                  z = N;
                  break;
                case "value":
                  i = N;
                  break;
                case "defaultValue":
                  h = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(s(137, l));
                  break;
                default:
                  Bt(t, l, a, N, e, null);
              }
          }
        or(
          t,
          i,
          h,
          m,
          z,
          r,
          n,
          !1
        );
        return;
      case "select":
        Tt("invalid", t), a = r = i = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (h = e[n], h != null))
            switch (n) {
              case "value":
                i = h;
                break;
              case "defaultValue":
                r = h;
                break;
              case "multiple":
                a = h;
              default:
                Bt(t, l, n, h, e, null);
            }
        l = i, e = r, t.multiple = !!a, l != null ? Ka(t, !!a, l, !1) : e != null && Ka(t, !!a, e, !0);
        return;
      case "textarea":
        Tt("invalid", t), i = n = a = null;
        for (r in e)
          if (e.hasOwnProperty(r) && (h = e[r], h != null))
            switch (r) {
              case "value":
                a = h;
                break;
              case "defaultValue":
                n = h;
                break;
              case "children":
                i = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(s(91));
                break;
              default:
                Bt(t, l, r, h, e, null);
            }
        gr(t, a, n, i);
        return;
      case "option":
        for (m in e)
          e.hasOwnProperty(m) && (a = e[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Bt(t, l, m, a, e, null));
        return;
      case "dialog":
        Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          Tt(vu[a], t);
        break;
      case "image":
        Tt("error", t), Tt("load", t);
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Tt("error", t), Tt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in e)
          if (e.hasOwnProperty(z) && (a = e[z], a != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                Bt(t, l, z, a, e, null);
            }
        return;
      default:
        if (vf(l)) {
          for (N in e)
            e.hasOwnProperty(N) && (a = e[N], a !== void 0 && ds(
              t,
              l,
              N,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (h in e)
      e.hasOwnProperty(h) && (a = e[h], a != null && Bt(t, l, h, a, e, null));
  }
  var Fg = {};
  function Wg(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, r = null, h = null, m = null, z = null, N = null;
        for (O in e) {
          var U = e[O];
          if (e.hasOwnProperty(O) && U != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = U;
              default:
                a.hasOwnProperty(O) || Bt(t, l, O, null, a, U);
            }
        }
        for (var b in a) {
          var O = a[b];
          if (U = e[b], a.hasOwnProperty(b) && (O != null || U != null))
            switch (b) {
              case "type":
                O !== U && (Nt = !0), i = O;
                break;
              case "name":
                O !== U && (Nt = !0), n = O;
                break;
              case "checked":
                O !== U && (Nt = !0), z = O;
                break;
              case "defaultChecked":
                O !== U && (Nt = !0), N = O;
                break;
              case "value":
                O !== U && (Nt = !0), r = O;
                break;
              case "defaultValue":
                O !== U && (Nt = !0), h = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(s(137, l));
                break;
              default:
                O !== U && Bt(
                  t,
                  l,
                  b,
                  O,
                  a,
                  U
                );
            }
        }
        df(
          t,
          r,
          h,
          m,
          z,
          N,
          i,
          n
        );
        return;
      case "select":
        O = r = h = b = null;
        for (i in e)
          if (m = e[i], e.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                O = m;
              default:
                a.hasOwnProperty(i) || Bt(
                  t,
                  l,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (i = a[n], m = e[n], a.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                i !== m && (Nt = !0), b = i;
                break;
              case "defaultValue":
                i !== m && (Nt = !0), h = i;
                break;
              case "multiple":
                i !== m && (Nt = !0), r = i;
              default:
                i !== m && Bt(
                  t,
                  l,
                  n,
                  i,
                  a,
                  m
                );
            }
        l = h, e = r, a = O, b != null ? Ka(t, !!e, b, !1) : !!a != !!e && (l != null ? Ka(t, !!e, l, !0) : Ka(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        O = b = null;
        for (h in e)
          if (n = e[h], e.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Bt(t, l, h, null, a, n);
            }
        for (r in a)
          if (n = a[r], i = e[r], a.hasOwnProperty(r) && (n != null || i != null))
            switch (r) {
              case "value":
                n !== i && (Nt = !0), b = n;
                break;
              case "defaultValue":
                n !== i && (Nt = !0), O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== i && Bt(t, l, r, n, a, i);
            }
        dr(t, b, O);
        return;
      case "option":
        for (var X in e)
          b = e[X], e.hasOwnProperty(X) && b != null && !a.hasOwnProperty(X) && (X === "selected" ? t.selected = !1 : Bt(
            t,
            l,
            X,
            null,
            a,
            b
          ));
        for (m in a)
          b = a[m], O = e[m], a.hasOwnProperty(m) && b !== O && (b != null || O != null) && (m === "selected" ? (b !== O && (Nt = !0), t.selected = b && typeof b != "function" && typeof b != "symbol") : Bt(
            t,
            l,
            m,
            b,
            a,
            O
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in e)
          b = e[W], e.hasOwnProperty(W) && b != null && !a.hasOwnProperty(W) && Bt(t, l, W, null, a, b);
        for (z in a)
          if (b = a[z], O = e[z], a.hasOwnProperty(z) && b !== O && (b != null || O != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(s(137, l));
                break;
              default:
                Bt(
                  t,
                  l,
                  z,
                  b,
                  a,
                  O
                );
            }
        return;
      default:
        if (vf(l)) {
          for (var gt in e)
            b = e[gt], e.hasOwnProperty(gt) && b !== void 0 && !a.hasOwnProperty(gt) && ds(
              t,
              l,
              gt,
              void 0,
              a,
              b
            );
          for (N in a)
            b = a[N], O = e[N], !a.hasOwnProperty(N) || b === O || b === void 0 && O === void 0 || ds(
              t,
              l,
              N,
              b,
              a,
              O
            );
          return;
        }
    }
    for (var A in e)
      b = e[A], e.hasOwnProperty(A) && b != null && !a.hasOwnProperty(A) && Bt(t, l, A, null, a, b);
    for (U in a)
      b = a[U], O = e[U], !a.hasOwnProperty(U) || b === O || b == null && O == null || Bt(t, l, U, b, a, O);
  }
  function _o(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function $g() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], i = n.transferSize, r = n.initiatorType, h = n.duration;
        if (i && h && _o(r)) {
          for (r = 0, h = n.responseEnd, a += 1; a < e.length; a++) {
            var m = e[a], z = m.startTime;
            if (z > h) break;
            var N = m.transferSize, U = m.initiatorType;
            N && _o(U) && (m = m.responseEnd, r += N * (m < h ? 1 : (h - z) / (m - z)));
          }
          if (--a, l += 8 * (i + r) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var gs = null, vs = null;
  function yu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ao(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zo(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Mo(t, l, e, a) {
    return e = yu(
      e
    ).createElement(t), e[fl] = a, e[bl] = l, ol(e, t, l), el(e), e;
  }
  function ms(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var ys = null;
  function Ig() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ys ? !1 : (ys = t, !0) : (ys = null, !1);
  }
  var Ss = typeof setTimeout == "function" ? setTimeout : void 0, kg = typeof clearTimeout == "function" ? clearTimeout : void 0, xo = typeof Promise == "function" ? Promise : void 0, Oo = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ss, Pg = typeof queueMicrotask == "function" ? queueMicrotask : typeof xo < "u" ? function(t) {
    return xo.resolve(null).then(t).catch(tv);
  } : Ss;
  function tv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function na(t) {
    return t === "head";
  }
  function No(t, l) {
    var e = l, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(n), Rn(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Ms(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, Ms(e);
          for (var i = e.firstChild; i; ) {
            var r = i.nextSibling, h = i.nodeName;
            i[Bn] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = r;
          }
        } else
          e === "body" && Ms(t.ownerDocument.body);
      e = n;
    } while (e);
    Rn(l);
  }
  function Co(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function Ro(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var a = 1;
      else
        for (var n = a = 0; n < l.length; n++) {
          var i = l[n];
          0 < i.width && 0 < i.height && a++;
        }
      a === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function Do(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function lv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function Es(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return lv(l, e, t);
  }
  function ev(t) {
    return t.documentElement.clientHeight;
  }
  function av(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function nv(t, l, e, a, n, i, r, h, m) {
    var z = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var N = z.startViewTransition({
        update: function() {
          var b = z.defaultView, O = b.navigation && b.navigation.transition, X = z.fonts.status;
          a();
          var W = [];
          if (X === "loaded" && (ev(z), z.fonts.status === "loading" && W.push(z.fonts.ready)), X = W.length, t !== null)
            for (var gt = t.suspenseyImages, A = 0, p = 0; p < gt.length; p++) {
              var M = gt[p];
              if (!M.complete) {
                var D = M.getBoundingClientRect();
                if (0 < D.bottom && 0 < D.right && D.top < b.innerHeight && D.left < b.innerWidth) {
                  if (A += Po(M), A > Fi) {
                    W.length = X;
                    break;
                  }
                  M = new Promise(
                    av.bind(M)
                  ), W.push(M);
                }
              }
            }
          if (0 < W.length)
            return b = Promise.race([
              Promise.all(W),
              new Promise(function(Z) {
                return setTimeout(Z, 500);
              })
            ]).then(n, n), (O ? Promise.allSettled([O.finished, b]) : b).then(i, i);
          if (n(), O)
            return O.finished.then(
              i,
              i
            );
          i();
        },
        types: e
      });
      z.__reactViewTransition = N;
      var U = [];
      return N.ready.then(
        function() {
          for (var b = z.documentElement.getAnimations({
            subtree: !0
          }), O = 0; O < b.length; O++) {
            var X = b[O], W = X.effect, gt = W.pseudoElement;
            if (gt != null && gt.startsWith("::view-transition")) {
              U.push(X), X = W.getKeyframes();
              for (var A = gt = void 0, p = !0, M = 0; M < X.length; M++) {
                var D = X[M], Z = D.width;
                if (gt === void 0) gt = Z;
                else if (gt !== Z) {
                  p = !1;
                  break;
                }
                if (Z = D.height, A === void 0) A = Z;
                else if (A !== Z) {
                  p = !1;
                  break;
                }
                delete D.width, delete D.height, D.transform === "none" && delete D.transform;
              }
              p && gt !== void 0 && A !== void 0 && (W.setKeyframes(X), p = getComputedStyle(
                W.target,
                W.pseudoElement
              ), p.width !== gt || p.height !== A) && (p = X[0], p.width = gt, p.height = A, p = X[X.length - 1], p.width = gt, p.height = A, W.setKeyframes(X));
            }
          }
          r();
        },
        function(b) {
          z.__reactViewTransition === N && (z.__reactViewTransition = null);
          try {
            typeof b == "object" && b !== null && b.name === "InvalidStateError" && (b.message === "View transition was skipped because document visibility state is hidden." || b.message === "Skipping view transition because document visibility state has become hidden." || b.message === "Skipping view transition because viewport size changed." || b.message === "Transition was aborted because of invalid state") && (b = null), b !== null && m(b);
          } finally {
            a(), n(), r();
          }
        }
      ), N.finished.finally(function() {
        for (var b = 0; b < U.length; b++)
          U[b].cancel();
        z.__reactViewTransition === N && (z.__reactViewTransition = null), h();
      }), N;
    } catch {
      return a(), n(), r(), null;
    }
  }
  function Ga(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  Ga.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : K({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Ga.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), a = [], n = 0; n < e.length; n++) {
      var i = e[n].effect;
      i !== null && i.target === t && i.pseudoElement === l && a.push(e[n]);
    }
    return a;
  }, Ga.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Uo(t) {
    return {
      name: t,
      group: new Ga("group", t),
      imagePair: new Ga("image-pair", t),
      old: new Ga("old", t),
      new: new Ga("new", t)
    };
  }
  function Gl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Gl.prototype.addEventListener = function(t, l, e) {
    var a = null, n = null;
    if (!(e != null && typeof e != "boolean" && (a = e.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (Bo(i, t, l, e) === -1) {
        var r = this, h = l;
        e != null && typeof e != "boolean" && e.once === !0 && (h = function(m) {
          r.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, m) : l.handleEvent(m);
        }), a !== null && (n = r.removeEventListener.bind(
          r,
          t,
          l,
          e
        ), a.addEventListener("abort", n, { once: !0 }), n = a.removeEventListener.bind(a, "abort", n)), a = zn(e), i.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: h,
          cleanup: n
        }), y(
          this._fragmentFiber.child,
          !1,
          uv,
          t,
          h,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function uv(t, l, e, a) {
    return R(t).addEventListener(
      l,
      e,
      a
    ), !1;
  }
  Gl.prototype.removeEventListener = function(t, l, e) {
    var a = this._eventListeners;
    if (a !== null && (l = Bo(
      a,
      t,
      l,
      e
    ), l !== -1)) {
      var n = a[l];
      e = n.attachedListener;
      var i = n.cleanup;
      n = zn(n.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        iv,
        t,
        e,
        n
      ), a.splice(l, 1), i !== null && i();
    }
  };
  function iv(t, l, e, a) {
    return R(t).removeEventListener(
      l,
      e,
      a
    ), !1;
  }
  function zn(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Ho(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Bo(t, l, e, a) {
    if (t.length === 0) return -1;
    a = Ho(a);
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      if (i.type === l && i.listener === e && Ho(i.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  Gl.prototype.dispatchEvent = function(t) {
    var l = x(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = R(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var a = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          a.addEventListener(
            i.type,
            i.attachedListener,
            zn(i.optionsOrUseCapture)
          );
        }
      if (l.appendChild(a), t = a.dispatchEvent(t), e)
        for (n = 0; n < e.length; n++)
          i = e[n], a.removeEventListener(
            i.type,
            i.attachedListener,
            zn(i.optionsOrUseCapture)
          );
      return l.removeChild(a), t;
    }
    return l.dispatchEvent(t);
  }, Gl.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      wo,
      t,
      void 0,
      void 0
    );
  };
  function wo(t, l) {
    return t.tag === 6 ? !1 : (t = R(t), Sv(t, l));
  }
  Gl.prototype.focusLast = function(t) {
    var l = [];
    y(
      this._fragmentFiber.child,
      !0,
      Ts,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !wo(l[e], t); e--) ;
  };
  function Ts(t, l) {
    return l.push(t), !1;
  }
  Gl.prototype.blur = function() {
    var t = x(
      this._fragmentFiber
    );
    t !== null && (t = R(t), t = yu(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      fv,
      t,
      void 0,
      void 0
    ));
  };
  function fv(t, l) {
    return t.tag === 6 ? !1 : (t = R(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Gl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      cv,
      t,
      void 0,
      void 0
    );
  };
  function cv(t, l) {
    return t.tag === 6 || (t = R(t), l.observe(t)), !1;
  }
  Gl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), y(
        this._fragmentFiber.child,
        !1,
        sv,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < ne.length; e++) {
        var a = ne[e];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : ne[l++] = a;
      }
      ne.length = l;
    }
  };
  function sv(t, l) {
    return t.tag === 6 || (t = R(t), l.unobserve(t)), !1;
  }
  var ne = [], ps = !1;
  function rv(t, l, e) {
    ne.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), ps || (ps = !0, Ev(function() {
      ps = !1;
      var a = ne;
      ne = [];
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  Gl.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      hv,
      t,
      void 0,
      void 0
    ), t;
  };
  function hv(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = R(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Gl.prototype.getRootNode = function(t) {
    var l = x(
      this._fragmentFiber
    );
    return l === null ? this : R(l).getRootNode(t);
  }, Gl.prototype.compareDocumentPosition = function(t) {
    var l = x(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      Ts,
      e,
      void 0,
      void 0
    );
    var a = R(l);
    if (e.length === 0) {
      if (e = a, C(this._fragmentFiber)) {
        t: {
          for (l = this._fragmentFiber.return; l !== null; ) {
            if (l.tag === 4) {
              l = l.stateNode.containerInfo;
              break t;
            }
            if (l.tag === 3 || l.tag === 5 || l.tag === 27)
              break;
            l = l.return;
          }
          l = null;
        }
        l != null && (e = l);
      }
      l = this._fragmentFiber;
      var n = a = e.compareDocumentPosition(t);
      return e === t ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = H(l)[1], e === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (t = R(e).compareDocumentPosition(
        t
      ), n = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = R(e[0]), n = R(e[e.length - 1]);
    var i = C(this._fragmentFiber) ? l.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var r = l.compareDocumentPosition(t), h = n.compareDocumentPosition(t), m = r & Node.DOCUMENT_POSITION_CONTAINED_BY || h & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return h = a && i && r & Node.DOCUMENT_POSITION_FOLLOWING && h & Node.DOCUMENT_POSITION_PRECEDING, l = a && l === t || i && n === t || m || h ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && l === t || !i && n === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : r, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || ov(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function ov(t, l, e, a, n) {
    var i = ya(n);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!i)
        t: {
          for (; i !== null; ) {
            if (i.tag === 7 && (i === l || i.alternate === l)) {
              e = !0;
              break t;
            }
            i = i.return;
          }
          e = !1;
        }
      return e;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return i = n.ownerDocument, n === i || n === i.documentElement || n === i.body;
      t: {
        for (i = l, l = x(l); i !== null; ) {
          if (!(i.tag !== 5 && i.tag !== 3 && i.tag !== 27 || i !== l && i.alternate !== l)) {
            i = !0;
            break t;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!i) && !(l = i === e) && (l = I(
      e,
      i,
      k
    ), l === null ? l = !1 : (y(
      l,
      !0,
      $,
      i,
      e
    ), i = q, q = null, l = i !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!i) && !(l = i === a) && (l = I(
      a,
      i,
      k
    ), l === null ? l = !1 : (y(
      l,
      !0,
      L,
      i,
      a
    ), i = q, lt = q = null, l = i !== null)), l) : !1;
  }
  function qo(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Gl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(s(566));
    var l = [];
    y(
      this._fragmentFiber.child,
      !1,
      Ts,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var a = H(
        this._fragmentFiber
      );
      if (a = e ? a[1] || a[0] || x(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = R(a), qo(t, e);
        return;
      }
      if (a = R(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          e = "host" in a ? a.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = e ? l.length - 1 : 0; a !== (e ? -1 : l.length); ) {
      var n = l[a];
      n.tag === 6 ? (n = R(n), qo(n, e)) : R(n).scrollIntoView(t), a += e ? -1 : 1;
    }
  };
  function dv(t, l) {
    return t = R(t), Go(t, l), !1;
  }
  function Go(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function Yo(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        t.addEventListener(
          n.type,
          n.attachedListener,
          zn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(i) {
      for (var r = 0, h = 0; h < ne.length; h++) {
        var m = ne[h];
        (m.fragmentInstance !== l || m.observer !== i || m.instance !== t) && (ne[r++] = m);
      }
      ne.length = r, i.observe(t);
    }), Go(t, l));
  }
  function gv(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        t.removeEventListener(
          n.type,
          n.attachedListener,
          zn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(i) {
      typeof i.rootMargin == "string" ? rv(
        l,
        i,
        t
      ) : i.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function bs(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bs(e), wu(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function vv(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Bn])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Wl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function mv(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Wl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Xo(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Wl(t.nextSibling), t === null)) return null;
    return t;
  }
  function _s(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function As(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function yv(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Wl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var zs = null;
  function Lo(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Wl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function jo(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Sv(t, l) {
    function e() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return a;
  }
  function Ev(t) {
    Oo(function() {
      Oo(function(l) {
        return t(l);
      });
    });
  }
  function Vo(t, l, e) {
    switch (l = yu(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Qo(t, l, e) {
    for (var a in e) {
      var n = e[a];
      e.hasOwnProperty(a) && n != null && Bt(t, l, a, null, Fg, n);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === fe && (t.onclick = null), wu(t);
  }
  function Ms(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    wu(t);
  }
  var $l = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Set();
  function Su(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var He = nt.d;
  nt.d = {
    f: Tv,
    r: pv,
    D: bv,
    C: _v,
    L: Av,
    m: zv,
    X: xv,
    S: Mv,
    M: Ov
  };
  function Tv() {
    var t = He.f(), l = Yi();
    return t || l;
  }
  function pv(t) {
    var l = Va(t);
    l !== null && l.tag === 5 && l.type === "form" ? Kh(l) : He.r(t);
  }
  var Mn = typeof document > "u" ? null : document;
  function Ko(t, l, e) {
    var a = Mn;
    if (a && typeof l == "string" && l) {
      var n = jl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), Zo.has(n) || (Zo.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), ol(l, "link", t), el(l), a.head.appendChild(l)));
    }
  }
  function bv(t) {
    He.D(t), Ko("dns-prefetch", t, null);
  }
  function _v(t, l) {
    He.C(t, l), Ko("preconnect", t, l);
  }
  function Av(t, l, e) {
    He.L(t, l, e);
    var a = Mn;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + jl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + jl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + jl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + jl(t) + '"]';
      var i = n;
      switch (l) {
        case "style":
          i = xn(t);
          break;
        case "script":
          i = On(t);
      }
      if (!($l.has(i) || (t = K(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), $l.set(i, t), a.querySelector(n) !== null || l === "style" && a.querySelector(Eu(i)) || l === "script" && a.querySelector(Tu(i))))) {
        var r = a.createElement("link");
        ol(r, "link", t), l === "style" && (r[Bu] = !0, r.onload = r.onerror = function() {
          nr(r);
        }), el(r), a.head.appendChild(r);
      }
    }
  }
  function zv(t, l) {
    He.m(t, l);
    var e = Mn;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + jl(a) + '"][href="' + jl(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = On(t);
      }
      if (!$l.has(i) && (t = K({ rel: "modulepreload", href: t }, l), $l.set(i, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Tu(i)))
              return;
        }
        a = e.createElement("link"), ol(a, "link", t), el(a), e.head.appendChild(a);
      }
    }
  }
  function Mv(t, l, e) {
    He.S(t, l, e);
    var a = Mn;
    if (a && t) {
      var n = Qa(a).hoistableStyles, i = xn(t);
      l = l || "default";
      var r = n.get(i);
      if (!r) {
        var h = { loading: 0, preload: null };
        if (r = a.querySelector(
          Eu(i)
        ))
          h.loading = 5;
        else {
          t = K(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = $l.get(i)) && xs(t, e);
          var m = r = a.createElement("link");
          el(m), ol(m, "link", t), m._p = new Promise(function(z, N) {
            m.onload = z, m.onerror = N;
          }), m.addEventListener("load", function() {
            h.loading |= 1;
          }), m.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Ki(r, l, a);
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: h
        }, n.set(i, r);
      }
    }
  }
  function xv(t, l) {
    He.X(t, l);
    var e = Mn;
    if (e && t) {
      var a = Qa(e).hoistableScripts, n = On(t), i = a.get(n);
      i || (i = e.querySelector(Tu(n)), i || (t = K({ src: t, async: !0 }, l), (l = $l.get(n)) && Os(t, l), i = e.createElement("script"), el(i), ol(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Ov(t, l) {
    He.M(t, l);
    var e = Mn;
    if (e && t) {
      var a = Qa(e).hoistableScripts, n = On(t), i = a.get(n);
      i || (i = e.querySelector(Tu(n)), i || (t = K({ src: t, async: !0, type: "module" }, l), (l = $l.get(n)) && Os(t, l), i = e.createElement("script"), el(i), ol(i, "link", t), e.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Jo(t, l, e, a) {
    var n = (n = Il.current) ? Su(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = xn(e.href), l = Qa(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = xn(e.href);
          var i = Qa(
            n
          ).hoistableStyles, r = i.get(t);
          if (r || (n = n.ownerDocument || n, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, r), (i = n.querySelector(
            Eu(t)
          )) ? i._p || (r.instance = i, r.state.loading = 5) : (i = $l.get(t), i || (i = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, $l.set(t, i)), Nv(
            n,
            t,
            i,
            r.state
          ))), l && a === null)
            throw Error(s(528, ""));
          return r;
        }
        if (l && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = On(e), l = Qa(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function xn(t) {
    return 'href="' + jl(t) + '"';
  }
  function Eu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Fo(t) {
    return K({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Nv(t, l, e, a) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[Bu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[Bu] = !0, l.onload = l.onerror = nr.bind(null, l), ol(l, "link", e), el(l), t.head.appendChild(l);
    a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function On(t) {
    return '[src="' + jl(t) + '"]';
  }
  function Tu(t) {
    return "script[async]" + t;
  }
  function Wo(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + jl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, el(a), a;
          var n = K({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), el(a), ol(a, "style", n), Ki(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = xn(e.href);
          var i = t.querySelector(
            Eu(n)
          );
          if (i)
            return l.state.loading |= 4, l.instance = i, el(i), i;
          a = Fo(e), (n = $l.get(n)) && xs(a, n), i = (t.ownerDocument || t).createElement("link"), el(i);
          var r = i;
          return r._p = new Promise(function(h, m) {
            r.onload = h, r.onerror = m;
          }), ol(i, "link", a), l.state.loading |= 4, Ki(i, e.precedence, t), l.instance = i;
        case "script":
          return i = On(e.src), (n = t.querySelector(
            Tu(i)
          )) ? (l.instance = n, el(n), n) : (a = e, (n = $l.get(i)) && (a = K({}, e), Os(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), el(n), ol(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Ki(a, e.precedence, t));
    return l.instance;
  }
  function Ki(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, r = 0; r < a.length; r++) {
      var h = a[r];
      if (h.dataset.precedence === l) i = h;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function xs(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Os(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Ji = null;
  function $o(t, l, e) {
    if (Ji === null) {
      var a = /* @__PURE__ */ new Map(), n = Ji = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Ji, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var i = e[n];
      if (!(i[Bn] || i[fl] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = i.getAttribute(l) || "";
        r = t + r;
        var h = a.get(r);
        h ? h.push(i) : a.set(r, [i]);
      }
    }
    return a;
  }
  function Ns(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Cv(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function Io(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function ko(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Po(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function t1(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += Po(l), t.suspenseyImages.push(l)), t = Uv.bind(t), l.decode().then(t, t));
  }
  function Rv(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = xn(a.href), i = l.querySelector(
          Eu(n)
        );
        if (i) {
          l = i._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = pu.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = i, el(i);
          return;
        }
        i = l.ownerDocument || l, a = Fo(a), (n = $l.get(n)) && xs(a, n), i = i.createElement("link"), el(i);
        var r = i;
        r._p = new Promise(function(h, m) {
          r.onload = h, r.onerror = m;
        }), ol(i, "link", a), e.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = pu.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Fi = 0;
  function Dv(t, l) {
    return t.stylesheets && t.count === 0 && $i(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && $i(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Fi === 0 && (Fi = 62500 * $g());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && $i(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Fi ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function l1(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) $i(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function pu() {
    this.count--, l1(this);
  }
  function Uv() {
    this.imgCount--, l1(this);
  }
  var Wi = null;
  function $i(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Wi = /* @__PURE__ */ new Map(), l.forEach(Hv, t), Wi = null, pu.call(t));
  }
  function Hv(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Wi.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Wi.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var r = n[i];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (e.set(r.dataset.precedence, r), a = r);
        }
        a && e.set(null, a);
      }
      n = l.instance, r = n.getAttribute("data-precedence"), i = e.get(r) || a, i === a && e.set(null, n), e.set(r, n), this.count++, a = pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Nn = {
    $$typeof: zt,
    Provider: null,
    Consumer: null,
    _currentValue: gl,
    _currentValue2: gl,
    _threadCount: 0
  };
  function Bv(t, l, e, a, n, i, r, h, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = sf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sf(0), this.hiddenUpdates = sf(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function e1(t, l, e, a, n, i, r, h, m, z, N, U) {
    return t = new Bv(
      t,
      l,
      e,
      r,
      m,
      z,
      N,
      U,
      h
    ), l = 1, i === !0 && (l |= 24), i = _l(3, null, null, l), t.current = i, i.stateNode = t, l = Qf(), l.refCount++, t.pooledCache = l, l.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Ff(i), t;
  }
  function a1(t) {
    return t ? (t = tn, t) : tn;
  }
  function n1(t, l, e, a, n, i) {
    n = a1(n), a.context === null ? a.context = n : a.pendingContext = n, a = Ke(l), a.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (a.callback = i), e = Je(t, a, l), e !== null && (xl(e, t, l), kn(e, t, l));
  }
  function u1(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Cs(t, l) {
    u1(t, l), (t = t.alternate) && u1(t, l);
  }
  function i1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = pa(t, 67108864);
      l !== null && xl(l, t, 67108864), Cs(t, 67108864);
    }
  }
  function f1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = ql();
      l = rf(l);
      var e = pa(t, l);
      e !== null && xl(e, t, l), Cs(t, l);
    }
  }
  var Cn = !0;
  function wv(t, l, e, a) {
    var n = P.T;
    P.T = null;
    var i = nt.p;
    try {
      nt.p = 2, Rs(t, l, e, a);
    } finally {
      nt.p = i, P.T = n;
    }
  }
  function qv(t, l, e, a) {
    var n = P.T;
    P.T = null;
    var i = nt.p;
    try {
      nt.p = 8, Rs(t, l, e, a);
    } finally {
      nt.p = i, P.T = n;
    }
  }
  function Rs(t, l, e, a) {
    if (Cn) {
      var n = Ds(a);
      if (n === null)
        os(
          t,
          l,
          a,
          Ii,
          e
        ), s1(t, a);
      else if (Yv(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (s1(t, a), l & 4 && -1 < Gv.indexOf(t)) {
        for (; n !== null; ) {
          var i = Va(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var r = ma(i.pendingLanes);
                  if (r !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; r; ) {
                      var m = 1 << 31 - Cl(r);
                      h.entanglements[1] |= m, r &= ~m;
                    }
                    ye(i), (Rt & 6) === 0 && (wi = il() + 500, gu(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = pa(i, 2), h !== null && xl(h, i, 2), Yi(), Cs(i, 2);
            }
          if (i = Ds(a), i === null && os(
            t,
            l,
            a,
            Ii,
            e
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        os(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function Ds(t) {
    return t = yf(t), Us(t);
  }
  var Ii = null;
  function Us(t) {
    if (Ii = null, t = ya(t), t !== null) {
      var l = d(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = g(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = S(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Ii = t, null;
  }
  function c1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ff()) {
          case Dn:
            return 2;
          case La:
            return 8;
          case va:
          case Nu:
            return 32;
          case Cu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hs = !1, ua = null, ia = null, fa = null, bu = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new Map(), ca = [], Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function s1(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        fa = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(l.pointerId);
    }
  }
  function Au(t, l, e, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, l !== null && (l = Va(l), l !== null && i1(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function Yv(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return ua = Au(
          ua,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return ia = Au(
          ia,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return fa = Au(
          fa,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return bu.set(
          i,
          Au(
            bu.get(i) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, _u.set(
          i,
          Au(
            _u.get(i) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function r1(t) {
    var l = ya(t.target);
    if (l !== null) {
      var e = d(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = g(e), l !== null) {
            t.blockedOn = l, lr(t.priority, function() {
              f1(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = S(e), l !== null) {
            t.blockedOn = l, lr(t.priority, function() {
              f1(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ki(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Ds(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        mf = a, e.target.dispatchEvent(a), mf = null;
      } else
        return l = Va(e), l !== null && i1(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function h1(t, l, e) {
    ki(t) && e.delete(l);
  }
  function Xv() {
    Hs = !1, ua !== null && ki(ua) && (ua = null), ia !== null && ki(ia) && (ia = null), fa !== null && ki(fa) && (fa = null), bu.forEach(h1), _u.forEach(h1);
  }
  function Pi(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Hs || (Hs = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Xv
    )));
  }
  var tf = null;
  function o1(t) {
    tf !== t && (tf = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        tf === t && (tf = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (Us(a || e) === null)
              continue;
            break;
          }
          var i = Va(e);
          i !== null && (t.splice(l, 3), l -= 3, vc(
            i,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Rn(t) {
    function l(m) {
      return Pi(m, t);
    }
    ua !== null && Pi(ua, t), ia !== null && Pi(ia, t), fa !== null && Pi(fa, t), bu.forEach(l), _u.forEach(l);
    for (var e = 0; e < ca.length; e++) {
      var a = ca[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ca.length && (e = ca[0], e.blockedOn === null); )
      r1(e), e.blockedOn === null && ca.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], i = e[a + 1], r = n[bl] || null;
        if (typeof i == "function")
          r || o1(e);
        else if (r) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, r = i[bl] || null)
              h = r.formAction;
            else if (Us(n) !== null) continue;
          } else h = r.action;
          typeof h == "function" ? e[a + 1] = h : (e.splice(a, 3), a -= 3), o1(e);
        }
      }
  }
  function d1() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(r) {
            return n = r;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
      };
    }
  }
  function Bs(t) {
    this._internalRoot = t;
  }
  lf.prototype.render = Bs.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var e = l.current, a = ql();
    n1(e, a, t, l, null, null);
  }, lf.prototype.unmount = Bs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      n1(t.current, 2, null, t, null, null), Yi(), l[ja] = null;
    }
  };
  function lf(t) {
    this._internalRoot = t;
  }
  lf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = tr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < ca.length && l !== 0 && l < ca[e].priority; e++) ;
      ca.splice(e, 0, t), e === 0 && r1(t);
    }
  };
  var g1 = u.version;
  if (g1 !== "19.3.0")
    throw Error(
      s(
        527,
        g1,
        "19.3.0"
      )
    );
  nt.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = _(l), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Lv = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ef = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ef.isDisabled && ef.supportsFiber)
      try {
        Mt = ef.inject(
          Lv
        ), qt = ef;
      } catch {
      }
  }
  return zu.createRoot = function(t, l) {
    if (!o(t)) throw Error(s(299));
    var e = !1, a = "", n = e0, i = a0, r = n0;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError)), l = e1(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      i,
      r,
      d1
    ), t[ja] = l.current, hs(t), new Bs(l);
  }, zu.hydrateRoot = function(t, l, e) {
    if (!o(t)) throw Error(s(299));
    var a = !1, n = "", i = e0, r = a0, h = n0, m = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError), e.formState !== void 0 && (m = e.formState)), l = e1(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      m,
      i,
      r,
      h,
      d1
    ), l.context = a1(null), e = l.current, a = ql(), a = rf(a), n = Ke(a), n.callback = null, Je(e, n, a), e = a, l.current.lanes = e, Hn(l, e), ye(l), t[ja] = l.current, hs(t), new lf(l);
  }, zu.version = "19.3.0", zu;
}
var b1;
function $v() {
  if (b1) return qs.exports;
  b1 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (u) {
        console.error(u);
      }
  }
  return f(), qs.exports = Wv(), qs.exports;
}
var Iv = $v();
function Mu(f) {
  let u = f[0], c = f[1], s = f[2];
  return Math.sqrt(u * u + c * c + s * s);
}
function Ks(f, u) {
  return f[0] = u[0], f[1] = u[1], f[2] = u[2], f;
}
function kv(f, u, c, s) {
  return f[0] = u, f[1] = c, f[2] = s, f;
}
function _1(f, u, c) {
  return f[0] = u[0] + c[0], f[1] = u[1] + c[1], f[2] = u[2] + c[2], f;
}
function A1(f, u, c) {
  return f[0] = u[0] - c[0], f[1] = u[1] - c[1], f[2] = u[2] - c[2], f;
}
function Pv(f, u, c) {
  return f[0] = u[0] * c[0], f[1] = u[1] * c[1], f[2] = u[2] * c[2], f;
}
function tm(f, u, c) {
  return f[0] = u[0] / c[0], f[1] = u[1] / c[1], f[2] = u[2] / c[2], f;
}
function Ls(f, u, c) {
  return f[0] = u[0] * c, f[1] = u[1] * c, f[2] = u[2] * c, f;
}
function lm(f, u) {
  let c = u[0] - f[0], s = u[1] - f[1], o = u[2] - f[2];
  return Math.sqrt(c * c + s * s + o * o);
}
function em(f, u) {
  let c = u[0] - f[0], s = u[1] - f[1], o = u[2] - f[2];
  return c * c + s * s + o * o;
}
function z1(f) {
  let u = f[0], c = f[1], s = f[2];
  return u * u + c * c + s * s;
}
function am(f, u) {
  return f[0] = -u[0], f[1] = -u[1], f[2] = -u[2], f;
}
function nm(f, u) {
  return f[0] = 1 / u[0], f[1] = 1 / u[1], f[2] = 1 / u[2], f;
}
function Js(f, u) {
  let c = u[0], s = u[1], o = u[2], d = c * c + s * s + o * o;
  return d > 0 && (d = 1 / Math.sqrt(d)), f[0] = u[0] * d, f[1] = u[1] * d, f[2] = u[2] * d, f;
}
function $1(f, u) {
  return f[0] * u[0] + f[1] * u[1] + f[2] * u[2];
}
function M1(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = c[0], S = c[1], v = c[2];
  return f[0] = o * v - d * S, f[1] = d * g - s * v, f[2] = s * S - o * g, f;
}
function um(f, u, c, s) {
  let o = u[0], d = u[1], g = u[2];
  return f[0] = o + s * (c[0] - o), f[1] = d + s * (c[1] - d), f[2] = g + s * (c[2] - g), f;
}
function im(f, u, c, s, o) {
  const d = Math.exp(-s * o);
  let g = u[0], S = u[1], v = u[2];
  return f[0] = c[0] + (g - c[0]) * d, f[1] = c[1] + (S - c[1]) * d, f[2] = c[2] + (v - c[2]) * d, f;
}
function fm(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = c[3] * s + c[7] * o + c[11] * d + c[15];
  return g = g || 1, f[0] = (c[0] * s + c[4] * o + c[8] * d + c[12]) / g, f[1] = (c[1] * s + c[5] * o + c[9] * d + c[13]) / g, f[2] = (c[2] * s + c[6] * o + c[10] * d + c[14]) / g, f;
}
function cm(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = c[3] * s + c[7] * o + c[11] * d + c[15];
  return g = g || 1, f[0] = (c[0] * s + c[4] * o + c[8] * d) / g, f[1] = (c[1] * s + c[5] * o + c[9] * d) / g, f[2] = (c[2] * s + c[6] * o + c[10] * d) / g, f;
}
function sm(f, u, c) {
  let s = u[0], o = u[1], d = u[2];
  return f[0] = s * c[0] + o * c[3] + d * c[6], f[1] = s * c[1] + o * c[4] + d * c[7], f[2] = s * c[2] + o * c[5] + d * c[8], f;
}
function rm(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = c[0], S = c[1], v = c[2], _ = c[3], T = S * d - v * o, y = v * s - g * d, x = g * o - S * s, C = S * x - v * y, H = v * T - g * x, w = g * y - S * T, R = _ * 2;
  return T *= R, y *= R, x *= R, C *= 2, H *= 2, w *= 2, f[0] = s + T + C, f[1] = o + y + H, f[2] = d + x + w, f;
}
const hm = /* @__PURE__ */ (function() {
  const f = [0, 0, 0], u = [0, 0, 0];
  return function(c, s) {
    Ks(f, c), Ks(u, s), Js(f, f), Js(u, u);
    let o = $1(f, u);
    return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o);
  };
})();
function om(f, u) {
  return f[0] === u[0] && f[1] === u[1] && f[2] === u[2];
}
class ue extends Array {
  constructor(u = 0, c = u, s = u) {
    return super(u, c, s), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(u) {
    this[0] = u;
  }
  set y(u) {
    this[1] = u;
  }
  set z(u) {
    this[2] = u;
  }
  set(u, c = u, s = u) {
    return u.length ? this.copy(u) : (kv(this, u, c, s), this);
  }
  copy(u) {
    return Ks(this, u), this;
  }
  add(u, c) {
    return c ? _1(this, u, c) : _1(this, this, u), this;
  }
  sub(u, c) {
    return c ? A1(this, u, c) : A1(this, this, u), this;
  }
  multiply(u) {
    return u.length ? Pv(this, this, u) : Ls(this, this, u), this;
  }
  divide(u) {
    return u.length ? tm(this, this, u) : Ls(this, this, 1 / u), this;
  }
  inverse(u = this) {
    return nm(this, u), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return Mu(this);
  }
  distance(u) {
    return u ? lm(this, u) : Mu(this);
  }
  squaredLen() {
    return z1(this);
  }
  squaredDistance(u) {
    return u ? em(this, u) : z1(this);
  }
  negate(u = this) {
    return am(this, u), this;
  }
  cross(u, c) {
    return c ? M1(this, u, c) : M1(this, this, u), this;
  }
  scale(u) {
    return Ls(this, this, u), this;
  }
  normalize() {
    return Js(this, this), this;
  }
  dot(u) {
    return $1(this, u);
  }
  equals(u) {
    return om(this, u);
  }
  applyMatrix3(u) {
    return sm(this, this, u), this;
  }
  applyMatrix4(u) {
    return fm(this, this, u), this;
  }
  scaleRotateMatrix4(u) {
    return cm(this, this, u), this;
  }
  applyQuaternion(u) {
    return rm(this, this, u), this;
  }
  angle(u) {
    return hm(this, u);
  }
  lerp(u, c) {
    return um(this, this, u, c), this;
  }
  smoothLerp(u, c, s) {
    return im(this, this, u, c, s), this;
  }
  clone() {
    return new ue(this[0], this[1], this[2]);
  }
  fromArray(u, c = 0) {
    return this[0] = u[c], this[1] = u[c + 1], this[2] = u[c + 2], this;
  }
  toArray(u = [], c = 0) {
    return u[c] = this[0], u[c + 1] = this[1], u[c + 2] = this[2], u;
  }
  transformDirection(u) {
    const c = this[0], s = this[1], o = this[2];
    return this[0] = u[0] * c + u[4] * s + u[8] * o, this[1] = u[1] * c + u[5] * s + u[9] * o, this[2] = u[2] * c + u[6] * s + u[10] * o, this.normalize();
  }
}
const x1 = /* @__PURE__ */ new ue();
let dm = 1, gm = 1, O1 = !1;
class vm {
  constructor(u, c = {}) {
    u.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = u, this.attributes = c, this.id = dm++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
    for (let s in c)
      this.addAttribute(s, c[s]);
  }
  addAttribute(u, c) {
    if (this.attributes[u] = c, c.id = gm++, c.size = c.size || 1, c.type = c.type || (c.data.constructor === Float32Array ? this.gl.FLOAT : c.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), c.target = u === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, c.normalized = c.normalized || !1, c.stride = c.stride || 0, c.offset = c.offset || 0, c.count = c.count || (c.stride ? c.data.byteLength / c.stride : c.data.length / c.size), c.divisor = c.instanced || 0, c.needsUpdate = !1, c.usage = c.usage || this.gl.STATIC_DRAW, c.buffer || this.updateAttribute(c), c.divisor) {
      if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== c.count * c.divisor)
        return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, c.count * c.divisor);
      this.instancedCount = c.count * c.divisor;
    } else u === "index" ? this.drawRange.count = c.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, c.count));
  }
  updateAttribute(u) {
    const c = !u.buffer;
    c && (u.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== u.buffer && (this.gl.bindBuffer(u.target, u.buffer), this.glState.boundBuffer = u.buffer), c ? this.gl.bufferData(u.target, u.data, u.usage) : this.gl.bufferSubData(u.target, 0, u.data), u.needsUpdate = !1;
  }
  setIndex(u) {
    this.addAttribute("index", u);
  }
  setDrawRange(u, c) {
    this.drawRange.start = u, this.drawRange.count = c;
  }
  setInstancedCount(u) {
    this.instancedCount = u;
  }
  createVAO(u) {
    this.VAOs[u.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[u.attributeOrder]), this.bindAttributes(u);
  }
  bindAttributes(u) {
    u.attributeLocations.forEach((c, { name: s, type: o }) => {
      if (!this.attributes[s]) {
        console.warn(`active attribute ${s} not being supplied`);
        return;
      }
      const d = this.attributes[s];
      this.gl.bindBuffer(d.target, d.buffer), this.glState.boundBuffer = d.buffer;
      let g = 1;
      o === 35674 && (g = 2), o === 35675 && (g = 3), o === 35676 && (g = 4);
      const S = d.size / g, v = g === 1 ? 0 : g * g * 4, _ = g === 1 ? 0 : g * 4;
      for (let T = 0; T < g; T++)
        this.gl.vertexAttribPointer(c + T, S, d.type, d.normalized, d.stride + v, d.offset + T * _), this.gl.enableVertexAttribArray(c + T), this.gl.renderer.vertexAttribDivisor(c + T, d.divisor);
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program: u, mode: c = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${u.attributeOrder}` && (this.VAOs[u.attributeOrder] || this.createVAO(u), this.gl.renderer.bindVertexArray(this.VAOs[u.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${u.attributeOrder}`), u.attributeLocations.forEach((o, { name: d }) => {
      const g = this.attributes[d];
      g.needsUpdate && this.updateAttribute(g);
    });
    let s = 2;
    this.attributes.index?.type === this.gl.UNSIGNED_INT && (s = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
      c,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * s,
      this.instancedCount
    ) : this.gl.renderer.drawArraysInstanced(c, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(
      c,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * s
    ) : this.gl.drawArrays(c, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const u = this.attributes.position;
    if (u.data) return u;
    if (!O1)
      return console.warn("No position buffer data found to compute bounds"), O1 = !0;
  }
  computeBoundingBox(u) {
    u || (u = this.getPosition());
    const c = u.data, s = u.size;
    this.bounds || (this.bounds = {
      min: new ue(),
      max: new ue(),
      center: new ue(),
      scale: new ue(),
      radius: 1 / 0
    });
    const o = this.bounds.min, d = this.bounds.max, g = this.bounds.center, S = this.bounds.scale;
    o.set(1 / 0), d.set(-1 / 0);
    for (let v = 0, _ = c.length; v < _; v += s) {
      const T = c[v], y = c[v + 1], x = c[v + 2];
      o.x = Math.min(T, o.x), o.y = Math.min(y, o.y), o.z = Math.min(x, o.z), d.x = Math.max(T, d.x), d.y = Math.max(y, d.y), d.z = Math.max(x, d.z);
    }
    S.sub(d, o), g.add(o, d).divide(2);
  }
  computeBoundingSphere(u) {
    u || (u = this.getPosition());
    const c = u.data, s = u.size;
    this.bounds || this.computeBoundingBox(u);
    let o = 0;
    for (let d = 0, g = c.length; d < g; d += s)
      x1.fromArray(c, d), o = Math.max(o, this.bounds.center.squaredDistance(x1));
    this.bounds.radius = Math.sqrt(o);
  }
  remove() {
    for (let u in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[u]), delete this.VAOs[u];
    for (let u in this.attributes)
      this.gl.deleteBuffer(this.attributes[u].buffer), delete this.attributes[u];
  }
}
let mm = 1;
const N1 = {};
class ym {
  constructor(u, {
    vertex: c,
    fragment: s,
    uniforms: o = {},
    transparent: d = !1,
    cullFace: g = u.BACK,
    frontFace: S = u.CCW,
    depthTest: v = !0,
    depthWrite: _ = !0,
    depthFunc: T = u.LEQUAL
  } = {}) {
    u.canvas || console.error("gl not passed as first argument to Program"), this.gl = u, this.uniforms = o, this.id = mm++, c || console.warn("vertex shader not supplied"), s || console.warn("fragment shader not supplied"), this.transparent = d, this.cullFace = g, this.frontFace = S, this.depthTest = v, this.depthWrite = _, this.depthFunc = T, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = u.createShader(u.VERTEX_SHADER), this.fragmentShader = u.createShader(u.FRAGMENT_SHADER), this.program = u.createProgram(), u.attachShader(this.program, this.vertexShader), u.attachShader(this.program, this.fragmentShader), this.setShaders({ vertex: c, fragment: s });
  }
  setShaders({ vertex: u, fragment: c }) {
    if (u && (this.gl.shaderSource(this.vertexShader, u), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${C1(u)}`)), c && (this.gl.shaderSource(this.fragmentShader, c), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${C1(c)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
      return console.warn(this.gl.getProgramInfoLog(this.program));
    this.uniformLocations = /* @__PURE__ */ new Map();
    let s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let g = 0; g < s; g++) {
      let S = this.gl.getActiveUniform(this.program, g);
      this.uniformLocations.set(S, this.gl.getUniformLocation(this.program, S.name));
      const v = S.name.match(/(\w+)/g);
      S.uniformName = v[0], S.nameComponents = v.slice(1);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const o = [], d = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let g = 0; g < d; g++) {
      const S = this.gl.getActiveAttrib(this.program, g), v = this.gl.getAttribLocation(this.program, S.name);
      v !== -1 && (o[v] = S.name, this.attributeLocations.set(S, v));
    }
    this.attributeOrder = o.join("");
  }
  setBlendFunc(u, c, s, o) {
    this.blendFunc.src = u, this.blendFunc.dst = c, this.blendFunc.srcAlpha = s, this.blendFunc.dstAlpha = o, u && (this.transparent = !0);
  }
  setBlendEquation(u, c) {
    this.blendEquation.modeRGB = u, this.blendEquation.modeAlpha = c;
  }
  setStencilFunc(u, c, s) {
    this.stencilRef = c, this.stencilFunc.func = u, this.stencilFunc.ref = c, this.stencilFunc.mask = s;
  }
  setStencilOp(u, c, s) {
    this.stencilOp.stencilFail = u, this.stencilOp.depthFail = c, this.stencilOp.depthPass = s;
  }
  applyState() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
  }
  use({ flipFaces: u = !1 } = {}) {
    let c = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((o, d) => {
      let g = this.uniforms[d.uniformName];
      for (const S of d.nameComponents) {
        if (!g) break;
        if (S in g)
          g = g[S];
        else {
          if (Array.isArray(g.value))
            break;
          g = void 0;
          break;
        }
      }
      if (!g)
        return R1(`Active uniform ${d.name} has not been supplied`);
      if (g && g.value === void 0)
        return R1(`${d.name} uniform is missing a value parameter`);
      if (g.value.texture)
        return c = c + 1, g.value.update(c), js(this.gl, d.type, o, c);
      if (g.value.length && g.value[0].texture) {
        const S = [];
        return g.value.forEach((v) => {
          c = c + 1, v.update(c), S.push(c);
        }), js(this.gl, d.type, o, S);
      }
      js(this.gl, d.type, o, g.value);
    }), this.applyState(), u && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function js(f, u, c, s) {
  s = s.length ? Sm(s) : s;
  const o = f.renderer.state.uniformLocations.get(c);
  if (s.length)
    if (o === void 0 || o.length !== s.length)
      f.renderer.state.uniformLocations.set(c, s.slice(0));
    else {
      if (Em(o, s)) return;
      o.set ? o.set(s) : Tm(o, s), f.renderer.state.uniformLocations.set(c, o);
    }
  else {
    if (o === s) return;
    f.renderer.state.uniformLocations.set(c, s);
  }
  switch (u) {
    case 5126:
      return s.length ? f.uniform1fv(c, s) : f.uniform1f(c, s);
    // FLOAT
    case 35664:
      return f.uniform2fv(c, s);
    // FLOAT_VEC2
    case 35665:
      return f.uniform3fv(c, s);
    // FLOAT_VEC3
    case 35666:
      return f.uniform4fv(c, s);
    // FLOAT_VEC4
    case 35670:
    // BOOL
    case 5124:
    // INT
    case 35678:
    // SAMPLER_2D
    case 36306:
    // U_SAMPLER_2D
    case 35680:
    // SAMPLER_CUBE
    case 36289:
      return s.length ? f.uniform1iv(c, s) : f.uniform1i(c, s);
    // SAMPLER_CUBE
    case 35671:
    // BOOL_VEC2
    case 35667:
      return f.uniform2iv(c, s);
    // INT_VEC2
    case 35672:
    // BOOL_VEC3
    case 35668:
      return f.uniform3iv(c, s);
    // INT_VEC3
    case 35673:
    // BOOL_VEC4
    case 35669:
      return f.uniform4iv(c, s);
    // INT_VEC4
    case 35674:
      return f.uniformMatrix2fv(c, !1, s);
    // FLOAT_MAT2
    case 35675:
      return f.uniformMatrix3fv(c, !1, s);
    // FLOAT_MAT3
    case 35676:
      return f.uniformMatrix4fv(c, !1, s);
  }
}
function C1(f) {
  let u = f.split(`
`);
  for (let c = 0; c < u.length; c++)
    u[c] = c + 1 + ": " + u[c];
  return u.join(`
`);
}
function Sm(f) {
  const u = f.length, c = f[0].length;
  if (c === void 0) return f;
  const s = u * c;
  let o = N1[s];
  o || (N1[s] = o = new Float32Array(s));
  for (let d = 0; d < u; d++) o.set(f[d], d * c);
  return o;
}
function Em(f, u) {
  if (f.length !== u.length) return !1;
  for (let c = 0, s = f.length; c < s; c++)
    if (f[c] !== u[c]) return !1;
  return !0;
}
function Tm(f, u) {
  for (let c = 0, s = f.length; c < s; c++)
    f[c] = u[c];
}
let Vs = 0;
function R1(f) {
  Vs > 100 || (console.warn(f), Vs++, Vs > 100 && console.warn("More than 100 program warnings - stopping logs."));
}
const Qs = /* @__PURE__ */ new ue();
let pm = 1;
class bm {
  constructor({
    canvas: u = document.createElement("canvas"),
    width: c = 300,
    height: s = 150,
    dpr: o = 1,
    alpha: d = !1,
    depth: g = !0,
    stencil: S = !1,
    antialias: v = !1,
    premultipliedAlpha: _ = !1,
    preserveDrawingBuffer: T = !1,
    powerPreference: y = "default",
    autoClear: x = !0,
    webgl: C = 2
  } = {}) {
    const H = { alpha: d, depth: g, stencil: S, antialias: v, premultipliedAlpha: _, preserveDrawingBuffer: T, powerPreference: y };
    this.dpr = o, this.alpha = d, this.color = !0, this.depth = g, this.stencil = S, this.premultipliedAlpha = _, this.autoClear = x, this.id = pm++, C === 2 && (this.gl = u.getContext("webgl2", H)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = u.getContext("webgl", H)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(c, s), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(u, c) {
    this.width = u, this.height = c, this.gl.canvas.width = u * this.dpr, this.gl.canvas.height = c * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
      width: u + "px",
      height: c + "px"
    });
  }
  setViewport(u, c, s = 0, o = 0) {
    this.state.viewport.width === u && this.state.viewport.height === c || (this.state.viewport.width = u, this.state.viewport.height = c, this.state.viewport.x = s, this.state.viewport.y = o, this.gl.viewport(s, o, u, c));
  }
  setScissor(u, c, s = 0, o = 0) {
    this.gl.scissor(s, o, u, c);
  }
  enable(u) {
    this.state[u] !== !0 && (this.gl.enable(u), this.state[u] = !0);
  }
  disable(u) {
    this.state[u] !== !1 && (this.gl.disable(u), this.state[u] = !1);
  }
  setBlendFunc(u, c, s, o) {
    this.state.blendFunc.src === u && this.state.blendFunc.dst === c && this.state.blendFunc.srcAlpha === s && this.state.blendFunc.dstAlpha === o || (this.state.blendFunc.src = u, this.state.blendFunc.dst = c, this.state.blendFunc.srcAlpha = s, this.state.blendFunc.dstAlpha = o, s !== void 0 ? this.gl.blendFuncSeparate(u, c, s, o) : this.gl.blendFunc(u, c));
  }
  setBlendEquation(u, c) {
    u = u || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === u && this.state.blendEquation.modeAlpha === c) && (this.state.blendEquation.modeRGB = u, this.state.blendEquation.modeAlpha = c, c !== void 0 ? this.gl.blendEquationSeparate(u, c) : this.gl.blendEquation(u));
  }
  setCullFace(u) {
    this.state.cullFace !== u && (this.state.cullFace = u, this.gl.cullFace(u));
  }
  setFrontFace(u) {
    this.state.frontFace !== u && (this.state.frontFace = u, this.gl.frontFace(u));
  }
  setDepthMask(u) {
    this.state.depthMask !== u && (this.state.depthMask = u, this.gl.depthMask(u));
  }
  setDepthFunc(u) {
    this.state.depthFunc !== u && (this.state.depthFunc = u, this.gl.depthFunc(u));
  }
  setStencilMask(u) {
    this.state.stencilMask !== u && (this.state.stencilMask = u, this.gl.stencilMask(u));
  }
  setStencilFunc(u, c, s) {
    this.state.stencilFunc === u && this.state.stencilRef === c && this.state.stencilFuncMask === s || (this.state.stencilFunc = u || this.gl.ALWAYS, this.state.stencilRef = c || 0, this.state.stencilFuncMask = s || 0, this.gl.stencilFunc(u || this.gl.ALWAYS, c || 0, s || 0));
  }
  setStencilOp(u, c, s) {
    this.state.stencilFail === u && this.state.stencilDepthFail === c && this.state.stencilDepthPass === s || (this.state.stencilFail = u, this.state.stencilDepthFail = c, this.state.stencilDepthPass = s, this.gl.stencilOp(u, c, s));
  }
  activeTexture(u) {
    this.state.activeTextureUnit !== u && (this.state.activeTextureUnit = u, this.gl.activeTexture(this.gl.TEXTURE0 + u));
  }
  bindFramebuffer({ target: u = this.gl.FRAMEBUFFER, buffer: c = null } = {}) {
    this.state.framebuffer !== c && (this.state.framebuffer = c, this.gl.bindFramebuffer(u, c));
  }
  getExtension(u, c, s) {
    return c && this.gl[c] ? this.gl[c].bind(this.gl) : (this.extensions[u] || (this.extensions[u] = this.gl.getExtension(u)), c ? this.extensions[u] ? this.extensions[u][s].bind(this.extensions[u]) : null : this.extensions[u]);
  }
  sortOpaque(u, c) {
    return u.renderOrder !== c.renderOrder ? u.renderOrder - c.renderOrder : u.program.id !== c.program.id ? u.program.id - c.program.id : u.zDepth !== c.zDepth ? u.zDepth - c.zDepth : c.id - u.id;
  }
  sortTransparent(u, c) {
    return u.renderOrder !== c.renderOrder ? u.renderOrder - c.renderOrder : u.zDepth !== c.zDepth ? c.zDepth - u.zDepth : c.id - u.id;
  }
  sortUI(u, c) {
    return u.renderOrder !== c.renderOrder ? u.renderOrder - c.renderOrder : u.program.id !== c.program.id ? u.program.id - c.program.id : c.id - u.id;
  }
  getRenderList({ scene: u, camera: c, frustumCull: s, sort: o }) {
    let d = [];
    if (c && s && c.updateFrustum(), u.traverse((g) => {
      if (!g.visible) return !0;
      g.draw && (s && g.frustumCulled && c && !c.frustumIntersectsMesh(g) || d.push(g));
    }), o) {
      const g = [], S = [], v = [];
      d.forEach((_) => {
        _.program.transparent ? _.program.depthTest ? S.push(_) : v.push(_) : g.push(_), _.zDepth = 0, !(_.renderOrder !== 0 || !_.program.depthTest || !c) && (_.worldMatrix.getTranslation(Qs), Qs.applyMatrix4(c.projectionViewMatrix), _.zDepth = Qs.z);
      }), g.sort(this.sortOpaque), S.sort(this.sortTransparent), v.sort(this.sortUI), d = g.concat(S, v);
    }
    return d;
  }
  render({ scene: u, camera: c, target: s = null, update: o = !0, sort: d = !0, frustumCull: g = !0, clear: S }) {
    s === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(s), this.setViewport(s.width, s.height)), (S || this.autoClear && S !== !1) && (this.depth && (!s || s.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !s || s.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear(
      (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
    )), o && u.updateMatrixWorld(), c && c.updateMatrixWorld(), this.getRenderList({ scene: u, camera: c, frustumCull: g, sort: d }).forEach((_) => {
      _.draw({ camera: c });
    });
  }
}
function _m(f, u) {
  return f[0] = u[0], f[1] = u[1], f[2] = u[2], f[3] = u[3], f;
}
function Am(f, u, c, s, o) {
  return f[0] = u, f[1] = c, f[2] = s, f[3] = o, f;
}
function zm(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = c * c + s * s + o * o + d * d;
  return g > 0 && (g = 1 / Math.sqrt(g)), f[0] = c * g, f[1] = s * g, f[2] = o * g, f[3] = d * g, f;
}
function Mm(f, u) {
  return f[0] * u[0] + f[1] * u[1] + f[2] * u[2] + f[3] * u[3];
}
function xm(f) {
  return f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 1, f;
}
function Om(f, u, c) {
  c = c * 0.5;
  let s = Math.sin(c);
  return f[0] = s * u[0], f[1] = s * u[1], f[2] = s * u[2], f[3] = Math.cos(c), f;
}
function D1(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = u[3], S = c[0], v = c[1], _ = c[2], T = c[3];
  return f[0] = s * T + g * S + o * _ - d * v, f[1] = o * T + g * v + d * S - s * _, f[2] = d * T + g * _ + s * v - o * S, f[3] = g * T - s * S - o * v - d * _, f;
}
function Nm(f, u, c) {
  c *= 0.5;
  let s = u[0], o = u[1], d = u[2], g = u[3], S = Math.sin(c), v = Math.cos(c);
  return f[0] = s * v + g * S, f[1] = o * v + d * S, f[2] = d * v - o * S, f[3] = g * v - s * S, f;
}
function Cm(f, u, c) {
  c *= 0.5;
  let s = u[0], o = u[1], d = u[2], g = u[3], S = Math.sin(c), v = Math.cos(c);
  return f[0] = s * v - d * S, f[1] = o * v + g * S, f[2] = d * v + s * S, f[3] = g * v - o * S, f;
}
function Rm(f, u, c) {
  c *= 0.5;
  let s = u[0], o = u[1], d = u[2], g = u[3], S = Math.sin(c), v = Math.cos(c);
  return f[0] = s * v + o * S, f[1] = o * v - s * S, f[2] = d * v + g * S, f[3] = g * v - d * S, f;
}
function Dm(f, u, c, s) {
  let o = u[0], d = u[1], g = u[2], S = u[3], v = c[0], _ = c[1], T = c[2], y = c[3], x, C, H, w, R;
  return C = o * v + d * _ + g * T + S * y, C < 0 && (C = -C, v = -v, _ = -_, T = -T, y = -y), 1 - C > 1e-6 ? (x = Math.acos(C), H = Math.sin(x), w = Math.sin((1 - s) * x) / H, R = Math.sin(s * x) / H) : (w = 1 - s, R = s), f[0] = w * o + R * v, f[1] = w * d + R * _, f[2] = w * g + R * T, f[3] = w * S + R * y, f;
}
function Um(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = c * c + s * s + o * o + d * d, S = g ? 1 / g : 0;
  return f[0] = -c * S, f[1] = -s * S, f[2] = -o * S, f[3] = d * S, f;
}
function Hm(f, u) {
  return f[0] = -u[0], f[1] = -u[1], f[2] = -u[2], f[3] = u[3], f;
}
function Bm(f, u) {
  let c = u[0] + u[4] + u[8], s;
  if (c > 0)
    s = Math.sqrt(c + 1), f[3] = 0.5 * s, s = 0.5 / s, f[0] = (u[5] - u[7]) * s, f[1] = (u[6] - u[2]) * s, f[2] = (u[1] - u[3]) * s;
  else {
    let o = 0;
    u[4] > u[0] && (o = 1), u[8] > u[o * 3 + o] && (o = 2);
    let d = (o + 1) % 3, g = (o + 2) % 3;
    s = Math.sqrt(u[o * 3 + o] - u[d * 3 + d] - u[g * 3 + g] + 1), f[o] = 0.5 * s, s = 0.5 / s, f[3] = (u[d * 3 + g] - u[g * 3 + d]) * s, f[d] = (u[d * 3 + o] + u[o * 3 + d]) * s, f[g] = (u[g * 3 + o] + u[o * 3 + g]) * s;
  }
  return f;
}
function wm(f, u, c = "YXZ") {
  let s = Math.sin(u[0] * 0.5), o = Math.cos(u[0] * 0.5), d = Math.sin(u[1] * 0.5), g = Math.cos(u[1] * 0.5), S = Math.sin(u[2] * 0.5), v = Math.cos(u[2] * 0.5);
  return c === "XYZ" ? (f[0] = s * g * v + o * d * S, f[1] = o * d * v - s * g * S, f[2] = o * g * S + s * d * v, f[3] = o * g * v - s * d * S) : c === "YXZ" ? (f[0] = s * g * v + o * d * S, f[1] = o * d * v - s * g * S, f[2] = o * g * S - s * d * v, f[3] = o * g * v + s * d * S) : c === "ZXY" ? (f[0] = s * g * v - o * d * S, f[1] = o * d * v + s * g * S, f[2] = o * g * S + s * d * v, f[3] = o * g * v - s * d * S) : c === "ZYX" ? (f[0] = s * g * v - o * d * S, f[1] = o * d * v + s * g * S, f[2] = o * g * S - s * d * v, f[3] = o * g * v + s * d * S) : c === "YZX" ? (f[0] = s * g * v + o * d * S, f[1] = o * d * v + s * g * S, f[2] = o * g * S - s * d * v, f[3] = o * g * v - s * d * S) : c === "XZY" && (f[0] = s * g * v - o * d * S, f[1] = o * d * v - s * g * S, f[2] = o * g * S + s * d * v, f[3] = o * g * v + s * d * S), f;
}
const qm = _m, Gm = Am, Ym = Mm, Xm = zm;
class Lm extends Array {
  constructor(u = 0, c = 0, s = 0, o = 1) {
    super(u, c, s, o), this.onChange = () => {
    }, this._target = this;
    const d = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(g, S) {
        const v = Reflect.set(...arguments);
        return v && d.includes(S) && g.onChange(), v;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(u) {
    this._target[0] = u, this.onChange();
  }
  set y(u) {
    this._target[1] = u, this.onChange();
  }
  set z(u) {
    this._target[2] = u, this.onChange();
  }
  set w(u) {
    this._target[3] = u, this.onChange();
  }
  identity() {
    return xm(this._target), this.onChange(), this;
  }
  set(u, c, s, o) {
    return u.length ? this.copy(u) : (Gm(this._target, u, c, s, o), this.onChange(), this);
  }
  rotateX(u) {
    return Nm(this._target, this._target, u), this.onChange(), this;
  }
  rotateY(u) {
    return Cm(this._target, this._target, u), this.onChange(), this;
  }
  rotateZ(u) {
    return Rm(this._target, this._target, u), this.onChange(), this;
  }
  inverse(u = this._target) {
    return Um(this._target, u), this.onChange(), this;
  }
  conjugate(u = this._target) {
    return Hm(this._target, u), this.onChange(), this;
  }
  copy(u) {
    return qm(this._target, u), this.onChange(), this;
  }
  normalize(u = this._target) {
    return Xm(this._target, u), this.onChange(), this;
  }
  multiply(u, c) {
    return c ? D1(this._target, u, c) : D1(this._target, this._target, u), this.onChange(), this;
  }
  dot(u) {
    return Ym(this._target, u);
  }
  fromMatrix3(u) {
    return Bm(this._target, u), this.onChange(), this;
  }
  fromEuler(u, c) {
    return wm(this._target, u, u.order), c || this.onChange(), this;
  }
  fromAxisAngle(u, c) {
    return Om(this._target, u, c), this.onChange(), this;
  }
  slerp(u, c) {
    return Dm(this._target, this._target, u, c), this.onChange(), this;
  }
  fromArray(u, c = 0) {
    return this._target[0] = u[c], this._target[1] = u[c + 1], this._target[2] = u[c + 2], this._target[3] = u[c + 3], this.onChange(), this;
  }
  toArray(u = [], c = 0) {
    return u[c] = this[0], u[c + 1] = this[1], u[c + 2] = this[2], u[c + 3] = this[3], u;
  }
}
const jm = 1e-6;
function Vm(f, u) {
  return f[0] = u[0], f[1] = u[1], f[2] = u[2], f[3] = u[3], f[4] = u[4], f[5] = u[5], f[6] = u[6], f[7] = u[7], f[8] = u[8], f[9] = u[9], f[10] = u[10], f[11] = u[11], f[12] = u[12], f[13] = u[13], f[14] = u[14], f[15] = u[15], f;
}
function Qm(f, u, c, s, o, d, g, S, v, _, T, y, x, C, H, w, R) {
  return f[0] = u, f[1] = c, f[2] = s, f[3] = o, f[4] = d, f[5] = g, f[6] = S, f[7] = v, f[8] = _, f[9] = T, f[10] = y, f[11] = x, f[12] = C, f[13] = H, f[14] = w, f[15] = R, f;
}
function Zm(f) {
  return f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1, f;
}
function Km(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = u[4], S = u[5], v = u[6], _ = u[7], T = u[8], y = u[9], x = u[10], C = u[11], H = u[12], w = u[13], R = u[14], q = u[15], lt = c * S - s * g, $ = c * v - o * g, L = c * _ - d * g, k = s * v - o * S, I = s * _ - d * S, K = o * _ - d * v, V = T * w - y * H, ct = T * R - x * H, J = T * q - C * H, rt = y * R - x * w, vt = y * q - C * w, ot = x * q - C * R, et = lt * ot - $ * vt + L * rt + k * J - I * ct + K * V;
  return et ? (et = 1 / et, f[0] = (S * ot - v * vt + _ * rt) * et, f[1] = (o * vt - s * ot - d * rt) * et, f[2] = (w * K - R * I + q * k) * et, f[3] = (x * I - y * K - C * k) * et, f[4] = (v * J - g * ot - _ * ct) * et, f[5] = (c * ot - o * J + d * ct) * et, f[6] = (R * L - H * K - q * $) * et, f[7] = (T * K - x * L + C * $) * et, f[8] = (g * vt - S * J + _ * V) * et, f[9] = (s * J - c * vt - d * V) * et, f[10] = (H * I - w * L + q * lt) * et, f[11] = (y * L - T * I - C * lt) * et, f[12] = (S * ct - g * rt - v * V) * et, f[13] = (c * rt - s * ct + o * V) * et, f[14] = (w * $ - H * k - R * lt) * et, f[15] = (T * k - y * $ + x * lt) * et, f) : null;
}
function I1(f) {
  let u = f[0], c = f[1], s = f[2], o = f[3], d = f[4], g = f[5], S = f[6], v = f[7], _ = f[8], T = f[9], y = f[10], x = f[11], C = f[12], H = f[13], w = f[14], R = f[15], q = u * g - c * d, lt = u * S - s * d, $ = u * v - o * d, L = c * S - s * g, k = c * v - o * g, I = s * v - o * S, K = _ * H - T * C, V = _ * w - y * C, ct = _ * R - x * C, J = T * w - y * H, rt = T * R - x * H, vt = y * R - x * w;
  return q * vt - lt * rt + $ * J + L * ct - k * V + I * K;
}
function U1(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = u[3], S = u[4], v = u[5], _ = u[6], T = u[7], y = u[8], x = u[9], C = u[10], H = u[11], w = u[12], R = u[13], q = u[14], lt = u[15], $ = c[0], L = c[1], k = c[2], I = c[3];
  return f[0] = $ * s + L * S + k * y + I * w, f[1] = $ * o + L * v + k * x + I * R, f[2] = $ * d + L * _ + k * C + I * q, f[3] = $ * g + L * T + k * H + I * lt, $ = c[4], L = c[5], k = c[6], I = c[7], f[4] = $ * s + L * S + k * y + I * w, f[5] = $ * o + L * v + k * x + I * R, f[6] = $ * d + L * _ + k * C + I * q, f[7] = $ * g + L * T + k * H + I * lt, $ = c[8], L = c[9], k = c[10], I = c[11], f[8] = $ * s + L * S + k * y + I * w, f[9] = $ * o + L * v + k * x + I * R, f[10] = $ * d + L * _ + k * C + I * q, f[11] = $ * g + L * T + k * H + I * lt, $ = c[12], L = c[13], k = c[14], I = c[15], f[12] = $ * s + L * S + k * y + I * w, f[13] = $ * o + L * v + k * x + I * R, f[14] = $ * d + L * _ + k * C + I * q, f[15] = $ * g + L * T + k * H + I * lt, f;
}
function Jm(f, u, c) {
  let s = c[0], o = c[1], d = c[2], g, S, v, _, T, y, x, C, H, w, R, q;
  return u === f ? (f[12] = u[0] * s + u[4] * o + u[8] * d + u[12], f[13] = u[1] * s + u[5] * o + u[9] * d + u[13], f[14] = u[2] * s + u[6] * o + u[10] * d + u[14], f[15] = u[3] * s + u[7] * o + u[11] * d + u[15]) : (g = u[0], S = u[1], v = u[2], _ = u[3], T = u[4], y = u[5], x = u[6], C = u[7], H = u[8], w = u[9], R = u[10], q = u[11], f[0] = g, f[1] = S, f[2] = v, f[3] = _, f[4] = T, f[5] = y, f[6] = x, f[7] = C, f[8] = H, f[9] = w, f[10] = R, f[11] = q, f[12] = g * s + T * o + H * d + u[12], f[13] = S * s + y * o + w * d + u[13], f[14] = v * s + x * o + R * d + u[14], f[15] = _ * s + C * o + q * d + u[15]), f;
}
function Fm(f, u, c) {
  let s = c[0], o = c[1], d = c[2];
  return f[0] = u[0] * s, f[1] = u[1] * s, f[2] = u[2] * s, f[3] = u[3] * s, f[4] = u[4] * o, f[5] = u[5] * o, f[6] = u[6] * o, f[7] = u[7] * o, f[8] = u[8] * d, f[9] = u[9] * d, f[10] = u[10] * d, f[11] = u[11] * d, f[12] = u[12], f[13] = u[13], f[14] = u[14], f[15] = u[15], f;
}
function Wm(f, u, c, s) {
  let o = s[0], d = s[1], g = s[2], S = Math.hypot(o, d, g), v, _, T, y, x, C, H, w, R, q, lt, $, L, k, I, K, V, ct, J, rt, vt, ot, et, zt;
  return Math.abs(S) < jm ? null : (S = 1 / S, o *= S, d *= S, g *= S, v = Math.sin(c), _ = Math.cos(c), T = 1 - _, y = u[0], x = u[1], C = u[2], H = u[3], w = u[4], R = u[5], q = u[6], lt = u[7], $ = u[8], L = u[9], k = u[10], I = u[11], K = o * o * T + _, V = d * o * T + g * v, ct = g * o * T - d * v, J = o * d * T - g * v, rt = d * d * T + _, vt = g * d * T + o * v, ot = o * g * T + d * v, et = d * g * T - o * v, zt = g * g * T + _, f[0] = y * K + w * V + $ * ct, f[1] = x * K + R * V + L * ct, f[2] = C * K + q * V + k * ct, f[3] = H * K + lt * V + I * ct, f[4] = y * J + w * rt + $ * vt, f[5] = x * J + R * rt + L * vt, f[6] = C * J + q * rt + k * vt, f[7] = H * J + lt * rt + I * vt, f[8] = y * ot + w * et + $ * zt, f[9] = x * ot + R * et + L * zt, f[10] = C * ot + q * et + k * zt, f[11] = H * ot + lt * et + I * zt, u !== f && (f[12] = u[12], f[13] = u[13], f[14] = u[14], f[15] = u[15]), f);
}
function $m(f, u) {
  return f[0] = u[12], f[1] = u[13], f[2] = u[14], f;
}
function k1(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[4], g = u[5], S = u[6], v = u[8], _ = u[9], T = u[10];
  return f[0] = Math.hypot(c, s, o), f[1] = Math.hypot(d, g, S), f[2] = Math.hypot(v, _, T), f;
}
function Im(f) {
  let u = f[0], c = f[1], s = f[2], o = f[4], d = f[5], g = f[6], S = f[8], v = f[9], _ = f[10];
  const T = u * u + c * c + s * s, y = o * o + d * d + g * g, x = S * S + v * v + _ * _;
  return Math.sqrt(Math.max(T, y, x));
}
const P1 = /* @__PURE__ */ (function() {
  const f = [1, 1, 1];
  return function(u, c) {
    let s = f;
    k1(s, c);
    let o = 1 / s[0], d = 1 / s[1], g = 1 / s[2], S = c[0] * o, v = c[1] * d, _ = c[2] * g, T = c[4] * o, y = c[5] * d, x = c[6] * g, C = c[8] * o, H = c[9] * d, w = c[10] * g, R = S + y + w, q = 0;
    return R > 0 ? (q = Math.sqrt(R + 1) * 2, u[3] = 0.25 * q, u[0] = (x - H) / q, u[1] = (C - _) / q, u[2] = (v - T) / q) : S > y && S > w ? (q = Math.sqrt(1 + S - y - w) * 2, u[3] = (x - H) / q, u[0] = 0.25 * q, u[1] = (v + T) / q, u[2] = (C + _) / q) : y > w ? (q = Math.sqrt(1 + y - S - w) * 2, u[3] = (C - _) / q, u[0] = (v + T) / q, u[1] = 0.25 * q, u[2] = (x + H) / q) : (q = Math.sqrt(1 + w - S - y) * 2, u[3] = (v - T) / q, u[0] = (C + _) / q, u[1] = (x + H) / q, u[2] = 0.25 * q), u;
  };
})();
function km(f, u, c, s) {
  let o = Mu([f[0], f[1], f[2]]);
  const d = Mu([f[4], f[5], f[6]]), g = Mu([f[8], f[9], f[10]]);
  I1(f) < 0 && (o = -o), c[0] = f[12], c[1] = f[13], c[2] = f[14];
  const v = f.slice(), _ = 1 / o, T = 1 / d, y = 1 / g;
  v[0] *= _, v[1] *= _, v[2] *= _, v[4] *= T, v[5] *= T, v[6] *= T, v[8] *= y, v[9] *= y, v[10] *= y, P1(u, v), s[0] = o, s[1] = d, s[2] = g;
}
function Pm(f, u, c, s) {
  const o = f, d = u[0], g = u[1], S = u[2], v = u[3], _ = d + d, T = g + g, y = S + S, x = d * _, C = d * T, H = d * y, w = g * T, R = g * y, q = S * y, lt = v * _, $ = v * T, L = v * y, k = s[0], I = s[1], K = s[2];
  return o[0] = (1 - (w + q)) * k, o[1] = (C + L) * k, o[2] = (H - $) * k, o[3] = 0, o[4] = (C - L) * I, o[5] = (1 - (x + q)) * I, o[6] = (R + lt) * I, o[7] = 0, o[8] = (H + $) * K, o[9] = (R - lt) * K, o[10] = (1 - (x + w)) * K, o[11] = 0, o[12] = c[0], o[13] = c[1], o[14] = c[2], o[15] = 1, o;
}
function ty(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = c + c, S = s + s, v = o + o, _ = c * g, T = s * g, y = s * S, x = o * g, C = o * S, H = o * v, w = d * g, R = d * S, q = d * v;
  return f[0] = 1 - y - H, f[1] = T + q, f[2] = x - R, f[3] = 0, f[4] = T - q, f[5] = 1 - _ - H, f[6] = C + w, f[7] = 0, f[8] = x + R, f[9] = C - w, f[10] = 1 - _ - y, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1, f;
}
function ly(f, u, c, s, o) {
  let d = 1 / Math.tan(u / 2), g = 1 / (s - o);
  return f[0] = d / c, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = d, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = (o + s) * g, f[11] = -1, f[12] = 0, f[13] = 0, f[14] = 2 * o * s * g, f[15] = 0, f;
}
function ey(f, u, c, s, o, d, g) {
  let S = 1 / (u - c), v = 1 / (s - o), _ = 1 / (d - g);
  return f[0] = -2 * S, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = -2 * v, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 2 * _, f[11] = 0, f[12] = (u + c) * S, f[13] = (o + s) * v, f[14] = (g + d) * _, f[15] = 1, f;
}
function ay(f, u, c, s) {
  let o = u[0], d = u[1], g = u[2], S = s[0], v = s[1], _ = s[2], T = o - c[0], y = d - c[1], x = g - c[2], C = T * T + y * y + x * x;
  C === 0 ? x = 1 : (C = 1 / Math.sqrt(C), T *= C, y *= C, x *= C);
  let H = v * x - _ * y, w = _ * T - S * x, R = S * y - v * T;
  return C = H * H + w * w + R * R, C === 0 && (_ ? S += 1e-6 : v ? _ += 1e-6 : v += 1e-6, H = v * x - _ * y, w = _ * T - S * x, R = S * y - v * T, C = H * H + w * w + R * R), C = 1 / Math.sqrt(C), H *= C, w *= C, R *= C, f[0] = H, f[1] = w, f[2] = R, f[3] = 0, f[4] = y * R - x * w, f[5] = x * H - T * R, f[6] = T * w - y * H, f[7] = 0, f[8] = T, f[9] = y, f[10] = x, f[11] = 0, f[12] = o, f[13] = d, f[14] = g, f[15] = 1, f;
}
function H1(f, u, c) {
  return f[0] = u[0] + c[0], f[1] = u[1] + c[1], f[2] = u[2] + c[2], f[3] = u[3] + c[3], f[4] = u[4] + c[4], f[5] = u[5] + c[5], f[6] = u[6] + c[6], f[7] = u[7] + c[7], f[8] = u[8] + c[8], f[9] = u[9] + c[9], f[10] = u[10] + c[10], f[11] = u[11] + c[11], f[12] = u[12] + c[12], f[13] = u[13] + c[13], f[14] = u[14] + c[14], f[15] = u[15] + c[15], f;
}
function B1(f, u, c) {
  return f[0] = u[0] - c[0], f[1] = u[1] - c[1], f[2] = u[2] - c[2], f[3] = u[3] - c[3], f[4] = u[4] - c[4], f[5] = u[5] - c[5], f[6] = u[6] - c[6], f[7] = u[7] - c[7], f[8] = u[8] - c[8], f[9] = u[9] - c[9], f[10] = u[10] - c[10], f[11] = u[11] - c[11], f[12] = u[12] - c[12], f[13] = u[13] - c[13], f[14] = u[14] - c[14], f[15] = u[15] - c[15], f;
}
function ny(f, u, c) {
  return f[0] = u[0] * c, f[1] = u[1] * c, f[2] = u[2] * c, f[3] = u[3] * c, f[4] = u[4] * c, f[5] = u[5] * c, f[6] = u[6] * c, f[7] = u[7] * c, f[8] = u[8] * c, f[9] = u[9] * c, f[10] = u[10] * c, f[11] = u[11] * c, f[12] = u[12] * c, f[13] = u[13] * c, f[14] = u[14] * c, f[15] = u[15] * c, f;
}
class af extends Array {
  constructor(u = 1, c = 0, s = 0, o = 0, d = 0, g = 1, S = 0, v = 0, _ = 0, T = 0, y = 1, x = 0, C = 0, H = 0, w = 0, R = 1) {
    return super(u, c, s, o, d, g, S, v, _, T, y, x, C, H, w, R), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(u) {
    this[12] = u;
  }
  set y(u) {
    this[13] = u;
  }
  set z(u) {
    this[14] = u;
  }
  set w(u) {
    this[15] = u;
  }
  set(u, c, s, o, d, g, S, v, _, T, y, x, C, H, w, R) {
    return u.length ? this.copy(u) : (Qm(this, u, c, s, o, d, g, S, v, _, T, y, x, C, H, w, R), this);
  }
  translate(u, c = this) {
    return Jm(this, c, u), this;
  }
  rotate(u, c, s = this) {
    return Wm(this, s, u, c), this;
  }
  scale(u, c = this) {
    return Fm(this, c, typeof u == "number" ? [u, u, u] : u), this;
  }
  add(u, c) {
    return c ? H1(this, u, c) : H1(this, this, u), this;
  }
  sub(u, c) {
    return c ? B1(this, u, c) : B1(this, this, u), this;
  }
  multiply(u, c) {
    return u.length ? c ? U1(this, u, c) : U1(this, this, u) : ny(this, this, u), this;
  }
  identity() {
    return Zm(this), this;
  }
  copy(u) {
    return Vm(this, u), this;
  }
  fromPerspective({ fov: u, aspect: c, near: s, far: o } = {}) {
    return ly(this, u, c, s, o), this;
  }
  fromOrthogonal({ left: u, right: c, bottom: s, top: o, near: d, far: g }) {
    return ey(this, u, c, s, o, d, g), this;
  }
  fromQuaternion(u) {
    return ty(this, u), this;
  }
  setPosition(u) {
    return this.x = u[0], this.y = u[1], this.z = u[2], this;
  }
  inverse(u = this) {
    return Km(this, u), this;
  }
  compose(u, c, s) {
    return Pm(this, u, c, s), this;
  }
  decompose(u, c, s) {
    return km(this, u, c, s), this;
  }
  getRotation(u) {
    return P1(u, this), this;
  }
  getTranslation(u) {
    return $m(u, this), this;
  }
  getScaling(u) {
    return k1(u, this), this;
  }
  getMaxScaleOnAxis() {
    return Im(this);
  }
  lookAt(u, c, s) {
    return ay(this, u, c, s), this;
  }
  determinant() {
    return I1(this);
  }
  fromArray(u, c = 0) {
    return this[0] = u[c], this[1] = u[c + 1], this[2] = u[c + 2], this[3] = u[c + 3], this[4] = u[c + 4], this[5] = u[c + 5], this[6] = u[c + 6], this[7] = u[c + 7], this[8] = u[c + 8], this[9] = u[c + 9], this[10] = u[c + 10], this[11] = u[c + 11], this[12] = u[c + 12], this[13] = u[c + 13], this[14] = u[c + 14], this[15] = u[c + 15], this;
  }
  toArray(u = [], c = 0) {
    return u[c] = this[0], u[c + 1] = this[1], u[c + 2] = this[2], u[c + 3] = this[3], u[c + 4] = this[4], u[c + 5] = this[5], u[c + 6] = this[6], u[c + 7] = this[7], u[c + 8] = this[8], u[c + 9] = this[9], u[c + 10] = this[10], u[c + 11] = this[11], u[c + 12] = this[12], u[c + 13] = this[13], u[c + 14] = this[14], u[c + 15] = this[15], u;
  }
}
function uy(f, u, c = "YXZ") {
  return c === "XYZ" ? (f[1] = Math.asin(Math.min(Math.max(u[8], -1), 1)), Math.abs(u[8]) < 0.99999 ? (f[0] = Math.atan2(-u[9], u[10]), f[2] = Math.atan2(-u[4], u[0])) : (f[0] = Math.atan2(u[6], u[5]), f[2] = 0)) : c === "YXZ" ? (f[0] = Math.asin(-Math.min(Math.max(u[9], -1), 1)), Math.abs(u[9]) < 0.99999 ? (f[1] = Math.atan2(u[8], u[10]), f[2] = Math.atan2(u[1], u[5])) : (f[1] = Math.atan2(-u[2], u[0]), f[2] = 0)) : c === "ZXY" ? (f[0] = Math.asin(Math.min(Math.max(u[6], -1), 1)), Math.abs(u[6]) < 0.99999 ? (f[1] = Math.atan2(-u[2], u[10]), f[2] = Math.atan2(-u[4], u[5])) : (f[1] = 0, f[2] = Math.atan2(u[1], u[0]))) : c === "ZYX" ? (f[1] = Math.asin(-Math.min(Math.max(u[2], -1), 1)), Math.abs(u[2]) < 0.99999 ? (f[0] = Math.atan2(u[6], u[10]), f[2] = Math.atan2(u[1], u[0])) : (f[0] = 0, f[2] = Math.atan2(-u[4], u[5]))) : c === "YZX" ? (f[2] = Math.asin(Math.min(Math.max(u[1], -1), 1)), Math.abs(u[1]) < 0.99999 ? (f[0] = Math.atan2(-u[9], u[5]), f[1] = Math.atan2(-u[2], u[0])) : (f[0] = 0, f[1] = Math.atan2(u[8], u[10]))) : c === "XZY" && (f[2] = Math.asin(-Math.min(Math.max(u[4], -1), 1)), Math.abs(u[4]) < 0.99999 ? (f[0] = Math.atan2(u[6], u[5]), f[1] = Math.atan2(u[8], u[0])) : (f[0] = Math.atan2(-u[9], u[10]), f[1] = 0)), f;
}
const w1 = /* @__PURE__ */ new af();
class iy extends Array {
  constructor(u = 0, c = u, s = u, o = "YXZ") {
    super(u, c, s), this.order = o, this.onChange = () => {
    }, this._target = this;
    const d = ["0", "1", "2"];
    return new Proxy(this, {
      set(g, S) {
        const v = Reflect.set(...arguments);
        return v && d.includes(S) && g.onChange(), v;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(u) {
    this._target[0] = u, this.onChange();
  }
  set y(u) {
    this._target[1] = u, this.onChange();
  }
  set z(u) {
    this._target[2] = u, this.onChange();
  }
  set(u, c = u, s = u) {
    return u.length ? this.copy(u) : (this._target[0] = u, this._target[1] = c, this._target[2] = s, this.onChange(), this);
  }
  copy(u) {
    return this._target[0] = u[0], this._target[1] = u[1], this._target[2] = u[2], this.onChange(), this;
  }
  reorder(u) {
    return this._target.order = u, this.onChange(), this;
  }
  fromRotationMatrix(u, c = this.order) {
    return uy(this._target, u, c), this.onChange(), this;
  }
  fromQuaternion(u, c = this.order, s) {
    return w1.fromQuaternion(u), this._target.fromRotationMatrix(w1, c), s || this.onChange(), this;
  }
  fromArray(u, c = 0) {
    return this._target[0] = u[c], this._target[1] = u[c + 1], this._target[2] = u[c + 2], this;
  }
  toArray(u = [], c = 0) {
    return u[c] = this[0], u[c + 1] = this[1], u[c + 2] = this[2], u;
  }
}
class fy {
  constructor() {
    this.parent = null, this.children = [], this.visible = !0, this.matrix = new af(), this.worldMatrix = new af(), this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new ue(), this.quaternion = new Lm(), this.scale = new ue(1), this.rotation = new iy(), this.up = new ue(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0);
  }
  setParent(u, c = !0) {
    this.parent && u !== this.parent && this.parent.removeChild(this, !1), this.parent = u, c && u && u.addChild(this, !1);
  }
  addChild(u, c = !0) {
    ~this.children.indexOf(u) || this.children.push(u), c && u.setParent(this, !1);
  }
  removeChild(u, c = !0) {
    ~this.children.indexOf(u) && this.children.splice(this.children.indexOf(u), 1), c && u.setParent(null, !1);
  }
  updateMatrixWorld(u) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || u) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, u = !0);
    for (let c = 0, s = this.children.length; c < s; c++)
      this.children[c].updateMatrixWorld(u);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
  }
  traverse(u) {
    if (!u(this))
      for (let c = 0, s = this.children.length; c < s; c++)
        this.children[c].traverse(u);
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(u, c = !1) {
    c ? this.matrix.lookAt(this.position, u, this.up) : this.matrix.lookAt(u, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion);
  }
}
function cy(f, u) {
  return f[0] = u[0], f[1] = u[1], f[2] = u[2], f[3] = u[4], f[4] = u[5], f[5] = u[6], f[6] = u[8], f[7] = u[9], f[8] = u[10], f;
}
function sy(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = c + c, S = s + s, v = o + o, _ = c * g, T = s * g, y = s * S, x = o * g, C = o * S, H = o * v, w = d * g, R = d * S, q = d * v;
  return f[0] = 1 - y - H, f[3] = T - q, f[6] = x + R, f[1] = T + q, f[4] = 1 - _ - H, f[7] = C - w, f[2] = x - R, f[5] = C + w, f[8] = 1 - _ - y, f;
}
function ry(f, u) {
  return f[0] = u[0], f[1] = u[1], f[2] = u[2], f[3] = u[3], f[4] = u[4], f[5] = u[5], f[6] = u[6], f[7] = u[7], f[8] = u[8], f;
}
function hy(f, u, c, s, o, d, g, S, v, _) {
  return f[0] = u, f[1] = c, f[2] = s, f[3] = o, f[4] = d, f[5] = g, f[6] = S, f[7] = v, f[8] = _, f;
}
function oy(f) {
  return f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 1, f[5] = 0, f[6] = 0, f[7] = 0, f[8] = 1, f;
}
function dy(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = u[4], S = u[5], v = u[6], _ = u[7], T = u[8], y = T * g - S * _, x = -T * d + S * v, C = _ * d - g * v, H = c * y + s * x + o * C;
  return H ? (H = 1 / H, f[0] = y * H, f[1] = (-T * s + o * _) * H, f[2] = (S * s - o * g) * H, f[3] = x * H, f[4] = (T * c - o * v) * H, f[5] = (-S * c + o * d) * H, f[6] = C * H, f[7] = (-_ * c + s * v) * H, f[8] = (g * c - s * d) * H, f) : null;
}
function q1(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = u[3], S = u[4], v = u[5], _ = u[6], T = u[7], y = u[8], x = c[0], C = c[1], H = c[2], w = c[3], R = c[4], q = c[5], lt = c[6], $ = c[7], L = c[8];
  return f[0] = x * s + C * g + H * _, f[1] = x * o + C * S + H * T, f[2] = x * d + C * v + H * y, f[3] = w * s + R * g + q * _, f[4] = w * o + R * S + q * T, f[5] = w * d + R * v + q * y, f[6] = lt * s + $ * g + L * _, f[7] = lt * o + $ * S + L * T, f[8] = lt * d + $ * v + L * y, f;
}
function gy(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = u[3], S = u[4], v = u[5], _ = u[6], T = u[7], y = u[8], x = c[0], C = c[1];
  return f[0] = s, f[1] = o, f[2] = d, f[3] = g, f[4] = S, f[5] = v, f[6] = x * s + C * g + _, f[7] = x * o + C * S + T, f[8] = x * d + C * v + y, f;
}
function vy(f, u, c) {
  let s = u[0], o = u[1], d = u[2], g = u[3], S = u[4], v = u[5], _ = u[6], T = u[7], y = u[8], x = Math.sin(c), C = Math.cos(c);
  return f[0] = C * s + x * g, f[1] = C * o + x * S, f[2] = C * d + x * v, f[3] = C * g - x * s, f[4] = C * S - x * o, f[5] = C * v - x * d, f[6] = _, f[7] = T, f[8] = y, f;
}
function my(f, u, c) {
  let s = c[0], o = c[1];
  return f[0] = s * u[0], f[1] = s * u[1], f[2] = s * u[2], f[3] = o * u[3], f[4] = o * u[4], f[5] = o * u[5], f[6] = u[6], f[7] = u[7], f[8] = u[8], f;
}
function yy(f, u) {
  let c = u[0], s = u[1], o = u[2], d = u[3], g = u[4], S = u[5], v = u[6], _ = u[7], T = u[8], y = u[9], x = u[10], C = u[11], H = u[12], w = u[13], R = u[14], q = u[15], lt = c * S - s * g, $ = c * v - o * g, L = c * _ - d * g, k = s * v - o * S, I = s * _ - d * S, K = o * _ - d * v, V = T * w - y * H, ct = T * R - x * H, J = T * q - C * H, rt = y * R - x * w, vt = y * q - C * w, ot = x * q - C * R, et = lt * ot - $ * vt + L * rt + k * J - I * ct + K * V;
  return et ? (et = 1 / et, f[0] = (S * ot - v * vt + _ * rt) * et, f[1] = (v * J - g * ot - _ * ct) * et, f[2] = (g * vt - S * J + _ * V) * et, f[3] = (o * vt - s * ot - d * rt) * et, f[4] = (c * ot - o * J + d * ct) * et, f[5] = (s * J - c * vt - d * V) * et, f[6] = (w * K - R * I + q * k) * et, f[7] = (R * L - H * K - q * $) * et, f[8] = (H * I - w * L + q * lt) * et, f) : null;
}
class Sy extends Array {
  constructor(u = 1, c = 0, s = 0, o = 0, d = 1, g = 0, S = 0, v = 0, _ = 1) {
    return super(u, c, s, o, d, g, S, v, _), this;
  }
  set(u, c, s, o, d, g, S, v, _) {
    return u.length ? this.copy(u) : (hy(this, u, c, s, o, d, g, S, v, _), this);
  }
  translate(u, c = this) {
    return gy(this, c, u), this;
  }
  rotate(u, c = this) {
    return vy(this, c, u), this;
  }
  scale(u, c = this) {
    return my(this, c, u), this;
  }
  multiply(u, c) {
    return c ? q1(this, u, c) : q1(this, this, u), this;
  }
  identity() {
    return oy(this), this;
  }
  copy(u) {
    return ry(this, u), this;
  }
  fromMatrix4(u) {
    return cy(this, u), this;
  }
  fromQuaternion(u) {
    return sy(this, u), this;
  }
  fromBasis(u, c, s) {
    return this.set(u[0], u[1], u[2], c[0], c[1], c[2], s[0], s[1], s[2]), this;
  }
  inverse(u = this) {
    return dy(this, u), this;
  }
  getNormalMatrix(u) {
    return yy(this, u), this;
  }
}
let Ey = 0;
class Ty extends fy {
  constructor(u, { geometry: c, program: s, mode: o = u.TRIANGLES, frustumCulled: d = !0, renderOrder: g = 0 } = {}) {
    super(), u.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = u, this.id = Ey++, this.geometry = c, this.program = s, this.mode = o, this.frustumCulled = d, this.renderOrder = g, this.modelViewMatrix = new af(), this.normalMatrix = new Sy(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = [];
  }
  onBeforeRender(u) {
    return this.beforeRenderCallbacks.push(u), this;
  }
  onAfterRender(u) {
    return this.afterRenderCallbacks.push(u), this;
  }
  draw({ camera: u } = {}) {
    u && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
      modelMatrix: { value: null },
      viewMatrix: { value: null },
      modelViewMatrix: { value: null },
      normalMatrix: { value: null },
      projectionMatrix: { value: null },
      cameraPosition: { value: null }
    }), this.program.uniforms.projectionMatrix.value = u.projectionMatrix, this.program.uniforms.cameraPosition.value = u.worldPosition, this.program.uniforms.viewMatrix.value = u.viewMatrix, this.modelViewMatrix.multiply(u.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: u }));
    let c = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: c }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: u }));
  }
}
const G1 = new Uint8Array(4);
function Y1(f) {
  return (f & f - 1) === 0;
}
let py = 1;
class X1 {
  constructor(u, {
    image: c,
    target: s = u.TEXTURE_2D,
    type: o = u.UNSIGNED_BYTE,
    format: d = u.RGBA,
    internalFormat: g = d,
    wrapS: S = u.CLAMP_TO_EDGE,
    wrapT: v = u.CLAMP_TO_EDGE,
    wrapR: _ = u.CLAMP_TO_EDGE,
    generateMipmaps: T = s === (u.TEXTURE_2D || u.TEXTURE_CUBE_MAP),
    minFilter: y = T ? u.NEAREST_MIPMAP_LINEAR : u.LINEAR,
    magFilter: x = u.LINEAR,
    premultiplyAlpha: C = !1,
    unpackAlignment: H = 4,
    flipY: w = s == (u.TEXTURE_2D || u.TEXTURE_3D),
    anisotropy: R = 0,
    level: q = 0,
    width: lt,
    // used for RenderTargets or Data Textures
    height: $ = lt,
    length: L = 1
  } = {}) {
    this.gl = u, this.id = py++, this.image = c, this.target = s, this.type = o, this.format = d, this.internalFormat = g, this.minFilter = y, this.magFilter = x, this.wrapS = S, this.wrapT = v, this.wrapR = _, this.generateMipmaps = T, this.premultiplyAlpha = C, this.unpackAlignment = H, this.flipY = w, this.anisotropy = Math.min(R, this.gl.renderer.parameters.maxAnisotropy), this.level = q, this.width = lt, this.height = $, this.length = L, this.texture = this.gl.createTexture(), this.store = {
      image: null
    }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0;
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
  }
  update(u = 0) {
    const c = !(this.image === this.store.image && !this.needsUpdate);
    if ((c || this.glState.textureUnits[u] !== this.id) && (this.gl.renderer.activeTexture(u), this.bind()), !!c) {
      if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR), this.state.wrapR = this.wrapR), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let s = 0; s < 6; s++)
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s, this.level, this.internalFormat, this.format, this.type, this.image[s]);
        else if (ArrayBuffer.isView(this.image))
          this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) && this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
        else if (this.image.isCompressedTexture)
          for (let s = 0; s < this.image.length; s++)
            this.gl.compressedTexImage2D(this.target, s, this.internalFormat, this.image[s].width, this.image[s].height, 0, this.image[s].data);
        else
          this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!Y1(this.image.width) || !Y1(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let s = 0; s < 6; s++)
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, G1);
      else this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, G1);
      this.store.image = this.image;
    }
  }
}
class by extends vm {
  constructor(u, { attributes: c = {} } = {}) {
    Object.assign(c, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    }), super(u, c);
  }
}
const L1 = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M39 3 12 37h17l-4 24 27-34H35z" fill="#fff"/></svg>'
)}`, _y = 560, Xl = 4, xu = 1e20, ra = 5, Ou = 3, Ay = 4e6, j1 = (f) => {
  let u = String(f || "").replace("#", "");
  u.length === 3 && (u = u.replace(/./g, (s) => s + s));
  const c = parseInt(u.slice(0, 6), 16);
  return Number.isNaN(c) ? [1, 1, 1] : [(c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255];
}, V1 = (f, u, c, s, o) => {
  let d = 0;
  c[0] = 0, s[0] = -xu, s[1] = xu;
  for (let g = 1; g < o; g++) {
    let S = (f[g] + g * g - (f[c[d]] + c[d] * c[d])) / (2 * g - 2 * c[d]);
    for (; S <= s[d]; )
      d--, S = (f[g] + g * g - (f[c[d]] + c[d] * c[d])) / (2 * g - 2 * c[d]);
    d++, c[d] = g, s[d] = S, s[d + 1] = xu;
  }
  d = 0;
  for (let g = 0; g < o; g++) {
    for (; s[d + 1] < g; ) d++;
    u[g] = (g - c[d]) * (g - c[d]) + f[c[d]];
  }
}, Q1 = (f, u, c) => {
  const s = Math.max(u, c), o = new Float64Array(s), d = new Float64Array(s), g = new Int32Array(s), S = new Float64Array(s + 1);
  for (let v = 0; v < u; v++) {
    for (let _ = 0; _ < c; _++) o[_] = f[_ * u + v];
    V1(o, d, g, S, c);
    for (let _ = 0; _ < c; _++) f[_ * u + v] = d[_];
  }
  for (let v = 0; v < c; v++) {
    for (let _ = 0; _ < u; _++) o[_] = f[v * u + _];
    V1(o, d, g, S, u);
    for (let _ = 0; _ < u; _++) f[v * u + _] = d[_];
  }
}, Z1 = (f, u, c, s, o, d) => {
  const g = 1 / (2 * d + 1);
  let S = 0;
  for (let v = 0; v <= d && v < o; v++) S += f[c + v * s];
  for (let v = 0; v < o; v++)
    u[c + v * s] = S * g, v + d + 1 < o && (S += f[c + (v + d + 1) * s]), v - d >= 0 && (S -= f[c + (v - d) * s]);
}, K1 = (f, u, c, s) => {
  const o = new Float32Array(u * c);
  for (let d = 0; d < 3; d++) {
    for (let g = 0; g < c; g++) Z1(f, o, g * u, 1, u, s);
    for (let g = 0; g < u; g++) Z1(o, f, g, u, c, s);
  }
}, zy = (f, u, c) => {
  const s = new Float32Array(u * c);
  let o = 0;
  for (let T = 0; T < u * c; T++) f[T * 4 + 3] < 250 && o++;
  if (o > u * c * 0.01) {
    for (let T = 0; T < u * c; T++) s[T] = f[T * 4 + 3] / 255;
    return s;
  }
  let d = 0, g = 0, S = 0, v = 0;
  const _ = (T) => {
    d += f[T * 4], g += f[T * 4 + 1], S += f[T * 4 + 2], v++;
  };
  for (let T = 0; T < u; T++)
    _(T), _((c - 1) * u + T);
  for (let T = 0; T < c; T++)
    _(T * u), _(T * u + u - 1);
  d /= v, g /= v, S /= v;
  for (let T = 0; T < u * c; T++) {
    const y = Math.max(Math.abs(f[T * 4] - d), Math.abs(f[T * 4 + 1] - g), Math.abs(f[T * 4 + 2] - S));
    s[T] = Math.min(1, Math.max(0, (y - 24) / 48));
  }
  return s;
}, J1 = (f, u, c) => {
  const { field: s, width: o, height: d } = f, g = Math.min(Math.max(u, 0.5), o - 0.5), S = Math.min(Math.max(c, 0.5), d - 0.5), v = Math.min(Math.floor(g - 0.5), o - 2), _ = Math.min(Math.floor(S - 0.5), d - 2), T = g - 0.5 - v, y = S - 0.5 - _, x = _ * o + v, C = s[x] + (s[x + 1] - s[x]) * T, H = s[x + o] + (s[x + o + 1] - s[x + o]) * T;
  return C + (H - C) * y + Math.hypot(u - g, c - S);
}, My = (f) => {
  const u = f.naturalWidth || f.width, c = f.naturalHeight || f.height;
  if (!u || !c) return null;
  const s = _y / Math.max(u, c), o = Math.max(2, Math.round(u * s)), d = Math.max(2, Math.round(c * s)), g = document.createElement("canvas");
  g.width = o, g.height = d;
  const S = g.getContext("2d", { willReadFrequently: !0 });
  if (!S) return null;
  S.drawImage(f, 0, 0, o, d);
  const v = zy(S.getImageData(0, 0, o, d).data, o, d);
  let _ = o, T = d, y = -1, x = -1;
  for (let j = 0; j < d; j++)
    for (let F = 0; F < o; F++)
      v[j * o + F] <= 0.01 || (F < _ && (_ = F), F > y && (y = F), j < T && (T = j), j > x && (x = j));
  if (y < 0) return null;
  const C = y - _ + 1, H = x - T + 1, w = Math.ceil(Math.max(C, H) * 0.25) + 2, R = C + w * 2, q = H + w * 2, lt = new Float32Array(R * q), $ = new Float32Array(R * q);
  for (let j = 0; j < q; j++)
    for (let F = 0; F < R; F++) {
      const it = F - w + _, Ct = j - w + T, Zt = it >= 0 && Ct >= 0 && it < o && Ct < d ? v[Ct * o + it] : 0, E = j * R + F;
      if (Zt >= 1)
        lt[E] = 0, $[E] = xu;
      else if (Zt <= 0)
        lt[E] = xu, $[E] = 0;
      else {
        const B = 0.5 - Zt;
        lt[E] = B > 0 ? B * B : 0, $[E] = B < 0 ? B * B : 0;
      }
    }
  Q1(lt, R, q), Q1($, R, q);
  const L = new Float32Array(R * q);
  for (let j = 0; j < R * q; j++) L[j] = Math.sqrt(lt[j]) - Math.sqrt($[j]);
  const k = [];
  for (let j = 1; j < q - 1; j++)
    for (let F = 1; F < R - 1; F++) {
      const it = j * R + F, Ct = L[it];
      if (Ct > 0 || L[it - 1] <= 0 && L[it + 1] <= 0 && L[it - R] <= 0 && L[it + R] <= 0) continue;
      const Zt = L[it + 1] - L[it - 1], E = L[it + R] - L[it - R], B = Math.hypot(Zt, E) || 1;
      k.push(F + 0.5 - Ct * Zt / B, j + 0.5 - Ct * E / B);
    }
  const I = Math.max(1, Math.ceil(k.length / 2 / 3e3)) * 2, K = [];
  for (let j = 0; j < k.length; j += I) K.push(k[j], k[j + 1]);
  const V = Math.max(C, H), ct = Math.ceil(V * 0.7 / Xl), J = Math.ceil(C / Xl) + ct * 2, rt = Math.ceil(H / Xl) + ct * 2, vt = new Float32Array(J * rt);
  for (let j = 0; j < q; j++) {
    const F = Math.floor((j - w) / Xl) + ct;
    for (let it = 0; it < R; it++) {
      const Ct = Math.floor((it - w) / Xl) + ct;
      vt[F * J + Ct] += Math.exp(-Math.abs(L[j * R + it]) / 1.5) / (Xl * Xl);
    }
  }
  const ot = vt.slice(), et = Math.max(1, Math.round(V * 0.035 / Xl)), zt = Math.max(2, Math.round(V * 0.13 / Xl));
  K1(vt, J, rt, et), K1(ot, J, rt, zt);
  const G = Math.sqrt(2 * Math.PI * (et * et + et)) * Xl / 3, Y = Math.sqrt(2 * Math.PI * (zt * zt + zt)) * Xl / 3, ut = new Float32Array(J * rt * 2);
  for (let j = 0; j < J * rt; j++)
    ut[j * 2] = vt[j] * G, ut[j * 2 + 1] = ot[j] * Y;
  return {
    field: L,
    edges: K,
    width: R,
    height: q,
    pad: w,
    logoWidth: C,
    logoHeight: H,
    glow: ut,
    glowWidth: J,
    glowHeight: rt,
    glowOffset: w - ct * Xl
  };
}, Zs = (f, u, c) => {
  const { edges: s, logoWidth: o, logoHeight: d } = f, g = s.length / 2;
  if (g < 2) return null;
  const S = Math.max(o, d);
  let v = Math.floor(Math.random() * g);
  if (c) {
    let y = !1;
    for (let x = 0; x < 40 && !y; x++) {
      const C = Math.floor(Math.random() * g);
      Math.hypot(s[C * 2] - c.x, s[C * 2 + 1] - c.y) < c.radius && (v = C, y = !0);
    }
    if (!y) return null;
  }
  const _ = s[v * 2], T = s[v * 2 + 1];
  for (let y = 0; y < 24; y++) {
    const x = Math.floor(Math.random() * g), C = s[x * 2], H = s[x * 2 + 1], w = Math.hypot(C - _, H - T);
    if (w < S * 0.08 || w > S * 0.3) continue;
    const R = -(H - T) / w, q = (C - _) / w, lt = w * (0.2 + Math.random() * 0.3), $ = (_ + C) / 2, L = (T + H) / 2, k = J1(f, $ + R * lt, L + q * lt), I = J1(f, $ - R * lt, L - q * lt);
    if (!(Math.max(k, I) <= 0))
      return {
        ax: _,
        ay: T,
        bx: C,
        by: H,
        bow: k >= I ? lt : -lt,
        seed: 1 + Math.random() * 60,
        born: u,
        life: 0.35 + Math.random() * 0.45
      };
  }
  return null;
}, xy = `#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
vUv = uv;
gl_Position = vec4(position, 0.0, 1.0);
}
`, Oy = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D tFieldFrom;
uniform sampler2D tGlowFrom;
uniform sampler2D tFieldTo;
uniform sampler2D tGlowTo;
uniform vec4 uMapFrom;
uniform vec4 uSizeFrom;
uniform vec4 uMapTo;
uniform vec4 uSizeTo;
uniform float uMorph;
uniform vec2 uResolution;
uniform float uUnit;
uniform float uTime;
uniform float uPresence;
uniform vec3 uHover;
uniform float uHoverRadius;
uniform vec4 uPulses[${Ou}];
uniform float uPulseBoost;
uniform float uFlash;
uniform vec3 uColor;
uniform vec3 uGlowColor;
uniform float uIntensity;
uniform float uGlow;
uniform float uThickness;
uniform float uStrands;
uniform float uBend;
uniform float uCrackle;
uniform float uFlicker;
uniform float uFill;
uniform float uInk;
uniform vec4 uArcEnds[${ra}];
uniform vec4 uArcShape[${ra}];
in vec2 vUv;
out vec4 fragColor;
uint scramble(uint x) {
x ^= x >> 16u;
x *= 0x7feb352du;
x ^= x >> 15u;
x *= 0x846ca68bu;
x ^= x >> 16u;
return x;
}
float fieldAt(sampler2D tex, vec4 map, vec4 size, vec2 p) {
vec2 f = (p - map.xy) / map.z;
vec2 c = clamp(f, vec2(0.5), size.xy - 0.5);
return (textureLod(tex, c / size.xy, 0.0).r + length(f - c)) * map.z;
}
vec2 glowAt(sampler2D tex, vec4 map, vec4 size, vec2 p) {
vec2 f = (p - map.xy) / map.z - map.w;
return textureLod(tex, f / (size.zw * ${Xl}.0), 0.0).rg;
}
float shape(vec2 p, float k) {
float to = fieldAt(tFieldTo, uMapTo, uSizeTo, p);
if (k >= 1.0) return to;
return mix(fieldAt(tFieldFrom, uMapFrom, uSizeFrom, p), to, k);
}
vec2 aura(vec2 p, float k) {
vec2 to = glowAt(tGlowTo, uMapTo, uSizeTo, p);
if (k >= 1.0) return to;
return mix(glowAt(tGlowFrom, uMapFrom, uSizeFrom, p), to, k);
}
vec4 corner(ivec2 c, uint seed) {
uint h = scramble(uint(c.x) * 0x8da6b343u + uint(c.y) * 0xd8163841u + seed * 0xcb1ab31fu);
return vec4(uvec4(h, h >> 8u, h >> 16u, h >> 24u) & 255u) / 127.5 - 1.0;
}
vec2 drift(vec2 p, uint seed, out mat2 jac) {
vec2 i = floor(p);
vec2 f = p - i;
vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
vec2 du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
ivec2 c = ivec2(i);
vec4 ga = corner(c, seed);
vec4 gb = corner(c + ivec2(1, 0), seed);
vec4 gc = corner(c + ivec2(0, 1), seed);
vec4 gd = corner(c + ivec2(1, 1), seed);
vec2 fb = f - vec2(1.0, 0.0);
vec2 fc = f - vec2(0.0, 1.0);
vec2 fd = f - vec2(1.0);
vec2 va = vec2(dot(ga.xy, f), dot(ga.zw, f));
vec2 vb = vec2(dot(gb.xy, fb), dot(gb.zw, fb));
vec2 vc = vec2(dot(gc.xy, fc), dot(gc.zw, fc));
vec2 vd = vec2(dot(gd.xy, fd), dot(gd.zw, fd));
vec2 k = va - vb - vc + vd;
vec4 g = ga + u.x * (gb - ga) + u.y * (gc - ga) + u.x * u.y * (ga - gb - gc + gd);
jac = mat2(
g.xy + du * (u.yx * k.x + vec2(vb.x - va.x, vc.x - va.x)),
g.zw + du * (u.yx * k.y + vec2(vb.y - va.y, vc.y - va.y))
);
return va + u.x * (vb - va) + u.y * (vc - va) + u.x * u.y * k;
}
float wobble(vec2 p, uint seed) {
mat2 jac;
return drift(p, seed, jac).x;
}
vec2 ripple(vec2 p, out float surge) {
vec2 push = vec2(0.0);
surge = 0.0;
float width = uUnit * 10.0;
for (int i = 0; i < ${Ou}; i++) {
vec4 pulse = uPulses[i];
if (pulse.w <= 0.0) continue;
vec2 d = p - pulse.xy;
float dist = length(d);
float front = (dist - pulse.z * uUnit * 150.0) / width;
float env = exp(-front * front) * pulse.w * exp(-pulse.z * 1.7) * smoothstep(0.0, uUnit * 8.0, dist);
push += d / max(dist, 1.0) * env * cos(front * 2.2) * uUnit * 7.5;
surge += env;
}
return push;
}
vec2 wander(vec2 p, float t, uint seed, float reachScale, out mat2 jac, out vec2 sway) {
vec2 q = p / uUnit;
mat2 ja;
mat2 jb;
mat2 jc;
mat2 jd;
vec2 a = drift(q * 0.028 + vec2(t * 0.29, t * 0.21), seed, ja);
vec2 b = drift(q * 0.085 + a * 0.4 + vec2(t * 0.83, -t * 0.61) + 17.0, seed + 1u, jb);
vec2 c = drift(p / 9.0 + b * 0.6 + vec2(t * 1.9, t * 1.3) + 5.0, seed + 2u, jc);
vec2 d = drift(p / 4.1 + vec2(-t * 2.7, t * 2.2) + 11.0, seed + 3u, jd);
float bendAmp = uBend * 8.0 * reachScale;
float rippleAmp = uBend * 3.2 * reachScale;
float crinkleAmp = uCrackle * 1.5 * reachScale;
jac = ja * (0.028 * bendAmp) + jb * (0.085 * rippleAmp) + jc * (crinkleAmp / 9.0) + jd * (crinkleAmp * 0.35 / 4.1);
sway = (a * bendAmp + b * rippleAmp) * uUnit;
return sway + (c + d * 0.35) * crinkleAmp;
}
vec2 glowShape(float line, float spread, float w) {
float x = abs(line);
float y = abs(spread);
return vec2(exp(-x * x / (w * w * 0.5)) + exp(-y / (w * 2.2)) * 0.6, exp(-y / (w * 4.5)) * 0.5);
}
void addArc(vec2 p, vec4 ends, vec4 info, float t, inout vec3 light, inout float energy, inout float hot) {
if (info.y < 0.002) return;
vec2 ab = ends.zw - ends.xy;
float len = max(length(ab), 1.0);
vec2 dir = ab / len;
vec2 rel = p - ends.xy;
float s = dot(rel, dir);
float h = dot(rel, vec2(-dir.y, dir.x));
float margin = abs(info.x) + uCrackle * (2.0 + len * 0.08) + uThickness * 12.0 + 10.0;
if (s < -margin || s > len + margin || abs(h) > margin) return;
float u = clamp(s / len, 0.0, 1.0);
float taper = sin(3.14159265 * u);
float bendSlope = s > 0.0 && s < len ? 3.14159265 / len * cos(3.14159265 * u) : 0.0;
float beyond = max(-s, 0.0) + max(s - len, 0.0);
for (int c = 0; c < 2; c++) {
uint seed = uint(info.z * 131.0) + uint(c) * 29u + 7u;
float jag = 0.0;
float jagSlope = 0.0;
float wave = max(len * 0.3, 14.0);
float weight = uCrackle * (1.5 + len * 0.05) * (c == 0 ? 1.0 : 1.5);
for (int o = 0; o < 3; o++) {
mat2 jac;
float n = drift(vec2(s / wave + info.z * 3.0, t * (1.4 + float(o) * 1.1)), seed + uint(o), jac).x;
jag += n * weight;
jagSlope += jac[0].x * weight / wave;
wave = 0.42;
weight = 0.4;
}
float offset = (info.x + jag) * taper;
float offsetSlope = (info.x + jag) * bendSlope + jagSlope * taper;
float across = (h - offset) / sqrt(1.0 + offsetSlope * offsetSlope);
float gap = length(vec2(beyond, across));
float w = uThickness * (c == 0 ? 0.9 : 0.6);
vec2 g = glowShape(gap, gap, w);
float k = info.y * (c == 0 ? 1.0 : 0.45);
light += (uColor * g.x + uGlowColor * g.y * uGlow) * k;
energy += (g.x + g.y * uGlow) * k;
hot += exp(-gap * gap / (w * w * 0.16)) * k * (c == 0 ? 1.0 : 0.0);
}
}
void main() {
vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
float t = uTime;
vec3 light = vec3(0.0);
float energy = 0.0;
float hot = 0.0;
float surge;
vec2 pr = p - ripple(p, surge);
float k = uMorph >= 1.0 ? 1.0 : smoothstep(0.0, 1.0, clamp(uMorph * 1.7 - 0.35 + 0.35 * wobble(p / uUnit * 0.018, 41u), 0.0, 1.0));
float transit = uMorph >= 1.0 ? 0.0 : sin(3.14159265 * uMorph);
float base = shape(pr, k);
vec2 toHover = p - uHover.xy;
float heat = min(uHover.z * exp(-dot(toHover, toHover) / (uHoverRadius * uHoverRadius)) + surge * 1.4 + transit * 0.5, 2.0);
float heatCap = min(uHover.z + uPulseBoost * 1.4 + transit * 0.5, 2.0);
float breath = 1.0 + uFlicker * 0.6 * wobble(vec2(t * 2.1, 7.0), 3u);
float grow = uPresence;
float edge = abs(base);
vec2 halo = aura(pr, k);
float ink = uInk;
float bloom = (halo.x * 0.16 + halo.y * 0.08) * (1.0 - ink * 0.65) * uGlow * (1.0 + heat * 1.2);
float body = smoothstep(0.75, -0.75, base) * uFill * (0.06 + 1.2 * min(halo.x, 1.0)) * (1.0 + heat * 0.5);
light += uGlowColor * bloom * grow * grow;
energy += bloom * grow * grow;
float reachScale = mix(0.15, 1.0, grow) * (1.0 + heat * 0.9);
float reach = (uUnit * uBend * 16.0 + uCrackle * 3.0) * (1.0 + heatCap * 0.9) + uThickness * 20.0 + 8.0;
if (edge < reach && grow > 0.0) {
float fade = smoothstep(reach, reach * 0.55, edge);
vec2 q = pr / uUnit;
float count = min(uStrands + heat * 2.5, 6.0);
float limit = min(uStrands + heatCap * 2.5, 6.0);
for (int i = 0; i < 6; i++) {
float fi = float(i);
if (fi >= limit) break;
float present = clamp(count - fi, 0.0, 1.0);
if (present <= 0.0) continue;
uint seed = uint(i) * 7u + 3u;
mat2 jac;
vec2 sway;
float lead = i == 0 ? 1.0 : 0.0;
vec2 warped = pr + wander(pr, t * (1.0 + fi * 0.19), seed, reachScale * mix(0.6 + fi * 0.2, 0.7, lead), jac, sway);
float dw = shape(warped, k);
vec2 slope = vec2(shape(warped + vec2(1.0, 0.0), k), shape(warped + vec2(0.0, 1.0), k)) - dw;
float d = dw / max(length(slope + jac * slope), 0.3);
float spread = shape(pr + sway, k);
float swell = 0.5 + 0.5 * wobble(q * 0.06 + vec2(t * 0.9, fi * 5.1 - t * 0.6), seed + 8u);
float w = uThickness * mix(0.5, 1.0, lead) * (0.5 + swell);
float vis = mix(0.3 + 0.45 * smoothstep(-0.25, 0.2, wobble(q * 0.035 + vec2(t * 0.21, fi * 3.7), seed + 5u)), 1.0, lead);
float spark = 1.0 - uFlicker * 0.3 * (0.5 + 0.5 * wobble(vec2(t * 6.0, fi * 2.3), seed + 6u));
float weight = max(vis, heat * 0.85) * spark * fade * present * (0.7 + 0.6 * swell);
vec2 g = glowShape(d, spread, w) * weight;
float soft = mix(1.0, mix(0.5, 1.0, lead), ink);
vec3 stroke = mix(uColor, uGlowColor, ink * (1.0 - lead) * 0.65);
float haze = uGlow * (1.0 + heat) * (1.0 - ink * 0.7);
light += stroke * g.x * soft + uGlowColor * g.y * haze;
energy += g.x * soft + g.y * haze;
hot += exp(-d * d / (w * w * 0.16)) * lead * weight;
}
light *= grow;
energy *= grow;
}
for (int i = 0; i < ${ra}; i++) addArc(pr, uArcEnds[i], uArcShape[i], t, light, energy, hot);
float gain = uIntensity * breath * (1.0 + heat * 0.45) * (1.0 + uFlash * 0.3) * 1.4;
float alpha = 1.0 - exp(-energy * gain);
vec3 color = mix(1.0 - exp(-light * gain), alpha * light / max(energy, 1e-4), ink);
color = mix(color, vec3(alpha), clamp(hot * grow, 0.0, 1.0) * ink * 0.85);
float tint = (1.0 - exp(-body * gain * 1.2)) * grow * grow * (1.0 - ink * 0.82);
color += uGlowColor * tint * (1.0 - alpha);
alpha += tint * (1.0 - alpha);
float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
alpha = clamp(alpha + grain, 0.0, 1.0);
fragColor = vec4(clamp(color + grain, 0.0, alpha), alpha);
}
`, Ny = ({
  src: f = L1,
  color: u = "#ecc7ff",
  glowColor: c = "#ad6dff",
  scale: s = 0.7,
  intensity: o = 1,
  glow: d = 1,
  thickness: g = 1.5,
  strands: S = 4,
  bend: v = 0.6,
  crackle: _ = 1.5,
  arcs: T = 1,
  flicker: y = 0.6,
  fill: x = 0,
  speed: C = 2.5,
  interactive: H = !0,
  cursorIntensity: w = 0.75,
  cursorRadius: R = 100,
  theme: q = "dark",
  onRender: lt,
  className: $ = "",
  style: L
}) => {
  const k = Ya.useRef(null), I = Ya.useRef(null), K = Ya.useRef(null);
  return Ya.useEffect(() => {
    I.current = {
      color: u,
      glowColor: c,
      scale: s,
      intensity: o,
      glow: d,
      thickness: g,
      strands: S,
      bend: v,
      crackle: _,
      arcs: T,
      flicker: y,
      fill: x,
      speed: C,
      interactive: H,
      cursorIntensity: w,
      cursorRadius: R,
      theme: q,
      onRender: lt
    };
  }), Ya.useEffect(() => {
    let V = !0;
    const ct = new Image();
    return ct.crossOrigin = "anonymous", ct.decoding = "async", ct.onload = () => {
      if (!V) return;
      let J = null;
      try {
        J = My(ct);
      } catch {
        J = null;
      }
      J && (K.current = J);
    }, ct.src = f || L1, () => {
      V = !1, ct.onload = null;
    };
  }, [f]), Ya.useEffect(() => {
    const V = k.current;
    if (!V) return;
    const ct = new bm({
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: !0,
      premultipliedAlpha: !0,
      antialias: !1
    }), J = ct.gl;
    if (!ct.isWebgl2) {
      J.getExtension("WEBGL_lose_context")?.loseContext();
      return;
    }
    J.clearColor(0, 0, 0, 0);
    const rt = J.canvas;
    rt.style.display = "block", rt.style.width = "100%", rt.style.height = "100%", V.appendChild(rt);
    const vt = () => ({
      shape: null,
      field: new X1(J, {
        image: new Float32Array([1e3]),
        width: 1,
        height: 1,
        internalFormat: J.R16F,
        format: J.RED,
        type: J.FLOAT,
        minFilter: J.LINEAR,
        magFilter: J.LINEAR,
        generateMipmaps: !1,
        flipY: !1,
        unpackAlignment: 1
      }),
      glow: new X1(J, {
        image: new Float32Array([0, 0]),
        width: 1,
        height: 1,
        internalFormat: J.RG16F,
        format: J.RG,
        type: J.FLOAT,
        minFilter: J.LINEAR,
        magFilter: J.LINEAR,
        generateMipmaps: !1,
        flipY: !1,
        unpackAlignment: 1
      })
    }), ot = [vt(), vt()], et = Array.from({ length: ra * 4 }, () => 0), zt = Array.from({ length: ra * 4 }, () => 0), G = Array.from({ length: Ou * 4 }, () => 0), Y = {
      tFieldFrom: { value: ot[1].field },
      tGlowFrom: { value: ot[1].glow },
      tFieldTo: { value: ot[0].field },
      tGlowTo: { value: ot[0].glow },
      uMapFrom: { value: [0, 0, 1, 0] },
      uSizeFrom: { value: [1, 1, 1, 1] },
      uMapTo: { value: [0, 0, 1, 0] },
      uSizeTo: { value: [1, 1, 1, 1] },
      uMorph: { value: 1 },
      uResolution: { value: [1, 1] },
      uUnit: { value: 1 },
      uTime: { value: 0 },
      uPresence: { value: 0 },
      uHover: { value: [0, 0, 0] },
      uHoverRadius: { value: 120 },
      uPulses: { value: G },
      uPulseBoost: { value: 0 },
      uFlash: { value: 0 },
      uColor: { value: [1, 1, 1] },
      uGlowColor: { value: [0.43, 0.48, 1] },
      uIntensity: { value: 1 },
      uGlow: { value: 1 },
      uThickness: { value: 1.8 },
      uStrands: { value: 3 },
      uBend: { value: 1 },
      uCrackle: { value: 1 },
      uFlicker: { value: 0.4 },
      uFill: { value: 0.5 },
      uInk: { value: 0 },
      uArcEnds: { value: et },
      uArcShape: { value: zt }
    }, ut = new Ty(J, {
      geometry: new by(J),
      program: new ym(J, { vertex: xy, fragment: Oy, uniforms: Y, depthTest: !1, depthWrite: !1 })
    }), j = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, F = { x: 0, y: 0, over: !1 }, it = { x: 0, y: 0, vx: 0, vy: 0, power: 0 }, Ct = [], Zt = [];
    let E = 0, B = null, Q = 1, tt = null, mt = 0, pt = 0;
    const bt = [
      [1, 1, 1],
      [1, 1, 1]
    ];
    let P = !1, nt = 0, gl = 1, ie = 1, Ll = 0, Tl = performance.now(), Kt = !0;
    const wt = (Ot, st) => {
      Ot.shape = st, Ot.field.image = st.field, Ot.field.width = st.width, Ot.field.height = st.height, Ot.field.needsUpdate = !0, Ot.glow.image = st.glow, Ot.glow.width = st.glowWidth, Ot.glow.height = st.glowHeight, Ot.glow.needsUpdate = !0;
    }, Ol = (Ot, st) => {
      const $t = Math.max(1e-4, Math.min(gl * st.scale / Ot.logoWidth, ie * st.scale / Ot.logoHeight));
      return {
        fit: $t,
        ox: gl / 2 - (Ot.pad + Ot.logoWidth / 2) * $t,
        oy: ie / 2 - (Ot.pad + Ot.logoHeight / 2) * $t,
        unit: Math.max(Ot.logoWidth, Ot.logoHeight) * $t / 100
      };
    }, Be = () => {
      gl = Math.max(1, V.clientWidth), ie = Math.max(1, V.clientHeight), ct.dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(Ay / (gl * ie))), ct.setSize(gl, ie), Y.uResolution.value = [gl, ie];
    }, Il = (Ot) => {
      Ll = 0;
      const st = I.current, $t = Math.min(0.05, Math.max(0, (Ot - Tl) / 1e3));
      Tl = Ot;
      const da = K.current;
      da && da !== ot[E].shape && (B = da), B && Q >= 1 && (ot[E].shape && (E = 1 - E, Q = 0, Ct.length = 0), wt(ot[E], B), B = null), Q < 1 && (Q = Math.min(1, Q + $t / (B ? 0.3 : 1.6)));
      const Nl = ot[E].shape, kl = Q < 1 ? ot[1 - E].shape : null;
      Nl && (mt = Math.min(1, mt + $t / 1.4));
      const ga = mt * mt * (3 - 2 * mt);
      if (Nl && st) {
        const Vt = Ol(Nl, st), Ee = kl ? Ol(kl, st) : Vt, nf = Q * Q * (3 - 2 * Q), uf = Ee.unit + (Vt.unit - Ee.unit) * nf, il = st.interactive && F.over;
        il && it.power < 0.01 && (it.x = F.x, it.y = F.y, it.vx = 0, it.vy = 0), it.vx += ((F.x - it.x) * 120 - it.vx * 19) * $t, it.vy += ((F.y - it.y) * 120 - it.vy * 19) * $t, it.x += it.vx * $t, it.y += it.vy * $t, it.power += ((il ? 1 : 0) - it.power) * (1 - Math.exp(-$t / (il ? 0.3 : 0.55)));
        const ff = j ? 0.2 : 1;
        nt += $t * st.speed * ff;
        for (let St = Ct.length - 1; St >= 0; St--)
          nt - Ct[St].born > Ct[St].life && Ct.splice(St, 1);
        const Dn = (St) => ({
          x: (St.x - Vt.ox) / Vt.fit,
          y: (St.y - Vt.oy) / Vt.fit,
          radius: Math.max(1, st.cursorRadius) / Vt.fit
        });
        if (tt && Q >= 1 && st.arcs > 0)
          for (let St = 0; St < 3 && Ct.length < ra; St++) {
            const Mt = Zs(Nl, nt, Dn(tt));
            Mt && Ct.push(Mt);
          }
        if (tt = null, !j && ga > 0.8 && Q >= 1 && Ct.length < ra) {
          const St = $t * st.speed * st.arcs;
          if (Math.random() < St * 6 * it.power * st.cursorIntensity) {
            const Mt = Zs(Nl, nt, Dn(it));
            Mt && Ct.push(Mt);
          } else if (Math.random() < St * 2.2) {
            const Mt = Zs(Nl, nt, null);
            Mt && Ct.push(Mt);
          }
        }
        for (let St = 0; St < ra; St++) {
          const Mt = St * 4, qt = Ct[St];
          if (!qt) {
            zt[Mt + 1] = 0;
            continue;
          }
          const pl = (nt - qt.born) / qt.life;
          et[Mt] = Vt.ox + qt.ax * Vt.fit, et[Mt + 1] = Vt.oy + qt.ay * Vt.fit, et[Mt + 2] = Vt.ox + qt.bx * Vt.fit, et[Mt + 3] = Vt.oy + qt.by * Vt.fit, zt[Mt] = qt.bow * Vt.fit, zt[Mt + 1] = Math.sin(Math.PI * Math.min(1, Math.max(0, pl))) * ga, zt[Mt + 2] = qt.seed;
        }
        let La = 0, va = 0;
        for (let St = Zt.length - 1; St >= 0; St--)
          (Ot - Zt[St].born) / 1e3 > 2 && Zt.splice(St, 1);
        for (let St = 0; St < Ou; St++) {
          const Mt = St * 4, qt = Zt[St];
          if (!qt) {
            G[Mt + 3] = 0;
            continue;
          }
          const pl = (Ot - qt.born) / 1e3;
          G[Mt] = qt.x, G[Mt + 1] = qt.y, G[Mt + 2] = pl, G[Mt + 3] = 1, La = Math.max(La, Math.exp(-pl * 1.7)), va += Math.exp(-pl * 7);
        }
        const Nu = ot[1 - E];
        Y.tFieldTo.value = ot[E].field, Y.tGlowTo.value = ot[E].glow, Y.tFieldFrom.value = Nu.field, Y.tGlowFrom.value = Nu.glow, Y.uMapTo.value = [Vt.ox, Vt.oy, Vt.fit, Nl.glowOffset], Y.uSizeTo.value = [Nl.width, Nl.height, Nl.glowWidth, Nl.glowHeight], kl && (Y.uMapFrom.value = [Ee.ox, Ee.oy, Ee.fit, kl.glowOffset], Y.uSizeFrom.value = [kl.width, kl.height, kl.glowWidth, kl.glowHeight]), Y.uMorph.value = Q, Y.uUnit.value = uf, Y.uTime.value = nt, Y.uPresence.value = ga, Y.uHover.value = [it.x, it.y, it.power * Math.max(0, st.cursorIntensity)], Y.uHoverRadius.value = Math.max(1, st.cursorRadius), Y.uPulseBoost.value = La, Y.uFlash.value = va;
        const Cu = [j1(st.color), j1(st.glowColor)], cf = P ? 1 - Math.exp(-$t / 0.35) : 1;
        P = !0;
        for (let St = 0; St < 2; St++)
          for (let Mt = 0; Mt < 3; Mt++) bt[St][Mt] += (Cu[St][Mt] - bt[St][Mt]) * cf;
        Y.uColor.value = bt[0].slice(), Y.uGlowColor.value = bt[1].slice(), Y.uIntensity.value = st.intensity, Y.uGlow.value = st.glow, Y.uThickness.value = st.thickness, Y.uStrands.value = Math.max(1, Math.min(6, Math.round(st.strands))), Y.uBend.value = st.bend, Y.uCrackle.value = st.crackle, Y.uFlicker.value = j ? 0 : st.flicker, pt += ((st.theme === "light" ? 1 : 0) - pt) * (1 - Math.exp(-$t / 0.25)), Y.uFill.value = st.fill, Y.uInk.value = pt, ct.render({ scene: ut }), st.onRender?.(rt);
      }
      Kt && (Ll = requestAnimationFrame(Il));
    }, ha = () => {
      Ll || !Kt || (Tl = performance.now(), Ll = requestAnimationFrame(Il));
    }, we = (Ot) => {
      const st = V.getBoundingClientRect();
      F.x = Ot.clientX - st.left, F.y = Ot.clientY - st.top, F.over = !0;
    }, Se = (Ot) => {
      we(Ot), !(!I.current?.interactive || j) && (Zt.push({ x: F.x, y: F.y, born: performance.now() }), Zt.length > Ou && Zt.shift(), tt = { x: F.x, y: F.y });
    }, qe = () => {
      F.over = !1;
    };
    V.addEventListener("pointermove", we), V.addEventListener("pointerdown", Se), V.addEventListener("pointerleave", qe), V.addEventListener("pointercancel", qe);
    const oa = new ResizeObserver(Be);
    oa.observe(V);
    const Xa = new IntersectionObserver(([Ot]) => {
      Kt = Ot.isIntersecting, ha();
    });
    return Xa.observe(V), Be(), ha(), () => {
      Kt = !1, cancelAnimationFrame(Ll), oa.disconnect(), Xa.disconnect(), V.removeEventListener("pointermove", we), V.removeEventListener("pointerdown", Se), V.removeEventListener("pointerleave", qe), V.removeEventListener("pointercancel", qe), J.getExtension("WEBGL_lose_context")?.loseContext(), rt.parentNode && rt.parentNode.removeChild(rt);
    };
  }, []), /* @__PURE__ */ W1.createElement("div", { ref: k, className: `electric-logo ${$}`.trim(), style: L });
}, F1 = new URL("data:text/css;base64,LmVsZWN0cmljLWxvZ28tbW91bnQgewogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgd2lkdGg6IDEwMCU7CiAgICBtaW4taGVpZ2h0OiAxcHg7CiAgICBvdmVyZmxvdzogaGlkZGVuOwp9CgouZWxlY3RyaWMtbG9nbyB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIG92ZXJmbG93OiBoaWRkZW47Cn0=", import.meta.url).href;
if (!document.querySelector(`link[href="${F1}"]`)) {
  const f = document.createElement("link");
  f.rel = "stylesheet", f.href = F1, document.head.append(f);
}
const Yl = (f, u, c) => {
  const s = Number(f.dataset[u]);
  return Number.isFinite(s) ? s : c;
};
document.querySelectorAll("[data-electric-logo]").forEach((f) => {
  f.dataset.mounted !== "true" && (f.dataset.mounted = "true", f.style.height = f.dataset.height || "480px", Iv.createRoot(f).render(
    /* @__PURE__ */ W1.createElement(
      Ny,
      {
        src: f.dataset.src,
        color: f.dataset.color,
        glowColor: f.dataset.glowColor,
        scale: Yl(f, "scale", 0.4),
        strands: Yl(f, "strands", 4),
        bend: Yl(f, "bend", 0.4),
        crackle: Yl(f, "crackle", 0),
        arcs: Yl(f, "arcs", 0.5),
        speed: Yl(f, "speed", 2),
        interactive: f.dataset.interactive !== "false",
        intensity: Yl(f, "intensity", 1),
        glow: Yl(f, "glow", 2),
        thickness: Yl(f, "thickness", 1),
        flicker: Yl(f, "flicker", 0.7),
        fill: Yl(f, "fill", 1),
        cursorIntensity: Yl(f, "cursorIntensity", 0.5),
        cursorRadius: Yl(f, "cursorRadius", 40),
        theme: f.dataset.theme || "dark"
      }
    )
  ));
});
