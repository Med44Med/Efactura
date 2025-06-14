import "./App.css";
import Home from "./routes/home";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./routes/dashboard";
import Invoice from './routes/invoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route element={<Dashboard />}>
          <Route index element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
