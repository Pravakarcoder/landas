import { useNavigate } from 'react-router-dom';
import AppLayout from '@/shared/layouts/AppLayout';
import BasicButton from '@/shared/components/atoms/BasicButton';
import Text from '@/shared/components/atoms/Text';
import { useAuthStore } from '@/shared/stores/authStore';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8">
          <Text variant="logo" color="primary" align="center">
            LANDAS
          </Text>
          
          <div className="space-y-4">
            <Text variant="h2" align="center">
              환영합니다!
            </Text>
            <Text variant="body1" color="muted" align="center">
              로그인이 성공적으로 완료되었습니다.
            </Text>
          </div>

          <BasicButton 
            variant="outline" 
            onClick={handleLogout}
            className="mt-8"
          >
            로그아웃
          </BasicButton>
        </div>
      </div>
    </AppLayout>
  );
}