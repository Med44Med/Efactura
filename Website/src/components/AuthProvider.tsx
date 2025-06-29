import { useEffect } from "react";
import { supabase } from "../api/supabase";
import useAuth from "../Zustand/auth";
import { fetchProfile } from '../api/auth';

const AuthProvider = ({ children }:{children:React.Node}) => {
  const { user, login, logout } = useAuth();
  
  useEffect(() => {
    const checkUser = async (id) => {
      await login(await fetchProfile(id));
    };

    const sessionState = supabase.auth.onAuthStateChange((event, session) => {
      // console.log(event, session);
      if (session?.access_token && user === null) {
        checkUser(session.user.id);
      } 
      if (event === 'SIGNED_OUT') {        
        logout()
      }
    });

    return;
    sessionState.data.subcription.unsubscrice();
  }, []);

  return children;
};

export default AuthProvider;
