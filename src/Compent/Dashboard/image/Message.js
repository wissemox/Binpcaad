import * as React from "react";

function Message(props) {
  return (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 46 43"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>
        {".prefix__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#e9e7ff}"}
      </style>
      <path
        className="prefix__st0"
        d="M28.94 33.03l3.31 2.94-.59-2.99-.49-1.43-1.9.84-.41.5z"
      />
      <path
        className="prefix__st0"
        d="M31.09 32.15c-.06-1.34.37-2.73 2.12-3.3 0 0 6.94-1.73 6.35-12.02-.01-.16-.05-.32-.12-.47-.81-1.66-6.46-11.81-22.52-8.51-.02 0-.04.01-.07.02-.85.21-16.96 4.47-9.87 16.69.01.03.03.05.04.07.44.67 6.96 10.24 18.87 6.67 0 0 1.05-.44 3.04 1.73"
      />
      <path
        d="M-189.71 96.42c-1.13 66.2-99.6 66.19-100.73 0 1.13-66.2 99.6-66.19 100.73 0z"
        fill="#fbffff"
      />
      <path
        d="M22.46 4.74C33.2 4.74 42 11.31 42 19.36c0 5.03-3.37 9.48-8.57 12.11v.11c0 2.23 1.66 4.51 2.4 5.77 0 .17.06.29.06.46 0 .57-.51 1.08-1.14 1.08h-.29c-3.83-.63-7.37-4.11-8.28-5.14-1.2.17-2.46.23-3.71.23-10.85 0-19.54-6.51-19.54-14.62 0-8.05 8.68-14.62 19.53-14.62zm0 26.85c1.09 0 2.28-.11 3.43-.29h.29c.74 0 1.48.34 1.94.91.51.57 1.94 2 3.77 3.03a8.992 8.992 0 01-.91-3.54v-.23c0-.86.51-1.71 1.31-2.11 4.51-2.34 7.25-6.06 7.25-10 0-6.74-7.65-12.17-17.08-12.17-9.42 0-17.14 5.43-17.14 12.17.01 6.69 7.72 12.23 17.14 12.23z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#8280fd"
      />
    </svg>
  );
}

const MemoMessage = React.memo(Message);
export default MemoMessage;
