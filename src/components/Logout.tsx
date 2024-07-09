// src/components/Logout.tsx
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate }  from 'react-router-dom';
import  { logoutUser } from '../services/authService'; // Adjust the path as necessary

const Logout = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
    history('/login'); // Redirect to login or home page after logout
  }, [dispatch, history]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Logging Out...</h1>
    </div>
  );
};

export default Logout;
