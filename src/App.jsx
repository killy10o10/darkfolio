import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
 <BrowserRouter
    basename={import.meta.env.DEV ? '/' : '/darkfolio/'}
 >
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Portfolio />} />
        <Route path='skills' element={<Skills />} />
      </Route>
    </Routes>    
 </BrowserRouter>

  );
}

export default App;
