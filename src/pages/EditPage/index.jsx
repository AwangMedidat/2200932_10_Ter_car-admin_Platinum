import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//# comp
import EditCarComp from "../../components/EditCarComp";

const EditPage = () => {


  return (
    <React.Suspense fallback={<p>Loading application...</p>}>
      <main>
      
        <section className="edit-car-page">
          <EditCarComp />
        </section>
      </main>
    </React.Suspense>
  );
};

export default EditPage;
