import React from "react";

const Error404Page = () => {
  return (
    <div className='mx-5'>
      <div className="flex justify-content-center">
        <h1 className="text-danger">The Page is not found</h1>
      </div>

      <div className="flex justify-content-center">
        <img src={"/error-404.webp"} style={{ height: "400px" }}></img>
      </div>
    </div>
  );
};

export default Error404Page;
