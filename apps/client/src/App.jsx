import Body from "./components/shared/Body";
import Sidebar from "./components/shared/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <Body/>
    </div>
  );
}
