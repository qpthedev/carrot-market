import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-20 h-20 rounded-full bg-slate-300" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:ring-2 hover:ring-offset-2 hover:ring-orange-500 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm select-none">
            +1
          </span>
          <input
            id="phone"
            type="number"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            required
          />
        </div>
      </div>

      <button className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;