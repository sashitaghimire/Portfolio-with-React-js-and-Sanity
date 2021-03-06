import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "projects", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={{ backgroundColor: active === item ? "#313bac" : "" }}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
