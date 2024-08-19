import './App.css';
import Navbar from './components/navbar'
import Card from './components/card'
// import car from'./photos/senna.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='parent'>
        <Card src='/photos/senna.jpg' />
      </div>
      <h1>hey is it up there</h1>
      {/* <img src={car} alt='car here man'/> */}
    </div>
  );
}

export default App;
