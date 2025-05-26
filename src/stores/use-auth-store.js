import { create } from "zustand";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "/firebase.config";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      set({ user });
    });
  };
  observeAuthState();

  return {
    user: null,

    loginGoogleWithPopUp: async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        set({ user: result.user });
        return result;
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ user: null });
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
  };
});

export default useAuthStore;