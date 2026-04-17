import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-blue-500">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;


// Using by chat GPT