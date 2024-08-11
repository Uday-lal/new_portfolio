function Header(props) {
  return (
    <header className="w-full py-5">
      <div className="p-4 md:px-[100px] 3xl:px-[200px] flex items-center justify-between">
        <div className="brand_section">
          <span
            className="font-bold text-3xl"
            style={{
              fontFamily: "NicoMojo",
            }}
          >
            Uday Lal
          </span>
        </div>
        <div className="links_section flex justify-around items-center w-1/2">
          <a href="#">About ME</a>
          <a href="#">Journey</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
          <a
            href="#"
            className="px-[20px] rounded-full py-[5px] bg-black text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
