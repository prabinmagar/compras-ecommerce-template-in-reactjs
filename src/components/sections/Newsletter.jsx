import { email } from "../../utils/images";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content text-center">
          <h4 className="text-lg text-dark">Subscribe on our newsletter</h4>
          <p className="text text-gray-800">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <form className="flex items-center justify-center newsletter-form">
            <div className="form-elem-group grid items-center">
              <span className="form-elem-icon flex items-center justify-center">
                <img src={email} />
              </span>
              <input
                type="text"
                placeholder="Email"
                className="form-elem-control"
              />
            </div>
            <button type="submit" className="btn btn-blue">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
