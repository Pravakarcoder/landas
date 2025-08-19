import type { FormInputProps } from '@/shared/types/inputTypes';
import BasicInput from '@/shared/components/atoms/BasicInput';
import Text from '@/shared/components/atoms/Text';
import classNameMerge from '@/shared/utils/classNameMerge';

export default function FormInput({
  label,
  helperText,
  error = false,
  errorMessage,
  className,
  id,
  ...inputProps
}: FormInputProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const showError = error && errorMessage;

  return (
    <div className={classNameMerge(['space-y-2', className])}>
      <label htmlFor={inputId} className="block">
        <Text variant="body2" color="inherit">
          {label}
        </Text>
      </label>
      
      <BasicInput
        {...inputProps}
        id={inputId}
        error={error}
      />
      
      {showError && (
        <Text variant="caption" color="error" className="block">
          {errorMessage}
        </Text>
      )}
      
      {helperText && !showError && (
        <Text variant="caption" color="muted" className="block">
          {helperText}
        </Text>
      )}
    </div>
  );
}