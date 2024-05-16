import { z } from 'zod';

const Schema = z
  .object({
    email: z.string().email({ message: 'Invalid email.' }),
    password: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long.' })
      .max(16, { message: 'Must be 16 or fewer characters long.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`-]).*$/,
        { message: 'Invalid password.' },
      ),
    confirmPassword: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long.' })
      .max(16, { message: 'Must be 16 or fewer characters long.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`-]).*$/,
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

export default Schema;
