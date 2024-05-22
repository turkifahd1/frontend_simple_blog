"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function newsArticalPage() {
  const [formData, setFormData] = useState({
    title: "",
    tobic: "",
    place: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://node-js-simpleblog811.onrender.com/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      alert("تم إرسال البيانات بنجاح!");

      setFormData({
        title: "",
        tobic: "",
        place: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      
      alert("حدثت مشكلة أثناء إرسال البيانات. يرجى المحاولة مرة أخرى!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 ">
      <div className=" flex justify-center items-center ">
        <form action="/news" onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          <div className="relative w-32 h-32">
            <Image
              src="/image/bbbb.jpeg"
              alt="صورة مثال"
              layout="fill"
              objectFit="cover"
              className="rounded-full translate-x-24"
            />
          </div>
          <br />
          <br />
          <br />
          <div className="flex">
            <input
              value={formData.title}
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="عنوان الخبر الجديد"
              className="input-field py-2 px-4 border border-gray-300 rounded-l"
            />
            <label className="py-2 px-2 bg-blue-500 text-white rounded-r">
              عنوان الخبر
            </label>
          </div>{" "}
          <br />
          <div className="flex ">
            <input
              value={formData.tobic}
              onChange={handleChange}
              type="text"
              name="tobic"
              placeholder="موضوع الخبر "
              className="input-field py-2 px-4 border border-gray-300 rounded-l"
            />
            <label className="py-2 px-2 bg-blue-500 text-white rounded-r ">
              تسجيل الخبر
            </label>
          </div>
          <br />
          <div className="flex ">
            <input
              value={formData.place}
              onChange={handleChange}
              type="text"
              name="place"
              placeholder="مكان الخبر "
              className="input-field py-2 px-4 border border-gray-300 rounded-l"
            />
            <label className="py-2 px-2 bg-blue-500 text-white rounded-r ">
              مكان الحدث
            </label>
          </div>
          <br />
          <button
            type="submit"
            className="py-2 px-2 bg-blue-500 text-white  translate-x-32  "
          >
            نشر الخبر
          </button>
        </form>
      </div>
    </div>
  );
}
