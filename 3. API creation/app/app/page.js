"use client"
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({}); // State to store input value

  const handleChange = (e) => {
    setInput(e.target.value); // Update input state with the current input value
  };

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const req = await fetch("/api/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( input ), // Send input state as JSON data
      });

      const res = await req.json(); // Assuming the response is text
      console.log(res); // Log response from server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter something"
            value={input.json}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleClick}>Click me</button>
        </div>
      </form>
    </div>
  );
}
