import React from "react";

function GameInput({ chosenColumn, onSubmit, onChange }) {
  return (
    <form
      action="#"
      onSubmit={onSubmit}
      className="flex gap-4 justify-center items-center"
    >
      <label htmlFor="game-input">Next Choice</label>
      <input
        type="text"
        name="game-input"
        id="game-input"
        value={chosenColumn}
        onChange={onChange}
        className="bg-slate-600 rounded-xl border"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-700 hover:bg-blue-600 p-2 text-white shadow-sm"
      >
        Submit
      </button>
    </form>
  );
}

export default GameInput;
