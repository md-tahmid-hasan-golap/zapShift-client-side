import React from "react";
import { Home, AlertTriangle } from "lucide-react"; // Optional: icons make it feel premium

const ErrorElement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Visual Cue */}
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
            404
          </h1>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </a>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          >
            Try Again
          </button>
        </div>

        {/* Subtle Footer Support */}
        <p className="mt-8 text-sm text-gray-500">
          Need help?{" "}
          <a href="/support" className="text-indigo-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorElement;
