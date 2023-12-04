
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="app">

      {authIsReady && <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to="login"
          />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/"
          />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"
          />} />
        </Routes>
      </BrowserRouter>

      }

    </div>
  );
}

export default App;
