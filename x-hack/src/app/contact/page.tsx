export default function Contact() {
  return (
    <main className="container mx-auto py-20">
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
    </main>
  );
}
