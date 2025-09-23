const Navbar = () => {
  return (
    <header className=" bg-purple-100 shadow-md border-b-[0.5px] border-gray-300">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#" className="text-gray-600 text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-base">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-base">
                  Students
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="text-xl font-bold">
            PH University
          </a>
        </div>
        <div className="navbar-end hidden lg:flex gap-6">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li>
              <a href="#" className="text-gray-600 text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-base">
                Faculty
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-base">
                Students
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-base">
                Contact
              </a>
            </li>
          </ul>
          <a className="btn bg-purple-500 text-white rounded-md text-lg">
            + New Assignment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
