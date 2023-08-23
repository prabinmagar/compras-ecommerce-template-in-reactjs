import { avatar } from "../../utils/images";

const Offers = () => {
  return (
    <div className="offers grid">
      <div className="offers-block-join border-radius-6">
        <div className="join-user grid items-center">
          <div className="avatar">
            <img src={avatar} />
          </div>
          <p className="text text-dark">Hi, user let&apos;s get started.</p>
        </div>
        <div className="btn-group flex flex-col">
          <a href="#" className="btn btn-sm btn-sm-blue">
            Join now
          </a>
          <a href="#" className="btn btn-sm btn-sm-white">
            Log in
          </a>
        </div>
      </div>
      <div className="offers-block-off bg-orange text-white text border-radius-6 flex items-center">
        Get US $10 off with a new supplier
      </div>
      <div className="offers-block-quote bg-verdigris text-white text border-radius-6 flex items-center">
        Send quotes with supplier preferences
      </div>
    </div>
  );
};

export default Offers;
