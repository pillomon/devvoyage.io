import type { Framework } from '@/islands/types';
import ReactHookFormsWithZodIsland from '@/islands/react-hook-form-with-zod';

interface Island {
  framework: Framework;
  slug: string;
  title: string;
  topic: string;
  component: any;
}

export const islands: Island[] = [
  {
    framework: 'react',
    slug: 'react-hook-form-with-zod',
    title: 'React hook form with Zod',
    topic: 'React Hook Forms & Zod 라이브러리로 만든 Form UI입니다.',
    component: ReactHookFormsWithZodIsland,
  },
];
