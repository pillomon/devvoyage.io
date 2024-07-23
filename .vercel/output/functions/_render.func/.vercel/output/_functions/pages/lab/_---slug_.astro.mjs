/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CEAtNuIX.mjs';
import { $ as $$Index } from '../../chunks/index_BTnB4-Ge.mjs';
import { i as islands } from '../../chunks/index_CQ5uknD3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://devvoyage.io");
const getStaticPaths = () => {
  return islands.map(({ framework, slug, title, topic, component }) => {
    return {
      params: { slug },
      props: { framework, title, topic, component }
    };
  });
};
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { title, topic, component: Component } = Astro2.props;
  const pageTitle = title;
  const pageDescription = topic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto mb-12 w-full max-w-[992px] px-[30px]"> <p class="flex w-full flex-col items-start justify-start gap-2 rounded-lg bg-gray-400 p-[30px]"> <span class="inline-block">💡</span> <span class="text-md font-normal large:text-lg">${topic}</span> </p> </div> <div class="w-full px-[30px] py-6"> ${renderComponent($$result2, "Component", Component, {})} </div> <div class="mx-auto mt-[50px] w-full max-w-[992px] px-[30px]"> <a${addAttribute(`https://github.com/pillomon/devvoyage.io/tree/main/src/islands/${slug}`, "href")} target="_blank" rel="noopenner noreferer" class="flex w-fit items-center gap-1 rounded-[6px] border-[1px] border-solid border-[#7a828e] bg-[#272B33] p-[16px] text-lg text-white medium:text-2xl">View code
${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "open-outline", "class": "text-[16px] text-white medium:text-[20px]" })}</a> </div> ` })}`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/lab/[...slug].astro", void 0);

const $$file = "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/lab/[...slug].astro";
const $$url = "/lab/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
