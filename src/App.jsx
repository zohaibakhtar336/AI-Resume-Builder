import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
        ResuMate - AI Resume Builder
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-800 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text font-semibold mb-6 text-center max-w-md">
        Create professional resumes instantly with AI
      </p>

      {/* Button */}
      <Button
        variant="default"
        className="text-lg px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all">
        Get Started
      </Button>
    </div>
  );
}

export default App;
