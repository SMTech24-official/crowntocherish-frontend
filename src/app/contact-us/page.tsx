"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add your form submission logic, e.g., sending data to an API.
    console.log("Form data submitted:", formData);
  };
  return (
    <div className="container">
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text_title">Contact Us</h2>
          <p className="mt-4 text-lg text-text_default">
            We d love to hear from you! Feel free to reach out with questions or
            feedback.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="mt-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                required
                className="mt-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
                className="mt-2"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center text-gray-700">
            <p>Email: contact@explainmymeds.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 ExplainMyMeds Street, City, Country</p>
          </div>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093715!2d144.95373631590472!3d-37.8162794420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f2fd%3A0x2d3e3d3e3e3e3e3e!2sExplainMyMeds!5e0!3m2!1sen!2sus!4v1634694615246!5m2!1sen!2sus"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
            className="rounded-lg shadow-md border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
