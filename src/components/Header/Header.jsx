import { AiOutlineDollarCircle } from "react-icons/ai";
import logo from "../../assets/assets/logo.png";
import PropTypes from "prop-types";
const Header = ({ freeCredit }) => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className=" ">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu font-semibold text-black/70 menu-horizontal px-1">
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
            <button className="btn btn-outline font-bold">
              {freeCredit} Coin
              <AiOutlineDollarCircle className="text-2xl text-yellow-400" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
Header.propTypes = {
  freeCredit: PropTypes.number.isRequired,
};
export default Header;
