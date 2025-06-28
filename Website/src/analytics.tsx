import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";

const Analytics = ({ children }) => {
  const { pathname } = useLocation();
  const [visitedLink, setVisitedLink] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setVisitedLink((perv) => [...perv, pathname]);
  }, [pathname]);

  useEffect(() => {
    const createSession = async () => {
      const { error } = await supabase.from("analytics").insert({ device: "windows" });
      if (error) {
        console.log(error);
      }
    };
    // const updateSession = async () => {
    //   const { data, error } = await supabase
    //     .from("analytics")
    //     .update({ links: visitedLink })
    //     .eq("id", sessionId);
    //     console.log({ data, error });
        
    // };
    createSession();
    return () => {
    //   updateSession();
    };
  }, []);

  return children;
};

export default Analytics;
