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
import SeconchanceImg from "./../assets/signInpage.png";

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      role: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted as Array:", Object.values(data)); // show as array
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
      Welcome to SecondChance World's best
      SecondHandGoods platform. Please sign in first.
    </p>
    {/* Form starts here */}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phonenumber"
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter your phone number" {...field} />
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="User">User</SelectItem>
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
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
