import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import littleluxe from "../../assets/little-luxe.jpeg";

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-purple-50 via-yellow-50 to-blue-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800">
              About <span className="text-purple-500">Little Luxe</span> 🚲
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Where Every Ride Begins with a Smile ✨
            </p>
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section className="bg-white">
        <Container size="sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              I’m <strong>Ranabir Das</strong>, proud owner of a legacy business
              rooted in love, care, and childhood joy. Our journey began in 1969,
              when my late father, <strong>Shri Sambhunath Das</strong>,
              laid the foundation of our family’s baby rides wholesale business
              in West Bengal.
            </p>

            <p>
              In 1993, after completing my graduation, I took over the reins
              with a vision to take the business to new heights. Over the past
              30 years, I have witnessed one priceless truth — nothing compares
              to the smile of a happy child.
            </p>

            <p>
              With that belief, I created our own brand —
              <strong> “Little Luxe – Khushi Bachoki”</strong> — a name that
              reflects elegance and the essence of childhood joy.
            </p>

            <p>
              In 2024, we proudly entered the world of manufacturing in
              collaboration with <strong>Baby Ride On</strong>, introducing
              thoughtfully crafted products under the “Little Luxe” label.
              Today, Little Luxe stands as a symbol of joyful design,
              trusted safety, and developmental value for children.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-purple-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-500 mb-4">
                ⭐ Our Mission
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To spark joy and curiosity in every child through thoughtfully
                designed ride-ons and toys. We are committed to supporting
                healthy childhood development with safe, engaging, and
                innovative products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-500 mb-4">
                🌈 Our Vision
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To become a trusted leader in children’s ride-ons — known for
                quality, innovation, and dedication to child well-being.
                We dream of a world where every child experiences joyful,
                holistic growth.
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* Beliefs */}
      <Section className="bg-white">
        <Container size="sm">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            💖 What We Believe In
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>• Safety First — Child-safe, non-toxic materials</li>
            <li>• Fun Meets Function — Joyful yet developmental designs</li>
            <li>• Legacy of Love — Built on decades of trust & care</li>
            <li>• Every Smile Counts — Because happiness is the best ride</li>
          </ul>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gradient-to-b from-blue-50 to-purple-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Image */}
            <div>
              <img
                src={littleluxe}
                alt="Little Luxe"
                className="rounded-3xl shadow-xl w-1/2"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-500">
                📍 Contact Us
              </h2>

              <p className="text-slate-700">
                <strong>Address:</strong><br />
                62, Bentinck Street, Kolkata – 700069<br />
                C/O: Gouranga Cycle Co
              </p>

              <p className="text-slate-700">
                <strong>Phone:</strong><br />
                9831046782<br />
                9073140151
              </p>

              <p className="text-slate-700">
                <strong>Email:</strong><br />
                littleluxe161@gmail.com
              </p>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
