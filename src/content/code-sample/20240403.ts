export const SAMPLE_1 = `
export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  consentCheckbox: boolean;
}

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
}
`;
export const SAMPLE_2 = `
function App() {
  const values = useFetch('/api');
  useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    values, // will get updated once values returns
  });
}
`;
export const SAMPLE_3 = `
<TextField
  label="Email"
  required
  isError={!!formState.errors.email}
  errorMessage={formState.errors.email?.message}
  type="email"
  placeholder="Email"
  {...register('email')}
/>;

const TextField = React.forwardRef(
  (
    { label, required, isError, errorMessage, ...rest }: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={rest.name}>
        {label}
        {required ? <strong className="pl-1 text-red-700">*</strong> : <></>}
      </label>
      <input
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
`;
export const SAMPLE_4 = `const { onChange, onBlur, name, ref } = register('email');
`;
export const SAMPLE_5 = `
const Schema = z
  .object({
    email: z.string().email({ message: 'Invalid email.' }),
    password: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long.' })
      .max(16, { message: 'Must be 16 or fewer characters long.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~\`-]).*$/,
        { message: 'Invalid password.' },
      ),
    confirmPassword: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long.' })
      .max(16, { message: 'Must be 16 or fewer characters long.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~\`-]).*$/,
        { message: 'Invalid password.' },
      ),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phoneNumber: z.string(),
    consentCheckbox: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
`;
export const SAMPLE_6 = `
const isButtonDisabled = !formState.isDirty || !formState.isValid;

return (
  <button
    form="signUpForm"
    disabled={isButtonDisabled}
    className="w-full rounded-xl bg-blue-400 py-[10px] text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
  >
    Submit
  </button>
);
`;
