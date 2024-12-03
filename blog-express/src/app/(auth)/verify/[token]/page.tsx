"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/verify/${params.token}`,
        {
          method: "PATCH",
        }
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
      router.push("/");
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <button
        onClick={onVerify}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 "
      >
        Verifikasi
      </button> */}
    </div>
  );
}
