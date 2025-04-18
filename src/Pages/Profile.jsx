import React from 'react';
import { useSelector } from 'react-redux';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="space-y-12">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Profile</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-6 flex items-center gap-x-4">
              <UserCircleIcon className="h-12 w-12 text-gray-300 dark:text-gray-500" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-200 text-lg font-medium">
                {profile.firstName} {profile.lastName}
              </span>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">First name</label>
                <p className="mt-1 text-lg text-gray-900 dark:text-white">{profile.firstName}</p>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Last name</label>
                <p className="mt-1 text-lg text-gray-900 dark:text-white">{profile.lastName}</p>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email address</label>
                <p className="mt-1 text-lg text-gray-900 dark:text-white">{profile.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
