import React from 'react';

function SkillsPreview({ resumeInfo }) {
  if (!resumeInfo?.skills?.length) {
    return <p className="text-gray-500">No skills available.</p>;
  }

  return (
    <div className="my-6">
      {/* Section Title */}
      <h2 className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor
        }}>
        Skills
      </h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      {/* Skills Display */}
      <div className="grid grid-cols-2 gap-4 my-4">
        {resumeInfo.skills.map((skill, index) => {
          const skillRating = Math.min(Math.max(skill?.rating || 0, 0), 100);

          return (
            <div key={index} className="flex items-center justify-between">
              {/* Skill Name */}
              <h2 className="text-xs font-medium">{skill?.name || "Unknown Skill"}</h2>

              {/* Progress Bar Container */}
              <div className="relative w-[150px] h-2 bg-gray-200 rounded-full overflow-hidden">
                {/* Filled Progress */}
                <div className="absolute top-0 left-0 h-2 rounded-full"
                  style={{
                    backgroundColor: resumeInfo?.themeColor || '#3498db',
                    width: `${skillRating}%`,
                    transition: 'width 0.5s ease-in-out'
                  }}
                />
              </div>

              {/* Percentage Display */}
              <span className="text-xs font-semibold text-gray-600 ml-2">
                {skillRating}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPreview;
