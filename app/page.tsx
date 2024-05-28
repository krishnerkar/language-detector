"use client";

import useLanguageDetector from "@/hooks/useLanguageDetector";
import { useState } from "react";

export default function Home() {
  const { detectLanguage } = useLanguageDetector();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");

  const handleDetectLanguage = () => {
    const detectedLanguage = detectLanguage(code);
    setLanguage(detectedLanguage);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="Paste your code here"
          rows={10}
          cols={50}
        />
        <br />
        <button
          className="bg-blue-500 p-2 w-full hover:bg-blue-600 text-white rounded-md"
          onClick={handleDetectLanguage}
        >
          Detect Language
        </button>
        <div className="mt-2">
          {language && <p>Detected language: {language}</p>}
        </div>
      </div>
    </main>
  );
}
