"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("/api/image");
        setImages(res.data.images || []);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };
    fetchImages();
  }, []);

  if (images.length === 0)
    return <p className="text-center mt-10 text-white">No images found...</p>;

  return (
    <div className=" min-h-screen py-10">
      {/* Gallery Title */}
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl font-bold text-[#082E6F] border-l-4 border-r-4 border-[#82C701] px-4">
          OUR PROJECTS GALLERY
        </h2>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div
            key={img._id}
            className="overflow-hidden rounded-lg shadow-lg border border-gray-700"
          >
            <img
              src={img.url}
              alt={img.name || "Image"}
              className="w-full h-60 sm:h-40 md:h-48 lg:h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
