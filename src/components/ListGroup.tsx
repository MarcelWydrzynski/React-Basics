import { useState } from "react";

function ListGroup() {
  let items = ["Sydney", "New York", "Berlin", "Boston"];


  // Hook
  const [selectedIndex, setselectedIndex] = useState(-1);
  

  return (
    <>
      <h1>List!</h1>
      {items.length === 0 && <p>Sory mordo to nie działa</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => (setselectedIndex(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
