import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="font-primary">
      <nav>Navbar</nav>
      <main className="max-w-screen-2xl mx-auto min-h-screen py-6 px-4 ">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
