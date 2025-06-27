import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="flex items-center gap-6 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-16 h-16 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-16 h-16 hover:scale-110 transition-transform"
            alt="React logo"
          />
          login added by supabase
        </a>
      </div>

      <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg">
        Code Chefs E-commerce
      </h1>

      <p className="text-lg text-slate-300 mt-4 text-center max-w-lg">
        This is our first step toward building something real. Let's push
        boundaries, learn together, and create something we're proud of.
      </p>
    </main>
  );
}

export default App;
