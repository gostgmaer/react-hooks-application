import React, { useState } from "react";

function HoockCounterThree() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  return (
    <div>
      <div className="form-group">
        <label> First Name is - {name.firstName}</label>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          type="text"
          name="firstName"
          id="firstName"
          className="form-control"
          
        >
         
        </input>
        <label> First Name is - {name.lastName}</label>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          type="text"
          name="lastName"
          id="lastName"
          className="form-control"
         
        >
         
        </input>
        <h2>{JSON.stringify(name)}</h2>
      </div>
    </div>
  );
}

export default HoockCounterThree;
