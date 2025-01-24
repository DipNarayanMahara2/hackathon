export default function Home() {
  return (
    <div>
      <div>
        <section className="bg-green-100 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Manage Waste, Save the Planet
          </h2>
          <p className="text-lg mb-6">
            Discover how you can reduce, reuse, and recycle to create a cleaner,
            greener world.
          </p>
          <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
            Get Started
          </button>
        </section>
        <section id="features" className="container mx-auto py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded text-center">
              <h4 className="text-xl font-bold mb-2">Track Waste</h4>
              <p>Monitor your waste habits and improve recycling efforts.</p>
            </div>
            <div className="p-6 bg-white shadow rounded text-center">
              <h4 className="text-xl font-bold mb-2">Sorting Guide</h4>
              <p>
                Easily find out where your waste belongs—trash, recycle, or
                compost.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded text-center">
              <h4 className="text-xl font-bold mb-2">Nearby Centers</h4>
              <p>Locate recycling and disposal centers near you.</p>
            </div>
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
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Plastics</h4>
                <p>Check the recycling symbol to determine recyclability.</p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h4 className="text-xl font-bold mb-2">Compost</h4>
                <p>Add food waste and organic materials to compost.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
