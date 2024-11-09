import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const FormatLib = {
  cn,
};

export default FormatLib;
