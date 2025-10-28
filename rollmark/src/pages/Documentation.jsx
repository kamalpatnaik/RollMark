import React from "react";
import Contact from "../components/Contact";

const Documentation = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="bg-[#023E8A] text-white py-12 px-6 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">Attendance Management App Documentation</h1>
        <p className="text-lg opacity-90">
          Manage attendance seamlessly — from mobile or web, anytime, anywhere.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6 space-y-16">
        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4 text-[#023E8A]">About</h2>
          <p className="text-gray-700 leading-relaxed">
            The Attendance Management App is designed to simplify attendance tracking
            for organizations, schools, and companies. It allows employees, teachers,
            and students to mark attendance directly from their mobile devices.
            The system ensures accuracy, reduces paperwork, and saves valuable time
            for administrators and HR departments.
          </p>
        </section>

        {/* Features */}
        <section id="features">
          <h2 className="text-3xl font-semibold mb-4 text-[#023E8A]">Features</h2>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
            <li>✔️ Real-time attendance tracking via mobile or desktop</li>
            <li>✔️ GPS-based attendance verification</li>
            <li>✔️ Admin dashboard for monitoring and reports</li>
            <li>✔️ Automated leave and late entry management</li>
            <li>✔️ Export attendance data in Excel or PDF formats</li>
            <li>✔️ Role-based access for admin, staff, and users</li>
            <li>✔️ Secure cloud storage and instant synchronization</li>
          </ul>
        </section>

        {/* Documentation / Usage Guide */}
        <section id="documentation">
          <h2 className="text-3xl font-semibold mb-4 text-[#023E8A]">Documentation</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Follow the steps below to set up and use the Attendance Management App:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Download the app from the official website or app store.</li>
            <li>Sign up using your organization-provided credentials or email.</li>
            <li>Admins can add departments, employees, and user roles.</li>
            <li>Users can mark attendance through their dashboard or mobile app.</li>
            <li>Admins can generate reports and view analytics anytime.</li>
          </ol>
        </section>

        {/* Terms & Conditions */}
        <section id="terms">
          <h2 className="text-3xl font-semibold mb-4 text-[#023E8A]">Terms & Conditions</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            By using this app, you agree to our terms and conditions. Please read
            them carefully:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
            <li>All data collected is used solely for attendance management.</li>
            <li>Users are responsible for the security of their login credentials.</li>
            <li>
              The app must not be used for any unauthorized tracking or surveillance.
            </li>
            <li>
              The developers are not liable for data loss caused by third-party
              integrations.
            </li>
            <li>We reserve the right to update terms and conditions at any time.</li>
          </ul>
        </section>

      
      </main>

    </div>
  );
};

export default Documentation;
