import React from "react";

const EmailForm = () => {
  return (
    <section>
      <div>
        <form>
          <label htmlFor="name" className="text-lg ml-4">
            Name
          </label>

          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2 w-full mb-5"
          />
          <label htmlFor="email" className="text-lg ml-4">
            Email
          </label>

          <input
            type="email"
            id="email"
            required
            placeholder="YourEmail@gmail.com"
            className="rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2 w-full mb-5"
          />

          <label htmlFor="subject" className="text-lg ml-4">
            Message
          </label>
          <textarea
            id="subject"
            required
            placeholder="Love your work! Let's connect!"
            className="rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2 w-full h-32 mb-2"
          />
          <button
            type="submit"
            className="inline-block rounded-md text-left bg-white text-xl ml-5 p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
