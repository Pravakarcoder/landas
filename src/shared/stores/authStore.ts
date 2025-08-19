import { create } from 'zustand';
import type { AuthState, LoginFormData, ValidationErrors } from '@/features/auth/types/auth';

// Mock authentication function
const mockLogin = async (data: LoginFormData): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock validation - for demo purposes
  if (data.id === 'IDIDID222' && data.password === 'Password123!') {
    return Promise.resolve();
  }
  
  throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isLoading: false,
  isAuthenticated: false,
  errors: {},
  formData: {
    id: '',
    password: '',
  },

  setFormData: (data: Partial<LoginFormData>) => 
    set(state => ({
      formData: { ...state.formData, ...data },
      errors: {}, // Clear errors when user types
    })),

  setErrors: (errors: ValidationErrors) => 
    set({ errors }),

  setLoading: (loading: boolean) => 
    set({ isLoading: loading }),

  login: async (data: LoginFormData) => {
    set({ isLoading: true, errors: {} });
    
    try {
      await mockLogin(data);
      set({ 
        isAuthenticated: true, 
        isLoading: false,
        errors: {},
        formData: { id: '', password: '' }
      });
    } catch (error) {
      set({ 
        isLoading: false,
        errors: { 
          password: error instanceof Error ? error.message : '로그인에 실패했습니다.' 
        }
      });
    }
  },

  logout: () => 
    set({ 
      isAuthenticated: false, 
      formData: { id: '', password: '' },
      errors: {}
    }),

  clearErrors: () => 
    set({ errors: {} }),
}));