// hooks/useSignup.js
import { useAuth } from "./useAuth";

export const useSignup = () => {
  const { setUser } = useAuth(); // Use the context's setUser function to update auth state

  const signup = async (email, password) => {
    try {
      //
      if (response.ok) {
        setUser({ email: data.email, token: data.token }); // Use setUser to update context
      } 
    } catch (err) {
      setError(err.message);
    }
  };
};