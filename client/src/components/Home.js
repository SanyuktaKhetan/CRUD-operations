import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
function Home() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className="btn btn-info"> Add New Data </button>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>Developer</td>
              <td>9876543210</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success read_btn">
                  <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-primary update_btn">
                  <CreateIcon />
                </button>
                <button className="btn btn-danger delete_btn">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Grate</td>
              <td>grate@gmail.com</td>
              <td>Designer</td>
              <td>9638527410</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success read_btn">
                  <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-primary update_btn">
                  <CreateIcon />
                </button>
                <button className="btn btn-danger delete_btn">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
