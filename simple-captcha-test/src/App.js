import { Route, Routes } from 'react-router-dom';
import Captcha from './Components/Captcha';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Captcha />} />
      </Routes>
    </div>
  );
}

export default App;
