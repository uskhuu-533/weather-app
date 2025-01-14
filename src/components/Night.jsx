const Night = () => {
  return (
    <div className="w-1/2 h-full bg-slate-900 rounded-tr-3xl rounded-br-3xl  flex justify-center items-center">
      <img src="EllipseN.svg" className="absolute mt-[40%] mr-[-25%] w-[10%]" />
      <div className="w-1/2 h-3/4 backdrop-blur-md bg-bg-slate/75 shadow-xl backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-10">
        <div className="flex justify-between py-12 w-9/12 ">
          <div>
            <p className="text-gray-400">{new Date().toDateString()}</p>
            <p className="font-extrabold text-white text-5xl ">Ulaanbaatar</p>
          </div>
          <img src="./public/location.svg" />
        </div>
        <img src="moon.svg" className="w-64" />
        <div>
          <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
            -20.1°
          </p>
        </div>
        <div className="w-9/12">
          <p>aaa</p>{" "}
        </div>
        <div className="w-9/12 flex justify-between">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z"
              stroke="url(#paint0_linear_20_195)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_20_195"
                x1="16"
                y1="1.5"
                x2="16"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="16"
              cy="13"
              r="2"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.916 3.36858C14.1058 3.58431 14.3793 3.70794 14.6666 3.70795C14.954 3.70796 15.2275 3.58435 15.4173 3.36864C17.8166 0.642635 21.9519 0.191899 24.8935 2.42021C27.9751 4.75461 28.5809 9.14518 26.2465 12.2268L20.1863 20.2268C18.8559 21.9831 16.7762 23.0105 14.5729 22.9999C12.3696 22.9893 10.2998 21.942 8.98633 20.173L3.04639 12.173C0.741735 9.06902 1.38969 4.68448 4.49363 2.37982C7.43817 0.193529 11.5363 0.664394 13.916 3.36858Z"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z"
              stroke="gray"
              stroke-width="2"
            />
            <circle cx="16" cy="9" r="6" stroke="gray" stroke-width="2" />
            <path
              d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z"
              fill="gray"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Night;
