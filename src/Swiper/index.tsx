import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import SwiperLeftBtnSVG from '../assets/swiper_left_button.svg?react';
import SwiperRightBtnSVG from '../assets/swiper_right_button.svg?react';
import useAutoplay from '../hooks/useAutoplay';
import useMediaQuery from '../hooks/useMediaQuery';
import useSwipeable from '../hooks/useSwipeable';
import { Props, TabProps } from '../types/inex';
import {
  calculateTabCountUsingElements,
  calculateWidthUsingElementsCount,
  getTabsColor,
} from '../utils';

function Swiper({
  width = 400,
  height = 400,
  $showTabBox = false,
  $tabBoxHeight = height / 10,
  $tabBoxPosition = 'top',
  $slidePerTab = 1,
  $breakPoints = {},
  $tabColor = '#e4e4e4',
  $focusColor = '#316fc4',
  autoplay = false,
  $autoplayTime = 5000,
  as = 'div',
  children,
}: Props) {
  const childrenList = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];
  const isShowTabBox = $showTabBox && childrenList.length > $slidePerTab;

  const [pos, setPos] = useState<number>(0);
  const { slidePerTab } = useMediaQuery({
    ignoreWidth: width,
    breakPoints: $breakPoints,
    $slidePerTab,
  });
  const {
    increasePos,
    decreasePos,
    moveToSettedPos,
    handleTouchMove,
    handleTouchEnd,
  } = useSwipeable({
    childrenListLength: calculateTabCountUsingElements(
      childrenList,
      slidePerTab
    ).length,
    pos,
    setPos,
  });
  useAutoplay({
    autoplay,
    $autoplayTime,
    childrenListLength: calculateTabCountUsingElements(
      childrenList,
      slidePerTab
    ).length,
    pos,
    setPos,
  });

  return (
    <Wrapper as={as} width={width} $tabBoxPosition={$tabBoxPosition}>
      {isShowTabBox && (
        <TabBoxWrapper $showTabBox={$showTabBox} $tabBoxHeight={$tabBoxHeight}>
          {calculateTabCountUsingElements(childrenList, slidePerTab).map(
            (children, idx) =>
              children && (
                <TabBox
                  key={`${children.props.label}, ${idx + 1}`}
                  idx={idx}
                  pos={pos}
                  $tabColor={getTabsColor(idx, $tabColor)}
                  $focusColor={$focusColor}
                  width={width}
                  $tabBoxHeight={$tabBoxHeight}
                  $childrenLength={Math.ceil(
                    childrenList.length / $slidePerTab
                  )}
                  $showTabBox={$showTabBox}
                  onClick={() => moveToSettedPos(idx)}
                >
                  {$showTabBox && (children.props.label || idx + 1)}
                </TabBox>
              )
          )}
        </TabBoxWrapper>
      )}

      <TabSectionWrapper
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        width={width}
        height={height}
        $childrenLength={childrenList.length}
        pos={pos}
        $slidePerView={slidePerTab}
      >
        {children}
      </TabSectionWrapper>

      <>
        <SwiperButtonWrapper
          $tabBoxHeight={$tabBoxHeight}
          $showTabBox={$showTabBox}
          position="left"
          onClick={decreasePos}
        >
          <SwiperLeftBtnSVG />
        </SwiperButtonWrapper>
        <SwiperButtonWrapper
          $tabBoxHeight={$tabBoxHeight}
          $showTabBox={$showTabBox}
          position="right"
          onClick={increasePos}
        >
          <SwiperRightBtnSVG />
        </SwiperButtonWrapper>
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div<Partial<Props>>`
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: ${({ $tabBoxPosition }) =>
    $tabBoxPosition === 'top' ? 'column' : 'column-reverse'};

  ${({ width }) => css`
    @media (max-width: ${width}px) {
      width: 100%;
    }
  `}
`;

const TabSectionWrapper = styled.div<{
  width: number;
  height: number;
  $childrenLength: number;
  pos: number;
  $slidePerView: number;
}>`
  display: flex;

  // 사용자가 입력한 <Tabs />의 width 값을 <Tab /> 컴포넌트 개수만큼 곱하여 Tab Section의 width를 설정합니다. 따라서 overflow 됩니다.
  width: ${({ width, $childrenLength }) => `${width * $childrenLength}px`};
  height: ${({ height }) => `${height}px`};

  // 사용자가 입력한 width 값 보다 <Tab /> 컴포넌트 개수만큼 overflow 되었으므로 width * index 만큼 transform 하여 요소의 위치로 이동합니다. (전환 효과)
  transform: ${({ width, pos }) => `translateX(${-width * pos}px)`};
  transition: 0.3s ease transform;

  ${({ width, $childrenLength, pos }) => css`
    @media (max-width: ${width}px) {
      width: calc(100vw * ${$childrenLength});
      transform: translateX(calc(-100vw * ${pos}));
    }
  `}

  // <Tabs /> 컴포넌트에 입력한 width와 <Tab /> 컴포넌트 width를 동일하게 합니다.
  & > * {
    width: ${({ width, $slidePerView }) =>
      calculateWidthUsingElementsCount(width, $slidePerView)}px;

    ${({ width, $slidePerView }) => css`
      @media (max-width: ${width}px) {
        width: ${calculateWidthUsingElementsCount('100vw', $slidePerView)};
      }
    `}
  }
`;

const TabBoxWrapper = styled.div<{
  $showTabBox: boolean;
  $tabBoxHeight: number;
}>`
  display: flex;
  align-items: center;

  // 기본값은 height / 10 입니다. 하지만 사용자가 직접 지정할 수도 있게 해두었습니다.
  height: ${({ $tabBoxHeight }) => `${$tabBoxHeight}px`};
  overflow: auto;

  // simpleTab 모드에서는 TabButton이 작아지므로 가운데 정렬하도록 합니다.
  ${({ $showTabBox }) =>
    !$showTabBox &&
    css`
      justify-content: center;
    `}
`;

const TabBox = styled.button<{
  width: number;
  idx: number;
  pos: number;
  $tabBoxHeight: number;
  $childrenLength: number;
  $showTabBox: boolean;
  $tabColor: string;
  $focusColor: string;
}>`
  width: ${({ width, $childrenLength }) => `${width / $childrenLength}px`};
  height: inherit;
  padding: 0.2rem 1rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ $tabColor }) => $tabColor};

  ${({ $showTabBox, $tabBoxHeight }) =>
    !$showTabBox &&
    css`
      padding: 0;
      width: ${$tabBoxHeight / 2}px;
      height: ${$tabBoxHeight / 2}px;
      border-radius: 50%;
    `}

  ${({ $showTabBox }) =>
    !$showTabBox &&
    css`
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    `}

    ${({ idx, pos, $focusColor }) =>
    idx === pos &&
    css`
      border-bottom: 2px solid ${$focusColor};
    `}

    ${({ $showTabBox, idx, pos, $focusColor }) =>
    idx === pos &&
    !$showTabBox &&
    css`
      border-bottom: 0;
      border: 2px solid ${$focusColor};
    `}
`;

const SwiperButtonWrapper = styled.div<{
  $tabBoxHeight: number;
  $showTabBox: boolean;
  position: 'left' | 'right';
}>`
  cursor: pointer;
  position: absolute;
  top: ${({ $tabBoxHeight, $showTabBox }) =>
    $showTabBox ? `calc(50% + ${$tabBoxHeight}px / 2)` : `50%`};
  transform: ${({ $tabBoxHeight, $showTabBox }) =>
    $showTabBox
      ? `translateY(calc(-50% - ${$tabBoxHeight}px))`
      : `translateY(-50%)`};

  ${({ position }) =>
    position === 'left'
      ? css`
          left: 1%;
        `
      : css`
          right: 1%;
        `};

  @media (max-width: 744px) {
    display: none;
  }
`;

export default Swiper;
