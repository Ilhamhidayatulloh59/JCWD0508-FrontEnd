import { IUser } from "@/types/user";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users", {
    // next: { revalidate: 60 },
    next: { tags: ['users'] }
    // cache: 'no-cache'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function UserPageServer() {
  const data = await getData();
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
          {data.map((item, idx) => {
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
