import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { useState } from "react";
// import PrimaryBtn from "../../../Components/PrimaryBtn";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import useStudent from "../../../Hooks/useStudent";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const { user, logOut } = useAuth();
  const navItems = (
    <>
      {/*menu*/}
      <li className="flex items-center gap-2">
        <span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            id="Home"
          >
            <path
              d="M1472 992v480q0 26-19 45t-45 19h-384v-384H768v384H384q-26 0-45-19t-19-45V992q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69-62 74q-8 9-21 11h-3q-13 0-21-7L896 424l-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204V288q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
          </svg>
        </span>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="flex items-center gap-2">
        <span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="instructor"
          >
            <g
              data-name="Layer 2"
              fill="#d8a353"
              className="color000000 svgShape"
            >
              <circle
                cx="6"
                cy="10"
                r="3"
                fill="#d8a353"
                className="color000000 svgShape"
              ></circle>
              <path
                d="M8 2h14v2H8zM12 6h10v2H12zM16 10h6v2h-6zM10 18.36l4.77-5.72-1.54-1.28-3.82 4.58A4 4 0 0 0 2 18v4h8Z"
                fill="#d8a353"
                className="color000000 svgShape"
              ></path>
            </g>
          </svg>
        </span>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li className="flex items-center gap-2">
        <span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 64 64"
            id="Classroom"
          >
            <path
              d="M5 60h14a1 1 0 0 0 1-1 8 8 0 0 0-16 0 1 1 0 0 0 1 1Z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
            <circle
              cx="12"
              cy="45"
              r="5"
              fill="#d8a353"
              className="color000000 svgShape"
            ></circle>
            <path
              d="M24 59a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 8 8 0 0 0-16 0Z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
            <circle
              cx="32"
              cy="45"
              r="5"
              fill="#d8a353"
              className="color000000 svgShape"
            ></circle>
            <path
              d="M52 51a8 8 0 0 0-8 8 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 8 8 0 0 0-8-8Z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
            <circle
              cx="52"
              cy="45"
              r="5"
              fill="#d8a353"
              className="color000000 svgShape"
            ></circle>
            <circle
              cx="13"
              cy="9"
              r="5"
              fill="#d8a353"
              className="color000000 svgShape"
            ></circle>
            <path
              d="M5 27h3v10a1 1 0 0 0 1 1h3V28a1 1 0 0 1 2 0v10h3a1 1 0 0 0 1-1V21h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H8a4 4 0 0 0-4 4v7a1 1 0 0 0 1 1Z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
            <path
              d="M59 4H21a1 1 0 0 0-1 1v9h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5v9a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-6 22H43a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-7H29a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Zm0-7H27a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2Z"
              fill="#d8a353"
              className="color000000 svgShape"
            ></path>
          </svg>
        </span>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <div className="dropdown ">
            <label
              className="cursor-pointer flex items-center gap-2 text-white"
              tabIndex={0}
            >
              <span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="dashboard"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
                    fill="#d8a353"
                  ></path>
                </svg>
              </span>
              Dashboard
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 z-20 shadow  bg-black rounded-box w-52 mt-4"
            >
              {(isAdmin && (
                <>
                  {/* Admin Dashboard */}
                  <li className="mb-2 pl-2">Admin</li>
                  <li className="flex flex-row">
                    <span>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        id="Users"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                          d="M121.19873,157.94751a59.99994,59.99994,0,1,0-66.39661,0A96.21448,96.21448,0,0,0,9.45459,192.791a8.0002,8.0002,0,0,0,6.542,12.60546l144.0044-.00537a7.99991,7.99991,0,0,0,6.54052-12.606A96.21491,96.21491,0,0,0,121.19873,157.94751Z"
                          fill="#d8a353"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M248.06348,192.78516a96.214,96.214,0,0,0-45.34327-34.83765A60.00088,60.00088,0,0,0,153.24707,50.23535a8,8,0,0,0-4.251,12.47852,75.83151,75.83151,0,0,1,3.84082,84.88623,8,8,0,0,0,2.04493,10.60107,113.20643,113.20643,0,0,1,8.74365,7.2146c.14429.15674.28979.31275.44873.46021a112.03418,112.03418,0,0,1,25.479,34.90527,7.99971,7.99971,0,0,0,7.24951,4.61523l44.72071-.00537a8.0001,8.0001,0,0,0,6.54-12.606Z"
                          fill="#d8a353"
                          className="color000000 svgShape"
                        ></path>
                      </svg>
                    </span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                      to="/manageusers"
                    >
                      Manage Users
                    </NavLink>
                  </li>
                  <li className="flex flex-row">
                    <span>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        id="OnlineClass"
                      >
                        <g
                          data-name="Glyph"
                          fill="#d8a353"
                          className="color000000 svgShape"
                        >
                          <path
                            d="M59 2H5a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-3 34H31.923A11.121 11.121 0 0 0 9.77 36H8V8h48Z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M33.058 28.885a1 1 0 0 0 1.278 1.278L38 28.853a10.072 10.072 0 1 0-3.636-3.636Zm10.013-16.806a8.071 8.071 0 1 1-4.4 14.833 1 1 0 0 0-.883-.1l-2.132.761.762-2.132a1 1 0 0 0-.105-.883 8.069 8.069 0 0 1 6.762-12.475Z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <circle
                            cx="10"
                            cy="48"
                            r="3"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></circle>
                          <path
                            d="M2.242 61a1 1 0 0 0 1 1h13.209a1 1 0 0 0 1-1 7.6 7.6 0 0 0-15.209 0Z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <circle
                            cx="32"
                            cy="48"
                            r="3"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></circle>
                          <path
                            d="M24.242 61a1 1 0 0 0 1 1h13.209a1 1 0 0 0 1-1 7.6 7.6 0 0 0-15.209 0Z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <circle
                            cx="54"
                            cy="48"
                            r="3"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></circle>
                          <path
                            d="M46.242 61a1 1 0 0 0 1 1h13.209a1 1 0 0 0 1-1 7.6 7.6 0 0 0-15.209 0zm-25.16-39.867a4.067 4.067 0 1 0-4.067-4.066 4.071 4.071 0 0 0 4.067 4.066zM41.488 23.6l5.572-2.983a.5.5 0 0 0 .006-.878l-5.572-3.081a.5.5 0 0 0-.742.438v6.063a.5.5 0 0 0 .736.441z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                      to="/manageclasses"
                    >
                      Manage Classes
                    </NavLink>
                  </li>
                </>
              )) ||
                (isInstructor && (
                  <>
                    {/* Instructor Dashboard */}
                    <li className="mb-2 pl-2">Instructor</li>
                    <li className="flex flex-row ">
                      <span>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="AddPerson"
                        >
                          <g
                            data-name="Layer 2"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          >
                            <path
                              d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2zm-11 5a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"
                              data-name="person-add"
                              fill="#d8a353"
                              className="color000000 svgShape"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                        to="/addclass"
                      >
                        Add a Class
                      </NavLink>
                    </li>
                    <li className="flex flex-row">
                      <span>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 60 60"
                          id="OnlineClasses"
                        >
                          <path
                            d="M51,6H9C7.3499756,6,6,7.3499756,6,9v34c0,1.6499634,1.3499756,3,3,3h12v2h-2c-0.5499878,0-1,0.4500122-1,1v4
	c0,0.5499878,0.4500122,1,1,1h22c0.5499878,0,1-0.4500122,1-1v-4c0-0.5499878-0.4500122-1-1-1h-2v-2h12c1.6500244,0,3-1.3500366,3-3
	V9C54,7.3499756,52.6500244,6,51,6z M46,42h-4c-0.5499878,0-1-0.4500122-1-1s0.4500122-1,1-1h4c0.5499878,0,1,0.4500122,1,1
	S46.5499878,42,46,42z M52,36H8V9c0-0.5499878,0.4500122-1,1-1h42c0.5499878,0,1,0.4500122,1,1V36z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M35,21h-1.6699829c-0.2700195,0-0.5400391,0.1099854-0.7200317,0.3099976L30,24.0799561l-2.6099854-2.7699585
	C27.210022,21.1099854,26.9400024,21,26.6699829,21H25c-3.25,0-6,2.5199585-6,5.5100098V32c0,0.5499878,0.4500122,1,1,1h20
	c0.5499878,0,1-0.4500122,1-1v-5.4899902C41,23.5199585,38.25,21,35,21z"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></path>
                          <circle
                            cx="30"
                            cy="15.77"
                            r="5"
                            fill="#d8a353"
                            className="color000000 svgShape"
                          ></circle>
                        </svg>
                      </span>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                        to="/instructorClass"
                      >
                        My Classes
                      </NavLink>
                    </li>
                  </>
                )) ||
                (isStudent && (
                  <>
                    {/* Student Dashboard */}
                    <li className="mb-2 pl-2">Student</li>
                    <li className="flex flex-row">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                        to="/myClass"
                      >
                        My Selected Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                        to="/enrollClass"
                      >
                        My Enrolled Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                        to="/paymentHistory"
                      >
                        Payment History
                      </NavLink>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </li>
      )}
    </>
  );
  return (
    <nav className="py-4 bg-black text-white md:px-6 relative">
      <div className="flex justify-between items-center mx-2 px-3">
        <div className="flex gap-2 items-center">
          <div>
            <img className="w-10 h-10" src={logo} alt="" />
          </div>
          <h3 className="text-2xl font-bold">Musiway</h3>
        </div>
        <div className="hidden md:block ">
          <ul className="flex items-center gap-6">{navItems}</ul>
        </div>
        <div className="hidden md:block">
          {user ? (
            <div className="flex items-center gap-4 ">
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
              <li className="list-none">
                <Link onClick={logOut}>Log Out</Link>
              </li>
            </div>
          ) : (
            <li className="list-none ">
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
        <div className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="bg-white rounded-full">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 16"
                id="X"
              >
                <path
                  fill="#d8a353"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"
                ></path>
              </svg>
            </span>
          ) : (
            <span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="Bars"
              >
                <path
                  d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                  fill="#d8a353"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="absolute z-30 top-[72px] bg-black bg-opacity-90 shadow-2xl rounded-b-xl w-full text-white ">
            <ul className="md:hidden pl-10 flex flex-col gap-5 my-4">
              {navItems}
            </ul>
            <div className="md:hidden pl-10 pb-5">
              {user ? (
                <div className="flex flex-col  gap-4 ">
                  <img
                    className="w-12 h-12 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    alt=""
                  />
                  <li className="list-none">
                    <Link onClick={logOut}>Log Out</Link>
                  </li>
                </div>
              ) : (
                <li className="list-none ">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
