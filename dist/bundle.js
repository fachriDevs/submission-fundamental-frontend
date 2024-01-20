/* eslint-disable linebreak-style */
/* eslint-disable no-var */
/* eslint-disable prefer-spread */
/* eslint-disable linebreak-style */
/* eslint-disable no-invalid-this */
/* eslint-disable prefer-rest-params */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
(()=>{
  const t={705: ()=>{
    function t(n) {
      return t='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t) {
        return typeof t;
      }:function(t) {
        return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;
      }, t(n);
    } function n(t, n) {
      for (let r=0; r<n.length; r++) {
        const o=n[r]; o.enumerable=o.enumerable||!1, o.configurable=!0, 'value'in o&&(o.writable=!0), Object.defineProperty(t, e(o.key), o);
      }
    } function e(n) {
      const e=function(n, e) {
        if ('object'!=t(n)||!n) return n; const r=n[Symbol.toPrimitive]; if (void 0!==r) {
          const o=r.call(n, e||'default'); if ('object'!=t(o)) return o; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return ('string'===e?String:Number)(n);
      }(n, 'string'); return 'symbol'==t(e)?e:String(e);
    } function r(n) {
      const e=c(); return function() {
        let r; const o=a(n); if (e) {
          const i=a(this).constructor; r=Reflect.construct(o, arguments, i);
        } else r=o.apply(this, arguments); return function(n, e) {
          if (e&&('object'===t(e)||'function'==typeof e)) return e; if (void 0!==e) throw new TypeError('Derived constructors may only return object or undefined'); return function(t) {
            if (void 0===t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return t;
          }(n);
        }(this, r);
      };
    } function o(t) {
      const n='function'==typeof Map?new Map:void 0; return o=function(t) {
        if (null===t||!function(t) {
          try {
            return -1!==Function.toString.call(t).indexOf('[native code]');
          } catch (n) {
            return 'function'==typeof t;
          }
        }(t)) return t; if ('function'!=typeof t) throw new TypeError('Super expression must either be null or a function'); if (void 0!==n) {
          if (n.has(t)) return n.get(t); n.set(t, e);
        } function e() {
          return i(t, arguments, a(this).constructor);
        } return e.prototype=Object.create(t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), u(e, t);
      }, o(t);
    } function i(t, n, e) {
      return i=c()?Reflect.construct.bind():function(t, n, e) {
        const r=[null]; r.push.apply(r, n); const o=new(Function.bind.apply(t, r)); return e&&u(o, e.prototype), o;
      }, i.apply(null, arguments);
    } function c() {
      if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (t) {
        return !1;
      }
    } function u(t, n) {
      return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t, n) {
        return t.__proto__=n, t;
      }, u(t, n);
    } function a(t) {
      return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t) {
        return t.__proto__||Object.getPrototypeOf(t);
      }, a(t);
    } const f=function(t) {
      !function(t, n) {
        if ('function'!=typeof n&&null!==n) throw new TypeError('Super expression must either be null or a function'); t.prototype=Object.create(n&&n.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), Object.defineProperty(t, 'prototype', {writable: !1}), n&&u(t, n);
      }(a, t); let e; let o; let i; const c=r(a); function a() {
        let t; return function(t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this, a), (t=c.call(this)).shadowDOM=t.attachShadow({mode: 'open'}), t;
      } return e=a, (o=[{key: 'connectedCallback', value: function() {
        this.render();
      }}, {key: 'render', value: function() {
        this.shadowDOM.innerHTML='\n    <style>\n    * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    }\n    :host {\n        display: block;\n        width: 100%;\n        background-color: #FFE2E2;\n        color: rgb(115, 113, 142);\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      }\n      h2 {\n        padding: 16px;\n        text-align:center;\n      }\n    </style>\n    <h2>Drink Finder</h2>\n    ';
      }}])&&n(e.prototype, o), i&&n(e, i), Object.defineProperty(e, 'prototype', {writable: !1}), a;
    }(o(HTMLElement)); customElements.define('app-bar', f);
  }, 275: ()=>{
    function t(n) {
      return t='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t) {
        return typeof t;
      }:function(t) {
        return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;
      }, t(n);
    } function n(t, n) {
      for (let r=0; r<n.length; r++) {
        const o=n[r]; o.enumerable=o.enumerable||!1, o.configurable=!0, 'value'in o&&(o.writable=!0), Object.defineProperty(t, e(o.key), o);
      }
    } function e(n) {
      const e=function(n, e) {
        if ('object'!=t(n)||!n) return n; const r=n[Symbol.toPrimitive]; if (void 0!==r) {
          const o=r.call(n, e||'default'); if ('object'!=t(o)) return o; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return ('string'===e?String:Number)(n);
      }(n, 'string'); return 'symbol'==t(e)?e:String(e);
    } function r(n) {
      const e=c(); return function() {
        let r; const o=a(n); if (e) {
          const i=a(this).constructor; r=Reflect.construct(o, arguments, i);
        } else r=o.apply(this, arguments); return function(n, e) {
          if (e&&('object'===t(e)||'function'==typeof e)) return e; if (void 0!==e) throw new TypeError('Derived constructors may only return object or undefined'); return function(t) {
            if (void 0===t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return t;
          }(n);
        }(this, r);
      };
    } function o(t) {
      const n='function'==typeof Map?new Map:void 0; return o=function(t) {
        if (null===t||!function(t) {
          try {
            return -1!==Function.toString.call(t).indexOf('[native code]');
          } catch (n) {
            return 'function'==typeof t;
          }
        }(t)) return t; if ('function'!=typeof t) throw new TypeError('Super expression must either be null or a function'); if (void 0!==n) {
          if (n.has(t)) return n.get(t); n.set(t, e);
        } function e() {
          return i(t, arguments, a(this).constructor);
        } return e.prototype=Object.create(t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), u(e, t);
      }, o(t);
    } function i(t, n, e) {
      return i=c()?Reflect.construct.bind():function(t, n, e) {
        const r=[null]; r.push.apply(r, n); const o=new(Function.bind.apply(t, r)); return e&&u(o, e.prototype), o;
      }, i.apply(null, arguments);
    } function c() {
      if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (t) {
        return !1;
      }
    } function u(t, n) {
      return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t, n) {
        return t.__proto__=n, t;
      }, u(t, n);
    } function a(t) {
      return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t) {
        return t.__proto__||Object.getPrototypeOf(t);
      }, a(t);
    } const f=function(t) {
      !function(t, n) {
        if ('function'!=typeof n&&null!==n) throw new TypeError('Super expression must either be null or a function'); t.prototype=Object.create(n&&n.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), Object.defineProperty(t, 'prototype', {writable: !1}), n&&u(t, n);
      }(a, t); let e; let o; let i; const c=r(a); function a() {
        let t; return function(t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this, a), (t=c.call(this)).shadowDOM=t.attachShadow({mode: 'open'}), t;
      } return e=a, (o=[{key: 'drink', set: function(t) {
        this._drink=t, this.render();
      }}, {key: 'render', value: function() {
        this.shadowDOM.innerHTML='\n        <style>\n          * {\n          margin:0px;\n          padding: 0px;\n          box-sizing: border-box;\n          }\n          :host {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            gap: 20px;\n            margin: 20px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            overflow: hidden;\n            background-color: white;\n          }\n          .drink-info {\n            padding: 24px;\n          }\n          .drink-info > h2 {\n            font-weight: lighter;\n          }\n          .drink-info > p {\n            margin-top: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 10;\n          }\n          .drink-photo{\n            max-height:300px;\n            width:100%;\n            \n          }\n          @media screen and (max-width: 300px) {\n            :host {\n              display: block;\n              gap: 5px;\n              margin: 5px;\n              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n              border-radius: 10px;\n              overflow: hidden;\n            }\n            .drink-info {\n              padding: 24px;\n            }\n            .drink-info > h2 {\n              font-weight: lighter;\n            }\n            .drink-info > p {\n              margin-top: 5px;\n              overflow: hidden;\n              text-overflow: ellipsis;\n              display: -webkit-box;\n              -webkit-box-orient: vertical;\n              -webkit-line-clamp: 10;\n            }\n            .drink-photo{\n              max-height:150px;\n              width:100%;\n              \n            }\n        </style>\n        <img class="drink-photo" src="'.concat(this._drink.strDrinkThumb, '" alt="Photo">\n        <div class="drink-info">\n          <h2>').concat(this._drink.strDrink, '</h2>\n          <p>').concat(this._drink.strInstructions, '</p>\n        </div>\n      ');
      }}])&&n(e.prototype, o), i&&n(e, i), Object.defineProperty(e, 'prototype', {writable: !1}), a;
    }(o(HTMLElement)); customElements.define('drink-item', f);
  }, 998: ()=>{
    function t(n) {
      return t='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t) {
        return typeof t;
      }:function(t) {
        return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;
      }, t(n);
    } function n(t, n) {
      for (let r=0; r<n.length; r++) {
        const o=n[r]; o.enumerable=o.enumerable||!1, o.configurable=!0, 'value'in o&&(o.writable=!0), Object.defineProperty(t, e(o.key), o);
      }
    } function e(n) {
      const e=function(n, e) {
        if ('object'!=t(n)||!n) return n; const r=n[Symbol.toPrimitive]; if (void 0!==r) {
          const o=r.call(n, e||'default'); if ('object'!=t(o)) return o; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return ('string'===e?String:Number)(n);
      }(n, 'string'); return 'symbol'==t(e)?e:String(e);
    } function r(n) {
      const e=c(); return function() {
        let r; const o=a(n); if (e) {
          const i=a(this).constructor; r=Reflect.construct(o, arguments, i);
        } else r=o.apply(this, arguments); return function(n, e) {
          if (e&&('object'===t(e)||'function'==typeof e)) return e; if (void 0!==e) throw new TypeError('Derived constructors may only return object or undefined'); return function(t) {
            if (void 0===t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return t;
          }(n);
        }(this, r);
      };
    } function o(t) {
      const n='function'==typeof Map?new Map:void 0; return o=function(t) {
        if (null===t||!function(t) {
          try {
            return -1!==Function.toString.call(t).indexOf('[native code]');
          } catch (n) {
            return 'function'==typeof t;
          }
        }(t)) return t; if ('function'!=typeof t) throw new TypeError('Super expression must either be null or a function'); if (void 0!==n) {
          if (n.has(t)) return n.get(t); n.set(t, e);
        } function e() {
          return i(t, arguments, a(this).constructor);
        } return e.prototype=Object.create(t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), u(e, t);
      }, o(t);
    } function i(t, n, e) {
      return i=c()?Reflect.construct.bind():function(t, n, e) {
        const r=[null]; r.push.apply(r, n); const o=new(Function.bind.apply(t, r)); return e&&u(o, e.prototype), o;
      }, i.apply(null, arguments);
    } function c() {
      if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (t) {
        return !1;
      }
    } function u(t, n) {
      return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t, n) {
        return t.__proto__=n, t;
      }, u(t, n);
    } function a(t) {
      return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t) {
        return t.__proto__||Object.getPrototypeOf(t);
      }, a(t);
    } const f=function(t) {
      !function(t, n) {
        if ('function'!=typeof n&&null!==n) throw new TypeError('Super expression must either be null or a function'); t.prototype=Object.create(n&&n.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), Object.defineProperty(t, 'prototype', {writable: !1}), n&&u(t, n);
      }(a, t); let e; let o; let i; const c=r(a); function a() {
        let t; return function(t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this, a), (t=c.call(this)).shadowDOM=t.attachShadow({mode: 'open'}), t;
      } return e=a, (o=[{key: 'connectedCallback', value: function() {
        this.render();
      }}, {key: 'clickEvent', set: function(t) {
        this._clickEvent=t, this.render();
      }}, {key: 'keyEvent', set: function(t) {
        this._keyEvent=t, this.render();
      }}, {key: 'value', get: function() {
        return this.shadowDOM.querySelector('#searchElement').value;
      }}, {key: 'render', value: function() {
        this.shadowDOM.innerHTML='\n        <style>\n        .search-container {\n            max-width: 800px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            padding: 16px;\n            border-radius: 10px;\n            display: flex;\n            position: sticky;\n            top: 0;\n            margin-bottom: 20px;\n          }\n          .search-container > input {\n            width: 75%;\n            padding: 16px;\n            border: 0;\n            border-bottom: 1px solid #8785A2;\n            font-familyfont-weight: bold;\n            backrground-color:white;\n            font-color: white;\n          }\n          .search-container > input:focus {\n            outline: 0;\n            border-bottom: 2px solid #8785A2;\n          }\n          .search-container > input:focus::placeholder {\n            font-weight: bold;\n          }\n          .search-container > input::placeholder {\n            color: #8785A2;\n            font-weight: normal;\n          }\n          .search-container > button {\n            width: 23%;\n            cursor: pointer;\n            margin-left: auto;\n            padding: 16px;\n            background-color: #8785A2;\n            color: white;\n            border: 0;\n            text-transform: uppercase;\n            border-radius: 10px;\n          }\n          @media screen and (max-width: 550px) {\n            .search-container {\n              flex-direction: column;\n              position: static;\n            }\n            .search-container > input {\n              width: 100%;\n              margin-bottom: 12px;\n            }\n            .search-container > button {\n              width: 100%;\n            }\n          }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Search drink" id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n      ', this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent), this.shadowDOM.querySelector('#searchElement').addEventListener('keypress', this._keyEvent);
      }}])&&n(e.prototype, o), i&&n(e, i), Object.defineProperty(e, 'prototype', {writable: !1}), a;
    }(o(HTMLElement)); customElements.define('search-bar', f);
  }}; const n={}; function e(r) {
    const o=n[r]; if (void 0!==o) return o.exports; const i=n[r]={exports: {}}; return t[r](i, i.exports, e), i.exports;
  }(()=>{
    'use strict'; e(705), e(275); function t(n) {
      return t='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t) {
        return typeof t;
      }:function(t) {
        return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;
      }, t(n);
    } function n(t, n) {
      for (let e=0; e<n.length; e++) {
        const o=n[e]; o.enumerable=o.enumerable||!1, o.configurable=!0, 'value'in o&&(o.writable=!0), Object.defineProperty(t, r(o.key), o);
      }
    } function r(n) {
      const e=function(n, e) {
        if ('object'!=t(n)||!n) return n; const r=n[Symbol.toPrimitive]; if (void 0!==r) {
          const o=r.call(n, e||'default'); if ('object'!=t(o)) return o; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return ('string'===e?String:Number)(n);
      }(n, 'string'); return 'symbol'==t(e)?e:String(e);
    } function o(n) {
      const e=u(); return function() {
        let r; const o=f(n); if (e) {
          const i=f(this).constructor; r=Reflect.construct(o, arguments, i);
        } else r=o.apply(this, arguments); return function(n, e) {
          if (e&&('object'===t(e)||'function'==typeof e)) return e; if (void 0!==e) throw new TypeError('Derived constructors may only return object or undefined'); return function(t) {
            if (void 0===t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return t;
          }(n);
        }(this, r);
      };
    } function i(t) {
      const n='function'==typeof Map?new Map:void 0; return i=function(t) {
        if (null===t||!function(t) {
          try {
            return -1!==Function.toString.call(t).indexOf('[native code]');
          } catch (n) {
            return 'function'==typeof t;
          }
        }(t)) return t; if ('function'!=typeof t) throw new TypeError('Super expression must either be null or a function'); if (void 0!==n) {
          if (n.has(t)) return n.get(t); n.set(t, e);
        } function e() {
          return c(t, arguments, f(this).constructor);
        } return e.prototype=Object.create(t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), a(e, t);
      }, i(t);
    } function c(t, n, e) {
      return c=u()?Reflect.construct.bind():function(t, n, e) {
        const r=[null]; r.push.apply(r, n); const o=new(Function.bind.apply(t, r)); return e&&a(o, e.prototype), o;
      }, c.apply(null, arguments);
    } function u() {
      if ('undefined'==typeof Reflect||!Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ('function'==typeof Proxy) return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (t) {
        return !1;
      }
    } function a(t, n) {
      return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t, n) {
        return t.__proto__=n, t;
      }, a(t, n);
    } function f(t) {
      return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t) {
        return t.__proto__||Object.getPrototypeOf(t);
      }, f(t);
    } const l=function(t) {
      !function(t, n) {
        if ('function'!=typeof n&&null!==n) throw new TypeError('Super expression must either be null or a function'); t.prototype=Object.create(n&&n.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), Object.defineProperty(t, 'prototype', {writable: !1}), n&&a(t, n);
      }(u, t); let e; let r; let i; const c=o(u); function u() {
        let t; return function(t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this, u), (t=c.call(this)).shadowDOM=t.attachShadow({mode: 'open'}), t;
      } return e=u, (r=[{key: 'drinks', set: function(t) {
        this._drinks=t, this.render();
      }}, {key: 'renderError', value: function(t) {
        this.shadowDOM.innerHTML='\n        <style>\n        .placeholder {\n          font-weight: lighter;\n          color: rgba(0,0,0,0.5);\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n        </style>\n        ', this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t, '</h2>');
      }}, {key: 'render', value: function() {
        const t=this; this.shadowDOM.innerHTML='', this._drinks.forEach((function(n) {
          const e=document.createElement('drink-item'); e.drink=n, t.shadowDOM.appendChild(e);
        }));
      }}])&&n(e.prototype, r), i&&n(e, i), Object.defineProperty(e, 'prototype', {writable: !1}), u;
    }(i(HTMLElement)); customElements.define('drink-list', l); e(998); function p(t) {
      return p='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t) {
        return typeof t;
      }:function(t) {
        return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;
      }, p(t);
    } function s(t, n) {
      for (let e=0; e<n.length; e++) {
        const r=n[e]; r.enumerable=r.enumerable||!1, r.configurable=!0, 'value'in r&&(r.writable=!0), Object.defineProperty(t, y(r.key), r);
      }
    } function y(t) {
      const n=function(t, n) {
        if ('object'!=p(t)||!t) return t; const e=t[Symbol.toPrimitive]; if (void 0!==e) {
          const r=e.call(t, n||'default'); if ('object'!=p(r)) return r; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return ('string'===n?String:Number)(t);
      }(t, 'string'); return 'symbol'==p(n)?n:String(n);
    } const d=function() {
      function t() {
        !function(t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this, t);
      } let n; let e; let r; return n=t, r=[{key: 'searchDrink', value: function(t) {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='.concat(t)).then((function(t) {
          return t.json();
        })).then((function(n) {
          return n.drinks?Promise.resolve(n.drinks):Promise.reject(''.concat(t, ' is not found'));
        }));
      }}], (e=null)&&s(n.prototype, e), r&&s(n, r), Object.defineProperty(n, 'prototype', {writable: !1}), t;
    }(); const b=function() {
      const t=document.querySelector('search-bar'); const n=document.querySelector('drink-list'); const e=function() {
        const n=t.value.trim(); ''!==n&&d.searchDrink(n).then(r).catch(o);
      }; var r=function(t) {
        n.drinks=t;
      }; var o=function(t) {
        n.renderError(t);
      }; t.clickEvent=e, t.keyEvent=function(n) {
        'Enter'===n.key&&(''!==t.value.trim()&&e());
      };
    }; document.addEventListener('DOMContentLoaded', b);
  })();
})();
