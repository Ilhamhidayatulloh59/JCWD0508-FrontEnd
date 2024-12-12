"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "@/components/wrapper";
import { createSlug } from "@/helpers/createSlug";
import { BlogInput } from "@/types/blog";
import { Formik, Field, ErrorMessage, Form } from "formik";
import RichTextEditor from "@/components/form/blog/textEditor";
import { FieldThumbnail } from "@/components/form/blog/thumbnail";
import { toast } from "react-toastify";
import { revalidate } from "@/libs/action";
import { useRouter } from "next/navigation";
import { blogSchema } from "@/libs/schema";

const initialValues: BlogInput = {
  title: "",
  category: "",
  slug: "",
  content: "",
  thumbnail: "",
};

export default function BlogCreatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onCreate = async (data: BlogInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (let key in data) {
        const item = data[key as keyof BlogInput];
        if (item) {
          formData.append(key, item);
        }
      }
      const res = await fetch("http://localhost:8000/api/blogs", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      revalidate("blogs");
      toast.success(result.message);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          useEffect(() => {
            props.setFieldValue("slug", createSlug(props.values.title));
          }, [props.values.title, props.setFieldValue]);

          return (
            <Form className="flex flex-col gap-3 w-full">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="title"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="slug"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={props.values.slug}
                  readOnly
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <Field
                  name="category"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">~ Pilih Category ~</option>
                  <option value="Sport">Sport</option>
                  <option value="Health">Health</option>
                  <option value="Food">Food</option>
                  <option value="Tech">Tech</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Thumbnail
                </label>
                <FieldThumbnail name="thumbnail" formik={props} />
                <ErrorMessage
                  name="thumbnail"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                <RichTextEditor setFieldValue={props.setFieldValue} />
                <ErrorMessage
                  name="content"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div className="flex sm:justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[40px] disabled:cursor-not-allowed disabled:bg-[#8a8a8b] sm:w-[120px] text-[#f5f5f7] bg-[#383839] hover:bg-[#595959] rounded-lg"
                >
                  {isLoading ? "Loading..." : "Save"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
}
