"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";



import { useFormContext } from "react-hook-form";

export default function FormInput({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl  >
            <Input  placeholder="Enter Your Email" {...field} />
          </FormControl>
          <FormMessage  className="flex flex-start text-red-400/70"/>
        </FormItem>
      )}
    />
  );
}
