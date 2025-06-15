import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./routes/dashboard";
import Layout from "./routes/layout";
import Invoice from "./routes/invoices/invoice";
import NewInvoice from "./routes/invoices/newInvoice";
import InvoicesTemplates from "./routes/invoices/invoicesTemplates";
import DashboardContextProvider from "./context/dashboardContext";

function App() {
  return (
    <DashboardContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/invoices" element={<Invoice />} />
            <Route path="/invoices/new" element={<NewInvoice />} />
            <Route path="/invoices/templates" element={<InvoicesTemplates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DashboardContextProvider>
  );
}

export default App;
