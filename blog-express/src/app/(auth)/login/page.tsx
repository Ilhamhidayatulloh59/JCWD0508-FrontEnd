"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import { toastErr } from "@/helpers/toast";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import * as Yup from "yup";

const base_url = process.env.NEXT_PUBLIC_BASE_URL_BE;

const LoginSchema = Yup.object().shape({
  data: Yup.string().required("username or email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
});

interface FormValues {
  data: string;
  password: string;
}

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setUser } = useSession();
  const router = useRouter();
  const initialValue: FormValues = {
    data: "",
    password: "",
  };

  const handleLogin = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      Cookies.set('token', result.token, {
        expires: 1,
        path: '/',
        secure: true,
        sameSite: 'None',
      });
      setIsAuth(true);
      setUser(result.user);
      router.push("/");
      toast.success(result.message);
    } catch (err) {
      toastErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-bold my-5">Login Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            handleLogin(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            return (
              <Form className="flex flex-col gap-2 min-w-[400px]">
                <Input
                  formik={props}
                  name="data"
                  label="Username Or Email :"
                  placeholder="username or email"
                />
                <Input
                  formik={props}
                  name="password"
                  label="Password :"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="text-white disabled:bg-teal-300 disabled:cursor-not-allowed bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {isLoading ? "Loading ..." : "Login"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
