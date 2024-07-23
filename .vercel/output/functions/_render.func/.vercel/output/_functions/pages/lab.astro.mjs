/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CEAtNuIX.mjs';
import { $ as $$Index$2 } from '../chunks/index_BTnB4-Ge.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BR-3L3oq.mjs';
import { i as islands } from '../chunks/index_CQ5uknD3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://devvoyage.io");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { framework, slug, title, topic } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group h-[270px] w-full cursor-pointer rounded-md bg-gray-100 p-[30px] shadow-xl transition-all large:h-[300px] large:w-[292px] large:hover:scale-105"> <a${addAttribute(`/lab/${slug}`, "href")} class="flex h-full w-full flex-col justify-between"> <div class="flex flex-col gap-[10px]"> <div class="flex h-[64px] w-[64px] items-center justify-center rounded-[50%] bg-gray-700"> ${renderComponent($$result, "Image", $$Image, { "src": `/images/frameworks/${framework}.svg`, "width": 38, "height": 38, "alt": `${framework} icon.` })} </div> <h2 class="text-md line-clamp-2 font-semibold medium:group-hover:text-primary large:line-clamp-3"> ${title} </h2> <p class="line-clamp-2 text-sm large:line-clamp-3">${topic}</p> </div> <div class="flex w-full justify-end"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "arrow-forward-outline" })} </div> </a> </article>`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Card/Lab/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Laboratory";
  const pageDescription = `It is a laboratory that freely tests the UI.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$2, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-6xl font-bold dark:text-white">Lab</h1> <section class="mt-20 flex flex-wrap justify-center gap-[28px] medium:items-start medium:justify-start"> ${islands.reverse().map((island) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Index$1, { "framework": island.framework, "slug": island.slug, "title": island.title, "topic": island.topic })}`;
  })} </section> ` })}`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/lab/index.astro", void 0);

const $$file = "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/lab/index.astro";
const $$url = "/lab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
