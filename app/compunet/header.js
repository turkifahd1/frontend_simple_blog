"use client";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-teal-500 p-4">
        <ul className="flex flex-col sm:flex-row justify-between items-center sm:ml-6 lg:ml-60">
          <li className="mb-4 sm:mb-0">
            <a href="/about">
              <h3 className="text-white hover:text-teal-200">نبذة عن الموقع</h3>
            </a>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/newsArtical">
              <h3 className="text-white hover:text-teal-200">كتابة خبر جديد</h3>
            </a>
          </li>
          <li className="mb-4 sm:mb-0">
            <a href="/news">
              <h3 className="text-white hover:text-teal-200">
                صفحة الأخبار اليومية
              </h3>
            </a>
          </li>
          <li className="sm:mr-4">
            <a href="/">
              <div className="flex items-center">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold mr-4">
                    عناوين الأخبار في اليمن
                  </h1>{" "}
                  {/* زيادة حجم النص */}
                  <h1 className="text-sm text-gray-600 mr-4">
                    قناة تركي الاخبارية
                  </h1>{" "}
                  {/* تغيير لون النص */}
                </div>
                <img
                  src="/image/bbbb.jpeg"
                  alt="صورة"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4"
                />{" "}
                {/* زيادة حجم الصورة */}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
