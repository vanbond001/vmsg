import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { MessagesProvider } from './MessageContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import MessagePage from "./MessagePage";
import Rotes from "./Routes";  // Assuming this is the correct import
import './App.css';


function App() {
  // axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.baseURL = 'https://vchat-backend-cs72.onrender.com';
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <MessagesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Rotes />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/messages/:selectedUserId" element={<MessagePage />} />
        </Routes>
        </Router>
      </MessagesProvider>
    </UserContextProvider>
  );
}

export default App;
