import React from "react";
import { useSearchParams, useNavigate } from "react-router";
import { useState } from "react";
import { supabase } from "../../api/supabase.js";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword(credentials);
    if (error) {
      setLoginError(error);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate(searchParams.get("redirect"));
  };

  return (
    <main className="bg-background dark:bg-dark-background w-full h-screen flex justify-center items-center gap-5">
      <div className="bg-surface  w-2/3 h-2/3 shadow rounded-xl flex flex-col justify-center items-center gap-5">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-start items-center gap-1"
        >
          <div className="w-2/3 flex flex-col gap-1">
            <label className="text-text text-lg capitalize font-medium py-1">email</label>
            <input
              type="text"
              className="bg-text rounded border outline-0 py-2 px-3 focus:border-blue-700"
              value={credentials.email}
              onChange={(e) =>
                setCredentials((perv) => ({ ...perv, email: e.target.value }))
              }
            />
          </div>
          <div className="w-2/3 flex flex-col gap-1">
            <label className="text-text text-lg capitalize font-medium py-1">
              password
            </label>
            <input
              type="password"
              className="bg-text rounded border outline-0 py-2 px-3 focus:border-blue-700"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((perv) => ({
                  ...perv,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <input
            type="submit"
            value={loading ? "Loading..." : "Login"}
            className="mt-5 w-2/3 px-3 py-2 rounded bg-accent text-white text-xl cursor-pointer font-medium hover:bg-accent-hover"
          />
          {loginError && (
            <h1 className="w-2/3 text-start text-red-500">{loginError}</h1>
          )}
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
