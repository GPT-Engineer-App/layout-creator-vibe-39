import React from 'react';

const ProfileSection = ({ title, children }) => {
  return (
    <div className="h-full">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="border rounded p-4 h-[calc(100%-2rem)] overflow-auto">
        <div className="flex flex-col space-y-2">
          {React.Children.map(children, child => (
            <div className="flex">
              <span className="bg-gray-100 px-3 py-2 text-sm flex-1 truncate">
                {child}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
