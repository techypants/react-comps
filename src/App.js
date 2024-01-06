
import './App.css';
import ButtonLoad from './components/button2';
import ButtonLoadAnimation from './components/buttonloadani';
import RadioButtons from './components/radio1';
import Radioauto from './components/radioauto.tsx';
import FileDropzone from './components/dropzone';

function App() {
  return (
    <div className="App">
      <ButtonLoad/>
      <ButtonLoadAnimation/>
      <RadioButtons/>
      <Radioauto></Radioauto>

      <FileDropzone ></FileDropzone>
    </div>
  );
}

export default App;
