import React from 'react';

interface ProfileGridProps {
  images: string[];
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ images }) => {
  return (
    <div className="md:w-1/2 relative">
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative">
            <img
              src={`${src}?w=150&h=150&fit=crop`}
              alt="Remote worker"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;