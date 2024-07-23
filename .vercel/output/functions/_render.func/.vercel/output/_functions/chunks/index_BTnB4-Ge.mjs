import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderSlot, i as renderHead } from './astro/server_CEAtNuIX.mjs';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                          */

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
const FormatLib = {
  cn
};

const $$Astro$2 = createAstro("https://devvoyage.io");
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { pathname } = Astro2.url;
  const { cn } = FormatLib;
  const paths = pathname.split("/");
  const isBlogPost = !!(paths[1] === "blog" && paths[2]);
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(cn(
    pathname === "/blog" ? "sticky left-0 top-0 flex flex-col" : "",
    "w-full dark:bg-gray-800 bg-white"
  ), "class")}> <div class="mx-auto flex h-[60px] w-full max-w-[992px] items-center justify-between px-[30px]"> <a href="/"><span class="text-2xl font-bold dark:text-white">de<strong class="text-primary">vv</strong>oyage</span></a> <ul class="flex items-center gap-2"> <li class="flex"> <a href="https://github.com/pillomon" target="_blank" rel="noreferrer noopener" class="flex"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-github", "class": "text-[26px] text-secondary medium:text-[30px] dark:text-white" })} </a> </li> <li class="flex"> <a href="https://www.linkedin.com/in/pillsang-sung-b4aba417a/" target="_blank" rel="noreferrer noopener" class="flex"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-linkedin", "class": "text-[26px] text-[rgb(13_91_186)] medium:text-[30px]" })} </a> </li> </ul> </div> ${isBlogPost ? renderTemplate`<div class="h-[5px] w-full bg-transparent"> <div id="scroll-indicator" class="h-full w-0 bg-primary transition-all"></div> </div>` : void 0} </header> `;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Templates/Header/index.astro", void 0);

const $$Astro$1 = createAstro("https://devvoyage.io");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { pathname } = Astro2.url;
  const { cn } = FormatLib;
  const paths = pathname.split("/");
  const isLabPost = !!(paths[1] === "lab" && paths[2]);
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(cn(
    isLabPost ? "w-full" : "max-w-[992px] px-[30px]",
    "mx-auto mt-10 w-full flex-1"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Templates/Main/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-[30px] w-full"> <div class="mx-auto flex w-full max-w-[992px] items-center justify-center p-[30px]"> <span class="text-sm medium:text-lg dark:text-white">&copy; All rights reserved.</span> </div> </footer>`;
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Templates/Footer/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://devvoyage.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="ko"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/manifest.json"><meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"><meta name="msapplication-TileColor" content="#ffffff"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)"><link rel="sitemap" href="/sitemap-index.xml"><title>', '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="/images/og.jpg"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="/images/og.jpg"><meta name="twitter:card" content="summary">', '</head> <body class="flex min-h-screen w-full flex-col dark:bg-gray-800"> ', " ", " ", ' <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script> <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderComponent($$result, "Header", $$Index$3, {}), renderComponent($$result, "Main", $$Index$2, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), renderComponent($$result, "Footer", $$Index$1, {}));
}, "/Users/pillsang/Desktop/Pilsang/devvoyage.io/src/components/Templates/Layout/index.astro", void 0);

export { $$Index as $, FormatLib as F };
