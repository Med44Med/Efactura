import { supabase } from "./supabase";

export const fetchProfile = async (id) => {
  const { data, error } = await supabase.from("profiles").select().eq("id", id);
  if (error) {
    return;
  }
  return data[0];
};

export const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };

