import  { useState } from "react";

export default function Switch() {
  const [isSelected, setSelected] = useState(false);

  const toggleSwitch = () => {
    setSelected(!isSelected);
  };

  return (
    <div
      className={`flex w-20 h-10 bg-gray-600 m-10 rounded-full ${
        isSelected ? "justify-end" : "justify-start"
      }`}
      onClick={toggleSwitch}
    >
      <span
        className={`h-10 w-10 bg-white rounded-full transform transition-transform ${
          isSelected ? "translate-x-full" : "translate-x-0"
        }`}
      />
    </div>
  );
}
