import type { ReactNode, InputHTMLAttributes } from 'react';

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  consentCheckbox: boolean;
}
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  isError?: boolean;
  errorMessage?: string;
}
