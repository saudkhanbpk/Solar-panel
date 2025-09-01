"use client";
import { useEffect, useState } from "react";

const CATEGORIES = ["industrial", "commercial", "agriculture", "net-metering", "Filling station"];

export default function AdminFaqs() {
    const [faqs, setFaqs] = useState([]);
    const [form, setForm] = useState({
        question: "",
        answer: "",
        category: "",
        order: 0,
        isPublished: true,
    });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");



    useEffect(() => {
        fetchFaqs();
    }, []);

    // Handle form input
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    // Add FAQ
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        try {
            const res = await fetch("http://localhost:3000/api/faq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setMsg("✅ FAQ added successfully");
                setForm({ question: "", answer: "", category: "", order: 0, isPublished: true });
                fetchFaqs();
            } else {
                setMsg("❌ Failed: " + (data.error || ""));
            }
        } catch (err) {
            setMsg("❌ Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchFaqs = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/faq");
            const data = await res.json();
            console.log("data", data);
            if (data.success) {
                setFaqs(data.faq);
            }
        } catch (err) {
            console.error("Error fetching FAQs:", err);
        }
    };

    const deleteFaq = async (id) => {
        if (!confirm("Are you sure you want to delete this FAQ?")) return;
        try {
            const res = await fetch(`http://localhost:3000/api/faq/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                setMsg("✅ FAQ deleted");
                fetchFaqs();
            } else {
                setMsg("❌ Failed to delete");
            }
        } catch (err) {
            setMsg("❌ Error: " + err.message);
        }
    };

    const togglePublish = async (id, currentStatus) => {
        try {
            const res = await fetch(`http://localhost:3000/api/faq/${id}/publish`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isPublished: !currentStatus }),
            });
            const data = await res.json();
            if (data.success) {
                setMsg("✅ Publish status updated");
                fetchFaqs();
            } else {
                setMsg("❌ Failed to update publish status");
            }
        } catch (err) {
            setMsg("❌ Error: " + err.message);
        }
    };



    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin – Manage FAQs</h1>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4 border p-4 rounded-xl bg-white shadow">
                <input
                    name="question"
                    value={form.question}
                    onChange={onChange}
                    placeholder="Question"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="answer"
                    value={form.answer}
                    onChange={onChange}
                    placeholder="Answer"
                    rows="4"
                    className="w-full border p-2 rounded"
                    required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                        name="category"
                        value={form.category}
                        onChange={onChange}
                        className="border p-2 rounded"
                    >
                        {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        name="order"
                        value={form.order}
                        onChange={onChange}
                        placeholder="Order"
                        className="border p-2 rounded"
                    />
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isPublished"
                            checked={form.isPublished}
                            onChange={onChange}
                        />
                        Published
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Saving..." : "Save FAQ"}
                </button>
                {msg && <p className="text-sm mt-2">{msg}</p>}
            </form>

            {/* Table */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Existing FAQs</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border rounded-xl bg-white shadow">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border">Question</th>
                                <th className="p-3 border">Category</th>
                                <th className="p-3 border">Order</th>
                                <th className="p-3 border">Published</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq) => (
                                <tr key={faq._id} className="border-t">
                                    <td className="p-3 border">{faq.question}</td>
                                    <td className="p-3 border capitalize">{faq.category}</td>
                                    <td className="p-3 border">{faq.order}</td>
                                    <td className="p-3 border">
                                        <button
                                            onClick={() => togglePublish(faq._id, faq.isPublished)}
                                            className="text-blue-600 hover:underline cursor-pointer"
                                        >
                                            {faq.isPublished ? "Unpublish" : "Publish"}
                                        </button>
                                    </td>
                                    <td className="p-3 border">
                                        <button
                                            onClick={() => deleteFaq(faq._id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {faqs.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-500">
                                        No FAQs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
