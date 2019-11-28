import React from "react";
import s from "../styling/DisplayShirt.module.scss";

function DisplayShirt() {
  return (
    <div className="container d-flex justify-content-center">
      <main
        className={`d-flex flex-row justify-content-center align-items-center`}
      >
        <div className={`d-flex flex-column ${s.shirtContainer}`}>
          <img
            className={`${s.shirt}`}
            src="https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=G200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false    -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;}"
          />
          <p className="asd">12.28$</p>
          <button type="button" class={`btn btn-outline-dark ${s.order}`}>
            Order
          </button>
        </div>
        <aside>
          <div className={`${s.configContainer}`}>
            <span>Upload your image</span>
            <div className={`${s.uploadedImageContainer}`}></div>
            <div className={`${s.colorContainer} d-flex flex-row`}>
              <div className={`${s.blackShirt} ${s.allShirts}`}></div>
              <div className={`${s.blueShirt} ${s.allShirts}`}></div>
              <div className={`${s.redShirt} ${s.allShirts}`}></div>
              <div className={`${s.grayShirt} ${s.allShirts}`}></div>
              <div className={`${s.whiteShirt} ${s.allShirts}`}></div>
            </div>
            <div className="dropdown">
              <button
                class={`btn  dropdown-toggle btn-outline-dark ${s.sizeDropDown} shadow-none`}
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose Size
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  Action
                </button>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default DisplayShirt;
