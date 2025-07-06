import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import { UAParser } from 'ua-parser-js';

const Analytics = ({ children }:{children:React.ReactNode}) => {
  const OS = UAParser().os.toString()

  const { pathname }:{pathname:string} = useLocation();
  const [visitedLink, setVisitedLink] = useState<string[]>([]);
  
  // const [sessionId, setSessionId] = useState(null);

  // console.log({
  //   os:OS,
  //   deviceWidth:window.innerWidth
  // });


  // const first = Date.now()

  // setTimeout(() => {
  //  const second=Date.now()
  //  const interval = second-first
  //  console.log(interval);
   
  // }, 5000);


  // NAVIGATOR :)
  

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
