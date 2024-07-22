// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { RootState } from '../store';

// interface User {
//   role: string;
// }

// const AdminRoute = ({ children }: { children: JSX.Element }) => {
//   const user = useSelector((state: RootState) => state.user as User);

//   if (!user || user.role !== 'admin') {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default AdminRoute;
