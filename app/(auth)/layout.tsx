export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Piksel Art Digital</h1>
          <p className="text-gray-500 text-sm mt-1">Eğitim Platformu</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
