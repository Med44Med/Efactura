import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import { UAParser } from "ua-parser-js";
import { v5 as uuidv5, v4 as uuidv4 } from "uuid";

const Analytics = ({ children }: { children: React.ReactNode }) => {
  const { pathname }: { pathname: string } = useLocation();
  const [pathVisited, setPathVisited] = useState([]);

  useEffect(() => {
    setPathVisited((perv) => [...perv, pathname]);
  }, [pathname]);
  console.log(pathVisited);

  const generateAnalytics = async () => {
    const {
      os: { name: os },
      browser: { name: browser },
    } = UAParser();
    const {
      devicePixelRatio: ratio,
      innerWidth: width,
      innerHeight: height,
    } = window;
    const device = { os, browser, ratio, width, height };
    const { data, error } = await supabase
      .from("analytics")
      .insert({ device })
      .select();
    if (error) {
      console.log(error);
      return;
    }
    localStorage.setItem("session_id", data[0].id);
    localStorage.setItem("elapsed_time", Date.now());
  };

  const closeAnalytics = async () => {
    const id = localStorage.getItem("session_id");
    const start = Math.floor(localStorage.getItem("elapsed_time"));
    const { error } = await supabase
      .from("analytics")
      .update({
        elapsed_time: Math.floor((Date.now() - start) / 1000),
        links: pathVisited,
      })
      .eq("id", id);
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateAnalytics();
    return () => {
      closeAnalytics();
    };
  }, []);

  return children;
};

export default Analytics;
