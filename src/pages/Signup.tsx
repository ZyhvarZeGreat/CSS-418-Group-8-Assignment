import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

import { z, string } from "zod";
import { useForm } from "react-hook-form";
import { supabase } from "../../utils/supabaseClient.js";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../lib/utils.js";

const signSchema = z.object({
  name: string().min(13),
  email: string().email(),
  department: string().min(3, {
    message: "department is required must be at least 3 characters",
  }),
  matricNo: string().min(3, {
    message: "Matric number is required",
  }),
  password: string().min(3, {
    message: "password is required",
  }),
});

type signType = {
  name: string;
  email: string;
  department: string;
  matricNo: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, getValues, formState } = useForm<signType>({
    resolver: zodResolver(signSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signupState, setSignupState] = useState(false);

  const { errors } = formState;
  function openMailLink(url: string) {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      alert("Popup blocked! Please allow popups for this site.");
    }
  }

  const handleSignUp = async (data: signType) => {
    const { error } = await supabase.auth.signUp({
      email: data?.email,
      password: data?.password,
      options: {
        data: {
          name: data?.name,
          matricNo: data?.matricNo,
          department: data?.department,
        },
      },
    });
    if (!error) {
      console.log(signupState);
      setSignupState(true);
      toast("Signup Succesful , confirm your mail", {
        className: "font-mono text-lg h-[4rem]",
        duration: 4000,
        icon: <CheckCircledIcon />,
      });
      // const token = user.access_token
      // Use the token to authorize the user to access resources in your application
    } else if (error) {
      console.log("Error signing up:", error.message);
      setSignupState(false);
      toast(
        `${
          error.message.includes("fetch")
            ? "Signup failed, please check your connection"
            : error.message
        }`,
        {
          className: "font-mono text-lg h-[4rem]",
          duration: 4000,
          icon: <CrossCircledIcon />,
        }
      );
    }
  };

  const onSubmitSignup = () => {
    if (Object.keys(errors).length === 0) {
      handleSignUp(getValues());
    }
  };

  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <form onSubmit={handleSubmit(onSubmitSignup)}>
        <Card className="w-[600px] ">
          <div className="flex w-full items-center justify-between font-mono py-2"></div>

          <CardHeader className="py-8">
            <CardTitle className=" text-lg ">
              <h1 className="text-2xl"> Login to your Portal</h1>
            </CardTitle>
          </CardHeader>

          <div className="flex w-full justify-center  ">
            <CardContent className=" w-full font-light">
              <div className=" font-jakarta font-light">
                <Label className="flex flex-col text-md gap-2" htmlFor="email">
                  Email
                  <Input
                    {...register("email")}
                    className={cn(
                      " border border-[#E8EAED]  text-sm",
                      `${
                        errors?.email
                          ? "border-red-500  focus:outline-red-500 "
                          : ""
                      }`
                    )}
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                  <div className="text-red-500 ">
                    {errors?.email && (
                      <p className="mb-6 text-sm font-normal text-red-500">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </Label>
              </div>
              <div className="space-y-1 font-jakarta font-light">
                <Label
                  className="flex flex-col gap-2  text-md"
                  htmlFor="password"
                >
                  Password
                  <Input
                    {...register("password")}
                    className={cn(
                      " border border-[#E8EAED]  text-sm",
                      `${
                        errors?.password
                          ? "border-red-500  focus:outline-red-500 "
                          : ""
                      }`
                    )}
                    type="password"
                    id="raw-materials"
                    placeholder="Password"
                  />
                  <div className="text-red-500 ">
                    {errors?.password && (
                      <p className="mb-6 text-sm font-normal text-red-500">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                </Label>
              </div>

              <div className="space-y-1 font-jakarta">
                <Label className="flex flex-col gap-2  text-md" htmlFor="name">
                  Name
                  <Input
                    {...register("name")}
                    placeholder="Input your name"
                    className={cn(
                      " border border-[#E8EAED]  text-sm",
                      `${
                        errors?.name
                          ? "border-red-500  focus:outline-red-500 "
                          : ""
                      }`
                    )}
                  />
                  <div className="text-red-500 ">
                    {errors?.name && (
                      <p className="mb-6 text-sm font-normal text-red-500">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                </Label>
              </div>

              <div className="space-y-1 font-jakarta  font-light">
                <Label
                  className="flex flex-col gap-2  text-md"
                  htmlFor="department"
                >
                  Department
                  <Input
                    {...register("department")}
                    className={cn(
                      " border border-[#E8EAED]  text-sm",
                      `${
                        errors?.email
                          ? "border-red-500  focus:outline-red-500 "
                          : ""
                      }`
                    )}
                    id="department"
                    placeholder="Department"
                  />
                  <div className="text-red-500 ">
                    {errors?.department && (
                      <p className="mb-6 text-sm font-normal text-red-500">
                        {errors.department?.message}
                      </p>
                    )}
                  </div>
                </Label>
              </div>

              <div className="space-y-1 font-jakarta  font-light">
                <Label
                  className="flex flex-col text-md gap-1 "
                  htmlFor="matricNo"
                >
                  Matric No
                  <Input
                    {...register("matricNo")}
                    className={cn(
                      " border border-[#E8EAED]  text-sm",
                      `${
                        errors?.email
                          ? "border-red-500  focus:outline-red-500 "
                          : ""
                      }`
                    )}
                    id="matric-no"
                    placeholder="Matric No"
                  />
                  <div className="text-red-500 ">
                    {errors?.matricNo && (
                      <p className="mb-6 text-sm font-normal text-red-500">
                        {errors.matricNo?.message}
                      </p>
                    )}
                  </div>
                </Label>
              </div>
            </CardContent>
          </div>

          <CardFooter className="flex  flex-col items-start justify-center">
            <Button type="submit" className=" text-md font-jakarta h-9 px-10">
              Login
            </Button>

            <Button
              className=" self-center py-8 text-blue underline underline-offset-1"
              onClick={() => {
                openMailLink("https://mail.google.com/mail");
              }}
              variant="link"
            >
              {" "}
              Confirm your mail{" "}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
