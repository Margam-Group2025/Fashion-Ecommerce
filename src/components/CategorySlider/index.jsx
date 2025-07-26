import React from 'react';

const sareeCollections = [
  {
    title: 'BANARASI',
    image: '/catloge/catslide1.jpg',
  },
  {
    title: 'PARTY SAREES',
    image: '/catloge/catslide2.jpeg',
  },
  {
    title: 'SAMBALPURI SAREE',
    image: '/catloge/catslide3.jpg',
  },
  {
    title: 'KANCHEPURAM',
    image: '/catloge/catslide4.avif',
  },
];

const SareeCollection = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-center text-3xl font-semibold mb-10">Shop By Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {sareeCollections.map((item, idx) => (
          <div key={idx} className="group">
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-orange-600 text-black px-4 py-2 rounded shadow hover:bg-orange-700">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Title Below Image */}
            <p className="mt-4 text-center text-lg font-semibold text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SareeCollection;
