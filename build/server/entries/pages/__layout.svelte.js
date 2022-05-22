import { c as create_ssr_component, v as validate_component } from "../../chunks/index-525aa5c6.js";
var app = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-lg"}" href="${"/"}">Home</a>
    <a class="${"mx-4 text-lg"}" href="${"/about"}">About</a></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"p-8 max-w-6xl mx-auto"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
