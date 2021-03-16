import React from "react";
import PicOne from "../../assets/pic.png";
import { useSelector } from "react-redux";

function Index({ searchValue }) {
  const items = useSelector((state) => state.items);

  const filteredItems = items.filter((item) => {
    const text = item.title.toLowerCase();
    const lowerCaseSearch = searchValue.toLowerCase();

    return text.indexOf(lowerCaseSearch) !== -1;
  });

  function format(str) {
    let length = 3,
      separator = ",",
      count = 0;
    return str
      .split("")
      .reduceRight((a, c) => {
        if (count === length) {
          a.push(separator);
          count = 1;
        } else count++;
        a.push(c);
        return a;
      }, [])
      .reverse()
      .join("");
  }

  return (
    <div className="card-wrapper">
      {filteredItems.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="card-picture">
              <img alt="pic" src={PicOne} />
              <div
                className={
                  item.type === "IndependentLiving"
                    ? "card-type"
                    : "card-type-orange"
                }
              >
                {item.type}
              </div>
            </div>
            <div className="card-description">
              <div className="card-title">{item.title}</div>
              <div className="card-address">{item.address}</div>
              <div className="card-price">
                <p>
                  New Properties for Sale from{" "}
                  <b>£{format(item.price.toString())}</b>
                </p>
                Shared Ownership Available
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
