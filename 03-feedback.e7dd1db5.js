!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n,a=o("1WSnx"),l="feedback-form-state",i={email:"",message:""},u={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")};u.form.addEventListener("input",(0,a.throttle)((function(e){var t=e.target,r=t.name,o=t.value;i[r]=o;var n=JSON.stringify(i);localStorage.setItem(l,n)}),500)),n=JSON.parse(localStorage.getItem(l)),i=n,u.input.value=(null==n?void 0:n.email)||"",u.textarea.value=(null==n?void 0:n.message)||""}();
//# sourceMappingURL=03-feedback.e7dd1db5.js.map
