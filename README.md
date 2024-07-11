# map-befine-swiper

[괜찮을지도](https://github.com/woowacourse-teams/2023-map-befine)에서 사용하는 Swiper 라이브러리 입니다.

## 설치 방법

    # npm
    $ npm install map-befine-swiper

    # yarn
    $ yarn add map-befine-swiper

## 사용 방법

### Swiper

- 여러 개의 Tab을 담는 Container 역할의 컴포넌트입니다. 이 컴포넌트에 아래와 같은 옵션을 설정할 수 있습니다. Swiper 컴포넌트만 사용하여 Tab Index 기능을 구현할 수 있지만, Tab Index Box에 숫자 대신 이름을 넣고자 한다면 Tab 컴포넌트를 사용하여 label 속성에 이름을 명시해주어야 합니다.

```tsx
import { Swiper } from 'map-befine-swiper';

const App = () => {
  return (
    <Swiper
      width={600}
      $focusColor="#E1325C"
      $slidePerTab={2}
      $breakPoints={{ 600: 2, 300: 1 }}
    >
      <Tab>content1</Tab>
      <Tab>content2</Tab>
      <Tab>content3</Tab>
      <Tab>content4</Tab>
    </Swiper>
  );
};
```

#### Props

| props           | value                  | essential | default     | description                                                                                                              |
| --------------- | ---------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| width           | number                 | optional  | 400         | Tab Layout 가로 크기를 설정합니다.                                                                                       |
| height          | number                 | optional  | 400         | Tab Layout 세로 크기를 설정합니다.                                                                                       |
| $tabBoxHeight   | number                 | optional  | height / 10 | Tab index box 세로 크기를 설정합니다. 가로 크기는 Tab Layout과 같습니다.                                                 |
| $tabBoxColor    | string \| string[]     | optional  | '#E4E4E4'   | Tab index box 의 색상을 지정합니다.                                                                                      |
| $tabBoxPosition | 'top' \| 'bottom'      | optional  | 'top'       | Tab index box 의 위치를 지정합니다.                                                                                      |
| $showTabBox     | boolean                | optional  | false       | Tab index box 표시 여부를 설정합니다.                                                                                    |
| $focusColor     | string                 | optional  | '#316fc4'   | Tab 이 포커스 되었을 때 색상을 설정합니다.                                                                               |
| $slidePerTab    | number                 | optional  | 1           | 하나의 Tab 에서 표시할 slide의 개수를 지정합니다.                                                                        |
| $breakPoints    | Record<number, number> | optional  | {}          | Record<number, number> 타입으로 key에 media query maxWidth 값을, value에 해당 maxWidth에 표시할 slide 개수를 지정합니다. |
| autoplay        | boolean                | optional  | false       | 일정 시간이 되면 자동으로 Tab 이 전환될 지 설정합니다.                                                                   |
| $autoplayTime   | number                 | optional  | 5000        | autoplay 딜레이 시간을 설정합니다. ms 단위이며 1000 미만의 값은 1000으로 자동 지정됩니다.                                |
| as              | string                 | optional  | 'div'       | Swiper의 DOM Tag를 설정합니다.                                                                                           |
| children        | ReactNode              | essential | null        | Swiper 콘텐츠를 설정합니다.                                                                                              |

## Tab

- 개별 Tab의 역할을 하는 컴포넌트입니다. 이 컴포넌트의 label 속성을 통해 tab index box에 숫자 대신 이름을 명시할 수 있습니다. 이 컴포넌트 내부에 실질적인 구현부를 작성하면 됩니다.

```tsx
import { Swiper, Tab } from 'map-befine-swiper';

const App = () => {
  return (
    <Swiper width={1200} responsive>
      <Tab label="main page">
        <MainPage />
      </Tab>
      <Tab label="my page">
        <MyPage />
      </Tab>
    </Swiper>
  );
};
```

### Props

| props    | value     | essential | default | description                                          |
| -------- | --------- | --------- | ------- | ---------------------------------------------------- |
| label    | string    | optional  |         | Tab Index Box에 숫자 (index) 대신 이름을 명시합니다. |
| children | ReactNode | essential | null    | Tab 콘텐츠를 설정합니다.                             |

## 스토리북 배포 링크

[map-befine-swiper-storybook](https://65127eae0e98643d69097dab-ztbwlmmroe.chromatic.com/?path=/docs/components-swiper--docs)

## 개발 환경

- React(vite)
- TypeScript
- styled-components
