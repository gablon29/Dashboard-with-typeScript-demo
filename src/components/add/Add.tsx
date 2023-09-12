import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form action="">
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column) => (
              <div className="item">
                <label htmlFor="">{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Add;
