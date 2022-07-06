import './App.css';
import MainpageComponent from "./main"
import {Routes, Route} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  return  <div>
   <Routes>
      <Route path="/" element={<MainpageComponent />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/upload" element={<UploadPage />} />
   </Routes>
    </div>;
}

export default App;
 