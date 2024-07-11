import { useEffect, useRef } from 'react';

interface Props {
  autoplay: boolean;
  $autoplayTime: number;
  childrenListLength: number;
  pos: number;
  setPos: React.Dispatch<React.SetStateAction<number>>;
}

const useAutoplay = ({
  autoplay,
  $autoplayTime,
  childrenListLength,
  pos,
  setPos,
}: Props) => {
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplay && childrenListLength > 1) {
      intervalId.current = setInterval(
        () => {
          pos <= childrenListLength - 2
            ? setPos((prev) => prev + 1)
            : setPos(0);
        },
        $autoplayTime < 1000 ? 1000 : $autoplayTime
      );
    }

    if (!autoplay && intervalId.current) clearInterval(intervalId.current);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [childrenListLength, pos, setPos, $autoplayTime, autoplay]);
};

export default useAutoplay;
