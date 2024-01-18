import { ChangeEvent, SetStateAction } from 'react';

const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<SetStateAction<any>>
) => {
  const { name, value } = e.target;
  setFormData((prevFormData: any) => ({
    ...prevFormData,
    [name]: value,
  }));
};

export default handleChange;
