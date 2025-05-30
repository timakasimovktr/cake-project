"use client";
import { useCounterStore } from "@/store";
import React from "react";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  return (
    <div>
      <button onClick={increment} className="bg-blue-500 text-white p-2 rounded">
        Increment
      </button>

      {count}
    </div>
  );
};

export default Counter;
