import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "@/shared/components/molecules/FormInput";
import BasicButton from "@/shared/components/atoms/BasicButton";
import Text from "@/shared/components/atoms/Text";
import { useAuthStore } from "@/shared/stores/authStore";
import useAuthValidation from "@/features/auth/hooks/useAuthValidation";
import classNameMerge from "@/shared/utils/classNameMerge";

export default function LoginForm() {
  const { formData, errors, isLoading, setFormData, login } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { errors: validationErrors, isValid } = useAuthValidation(formData);

  const displayErrors = { ...validationErrors, ...errors };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    await login(formData);
  };

  const handleInputChange =
    (field: "id" | "password") => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ [field]: e.target.value });
    };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* LANDAS Logo */}
      <div className="text-center mb-12">
        <Text variant="logo" color="primary" align="center">
          LANDAS
        </Text>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요"
          value={formData.id}
          onChange={handleInputChange("id")}
          error={!!displayErrors.id}
          errorMessage={displayErrors.id}
          autoComplete="username"
          disabled={isLoading}
        />

        <div className="space-y-2">
          <div className="relative w-full">
            <FormInput
              label="비밀번호"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요"
              value={formData.password}
              onChange={handleInputChange("password")}
              error={!!displayErrors.password}
              errorMessage={displayErrors.password}
              autoComplete="current-password"
              disabled={isLoading}
            />

            {formData.password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[55%] -translate-y-1/2 flex items-center text-gray-400 hover:text-gray-600 focus:text-blue-500 transition-colors"
                title={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {formData.password && !displayErrors.password && (
            <Text variant="caption" color="muted">
              8-16자 미만, 대소문자+숫자+특수문자 조합
            </Text>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-primary bg-input-border border-input-border rounded focus:ring-ring focus:ring-2  accent-[#F2B705] "
            disabled={isLoading}
          />
          <label htmlFor="remember-me">
            <Text variant="body2" color="inherit">
              아이디 저장
            </Text>
          </label>

          <div className="flex-1" />

          <Link
            to="/forgot-password"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            아이디찾기
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            to="/reset-password"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            비밀번호 찾기
          </Link>
        </div>

        {/* Login Button */}
        <BasicButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isLoading || !formData.id || !formData.password}
          className={classNameMerge(["mt-8", isLoading && "cursor-wait"])}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </BasicButton>

        {/* Sign Up Link */}
        <div className="text-center pt-4">
          <Link to="/signup">
            <BasicButton variant="outline" fullWidth>
              회원가입
            </BasicButton>
          </Link>
        </div>
      </form>
    </div>
  );
}
