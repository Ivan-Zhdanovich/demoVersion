import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navigation';
import { DemoPage } from './Pages/demo/demoPage';
import { AboutPage } from './Pages/about';

function App() {
  return (
   <>
   <Navigation/>
   <Routes>
    <Route path='/' element={ <DemoPage /> }/>
    <Route path='/about' element={ <AboutPage /> }/>
   </Routes>
   </>
  );
}

export default App;
