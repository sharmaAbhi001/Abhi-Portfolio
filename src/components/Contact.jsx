import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center space-y-6 justify-center p-4">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-gray-400 text-center mb-6">Have a project in mind? Let's connect!</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a href="https://github.com/sharmaAbhi001" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github-icon-1-logo-svgrepo-com.svg" className="w-14 bg-blue-700 rounded-full p-2" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/codeburnerabhi/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons8-linkedin.svg" className="w-14 bg-blue-700 rounded-full p-2" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
