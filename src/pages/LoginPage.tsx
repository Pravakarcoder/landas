import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/shared/layouts/AppLayout';
import LoginForm from '@/features/auth/components/organisms/LoginForm';
import { useAuthStore } from '@/shared/stores/authStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AppLayout>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </AppLayout>
  );
}