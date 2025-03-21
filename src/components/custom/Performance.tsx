import Image from "next/image";

const performanceStats = [
  { title: "Conversion Growth", value: "60%" },
  { title: "Revenue Boost", value: "75%" },
  { title: "Retention Increase", value: "90%" },
];

export default function PerformanceSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Experience the Era of AI Performance
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3">
          {performanceStats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-4xl font-bold text-primary-dark">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
        <Image
          loading="lazy"
          src="/performance-mockup.jpg"
          alt="Performance Mockup"
          className="mt-10 mx-auto rounded-md shadow-lg"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
