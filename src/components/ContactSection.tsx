"use client";
import EmailForm from "@/components/emailForm";
import LocalTime from "@/components/LocalTime";

export default function ContactSection() {
  return (
    <section id="contact" className="grid h-screen w-full grid-cols-12 grid-rows-12 gap-5">
      <div className="col-span-12 row-span-2 flex flex-col px-14 pt-8 ml-16">
        <span className="text-9xl font-semibold">Get In Touch</span>
      </div>
      <div className="col-start-3 col-span-2 row-start-4 row-span-4 rounded-3xl bg-secondary flex flex-col justify-between">
        <LocalTime />
        <span className="mb-5 ml-5 text-lg">Current Local Time</span>
      </div>

      <div className="col-start-6 col-span-2 row-start-4 row-span-5 rounded-3xl bg-secondary "></div>

      <div className="col-start-8 col-span-4 row-span-8 p-10 rounded-3xl bg-secondary ">
        <h1 className="text-5xl pb-12 font-semibold">Let's Talk</h1>
        <EmailForm />
      </div>
    </section>
  );
}
