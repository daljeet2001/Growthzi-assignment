import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RoomPage from '../screens/RoomPage'
import RoomSinglePage from '../screens/RoomSinglePage'


const AppRoutes = () => {
  return (
    <>
    
      <Routes>
        <Route path="/room" element={<RoomPage />} />
        <Route path="/single-room" element={<RoomSinglePage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
