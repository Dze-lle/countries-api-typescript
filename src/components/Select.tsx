import { useState } from "react";
import { ISelectOption } from "../interfaces/interfaces";
import { FaAngleDown } from "react-icons/fa";

type SelectProps = {
  options: ISelectOption[];
  value?: ISelectOption;
  onChange: (value: ISelectOption | undefined) => void;
};

function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectOption = (option: ISelectOption) => onChange(option);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className="select__container"
    >
      <span className="value">
        {value?.label !== undefined ? value?.label : `Filter by Region`}
      </span>
      <FaAngleDown />
      <ul className={isOpen ? `options show` : `options`}>
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.value}
            className="option"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
