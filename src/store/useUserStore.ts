import { Course } from "./../pages/data";
import { create } from "zustand";
interface UserStore {
  username: string | null;
  password: string | null;
  registeredCourses: Course[];
  matricNo: string | null;
  status: string | null;
  setRegisteredCourses: (value: Course[]) => void;
  setPassword: (value: string | null) => void;
  setUsername: (value: string | null) => void;
  setMatricNo: (value: string | null) => void;
  setStatus: (value: string | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  username: null,
  matricNo: null,
  status: null,
  password: null,
  registeredCourses: [],
  setPassword: (value: string | null) => set({ password: value }),
  setRegisteredCourses: (value: Course[]) => set({ registeredCourses: value }),
  setUsername: (value: string | null) => set({ username: value }),
  setMatricNo: (value: string | null) => set({ matricNo: value }),
  setStatus: (value: string | null) => set({ status: value }),
}));

export default useUserStore;
