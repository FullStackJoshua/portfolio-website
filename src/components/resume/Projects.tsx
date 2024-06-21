import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="border-b-2 border-gray-200 mb-4"></div> {/* Divider */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-1">TechPediaBlogs</h3>
        <p className="text-gray-700 mb-2">
          Full-stack MERN blogging website (MERN Stack, Editor JS)
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Implemented Google Authentication for users to enhance security and user experience.
          </li>
          <li>Designed dynamic blog pages with dynamic URLs for an engaging user experience.</li>
          <li>
            Implemented a notification system where every interaction on the site generates
            notifications for respective users.
          </li>
          <li>
            Enabled like interactions on blogs and added a comment system with the ability to reply
            to comments (nested comments).
          </li>
          <li>
            Added an edit profile option for users to update social links, bio, and username, along
            with a password change feature in settings.
          </li>
          <li>
            Ensured mobile responsiveness and modern design with fade-in animations on pages for a
            visually appealing website.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-1">Marginal Tax Rate Calculator</h3>
        <p className="text-gray-700 mb-2">
          (Java, JavaFX, FXML, Scene Builder, Web API with Postman), Back-end data services
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Designed and implemented the back-end data services to retrieve tax rate information for
            each year and filing status.
          </li>
          <li>
            Developed a RESTful web API using Java and integrated it with Postman for testing and
            validation.
          </li>
          <li>
            Created a responsive and user-friendly front end using JavaFX and FXML, including radio
            buttons for year selection and filing status, and a text box for salary input.
          </li>
          <li>
            Implemented the logic to calculate the user's marginal tax rate based on the selected
            options and salary input.
          </li>
          <li>
            Utilized a bar chart library in JavaFX to visualize the difference in tax liability
            across the years.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-1">
          Auto Rental Point-of-Sales Management System
        </h3>
        <p className="text-gray-700 mb-2">
          Database Developer (MS SQL SERVER, MS SQL MANAGEMENT STUDIO)
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Implemented a subset of the designed database using a combination of Waterfall and Agile
            methodologies.
          </li>
          <li>
            Implemented a subset of the designed database, including the Conceptual EER Model and
            Normalized Logical Model, showcasing proficiency in database architecture.
          </li>
          <li>
            Executed the creation and implementation of the Physical Model Schema in MS SQL SERVER,
            covering Data Dictionary tables and the schema diagram.
          </li>
          <li>
            Skillfully handled the Development & Implementation phase, utilizing MS SQL MANAGEMENT
            STUDIO to bring the Physical Model to life.
          </li>
          <li>
            Conducted rigorous testing and validation of the Physical Model Schema in MS SQL SERVER
            COMMUNITY EDITION, ensuring robust performance.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
