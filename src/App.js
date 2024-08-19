import './App.css';
import Navbar from './components/navbar'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='parent'>
        <Card src='./p/senna.jpg' />
      </div>
      <h1>hey is it up there</h1>


    </div>
  );
}

export default App;
