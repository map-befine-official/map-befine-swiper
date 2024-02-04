import React from 'react';
type TabBoxPositionType = 'top' | 'bottom';
interface Props {
    children: React.ReactNode;
    width?: number;
    height?: number;
    $tabBoxHeight?: number;
    $tabColor?: string | string[];
    $tabBoxPosition?: TabBoxPositionType;
    $elementsOneTab?: number;
    $focusColor?: string;
    $simpleTab?: boolean;
    $isNotTabBoxShow?: boolean;
    responsive?: boolean;
    swiper?: boolean;
    swipeable?: boolean;
    autoplay?: boolean;
    $autoplayTime?: number;
    $autoplayButton?: boolean;
    $elementsMediaQueries?: number[];
    as?: string;
}
declare function Swiper({ width, height, $simpleTab, $isNotTabBoxShow, $tabBoxHeight, $tabBoxPosition, $elementsOneTab, $tabColor, $focusColor, responsive, swiper, swipeable, autoplay, $autoplayTime, $autoplayButton, $elementsMediaQueries, as, children, }: Props): import("react/jsx-runtime").JSX.Element;
export default Swiper;
