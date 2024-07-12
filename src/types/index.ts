import { ComponentPropsWithoutRef, ElementType } from 'react';

export type TabBoxPositionType = 'top' | 'bottom';

export interface TabProps {
  label: string;
}

export type SwiperProps<T extends ElementType = 'div'> =
  ComponentPropsWithoutRef<T> & {
    children: React.ReactNode;
    width?: number;
    height?: number | 'auto';
    $tabBoxHeight?: number;
    $tabBoxColor?: string | string[];
    $focusColor?: string;
    $tabBoxPosition?: TabBoxPositionType;
    $slidePerTab?: number;
    $breakPoints?: Record<number, number>;
    $showTabBox?: boolean;
    autoplay?: boolean;
    $autoplayTime?: number;
    as?: T;
  };

export interface TabSectionWrapperProps {
  width: number;
  height: number | 'auto';
  $childrenLength: number;
  pos: number;
  $slidePerView: number;
}

export interface TabBoxProps {
  width: number;
  idx: number;
  pos: number;
  $tabBoxHeight: number;
  $childrenLength: number;
  $showTabBox: boolean;
  $tabBoxColor: string;
  $focusColor: string;
}

export interface WrapperProps {
  width: number;
  $tabBoxPosition: TabBoxPositionType;
}

export interface TabBoxWrapperProps {
  $tabBoxHeight: number;
  $showTabBox: boolean;
}

export interface SwiperButtonWrapperProps {
  position: 'left' | 'right';
  $tabBoxHeight: number;
  $showTabBox: boolean;
}
