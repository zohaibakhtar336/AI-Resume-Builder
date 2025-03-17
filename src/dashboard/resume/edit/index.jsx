import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState(null);

  useEffect(() => {
    GetResumeInfo();
  }, []);

  function GetResumeInfo() {
    console.log("Fetching resume info for ID:", resumeId);
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Editing Resume: {resumeId}</h2>
      <p>Modify your resume details here.</p>
    </div>
  );
}

export default EditResume;
