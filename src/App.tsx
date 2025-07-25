// App.tsx
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./layouts/AnimatedRoutes";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
