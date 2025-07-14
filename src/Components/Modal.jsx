import React, { useState } from "react";

export default function Modal({ onClose, onCreate }) {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Subject</h2>

        <label className="block font-semibold">Subject Name:</label>
        <input
          className="w-full border p-2 my-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="block font-semibold">Target Hours:</label>
        <input
          type="number"
          min="0"
          className="w-full border p-2 my-2"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <div className="flex justify-between mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => onCreate(subject, hours)}
            disabled={!subject || !hours}
          >
            Add
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
