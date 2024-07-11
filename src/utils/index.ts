import { TabProps } from '../types/inex';

export const getTabsColor = (
  indexOfTab: number,
  $tabColor: string | string[]
) => {
  if (typeof $tabColor === 'string') return $tabColor;

  return $tabColor[indexOfTab] || '#e4e4e4';
};

export const calculateTabCountUsingElements = (
  childrenList: React.ReactElement<TabProps>[],
  $slidePerView: number
) => {
  if ($slidePerView > 1) {
    const tabBoxesCount = Math.ceil(childrenList.length / $slidePerView);
    return childrenList.filter((_, idx) => idx < tabBoxesCount);
  }

  return childrenList;
};

export const calculateWidthUsingElementsCount = (
  width: number | '100vw',
  elementCount: number
) => {
  if (typeof width === 'number' && elementCount > 1)
    return width / elementCount;
  if (typeof width === 'string' && elementCount > 1)
    return `calc(${width} / ${elementCount})`;

  return width;
};
