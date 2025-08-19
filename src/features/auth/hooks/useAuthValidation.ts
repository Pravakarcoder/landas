import { useMemo } from 'react';
import type { LoginFormData, ValidationErrors } from '@/features/auth/types/auth';

export default function useAuthValidation(formData: LoginFormData) {
  const errors = useMemo((): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    // ID validation
    if (!formData.id.trim()) {
      newErrors.id = '아이디를 입력해주세요.';
    } else if (formData.id.length < 3) {
      newErrors.id = '아이디는 3자 이상이어야 합니다.';
    }

    // Password validation  
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '8-16자 미만, 대소문자+숫자+특수문자 조합';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(formData.password)) {
      newErrors.password = '아이디 또는 비밀번호가 일치하지 않습니다.';
    }

    return newErrors;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
}