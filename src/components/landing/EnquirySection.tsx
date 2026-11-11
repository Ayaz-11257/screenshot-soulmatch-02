import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EXPERIENCE_OPTIONS, INTEREST_OPTIONS } from "./data";
import { enquirySchema, type EnquiryValues } from "./enquiry-schema";
import { useEnquiry } from "./enquiry-context";

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

const fieldClass = "h-12 rounded-xl border-input bg-background/60 text-base";

export function EnquirySection() {
  const { interest, setInterest } = useEnquiry();
  const [submitted, setSubmitted] = useState<EnquiryValues | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "" },
  });

  useEffect(() => {
    if (interest) setValue("interest", interest, { shouldValidate: false });
  }, [interest, setValue]);

  const onSubmit = (values: EnquiryValues) => {
    // No backend is connected: the enquiry stays in the browser and is not sent anywhere.
    setSubmitted(values);
  };

  const interestLabel = INTEREST_OPTIONS.find((o) => o.value === submitted?.interest)?.label;

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-card p-6 shadow-card sm:p-10 lg:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-highlight">Enquire</p>
              <h2 id="enquire-title" className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Start your AI journey
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us what you'd like to learn and where you're starting from. We'll use it to recommend the right
                course and stage for you.
              </p>
              <div className="mt-8 flex max-w-md gap-3 rounded-2xl border border-border bg-background/50 p-4 text-sm text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden />
                <p>
                  This is a demo website. The form checks your details but does not send them anywhere — no backend is
                  connected yet.
                </p>
              </div>
            </div>

            {submitted ? (
              <div role="status" aria-live="polite" className="flex flex-col items-start justify-center rounded-3xl border border-success/40 bg-background/60 p-8">
                <CheckCircle2 className="size-12 text-success" aria-hidden />
                <h3 className="mt-5 text-2xl font-semibold text-foreground">Thanks, {submitted.name.split(" ")[0]}!</h3>
                <p className="mt-3 text-muted-foreground">
                  Your enquiry about <span className="font-medium text-foreground">{interestLabel}</span> passed all
                  checks. Because this is a demo site, it hasn't been sent to anyone — on a live site, our team would
                  reply to <span className="font-medium text-foreground">{submitted.email}</span>.
                </p>
                <Button
                  variant="glass"
                  size="pill"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(null);
                    setInterest("");
                    reset();
                  }}
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5" aria-label="Course enquiry">
                <div>
                  <Label htmlFor="enquiry-name">Full name</Label>
                  <Input
                    id="enquiry-name"
                    autoComplete="name"
                    placeholder="Your name"
                    className={`mt-2 ${fieldClass}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  <FieldError id="name-error" message={errors.name?.message} />
                </div>
                <div>
                  <Label htmlFor="enquiry-email">Email</Label>
                  <Input
                    id="enquiry-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`mt-2 ${fieldClass}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="enquiry-interest">Learning interest</Label>
                    <Controller
                      control={control}
                      name="interest"
                      render={({ field }) => (
                        <Select
                          value={field.value ?? ""}
                          onValueChange={(v) => {
                            field.onChange(v);
                            setInterest(v);
                          }}
                        >
                          <SelectTrigger
                            id="enquiry-interest"
                            className={`mt-2 w-full ${fieldClass}`}
                            aria-invalid={!!errors.interest}
                            aria-describedby={errors.interest ? "interest-error" : undefined}
                            onBlur={field.onBlur}
                          >
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {INTEREST_OPTIONS.map((o) => (
                              <SelectItem key={o.value} value={o.value}>
                                {o.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError id="interest-error" message={errors.interest?.message} />
                  </div>
                  <div>
                    <Label htmlFor="enquiry-experience">Experience level</Label>
                    <Controller
                      control={control}
                      name="experience"
                      render={({ field }) => (
                        <Select value={field.value ?? ""} onValueChange={field.onChange}>
                          <SelectTrigger
                            id="enquiry-experience"
                            className={`mt-2 w-full ${fieldClass}`}
                            aria-invalid={!!errors.experience}
                            aria-describedby={errors.experience ? "experience-error" : undefined}
                            onBlur={field.onBlur}
                          >
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            {EXPERIENCE_OPTIONS.map((o) => (
                              <SelectItem key={o.value} value={o.value}>
                                {o.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError id="experience-error" message={errors.experience?.message} />
                  </div>
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-2 w-full sm:w-auto sm:justify-self-start" disabled={isSubmitting}>
                  Submit enquiry <ArrowRight />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
