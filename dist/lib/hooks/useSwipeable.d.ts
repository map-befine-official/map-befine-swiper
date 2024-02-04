import { TouchEventHandler } from 'react';
interface Props {
    childrenListLength: number;
    pos: number;
    setPos: React.Dispatch<React.SetStateAction<number>>;
}
declare const useSwipeable: ({ childrenListLength, pos, setPos }: Props) => {
    pos: number;
    increasePos: () => void;
    decreasePos: () => void;
    moveToSettedPos: (settedPos: number) => void;
    handleTouchMove: TouchEventHandler;
    handleTouchEnd: TouchEventHandler;
};
export default useSwipeable;
