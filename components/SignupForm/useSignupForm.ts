import { useState } from 'react';
import signupAction from './action';
import checkAllFormComplete from '@/utils/checkAllFormComplete';
import { redirect } from 'next/navigation';

interface SignupType {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
  isChecked: boolean;
}

interface SignupState {
  status: boolean;
  code?: string;
  field?: string;
  message: string;
}

const INITIAL_SIGNUP_FORM_VALUE = {
  email: '',
  nickname: '',
  password: '',
  checkPassword: '',
  isChecked: false,
};

const SPACE_KEY = ' ';

export default function useSignupForm() {
  const [formData, setFormData] = useState<SignupType>(INITIAL_SIGNUP_FORM_VALUE);
  const [isPasswordVisible, setIsPasswordVisible] = useState<Record<string, boolean>>({
    password: false,
    checkPassword: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState<SignupState>({
    status: false,
    code: '',
    field: '',
    message: '',
  });
  const [isPending, setIsPending] = useState(false);

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
    if (e.key !== SPACE_KEY) return;
    e.preventDefault();
  };

  const toggleVisiblePassword = (name: string) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const isFomrComplete = checkAllFormComplete({
    email: formData.email,
    nickname: formData.nickname,
    password: formData.password,
    checkPassword: formData.checkPassword,
    isChecked: formData.isChecked,
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });

    setIsPending(true);

    const result = await signupAction(fd);
    if (!result) return;
    setState(result);

    setIsPending(false);
    if (result.code) {
      setIsModalOpen(true);
    }
  };

  const onClose = () => {
    if (state?.status === true) {
      redirect('/login');
    } else {
      setIsModalOpen(false);
    }
  };

  return {
    formData,
    handleFormChange,
    handleIsChecked,
    handlePreventSpace,
    isPasswordVisible,
    toggleVisiblePassword,
    isFomrComplete,
    handleFormSubmit,
    isModalOpen,
    onClose,
    state,
    isPending,
  };
}
