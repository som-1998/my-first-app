import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about='About' />

      {/* <TextBox text='Enter Your Text Here' heading = 'Enter the Text: ' /> */}
      <TextBox  heading = 'Enter the Text: ' />

    </>
  );
}

export default App;
