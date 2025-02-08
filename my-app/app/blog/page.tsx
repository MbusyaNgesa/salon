"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import image1 from "../images/Premium Photo _ Customer getting a hairdo at a beauty salon.jpeg";
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  // slug: string;
}
interface BlogPosts {
  [slug: string]: BlogPost;
}

const blogPosts: BlogPosts[] = [
  {
    "mens-grooming-tips": {
      title: "Men's Grooming Tips for a Polished Look",
      image:
        "/images/Premium Photo _ Customer getting a hairdo at a beauty salon.jpeg",
      excerpt: `
<p>Grooming is an essential part of every man's daily routine. At Milele, we believe that looking good leads to feeling good. Here are our top grooming tips for men:</p>

<h2>1. Develop a Skincare Routine</h2>
<p>A basic skincare routine should include cleansing, moisturizing, and sun protection. Choose products that suit your skin type for best results.</p>

<h2>2. Maintain Your Beard</h2>
<p>If you have facial hair, keep it well-groomed. Regular trimming, washing, and conditioning will keep your beard looking its best.</p>

<h2>3. Don't Neglect Your Hair</h2>
<p>Regular haircuts and proper hair care can make a big difference in your appearance. Use quality hair products and consider treatments for issues like dandruff or thinning hair.</p>

<h2>4. Pay Attention to Your Nails</h2>
<p>Clean, well-trimmed nails are a sign of good grooming. Consider regular manicures for an extra touch of polish.</p>

<h2>5. Invest in Quality Grooming Tools</h2>
<p>From razors to nail clippers, using high-quality tools can improve your grooming results and make the process more enjoyable.</p>

<p>At Milele's barbershop, we offer a range of services to help you look your best. From haircuts to beard trims and facials, we've got you covered. Book an appointment today!</p>
`,
    },
  },
];

export default function Blog(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-maroon-900 mb-12 text-center"
      >
        Milele Blog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(
          (post, index): JSX.Element => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="bg-brown-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={
                      post.image 
                      // "/images/Premium Photo _ Customer getting a hairdo at a beauty salon.jpeg"
                    }
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-maroon-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-maroon-800">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
