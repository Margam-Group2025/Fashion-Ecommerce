import React, { useState } from "react";

export default function FashionBlog() {
  const blogPosts = [
    {
      id: 1,
      category: "Style Tips",
      title: "5 Effortless Summer Looks for College Girls",
      excerpt: "Ditch the bulky layers. Here are 5 easy-to-style outfits that keep you cool and confident across campus.",
      image: "/Blog/blogImg1.jpg",
    },
    {
      id: 2,
      category: "Wardrobe Essentials",
      title: "Must-Have Accessories for This Season",
      excerpt: "From statement earrings to chunky belts — complete your look with these trending accessories.",
      image: "Blog/blog2.jpg",
    },
   {
      id: 3,
      category: "Bags",
      title: "Why Pastels Are the New Power Colors",
      excerpt: "Soft, bold, and everywhere. See how pastels are redefining everyday glam in 2025.",
      image: "Blog/blog3.jpg",
    },
    {
      id: 4,
      category: "Style Tips",
      title: "Layer Like a Pro: Fall Outfit Ideas",
      excerpt: "Get cozy without losing your edge — expert tips to layer fashionably in cooler months.",
      image: "Blog/blog4.jpg",
    },
    {
      id: 5,
      category: "Wardrobe Essentials",
      title: "The Denim Guide: Fits, Flares & Favorites",
      excerpt: "From skinny to wide-leg, here's how to rock every type of denim in 2025.",
      image: "Blog/blog5.jpg",
    },
   {
      id: 6,
      category: "Bags",
      title: "Barbiecore is Back: How to Wear Pink Boldly",
      excerpt: "Bright, unapologetic pink is dominating again. See how you can wear it without overdoing it.",
      image: "Blog/blog6.jpg",
    },
  ];

 const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="font-sans text-gray-800">
      {/* Blog Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-pink-100 to-pink-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400 rounded-full blur-2xl opacity-20 -z-10"></div>

        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">From the Blog</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(3);
              }}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visiblePosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
              <div className="p-3">
                <span className="text-xs font-semibold uppercase text-rose-500">{post.category}</span>
                <h3 className="text-lg font-semibold mt-1 text-gray-800 leading-tight line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mt-1 mb-2 text-sm line-clamp-3">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block bg-pink-500 text-white px-3 py-1.5 rounded-md text-xs hover:bg-pink-600 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredPosts.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm hover:bg-pink-600 transition"
            >
              View More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
