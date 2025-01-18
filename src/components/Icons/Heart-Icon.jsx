const HeartIcon = (props) => {
  const {handlChangeState, color} = props
  
    return(
        <svg
        onClick={() => handlChangeState("Heart")}
        width="29"
        height="24"
        viewBox="0 0 29 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.916 3.36858C14.1058 3.58431 14.3793 3.70794 14.6666 3.70795C14.954 3.70796 15.2275 3.58435 15.4173 3.36864C17.8166 0.642635 21.9519 0.191899 24.8935 2.42021C27.9751 4.75461 28.5809 9.14518 26.2465 12.2268L20.1863 20.2268C18.8559 21.9831 16.7762 23.0105 14.5729 22.9999C12.3696 22.9893 10.2998 21.942 8.98633 20.173L3.04639 12.173C0.741735 9.06902 1.38969 4.68448 4.49363 2.37982C7.43817 0.193529 11.5363 0.664394 13.916 3.36858Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    )
}
export default HeartIcon