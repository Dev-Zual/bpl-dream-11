import logo from "../../assets/assets/logo.png";
const Header = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className=" ">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <button className="btn btn-outline">0 Coin</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
