import { useState, useEffect } from "react";
import SecureStoreHelper from "../helpers/SecureStoreHelper";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await SecureStoreHelper.getString("authToken");
        setToken(storedToken);
      } catch (error) {
        console.error(
          "There was an error while trying to load this token: ",
          error
        );
      }
    };

    loadToken();
  }, []);

  const saveToken = async (newToken: string) => {
    try {
      await SecureStoreHelper.setString("authToken", newToken);
      setToken(newToken);
    } catch (error) {
      console.error(
        "There was an error while trying to save this token:",
        error
      );
    }
  };

  const deleteToken = async () => {
    try {
      await SecureStoreHelper.deleteData("authToken");
      setToken(null);
    } catch (error) {
      console.error(
        "There was an error while trying to delete this token:",
        error
      );
    }
  };

  return { token, saveToken, deleteToken };
};

export default useToken;
