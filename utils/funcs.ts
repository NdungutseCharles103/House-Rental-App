export const getLoginData = () => {
  try {
    const user = 'jwtDecode(getCookie("token"))';
    console.log(user);

    return user;
  } catch (error) {
    return null;
  }
};
