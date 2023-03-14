import React from "react";

// Success icon
export const SuccessIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[75px] w-[75px]"
      viewBox="0 0 20 20"
      fill="#06cd3b"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// Error icon
export const ErrorIcon = () => {
  return (
    <svg
      height="60px"
      style={{ overflow: "visible", backgroundColor: "transparent" }}
      viewBox="0 0 32 32"
      width="60px"
    >
      <g>
        <g id="Error_1_">
          <g id="Error">
            <circle cx="16" cy="16" id="BG" r="16" style={{ fill: "red" }} />
            <path
              d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
              id="Exclamatory_x5F_Sign"
              style={{ fill: "white" }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
