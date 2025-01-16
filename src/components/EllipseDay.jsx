const EllipseDay = () => {
  return (
    <svg
      width="176"
      height="176"
      viewBox="0 0 176 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="88" cy="88" r="88" fill="#FF8E27" />
      <circle
        cx="88"
        cy="88"
        r="88"
        fill="url(#paint0_radial_20_175)"
        fillOpacity="0.35"
        style="mix-blend-mode:overlay"
      />
      <defs>
        <radialGradient
          id="paint0_radial_20_175"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(88 88) rotate(90) scale(88)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default EllipseDay;