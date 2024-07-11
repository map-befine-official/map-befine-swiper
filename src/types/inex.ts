export type TabBoxPositionType = 'top' | 'bottom';

export interface TabProps {
  label: string;
}

export interface Props {
  children: React.ReactNode;
  width?: number;
  height?: number;
  $tabBoxHeight?: number;
  $tabColor?: string | string[];
  $focusColor?: string;
  $tabBoxPosition?: TabBoxPositionType;
  $slidePerTab?: number;
  $showTabBox?: boolean;
  autoplay?: boolean;
  $autoplayTime?: number;
  $elementsMediaQueries?: number[];
  as?: string;
}
