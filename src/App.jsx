import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='skills' element={<Skills />} />
      </Route>
    </Routes>    
 </BrowserRouter>

  );
}

export default App;
