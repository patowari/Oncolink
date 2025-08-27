
import React from 'react';
import { CameraIcon } from './Icons';

const InputField: React.FC<{ label: string; type: string; name: string; }> = ({ label, type, name }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      className="w-full px-3 py-2 border border-[#007ab3] rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007ab3] focus:border-[#007ab3]"
    />
  </div>
);

const RadioGroup: React.FC = () => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
        <div className="flex items-center space-x-6">
            <div className="flex items-center">
                <input id="male" name="gender" type="radio" className="focus:ring-[#007ab3] h-4 w-4 text-[#007ab3] border-gray-300" />
                <label htmlFor="male" className="ml-2 block text-sm text-gray-900">Male</label>
            </div>
            <div className="flex items-center">
                <input id="female" name="gender" type="radio" className="focus:ring-[#007ab3] h-4 w-4 text-[#007ab3] border-gray-300" />
                <label htmlFor="female" className="ml-2 block text-sm text-gray-900">Female</label>
            </div>
            <div className="flex items-center">
                <input id="other" name="gender" type="radio" className="focus:ring-[#007ab3] h-4 w-4 text-[#007ab3] border-gray-300" />
                <label htmlFor="other" className="ml-2 block text-sm text-gray-900">Other</label>
            </div>
        </div>
    </div>
);

const ImageUpload: React.FC = () => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Picture</label>
        <div className="mt-1 flex items-center justify-center w-full h-full min-h-[140px] border border-[#007ab3] rounded-md p-2 bg-gray-50">
             <label htmlFor="file-upload" className="relative cursor-pointer w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 rounded-md">
                <CameraIcon className="h-16 w-16" />
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
            </label>
        </div>
    </div>
);


const RegisterPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Account creation submitted!');
    };

    return (
        <div className="bg-[#f8f9fa] py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#003366] tracking-wider inline-block">REGISTER</h1>
                    <div className="w-24 h-0.5 bg-[#007ab3] mx-auto mt-2"></div>
                </div>
                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Column 1 */}
                        <div className="flex flex-col space-y-6">
                            <InputField label="Full Name" type="text" name="fullName" />
                            <InputField label="Your Current Address" type="text" name="address" />
                            <InputField label="Your Email Address" type="email" name="email" />
                            <InputField label="Password" type="password" name="password" />
                            <InputField label="Confirm Password" type="password" name="confirmPassword" />
                            <InputField label="BMDC/Registration Number" type="text" name="bmdc" />
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-6">
                            <InputField label="Your Mobile No." type="tel" name="mobile" />
                            <InputField label="Your Date of Birth" type="date" name="dob" />
                            <RadioGroup />
                            <ImageUpload />
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button
                            type="submit"
                            className="w-full max-w-xs bg-[#1b5e7d] text-white font-bold py-3 px-4 rounded-md hover:bg-[#134a66] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1b5e7d]"
                        >
                            CREATE ACCOUNT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
