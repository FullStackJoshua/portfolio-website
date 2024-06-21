import React from "react";

const Experience: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg px-6 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
      <div className="border-b-2 border-gray-200 mb-4"></div> {/* Divider */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-1">Unadat, Inc</h3>
        <p className="text-gray-700 mb-2">New York, NY | Mar '24 – April '24</p>
        <p className="font-medium mb-2">Technical Product Manager Intern</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Orchestrated the leadership and development of a group of nine Software Engineer (SWE)
            interns at Unadat, guiding them through agile methodologies and project lifecycles,
            resulting in a 45% increase in project delivery efficiency.
          </li>
          <li>
            Engaged directly with SWEs through midweek huddles and sub-team meetings, addressing
            impediments and providing support.
          </li>
          <li>
            Facilitated main meetings with the CEO and CTO to review progress and strategize for
            sprint cycles.
          </li>
          <li>
            Overcame challenges in learning new tools (e.g., Linear product management website) and
            understanding the code base through effective communication and comprehensive notes.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
