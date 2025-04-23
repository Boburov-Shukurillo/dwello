export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 animate-fade-in">
          {children}
        </div>
      </div>
    );
  }
  