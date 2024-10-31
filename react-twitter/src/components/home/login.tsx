"use client";
import { useState } from "react";
import Modal from "../modal";
import { Form, Formik, FormikHelpers } from "formik";
import { UserLogin } from "../../types/user";
import { loginSchema } from "../../helpers/schema";
import { Input } from "../input";

const initialValues: UserLogin = {
  data: "",
  password: "",
};

export const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onLogin = async (data: UserLogin, action: FormikHelpers<UserLogin>) => {
    try {
      console.log(data);
      action.resetForm();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-transparent text-blue-400 border border-gray-500 hover:bg-blue-950 py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3"
      >
        Masuk
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, action) => {
            onLogin(values, action);
          }}
        >
          {() => {
            return (
              <Form className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">Masuk ke X</h1>
                  <Input
                    name="data"
                    type="text"
                    placeholder="Username or Email"
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Masuk
                </button>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
