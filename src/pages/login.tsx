import React from "react";
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
import useUserStore from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUsername, setMatricNo, password, setPassword } = useUserStore();

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const testPassword = "12345";
    if (password === testPassword) {
      setTimeout(() => {
        navigate("/register");
      }, 3000);
    } else {
      alert(`Password is incorrect, use ${testPassword} to login `);
    }
  };

  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <form>
        <Card className="w-[600px] h-[50vh]">
          <div className="flex w-full items-center justify-between font-mono py-2"></div>

          <CardHeader className="py-8">
            <CardTitle className=" text-lg ">
              <h1 className="text-2xl"> Login to your Portal</h1>
            </CardTitle>
          </CardHeader>

          <div className="flex w-full justify-center  gap-2">
            <CardContent className="space-y-2 w-full font-light">
              <div className="space-y-1 font-jakarta">
                <Label
                  className="flex flex-col gap-3 text-md"
                  htmlFor="product-code "
                >
                  Name
                  <Input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="font-normal text-md"
                    placeholder="Input your name"
                  />
                </Label>
              </div>
              <div className="space-y-1 font-jakarta  font-light">
                <Label
                  className="flex flex-col gap-3 text-md"
                  htmlFor="product-name"
                >
                  Matric No
                  <Input
                    onChange={(e) => {
                      setMatricNo(e.target.value);
                    }}
                    className="font-normal text-md"
                    id="matric-no"
                    placeholder="Matric No"
                  />
                </Label>
              </div>

              <div className="space-y-1 font-jakarta font-light">
                <Label
                  className="flex flex-col gap-3 text-md"
                  htmlFor="raw-materials"
                >
                  Password
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="font-normal text-md"
                    type="password"
                    id="raw-materials"
                    placeholder="Password"
                  />
                </Label>
              </div>
            </CardContent>
          </div>

          <CardFooter>
            <Button
              onClick={(e) => {
                handleLogin(e);
              }}
              type="submit"
              className=" text-md font-jakarta h-9 px-10"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
