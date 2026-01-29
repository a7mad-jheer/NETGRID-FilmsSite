"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import FormInput from "../../Dashboard/defaults/FormInput";
import { Form } from "@/components/ui/form";
import MaxWidthWrapper from "../../Dashboard/defaults/MaxWidthWrapper";
import MotionItem from "../../Dashboard/defaults/MotionItem";
import Logo from "../../Dashboard/defaults/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signupSchema = z
  .object({
    name: z
      .string()
      .min(2)
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain letters and spaces",
      }),
    username: z
      .string()
      .min(3)
      .regex(/^[a-zA-Z\s_]+$/, {
        message: "Name can only contain letters , spaces and _",
      }),
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "password must be at least 5 characters" }),
    confirmPassword: z.string().min(5, { message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const router = useRouter();
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      const response = await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("signup Falied", result.message);
      } else {
        console.log("signup successful", result.message);
      }

      router.push("/loginPage");
    } catch (err: any) {
      console.log("Error from system", err.message);
    }
  };

  return (
    <MotionItem
      transition={{ transform: 200 }}
      initial={{ y: -100, x: 100, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 4 }}
    >
      <MaxWidthWrapper className="w-fit bg-black/40 p-10 rounded-2xl text-center">
        <Logo className="text-3xl " />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormInput name="name" label="Name" />
            <FormInput name="username" label="Username" />
            <FormInput name="email" label="Email" />
            <FormInput name="password" label="Password" />
            <FormInput name="confirmPassword" label="ConfirmPassword" />
            <Button
              className="border-2 bg-transparent text-white hover:bg-amber-500/70 duration-300 cursor-pointer mb-4"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className="capitalize flex items-center gap-2 text-base font-semibold">
          <p>already have an account ?! </p>
          <Link
            className="text-red-600 underline hover:text-red-700"
            href={`/loginPage`}
          >
            Login in to your account now
          </Link>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
}
