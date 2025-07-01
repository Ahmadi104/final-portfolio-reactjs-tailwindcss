function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-indigo-500">Thank You!</h1>
        <p className="text-lg text-gray-300">
          Your message has been successfully sent. I’ll get back to you as soon
          as possible.
        </p>
        <a
          href="/"
          className="inline-block mt-4 rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Back to Home section
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
