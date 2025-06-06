import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const signUpSchema = z.object({
  name: z.string().min(3, "Full name must be at least 3 characters long").max(20, "Full name must be at most 20 characters long"),
  username: z.string().min(3, "Username must be at least 3 characters long").max(15, "Username must be at most 15 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not match',
  path: ["confirmPassword"]
});