import React from "react";
export function ColorBox({ color }) {
  let backgroundColor = "";
  if (color === "") backgroundColor = "bg-white";
  if (color === "Y") backgroundColor = "bg-yellow-400";
  if (color === "R") backgroundColor = "bg-red-700";
  return (
    <div
      className={`placeholder rounded-full border-2 border-blue-600 w-16 h-16 ${backgroundColor}`}
      data-testid={`color-box-${color}`}
    ></div>
  );
}
