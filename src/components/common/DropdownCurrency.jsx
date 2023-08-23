import { useEffect, useRef, useState } from "react";
import { currencyOptions } from "../../data/data";
import { chevron_down } from "../../utils/images";

const DropdownCurrency = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);

  const handleCurrencySelection = (currencyInfo) => {
    setSelectedCurrency(currencyInfo);
  }

  const dropdownHandler = () => {
    setisDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisDropdownOpen(false);
      }
    };

    // Attach the event listener on component mount
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="currency-options" ref={dropdownRef}>
      <div
        className="selected currency-option flex items-center"
        onClick={dropdownHandler}
      >
        <div className="option-text font-medium text-dark no-wrap text-sm">
          {selectedCurrency.country}, {selectedCurrency.currency}
        </div>
        <span className="option-icon">
          <img src={chevron_down} />
        </span>
      </div>
      <div
        className={`currency-options-list bg-white border-gray-200 border-radius-6 scrollbar-y ${
          isDropdownOpen ? "show" : ""
        }`}
      >
        {currencyOptions.map((currencyOption) => {
          return (
            <div
              className="currency-option flex items-center"
              key={currencyOption.id}
              onClick={() => handleCurrencySelection(currencyOption)}
            >
              <div className="option-text font-medium text-dark no-wrap text-sm">
                {currencyOption.country}, {currencyOption.currency}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownCurrency;
