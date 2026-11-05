import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-4">Hola Mundo</h1>
        <p className="text-lg text-black-700">Miss Y.O.U.</p>
      </div>
    </div>
  );
}
