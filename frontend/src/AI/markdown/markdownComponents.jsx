import React from "react";

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-xl font-bold mt-4 mb-3 text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-lg font-semibold mt-4 mb-2 text-blue-300">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-3 mb-2 text-purple-300">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mb-3 leading-7 text-sm md:text-[15px] text-gray-100">
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className="list-disc pl-5 mb-3 space-y-1">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal pl-5 mb-3 space-y-1">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="text-sm md:text-[15px]">
      {children}
    </li>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className="italic text-gray-300">
      {children}
    </em>
  ),

  hr: () => (
    <hr className="my-4 border-white/20" />
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-3 text-gray-300">
      {children}
    </blockquote>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300 break-all"
    >
      {children}
    </a>
  ),

  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="bg-white/10 rounded px-1.5 py-0.5 text-pink-300 text-sm font-mono">
          {children}
        </code>
      );
    }

    return (
      <pre className="bg-black/40 rounded-xl p-4 overflow-x-auto my-3">
        <code className="text-green-300 text-sm font-mono">
          {children}
        </code>
      </pre>
    );
  },
  a: ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-blue-400
      underline
      hover:text-blue-300
      break-all
    "
  >
    {children}
  </a>
),
};

export default markdownComponents;