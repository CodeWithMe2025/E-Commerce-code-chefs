import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-7xl font-bold text-red-500 m-0">404</h1>
      <h2 className="mt-4 mb-2 text-2xl font-semibold text-gray-900">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-base bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors duration-200"
      >
        Go to Homepage
      </button>
    </div>
  );
}
