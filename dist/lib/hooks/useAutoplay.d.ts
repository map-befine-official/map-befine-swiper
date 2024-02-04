/// <reference types="react" />
interface Props {
    autoplay: boolean;
    $autoplayTime: number;
    childrenListLength: number;
    pos: number;
    setPos: React.Dispatch<React.SetStateAction<number>>;
}
declare const useAutoplay: ({ autoplay, $autoplayTime, childrenListLength, pos, setPos, }: Props) => {
    isPlaying: boolean;
    toggleAutoplay: () => void;
};
export default useAutoplay;
