import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine((value) =>
    /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value)))
  );

export const insertProductShema = z.object({
  name: z.string().min(3, "Имя - должно быть минимум 3 буквы"),
  slug: z.string().min(3, "Слаг - должно быть минимум 3 буквы"),
  category: z.string().min(3, "Категория - должно быть минимум 3 буквы"),
  brand: z.string().min(3, "Брэнд - должно быть минимум 3 буквы"),
  description: z.string().min(3, "Описание - должно быть минимум 3 буквы"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Должно быть хотя бы 1 фото"),
  isFeauted: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormShema = z.object({
  email: z.string().email("Неправильно введен имейл"),
  password: z.string().min(6, "Минимум 6 символов"),
});

export const signUpFormShema = z
  .object({
    name: z.string().min(3, "Имя должно содержать хотя бы 3 символа"),
    email: z.string().email("Неправильно введен имейл"),
    password: z.string().min(6, "Минимум 6 символов"),
    confirmPassword: z
      .string()
      .min(6, "Минимум 6 символов и должен совпадать с паролем"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
