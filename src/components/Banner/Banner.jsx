import bannerBg from "../../assets/assets/bg-shadow.png";
import bannerImg from "../../assets/assets/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleFreeCredit }) => {
  return (
    <div className="container mx-auto mt-5">
      <div
        className="hero min-h-[550px] bg-black/90 rounded-md"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        {/* <div className="hero-overlay bg-black/50"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <div className="flex justify-center mb-5">
              <img src={bannerImg} alt="" />
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-2xl">Beyond Boundaries Beyond Limits</p>
            <button
              onClick={handleFreeCredit}
              className="btn bg-yellow-400 border-8 py-5 border-[#191919] ring-1 rounded-2xl font-semibold text-xl ring-yellow-400"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleFreeCredit: PropTypes.func.isRequired,
};
export default Banner;
