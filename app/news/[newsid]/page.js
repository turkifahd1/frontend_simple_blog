'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewsDetail({ params }) {
  const newsid = params.newsid;

  const [data, setData] = useState({ title: '', tobic: '', place: ''  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', tobic: '', place: ''  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${newsid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setFormData({ title: data.title, tobic: data.tobic ,place:data.place});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [newsid]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${newsid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      setData(formData);
      setIsEditing(false);
      alert('تم تحديث البيانات بنجاح!');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('حدثت مشكلة أثناء تحديث البيانات. يرجى المحاولة مرة أخرى!');
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
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src="/image/bbbb.jpeg"
          alt="صورة مثال"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
              placeholder="عنوان الخبر الجديد"
            />
            <input
              type="text"
              name="tobic"
              value={formData.tobic}
              onChange={handleChange}
              className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
              placeholder="موضوع الخبر الجديد"
            />
            <input
      type="text"
      name="place"
      value={formData.place}
      onChange={handleChange}
      className="input-field py-2 px-4 border border-gray-300 rounded mb-4 w-full"
      placeholder="المكان"
    />

          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">{data.title}</h1>
            <p className="text-gray-700 text-center">{data.tobic}</p>
            <p className="text-gray-700 text-center">{data.place}</p>
          </>
        )}
        <div className="flex justify-center mt-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              حفظ التغييرات
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              تعديل العنوان والخبر
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
