import Router from './router'
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Router />
        </BrowserRouter>
    );
}

export default App