export default function Home() {
  return (
    <div>
      <div>
        <section className="py-20 img-1 text-center hero-section ">
          <h2 className="text-4xl font-bold mb-4">
            Manage Waste, Save the Planet
          </h2>
          <p className="text-lg mb-6">
            At 3R Nexus, we believe in turning waste into opportunity.
            <br />
            Guided by the 3R principle: Reduce, Reuse, Recycle. our mission is
            to redefine waste management.
            <br />
            Make sustainability the cornerstone of modern industry.
          </p>
          <a href="/signupForm">
            <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
              Get Started
            </button>
          </a>
        </section>
        <section id="features" className="container mx-auto py-10">
          <h3 className="text-3xl font-bold text-center mb-2">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-16 mr-16">
            <div className="p-6 bg-white shadow rounded text-center mid ">
              <h4 className="text-xl font-bold mb-2">Track Waste</h4>
              <p>
                Take the time to carefully observe and analyze your waste
                disposal habits, identifying areas for improvement, and make a
                conscious effort to enhance your recycling practices for a more
                sustainable impact.
              </p>
              <img
                src="./waste_collection.jpeg"
                className="img"
                alt="Waste Collection"
              />
            </div>
            <div className="p-6 bg-white shadow rounded text-center mid">
              <h4 className="text-xl font-bold mb-2">Sorting Guide</h4>
              <p>
                Quickly and effortlessly identify the appropriate category for
                your waste—whether it belongs in the trash, recycling bin, or
                compost pile—using simple and clear guidelines.
              </p>
              <img
                src="./waste_sorting.jpg"
                className="img"
                alt="Waste Sorting"
              />
            </div>
          </div>
          <div className="p-6 bg-white shadow rounded text-center mid display mt-10">
            <h4 className="text-xl font-bold mb-10">Nearby Centers</h4>
            <p>
              Search for and locate nearby recycling facilities or waste
              disposal centers that can <br></br>help you responsibly handle
              items that require proper processing or recycling.
            </p>
            {/* add a map. */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2145.9363022910006!2d85.30980606792203!3d27.715988817633313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1737796310597!5m2!1sen!2snp"
              width="400"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section id="guide" className="bg-green-50 py-20">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">
              Waste Sorting Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded mid bottom-guides">
                <h4 className="text-xl font-bold mb-2">Paper</h4>
                <p>
                  Ensure you recycle clean and dry materials such as paper,
                  newspapers, and cardboard, as they can be processed into new
                  products when free of contaminants.
                </p>
                <img src="./paper.jpg" className="img" alt="Paper" />
              </div>

              <div className="p-6 bg-white shadow rounded mid bottom-guides">
                <h4 className="text-xl font-bold mb-2">Metal</h4>
                <p>
                  Metals found in waste can be efficiently extracted, sorted,
                  and categorized, making them ready for recycling and reuse in
                  various industries.
                </p>
                <img src="./metal.jpg" className="img" alt="Metal" />
              </div>

              <div className="p-6 bg-white shadow rounded mid bottom-guides">
                <h4 className="text-xl font-bold mb-2">Plastics</h4>
                <p>
                  Look for the recycling symbol or label on products and
                  packaging to understand whether an item is recyclable and how
                  to properly dispose of it.
                </p>
                <img src="./plastic.jpg" className="img" alt="Plastic" />
              </div>
              <div className="p-6 bg-white shadow rounded mid bottom-guides">
                <h4 className="text-xl font-bold mb-2">Compost</h4>
                <p>
                  Contribute to composting by adding organic waste, including
                  food scraps and biodegradable materials, to create
                  nutrient-rich soil for gardening and farming.
                </p>
                <img src="./compost.jpg" className="img" alt="compost" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="container mx-auto py-20">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <form className="max-w-lg mx-auto bg-white p-8 shadow rounded">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border px-4 py-2 rounded"
                rows={5}
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
