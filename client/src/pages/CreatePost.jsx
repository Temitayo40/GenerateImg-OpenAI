import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Formfield, Loader } from "../components";
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleSubmit = () => {};
  const handleChange = () => {};
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#222328]text-[32px] ">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create imaginative and visually stunning images through Dalle AI and
          share with community
        </p>
      </div>
      <form action="" className="mt-16 max-w-7xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Formfield
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Dammy crown"
            value={form.name}
            handleChange={handleChange}
          />
          <Formfield
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="Dammy crown"
            value={form.name}
            handleChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
