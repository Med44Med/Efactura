import React from "react";
import { useSearchParams, useNavigate } from "react-router";
import { useState } from "react";
import { supabase } from "../../api/supabase.js";
import useAuth from '../../Zustand/auth';

const LoginPage = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {login} = useAuth()
  
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        // emailRedirectTo: 'https://example.com/welcome',
        data: {
          username: credentials.username,
        },
      },
    });
    if (error) {
      setSignUpError(error?.message);
      setLoading(false);
      return;
    }
    setSignUpError("");
    setLoading(false);
    navigate(searchParams.get('redirect'), { replace: true });
  };

  return (
    <main className="bg-gray-200 w-full h-screen flex justify-center items-center gap-5">
      <div className="bg-white w-2/3 h-2/3 shadow rounded-xl flex flex-col justify-center items-center gap-5">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-start items-center gap-1"
        >
          <div className="w-2/3 flex flex-col gap-1">
            <label className="text-lg capitalize font-medium py-1">
              username
            </label>
            <input
              type="text"
              className="rounded border outline-0 py-2 px-3 focus:border-blue-700"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((perv) => ({
                  ...perv,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div className="w-2/3 flex flex-col gap-1">
            <label className="text-lg capitalize font-medium py-1">email</label>
            <input
              type="text"
              className="rounded border outline-0 py-2 px-3 focus:border-blue-700"
              value={credentials.email}
              onChange={(e) =>
                setCredentials((perv) => ({ ...perv, email: e.target.value }))
              }
            />
          </div>
          <div className="w-2/3 flex flex-col gap-1">
            <label className="text-lg capitalize font-medium py-1">
              password
            </label>
            <input
              type="password"
              className="rounded border outline-0 py-2 px-3 focus:border-blue-700"
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
            value={loading ? "Loading..." : "Register"}
            className="mt-5 w-2/3 px-3 py-2 rounded bg-blue-400 text-white text-xl cursor-pointer font-medium"
          />
          {signUpError && (
            <h1 className="w-2/3 text-start text-red-500">{signUpError}</h1>
          )}
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
