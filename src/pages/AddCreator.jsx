import React, { useRef, useState } from "react";
import supabase from "../client";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const nameRef = useRef(null);
  const urlRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageUrlRef = useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newCreator = { name: "", description: "", url: "", imageURL: "" };

    if (nameRef != null) newCreator.name = nameRef.current.value;
    if (urlRef != null) newCreator.url = urlRef.current.value;
    if (descriptionRef != null)
      newCreator.description = descriptionRef.current.value;
    if (imageUrlRef != null) newCreator.imageURL = imageUrlRef.current.value;

    const { error } = await supabase.from("creators").insert(newCreator);

    navigate("/");
    console.log("Submitted");
  };
  return (
    <div className="flex">
      <form
        className="flex flex-col bg-gray-200 m-10 rounded-md p-8"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="name" className="m-1 pl-0 font-semibold">
          Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
        />

        <label htmlFor="url" className="m-1 font-semibold">
          URL:
        </label>

        <input
          type="text"
          id="url"
          name="url"
          ref={urlRef}
          className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
        />

        <label htmlFor="description" className="m-1 font-semibold">
          Description:
        </label>

        <input
          type="text"
          id="description"
          name="description"
          ref={descriptionRef}
          className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
        />

        <label htmlFor="imageURL" className="m-1 font-semibold">
          imageURL:
        </label>

        <input
          type="text"
          id="imageURL"
          name="imageURL"
          ref={imageUrlRef}
          className="w-80 rounded-md m-2 h-8 px-3 shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-md mt-7 mx-1 h-7 shadow-md text-center text-white font-semibold"
        >
          Submit
        </button>
      </form>
      <div>
        {/* <img
                src={imageURL}
                alt="creator-img"
                style={{ width: "400px", height: "496px" }}
                className="m-10 rounded-md shadow-md"
              /> */}
      </div>
    </div>
  );
};

export default AddCreator;
