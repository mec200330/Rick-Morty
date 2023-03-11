import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DataProvider from './Context/DataContext';
import Home from './Pages/Home';
import CharactersR from './Pages/CharactersR'


function App() {

  return (
<DataProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/personajes' element={<CharactersR/>}/>
   </Routes>
   </BrowserRouter>
  </DataProvider>
  );
}

export default App;
