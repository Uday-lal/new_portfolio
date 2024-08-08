function Header(props) {
  return (
    <header className="w-full py-5">
      <div className="p-4 md:px-[100px] lg:px-[200px] flex items-center justify-between">
        <div className="brand_section">
          <h1
            className="font-bold text-3xl"
            style={{
              fontFamily: "NicoMojo",
            }}
          >
            Uday Lal
          </h1>
        </div>
        <div className="links_section flex justify-around w-1/2">
          <a href="#">About ME</a>
          <a href="#">Journey</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
