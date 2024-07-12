import React, {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import SwiperLeftBtnSVG from '../assets/swiper_left_button.svg?react';
import SwiperRightBtnSVG from '../assets/swiper_right_button.svg?react';
import useAutoplay from '../hooks/useAutoplay';
import useMediaQuery from '../hooks/useMediaQuery';
import useSwipeable from '../hooks/useSwipeable';
import {
  SwiperButtonWrapperProps,
  SwiperProps,
  TabBoxProps,
  TabBoxWrapperProps,
  TabProps,
  TabSectionWrapperProps,
  WrapperProps,
} from '../types';
import {
  calculateTabCountUsingElements,
  calculateWidthUsingElementsCount,
  getTabsColor,
} from '../utils';

const Swiper = forwardRef(
  <T extends ElementType = 'div'>(
    {
      width = 400,
      height = 400,
      $showTabBox = false,
      $tabBoxHeight = 40,
      $tabBoxPosition = 'top',
      $slidePerTab = 1,
      $breakPoints = {},
      $tabBoxColor = '#e4e4e4',
      $focusColor = '#316fc4',
      autoplay = false,
      $autoplayTime = 5000,
      as,
      children,
      ...attributes
    }: SwiperProps<T>,
    ref: ComponentPropsWithRef<T>['ref']
  ) => {
    const tag = as || 'div';
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
      <Wrapper
        as={tag}
        ref={ref}
        width={width}
        $tabBoxPosition={$tabBoxPosition}
        {...attributes}
      >
        {isShowTabBox && (
          <TabBoxWrapper
            $showTabBox={$showTabBox}
            $tabBoxHeight={$tabBoxHeight}
          >
            {calculateTabCountUsingElements(childrenList, slidePerTab).map(
              (children, idx) =>
                children && (
                  <TabBox
                    key={`${children.props.label}, ${idx + 1}`}
                    idx={idx}
                    pos={pos}
                    $tabBoxColor={getTabsColor(idx, $tabBoxColor)}
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
);

export default Swiper;

const Wrapper = styled.div<WrapperProps>`
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

const TabSectionWrapper = styled.div<TabSectionWrapperProps>`
  display: flex;

  // 사용자가 입력한 <Tabs />의 width 값을 <Tab /> 컴포넌트 개수만큼 곱하여 Tab Section의 width를 설정합니다. 따라서 overflow 됩니다.
  width: ${({ width, $childrenLength }) => `${width * $childrenLength}px`};
  height: ${({ height }) => (height === 'auto' ? 'auto' : `${height}px`)};

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

const TabBoxWrapper = styled.div<TabBoxWrapperProps>`
  display: flex;
  align-items: center;
  height: ${({ $tabBoxHeight }) => `${$tabBoxHeight}px`};
  overflow: auto;

  ${({ $showTabBox }) =>
    !$showTabBox &&
    css`
      justify-content: center;
    `}
`;

const TabBox = styled.button<TabBoxProps>`
  width: ${({ width, $childrenLength }) => `${width / $childrenLength}px`};
  height: inherit;
  padding: 0.2rem 1rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ $tabBoxColor }) => $tabBoxColor};

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

const SwiperButtonWrapper = styled.div<SwiperButtonWrapperProps>`
  cursor: pointer;
  position: absolute;
  top: ${({ $tabBoxHeight, $showTabBox }) =>
    $showTabBox ? `calc(50% + ${$tabBoxHeight}px / 2)` : `50%`};
  transform: translateY(-50%);

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
