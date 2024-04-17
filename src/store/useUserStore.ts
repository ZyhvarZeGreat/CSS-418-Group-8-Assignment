import { supabaseCourse } from "./../pages/data";
import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface UserStore {
  username: string | null;
  password: string | null;
  department: string | null;
  registeredCourses: supabaseCourse[];
  matricNo: string | null;
  status: string | null;
  user: User | null;
  setUser: (value: User | null) => void;
  setDepartment: (value: string | null) => void;
  setRegisteredCourses: (value: supabaseCourse[]) => void;
  setPassword: (value: string | null) => void;
  setUsername: (value: string | null) => void;
  setMatricNo: (value: string | null) => void;
  setStatus: (value: string | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  username: null,
  matricNo: null,
  user: null,
  status: null,
  password: null,
  department: null,
  registeredCourses: [],
  setUser: (value: User | null) => set({ user: value }),
  setDepartment: (value: string | null) => set({ department: value }),
  setPassword: (value: string | null) => set({ password: value }),
  setRegisteredCourses: (value: supabaseCourse[]) =>
    set({ registeredCourses: value }),
  setUsername: (value: string | null) => set({ username: value }),
  setMatricNo: (value: string | null) => set({ matricNo: value }),
  setStatus: (value: string | null) => set({ status: value }),
}));

export default useUserStore;
