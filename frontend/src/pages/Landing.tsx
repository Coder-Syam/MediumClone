import { useNavigate } from "react-router-dom";

export function Landing() {
    const navigate = useNavigate();

    function onclick(){
        navigate("/signin");
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <header className="w-full py-8 bg-slate-900">
        <h1 className="text-6xl font-bold text-center text-white">
          Welcome to my Website
        </h1>
      </header>

      <main className="flex flex-col items-center text-center py-16 px-8 space-y-8">
        <h2 className="text-4xl font-semibold">
          Human stories & ideas
        </h2>
        <p className="text-gray-700 max-w-xl text-2xl">
            A place to read, write, and deepen your understanding
        </p>
        <button onClick={onclick} className="px-6 py-3 text-white bg-slate-900 rounded-md hover:bg-slate-700 transition">
          Get Started
        </button>
      </main>

      <footer className="w-full py-4 bg-slate-900 text-center text-white">
        <div className="flex justify-center items-center">
            <div className="flex gap-4">
                <p>Help</p>
                <p>About</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

