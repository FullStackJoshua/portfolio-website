import React from "react";

const Education: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="border-b-2 border-gray-200 mb-4"></div> {/* Divider */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-1">New York City College of Technology</h3>
        <p className="text-gray-700 mb-2">Brooklyn, NY</p>
        <p className="font-medium mb-2">
          Bachelor of Technology in Software Development | GPA: 3.5
        </p>
        <p className="text-gray-600 mb-4">May 2024</p>
        <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Programming Fundamentals</li>
          <li>Web Programming I & II</li>
          <li>Database Systems Fundamentals</li>
          <li>Object Oriented Programming</li>
          <li>Object Oriented System Design</li>
          <li>XML Data Representation</li>
          <li>Application Development with Database</li>
          <li>Project Management</li>
          <li>Software Development & the .NET Framework</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
