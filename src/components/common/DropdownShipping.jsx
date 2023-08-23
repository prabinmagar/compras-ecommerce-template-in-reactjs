import { useEffect, useRef, useState } from "react";
import { shippingOptions } from "../../data/data";
import { chevron_down } from "../../utils/images";

const DropdownShipping = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);

  const handleShippingSelection = (shippingInfo) => {
    setSelectedShipping(shippingInfo);
  }

  const dropdownHandler = () => setIsDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, []);

  return (
    <div className="shipping-options" ref={dropdownRef}>
      <div className="selected shipping-option flex items-center" onClick={dropdownHandler}>
        <div className="option-text font-medium text-dark no-wrap text-sm">
          Ship to
        </div>
        <span className="option-img">
          <img src={selectedShipping.flagImg} />
        </span>
        <span className="option-icon">
          <img src={chevron_down} />
        </span>
      </div>

      <div className={`shipping-options-list bg-white border-gray-200 border-radius-6 scrollbar-y ${isDropdownOpen ? "show" : ""}`}>
        {shippingOptions.map((shippingOption) => {
          return (
            <div
              className="shipping-option flex items-center"
              key={shippingOption.id}
              onClick={() => handleShippingSelection(shippingOption)}
            >
              <div className="option-text font-medium text-dark no-wrap text-sm uppercase">
                {shippingOption.location}
              </div>
              <span className="option-img">
                <img src={shippingOption.flagImg} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownShipping;
