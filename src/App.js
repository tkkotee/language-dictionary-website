import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import './App.css';
import TopBar from './components/Navbar/topbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <AnimatePresence>
          {/*Outlet displays either about page or Homepage*/}
          <Outlet />
        </AnimatePresence>
      </header>
    </div>
  );
}

export default App;
