export default function Home() {
  return (
    <main className="w-full">
      <div className="absolute right-[0px] rotate-[45deg] top-[-12%] h-[200vh] w-1/3 bg-black"></div>
      <section className="w-full h-[90vh] pt-[20vh] p-4 md:px-[100px] 3xl:px-[200px] *:w-full grid grid-cols-[65%_35%]">
        <div className="section_left">
          <h1 className="text-3xl font-semibold">Hi There, I’m Uday</h1>
          <h2 className="text-6xl font-bold mt-4">I’m A Software Developer</h2>
          <div>
            <button className="bg-black text-white px-[20px] py-[5px] mt-8 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="section_right">
          <div className="w-full editor_container">
            <div className="editor relative w-full z-50 h-[300px] 3xl:h-[350px] bg-[#2D303E]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
