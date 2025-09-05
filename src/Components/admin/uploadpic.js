"use client";
import { useState, useEffect } from "react";
import swal from 'sweetalert';

export default function UploadPic() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch uploaded images from DB
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/image");
      const data = await res.json();
      setImages(data.images || []);
    };
    fetchImages();
  }, []);

  // Handle upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/image", {
      method: "POST",
      body: formData,
    });
  

    const data = await res.json();
    
    if (data.success) {
      setImages((prev) => [...prev, data.image]);
    }
     swal({
              title: "Good job!",
              text: "project image added successfully!",
              icon: "success",
              button: true,
              timer: 2000
            })

    setLoading(false);
    setFile(null);
  };

  // Handle delete
  const handleDelete = async (id) => {
    const res = await fetch(`/api/image/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.success) {
      setImages((prev) => prev.filter((img) => img._id !== id));
    }
     swal({
              title: "Good job!",
              text: "project image Deleted successfully!",
              icon: "success",
              button: true,
              timer: 2000
            })
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Upload Project Picture</h2>

      {/* Upload form */}
      <form onSubmit={handleUpload} className="space-y-3">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block border-2"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Show uploaded images */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img._id} className="relative group">
            <img
              src={img.url}
              alt="Uploaded"
              className="w-full h-40 object-cover rounded shadow"
            />
            <button
              onClick={() => handleDelete(img._id)}
              className="absolute top-2 right-2 bg-green-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
