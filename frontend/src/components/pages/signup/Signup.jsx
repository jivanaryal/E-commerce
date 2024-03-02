import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import logo from "../../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const formItems = [
    {
      name: "firstname",
      type: "text",
      label: "First Name",
      placeholder: "Enter your First Name",
    },
    {
      name: "lastname",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your Last Name",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your Email Address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your Password",
    },
    {
      name: "cpassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your Password",
    },
  ];
  const schema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmpassword: yup.string().required("Confirm Password is required"),
  });
  return (
    <div className="flex justify-center items-center h-screen bg-thirdColor ">
      <div className="bg-white p-6 px-12 h-fit w-fit rounded-md shadow-lg shadow-secondColor">
        <div className="flex justify-center mr-[5%]  gap-5 items-center ">
          <div className=" h-32 w-32 ">
            <img src={logo} className="h-fit w-fit" />
          </div>
          <div className="text-2xl text-mainColor font-bold">Sign up</div>
        </div>
        <hr className="mb-5 mt-0" />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={schema}
          onSubmit={(val) => {}}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {formItems.map((val, i) => {
                  return (
                    <div key={i} className="">
                      <div className="grid grid-cols-2 place-content-center">
                        <label
                          htmlFor={val.name}
                          className="grid grid-rows-2 pt-1"
                        >
                          {val.label} :
                        </label>
                        <div className="flex flex-col">
                          <div>
                            {" "}
                            <Field
                              type={val.type}
                              name={val.name}
                              placeholder={val.placeholder}
                              className="border-2  rounded-sm outline-none p-2  px-5 text-xs"
                            />
                          </div>
                          <ErrorMessage
                            name={val.name}
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-center items-center text-xs gap-2">
                  <div>
                    <input type="checkbox" name="checkbox" id="" />
                  </div>
                  <div className="my-2">I agree to terms and conditions</div>
                </div>
                <div
                  className="text-mainColor text-xs text-center my-4 cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Aready have logged in?
                </div>

                <div className="bg-mainColor text-white p-2  rounded-md w-40 mx-auto text-center cursor-pointer hover:bg-white hover:text-mainColor hover:border-2 hover:scale-110 ease-in-out delay-100 duration-100">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
