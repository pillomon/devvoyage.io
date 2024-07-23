import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { F as FormatLib } from './index_BTnB4-Ge.mjs';
import { z } from 'zod';
import React, { useEffect } from 'react';

const Schema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(8, { message: "Must be 8 or more characters long." }).max(16, { message: "Must be 16 or fewer characters long." }).regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`-]).*$/,
    { message: "Invalid password." }
  ),
  confirmPassword: z.string().min(8, { message: "Must be 8 or more characters long." }).max(16, { message: "Must be 16 or fewer characters long." }).regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`-]).*$/,
    { message: "Invalid password." }
  ),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string(),
  consentCheckbox: z.boolean()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const TextField = React.forwardRef(
  ({ label, isRequired, isError, errorMessage, ...rest }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: rest.name, children: [
      label,
      isRequired ? /* @__PURE__ */ jsx("strong", { className: "pl-1 text-red-700", children: "*" }) : /* @__PURE__ */ jsx(Fragment, {})
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        id: rest.name,
        ...rest,
        className: FormatLib.cn(
          isError ? "border-[1px] border-solid border-red-700" : "",
          "rounded-sm p-[10px]"
        )
      }
    ),
    isError ? /* @__PURE__ */ jsx("span", { className: "text-xs text-red-700", children: errorMessage }) : /* @__PURE__ */ jsx(Fragment, {})
  ] })
);
const CheckboxField = React.forwardRef(
  ({ label, isRequired, isError, errorMessage, ...rest }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: rest.name, children: [
      label,
      isRequired ? /* @__PURE__ */ jsx("strong", { className: "pl-1 text-red-700", children: "*" }) : /* @__PURE__ */ jsx(Fragment, {})
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        tabIndex: 0,
        ref,
        id: rest.name,
        ...rest,
        type: "checkbox",
        className: "h-[20px] w-[20px] rounded-sm p-[10px]"
      }
    ),
    isError ? /* @__PURE__ */ jsx("span", { className: "text-xs text-red-700", children: errorMessage }) : /* @__PURE__ */ jsx(Fragment, {})
  ] })
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
    control
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(Schema),
    defaultValues: void 0
  });
  const isButtonDisabled = !formState.isDirty || !formState.isValid;
  const onSubmit = (data) => {
    console.info(data);
    alert("Success!");
    reset();
  };
  useEffect(() => {
    console.log(`isDirty: ${formState.isDirty}`);
    console.log(`isValid: ${formState.isValid}`);
  }, [formState.isDirty, formState.isValid]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-[768px] flex-col items-center gap-[50px] rounded-md bg-gray-200 p-[20px]", children: [
    /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold", children: "Sign Up" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        id: "signUpForm",
        onSubmit: handleSubmit(onSubmit),
        className: "flex w-full flex-col gap-[30px]",
        children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Email",
              isRequired: true,
              isError: !!formState.errors.email,
              errorMessage: formState.errors.email?.message,
              type: "email",
              placeholder: "Email",
              ...register("email")
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Password",
              isRequired: true,
              isError: !!formState.errors.password,
              errorMessage: formState.errors.password?.message,
              type: "password",
              placeholder: "Password",
              maxLength: 16,
              ...register("password")
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Confirm Password",
              isRequired: true,
              isError: !!formState.errors.confirmPassword,
              errorMessage: formState.errors.confirmPassword?.message,
              type: "password",
              placeholder: "Confirm Password",
              maxLength: 16,
              ...register("confirmPassword")
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "First Name",
              isRequired: true,
              isError: !!formState.errors.firstName,
              errorMessage: formState.errors.firstName?.message,
              placeholder: "First Name",
              ...register("firstName")
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Last Name",
              isRequired: true,
              isError: !!formState.errors.lastName,
              errorMessage: formState.errors.lastName?.message,
              placeholder: "Last Name",
              ...register("lastName")
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Phone Number",
              type: "tel",
              placeholder: "Phone Number",
              ...register("phoneNumber")
            }
          ),
          /* @__PURE__ */ jsx(
            CheckboxField,
            {
              label: "Consent to receive advertising information",
              ...register("consentCheckbox")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        form: "signUpForm",
        disabled: isButtonDisabled,
        className: "w-full rounded-xl bg-blue-400 py-[10px] text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400",
        children: "Submit"
      }
    )
  ] });
}

const islands = [
  {
    framework: "react",
    slug: "react-hook-form-with-zod",
    title: "React hook form with Zod",
    topic: "React Hook Forms & Zod 라이브러리로 만든 Form UI입니다.",
    component: ReactHookFormsWithZodIsland
  }
];

export { islands as i };
