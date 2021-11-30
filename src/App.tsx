import { createContext } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';

import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rooms/new" element={<NewRoom/>} />
          <Route path="/rooms/:id" element={<Room/>} />
          <Route path="/admin/rooms/:id" element={<AdminRoom/>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
