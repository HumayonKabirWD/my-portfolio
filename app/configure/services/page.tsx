
import React from 'react';

const services = [
  {
    title: "Responsive Design",
    description:
      "Creating visually appealing websites that look great on any device, from mobile phones to desktop computers.",
    icon: "📱",
  },
  {
    title: "Frontend Development",
    description:
      "Building interactive and dynamic user interfaces using React, Next.js, and modern web technologies.",
    icon: "💻",
  },
  {
    title: "Performance Optimization",
    description:
      "Ensuring your website loads quickly and efficiently for a smooth user experience.",
    icon: "⚡",
  },
  {
    title: "SEO Best Practices",
    description:
      "Implementing SEO-friendly features to boost your site's visibility on search engines.",
    icon: "🔍",
  },
  {
    title: "UI/UX Design Collaboration",
    description:
      "Working closely with designers to bring creative visions to life with pixel-perfect implementation.",
    icon: "🎨",
  },
  {
    title: "Custom Animations",
    description:
      "Designing seamless and engaging animations to enhance user experience and bring interfaces to life.",
    icon: "✨",
  },
];

const page = () => {
  return (
    <section id="services" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
