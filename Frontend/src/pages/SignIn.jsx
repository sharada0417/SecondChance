import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SeconchanceImg from "./../assets/signInpage.png";
import { useLoginMutation } from '../lib/api/authApi';

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();
      console.log("Login successful:", response);
      // Add logic here, e.g., store token, redirect
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
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
            Welcome to <span className="font-semibold text-blue-600">SecondChance</span>, the world's best <span className="font-semibold">SecondHandGoods</span> platform. Please sign in first.
          </p>
          {error && <div className="text-sm text-red-500 mb-4">{error}</div>}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
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

              {/* Password */}
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

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;