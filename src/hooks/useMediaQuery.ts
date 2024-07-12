import { useEffect, useRef, useState } from 'react';

interface Props {
  ignoreWidth: number;
  breakPoints: Record<number, number>;
  $slidePerTab: number;
}

const checkMediaCondition = (key: number, idx: number, arr: number[]) => {
  if (!arr[idx + 1]) return innerWidth <= key;
  else {
    return innerWidth <= key && innerWidth > arr[idx + 1];
  }
};

const useMediaQuery = ({ ignoreWidth, breakPoints, $slidePerTab }: Props) => {
  const [slidePerTab, setSlidePerTab] = useState<number>($slidePerTab);

  const breakPointKeys = useRef<number[]>(
    Object.keys(breakPoints)
      .map(Number)
      .sort((a, b) => b - a)
  );
  const breakPointValues = useRef<number[]>(
    Object.values(breakPoints).sort((a, b) => b - a)
  );

  const resizeSwiper = () => {
    if (ignoreWidth < innerWidth) return;

    const idx = breakPointKeys.current.findIndex(checkMediaCondition);
    if (idx !== -1) {
      setSlidePerTab(breakPointValues.current[idx]);
    } else {
      setSlidePerTab($slidePerTab);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeSwiper);

    return () => {
      window.removeEventListener('resize', resizeSwiper);
    };
  }, []);

  return { slidePerTab };
};

export default useMediaQuery;
