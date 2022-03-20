import type { NextPage } from "next";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="Streams" hasTabBar>
      <div className="py10  space-y-4 divide-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="pt-4 px-4">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">Let's try potatoes</h3>
          </div>
        ))}

        <button className="fixed bottom-20 right-5 bg-orange-400 rounded-full p-4 border-transparent text-white shadow-xl hover:bg-orange-500 hover:cursor-pointer transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
