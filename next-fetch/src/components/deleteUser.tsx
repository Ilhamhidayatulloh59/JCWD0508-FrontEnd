"use client";

import action from "@/app/action";
import { MdDeleteOutline } from "react-icons/md";

export default function DeleteUser({ id }: { id: number }) {
  const onDelete = async () => {
    await fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    });
    action("users")
  };
  return (
    <td className="p-2 border text-center">
      <MdDeleteOutline onClick={onDelete} className="text-red-500 text-lg" />
    </td>
  );
}
