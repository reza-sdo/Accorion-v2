import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion one",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa itaque velit eum doloremque impedit mollitia expedita iure facilis vero, saepe in facere soluta eius fugiat delectus autem? Quo, veniam!",
  },
  {
    id: 2,
    title: "Accordion two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa itaque velit eum doloremque impedit mollitia expedita iure facilis vero, saepe in facere soluta eius fugiat delectus autem? Quo, veniam!",
  },
  {
    id: 3,
    title: "Accordion three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa itaque velit eum doloremque impedit mollitia expedita iure facilis vero, saepe in facere soluta eius fugiat delectus autem? Quo, veniam!",
  },
];
function Accordion() {
  return (
    <div className="accordion">
      {data.map((i) => (
        <AccordionItem item={i} key={i.id} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
        className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
