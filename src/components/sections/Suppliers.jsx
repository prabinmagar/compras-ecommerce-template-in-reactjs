import { suppliers } from "../../data/data";

const Suppliers = () => {
  return (
    <section className="sc-suppliers">
      <div className="container">
        <h3 className="title">Suppliers by region</h3>
        <div className="suppliers-content grid">
          {suppliers.map((supplier) => (
            <div className="suppliers-item grid items-center" key={supplier.id}>
              <div className="suppliers-item-img">
                <img src={supplier.flagImg} alt="" />
              </div>
              <div className="suppliers-item-info">
                <p className="text text-sm text-dark">{supplier.country}</p>
                <p className="text-sm text-gray-500">{supplier.shopname}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
