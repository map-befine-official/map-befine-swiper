import { Swiper, Tab } from '.';

function App() {
  return (
    <>
      <Swiper
        width={1000}
        height={400}
        $slidePerTab={3}
        $breakPoints={{
          600: 2,
          400: 1,
        }}
      >
        <Tab label="1" style={{ backgroundColor: 'red' }}>
          1
        </Tab>
        <Tab label="1" style={{ backgroundColor: 'blue' }}>
          1
        </Tab>
        <Tab label="1" style={{ backgroundColor: 'green' }}>
          1
        </Tab>
        <Tab label="1" style={{ backgroundColor: 'yellow' }}>
          1
        </Tab>
      </Swiper>
    </>
  );
}

export default App;
