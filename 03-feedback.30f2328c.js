var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("kEUo3");let a={email:"",message:""};const l={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")};l.form.addEventListener("input",(0,n.throttle)((function({target:e}){const{name:t,value:o}=e;a[t]=o;const r=JSON.stringify(a);localStorage.setItem("feedback-form-state",r)}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));a=e,l.input.value=(null==e?void 0:e.email)||"",l.textarea.value=(null==e?void 0:e.message)||""}();
//# sourceMappingURL=03-feedback.30f2328c.js.map
