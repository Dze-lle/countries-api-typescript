import { useEffect, useState } from "react";
import { ISelectOption } from "../interfaces/interfaces";

type SelectProps = {
  options: ISelectOption[];
  value?: ISelectOption;
  onChange: (value: ISelectOption | undefined) => void;
};

function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const selectOption = (option: ISelectOption) => onChange(option);

  const isOptionSelected = (option: ISelectOption) => option === value;

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

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
      <span className="caret"></span>
      <ul className={isOpen ? `options show` : `options`}>
        {options.map((option, index) => (
          <li
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.value}
            className={`option
            ${index === highlightedIndex ? "highlighted" : ""} ${
              isOptionSelected(option) ? "selected" : ""
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
