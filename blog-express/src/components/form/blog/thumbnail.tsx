"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";

interface FieldThumbnailProps {
  name: string;
  formik: FormikProps<any>;
  className?: string;
}

export const FieldThumbnail: React.FC<FieldThumbnailProps> = ({
  name,
  formik,
  className = "",
}) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      formik.setFieldValue(name, file);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        ref={imgRef}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      {!previewUrl ? (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-[100px] md:w-[150px] md:h-[150px] h-[100px] justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          +
        </div>
      ) : (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-[100px] md:w-[150px] md:h-[150px] h-[100px] justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          <Image
            src={previewUrl}
            alt="Preview"
            width={150}
            height={150}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
