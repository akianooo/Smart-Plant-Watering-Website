import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#00fa9a]">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        GreenRoot is dedicated to making plant care effortless and efficient.
        Our mission is to help gardeners of all levels keep their plants healthy
        using smart technology.
      </p>
      <p className="text-gray-600 mb-2">
        Our team combines expertise in horticulture, engineering, and software
        to deliver innovative solutions for modern gardens. We believe everyone
        should enjoy the beauty of thriving plants—without the guesswork or
        hassle.
      </p>
      <p className="text-gray-600">
        Whether you’re a beginner or a seasoned gardener, GreenRoot is here to
        support your journey to greener, healthier spaces.
      </p>
    </section>
  );
}
