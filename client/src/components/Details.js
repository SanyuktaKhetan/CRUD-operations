import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Mark !! </h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent className="main_card">
          <div className="add_btn">
            <button className="btn btn-primary update_btn mx-2">
              <CreateIcon />
            </button>
            <button className="btn btn-danger delete_btn mx-2">
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAiVwjUWYgmyoHPGZ4KNesZOkD-c-lfQqig&s"
                style={{ width: 50 }}
                classname="profile_img"
                alt="profile"
              />

              <h3 className="mt-3">
                Name : <span> Mike</span>
              </h3>
              <h3 className="mt-3">
                Age : <span> 25 </span>
              </h3>
              <p>
                <EmailIcon />
                Email : <span> mark@gmail.com </span>
              </p>
              <p>
                <WorkIcon />
                Occupation : <span> Developer </span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-3">
                <CallIcon /> Mobile : <span> 9876543210 </span>
              </p>
              <p className="mt-3">
                {" "}
                <LocationOnIcon /> Location : <span> India </span>
              </p>
              <p className="mt-3">
                Description :{" "}
                <span>
                  {" "}
                  A web developer designs, codes, and maintains websites and web
                  applications using languages like HTML, CSS, JavaScript, and
                  back-end languages such as Python or PHP.{" "}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
