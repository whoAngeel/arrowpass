
import { useState } from "react";
import Body from "./components/shared/Body";
import Sidebar from "./components/shared/Sidebar";

export default function App() {
  const[contenido,setContenido] = useState('home'); 
  return (
    <div className="flex h-screen">
      <Sidebar cambiarContenido={setContenido}/>
      <Body contenido={contenido}/>
    </div>
  );
}
