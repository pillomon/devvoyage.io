import { zodResolver } from '@hookform/resolvers/zod';
import type { SignUpFormData, TextFieldProps } from './types';
import { Form, useForm } from 'react-hook-form';
import FormatLib from '@/libs/formatLib';
import Schema from './schema';
import React, { useEffect } from 'react';

const TextField = React.forwardRef(
  (
    { label, isRequired, isError, errorMessage, ...rest }: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={rest.name}>
        {label}
        {isRequired ? <strong className="pl-1 text-red-700">*</strong> : <></>}
      </label>
      <input
        ref={ref}
        id={rest.name}
        {...rest}
        className={FormatLib.cn(
          isError ? 'border-[1px] border-solid border-red-700' : '',
          'rounded-sm p-[10px]',
        )}
      />
      {isError ? (
        <span className="text-xs text-red-700">{errorMessage}</span>
      ) : (
        <></>
      )}
    </div>
  ),
);
const CheckboxField = React.forwardRef(
  (
    { label, isRequired, isError, errorMessage, ...rest }: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={rest.name}>
        {label}
        {isRequired ? <strong className="pl-1 text-red-700">*</strong> : <></>}
      </label>
      <input
        tabIndex={0}
        ref={ref}
        id={rest.name}
        {...rest}
        type="checkbox"
        className="h-[20px] w-[20px] rounded-sm p-[10px]"
      />
      {isError ? (
        <span className="text-xs text-red-700">{errorMessage}</span>
      ) : (
        <></>
      )}
    </div>
  ),
);

function ReactHookFormsWithZodIsland() {
  const {
    register,
    unregister,
    formState,
    watch,
    handleSubmit,
    reset,
    resetField,
    setError,
    clearErrors,
    setValue,
    setFocus,
    getValues,
    getFieldState,
    trigger,
    control,
  } = useForm<SignUpFormData>({
    mode: 'onChange',
    resolver: zodResolver(Schema),
    defaultValues: undefined,
  });
  const isButtonDisabled = !formState.isDirty || !formState.isValid;

  const onSubmit = (data: SignUpFormData) => {
    console.info(data);
    alert('Success!');
    reset();
  };

  useEffect(() => {
    console.log(`isDirty: ${formState.isDirty}`);
    console.log(`isValid: ${formState.isValid}`);
  }, [formState.isDirty, formState.isValid]);

  return (
    <div className="mx-auto flex w-full max-w-[768px] flex-col items-center gap-[50px] bg-gray-200 p-[20px]">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form
        id="signUpForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[30px]"
      >
        <TextField
          label="Email"
          isRequired
          isError={!!formState.errors.email}
          errorMessage={formState.errors.email?.message}
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <TextField
          label="Password"
          isRequired
          isError={!!formState.errors.password}
          errorMessage={formState.errors.password?.message}
          type="password"
          placeholder="Password"
          maxLength={16}
          {...register('password')}
        />
        <TextField
          label="Confirm Password"
          isRequired
          isError={!!formState.errors.confirmPassword}
          errorMessage={formState.errors.confirmPassword?.message}
          type="password"
          placeholder="Confirm Password"
          maxLength={16}
          {...register('confirmPassword')}
        />
        <TextField
          label="First Name"
          isRequired
          isError={!!formState.errors.firstName}
          errorMessage={formState.errors.firstName?.message}
          placeholder="First Name"
          {...register('firstName')}
        />
        <TextField
          label="Last Name"
          isRequired
          isError={!!formState.errors.lastName}
          errorMessage={formState.errors.lastName?.message}
          placeholder="Last Name"
          {...register('lastName')}
        />
        <TextField
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          {...register('phoneNumber')}
        />
        <CheckboxField
          label="Consent to receive advertising information"
          {...register('consentCheckbox')}
        />
      </form>
      <button
        form="signUpForm"
        disabled={isButtonDisabled}
        className="w-full rounded-xl bg-blue-400 py-[10px] text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Submit
      </button>
    </div>
  );
}

export default ReactHookFormsWithZodIsland;
