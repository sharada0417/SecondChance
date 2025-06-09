import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import SeconchanceImg from "./../assets/signInpage.jpg";
import { useRegisterMutation } from '../lib/api/authApi';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      phoneNumber: "", // Changed to camelCase
      password: "",
      role: "",
    },
  });

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await register(data).unwrap();
      console.log("Registration successful:", response);
      
      toast.success("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error.data?.message || "Registration failed. Please check your information.");
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
        <div className="w-full max-w-md mt-10">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Sign Up</h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Welcome to <span className="font-semibold text-blue-600">SecondChance</span>, the world's best <span className="font-semibold">SecondHandGoods</span> platform. Please sign up.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                rules={{ 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="Enter your full name" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phoneNumber" // Corrected field name
                rules={{ 
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                    message: "Invalid phone number format"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role Select */}
              <FormField
                control={form.control}
                name="role"
                rules={{ required: "Role is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ADMIN">Admin</SelectItem>
                          <SelectItem value="USER">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                rules={{ 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Enter your password" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;