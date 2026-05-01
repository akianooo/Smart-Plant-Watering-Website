import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#00fa9a]">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions or need support? Reach out to us and we’ll be happy to
        help!
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            id="message"
            name="message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#00fa9a] text-black font-semibold px-6 py-2 rounded hover:bg-[#00c97a] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
