import * as me from "react";
import ke, { useRef as nt, useDebugValue as Xt, createElement as un, useContext as ln, useState as ot, useEffect as yr } from "react";
function fn(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var a = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var Et = { exports: {} }, Le = {};
const br = /* @__PURE__ */ fn(me);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function dn() {
  if (Kt)
    return Le;
  Kt = 1;
  var e = br, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, u, d) {
    var p, h = {}, m = null, b = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (p in u)
      o.call(u, p) && !i.hasOwnProperty(p) && (h[p] = u[p]);
    if (f && f.defaultProps)
      for (p in u = f.defaultProps, u)
        h[p] === void 0 && (h[p] = u[p]);
    return { $$typeof: t, type: f, key: m, ref: b, props: h, _owner: a.current };
  }
  return Le.Fragment = r, Le.jsx = c, Le.jsxs = c, Le;
}
var We = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function pn() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = br, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), _ = Symbol.iterator, O = "@@iterator";
    function F(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = _ && n[_] || n[O];
      return typeof s == "function" ? s : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(n) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          l[v - 1] = arguments[v];
        P("error", n, l);
      }
    }
    function P(n, s, l) {
      {
        var v = k.ReactDebugCurrentFrame, C = v.getStackAddendum();
        C !== "" && (s += "%s", l = l.concat([C]));
        var I = l.map(function(x) {
          return String(x);
        });
        I.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, I);
      }
    }
    var R = !1, A = !1, w = !1, y = !1, X = !1, K;
    K = Symbol.for("react.module.reference");
    function De(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || X || n === a || n === d || n === p || y || n === b || R || A || w || typeof n == "object" && n !== null && (n.$$typeof === m || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === K || n.getModuleId !== void 0));
    }
    function Me(n, s, l) {
      var v = n.displayName;
      if (v)
        return v;
      var C = s.displayName || s.name || "";
      return C !== "" ? l + "(" + C + ")" : l;
    }
    function be(n) {
      return n.displayName || "Context";
    }
    function L(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return be(s) + ".Consumer";
          case c:
            var l = n;
            return be(l._context) + ".Provider";
          case u:
            return Me(n, n.render, "ForwardRef");
          case h:
            var v = n.displayName || null;
            return v !== null ? v : L(n.type) || "Memo";
          case m: {
            var C = n, I = C._payload, x = C._init;
            try {
              return L(x(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, U = 0, ze, we, J, se, ce, W, Ee;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function xe() {
      {
        if (U === 0) {
          ze = console.log, we = console.info, J = console.warn, se = console.error, ce = console.group, W = console.groupCollapsed, Ee = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        U++;
      }
    }
    function fe() {
      {
        if (U--, U === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, n, {
              value: ze
            }),
            info: B({}, n, {
              value: we
            }),
            warn: B({}, n, {
              value: J
            }),
            error: B({}, n, {
              value: se
            }),
            group: B({}, n, {
              value: ce
            }),
            groupCollapsed: B({}, n, {
              value: W
            }),
            groupEnd: B({}, n, {
              value: Ee
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = k.ReactCurrentDispatcher, Q;
    function G(n, s, l) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (C) {
            var v = C.stack.trim().match(/\n( *(at )?)/);
            Q = v && v[1] || "";
          }
        return `
` + Q + n;
      }
    }
    var de = !1, re;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      re = new ee();
    }
    function Nt(n, s) {
      if (!n || de)
        return "";
      {
        var l = re.get(n);
        if (l !== void 0)
          return l;
      }
      var v;
      de = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = ue.current, ue.current = null, xe();
      try {
        if (s) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (ne) {
              v = ne;
            }
            Reflect.construct(n, [], x);
          } else {
            try {
              x.call();
            } catch (ne) {
              v = ne;
            }
            n.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            v = ne;
          }
          n();
        }
      } catch (ne) {
        if (ne && v && typeof ne.stack == "string") {
          for (var S = ne.stack.split(`
`), Y = v.stack.split(`
`), $ = S.length - 1, N = Y.length - 1; $ >= 1 && N >= 0 && S[$] !== Y[N]; )
            N--;
          for (; $ >= 1 && N >= 0; $--, N--)
            if (S[$] !== Y[N]) {
              if ($ !== 1 || N !== 1)
                do
                  if ($--, N--, N < 0 || S[$] !== Y[N]) {
                    var q = `
` + S[$].replace(" at new ", " at ");
                    return n.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", n.displayName)), typeof n == "function" && re.set(n, q), q;
                  }
                while ($ >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        de = !1, ue.current = I, fe(), Error.prepareStackTrace = C;
      }
      var Re = n ? n.displayName || n.name : "", Ht = Re ? G(Re) : "";
      return typeof n == "function" && re.set(n, Ht), Ht;
    }
    function Wr(n, s, l) {
      return Nt(n, !1);
    }
    function Yr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function Be(n, s, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Nt(n, Yr(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case d:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return Wr(n.render);
          case h:
            return Be(n.type, s, l);
          case m: {
            var v = n, C = v._payload, I = v._init;
            try {
              return Be(I(C), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, Dt = {}, Mt = k.ReactDebugCurrentFrame;
    function Ge(n) {
      if (n) {
        var s = n._owner, l = Be(n.type, n._source, s ? s.type : null);
        Mt.setExtraStackFrame(l);
      } else
        Mt.setExtraStackFrame(null);
    }
    function Vr(n, s, l, v, C) {
      {
        var I = Function.call.bind(Ue);
        for (var x in n)
          if (I(n, x)) {
            var S = void 0;
            try {
              if (typeof n[x] != "function") {
                var Y = Error((v || "React class") + ": " + l + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              S = n[x](s, x, v, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              S = $;
            }
            S && !(S instanceof Error) && (Ge(C), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", l, x, typeof S), Ge(null)), S instanceof Error && !(S.message in Dt) && (Dt[S.message] = !0, Ge(C), g("Failed %s type: %s", l, S.message), Ge(null));
          }
      }
    }
    var zr = Array.isArray;
    function lt(n) {
      return zr(n);
    }
    function Br(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
      }
    }
    function Ur(n) {
      try {
        return Ft(n), !1;
      } catch {
        return !0;
      }
    }
    function Ft(n) {
      return "" + n;
    }
    function Lt(n) {
      if (Ur(n))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(n)), Ft(n);
    }
    var Fe = k.ReactCurrentOwner, Gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wt, Yt, ft;
    ft = {};
    function qr(n) {
      if (Ue.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Hr(n) {
      if (Ue.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Xr(n, s) {
      if (typeof n.ref == "string" && Fe.current && s && Fe.current.stateNode !== s) {
        var l = L(Fe.current.type);
        ft[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Fe.current.type), n.ref), ft[l] = !0);
      }
    }
    function Kr(n, s) {
      {
        var l = function() {
          Wt || (Wt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Jr(n, s) {
      {
        var l = function() {
          Yt || (Yt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Zr = function(n, s, l, v, C, I, x) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: l,
        props: x,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Qr(n, s, l, v, C) {
      {
        var I, x = {}, S = null, Y = null;
        l !== void 0 && (Lt(l), S = "" + l), Hr(s) && (Lt(s.key), S = "" + s.key), qr(s) && (Y = s.ref, Xr(s, C));
        for (I in s)
          Ue.call(s, I) && !Gr.hasOwnProperty(I) && (x[I] = s[I]);
        if (n && n.defaultProps) {
          var $ = n.defaultProps;
          for (I in $)
            x[I] === void 0 && (x[I] = $[I]);
        }
        if (S || Y) {
          var N = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && Kr(x, N), Y && Jr(x, N);
        }
        return Zr(n, S, Y, C, v, Fe.current, x);
      }
    }
    var dt = k.ReactCurrentOwner, Vt = k.ReactDebugCurrentFrame;
    function _e(n) {
      if (n) {
        var s = n._owner, l = Be(n.type, n._source, s ? s.type : null);
        Vt.setExtraStackFrame(l);
      } else
        Vt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function ht(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function zt() {
      {
        if (dt.current) {
          var n = L(dt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function en(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function tn(n) {
      {
        var s = zt();
        if (!s) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Ut(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = tn(s);
        if (Bt[l])
          return;
        Bt[l] = !0;
        var v = "";
        n && n._owner && n._owner !== dt.current && (v = " It was passed a child from " + L(n._owner.type) + "."), _e(n), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, v), _e(null);
      }
    }
    function Gt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var l = 0; l < n.length; l++) {
            var v = n[l];
            ht(v) && Ut(v, s);
          }
        else if (ht(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var C = F(n);
          if (typeof C == "function" && C !== n.entries)
            for (var I = C.call(n), x; !(x = I.next()).done; )
              ht(x.value) && Ut(x.value, s);
        }
      }
    }
    function rn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          l = s.propTypes;
        else
          return;
        if (l) {
          var v = L(s);
          Vr(l, n.props, "prop", v, n);
        } else if (s.PropTypes !== void 0 && !pt) {
          pt = !0;
          var C = L(s);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(n) {
      {
        for (var s = Object.keys(n.props), l = 0; l < s.length; l++) {
          var v = s[l];
          if (v !== "children" && v !== "key") {
            _e(n), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        n.ref !== null && (_e(n), g("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function qt(n, s, l, v, C, I) {
      {
        var x = De(n);
        if (!x) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = en(C);
          Y ? S += Y : S += zt();
          var $;
          n === null ? $ = "null" : lt(n) ? $ = "array" : n !== void 0 && n.$$typeof === t ? ($ = "<" + (L(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof n, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, S);
        }
        var N = Qr(n, s, l, C, I);
        if (N == null)
          return N;
        if (x) {
          var q = s.children;
          if (q !== void 0)
            if (v)
              if (lt(q)) {
                for (var Re = 0; Re < q.length; Re++)
                  Gt(q[Re], n);
                Object.freeze && Object.freeze(q);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gt(q, n);
        }
        return n === o ? nn(N) : rn(N), N;
      }
    }
    function on(n, s, l) {
      return qt(n, s, l, !0);
    }
    function an(n, s, l) {
      return qt(n, s, l, !1);
    }
    var sn = an, cn = on;
    We.Fragment = o, We.jsx = sn, We.jsxs = cn;
  }()), We;
}
process.env.NODE_ENV === "production" ? Et.exports = dn() : Et.exports = pn();
var V = Et.exports, z = function() {
  return z = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, z.apply(this, arguments);
};
function Te(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, i; o < a; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function hn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gn = /* @__PURE__ */ hn(
  function(e) {
    return mn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), j = "-ms-", Ve = "-moz-", T = "-webkit-", wr = "comm", at = "rule", Ot = "decl", vn = "@import", Er = "@keyframes", yn = "@layer", bn = Math.abs, At = String.fromCharCode, St = Object.assign;
function wn(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function Sr(e) {
  return e.trim();
}
function oe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, r) {
  return e.replace(t, r);
}
function Je(e, t) {
  return e.indexOf(t);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function te(e) {
  return e.length;
}
function xr(e) {
  return e.length;
}
function Ye(e, t) {
  return t.push(e), e;
}
function En(e, t) {
  return e.map(t).join("");
}
function Zt(e, t) {
  return e.filter(function(r) {
    return !oe(r, t);
  });
}
var it = 1, Oe = 1, _r = 0, H = 0, D = 0, $e = "";
function st(e, t, r, o, a, i, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: it, column: Oe, length: c, return: "", siblings: f };
}
function le(e, t) {
  return St(st("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ce(e) {
  for (; e.root; )
    e = le(e.root, { children: [e] });
  Ye(e, e.siblings);
}
function Sn() {
  return D;
}
function xn() {
  return D = H > 0 ? M($e, --H) : 0, Oe--, D === 10 && (Oe = 1, it--), D;
}
function Z() {
  return D = H < _r ? M($e, H++) : 0, Oe++, D === 10 && (Oe = 1, it++), D;
}
function ge() {
  return M($e, H);
}
function Ze() {
  return H;
}
function ct(e, t) {
  return Pe($e, e, t);
}
function xt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _n(e) {
  return it = Oe = 1, _r = te($e = e), H = 0, [];
}
function Rn(e) {
  return $e = "", e;
}
function mt(e) {
  return Sr(ct(H - 1, _t(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cn(e) {
  for (; (D = ge()) && D < 33; )
    Z();
  return xt(e) > 2 || xt(D) > 3 ? "" : " ";
}
function kn(e, t) {
  for (; --t && Z() && !(D < 48 || D > 102 || D > 57 && D < 65 || D > 70 && D < 97); )
    ;
  return ct(e, Ze() + (t < 6 && ge() == 32 && Z() == 32));
}
function _t(e) {
  for (; Z(); )
    switch (D) {
      case e:
        return H;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _t(D);
        break;
      case 40:
        e === 41 && _t(e);
        break;
      case 92:
        Z();
        break;
    }
  return H;
}
function Tn(e, t) {
  for (; Z() && e + D !== 47 + 10; )
    if (e + D === 42 + 42 && ge() === 47)
      break;
  return "/*" + ct(t, H - 1) + "*" + At(e === 47 ? e : Z());
}
function Pn(e) {
  for (; !xt(ge()); )
    Z();
  return ct(e, H);
}
function On(e) {
  return Rn(Qe("", null, null, null, [""], e = _n(e), 0, [0], e));
}
function Qe(e, t, r, o, a, i, c, f, u) {
  for (var d = 0, p = 0, h = c, m = 0, b = 0, _ = 0, O = 1, F = 1, k = 1, g = 0, P = "", R = a, A = i, w = o, y = P; F; )
    switch (_ = g, g = Z()) {
      case 40:
        if (_ != 108 && M(y, h - 1) == 58) {
          Je(y += E(mt(g), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += mt(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Cn(_);
        break;
      case 92:
        y += kn(Ze() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            Ye(An(Tn(Z(), Ze()), t, r, u), u);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * O:
        f[d++] = te(y) * k;
      case 125 * O:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            F = 0;
          case 59 + p:
            k == -1 && (y = E(y, /\f/g, "")), b > 0 && te(y) - h && Ye(b > 32 ? er(y + ";", o, r, h - 1, u) : er(E(y, " ", "") + ";", o, r, h - 2, u), u);
            break;
          case 59:
            y += ";";
          default:
            if (Ye(w = Qt(y, t, r, d, p, a, f, P, R = [], A = [], h, i), i), g === 123)
              if (p === 0)
                Qe(y, t, w, w, R, i, h, f, A);
              else
                switch (m === 99 && M(y, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qe(e, w, w, o && Ye(Qt(e, w, w, 0, 0, a, f, P, a, R = [], h, A), A), a, A, h, f, o ? R : A);
                    break;
                  default:
                    Qe(y, w, w, w, [""], A, 0, f, A);
                }
        }
        d = p = b = 0, O = k = 1, P = y = "", h = c;
        break;
      case 58:
        h = 1 + te(y), b = _;
      default:
        if (O < 1) {
          if (g == 123)
            --O;
          else if (g == 125 && O++ == 0 && xn() == 125)
            continue;
        }
        switch (y += At(g), g * O) {
          case 38:
            k = p > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            f[d++] = (te(y) - 1) * k, k = 1;
            break;
          case 64:
            ge() === 45 && (y += mt(Z())), m = ge(), p = h = te(P = y += Pn(Ze())), g++;
            break;
          case 45:
            _ === 45 && te(y) == 2 && (O = 0);
        }
    }
  return i;
}
function Qt(e, t, r, o, a, i, c, f, u, d, p, h) {
  for (var m = a - 1, b = a === 0 ? i : [""], _ = xr(b), O = 0, F = 0, k = 0; O < o; ++O)
    for (var g = 0, P = Pe(e, m + 1, m = bn(F = c[O])), R = e; g < _; ++g)
      (R = Sr(F > 0 ? b[g] + " " + P : E(P, /&\f/g, b[g]))) && (u[k++] = R);
  return st(e, t, r, a === 0 ? at : f, u, d, p, h);
}
function An(e, t, r, o) {
  return st(e, t, r, wr, At(Sn()), Pe(e, 2, -2), 0, o);
}
function er(e, t, r, o, a) {
  return st(e, t, r, Ot, Pe(e, 0, o), Pe(e, o + 1, -1), o, a);
}
function Rr(e, t, r) {
  switch (wn(e, t)) {
    case 5103:
      return T + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return T + e + e;
    case 4789:
      return Ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return T + e + Ve + e + j + e + e;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return T + e + j + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return T + e + j + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return T + e + j + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return T + e + j + e + e;
    case 6165:
      return T + e + j + "flex-" + e + e;
    case 5187:
      return T + e + E(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + j + "flex-$1$2") + e;
    case 5443:
      return T + e + j + "flex-item-" + E(e, /flex-|-self/g, "") + (oe(e, /flex-|baseline/) ? "" : j + "grid-row-" + E(e, /flex-|-self/g, "")) + e;
    case 4675:
      return T + e + j + "flex-line-pack" + E(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return T + e + j + E(e, "shrink", "negative") + e;
    case 5292:
      return T + e + j + E(e, "basis", "preferred-size") + e;
    case 6060:
      return T + "box-" + E(e, "-grow", "") + T + e + j + E(e, "grow", "positive") + e;
    case 4554:
      return T + E(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, T + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + e + e;
    case 4200:
      if (!oe(e, /flex-|baseline/))
        return j + "grid-column-align" + Pe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return j + E(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, oe(o.props, /grid-\w+-end/);
      }) ? ~Je(e + (r = r[t].value), "span") ? e : j + E(e, "-start", "") + e + j + "grid-row-span:" + (~Je(r, "span") ? oe(r, /\d+/) : +oe(r, /\d+/) - +oe(e, /\d+/)) + ";" : j + E(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return oe(o.props, /grid-\w+-start/);
      }) ? e : j + E(E(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, T + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (te(e) - 1 - t > 6)
        switch (M(e, t + 1)) {
          case 109:
            if (M(e, t + 4) !== 45)
              break;
          case 102:
            return E(e, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + Ve + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Je(e, "stretch") ? Rr(E(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return E(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, u, d) {
        return j + a + ":" + i + d + (c ? j + a + "-span:" + (f ? u : +u - +i) + d : "") + e;
      });
    case 4949:
      if (M(e, t + 6) === 121)
        return E(e, ":", ":" + T) + e;
      break;
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return E(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + j + "$2box$3") + e;
        case 100:
          return E(e, ":", ":" + j) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return E(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tt(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function In(e, t, r, o) {
  switch (e.type) {
    case yn:
      if (e.children.length)
        break;
    case vn:
    case Ot:
      return e.return = e.return || e.value;
    case wr:
      return "";
    case Er:
      return e.return = e.value + "{" + tt(e.children, o) + "}";
    case at:
      if (!te(e.value = e.props.join(",")))
        return "";
  }
  return te(r = tt(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function jn(e) {
  var t = xr(e);
  return function(r, o, a, i) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, i) || "";
    return c;
  };
}
function $n(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Nn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ot:
        e.return = Rr(e.value, e.length, r);
        return;
      case Er:
        return tt([le(e, { value: E(e.value, "@", "@" + T) })], o);
      case at:
        if (e.length)
          return En(r = e.props, function(a) {
            switch (oe(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ce(le(e, { props: [E(a, /:(read-\w+)/, ":" + Ve + "$1")] })), Ce(le(e, { props: [a] })), St(e, { props: Zt(r, o) });
                break;
              case "::placeholder":
                Ce(le(e, { props: [E(a, /:(plac\w+)/, ":" + T + "input-$1")] })), Ce(le(e, { props: [E(a, /:(plac\w+)/, ":" + Ve + "$1")] })), Ce(le(e, { props: [E(a, /:(plac\w+)/, j + "input-$1")] })), Ce(le(e, { props: [a] })), St(e, { props: Zt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Dn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ye = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", It = typeof window < "u" && "HTMLElement" in window, Mn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), tr = /invalid hook call/i, qe = /* @__PURE__ */ new Set(), Fn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], u = 1; u < arguments.length; u++)
          f[u - 1] = arguments[u];
        tr.test(c) ? (i = !1, qe.delete(o)) : a.apply(void 0, Te([c], f, !1));
      }, nt(), i && !qe.has(o) && (console.warn(o), qe.add(o));
    } catch (c) {
      tr.test(c.message) && qe.delete(o);
    } finally {
      console.error = a;
    }
  }
}, ut = Object.freeze([]), Ae = Object.freeze({});
function Ln(e, t, r) {
  return r === void 0 && (r = Ae), e.theme !== r.theme && e.theme || t || r.theme;
}
var Rt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Yn = /(^-|-$)/g;
function rr(e) {
  return e.replace(Wn, "-").replace(Yn, "");
}
var Vn = /(a)(d)/gi, nr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ct(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = nr(t % 52) + r;
  return (nr(t % 52) + r).replace(Vn, "$1-$2");
}
var gt, pe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Cr = function(e) {
  return pe(5381, e);
};
function zn(e) {
  return Ct(Cr(e) >>> 0);
}
function kr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function vt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Tr = typeof Symbol == "function" && Symbol.for, Pr = Tr ? Symbol.for("react.memo") : 60115, Bn = Tr ? Symbol.for("react.forward_ref") : 60112, Un = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Gn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Or = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, qn = ((gt = {})[Bn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, gt[Pr] = Or, gt);
function or(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Pr ? Or : "$$typeof" in e ? qn[e.$$typeof] : Un;
  var t;
}
var Hn = Object.defineProperty, Xn = Object.getOwnPropertyNames, ar = Object.getOwnPropertySymbols, Kn = Object.getOwnPropertyDescriptor, Jn = Object.getPrototypeOf, ir = Object.prototype;
function Ar(e, t, r) {
  if (typeof t != "string") {
    if (ir) {
      var o = Jn(t);
      o && o !== ir && Ar(e, o, r);
    }
    var a = Xn(t);
    ar && (a = a.concat(ar(t)));
    for (var i = or(e), c = or(t), f = 0; f < a.length; ++f) {
      var u = a[f];
      if (!(u in Gn || r && r[u] || c && u in c || i && u in i)) {
        var d = Kn(t, u);
        try {
          Hn(e, u, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ie(e) {
  return typeof e == "function";
}
function jt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function sr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function je(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function kt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !je(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = kt(e[o], t[o]);
  else if (je(t))
    for (var o in t)
      e[o] = kt(e[o], t[o]);
  return e;
}
function $t(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Zn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Qn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Ne(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Qn.apply(void 0, Te([Zn[e]], t, !1)).trim());
}
var eo = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        if ((i <<= 1) < 0)
          throw Ne(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), u = (c = 0, r.length); c < u; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), et = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), yt = 1, He = function(e) {
  if (et.has(e))
    return et.get(e);
  for (; rt.has(yt); )
    yt++;
  var t = yt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Ne(16, "".concat(t));
  return et.set(e, t), rt.set(t, e), t;
}, to = function(e, t) {
  et.set(e, t), rt.set(t, e);
}, ro = "style[".concat(ye, "][").concat("data-styled-version", '="').concat("6.0.8", '"]'), no = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), oo = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(t, o);
}, ao = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var u = f.match(no);
      if (u) {
        var d = 0 | parseInt(u[1], 10), p = u[2];
        d !== 0 && (to(p, d), oo(e, p, u[3]), e.getTag().insertRules(d, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function io() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ir = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var u = Array.from(f.querySelectorAll("style[".concat(ye, "]")));
    return u[u.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(ye, "active"), o.setAttribute("data-styled-version", "6.0.8");
  var c = io();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, so = function() {
  function e(t) {
    this.element = Ir(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Ne(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), co = function() {
  function e(t) {
    this.element = Ir(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), uo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), cr = It, lo = { isServer: !It, useCSSOMInjection: !Mn }, jr = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ae), r === void 0 && (r = {});
    var a = this;
    this.options = z(z({}, lo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && It && cr && (cr = !1, function(i) {
      for (var c = document.querySelectorAll(ro), f = 0, u = c.length; f < u; f++) {
        var d = c[f];
        d && d.getAttribute(ye) !== "active" && (ao(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), $t(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, u = "", d = function(h) {
          var m = function(k) {
            return rt.get(k);
          }(h);
          if (m === void 0)
            return "continue";
          var b = i.names.get(m), _ = c.getGroup(h);
          if (b === void 0 || _.length === 0)
            return "continue";
          var O = "".concat(ye, ".g").concat(h, '[id="').concat(m, '"]'), F = "";
          b !== void 0 && b.forEach(function(k) {
            k.length > 0 && (F += "".concat(k, ","));
          }), u += "".concat(_).concat(O, '{content:"').concat(F, '"}').concat(`/*!sc*/
`);
        }, p = 0; p < f; p++)
          d(p);
        return u;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return He(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(z(z({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new uo(a) : o ? new so(a) : new co(a);
    }(this.options), new eo(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (He(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(He(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(He(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), fo = /&/g, po = /^\s*\/\/.*$/gm;
function $r(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = $r(r.children, t)), r;
  });
}
function ho(e) {
  var t, r, o, a = e === void 0 ? Ae : e, i = a.options, c = i === void 0 ? Ae : i, f = a.plugins, u = f === void 0 ? ut : f, d = function(m, b, _) {
    return _ === r || _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(t) : m;
  }, p = u.slice();
  p.push(function(m) {
    m.type === at && m.value.includes("&") && (m.props[0] = m.props[0].replace(fo, r).replace(o, d));
  }), c.prefix && p.push(Nn), p.push(In);
  var h = function(m, b, _, O) {
    b === void 0 && (b = ""), _ === void 0 && (_ = ""), O === void 0 && (O = "&"), t = O, r = b, o = new RegExp("\\".concat(r, "\\b"), "g");
    var F = m.replace(po, ""), k = On(_ || b ? "".concat(_, " ").concat(b, " { ").concat(F, " }") : F);
    c.namespace && (k = $r(k, c.namespace));
    var g = [];
    return tt(k, jn(p.concat($n(function(P) {
      return g.push(P);
    })))), g;
  };
  return h.hash = u.length ? u.reduce(function(m, b) {
    return b.name || Ne(15), pe(m, b.name);
  }, 5381).toString() : "", h;
}
var mo = new jr(), Tt = ho(), Nr = ke.createContext({ shouldForwardProp: void 0, styleSheet: mo, stylis: Tt });
Nr.Consumer;
ke.createContext(void 0);
function ur() {
  return ln(Nr);
}
var lr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Tt);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, $t(this, function() {
      throw Ne(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Tt), this.name + t.hash;
  }, e;
}(), go = function(e) {
  return e >= "A" && e <= "Z";
};
function fr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    go(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Dr = function(e) {
  return e == null || e === !1 || e === "";
}, Mr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Dr(i) && (Array.isArray(i) && i.isCss || Ie(i) ? o.push("".concat(fr(a), ":"), i, ";") : je(i) ? o.push.apply(o, Te(Te(["".concat(a, " {")], Mr(i), !1), ["}"], !1)) : o.push("".concat(fr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Dn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function ve(e, t, r, o) {
  if (Dr(e))
    return [];
  if (jt(e))
    return [".".concat(e.styledComponentId)];
  if (Ie(e)) {
    if (!Ie(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof lr || je(a) || a === null || console.error("".concat(kr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ve(a, t, r, o);
  }
  var i;
  return e instanceof lr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : je(e) ? Mr(e) : Array.isArray(e) ? Array.prototype.concat.apply(ut, e.map(function(c) {
    return ve(c, t, r, o);
  })) : [e.toString()];
}
function vo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ie(r) && !jt(r))
      return !1;
  }
  return !0;
}
var yo = Cr("6.0.8"), bo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && vo(t), this.componentId = r, this.baseHash = pe(yo, r), this.baseStyle = o, jr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = he(a, this.staticRulesId);
      else {
        var i = sr(ve(this.rules, t, r, o)), c = Ct(pe(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = he(a, c), this.staticRulesId = c;
      }
    else {
      for (var u = pe(this.baseHash, o.hash), d = "", p = 0; p < this.rules.length; p++) {
        var h = this.rules[p];
        if (typeof h == "string")
          d += h, process.env.NODE_ENV !== "production" && (u = pe(u, h));
        else if (h) {
          var m = sr(ve(h, t, r, o));
          u = pe(u, m + p), d += m;
        }
      }
      if (d) {
        var b = Ct(u >>> 0);
        r.hasNameForId(this.componentId, b) || r.insertRules(this.componentId, b, o(d, ".".concat(b), void 0, this.componentId)), a = he(a, b);
      }
    }
    return a;
  }, e;
}(), Fr = ke.createContext(void 0);
Fr.Consumer;
var bt = {}, dr = /* @__PURE__ */ new Set();
function wo(e, t, r) {
  var o = jt(e), a = e, i = !vt(e), c = t.attrs, f = c === void 0 ? ut : c, u = t.componentId, d = u === void 0 ? function(R, A) {
    var w = typeof R != "string" ? "sc" : rr(R);
    bt[w] = (bt[w] || 0) + 1;
    var y = "".concat(w, "-").concat(zn("6.0.8" + w + bt[w]));
    return A ? "".concat(A, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : u, p = t.displayName, h = p === void 0 ? function(R) {
    return vt(R) ? "styled.".concat(R) : "Styled(".concat(kr(R), ")");
  }(e) : p, m = t.displayName && t.componentId ? "".concat(rr(t.displayName), "-").concat(t.componentId) : t.componentId || d, b = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, _ = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var O = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var F = t.shouldForwardProp;
      _ = function(R, A) {
        return O(R, A) && F(R, A);
      };
    } else
      _ = O;
  }
  var k = new bo(r, m, o ? a.componentStyle : void 0);
  function g(R, A) {
    return function(w, y, X) {
      var K = w.attrs, De = w.componentStyle, Me = w.defaultProps, be = w.foldedComponentIds, L = w.styledComponentId, B = w.target, U = ke.useContext(Fr), ze = ur(), we = w.shouldForwardProp || ze.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Xt(L);
      var J = function(xe, fe, ue) {
        for (var Q, G = z(z({}, fe), { className: void 0, theme: ue }), de = 0; de < xe.length; de += 1) {
          var re = Ie(Q = xe[de]) ? Q(G) : Q;
          for (var ee in re)
            G[ee] = ee === "className" ? he(G[ee], re[ee]) : ee === "style" ? z(z({}, G[ee]), re[ee]) : re[ee];
        }
        return fe.className && (G.className = he(G.className, fe.className)), G;
      }(K, y, Ln(y, U, Me) || Ae), se = J.as || B, ce = {};
      for (var W in J)
        J[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" || (W === "forwardedAs" ? ce.as = J.forwardedAs : we && !we(W, se) || (ce[W] = J[W], we || process.env.NODE_ENV !== "development" || gn(W) || dr.has(W) || !Rt.has(se) || (dr.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(xe, fe) {
        var ue = ur(), Q = xe.generateAndInjectStyles(fe, ue.styleSheet, ue.stylis);
        return process.env.NODE_ENV !== "production" && Xt(Q), Q;
      }(De, J);
      process.env.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ee);
      var Se = he(be, L);
      return Ee && (Se += " " + Ee), J.className && (Se += " " + J.className), ce[vt(se) && !Rt.has(se) ? "class" : "className"] = Se, ce.ref = X, un(se, ce);
    }(P, R, A);
  }
  process.env.NODE_ENV !== "production" && (g.displayName = h);
  var P = ke.forwardRef(g);
  return P.attrs = b, P.componentStyle = k, P.shouldForwardProp = _, process.env.NODE_ENV !== "production" && (P.displayName = h), P.foldedComponentIds = o ? he(a.foldedComponentIds, a.styledComponentId) : "", P.styledComponentId = m, P.target = o ? a.target : e, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = o ? function(A) {
      for (var w = [], y = 1; y < arguments.length; y++)
        w[y - 1] = arguments[y];
      for (var X = 0, K = w; X < K.length; X++)
        kt(A, K[X], !0);
      return A;
    }({}, a.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Fn(h, m), P.warnTooManyClasses = function(R, A) {
    var w = {}, y = !1;
    return function(X) {
      if (!y && (w[X] = !0, Object.keys(w).length >= 200)) {
        var K = A ? ' with the id of "'.concat(A, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(K, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, w = {};
      }
    };
  }(h, m)), $t(P, function() {
    return ".".concat(P.styledComponentId);
  }), i && Ar(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), P;
}
function pr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var hr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ae(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ie(e) || je(e)) {
    var o = e;
    return hr(ve(pr(ut, Te([o], t, !0))));
  }
  var a = e;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string" ? ve(a) : hr(ve(pr(a, t)));
}
function Pt(e, t, r) {
  if (r === void 0 && (r = Ae), !t)
    throw Ne(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, ae.apply(void 0, Te([a], i, !1)));
  };
  return o.attrs = function(a) {
    return Pt(e, t, z(z({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Pt(e, t, z(z({}, r), a));
  }, o;
}
var Lr = function(e) {
  return Pt(wo, e);
}, ie = Lr;
Rt.forEach(function(e) {
  ie[e] = Lr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xe = "__sc-".concat(ye, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Xe] || (window[Xe] = 0), window[Xe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xe] += 1);
const Eo = (e) => /* @__PURE__ */ me.createElement("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ me.createElement("circle", { cx: 20, cy: 20, r: 19.5, transform: "rotate(-180 20 20)", fill: "white", fillOpacity: 0.4, stroke: "#454545" }), /* @__PURE__ */ me.createElement("path", { d: "M14.9761 20.7809C14.4757 20.3805 14.4757 19.6195 14.9761 19.2191L22.3753 13.2998C23.0301 12.7759 24 13.2421 24 14.0806V25.9194C24 26.7579 23.0301 27.2241 22.3753 26.7002L14.9761 20.7809Z", fill: "#454545" })), So = (e) => /* @__PURE__ */ me.createElement("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ me.createElement("circle", { cx: 20, cy: 20, r: 19.5, fill: "white", fillOpacity: 0.4, stroke: "#454545" }), /* @__PURE__ */ me.createElement("path", { d: "M25.0239 19.2191C25.5243 19.6195 25.5243 20.3805 25.0239 20.7809L17.6247 26.7002C16.9699 27.2241 16 26.7579 16 25.9194V14.0806C16 13.2421 16.9699 12.7759 17.6247 13.2998L25.0239 19.2191Z", fill: "#454545" })), xo = ({
  autoplay: e,
  $autoplayTime: t,
  childrenListLength: r,
  pos: o,
  setPos: a
}) => {
  const [i, c] = ot(e), f = nt(null);
  return yr(() => (r < 2 && c(!1), i && (f.current = setInterval(
    () => {
      o <= r - 2 ? a((d) => d + 1) : a(0);
    },
    t < 1e3 ? 1e3 : t
  )), !i && f.current && clearInterval(f.current), () => {
    f.current && clearInterval(f.current);
  }), [r, o, a, t, i]), {
    isPlaying: i,
    toggleAutoplay: () => {
      c((d) => !d);
    }
  };
}, _o = (e = [], t = 1) => {
  const r = window.innerWidth, o = e.concat(r).sort((f, u) => u - f), [a, i] = ot(
    o.length > 1 ? o.length - o.indexOf(r) : t
  ), c = nt(null);
  return yr(() => {
    c.current = o.map(
      (u) => `(max-width: ${u}px)`
    );
    const f = (u) => {
      i(u);
    };
    return c.current.forEach((u, d) => {
      const p = window.matchMedia(u);
      if (c.current) {
        const h = c.current;
        p.addEventListener(
          "change",
          () => f(h.length - d)
        );
      }
    }), () => {
      if (c.current) {
        const u = c.current;
        u.forEach((d, p) => {
          window.matchMedia(d).removeEventListener(
            "change",
            () => f(u.length - p)
          );
        });
      }
    };
  }, []), { elementsCount: a };
};
let Ke = !1;
const mr = 10, Ro = 4, Co = ({ childrenListLength: e, pos: t, setPos: r }) => {
  const [o, a] = ot(null), i = nt(null), c = (m) => {
    Ke || (t < e - 1 && m < -mr && (Ke = !0, r(t + 1)), t > 0 && m > mr && (Ke = !0, r(t - 1)), !i.current && (i.current = setTimeout(() => {
      Ke = !1, i.current && (clearTimeout(i.current), i.current = null);
    }, 150)));
  };
  return {
    pos: t,
    increasePos: () => {
      t < e - 1 && r(t + 1);
    },
    decreasePos: () => {
      t > 0 && r(t - 1);
    },
    moveToSettedPos: (m) => {
      r(m);
    },
    handleTouchMove: (m) => {
      const b = m.touches[0];
      if (a(b), !o)
        return;
      const _ = b.pageX - o.pageX, O = b.pageY - o.pageY;
      Math.abs(O) > Ro || c(_);
    },
    handleTouchEnd: () => {
      a(null);
    }
  };
}, ko = (e, t) => typeof t == "string" ? t : t[e] || "#e4e4e4", wt = (e, t) => {
  if (t > 1) {
    const r = Math.ceil(e.length / t);
    return e.filter((o, a) => a < r);
  }
  return e;
};
function Do({
  width: e = 400,
  height: t = 400,
  $simpleTab: r = !1,
  $isNotTabBoxShow: o = !1,
  $tabBoxHeight: a = t / 10,
  $tabBoxPosition: i = "top",
  $elementsOneTab: c = 1,
  $tabColor: f = "#e4e4e4",
  $focusColor: u = "#316fc4",
  responsive: d = !0,
  swiper: p = !1,
  swipeable: h = !1,
  autoplay: m = !1,
  $autoplayTime: b = 5e3,
  $autoplayButton: _ = !1,
  $elementsMediaQueries: O = [],
  as: F = "div",
  children: k
}) {
  const g = ke.Children.toArray(
    k
  ), P = !o && g.length > c, [R, A] = ot(0), { elementsCount: w } = _o(
    O,
    c
  ), {
    increasePos: y,
    decreasePos: X,
    moveToSettedPos: K,
    handleTouchMove: De,
    handleTouchEnd: Me
  } = Co({
    childrenListLength: wt(
      g,
      w
    ).length,
    pos: R,
    setPos: A
  }), { isPlaying: be, toggleAutoplay: L } = xo({
    autoplay: m,
    $autoplayTime: b,
    childrenListLength: wt(
      g,
      w
    ).length,
    pos: R,
    setPos: A
  });
  return /* @__PURE__ */ V.jsxs(
    To,
    {
      as: F,
      width: e,
      responsive: d,
      $tabBoxPosition: i,
      children: [
        P && /* @__PURE__ */ V.jsx(Oo, { $simpleTab: r, $tabBoxHeight: a, children: wt(g, w).map(
          (B, U) => B && /* @__PURE__ */ V.jsx(
            Ao,
            {
              idx: U,
              pos: R,
              $tabColor: ko(U, f),
              $focusColor: u,
              width: e,
              $tabBoxHeight: a,
              $childrenLength: Math.ceil(
                g.length / c
              ),
              $simpleTab: r,
              onClick: () => K(U),
              children: !r && (B.props.label || U + 1)
            },
            `${B.props.label}, ${U + 1}`
          )
        ) }),
        /* @__PURE__ */ V.jsx(
          Po,
          {
            ...h && {
              onTouchMove: De,
              onTouchEnd: Me
            },
            width: e,
            height: t,
            $childrenLength: g.length,
            pos: R,
            responsive: d,
            $elementsOneTab: w,
            children: k
          }
        ),
        p && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
          /* @__PURE__ */ V.jsx(
            Io,
            {
              $tabBoxHeight: a,
              $isNotTabBoxShow: o,
              onClick: X,
              children: /* @__PURE__ */ V.jsx(Eo, {})
            }
          ),
          /* @__PURE__ */ V.jsx(
            jo,
            {
              $tabBoxHeight: a,
              $isNotTabBoxShow: o,
              onClick: y,
              children: /* @__PURE__ */ V.jsx(So, {})
            }
          )
        ] }),
        _ && g.length > 1 && /* @__PURE__ */ V.jsx($o, { children: be ? /* @__PURE__ */ V.jsx(vr, { onClick: L, children: "||" }) : /* @__PURE__ */ V.jsx(vr, { onClick: L, children: "▶️" }) })
      ]
    }
  );
}
const To = ie.div`
  width: ${({ width: e }) => `${e}px`};
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: ${({ $tabBoxPosition: e }) => e === "top" ? "column" : "column-reverse"};

  // responsive가 true 이면 입력 받은 width 값 보다 뷰포트가 작아질 때 뷰포트에 맞게 width를 설정합니다.
  ${({ responsive: e, width: t }) => e && ae`
      @media (max-width: ${t}px) {
        width: 100%;
      }
    `}
`, gr = (e, t) => typeof e == "number" && t > 1 ? e / t : typeof e == "string" && t > 1 ? `calc(${e} / ${t})` : e, Po = ie.div`
  display: flex;

  // 사용자가 입력한 <Tabs />의 width 값을 <Tab /> 컴포넌트 개수만큼 곱하여 Tab Section의 width를 설정합니다. 따라서 overflow 됩니다.
  width: ${({ width: e, $childrenLength: t }) => `${e * t}px`};
  height: ${({ height: e }) => `${e}px`};

  // 사용자가 입력한 width 값 보다 <Tab /> 컴포넌트 개수만큼 overflow 되었으므로 width * index 만큼 transform 하여 요소의 위치로 이동합니다. (전환 효과)
  transform: ${({ width: e, pos: t }) => `translateX(${-e * t}px)`};
  transition: 0.3s ease transform;

  ${({ responsive: e, width: t, $childrenLength: r, pos: o }) => e && ae`
      @media (max-width: ${t}px) {
        width: calc(100vw * ${r});
        height: auto;
        transform: translateX(calc(-100vw * ${o}));
      }
    `}

  // <Tabs /> 컴포넌트에 입력한 width와 <Tab /> 컴포넌트 width를 동일하게 합니다.
  & > * {
    width: ${({ width: e, $elementsOneTab: t }) => gr(e, t)}px;

    ${({ responsive: e, width: t, $elementsOneTab: r }) => e && ae`
        @media (max-width: ${t}px) {
          width: ${gr("100vw", r)};
        }
      `}
  }
`, Oo = ie.div`
  display: flex;
  align-items: center;

  // 기본값은 height / 10 입니다. 하지만 사용자가 직접 지정할 수도 있게 해두었습니다.
  height: ${({ $tabBoxHeight: e }) => `${e}px`};
  overflow: auto;

  // simpleTab 모드에서는 TabButton이 작아지므로 가운데 정렬하도록 합니다.
  ${({ $simpleTab: e }) => e && ae`
      justify-content: center;
    `}
`, Ao = ie.button`
  width: ${({ width: e, $childrenLength: t }) => `${e / t}px`};
  height: inherit;
  padding: 0.2rem 1rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ $tabColor: e }) => e};

  // simpleTab 모드일 때 탭 박스 대신 원이 생성됩니다. 해당 원의 크기를 지정합니다.
  ${({ $simpleTab: e, $tabBoxHeight: t }) => e && ae`
      padding: 0;
      width: ${t / 2}px;
      height: ${t / 2}px;
      border-radius: 50%;
    `}

  // simpleTab 모드에서 원들이 가운데 정렬되므로 각 요소의 margin을 설정합니다.
  ${({ $simpleTab: e }) => e && ae`
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    `}

    // simpleTab 모드가 아닐때, 포커스 된 탭 박스 하단 밑줄 구현부입니다.
    ${({ idx: e, pos: t, $focusColor: r }) => e === t && ae`
      border-bottom: 2px solid ${r};
    `}

    // simpleTab 모드 일 때, 포커스 된 원 배경색 구현부입니다.
    ${({ $simpleTab: e, idx: t, pos: r, $focusColor: o }) => t === r && e && ae`
      border-bottom: 0;
      border: 2px solid ${o};
    `}
`, Io = ie.div`
  cursor: pointer;
  position: absolute;
  top: ${({ $tabBoxHeight: e, $isNotTabBoxShow: t }) => t ? "50%" : `calc(50% + ${e}px / 2)`};
  left: 1%;
  transform: ${({ $tabBoxHeight: e, $isNotTabBoxShow: t }) => t ? "translateY(-50%)" : `translateY(calc(-50% - ${e}px))`};

  @media (max-width: 744px) {
    display: none;
  }
`, jo = ie.div`
  cursor: pointer;
  position: absolute;
  top: ${({ $tabBoxHeight: e, $isNotTabBoxShow: t }) => t ? "50%" : `calc(50% + ${e}px / 2)`};
  right: 1%;
  transform: ${({ $tabBoxHeight: e, $isNotTabBoxShow: t }) => t ? "translateY(-50%)" : `translateY(calc(-50% - ${e}px))`};

  @media (max-width: 744px) {
    display: none;
  }
`, $o = ie.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 12%;
`, vr = ie.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: rgba(149, 149, 149, 0.8);
  border: 1px solid rgba(149, 149, 149, 0.8);
  width: 64px;
  height: 32px;
  cursor: pointer;
`;
function Mo({ children: e }) {
  return /* @__PURE__ */ V.jsx("div", { children: e });
}
export {
  Do as Swiper,
  Mo as Tab
};
