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
import useUserStore from "../store/useUserStore.js";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: string().email(),
  password: string().min(3, {
    message: "password is required",
  }),
});

type signType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { register, handleSubmit, getValues, formState } = useForm<signType>({
    resolver: zodResolver(loginSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [signupState, setSignupState] = useState(false);

  const { errors } = formState;

  const handleSignIn = async (data: signType) => {
    console.log(data);
    const { error } = await supabase.auth.signInWithPassword({
      email: data?.email,
      password: data?.password,
    });
    if (error) {
      toast.error(`Error Signing In , ${error?.message}`, {
        className: "font-mono text-lg h-[4rem]",
        duration: 4000,
        icon: <CrossCircledIcon />,
      });
    } else {
      toast.success("Login Succesful, ", {
        className: "font-mono text-lg h-[4rem]",
        duration: 4000,
        icon: <CheckCircledIcon />,
      });

      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      if (user) {
        if (Object.keys(user).length !== 0) {
          setUser(user);
          setTimeout(() => {
            navigate("/register");
          }, 3000);
        }
      }

      // Use the token to authorize the user to access resources in your application
    }
  };

  const onSubmitSignup = () => {
    if (Object.keys(errors).length === 0) {
      handleSignIn(getValues());
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
            </CardContent>
          </div>

          <CardFooter className="flex  flex-col items-start justify-center">
            <Button type="submit" className=" text-md font-jakarta h-9 px-10">
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
