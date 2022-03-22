import axios from "axios";

export const signInHandler = async (user, setAuth, navigate) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
    setAuth((auth) => ({
      ...auth,
      status: true,
      token: localStorage.getItem("AUTH_TOKEN"),
    }));
    navigate("/");
  } catch (error) {
    console.error(error);
  }
};
