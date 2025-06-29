import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./routes/dashboard";
import Layout from "./routes/layout";
import Invoices from "./routes/invoices/invoices";
import NewInvoice from "./routes/invoices/newInvoice";
import InvoicesTemplates from "./routes/invoices/invoicesTemplates";
import LoginPage from "./routes/auth/loginPage";
import SignUpPage from "./routes/auth/signUpPage";
import AuthProvider from "./components/AuthProvider";
import Settings from "./routes/settings";
import Estimates from "./routes/estimates/estimates";
import NewEstimate from "./routes/estimates/newEstimate";
import EstimatesTepmlates from "./routes/estimates/estimatesTepmlates";
import Items from "./routes/products/items";
import NewItem from "./routes/products/newItem";
import Clients from "./routes/clients/clients";
import NewClient from "./routes/clients/newClient";
import Company from "./routes/company";
import Profile from "./routes/profile";
import ConfigContextProvider from "./context/configContext";
import Analytics from "./analytics";
import NotFound from './routes/not-found';

function App() {
  return (
    <ConfigContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Analytics>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/new-invoices" element={<NewInvoice />} />
                <Route
                  path="/invoices-templates"
                  element={<InvoicesTemplates />}
                />
                <Route path="/estimates" element={<Estimates />} />
                <Route path="/new-estimates/" element={<NewEstimate />} />
                <Route
                  path="/estimates-templates"
                  element={<EstimatesTepmlates />}
                />
                <Route path="/items" element={<Items />} />
                <Route path="/new-items" element={<NewItem />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/new-client" element={<NewClient />} />
                <Route path="/company" element={<Company />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="forgot" element={<SignUpPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Analytics>
        </BrowserRouter>
      </AuthProvider>
    </ConfigContextProvider>
  );
}

export default App;
