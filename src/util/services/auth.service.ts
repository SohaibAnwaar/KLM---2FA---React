import axios from "axios";
import toast from "react-hot-toast";

const API_URL = `${import.meta.env.VITE_BE_BASE_URL}/api/auth/`;
export interface OTPData{
  otp: string;
  user_id: string;
}


export interface PasswordReset{
  email: string;
}
export interface PasswordResetConfirm {
  new_password1: string;
  new_password2: string;
  uid?: string ;
  token?: string;
}

export interface ActivateData {
  key: string;
}

export interface ActivateResponse {
  detail: string;
}

interface SignUpResponse {
  token: string;
}

export interface SignUpFormData {
  username: string;
  email: string;
  password1: string;
  password2: string;
  name: string;
}

export interface ResendEmail {
  email: string;
}


export interface SignInFormData {
  username: string;
  password: string;
}


interface SignInResponse {
  token: string;
}

const register = (formData: SignUpFormData) => {
  const { username, email, password1, password2, name } = formData;

  return axios.post<SignUpResponse>(API_URL + "register/", {
    username,
    email,
    password1,
    password2,
    name
  }).then((response) => {
      return response.data;
    });
};

const registerAgain = (formData: ResendEmail) => {
  const { email,  } = formData;
  return axios.post(API_URL + "register/resend-email/", {
    email,
  }).then((response) => {
      return response.data;
    });
};

const activate = (data: ActivateData) => axios.post<ActivateResponse>(API_URL + "account-confirm-email/", data).then((response) => {
    toast.success("Email Verified Successfully!")
      return response.data;
    }).catch((error) => {
     toast.error(error.response.data.detail); 
    });


const verifyOTP = (data: OTPData) => axios.post<ActivateResponse>(API_URL + "verify-otp/", data).then((response) => {
    toast.success("Email Verified Successfully!")
    localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }).catch((error) => {
     toast.error(error.response.data.detail); 
    });


const resetPassword = (data: PasswordReset) => axios.post(API_URL + "password/reset/", data).then((response) => {
      return response.data;
    }).catch((error) => {
     toast.error(error.response.data.detail); 
    });

const resetPasswordConfirm = (data: PasswordResetConfirm) => axios.post(API_URL + "password/reset/confirm/", data).then((response) => {
      return response.data;
    }).catch((error) => {
     toast.error(error.response.data.detail); 
    });
const login = (formData: SignInFormData) => {
  const { username, password } = formData;
  return axios
    .post<SignInResponse>(API_URL + "login/", {
      username,
      password,
    })
    .then((response) => {
        localStorage.setItem("userid", JSON.stringify(response.data));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};






const AuthService = {
  register,
  activate,
  login,
  logout,
verifyOTP,
resetPassword,
resetPasswordConfirm,
registerAgain
};

export default AuthService;
