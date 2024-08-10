import React from 'react';

const ProfileSection = ({ title, children }) => {
  return (
    <div className="h-full">
      <h3 className="text-[clamp(1rem,3vw,1.125rem)] font-semibold mb-2">{title}</h3>
      <div className="h-[calc(100%-2rem)] overflow-auto">
        <div className="flex flex-col space-y-2">
          {React.Children.map(children, child => (
            <span className="bg-gray-50 rounded-md px-3 py-2 text-[clamp(0.75rem,2.5vw,0.875rem)]">
              {child}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
