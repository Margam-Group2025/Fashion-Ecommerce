import { Heart, Truck, Undo2, MessageSquare, Shield } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8 text-gray-800" />,
    title: "MADE IN INDIA",
    desc: "Our products are truly Made in India",
  },
  {
    icon: <Truck className="w-8 h-8 text-gray-800" />,
    title: "FREE DELIVERY",
    desc: "Enjoy free delivery on all orders",
  },
  {
    icon: <Undo2 className="w-8 h-8 text-gray-800" />,
    title: "EASY RETURNS",
    desc: "Shop with confidence, enjoy easy returns",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-gray-800" />,
    title: "TOP-NOTCH SUPPORT",
    desc: "Experience best support, ensuring your satisfaction",
  },
  {
    icon: <Shield className="w-8 h-8 text-gray-800" />,
    title: "SECURE PAYMENTS",
    desc: "Shop securely with our trusted payment options",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-2xl shadow hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
