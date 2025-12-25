"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../defaults/FormInput";
import MotionItem from "../defaults/MotionItem";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import Logo from "../defaults/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";




//هنا نتحقق من الفورم اذا هو صحيح ولا لء يعني كلمة السر وال جيميل صيغتهم صح وزي ما هو مطلوب ولا لء تسمى الحارس
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a vaild email" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

export default function Login() {
  const router = useRouter();
  //z.infer يتحقق من نوع البيانات اللي داخلة ولا يتحقق من القواعد الدقيقة يهمو فقط بس نوع البيانات
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const  onSubmit = async (data: z.infer<typeof loginSchema>) => {
    
    try {
      const response =await fetch("/api/login" , {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
      })

      const result = await response.json();

      if(!response.ok){
        
        return ;
      }else {
        console.log("Login Successfully" , result)
      }

      document.cookie = `token=${result.token}; path=/; secure; samesite=strict`;
      sessionStorage.setItem("user" , JSON.stringify(result.user));
      // localStorage.setItem("token" , result.token);
      // localStorage.setItem("user" , JSON.stringify(result.user));  
      // router.push("/Dashboard");

      const decode = jwt.decode(result.token) as JwtPayload;
      console.log(decode.id , decode.email , decode.name) 

      router.push("/Dashboard")

    }catch (err : any) {
      console.log(err.message);
    }
  };

  return (
    <MotionItem
      transition={{ transform: 200 }}
      initial={{ y: -100, x: 100, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 4 }}
    >
      <MaxWidthWrapper className="w-fit bg-black/40 p-10 rounded-2xl text-center">
          <Logo className = "text-3xl " href="/Dashboard"/>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormInput name="email" label="Email"  />
            <FormInput name="password" label="Password"  />

            <Button className="border-2 bg-transparent text-white hover:bg-amber-500/70 duration-300 cursor-pointer mb-4" type="submit">Submit</Button>
          </form>
        </Form>
        <div className="capitalize flex items-center gap-2 text-base font-semibold">
          <p>Do not have an account ?! </p>
          <Link className="text-red-600 underline hover:text-red-700" href={`/signup`}>Register With Us Now !</Link>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
}




































