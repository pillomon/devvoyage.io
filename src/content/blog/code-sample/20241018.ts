export const SAMPLE_1 = `
const getItemPerRow = () => {
  if (width >= 1440) return 3;
  if (width >= 768) return 2;
  return 1;
};
const rearrangeRows = (items: any[], itemsPerRow: 1 | 2 | 3) => {
  return items.reduce((rows, item, index) => {
    if (index % itemsPerRow === 0) rows.push([]);
    rows[rows.length - 1].push(item);
    return rows;
  }, []);
};
const rows = rearrangeRows(flatData, getItemPerRow);
`;
export const SAMPLE_2 = `
<Virtuoso
  useWindowScroll
  endReached={onFetch}
  data={rows}
  itemContent={(index, row) => {
    return (
      <div key={index}>
        {row.map((item: any) => {
          return (
		    <Item {...item} />
          );
        })}
      </div>
    );
  }}
  components={{
    Footer: () => {
      return (
        isLoading || isFetching ? <div>...loading</div> : <></>
      )
    },
  }}
/>`;
export const SAMPLE_3 = `
'use client';

import type { LocationOptions, VirtuosoHandle } from 'react-virtuoso';
import type { MutableRefObject } from 'react';
import { usePathname } from 'next/navigation.js';
import { useEffect, useMemo } from 'react';

const useScrollRestorationWithVirtuoso = (
  virtuosoRef?: MutableRefObject<VirtuosoHandle | null>,
  isProcessing?: boolean,
  sleep: number = 100,
  customScrollOptions?: LocationOptions,
) => {
  const pathname = usePathname();
  const scrollIndexKey = useMemo(() => \`scrollIndex-\$\{pathname\}\`, [pathname]);

  useEffect(() => {
    const startIndex =
      parseInt(sessionStorage.getItem(scrollIndexKey) ?? '', 10) ?? null;

    if (!isProcessing && startIndex && virtuosoRef?.current) {
      setTimeout(() => {
        virtuosoRef?.current?.scrollToIndex({
          align: 'center',
          behavior: 'smooth',
          index: startIndex,
          ...customScrollOptions,
        });
        sessionStorage.removeItem(scrollIndexKey);
      }, sleep);
    } else sessionStorage.removeItem(scrollIndexKey);
  }, [isProcessing, sleep, customScrollOptions, virtuosoRef, scrollIndexKey]);

  return { scrollIndexKey };
};

export default useScrollRestorationWithVirtuoso;`;
