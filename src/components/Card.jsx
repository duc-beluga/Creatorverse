import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faLink, faPen } from "@fortawesome/free-solid-svg-icons";

const Card = ({ creator }) => {
  return (
    <div className="w-1/3 p-3 bg-blue-300 m-2 rounded-md h-40">
      <div className="flex justify-between">
        <div className="font-semibold">{creator.name}</div>
        <div className="flex justify-between">
          <Link to={`./${creator.id}`} className="mx-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </Link>
          <Link to={`edit/${creator.id}`} className="mx-2">
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
      </div>
      <div>
        <a href={creator.url} target="_blank">
          {" "}
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
      <div className="my-2 overflow-auto whitespace-normal h-12 truncate">
        {creator.description}
      </div>
    </div>
  );
};

export default Card;
// whitespace-nowrap
