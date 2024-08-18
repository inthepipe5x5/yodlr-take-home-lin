import React, { useEffect, useState } from "react";
import DashLayout from "../Layouts/DashLayout";
import YodlrApi from "../../../lib/api";
import TableList from "../Components/TableList";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllData = async () => {
      try {
        //make axios request to api for all users
        const resp = await YodlrApi.request("users");
        const usersListData = resp.data;
        console.debug("/users API data =>", usersListData)
        setUsers(usersListData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, []);

  return (
    <DashLayout>
      <TableList content={users} className="mt-60px px-lg-4 py-lg-2"/>
    </DashLayout>
  );
};

export default AdminPage;
