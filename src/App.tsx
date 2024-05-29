import { Tab, Swiper } from '.';

function App() {
  return (
    <>
      <Swiper width={1000} height={400} $elementsOneTab={3}>
        <Tab label="1">1</Tab>
        <Tab label="1">1</Tab>
        <Tab label="1">1</Tab>
        <Tab label="1">1</Tab>
      </Swiper>
    </>
  );
}

export default App;
