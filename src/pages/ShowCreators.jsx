import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import supabase from "../client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const ShowCreators = () => {
  const [fetchCreators, setFetchCreators] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const f = async () => {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        setFetchError(error);
        setFetchCreators(null);
      }
      if (data) {
        setFetchCreators(data);
        setFetchError(null);
      }
    };
    f();
    console.log(fetchCreators);
  }, []);

  return (
    <div className="p-3">
      <div className="flex align-middle justify-center my-5">
        <Link className="bg-blue-300 rounded-md p-2" to="./add">
          Add a creator
          <span className="mx-1"></span>
          <FontAwesomeIcon icon={faCirclePlus} />
        </Link>
      </div>
      {fetchError && <p>{fetchError}</p>}
      <div className="flex flex-wrap justify-center align-middle">
        {fetchCreators &&
          fetchCreators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
      </div>
    </div>
  );
};

export default ShowCreators;
