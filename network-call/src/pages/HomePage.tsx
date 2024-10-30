import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false)
  const navigate = useNavigate()
  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `apakah yakin ingin menghapus data ${user.username}?`
    );
    if (confirmSubmit) {
      try {
        await axios.delete(`/users/${user.id}`);
        setReload(!reload)
        alert(`data ${user.username} berhasil dihapus!`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="flex justify-center">
      <table className="table-auto mt-10 border">
        <thead className="p-4 bg-gray-300">
          <tr>
            <th className="p-2 border md:min-w-[50px]">No</th>
            <th className="p-2 border md:min-w-[200px]">Username</th>
            <th className="p-2 border md:min-w-[200px]">Email</th>
            <th className="p-2 border md:min-w-[50px]"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-gray-100 cursor-pointer">
                <td onClick={() => navigate(`/${item.id}`)} className="p-2 border text-center">{idx + 1}</td>
                <td onClick={() => navigate(`/${item.id}`)} className="p-2 border text-center">{item.username}</td>
                <td onClick={() => navigate(`/${item.id}`)} className="p-2 border text-center">{item.email}</td>
                <td className="p-2 border text-center">
                  <MdDeleteOutline
                    onClick={() => handleDelete(item)}
                    className="text-red-500 text-lg"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
