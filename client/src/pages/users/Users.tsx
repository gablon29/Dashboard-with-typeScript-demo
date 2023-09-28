import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Create At",
    width: 200,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
];
function Users() {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "isLoading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Users;
