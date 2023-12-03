import logoLight from "./../../assets/img/logo/logo-light.png";
import commingSoonImg from "./../../assets/img/comming soon/CommingSoon.jpg";

function CommingSoon(props) {
  const { title } = props;
  return (
    <div className="grid grid-cols-2 h-full">
      <div className={`col-span-1 flex flex-col justify-between`}>
        <div className="my-5 mx-2 items-center flex">
          <img src={logoLight} className="w-20 h-20" alt="Bitlearn" />
          <h2 className="ml-auto text-white text-2xl font-bold">{title}</h2>
        </div>
        <div className="">
          <h2 className="text-white text-4xl font-bold mb-5">Comming Soon!</h2>
          <p className="text-white text-sm mb-2">
            Subscribe to enter the waitlist
          </p>
          <div className="flex p-0 m-0 mb-4 w-2/3 bg-transparent rounded-lg justify-between">
            <input
              type="email"
              className="bg-white w-full p-2 rounded-l-lg outline-none"
            />
            <button
              type="button"
              className="bg-blue-700 p-2 rounded-r-lg cursor-pointer text-sm text-white w-1/3"
            >
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm">
            By clicking subscribe you agree to our Terms & conditions
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-1">
        <img src={commingSoonImg} alt="comming soon" />
      </div>
    </div>
  );
}

export default CommingSoon;
