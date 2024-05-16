import type { Framework } from './types';

interface Island {
  id: number;
  framework: Framework;
  slug: string;
  title: string;
  topic: string;
}

export const islands: Island[] = [
  {
    id: 1,
    framework: 'react',
    route: 'react-hook-form-with-zod',
    title: 'React hook form with Zod',
    topic: 'React Hook Forms & Zod 라이브러리로 만든 Form UI입니다.',
  },
];
