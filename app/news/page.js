"use client";
import React, { useState, useEffect } from "react";

export default function News() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://node-js-simpleblog811.onrender.com/api"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://node-js-simpleblog811.onrender.com/api/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      // إعادة تحميل البيانات بعد الحذف
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="rounded-lg shadow-lg p-6 border border-gray-300 w-3/4">
          <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
            آخر الأخبار
          </h1>
          <div className="grid gap-6 justify-center">
            {data.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-4 rounded-lg"
              >
                <a href={`/news/${item.id}`}>
                  <h2 className="flex justify-center items-center text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h2>
                  <p className="flex justify-end text-gray-700">{item.tobic}</p>
                  <p className="flex justify-end text-gray-700">
                    {" "}
                    {item.place}{" "}
                    <span className="font-semibold mb-2  text-gray-800">
                      {" "}
                      :موقع الخبر
                    </span>{" "}
                  </p>
                  <p className="flex justify-end text-gray-700">
                    {" "}
                    {item.createdAt.substring(0, 10)}{" "}
                    <span className="font-semibold mb-2  text-gray-800">
                      {" "}
                      :تاريخ الخبر
                    </span>{" "}
                  </p>
                </a>
                <div className="flex justify-center mt-4">
                  <a href={`/news/${item.id}`}>
                    <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      تعديل
                    </button>
                  </a>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
