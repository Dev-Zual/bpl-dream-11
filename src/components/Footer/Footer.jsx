import footerImg from "../../assets/assets/logo-footer.png";
import bannerBg from "../../assets/assets/bg-shadow.png";
const Footer = () => {
  return (
    <footer className="mt-52 text-white bg-[#060919]  p-10 relative">
      <div className="container  text-black mx-auto flex justify-center text-center bg-white  rounded-2xl border-b-8 border-[#191919] ring-1 ring-white absolute top-[-80px] ">
        <div
          className="hero min-h-fit"
          style={{
            backgroundImage: `url(${bannerBg})`,
          }}
        >
          <form className="p-8">
            <h6 className="footer-title">Subscribe to our Newsletter</h6>
            <fieldset className="w-96 ">
              <label className="mb-3">
                Get the latest updates and news right in your inbox!
              </label>
              <div className="join mt-3">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="pt-32">
        <div className="flex justify-center">
          <img src={footerImg} alt="" />
        </div>

        <div className="container mt-8  footer justify-between mx-auto sm:footer-horizontal ">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
