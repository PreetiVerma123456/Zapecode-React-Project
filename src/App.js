import logo from './logo.svg';
import './App.css';
import {  Route , Routes, BrowserRouter} from "react-router-dom";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from './component/aboutus';
import Service from './component/services';
import GifComponent from './component/Gift';
import Homefinal from './component/Homefinal';
import Myfooter from './component/Footer';
import ImageCarousels from './component/carousel';
import Contact from './component/contact';

import Castleclass from './component/Castleclass';
import ProductFinal from './component/ProductFinal';
import Navbarmain from './component/navbar';


export default function  App() {
  return (

    <>
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navbarmain />}>
          <Route index element = {<Homefinal />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Service" element={<Service />} />
          <Route path="About" element={<About />} />
          <Route path="ProductFinal" element={<ProductFinal />} />
          <Route path="Castleclass" element={<Castleclass/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
    


