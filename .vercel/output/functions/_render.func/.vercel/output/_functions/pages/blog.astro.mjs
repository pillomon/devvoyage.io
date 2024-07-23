/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CEAtNuIX.mjs';
import { $ as $$Index$2 } from '../chunks/index_BTnB4-Ge.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BR-3L3oq.mjs';
import dayjs from 'dayjs';
import { g as getCollection } from '../chunks/_astro_content_BObSOxGw.mjs';
export { renderers } from '../renderers.mjs';

const BG01 = new Proxy({"src":"/_astro/bg-01.CZEr1jJ7.jpg","width":1920,"height":3413,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pillsang/Desktop/Pilsang/devvoyage.io/public/images/bg-01.jpg";
							}
							
							return target[name];
						}
					});

const BG02 = new Proxy({"src":"/_astro/bg-02._iXFuKDs.jpg","width":1920,"height":2840,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pillsang/Desktop/Pilsang/devvoyage.io/public/images/bg-02.jpg";
							}
							
							return target[name];
						}
					});

const BG03 = new Proxy({"src":"/_astro/bg-03.BsFQjFk-.jpg","width":1920,"height":2880,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pillsang/Desktop/Pilsang/devvoyage.io/public/images/bg-03.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://devvoyage.io");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { title, thumbnail, createdDate, modifiedDate, topic, slug } = Astro2.props.data;
  const formattedCreatedDate = dayjs(createdDate).format("MMM DD, YYYY");
  const backUpImageData = [BG01, BG02, BG03];
  const alternativeImage = backUpImageData[Math.floor(Math.random() * backUpImageData.length)];
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`article-${slug}`, "id")} class="group w-full"> <a${addAttribute(`/blog/${slug}`, "href")} class="flex w-full flex-col items-start justify-between gap-[20px] medium:flex-row medium:items-center"> <picture class="flex h-[110px] w-[140px] items-center justify-center overflow-hidden rounded-[22px] medium:h-[172px] medium:w-[208px] extra:h-[244px] extra:w-[288px]"> ${thumbnail ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": thumbnail.src, "alt": thumbnail?.alt, "inferSize": true, "class": "h-full w-full object-cover" })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": alternativeImage, "alt": "thumbnail", "class": "h-full w-full object-cover" })}`} </picture> <div class="flex flex-1 flex-col items-start justify-start gap-2"> <p class="flex w-full items-center justify-start"> <span class="text-xs medium:text-sm extra:text-base dark:text-white">${formattedCreatedDate}</span> </p> <h2 class="medium:group-hover:text-primary line-clamp-2 w-full text-xl font-semibold transition-all medium:text-2xl extra:text-3xl dark:text-white"> ${title} </h2> <p class="extra:text-large w-full text-xs text-gray-500 small:text-sm dark:text-gray-400"> <span class="line-clamp-3">${topic}</span> </p> </div> </a> </article>`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Card/Blog/index.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = `Blog`;
  const pageDescription = `Share technology topics or development experience know-how that you are interested in.`;
  const blogEntries = await getCollection("blog");
  const isProd = true;
  const isDev = false;
  return renderTemplate`${renderComponent($$result, "Layout", $$Index$2, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-6xl font-bold dark:text-white">Blog</h1> <section class="mt-20 flex flex-col items-start justify-start gap-10"> ${blogEntries.reverse().map((post) => {
    if (!post.data.isDraft && isProd || isDev)
      return renderTemplate`${renderComponent($$result2, "Card", $$Index$1, { "data": {
        title: post.data.title,
        thumbnail: post.data.thumbnail,
        createdDate: post.data.createdDate,
        modifiedDate: post.data.modifiedDate,
        topic: post.data.topic,
        slug: post.slug
      } })}`;
  })} </section> ` })}`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/blog/index.astro", void 0);
const $$file = "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
