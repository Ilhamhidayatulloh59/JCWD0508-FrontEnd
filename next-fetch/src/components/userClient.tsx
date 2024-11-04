"use client";
import { IUser } from "@/types/user";
import { useEffect, useState } from "react";

export default function UserPageClient() {
  const [user, setUser] = useState<IUser[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:2000/users");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };    
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-center">
      <table className="table-auto mt-10 border">
        <thead className="p-4 bg-gray-300">
          <tr>
            <th className="p-2 border md:min-w-[50px]">No</th>
            <th className="p-2 border md:min-w-[200px]">Username</th>
            <th className="p-2 border md:min-w-[200px]">Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-gray-100 cursor-pointer">
                <td className="p-2 border text-center">{idx + 1}</td>
                <td className="p-2 border text-center">{item.username}</td>
                <td className="p-2 border text-center">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
