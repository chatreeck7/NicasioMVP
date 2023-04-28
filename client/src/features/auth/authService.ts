import axios from "axios";
import { LoginUser, User } from "../../interfaces/auth.interface";

const API_URL = "http://localhost:5001/api/v1/auth/";

// Register user
const register = async (userData: User) => {
  try {
    const response = await axios.post(API_URL + "register", userData);
    console.log(JSON.stringify(response.data));
    if (response.data) {
      localStorage.setItem("user", response.data._id);
      localStorage.setItem("access_token", response.data.token);
    }
    return response.data._id; //response.data
  } catch (error) {
    console.log("authService: register");
    console.log(error);
  }
};

// Login user
const login = async (userData: LoginUser) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    //localStorage.setItem('user',JSON.stringify(response.data))
    localStorage.setItem("user", response.data._id);
  }
  console.log(response.data);
  return response.data;
};
//Logout user
const logout = () => {
  localStorage.setItem("user", "");
};

export const authService = {
  register,
  login,
  logout,
};
