import BG from "../assets/bg-signup.jpg";
import PropTypes from "prop-types";

export default function AuthPageWrapper({ children }) {
  AuthPageWrapper.propTypes = {
    children: PropTypes.any,
  };
  return (
    <div className="flex h-[90vh]">
      <div className="flex flex-1 items-center">
        <p className="text-[64px] px-10 font-semibold text-slate-700">
          Effortless
          <br /> Property
          <br /> Discovery
        </p>
      </div>
      <div
        className="flex flex-1 items-center overflow-y-scroll bg-cover rounded-2xl m-2"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {children}
      </div>
    </div>
  );
}
