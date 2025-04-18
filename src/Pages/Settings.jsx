import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/slices/profileSlice';
import { toast } from 'react-toastify';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Settings = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
    },
  });

  const onSubmit = (data) => {
    dispatch(updateProfile(data));
    toast.success('Profile updated');
  };

  return (
    <div className="min-h-screen bg-inherit py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Profile</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                This information will be displayed publicly so be careful what you share.
              </p>

              <div className="mt-6 flex items-center gap-x-4">
                <UserCircleIcon className="h-12 w-12 text-gray-300 dark:text-gray-500" aria-hidden="true" />
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h2>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    First name
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className="text-xl h-12 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className="text-xl h-12 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="h-12 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="reset"
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;