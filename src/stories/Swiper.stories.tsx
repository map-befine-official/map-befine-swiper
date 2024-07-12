import { Meta, StoryObj } from '@storybook/react';
import Swiper from '../Swiper';
import Tab from '../Tab';

const meta = {
  title: 'Components/Swiper',
  component: Swiper,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Tab Layout 가로 크기를 설정합니다.',
    },
    height: {
      control: 'number',
      description: 'Tab Layout 세로 크기를 설정합니다.',
    },
    $tabBoxHeight: {
      control: 'number',
      description:
        'Tab Index Box 세로 크기를 설정합니다. 기본 값은 Height의 10분의 1입니다. 가로 크기는 Tab Layout과 같습니다.',
    },
    $tabBoxColor: {
      control: { type: 'color', preset: '#E4E4E4' },
      description:
        'Tab Index Box 의 색상을 지정합니다. 기본값은 #E4E4E4 입니다.',
    },
    $tabBoxPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description:
        'Tab Index Box 의 위치를 지정합니다. 위, 아래로만 지정할 수 있습니다.',
    },
    $focusColor: {
      control: { type: 'color', preset: '#316fc4' },
      description:
        'Tab Index Box 가 포커스 되었을 때 색상을 지정합니다. 기본값은 #316fc4 입니다.',
    },
    $showTabBox: {
      control: 'boolean',
      description: 'Tab Box를 표시할 지 설정합니다.',
    },
    $slidePerTab: {
      control: 'number',
      description: '하나의 Tab Index Box에서 표시할 Tab의 갯수를 지정합니다.',
    },
    $breakPoints: {
      control: false,
      description:
        'Record<number, number> 타입으로 key에 media query maxWidth 값을, value에 해당 maxWidth에 표시할 slide 개수를 지정합니다.',
    },
    autoplay: {
      control: 'boolean',
      description:
        '일정 시간이 경과하면 자동으로 Tab Index Box 가 전환될 지 설정합니다.',
    },
    $autoplayTime: {
      control: 'number',
      description: 'autoplay 딜레이 시간을 지정합니다. ms 단위입니다.',
    },
    tag: {
      control: false,
      description: 'Swiper 컴포넌트의 HTML 태그를 지정합니다.',
    },
  },
} as Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
  },
  render: (args) => (
    <Swiper {...args}>
      <Tab label="main" style={{ backgroundColor: 'yellow' }}>
        Main Page
      </Tab>
      <Tab label="my" style={{ backgroundColor: 'lightgreen' }}>
        My Page
      </Tab>
      <Tab label="shop" style={{ backgroundColor: 'skyblue' }}>
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Swiper>
  ),
};

export const TabLayout: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $showTabBox: true,
  },
  render: (args) => (
    <Swiper {...args}>
      <Tab label="main" style={{ backgroundColor: 'yellow' }}>
        Main Page
      </Tab>
      <Tab label="my" style={{ backgroundColor: 'lightgreen' }}>
        My Page
      </Tab>
      <Tab label="shop" style={{ backgroundColor: 'skyblue' }}>
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Swiper>
  ),
};

export const Autoplay: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    autoplay: true,
    $autoplayTime: 3000,
  },
  render: (args) => (
    <Swiper {...args}>
      <Tab label="main" style={{ backgroundColor: 'yellow' }}>
        Main Page
      </Tab>
      <Tab label="my" style={{ backgroundColor: 'lightgreen' }}>
        My Page
      </Tab>
      <Tab label="shop" style={{ backgroundColor: 'skyblue' }}>
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Swiper>
  ),
};

export const ThreeSlideInOneTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $slidePerTab: 3,
  },
  render: (args) => (
    <Swiper {...args}>
      <Tab label="image1" style={{ backgroundColor: 'yellow' }}>
        image 1
      </Tab>
      <Tab label="image2" style={{ backgroundColor: 'lightgreen' }}>
        image 2
      </Tab>
      <Tab label="image3" style={{ backgroundColor: 'yellow' }}>
        image 3
      </Tab>
      <Tab label="image4" style={{ backgroundColor: 'lightgreen' }}>
        image 4
      </Tab>
      <Tab label="image5" style={{ backgroundColor: 'yellow' }}>
        image 5
      </Tab>
      <Tab label="image5" style={{ backgroundColor: 'lightgreen' }}>
        image 6
      </Tab>
    </Swiper>
  ),
};

export const DynamicSlideToMediaQuery: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $slidePerTab: 4,
    $breakPoints: { 800: 3, 600: 2, 400: 1 },
  },
  render: (args) => (
    <Swiper {...args}>
      <Tab label="image1" style={{ backgroundColor: 'yellow' }}>
        image 1
      </Tab>
      <Tab label="image2" style={{ backgroundColor: 'lightgreen' }}>
        image 2
      </Tab>
      <Tab label="image3" style={{ backgroundColor: 'yellow' }}>
        image 3
      </Tab>
      <Tab label="image4" style={{ backgroundColor: 'lightgreen' }}>
        image 4
      </Tab>
      <Tab label="image5" style={{ backgroundColor: 'yellow' }}>
        image 5
      </Tab>
      <Tab label="image5" style={{ backgroundColor: 'lightgreen' }}>
        image 6
      </Tab>
      <Tab label="image5" style={{ backgroundColor: 'yellow' }}>
        image 7
      </Tab>
    </Swiper>
  ),
};
