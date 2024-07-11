import { Meta, StoryObj } from '@storybook/react';
import Tabs from '../lib/Swiper';
import Tab from '../lib/Tab';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
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
    $tabColor: {
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
    $elementsMediaQueries: {
      control: 'select',
      options: [[1200], [1200, 600]],
      description:
        '미디어 쿼리 max-width 값을 number 타입 배열로 설정합니다. 이 속성을 쓰려면 $elementsOneTab을 지정해야합니다. 값을 하나 설정할 때마다 $elementsOneTab에서 -1 됩니다.',
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
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const SimpleTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const BottomTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $tabBoxPosition: 'bottom',
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const Swiper: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
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
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const ThreeElementsInOnTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $slidePerTab: 3,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="image1">image 1</Tab>
      <Tab label="image2">image 2</Tab>
      <Tab label="image3">image 3</Tab>
      <Tab label="image4">image 4</Tab>
      <Tab label="image5">image 5</Tab>
    </Tabs>
  ),
};

export const MediaQueries: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $slidePerTab: 4,
    $elementsMediaQueries: [1200, 600],
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="image1">image 1</Tab>
      <Tab label="image2">image 2</Tab>
      <Tab label="image3">image 3</Tab>
      <Tab label="image4">image 4</Tab>
      <Tab label="image5">image 5</Tab>
      <Tab label="image6">image 6</Tab>
      <Tab label="image7">image 7</Tab>
    </Tabs>
  ),
};
