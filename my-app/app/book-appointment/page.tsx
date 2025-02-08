"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Haircut",
  "Hair Coloring",
  "Manicure",
  "Pedicure",
  "Facial",
  "Massage",
  "Waxing",
  "Beard Trim",
  "Hair Treatment",
  "Makeup",
];

export default function BookAppointment(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = e.target;
    setFormData(
      (prevState: {
        name: string;
        email: string;
        phone: string;
        date: string;
        time: string;
        service: string;
      }): {
        name: string;
        email: string;
        phone: string;
        date: string;
        time: string;
        service: string;
      } => ({
        ...prevState,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    console.log(formData);
    alert("Appointment booked successfully!");
  };
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-maroon-900 mb-8 text-center"
      >
        Book an Appointment
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-maroon-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-maroon-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-maroon-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-maroon-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-maroon-700"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-maroon-700"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 block w-full border border-maroon-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {services.map(
              (service): JSX.Element => (
                <option key={service} value={service}>
                  {service}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-maroon-600 hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon-500"
          >
            Book Appointment
          </button>
        </div>
      </motion.form>
    </div>
  );
}
