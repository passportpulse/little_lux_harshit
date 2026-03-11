import littleluxe from "../../assets/product/A+B Panda Backrest Magick Car.png";

export default function About() {
  return (
    <div className="w-full">
    <div
        className="relative py-20 px-6 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-bg.png')" // apni image ka path yaha lagao
        }}
      >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
          About Little Luxe 
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
           Where Every Ride Begins with a Smile
          </p>
        </div>
      </div>
      {/* HERO */}
    

      {/* STORY */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={littleluxe}
            alt="Little Luxe"
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">

          <p>
            I’m <strong>Ranabir Das</strong>, proud owner of a legacy business
            rooted in love, care, and childhood joy.
          </p>

          <p>
            Our journey began in <strong>1969</strong>, when my late father
            <strong> Shri Sambhunath Das </strong>
            started a baby rides wholesale business in West Bengal.
          </p>

          <p>
            In <strong>1993</strong>, after completing my graduation,
            I took the responsibility of growing this legacy.
          </p>

          <p>
            With the belief that nothing is more beautiful than
            the smile of a child, we launched our brand
            <strong> Little Luxe – Khushi Bachoki </strong>.
          </p>

          <p>
            In <strong>2024</strong>, we entered manufacturing in
            collaboration with <strong>Baby Ride On</strong>,
            bringing innovative and safe ride-on toys for children.
          </p>

        </div>
      </div>

      {/* MISSION VISION */}
      <div className="bg-purple-50 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-700 leading-relaxed">
              To spark joy and curiosity in every child through thoughtfully
              designed ride-ons and toys. We focus on safety, creativity,
              and meaningful play experiences.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-700 leading-relaxed">
              To become a trusted leader in children’s ride-on toys,
              known for quality, innovation, and commitment to
              child development.
            </p>

          </div>

        </div>

      </div>

      {/* BELIEFS */}
      <div className="py-20 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
           What We Believe In
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          <div className="bg-yellow-50 p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Safety First</h3>
            <p className="text-slate-600">
              Child-safe and non-toxic materials
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Fun Design</h3>
            <p className="text-slate-600">
              Joyful products that encourage play
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Legacy</h3>
            <p className="text-slate-600">
              Built on decades of trust
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Happy Kids</h3>
            <p className="text-slate-600">
              Every smile matters
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}