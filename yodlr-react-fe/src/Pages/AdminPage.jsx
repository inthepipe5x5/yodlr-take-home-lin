import React, { useEffect, useState } from "react";
import DashLayout from "../Layouts/DashLayout";
import YodlrApi from "../../../lib/api";
import TableList from "../Components/TableList";
import Banner from "../Components/Banner";
import { Alert } from "reactstrap";
import NavBar from "../Components/NavBar";

const AdminPage = ({ alerts = null, bannerTitle, bannerSubtitle }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlerts] = useState(alerts);

  useEffect(() => {
    const getAllData = async () => {
      try {
        //make axios request to api for all users
        const resp = await YodlrApi.request("users");
        const usersListData = resp.data;
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
    <>
      <div className="alerts">
        {alert !== undefined && alert !== null ? (
          <Alert color={alert.color}>{alert.message}</Alert>
        ) : (
          ""
        )}
      </div>
      <DashLayout
        header={<Banner title={bannerTitle} subtitle={bannerSubtitle}></Banner>}
        content={
          <TableList content={users} className="mt-60px px-lg-4 py-lg-2" />
        }
      />
    </>
  );
};

export default AdminPage;
