"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const salonServices = [
    { name: "Hair and Scalp Treatment", image: "/salon-hair-treatment.jpg" },
    { name: "Color and Highlights", image: "/salon-color-highlights.jpg" },
    { name: "Relaxers", image: "/salon-relaxers.jpg" },
    { name: "Dreadlocks", image: "/salon-dreadlocks.jpg" },
    { name: "Faux Locs", image: "/salon-faux-locs.jpg" },
    { name: "Sista Locks", image: "/salon-sista-locks.jpg" },
    { name: "Haircuts", image: "/salon-haircuts.jpg" },
    { name: "Weaving", image: "/salon-weaving.jpg" },
    { name: "Pedicure and Manicure", image: "/salon-pedi-mani.jpg" },
]

export default function Salon() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold text-maroon-900 mb-12 text-center"
            >
        Salon Services
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {salonServices.map((service, index) => (
                    <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-brown-100 rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-maroon-900 mb-2">{service.name}</h2>
                            <p className="text-maroon-800">
                Experience our expert {service.name.toLowerCase()} services at Milele Salon.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

