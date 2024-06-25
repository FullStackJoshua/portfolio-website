export default function ProjectSection() {
  return (
    <section id="projects" className="grid h-screen w-full grid-cols-12 grid-rows-12">
      <div className="col-span-1 row-span-12 rounded-3xl flex flex-col px-14 ml-16  items-center justify-center ">
        <span className="-rotate-90 text-8xl font-semibold">Porjects</span>
      </div>
      <div className="col-span-10 row-span-1 rounded-3xl flex flex-col text-center ml-12 text-8xl font-semibold">
        Project Name
      </div>
      <div className="col-span-10 row-span-8 rounded-3xl bg-secondary flex flex-col ml-12 px-14 pt-8 mt-7"></div>
      <div className="col-span-10 row-span-3 rounded-3xl bg-secondary flex flex-col ml-32 mr-20 px-14 pt-8 my-5"></div>
    </section>
  );
}
