// src/components/yoga/contact/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-sm text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-2">
          Message received
        </h3>
        <p className="text-sm sm:text-base text-stone-600 mb-5 sm:mb-6">
          Thank you for reaching out. We'll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-stone-50 border rounded-lg sm:rounded-xl text-sm sm:text-base text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-stone-200 focus:border-emerald-400"
    }`;

  const labelClass =
    "block text-[10px] sm:text-xs tracking-widest text-stone-500 font-medium mb-1.5 sm:mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-100 shadow-sm space-y-4 sm:space-y-5"
      noValidate
    >
      <div>
        <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">
          Send us a message
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
          We'd love to hear from you. Fill in the form and we'll get back soon.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className={labelClass}>NAME *</label>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="text-[10px] sm:text-xs text-red-500 mt-1">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass}>EMAIL *</label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-[10px] sm:text-xs text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className={labelClass}>PHONE</label>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+62 ..."
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label className={labelClass}>SUBJECT</label>
          <select
            value={form.subject}
            onChange={update("subject")}
            className={inputClass("subject")}
          >
            <option value="">Select a topic</option>
            <option value="classes">Class inquiry</option>
            <option value="membership">Membership & pricing</option>
            <option value="private">Private session</option>
            <option value="workshop">Workshop & events</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>MESSAGE *</label>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          placeholder="Tell us what's on your mind..."
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="text-[10px] sm:text-xs text-red-500 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 sm:py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm sm:text-base rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
