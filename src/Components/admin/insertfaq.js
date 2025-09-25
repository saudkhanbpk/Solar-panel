"use client";
import { useEffect, useState } from "react";
import swal from 'sweetalert';


export default function AdminFaqs() {
    const [faqs, setFaqs] = useState([]);
    const [form, setForm] = useState({
        question: "",
        answer: "",
        order: 0,
        
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
            const res = await fetch("/api/faq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                swal({
                    title: "Good job!",
                    text: "FAQ added successfully!",
                    icon: "success",
                    button: true,
                    // timer: 2000
                })
                setForm({ question: "", answer: "", order: 0, });
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
            const res = await fetch("/api/faq");
            const data = await res.json();
            if (data.success) {
                setFaqs(data.faq);
            }
        } catch (err) {
            console.error("Error fetching FAQs:", err);
        }
    };

    const deleteFaq = async (id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this FAQ!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });

        if (!willDelete) return;
        try {
            const res = await fetch(`/api/faq/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.success) {
                swal({
                    title: "Good job!",
                    text: "FAQ Deleted successfully!",
                    icon: "success",
                    button: true,
                    // timer: 2000
                })
                fetchFaqs();
            } else {
                setMsg("❌ Failed to delete");
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
                   
                    <input
                        type="number"
                        name="order"
                        value={form.order}
                        onChange={onChange}
                        placeholder="Order"
                        className="border p-2 rounded"
                    />
                    
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
                            
                                <th className="p-3 border">Order</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq) => (
                                <tr key={faq._id} className="border-t">
                                    <td className="p-3 border">{faq.question}</td>
                                    
                                    <td className="p-3 border">{faq.order}</td>
                                   
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
