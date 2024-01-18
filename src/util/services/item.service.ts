import axios, { AxiosHeaders } from "axios";
import authHeader from "./auth-header";

export interface AddItemData {
  name: string;
  description: string;
}

export interface Item {
  id?: string;
  name: string;
  description: string;
}


const API_URL = "http://localhost:8000/api/";
 const addItem = (formData: AddItemData) => {
  const { name, description } = formData;
  return axios
    .post<{token: string}>(API_URL + "items/", {
      name,
      description,
    }, {
        headers: authHeader() as AxiosHeaders,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};


const getAllItems = () => {
  return axios.get<Item[]>(`${API_URL}items/`, { headers: authHeader() as AxiosHeaders });
};

const updateItem = (itemId: string, formData: Item) => {
  const { name, description } = formData;
  return axios.patch<Item>(`${API_URL}items/${itemId}/`, { name, description }, { headers: authHeader() as AxiosHeaders });
};

// Delete item function
const deleteItem = (itemId: string) => {
  return axios.delete<void>(`${API_URL}items/${itemId}/`, { headers: authHeader() as AxiosHeaders });
};

const UserService = { addItem, updateItem, deleteItem, getAllItems };


export default UserService;