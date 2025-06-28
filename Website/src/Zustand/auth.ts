import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      login: async (profile) => await set({user:profile}),
      logout: () =>set({user:null}),
    }),
    {
      name: "user",
    }
  )
);

export default useAuth;