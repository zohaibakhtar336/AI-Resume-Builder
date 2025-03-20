import React from 'react'

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}>
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.Experience?.length > 0 ? (
        resumeInfo.Experience.map((experience, index) => (
          <div key={index} className='my-5'>
            {/* Title */}
            <h2 className='text-sm font-bold'
              style={{
                color: resumeInfo?.themeColor
              }}>
              {experience?.title}
            </h2>

            {/* Company and Location */}
            <h2 className='text-xs flex justify-between'>
              {experience?.companyName && `${experience.companyName}, `}
              {experience?.city && `${experience.city}, `}
              {experience?.state}
              <span>
                {experience?.startDate} to {experience?.currentlyWorking ? 'Present' : experience?.endDate}
              </span>
            </h2>
            {/* Work Summary */}
            {experience?.workSummary && (
              <div className='text-xs my-2' dangerouslySetInnerHTML={{ __html: experience.workSummary }} />
            )}
          </div>
        ))
      ) : (
        <p className='text-center text-sm text-gray-500'>No Experience Added</p>
      )}
    </div>
  );
}

export default ExperiencePreview
