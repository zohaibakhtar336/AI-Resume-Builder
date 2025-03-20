import React from 'react';

function SkillsPreview({ resumeInfo }) {


  return (
    <div className="my-6">
      {/* Section Title */}
      <h2 className="text-center font-bold text-sm mb-4"
        style={{
          color: resumeInfo?.themeColor
        }}>
        Skills
      </h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      {/* Skills Display */}
      <div className="grid grid-cols-2 gap-4 my-6">
        {resumeInfo?.skills.map((skill, index) => {
          const skillRating = Math.min(Math.max(skill?.rating || 1, 1), 5);
          const progressPercentage = skillRating * 20;
          return (
            <div key={index} className="flex items-center justify-between w-full">
              {/* Skill Name */}
              <h2 className="text-xs font-medium">{skill?.name || "Unknown Skill"}</h2>

              {/* Progress Bar Container */}
              <div className='w-[160px] h-2 bg-gray-200 rounded-full overflow-hidden shadow-sm'>
                <div className='h-2 rounded-full transition-all duration-500'
                  style={{
                    backgroundColor: resumeInfo?.themeColor || '#3498db',
                    width: `${progressPercentage}%`
                  }}>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPreview;
