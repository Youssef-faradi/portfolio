import { Home } from './pages/Home/home.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import Header from './layouts/Header.jsx';


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
