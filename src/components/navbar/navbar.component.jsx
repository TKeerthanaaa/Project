import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="position: absolute mx-5 ">
      <div className="container flex item-center mx-9 gap-10">
        <div>
          <img
            src="https://thekarostartup.com/wp-content/uploads/2024/02/final-HQ-12-1024x872.png"
            alt="logo"
            className="w-[85px] h-auto object-contain ml-2"
          />
        </div>
        <ul className="flex gap-12 items-center">
          <li className="font-small text-sl hover:text-green-600">
            <a href="/">Home</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/solution">Solution</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/industries">Industries</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/partners">Partners</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/about">About</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/resources">Resources</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/careers">Careers</a>
          </li>
          <li className="font-small text-sl hover:text-green-600">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
