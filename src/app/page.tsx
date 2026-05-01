export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-white to-[#f4fdf2]">
      {/* HERO */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Smarter Watering. <br />
            <span className="text-[#00c97a]">Healthier Plants.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            GreenRoot automatically monitors soil moisture and waters your
            plants at the perfect time — so you never overwater or underwater
            again.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#00c97a] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-[#00b86b] transition-all duration-200">
              Get Started
            </button>

            <button className="border-2 border-[#00c97a] text-[#00c97a] font-semibold px-8 py-3 rounded-xl hover:bg-[#00c97a] hover:text-white transition-all duration-200">
              See Demo
            </button>
          </div>

          {/* TRUST BADGES */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>🌿 Eco-friendly</span>
            <span>⚡ Real-time monitoring</span>
            <span>📱 Mobile controlled</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/plant-hero.png"
            alt="Smart Plant Device"
            className="w-[350px] md:w-[420px] rounded-2xl shadow-2xl"
          />
          <div className="absolute -z-10 top-10 left-10 w-full h-full bg-[#00fa9a]/20 blur-3xl rounded-full"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose GreenRoot?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: "💧",
              title: "Smart Watering",
              desc: "Waters plants automatically based on real-time soil data.",
            },
            {
              icon: "🌱",
              title: "Healthy Growth",
              desc: "Keeps your plants perfectly hydrated at all times.",
            },
            {
              icon: "📱",
              title: "App Control",
              desc: "Control and monitor your plants from anywhere.",
            },
            {
              icon: "🔋",
              title: "Efficient",
              desc: "Save water and energy with optimized irrigation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-black text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-16 py-16 bg-[#f4fdf2]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>

            <ol className="space-y-4 text-gray-700">
              <li>
                <b>1. Install:</b> Place the sensor in the soil.
              </li>
              <li>
                <b>2. Monitor:</b> Tracks moisture levels in real-time.
              </li>
              <li>
                <b>3. Water:</b> Automatically irrigates when needed.
              </li>
              <li>
                <b>4. Relax:</b> Enjoy healthy plants effortlessly.
              </li>
            </ol>
          </div>

          <img
            src="/how-it-works.png"
            alt="How it works"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Upgrade Your Garden?
        </h2>

        <p className="text-gray-600 mb-8">
          Join hundreds of plant lovers using GreenRoot today.
        </p>

        <button className="bg-[#00c97a] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
          Start Now
        </button>
      </section> */}
    </div>
  );
}
