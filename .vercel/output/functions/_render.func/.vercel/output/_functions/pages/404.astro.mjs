/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CEAtNuIX.mjs';
import { $ as $$Index } from '../chunks/index_BTnB4-Ge.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = ``;
  const pageDescription = ``;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col items-center gap-10"> ${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "alert-circle-outline", "class": "text-[48px] text-secondary dark:text-white" })} <h1 class="text-4xl font-bold dark:text-white">찾을 수 없음</h1> <span class="text-2xl dark:text-white"><a href="/" class="underline underline-offset-2 hover:no-underline">홈</a>으로 이동</span> </div> ` })}`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/404.astro", void 0);

const $$file = "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
