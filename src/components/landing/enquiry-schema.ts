import { z } from "zod";
import { EXPERIENCE_OPTIONS, INTEREST_OPTIONS } from "./data";

const interestValues = INTEREST_OPTIONS.map((o) => o.value) as [string, ...string[]];
const experienceValues = EXPERIENCE_OPTIONS.map((o) => o.value) as [string, ...string[]];

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  interest: z.enum(interestValues, { errorMap: () => ({ message: "Please choose a learning interest" }) }),
  experience: z.enum(experienceValues, { errorMap: () => ({ message: "Please choose your experience level" }) }),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
