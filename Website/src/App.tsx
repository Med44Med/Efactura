import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import './i18n/config.ts'

import Dashboard from "./routes/dashboard";
import Layout from "./routes/layout";
import Invoices from "./routes/invoices/invoices";
import NewInvoice from "./routes/invoices/newInvoice";
import InvoicesTemplates from "./routes/invoices/invoicesTemplates";
import LoginPage from "./routes/auth/loginPage";
import SignUpPage from "./routes/auth/signUpPage";
import Settings from "./routes/settings";
import Estimates from "./routes/estimates/estimates";
import NewEstimate from "./routes/estimates/newEstimate";
import EstimatesTepmlates from "./routes/estimates/estimatesTepmlates";
import Clients from "./routes/clients/clients";
import NewClient from "./routes/clients/newClient";
import Company from "./routes/company";
import Profile from "./routes/profile";
import Analytics from "./analytics";
import NotFound from "./routes/not-found";
import useAuth from "./Zustand/auth";
import Products from "./routes/products/products";
import NewProducts from "./routes/products/newProducts";
import NonUserDashboard from "./routes/nonUser/nonUserDashboard";
import NonUserInvoice from "./routes/nonUser/nonUserInvoice";
import Example from "./example";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Analytics>
        <Routes>
          {!user ? (
            <>
              <Route index element={<NonUserDashboard />} />
              <Route path="/invoice" element={<NonUserInvoice />} />
            </>
          ) : (
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />

              <Route path="/invoices" element={<Invoices />} />
              <Route path="/invoices/new" element={<NewInvoice />} />
              <Route
                path="/invoices/templates"
                element={<InvoicesTemplates />}
              />

              <Route path="/estimates" element={<Estimates />} />
              <Route path="/estimates/new" element={<NewEstimate />} />
              <Route
                path="/estimates/templates"
                element={<EstimatesTepmlates />}
              />

              <Route path="/products" element={<Products />} />
              <Route path="/new-items" element={<NewProducts />} />

              <Route path="/clients" element={<Clients />} />
              <Route path="/new-client" element={<NewClient />} />

              <Route path="/company" element={<Company />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          )}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot" element={<SignUpPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Analytics>
    </BrowserRouter>
  );
}

export default App;
