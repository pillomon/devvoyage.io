export const SAMPLE_1 = `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 재사용할 원 정의 -->
  <circle id="myCircle" cx="20" cy="20" r="10" fill="blue"/>
  
  <!-- use로 원 재사용 -->
  <use href="#myCircle" x="50" y="0"/>
  <use href="#myCircle" x="100" y="0"/>
</svg>`;
export const SAMPLE_2 = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.49994 4.46572V1.75C8.49994 0.783502 7.71644 0 6.74994 0C5.78345 0 4.99994 0.783501 4.99994 1.75V7.0901L3.8009 7.32991C3.03795 7.4825 2.51833 8.19312 2.60425 8.96642L2.94926 12.0716C2.9934 12.4688 3.13214 12.8497 3.35385 13.1822L4.78705 15.3321C5.06525 15.7493 5.5336 16 6.03513 16H12.4196C12.9579 16 13.4549 15.7116 13.722 15.2442L15.1172 12.8025C15.3609 12.3761 15.5121 11.9031 15.561 11.4143L15.8325 8.69901C15.9503 7.52164 15.0257 6.5 13.8425 6.5H13.2609C13.2071 6.42702 13.1412 6.34155 13.0663 6.25214C12.8746 6.02336 12.5559 5.68385 12.1856 5.53576C11.8222 5.39037 11.3401 5.40403 11.0281 5.42828C10.9825 5.43183 10.9382 5.43584 10.8956 5.44012C10.7921 5.18252 10.6094 4.94975 10.3363 4.79793C10.1415 4.6896 9.87806 4.56572 9.598 4.50971C9.28882 4.44787 8.85901 4.45166 8.54747 4.46377C8.53146 4.46439 8.51561 4.46504 8.49994 4.46572Z" fill="currentColor"/>
</svg>`;
export const SAMPLE_3 = `/**
 * Generate sprite svg.
 * @param files SVG files
 * @param inputDir Input directory path for results
 * @param outputPath Output directory path for results
 */
async function generateSprite({
  filePaths,
  inputDir,
  outputPath,
}: {
  filePaths: string[];
  inputDir: string;
  outputPath: string;
}) {
  const symbols = await Promise.all(
    filePaths.map(async (filePath) => {
      const input = await readFile(path.join(inputDir, filePath), "utf8").catch(
        () => ""
      );
      const root = parse(input);

      const svg = root.querySelector("svg");

      if (!svg) throw new Error("No SVG element found");

      svg.tagName = "symbol";
      svg.setAttribute("id", iconName(filePath));
      svg.removeAttribute("xmlns");
      svg.removeAttribute("xmlns:xlink");
      svg.removeAttribute("version");
      svg.removeAttribute("width");
      svg.removeAttribute("height");

      return svg.toString().trim();
    })
  );

  const output = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">',
    '<defs>',
    ...symbols,
    '</defs>',
    '</svg>',
    '',
  ].join('\n');

  return checkFileChanged(outputPath, output);
}`;
export const SAMPLE_4 = `import type { VariantProps } from 'class-variance-authority';
import type {ComponentProps} from 'react';
import { iconStyles } from '@/components/icon/styles.ts';
import { type IconName } from '@/types/icon';
import {cn} from "@/utils/formatUtil.ts";

export type IconProps = VariantProps<typeof iconStyles> &
  ComponentProps<'svg'> & {
  name: IconName;
};

export default function Icon({ name, color, size, ...rest }: IconProps) {
  const { className, ...attributes } = rest;

  return (
    <svg
      className={cn(iconStyles({ size, color }), className)}
      {...attributes}
    >
      <use href={\`sprite.svg#\${name}\`} />
    </svg>
  );
}`;
export const SAMPLE_5 = `import { cva } from "class-variance-authority";

export const iconStyles = cva(["transition-all", "stroke-[0px]"], {
  variants: {
    size: {
      L: ["w-[24px]", "h-[24px]"],
      M: ["w-[20px]", "h-[20px]"],
      S: ["w-[16px]", "h-[16px]"],
    },
    color: {
      black: "text-black",
      white: "text-white",
      gray: "text-gray-500",
      red: "text-red-500",
      green: "text-green-500",
      blue: "text-blue-500",
    },
  },
  defaultVariants: {
    size: "L",
    color: "black",
  },
});`;
