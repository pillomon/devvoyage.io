/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CEAtNuIX.mjs';
import { $ as $$Index$1 } from '../chunks/index_BTnB4-Ge.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home";
  const pageDescription = "It tells the story of the development experience of Pillsang SUNG.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$1, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col items-start justify-start gap-10"> <li> <a href="/blog" class="medium:highlighter-animation text-6xl font-bold dark:text-white">Blog</a> </li> <li> <a href="/lab" class="medium:highlighter-animation text-6xl font-bold dark:text-white">Lab</a> </li> </ul> ` })}`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/index.astro", void 0);

const $$file = "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
