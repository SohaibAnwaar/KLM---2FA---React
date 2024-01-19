import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import AuthService, {  OTPData, PasswordReset, PasswordResetConfirm, ResendEmail, SignInFormData, SignUpFormData } from "../util/services/auth.service";
import UserService, { AddItemData, Item } from "../util/services/item.service";


export const useRegister = (onSuccess: () => void) => useMutation({
    mutationFn:  (formData: SignUpFormData) => AuthService.register(formData),
    onSuccess: () => {
        toast.success("Email verification link sent Successfully!")
        onSuccess();
    },
    onError: () => {
        toast.error("Something went wrong!")
    }
  }) 

export const useRegisterAgain = () => useMutation({
    mutationFn:  (formData: ResendEmail) => AuthService.registerAgain(formData),
    onSuccess: () => {
        toast.success("Email verification link sent again Successfully!")
    },
    onError: () => {
        toast.error("Something went wrong!")
    }
  }) 
  
export const useActivate = (data: string) => useQuery(
    'activate',
    () => AuthService.activate({key: data}),
  );


export const useLogin = (onSuccess: (data: any) => void) => useMutation({
    mutationFn:  (formData: SignInFormData) => AuthService.login(formData),
    onSuccess: (data) => {
        onSuccess(data);
    },
    onError: () => {
        toast.error("Something went wrong!")
    }


  }) 


export const useVerifyOTP = (onSuccess: () => void) => useMutation({
    mutationFn:  (data: OTPData) => AuthService.verifyOTP(data),
    onSuccess: () => {
      toast.success("OTP Verified Successfully!")
      onSuccess();
    },
    onError: () => {
        toast.error("Something went wrong!")
    }
  }) 


export const useResetPassword = (onSuccess: () => void) => useMutation({
    mutationFn:  (data: PasswordReset) => AuthService.resetPassword(data),
    onSuccess: () => {
      toast.success("Recovery link sent Successfully!")
      onSuccess();
    },
    onError: () => {
        toast.error("Something went wrong!")
    }
  }) 

export const useResetConfirmPassword = (onSuccess: () => void) => useMutation({
    mutationFn:  (data: PasswordResetConfirm) => AuthService.resetPasswordConfirm(data),
    onSuccess: () => {
      toast.success("Password Changed Successfully!")
      onSuccess();
    },
    onError: () => {
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
