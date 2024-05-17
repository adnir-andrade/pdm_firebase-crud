import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import LoginButton from "../components/LoginButton";
import FullScreen from "../components/containers/Fullscreen";
import Background from "../components/ui/Background";
import Logo from "../components/ui/Logo";
import LoginForm from "../components/LoginForm";
import useToken from "../hooks/useToken";
import useAuth from "../firebase/hooks/useAuth";

const generateRandomString = (length: number): string => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
};

export default function index() {
  const router = useRouter();
  const { token, saveToken } = useToken();
  const { user, login, loading } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(username, password);
      const token = generateRandomString(7);
      saveToken(token);
      router.push("/petList");
    } catch (error: any) {}
  };

  useEffect(() => {
    if (token) {
      router.push("/petList");
    }
  }, [token]);

  return (
    <FullScreen>
      <Background>
        <View style={styles.container}>
          <Logo />
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
          <LoginButton onPress={handleLogin} />
        </View>
      </Background>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
