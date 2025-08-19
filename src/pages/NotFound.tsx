import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AppLayout from '@/shared/layouts/AppLayout';
import Text from '@/shared/components/atoms/Text';
import BasicButton from '@/shared/components/atoms/BasicButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <Text variant="h1" align="center">404</Text>
          <Text variant="h3" color="muted" align="center">
            페이지를 찾을 수 없습니다
          </Text>
          <Link to="/">
            <BasicButton variant="primary">
              홈으로 돌아가기
            </BasicButton>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
