import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axios from "../helpers/axios";

function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center text-2xl font-semibold p-10 min-w-[400px] bg-gray-300 rounded-lg">
        <div className="flex w-24 h-24 rounded-full bg-teal-400 mb-6 justify-center items-center text-3xl text-white border-4 border-orange-500 cursor-pointer hover:bg-teal-200 hover:border-orange-400">
          {user?.username?.charAt(0)}
        </div>
        <h1>{user?.username}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.password}</h1>
      </div>
    </div>
  );
}

export default DetailUserPage;
