import { useState } from 'react';
import { IinitialData } from '../interface/Interface';

const useFormState = (initialData: IinitialData) => {
  const [formState, setFormState] = useState<IinitialData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState({} as IinitialData); // Definir todos os campos como strings vazias
  };

  return [formState, handleChange, resetForm] as const;
};

export default useFormState;
