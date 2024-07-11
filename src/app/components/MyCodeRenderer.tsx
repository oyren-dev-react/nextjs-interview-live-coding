"use client"

import {CodePreviewBlox} from "@oyren/bloxjs";

export default function MyCodeRenderer() {
    const files: Record<string, string> = {
        "App.tsx": `import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-teal-50 h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-teal-600">
        Hello World
      </h1>
    </div>
  );
};

export default App;
`
    };
    return (
        <CodePreviewBlox codes={files}/>
    )
}