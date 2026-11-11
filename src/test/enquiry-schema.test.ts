import { describe, expect, it } from "vitest";
import { enquirySchema } from "@/components/landing/enquiry-schema";

const valid = { name: "Asha Rao", email: "asha@example.com", interest: "machine-learning", experience: "none" };

describe("enquiry form validation", () => {
  it("accepts a complete enquiry", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("requires a learning interest", () => {
    expect(enquirySchema.safeParse({ ...valid, interest: undefined }).success).toBe(false);
  });
  it("requires an experience level", () => {
    expect(enquirySchema.safeParse({ ...valid, experience: undefined }).success).toBe(false);
  });
  it("rejects a one-letter name", () => {
    expect(enquirySchema.safeParse({ ...valid, name: "A" }).success).toBe(false);
  });
});
