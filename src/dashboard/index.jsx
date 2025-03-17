import React, { useState, useEffect } from 'react';
import AddResume from './components/AddResume';
import { useUser } from "@clerk/clerk-react";
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';


function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  const GetResumesList = () => {
    if (!user) return;
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log("Fetched Resumes:", resp.data.data);
        setResumeList(resp.data.data || []);
      })
      .catch((error) => {
        console.error("Error Fetching Resumes:", error);
      });
  };

  useEffect(() => {
    if (user) GetResumesList();
  }, [user]);

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume for your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {resumeList.length > 0 ? (
          resumeList.map((resume) => (
            <ResumeCardItem resume={resume} key={resume.id} refreshData={GetResumesList} />
          ))
        ) : (
          [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="h-[280px] rounded-lg bg-slate-200 animate-pulse"></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
