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

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className='my-5'>
          {/* Title */}
          <h2 className='text-sm font-bold'
            style={{
              color: resumeInfo?.themeColor
            }}>
            {experience?.title || 'Title Not Available'}
          </h2>

          {/* Company, City, State, and Date */}
          <h2 className='text-xs flex justify-between'>
            {experience?.companyName || 'Company Not Available'},
            {experience?.city || 'City Not Available'},
            {experience?.state || 'State Not Available'}
            <span>
              {experience?.startDate || 'Start Date Not Available'}
              {experience?.currentlyWorking ? ' to Present' : ` to ${experience?.endDate || 'End Date Not Available'}`}
            </span>
          </h2>
          {/* Work Summary */}
          <p className='text-xs my-2'>
            {experience?.workSummary || 'No summary available'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ExperiencePreview
