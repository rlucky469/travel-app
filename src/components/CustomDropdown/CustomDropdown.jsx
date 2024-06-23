import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import "../CustomDropdown/customdropdown.css";

const CustomDropdown = ({ label, options, onSelect }) => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = (selecedVal) => {
    setSelectedValue(selecedVal);
    onSelect(selecedVal);
  };

  return (
    <>
      <label className="item-search-label"> {label}</label>
      <Dropdown className="dropdown-custom" onSelect={handleClick}>
        <Dropdown.Toggle id="dropdown-custom-components">
         <span>{selectedValue ? selectedValue : label}</span> 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Control
            autoFocus
            className=" my-1"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">

            {options
              .filter(
                (option) =>
                  !value || option.toLowerCase().startsWith(value.toLowerCase())
              )
              .map((option, index) => (
                <li  key={index}>

                <Dropdown.Item eventKey={option}>
                  {option}
                </Dropdown.Item>
                </li>
              ))}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
      
    </>
  );
};

export default CustomDropdown;
