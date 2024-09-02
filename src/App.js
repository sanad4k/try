import './App.css';
import Navbar from './components/navbar'
import Card from './components/card'
import Footer from './components/footer';
// import car from'./photos/senna.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='title_p'>WITH PRIDE WE PRESENT</h1>
      
      <div className='center'>
        <div className='parent'>
          <Card src='/photos/senna.jpg' name='SENNA' details1='SUPRA SAE India 2023| Overall AIR 27' details2='Bajaj Dominar 400 engine Suspension: Front - Pull rod, Rear-Push rod Hanging Chassis ASI 4130 Chromoly Chassis 7th in design 10th in acceleration ' />
          <Card src='/photos/minnal.jpg' name='MINNAL' details1='SUPRA SAE India 2023| Overall AIR 27' details2='Bajaj Dominar 400 engine Suspension: Front - Pull rod, Rear-Push rod Hanging Chassis ASI 4130 Chromoly Chassis 7th in design 10th in acceleration ' />
          <Card src='/photos/TEQUIP.jpg' name='TEQUIP' details1='SUPRA SAE India 2023| Overall AIR 27' details2='Bajaj Dominar 400 engine Suspension: Front - Pull rod, Rear-Push rod Hanging Chassis ASI 4130 Chromoly Chassis 7th in design 10th in acceleration ' />
          <Card src='/photos/unleashed.jpg' name='UNLEASHED' details1='SUPRA SAE India 2023| Overall AIR 27' details2='Bajaj Dominar 400 engine Suspension: Front - Pull rod, Rear-Push rod Hanging Chassis ASI 4130 Chromoly Chassis 7th in design 10th in acceleration ' />
          <Card src='/photos/ZEUS.jpg'name='ZEUS' details1='SUPRA SAE India 2023| Overall AIR 27' details2='Bajaj Dominar 400 engine Suspension: Front - Pull rod, Rear-Push rod Hanging Chassis ASI 4130 Chromoly Chassis 7th in design 10th in acceleration '  />
        </div>
      </div>
      <h1>hey is it up there</h1>
      <Footer />
    </div>
  );
}

export default App;
