export type LoginFormData = {
  id: string;
  password: string;
};

export type ValidationErrors = {
  id?: string;
  password?: string;
};

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  errors: ValidationErrors;
  formData: LoginFormData;
  
  // Actions
  setFormData: (data: Partial<LoginFormData>) => void;
  setErrors: (errors: ValidationErrors) => void;
  setLoading: (loading: boolean) => void;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  clearErrors: () => void;
};