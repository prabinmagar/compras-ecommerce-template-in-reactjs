const Inquiry = () => {
  return (
    <section className="sc-inquiry">
      <div className="container">
        <div className="inquiry-content border-radius-6 grid">
          <div className="inquiry-text text-white">
            <h2 className="font-semibold">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="inquiry-form bg-white border-radius-6">
            <form>
              <p className="form-title text-lg text-dark font-semibold">
                Send quote to suppliers
              </p>
              <div className="form-elem">
                <input
                  type="text"
                  className="form-elem-control"
                  placeholder="What item you need?"
                />
              </div>
              <div className="form-elem">
                <textarea
                  placeholder="Type more details"
                  className="form-elem-control"
                ></textarea>
              </div>
              <div className="form-elems grid">
                <div className="form-elem">
                  <input
                    type="text"
                    className="form-elem-control"
                    placeholder="Quantity"
                  />
                </div>
                <div className="form-elem">
                  <div className="select-wrapper">
                    <select name="" id="" className="form-elem-control">
                      <option value="">
                        Pcs
                      </option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-blue">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
