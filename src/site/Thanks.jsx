import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-slate-600 mb-6">
          We’ve received your request for a free consultation. Our team will review your message and get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
