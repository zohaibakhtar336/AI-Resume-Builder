import React from 'react';

function EducationalPreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      {/* Heading */}
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor || '#000'
        }}>
        Education
      </h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor || '#000'
      }} />

      {/* Education Data Check */}
      {resumeInfo?.education?.length > 0 ? (
        resumeInfo.education.map((education, index) => (
          <div key={index} className='my-5'>
            {/* University Name with Fallback */}
            <h2 className='text-sm font-bold'
              style={{
                color: resumeInfo?.themeColor || '#000'
              }}>
              {education?.universityName || 'University Not Available'}
            </h2>

            {/* Degree & Major with Fallback */}
            <h2 className='text-xs flex justify-between'>
              {education?.degree && education?.major
                ? `${education.degree} in ${education.major}`
                : 'Degree Information Not Available'}

              {/* Start and End Date with Fallback */}
              <span>
                {education?.startDate || 'Start Date Not Available'} - {education?.endDate || 'End Date Not Available'}
              </span>
            </h2>

            {/* Description with Fallback */}
            <p className='text-xs my-2'>
              {education?.description || 'No additional information provided.'}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No educational details available.</p>
      )}
    </div>
  );
}

export default EducationalPreview;
