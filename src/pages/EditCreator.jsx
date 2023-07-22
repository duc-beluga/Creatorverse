import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client";

const EditCreator = () => {
  const [editData, setEditData] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const f = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id);

      if (error) {
        setFetchError(error);
        setEditData(null);
      }
      if (data) {
        console.log(data);
        setEditData(data[0]);
        setFetchError(null);
      }
    };
    f();
  }, []);

  const { id } = useParams();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update(editData)
      .eq("id", id);

    navigate("/");
    console.log("Submitted");
  };

  const handleInputChange = (event) => {
    setEditData({
      ...editData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);
    navigate("/");
  };

  const { name, description, url, imageURL } = editData;

  return (
    <div>
      {editData && (
        <div className="flex">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col bg-gray-200 m-10 rounded-md p-8"
          >
            <label htmlFor="name" className="m-1 pl-0 font-semibold">
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={name || ""}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
            />

            <label htmlFor="description" className="m-1 font-semibold">
              Description:
            </label>

            <textarea
              id="description"
              name="description"
              onChange={handleInputChange}
              value={description || ""}
              className="w-80 rounded-md m-2 h-14 px-3 shadow-md overflow-auto no-scrollbar"
            />

            <label htmlFor="imageURL" className="m-1 font-semibold">
              imageURL:
            </label>

            <input
              type="text"
              id="imageURL"
              name="imageURL"
              value={imageURL || ""}
              onChange={handleInputChange}
              className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
            />

            <button
              type="submit"
              className="bg-blue-400 rounded-md mt-7 mx-1 h-7 shadow-md text-center text-white font-semibold"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsModal(true)}
              className="bg-red-400 rounded-md mt-7 mx-1 h-7 shadow-md text-center text-white font-semibold"
            >
              Delete
            </button>
            {isModal && (
              <div className="flex">
                <button
                  onClick={handleDelete}
                  className="bg-red-400 rounded-md mt-7 mx-1 h-7 shadow-md text-center text-white font-semibold flex-1"
                >
                  Confirm Delete
                </button>
                <button
                  onClick={() => setIsModal(false)}
                  className="bg-blue-400 rounded-md mt-7 mx-1 h-7 shadow-md text-center text-white font-semibold flex-1"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
          <div>
            <img
              src={editData.imageURL}
              alt="creator-img"
              style={{ width: "400px", height: "496px" }}
              className="m-10 rounded-md shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCreator;
