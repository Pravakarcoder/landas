import type { BasicInputProps } from "@/shared/types/inputTypes";
import classNameMerge from "@/shared/utils/classNameMerge";

export default function BasicInput({
  type = "text",
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  readOnly = false,
  className,
  id,
  name,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  error = false,
  fullWidth = true,
  onChange,
  onBlur,
  onFocus,
}: BasicInputProps) {
  const baseClasses =
    "px-4 py-3 text-base bg-input border rounded transition-colors duration-200 placeholder:text-input-placeholder focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 caret-[#F2B705]";

  const borderClasses = error
    ? "border-error focus:border-error"
    : "border-input-border focus:border-input-border-focus";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      id={id}
      name={name}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      className={classNameMerge([
        baseClasses,
        borderClasses,
        fullWidth && "w-full",
        className,
      ])}
    />
  );
}
