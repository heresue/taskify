import { useState, useActionState, startTransition } from 'react';
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
  const [isPasswordVisible, setIsPasswordVisible] = useState<Record<string, boolean>>({
    password: false,
    checkPassword: false,
  });
  const [state, formAction, isPending] = useActionState(signupAction, null);

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

  const handlePreventSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const toggleVisiblePassword = (name: string) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const isFormIncomplete =
    !formData.email ||
    !formData.nickname ||
    !formData.password ||
    !formData.checkPassword ||
    !formData.isChecked;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('email', formData.email);
    fd.append('nickname', formData.nickname);
    fd.append('password', formData.password);
    fd.append('checkPassword', formData.checkPassword);

    startTransition(() => {
      formAction(fd);
    });
  };

  return {
    formData,
    handleFormChange,
    handleIsChecked,
    handlePreventSpace,
    isPasswordVisible,
    toggleVisiblePassword,
    isFormIncomplete,
    handleFormSubmit,
    state,
    isPending,
  };
}
