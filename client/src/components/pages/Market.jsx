import React from "react";
import "../styles/Market.css";
import Navbar from "../Navbar";
import { useState } from "react";

export default function Market() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row vh-75">
          <div className="col-4 h-100">
            <div className="left-side border-end w-100 pe-3 h-100">
              <div className="leftItems my-4">
                <div className="leftTop">
                  <h5> Currently Growing Crops </h5>
                  <div className="items py-4">
                    <p className="item1 m-0">rice</p>
                    <p className="item2 m-0">wheat</p>
                    <p className="item3 m-0">apple</p>
                    <p className="item4 m-0">banana</p>
                    <p className="item5 m-0">onion</p>
                  </div>
                </div>

                <div className="border"></div>

                <div className="leftBottom">
                  <h5 className="py-4">Holdings of Land</h5>
                  <p className="size pt-2 p-0">23.9 acres</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className=" h-100 p-4 d-flex flex-column">
              <table class="table mx-4">
                <thead>
                  <tr className="tr">
                    <th className="column itemHeading" scope="col">
                      Name of crop
                    </th>
                    <th className="column text-center itemHeading" scope="col">
                      Price(per kg)
                    </th>
                    <th className="col text-center itemHeading">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr">
                    <th className="column" scope="row">
                      rice
                    </th>
                    <td className="column text-center price">
                      <i class="fa-solid fa-indian-rupee-sign px-1"></i>19
                    </td>
                    <div className="quantity justify-content-center d-flex">
                      <button
                        className="btn"
                        onClick={() => setValue1(value1 - 1)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <td className="text">{value1}</td>
                      <button
                        className="btn"
                        onClick={() => setValue1(value1 + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </tr>

                  <tr className="tr">
                    <th className="column" scope="row">
                      wheat
                    </th>
                    <td className="column text-center price">
                      <i class="fa-solid fa-indian-rupee-sign px-1"></i>23
                    </td>
                    <div className="quantity justify-content-center d-flex">
                      <button
                        className="btn"
                        onClick={() => setValue2(value2 - 1)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <td className="text">{value2}</td>
                      <button
                        className="btn"
                        onClick={() => setValue2(value2 + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </tr>

                  <tr className="tr">
                    <th className="column" scope="row">
                      bajra
                    </th>
                    <td className="column text-center price">
                      <i class="fa-solid fa-indian-rupee-sign px-1"></i>15
                    </td>
                    <div className="quantity justify-content-center d-flex">
                      <button
                        className="btn"
                        onClick={() => setValue3(value3 - 1)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <td className="text">{value3}</td>
                      <button
                        className="btn"
                        onClick={() => setValue3(value3 + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </tr>

                  <tr className="tr">
                    <th className="column" scope="row">
                      jowar
                    </th>
                    <td className="column text-center price">
                      <i class="fa-solid fa-indian-rupee-sign px-1"></i>10
                    </td>
                    <div className="quantity justify-content-center d-flex">
                      <button
                        className="btn"
                        onClick={() => setValue4(value4 - 1)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <td className="text">{value4}</td>
                      <button
                        className="btn"
                        onClick={() => setValue4(value4 + 1)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </tr>
                </tbody>
              </table>
              <div class="col-md-12 text-center my-4">
                <button type="submit" className="button btn btn-block">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
