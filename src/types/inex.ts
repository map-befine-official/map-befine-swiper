export type TabBoxPositionType = 'top' | 'bottom';

export interface TabProps {
  label: string;
}

export interface Props {
  children: React.ReactNode;
  width?: number;
  height?: number;
  $tabBoxHeight?: number;
  $tabBoxColor?: string | string[];
  $focusColor?: string;
  $tabBoxPosition?: TabBoxPositionType;
  $slidePerTab?: number;
  $breakPoints?: Record<number, number>;
  $showTabBox?: boolean;
  autoplay?: boolean;
  $autoplayTime?: number;
  as?: string;
}
