import { useEffect, useState, useActionState } from 'react';
import signupAction from './action';

interface SignupType {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
  isChecked: boolean;
}

const INITIAL = {
  email: '',
  nickname: '',
  password: '',
  checkPassword: '',
  isChecked: false,
};

export default function useSignupForm() {
  const [formData, setFormData] = useState<SignupType>(INITIAL);
  const [state, formAction, isPending] = useActionState(signupAction, null);

  useEffect(() => {
    if (state?.status === false) {
      setFormData((prev) => ({
        ...prev,
        isChecked: prev.isChecked,
      }));
    }
  }, [state?.status]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIsChecked = () => {
    setFormData((prev) => ({
      ...prev,
      isChecked: !prev.isChecked,
    }));
  };

  return { formData, handleFormChange, handleIsChecked, state, formAction, isPending };
}
