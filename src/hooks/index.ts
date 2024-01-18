import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import AuthService, { SignInFormData, SignUpFormData } from "../util/services/auth.service";
import UserService, { AddItemData, Item } from "../util/services/item.service";


export const useRegister = (onSuccess: () => void) => useMutation({
    mutationFn:  (formData: SignUpFormData) => AuthService.register(formData),
    onSuccess: () => {
        toast.success("Registered Successfully!")
        onSuccess();
    },
    onError: () => {
        toast.error("Something went wrong!")
    }


  }) 


export const useLogin = (onSuccess: () => void) => useMutation({
    mutationFn:  (formData: SignInFormData) => AuthService.login(formData),
    onSuccess: () => {
        onSuccess();
    },
    onError: () => {
        onSuccess();
        toast.error("Something went wrong!")
    }


  }) 



export const useAddItem = (onSuccess: () => void) => useMutation({
    mutationFn:  (formData: AddItemData) => UserService.addItem(formData),
    onSuccess: (data) => {
        console.log(data)
        toast.success("Item Added Successfully!")
        onSuccess();
    },
    onError: () => {
        onSuccess();
        toast.error("Something went wrong!")
    }
  }) 

export const useUpdateItem = (onSuccess: () => void) => useMutation({
    mutationFn: (data: {itemId: string, formData: Item}) => UserService.updateItem(data.itemId, data.formData),
    onSuccess: () => {

      toast.success('Item Updated Successfully!');
      onSuccess();

    },
    onError: () => {
      toast.error('Something went wrong!');
      onSuccess();
    },
  });

export const useDeleteItem = (onSuccess: () => void) => {

  return useMutation({
    mutationFn: (itemId: string) => UserService.deleteItem(itemId),
    onSuccess: () => {
      toast.success('Item Deleted Successfully!');
      onSuccess();
    },
    onError: () => {
      toast.error('Something went wrong!');
    },
  });
};

export const useGetAllItems = () => useQuery('items', UserService.getAllItems); // Assuming getAllItems fetches all items, adjust accordingly
