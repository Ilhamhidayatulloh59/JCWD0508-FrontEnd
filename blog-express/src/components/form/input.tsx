import { Field, FormikProps } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  formik: FormikProps<any>;
  type?: HTMLInputTypeAttribute;
}

export const Input = ({
  name,
  formik,
  label,
  type = "text",
  placeholder = name,
}: IProps) => {
  const { handleChange, values, touched, errors } = formik;
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        onChange={handleChange}
        value={values[name]}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
      />
      {touched[name] && typeof errors[name] === "string" ? (
        <div className="text-red-500 text-xs">{errors[name]}</div>
      ) : null}
    </div>
  );
};
