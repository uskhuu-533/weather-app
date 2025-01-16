const Air = (props) => {
    const {width, stroke} = props
    return(
  <svg
    width="32"
    height="32"
    viewBox="0 0 29 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.91,11.09A7.84,7.84,0,0,0,22,12v2A9.37,9.37,0,0,1,18.17,13l-.08,0A7.84,7.84,0,0,0,15,12a6.15,6.15,0,0,0-2.8.89l-.06,0A8.54,8.54,0,0,1,9,14V12a7.59,7.59,0,0,0,2.3-.86l.06,0A7.86,7.86,0,0,1,15,10a9.37,9.37,0,0,1,3.83,1.05Zm-.08,4A9.37,9.37,0,0,0,15,14a7.86,7.86,0,0,0-3.64,1.08l-.06,0A7.59,7.59,0,0,1,9,16v2a8.54,8.54,0,0,0,3.14-1.06l.06,0A6.15,6.15,0,0,1,15,16a7.84,7.84,0,0,1,3.09.91l.08,0A9.53,9.53,0,0,0,22,18V16a7.84,7.84,0,0,1-3.09-.91ZM19,7.13V4a2,2,0,0,0-2-2H7A2,2,0,0,0,5,4V7.17A9,9,0,0,0,2,6.5v2a8.26,8.26,0,0,1,2.63.66l.1,0L5,9.28v1.89a9,9,0,0,0-3-.67v2a8.26,8.26,0,0,1,2.63.66l.1,0,.27.09v1.89a9,9,0,0,0-3-.67v2a8.26,8.26,0,0,1,2.63.66l.1,0,.27.09V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2v-.69L18.17,19l-.08,0c-.38-.17-.74-.33-1.09-.46V20H7V4H17V6.33A6.81,6.81,0,0,0,15,6a7.86,7.86,0,0,0-3.64,1.08l-.06,0A7.59,7.59,0,0,1,9,8v2a8.54,8.54,0,0,0,3.14-1.06l.06,0A6.15,6.15,0,0,1,15,8a7.84,7.84,0,0,1,3.09.91l.08,0A9.53,9.53,0,0,0,22,10V8A7.63,7.63,0,0,1,19,7.13Z" 
    stroke={stroke}
    strokeWidth={width}/>
    <rect width="24" height="24" fill="none" />
  </svg>
  )
};
export default Air
