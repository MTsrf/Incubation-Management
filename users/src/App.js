import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import SignupPage from './Pages/SignupPage';
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react';
import ProcessingPage from './Pages/ProcessingPage';
import MessagePage from './Pages/MessagePage';


function App() {
  const { user } = useContext(AuthContext)
  const PrivateRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" />;
    }

    return children;
  };
  const ProtectedRoute = ({ children }) => {
    if (user) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={
        <ProtectedRoute>
          <LoginPage />
        </ProtectedRoute>
      } />
      <Route path='/signup' element={
        <ProtectedRoute>
          <SignupPage />
        </ProtectedRoute>} />
      <Route path='/register' element={
        <PrivateRoute>
          <RegisterPage />
        </PrivateRoute>
      } />
      <Route path='/processing' element={
        <PrivateRoute>
          <ProcessingPage />
        </PrivateRoute>
      } />
      <Route path='/status' element={
        <PrivateRoute>
          <MessagePage/>
        </PrivateRoute>
      }/>
    </Routes>
  );
}

export default App;
