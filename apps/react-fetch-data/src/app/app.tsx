import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MessagePage } from './pages/message.page';

export const App = () => {
  return (
    <div>
      <div>
        <NavLink to="/message/1">Message 1</NavLink>
        <NavLink to="/message/2">Message 2</NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/message/:id" element={<MessagePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
