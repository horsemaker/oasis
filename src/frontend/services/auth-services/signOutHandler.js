export const signOutHandler = (setAuth) => {
  localStorage.removeItem("AUTH_TOKEN");
  setAuth((auth) => ({
    ...auth,
    status: false,
    token: null,
  }));
};
