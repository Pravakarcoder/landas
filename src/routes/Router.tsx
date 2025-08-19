import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ProductsPage from "@/pages/ProductsPage";
import CommunityPage from "@/pages/CommunityPage";
import NotFound from "@/pages/NotFound";
import { useAuthStore } from "@/shared/stores/authStore";
import Footer from "@/shared/components/organisms/Footer";
import NavBar from "@/shared/components/organisms/NavBar";
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/forgot-password" element={<LoginPage />} />
        <Route path="/reset-password" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
