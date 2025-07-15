import React, { useState } from "react";

export default function FashionBlog() {
  const blogPosts = [
    {
      id: 1,
      category: "Style Tips",
      title: "5 Effortless Summer Looks for College Girls",
      excerpt: "Ditch the bulky layers. Here are 5 easy-to-style outfits that keep you cool and confident across campus.",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      category: "Wardrobe Essentials",
      title: "Must-Have Accessories for This Season",
      excerpt: "From statement earrings to chunky belts — complete your look with these trending accessories.",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      category: "Trend Watch",
      title: "Why Pastels Are the New Power Colors",
      excerpt: "Soft, bold, and everywhere. See how pastels are redefining everyday glam in 2025.",
      image: "/blog3.jpg",
    },
    {
      id: 4,
      category: "Style Tips",
      title: "Layer Like a Pro: Fall Outfit Ideas",
      excerpt: "Get cozy without losing your edge — expert tips to layer fashionably in cooler months.",
      image: "/blog4.jpg",
    },
    {
      id: 5,
      category: "Wardrobe Essentials",
      title: "The Denim Guide: Fits, Flares & Favorites",
      excerpt: "From skinny to wide-leg, here's how to rock every type of denim in 2025.",
      image: "/blog5.jpg",
    },
    {
      id: 6,
      category: "Trend Watch",
      title: "Barbiecore is Back: How to Wear Pink Boldly",
      excerpt: "Bright, unapologetic pink is dominating again. See how you can wear it without overdoing it.",
      image: "/blog6.jpg",
    },
  ];

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="font-sans text-gray-800">
      {/* Blog Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-pink-100 to-pink-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400 rounded-full blur-2xl opacity-20 -z-10"></div>

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">From the Blog</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border font-medium transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white border-pink-500"
                  : "text-pink-600 border-pink-300 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <span className="text-sm font-semibold uppercase text-rose-500">{post.category}</span>
                <h3 className="text-2xl font-bold mt-2 text-gray-800 leading-snug">{post.title}</h3>
                <p className="text-gray-600 my-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
