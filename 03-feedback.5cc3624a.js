var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,d=Math.min,p=function(){return c.Date.now()};function s(e,t,n){var o,r,i,u,f,c,a=0,s=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,a=t,u=e.apply(i,n)}function j(e){return a=e,f=setTimeout(h,t),s?g(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||b&&e-a>=i}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return b?d(n,i-(e-a)):n}(e))}function w(e){return f=void 0,m&&o?g(e):(o=r=void 0,u)}function x(){var e=p(),n=T(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return j(c);if(b)return f=setTimeout(h,t),g(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=y(t)||0,v(n)&&(s=!!n.leading,i=(b="maxWait"in n)?l(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?u:w(p())},x}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(v(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=v(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}document.querySelector(".feedback-form"),document.querySelector(".feedback-form textarea"),document.querySelector("input");populateTextarea();
//# sourceMappingURL=03-feedback.5cc3624a.js.map