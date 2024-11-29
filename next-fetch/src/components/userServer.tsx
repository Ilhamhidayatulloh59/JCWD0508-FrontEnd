import { IUser } from "@/types/user";
import DeleteUser from "./deleteUser";

async function getData(): Promise<{ users: IUser[] }> {
  const res = await fetch("http://localhost:8000/api/users", {
    // next: { revalidate: 60 },
    next: { tags: ["users"] },
    // cache: 'no-cache'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function UserPageServer() {
  const { users } = await getData();
  return (
    <div className="flex justify-center">
      <table className="table-auto mt-10 border">
        <thead className="p-4 bg-gray-300">
          <tr>
            <th className="p-2 border md:min-w-[50px]">No</th>
            <th className="p-2 border md:min-w-[200px]">Username</th>
            <th className="p-2 border md:min-w-[200px]">Email</th>
            <th className="p-2 border "></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-gray-100 cursor-pointer">
                <td className="p-2 border text-center">{idx + 1}</td>
                <td className="p-2 border text-center">{item.name}</td>
                <td className="p-2 border text-center">{item.email}</td>
                <DeleteUser id={item.id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
