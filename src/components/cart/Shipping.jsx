import React, { useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Shipping() {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "addShipingInfo",
      payload: { hNo, city, country, state, pinCode, phoneNo },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({ hNo, city, country, state, pinCode, phoneNo })
    );

    navigate("/confirmorder");
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter house no."
              value={hNo}
              required
              onChange={(e) => setHNo(e.target.value)}
            />
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <label>Country</label>
            <select
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {country && (
            <div>
              <label>State</label>
              <select
                value={state}
                required
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <label>Pincode</label>
            <input
              type="number"
              placeholder="Enter pincode"
              value={pinCode}
              required
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>

          <div>
            <label>Phone No.</label>
            <input
              type="number"
              placeholder="Enter phone no."
              value={phoneNo}
              required
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
}

export default Shipping;
