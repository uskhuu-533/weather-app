const DayCirle = () => {
    return(
        <svg  width="800" height="1200" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.1" cx="800" cy="600" r="269.5" stroke="#111827"/>
        <circle opacity="0.08" cx="800" cy="600" r="469.5" stroke="#111827"/>
        <circle opacity="0.06" cx="800" cy="600" r="669.5" stroke="#111827"/>
        <circle opacity="0.04" cx="800" cy="600" r="869.5" stroke="#111827"/>
        <circle cx="218" cy="265" r="88" fill="#FF8E27"/>
        <circle cx="218" cy="265" r="88" fill="url(#paint0_radial_20_169)" fill-opacity="0.35" style="mix-blend-mode:overlay"/>
        <defs>
        <radialGradient id="paint0_radial_20_169" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(218 265) rotate(90) scale(88)">
        <stop stopColor="white"/>
        <stop offset="1" stop-color="white" stopOpacity="0"/>
        </radialGradient>
        </defs>
        </svg>
    )
}
export default DayCirle