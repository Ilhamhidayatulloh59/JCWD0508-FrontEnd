import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RegisterModal } from "./register";
import { LoginModal } from "./login";

export const Welcome = () => {
  return (
    <div className="text-white min-h-[80vh] flex flex-col sm:items-center sm:p-0 p-10 sm:flex-row">
      <FaXTwitter className="text-white lg:text-[300px] md:text-[200px] sm:text-[100px] text-[50px] lg:flex-1" />
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="sm:text-6xl text-3xl font-bold">Sedang tren saat ini</h1>
        <h1 className="sm:text-3xl text-xl font-bold">Bergabung sekarang.</h1>
        <button className="bg-white text-black py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3">
          <FcGoogle className="text-[24px]" /> Daftar dengan Google
        </button>
        <button className="bg-white text-black py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3">
          <FaApple className="text-[24px]" /> Daftar dengan Apple
        </button>
        <div className="flex justify-center w-[300px]">atau</div>
        <RegisterModal />
        <div className="w-[300px] text-[10px] text-gray-500">
          Dengan mendaftar, Anda menyetujui{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Persyaratan Layanan
          </span>{" "}
          dan{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Kebijakan Privasi
          </span>
          , termasuk{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Penggunaan Kuki
          </span>
          .
        </div>
        <h1 className="sm:text-xl text-sm font-bold">Sudah punya akun?</h1>
        <LoginModal />
      </div>
    </div>
  );
};
