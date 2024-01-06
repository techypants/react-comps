
import './App.css';
import ButtonLoad from './components/button2';
import ButtonLoadAnimation from './components/buttonloadani';
import RadioButtons from './components/radio1';
import Radioauto from './components/radioauto.tsx';
import Dropzone from 'react-dropzone';

function App() {
  return (
    <div className="App">
      <ButtonLoad/>
      <ButtonLoadAnimation/>
      <RadioButtons/>
      <Radioauto></Radioauto>
      <Dropzone></Dropzone>
    </div>
  );
}

export default App;
