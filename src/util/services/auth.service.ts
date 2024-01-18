import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

interface SignUpResponse {
  token: string;
}

export interface SignUpFormData {
  username: string;
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
}


export interface SignInFormData {
  username: string;
  password: string;
}


interface SignInResponse {
  token: string;
}

const register = (formData: SignUpFormData) => {
  const { username, email, password1, password2, first_name, last_name } = formData;

  return axios.post<SignUpResponse>(API_URL + "register/", {
    username,
    email,
    password1,
    password2,
    first_name,
    last_name
  }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (formData: SignInFormData) => {
  const { username, password } = formData;
  return axios
    .post<SignInResponse>(API_URL + "token-create/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

interface User {
  token: string;
}

const getCurrentUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};




const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
