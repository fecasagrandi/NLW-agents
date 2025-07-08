import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateRoom />} />
      <Route path="/room" element={<Room />} />
    </Routes>
    </BrowserRouter>
  )
}