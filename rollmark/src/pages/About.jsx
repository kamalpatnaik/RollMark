import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#023E8A] mb-4">
            About Our Attendance Management App
          </h1>
          <p className="text-gray-600 text-lg">
            Simplifying attendance tracking with innovation, speed, and accuracy.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The <strong>Attendance Management App</strong> is a smart, secure, and easy-to-use 
            digital solution that helps organizations, schools, and businesses track attendance effortlessly. 
            Say goodbye to manual registers — our mobile-friendly system ensures attendance can be 
            marked anytime, anywhere.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to simplify and automate attendance tracking using 
            cutting-edge technology — saving time, improving accuracy, and empowering 
            institutions with real-time insights and analytics.
          </p>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Our competitive advantage
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This section highlights the unique strengths of our attendance app — designed for speed, accuracy, and reliability.
      </p>
    </div>

    <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Growth</h3>
        <p className="mb-2 text-center text-gray-500">
          Scalable and flexible — our system grows as your organization does.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Security</h3>
        <p className="mb-2 text-center text-gray-500">
          Your data is protected with advanced encryption and secure cloud storage.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Cloud</h3>
        <p className="mb-2 text-center text-gray-500">
          Access attendance data anywhere, anytime through secure cloud hosting.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Speed</h3>
        <p className="mb-2 text-center text-gray-500">
          Optimized for lightning-fast attendance processing and updates.
        </p>
      </div>

      {/* Card 5 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Support</h3>
        <p className="mb-2 text-center text-gray-500">
          Get dedicated technical and customer support 24/7 for smooth operation.
        </p>
      </div>

      {/* Card 6 */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#023E8A] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Dark Mode</h3>
        <p className="mb-2 text-center text-gray-500">
          Modern dark mode UI for better comfort and accessibility.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Who Can Use It */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-3">Who Can Use It</h2>
          <p className="text-gray-700 mb-3">
            Our app is designed to be versatile and can be used by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Businesses and startups</li>
            <li>Schools, colleges, and universities</li>
            <li>Remote and hybrid teams</li>
            <li>Event organizers</li>
            <li>Government and private organizations</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to create a world where attendance management is completely 
            automated, transparent, and accessible from anywhere. We aim to empower 
            organizations with tools that make managing people effortless and efficient.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
