import './App.css';
import Navbar from './components/navbar'
import Card from './components/card'
import Footer from './components/footer';
// import car from'./photos/senna.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='title-1'>projects</div>
      <div className='parent'>
        <Card src='/photos/senna.jpg' />
        <Card src='/photos/senna.jpg' />
        <Card src='/photos/senna.jpg' />
        <Card src='/photos/senna.jpg' />
      </div>
      <h1>hey is it up there</h1>
      <Footer/>
    </div>
  );
}

export default App;
