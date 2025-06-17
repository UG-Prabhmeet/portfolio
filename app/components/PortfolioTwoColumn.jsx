import Image from "next/image";

export default function PortfolioTwoColumn() {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto py-12 px-4 gap-12">
      {/* Left Column */}
      <div className="md:w-1/3 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Chris Tran
        </h1>
        <div className="w-56 h-56 rounded-full overflow-hidden mb-4 border-4 border-white shadow">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex gap-2 mb-4 text-blue-600 text-sm">
          <a href="#" className="hover:underline">
            Resume
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            GitHub
          </a>
        </div>
        <p className="text-gray-600 text-sm mb-2 text-center">
          I am pursing MS degree in Business Analytics at Simon Business School,
          University of Rochester.
        </p>
        <p className="text-gray-600 text-sm text-center">
          I am currently a Machine Learning Research Intern at Skim AI
          Technologies with a focus on NLP and Deep Learning research.
        </p>
      </div>
      {/* Right Column */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
        <hr className="mb-6" />
        <h3 className="text-2xl font-semibold mb-2">
          Natural Language Processing
        </h3>
        <div className="mb-2">
          <span className="font-bold">
            CS224n: Natural Language Processing with Deep Learning
          </span>
        </div>
        <p className="mb-2 text-gray-700">
          My complete implementation of assignments and projects in{" "}
          <span className="italic font-semibold">
            CS224n: Natural Language Processing with Deep Learning
          </span>{" "}
          by Stanford (Winter, 2019).
        </p>
        <div className="flex gap-2 mb-4">
          <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-xs flex items-center gap-1">
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
            View on GitHub
          </button>
        </div>
        <div className="mb-3">
          <span className="font-bold">Neural Machine Translation:</span>
          <span className="text-gray-700">
            {" "}
            An NMT system which translates texts from Spanish to English using a
            Bidirectional LSTM encoder for the source sentence and a
            Unidirectional LSTM Decoder with multiplicative attention for the
            target sentence (
            <a href="#" className="text-blue-600 underline">
              GitHub
            </a>
            ).
          </span>
        </div>
        <div className="mb-3">
          <span className="font-bold">Dependency Parsing:</span>
          <span className="text-gray-700">
            {" "}
            A Neural Transition-Based Dependency Parsing system with one-layer
            MLP (
            <a href="#" className="text-blue-600 underline">
              GitHub
            </a>
            ).
          </span>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-1/2">
            <Image
              src="/nlp-diagram-1.png"
              alt="NLP Diagram 1"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/nlp-diagram-2.png"
              alt="NLP Diagram 2"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
