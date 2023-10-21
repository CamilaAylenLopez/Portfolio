import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Favoritos from './components/Favoritos'
import InfoMia from './components/InfoMia'
import MisCreaciones from './components/MisCreaciones'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route index element={<Favoritos />}></Route>
            <Route index element={<InfoMia />}></Route>
            <Route index element={<MisCreaciones />}></Route>
            <Route path='*' element={<h1>Not Found</h1>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;