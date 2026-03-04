"use client";
import About from "@/components/About";
import MasterLayout from "@/components/MasterLayout";

export default function App() {
  return (
    <MasterLayout>
      <section
        id="home"
        className="min-h-screen flex relative overflow-hidden"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md mb-10 md:mb-0 text-center">
            <h1 className="text-4xl md:text-8xl font-bold text-gray-900 mb-4 uppercase">
              Ritika Shrestha
            </h1>
            <h2 className="text-2xl md:text-3xl text-indigo-600 mb-6">
              Software Engineer | Web Developer
            </h2>
          </div>
        </div>
      </section>
      <About />
    </MasterLayout>
  );
}
