import {
  faEnvelopeCircleCheck,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";

function User({ user }) {
  return (
    <div className="shadow-lg userDiv mt-5 p-3">
      <img src={user.picture.medium} alt={user.id.name} />
      <h4>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</h4>
      <h6>
        <span>DOB: </span>
        {moment(`${user.dob.date}`).format("MMMM Do YYYY")}
      </h6>
      <p>{user.dob.age} years</p>
      <div className="contactInfo">
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> {user.email}
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} /> {user.login.username}
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone} /> {user.cell}
        </p>
      </div>
      <div className="details">
        <ul>
          <li>
            <span> Street:</span>
            {`${user.location.street.number} ${user.location.street.name}`}
          </li>
          <li>
            <span>Country:</span> {user.location.country}
          </li>
          <li>
            {" "}
            <span>State:</span> {user.location.state}
          </li>
          <li>
            {" "}
            <span>Postal Code:</span> {user.location.postcode}
          </li>
          <li>
            {" "}
            <span>Latitude:</span> {user.location.coordinates.latitude}
          </li>
          <li>
            {" "}
            <span>Longitude: </span> {user.location.coordinates.longitude}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
