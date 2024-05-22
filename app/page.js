'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          <Link href='./news'>
            <motion.div
              className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">أخبار جديدة</h1>
              <p className="text-lg mb-4">
                هنا يمكنك العثور على آخر الأخبار الجديدة التي تهمك.
              </p>
              <Image src="/image/OIP.jpeg" width={500} height={300} alt="صورة توضيحية" />
            </motion.div>
          </Link >
          <Link href='./news'>
          <motion.div
            className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">أخبار يومية عن أسعار الصرف</h1>
            <p className="text-lg mb-4">
              تعرّف على آخر التحديثات حول أسعار الصرف للعملات الأجنبية.
            </p>
            <Image src="/image/th.jpeg" width={500} height={300} alt="صورة توضيحية" />
          </motion.div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/news">
            <motion h2
              className="text-center text-blue-500 hover:underline mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              اطلع على الأخبار الأخيرة
            </motion>
          </Link>
        </div>
      </div>
    </div>
  );
}
