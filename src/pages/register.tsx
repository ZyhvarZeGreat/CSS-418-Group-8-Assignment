import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Course, Level, levelCourseData } from "./data";
import useUserStore from "../store/useUserStore";
import { toast } from "sonner";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Doc from "./Doc";

const Register = () => {
  const {
    username,
    matricNo,
    department,
    registeredCourses,
    setRegisteredCourses,
  } = useUserStore();
  const [currentCourses, setCurrentCourses] = React.useState<Course[]>();

  const [currentScene, setCurrentScene] = React.useState<
    "Paid" | "Unpaid" | "Preview"
  >("Unpaid");

  const handleSelectLevel = (
    course: Level[]
  ): React.ChangeEventHandler<HTMLSelectElement> => {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRegisteredCourses([]);
      const currentLevel = event.target.value;
      const currentCourses =
        course.find((course) => course.level === currentLevel) ?? course[0];

      setCurrentCourses(currentCourses.courses);

      return currentCourses;
    };
  };

  const selectHandler = handleSelectLevel(levelCourseData);

  const handleRegisterCourses = (
    course: Course,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const firstSemesterCourses = registeredCourses.filter(
      (course: Course) => course.semester === "1st"
    );
    const secondSemesterCourses = registeredCourses.filter(
      (course: Course) => course.semester === "2nd"
    );

    const firstSemesterCreditLoad = firstSemesterCourses.reduce(
      (acc: number, course: Course) => acc + course.creditLoad,
      0
    );

    const secondSemesterCreditLoad = secondSemesterCourses.reduce(
      (acc: number, course: Course) => acc + course.creditLoad,
      0
    );

    console.log(firstSemesterCreditLoad, secondSemesterCreditLoad);

    if (!registeredCourses.includes(course)) {
      if (firstSemesterCreditLoad < 21 && secondSemesterCreditLoad < 23) {
        registeredCourses.push(course);
        toast(`Registered ${course.courseCode}`, {
          className:
            "font-mono text-sm  py-4 flex items-center justify-start border border-black h-[4rem]",
          duration: 4000,
          icon: <CheckCircledIcon />,
        });
      } else {
        toast("Your Courses have reached the maximum credit load", {
          className:
            "font-mono text-sm text-start   py-4 flex items-center justify-center border border-black h-[6rem]",
          duration: 4000,
          icon: <CrossCircledIcon />,
        });
      }
    } else {
      toast(
        `${course.courseCode} has already been registered, you can not register a course twice `,
        {
          className:
            "font-mono text-sm text-start   py-4 flex items-center justify-center border border-black h-[6rem]",
          duration: 4000,
          icon: <CrossCircledIcon />,
        }
      );
    }
    console.log(registeredCourses);
  };

  const levelOptions = currentCourses?.map((courses, i) => {
    return (
      <div
        key={i}
        className="h-[6rem] bg-gray-200  text-black flex justify-between gap-6"
      >
        <div className=" grid grid-cols-6 w-full">
          <p className="col-span-1 text-sm "> {courses.courseCode} </p>
          <p className="col-span-2 text-sm"> {courses.courseTitle} </p>
          <p className="col-span-1 text-sm"> {courses.nature} </p>
          <p className="col-span-1 text-sm"> {courses.creditLoad} </p>
          <p className="col-span-1 text-sm"> {courses.semester} </p>
        </div>

        <Button onClick={(e) => handleRegisterCourses(courses, e)}>
          Add Course
        </Button>
      </div>
    );
  });

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col gap-2  font-normal">
        <h1 className="text-2xl mb-3 font-medium">
          Course Registration Portal
        </h1>
        <h3 className="text-xl">Welcome, {username} </h3>
        <p className="text-xl">Matric No - {matricNo}</p>
      </div>

      {currentScene === "Unpaid" && (
        <div className="h-[80%]  flex items-center justify-center">
          <form className="">
            <Card className="w-[600px] h-[50vh]">
              <div className="flex w-full items-center justify-between font-mono py-2"></div>

              <CardHeader className="py-8">
                <CardTitle className=" text-lg ">
                  <h1 className="text-2xl"> Make Payment</h1>
                </CardTitle>
              </CardHeader>

              <div className="flex w-full justify-center  gap-2">
                <CardContent className="space-y-2 w-full font-light">
                  <div className="space-y-1 font-jakarta">
                    <Label
                      className="flex flex-col gap-3 text-md"
                      htmlFor="product-code "
                    >
                      Approve Payment
                      <Input
                        disabled={true}
                        className="font-normal text-md"
                        placeholder="Pay ₦39950"
                      />
                    </Label>
                  </div>
                </CardContent>
              </div>

              <CardFooter>
                <Button
                  onClick={(e) => {
                    {
                      e.preventDefault();

                      setCurrentScene("Paid");
                      toast(`Payment Successful`, {
                        className:
                          "font-mono text-sm text-start   py-4 flex items-center justify-center border border-black h-[6rem]",
                        duration: 4000,
                        icon: <CheckCircledIcon />,
                      });
                    }
                  }}
                  type="submit"
                  className=" text-md font-jakarta h-9 px-10"
                >
                  Make Payment
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      )}
      {currentScene === "Paid" && (
        <div className="h-[80%]  flex items-center justify-center">
          <form className=" overflow-y-scroll">
            <Card className=" max-w-[400px]  md:max-w-[1000px]  ">
              <div className="flex w-full items-center justify-between font-mono py-2"></div>

              <CardHeader className="py-8">
                <CardTitle className="font-spaceGrotesk text-lg ">
                  <h1 className="text-2xl"> Register Your Courses</h1>
                </CardTitle>
              </CardHeader>

              <div className="flex  flex-col w-full justify-center items-center  gap-4">
                <CardContent className="space-y-2 w-full font-light">
                  <div className="space-y-1 w-full font-jakarta">
                    <select
                      className="w-[95%] bg-gray-100 border border-black/20 py-2 rounded-sm"
                      onChange={selectHandler}
                    >
                      <option value="" disabled selected hidden>
                        Please select your current level
                      </option>

                      <option value="100 level">100 level</option>
                      <option value="200 level"> 200 level</option>
                      <option value="300 level"> 300 level</option>
                      <option value="400 level"> 400 level</option>
                      <option value="500 level">500 level</option>
                    </select>
                  </div>
                </CardContent>

                <CardContent className=" rounded-sm items-center justify-start   overflow-hidden flex flex-col gap-4 bg-gray-100   w-[90%]">
                  <div className=" h-[15rem] flex flex-col gap-5 overflow-y-scroll">
                    {levelOptions}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="py-4">
                <Button
                  onClick={() => {
                    setCurrentScene("Preview");
                  }}
                  type="submit"
                  className=" text-md bg-black text-white font-jakarta h-9 px-10"
                >
                  Register
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      )}

      {currentScene === "Preview" && (
        <div className="h-[80%]  flex items-center justify-center">
          <form>
            <Card className=" max-w-[400px]  md:max-w-[1000px] xl:w-[800px]  ">
              <div className="flex w-full items-center justify-between font-mono py-2"></div>

              <CardHeader className="py-8">
                <CardTitle className="font-spaceGrotesk text-lg ">
                  <h1 className="text-2xl"> Preview Your Registered Courses</h1>
                </CardTitle>
              </CardHeader>

              <CardContent className="overflow-y-scroll">
                <Table className="">
                  <TableCaption>
                    First Semester Courses
                    <h3 className="mr-4 text-black font-semibold">
                      Credit Units:{" "}
                      {currentCourses
                        ?.filter((course: Course) => course.semester === "1st")
                        .reduce(
                          (acc: number, course: Course) =>
                            acc + course.creditLoad,
                          0
                        )}
                    </h3>
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Course Code</TableHead>
                      <TableHead>Course Title</TableHead>
                      <TableHead>Credit Load</TableHead>
                      <TableHead className="text-right">Semester</TableHead>
                      <TableHead className="text-right">Nature</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="overflow-y-scroll">
                    {currentCourses
                      ?.filter((course: Course) => course.semester === "1st")
                      .map((course, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              {course?.courseCode}
                            </TableCell>
                            <TableCell>{course?.courseTitle} </TableCell>
                            <TableCell>{course.creditLoad}</TableCell>
                            <TableCell className="text-right">
                              {course.semester}
                            </TableCell>
                            <TableCell className="text-right">
                              {course.nature}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>

                <Table>
                  <TableCaption className="  w-full">
                    2nd Semester Courses
                    <h3 className="mr-4 text-black font-semibold">
                      Credit Units:
                      {currentCourses
                        ?.filter((course: Course) => course.semester === "2nd")
                        .reduce(
                          (acc: number, course: Course) =>
                            acc + course.creditLoad,
                          0
                        )}
                    </h3>
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Course Code</TableHead>
                      <TableHead>Course Title</TableHead>
                      <TableHead>Credit Load</TableHead>
                      <TableHead className="text-right">Semester</TableHead>
                      <TableHead className="text-right">Nature</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="overflow-y-scroll">
                    {currentCourses
                      ?.filter((course: Course) => course.semester === "2nd")
                      .map((course, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              {course?.courseCode}
                            </TableCell>
                            <TableCell>{course?.courseTitle} </TableCell>
                            <TableCell>{course.creditLoad}</TableCell>
                            <TableCell className="text-right">
                              {course.semester}
                            </TableCell>
                            <TableCell className="text-right">
                              {course.nature}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </CardContent>

              <CardFooter className="py-4">
                <Button
                  onClick={() => {}}
                  className=" text-md bg-black text-white font-jakarta h-9 px-10"
                >
                  <PDFDownloadLink
                    document={
                      <Doc
                        data={currentCourses}
                        username={username}
                        matricNo={matricNo}
                        department={department}
                      />
                    }
                    fileName={`${username}-${matricNo}.pdf`}
                  >
                    {({ loading }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
