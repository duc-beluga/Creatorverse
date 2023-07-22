import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../client";

const ViewCreator = () => {
  const [editData, setEditData] = useState({});
  const [fetchError, setFetchError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const f = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id);

      if (error) {
        console.log("1");
        setFetchError(error);
        setEditData(null);
      }
      if (data) {
        console.log("2");
        console.log("from view", data);
        setEditData(data[0]);
        setFetchError(null);
      }
    };
    f();
  }, []);

  const { name, description, url, imageURL } = editData;

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {/* {fetchCreators && <Card creator={setFetchCreators} />} */}
      <div>
        {editData && (
          <div className="flex">
            <form className="flex flex-col bg-gray-200 m-10 rounded-md p-8">
              <label htmlFor="name" className="m-1 pl-0 font-semibold">
                Name:
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={name || ""}
                readOnly
                className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
              />

              <label htmlFor="url" className="m-1 font-semibold">
                URL:
              </label>

              <input
                type="text"
                id="url"
                name="url"
                value={url || ""}
                readOnly
                className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
              />

              <label htmlFor="description" className="m-1 font-semibold">
                Description:
              </label>

              <textarea
                id="description"
                name="description"
                readOnly
                className="w-80 rounded-md m-2 h-14 px-3 shadow-md overflow-auto no-scrollbar"
                value={description || ""}
              />

              <label htmlFor="imageURL" className="m-1 font-semibold">
                imageURL:
              </label>

              <input
                type="text"
                id="imageURL"
                name="imageURL"
                value={imageURL || ""}
                readOnly
                className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
              />
            </form>
            <div>
              <img
                src={imageURL}
                alt="creator-img"
                style={{ width: "400px", height: "496px" }}
                className="m-10 rounded-md shadow-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCreator;
