import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SeconchanceImg from "./../assets/signInpage.png";

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    alert(`Signed in!\nEmail: ${data.email}`);
  };

  return (
    <div className="w-screen flex">
      {/* Image Side */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-white">
        <img
          src={SeconchanceImg}
          alt="SecondChance"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
           <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Sign In</h2>
            <p className="text-center text-gray-600 text-sm mb-6">
                Welcome to SecondChance World's best
                SecondHandGoods platform. Please sign up first.
            </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
