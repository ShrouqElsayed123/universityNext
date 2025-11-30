"use client";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function DashboardNews() {
  const router = useRouter();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // ⬅️ NEW
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (data.success) setNews(data.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false); // ⬅️ بعد ما الداتا ترجع
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLogout = () => signOut({ callbackUrl: "/login" });

  const handleDelete = async (id) => {
    if (!confirm("هل أنتِ متأكدة؟")) return;
    try {
      await fetch(`/api/news/${id}`, { method: "DELETE" });
      setNews(news.filter((n) => n._id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/dashboard/news/edit/${id}`);
  };

  if (loading) {
    return (
        <Loading />
    );
  }


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">News Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">
                {item.title?.[lang] || "No title"}
              </td>
              <td className="py-2 px-4 border">
                {item.image ? (
                  <img
                    src={item.image}
                    alt="news"
                    className="w-20 h-12 object-cover rounded"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td className="py-2 px-4 border">
                {new Date(item.published_date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border ">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="flex items-center gap-1 text-blue-600 px-3 py-1 rounded border border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition"
                    onClick={() => handleUpdate(item._id)}
                  >
                    <MdOutlineEdit />
                    تعديل
                  </button>
                  <button
                    className="flex items-center gap-1 text-red-600 px-3 py-1 rounded border border-red-300 hover:bg-red-50 hover:text-red-700 transition"
                    onClick={() => handleDelete(item._id)}
                  >
                    <MdDeleteOutline />
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
