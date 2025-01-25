export default function Home() {
  return (
    <div>
      <div>
        <section className="py-20 img-1 text-center">
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
          <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
            Get Started
          </button>
        </section>
        <section id="features" className="container mx-auto py-10">
          <h3 className="text-3xl font-bold text-center mb-2">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-16 mr-16">
            <div className="p-6 bg-white shadow rounded text-center ">
              <h4 className="text-xl font-bold mb-2">Track Waste</h4>
              <p>Monitor your waste habits and improve recycling efforts.</p>
              <img
                src="./waste_collection.jpeg"
                className="img"
                alt="Waste Collection"
              />
            </div>
            <div className="p-6 bg-white shadow rounded text-center">
              <h4 className="text-xl font-bold mb-2">Sorting Guide</h4>
              <p>
                Easily find out where your waste belongs—trash, recycle, or
                compost.
              </p>
              <img
                src="./waste_sorting.jpg"
                className="img"
                alt="Waste Sorting"
              />
            </div>
          </div>
          <div className="p-6 bg-white shadow rounded text-center display">
            <h4 className="text-xl font-bold mb-2">Nearby Centers</h4>
            <p>Locate recycling and disposal centers near you.</p>
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
              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Paper</h4>
                <p>Recycle clean paper, newspapers, and cardboard.</p>
                <img src="./paper.jpg" className="img" alt="Paper" />
              </div>

              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Metal</h4>
                <p>Metal can be extracted from wastes and can be classified.</p>
                <img src="./metal.jpg" className="img" alt="Metal" />
              </div>

              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Plastics</h4>
                <p>Check the recycling symbol to determine recyclability.</p>
                <img src="./plastic.jpg" className="img" alt="Plastic" />
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Compost</h4>
                <p>Add food waste and organic materials to compost.</p>
                <img src="./compost.jpg" className="img" alt="compost" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
