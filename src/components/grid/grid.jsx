import React, { useContext, useEffect } from "react";
import "./grid.css";
import { WeatherContext } from "../weather/weather";
import to12Hrformat from "../../services/dateTime.js";

const Grid = () => {
  const weatherData = useContext(WeatherContext);

  return (
    <div className="grid">
      <div className="grid-row">
        <div className="grid-col">
          <svg
            width="200"
            height="200"
            viewBox="0 0 202 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <ellipse
                  cx="99.3532"
                  cy="150.883"
                  rx="22.2382"
                  ry="2.65958"
                  transform="rotate(-31.4853 99.3532 150.883)"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M79.4561 83.1755C79.4561 85.6228 78.4106 155.628 78.4106 159.976C78.4106 164.324 84.2699 164.674 84.2699 159.976C84.2699 155.278 83.2244 85.6228 83.2244 83.1755C83.2244 80.7282 79.4561 80.7282 79.4561 83.1755Z"
                  fill="white"
                />
                <g className="blade-one">
                  <circle
                    id="Ellipse 2"
                    cx="81.3401"
                    cy="81.3401"
                    r="5.85926"
                    transform="rotate(-56 81.3401 81.3401)"
                    fill="white"
                  />
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.3683 70.3538L81.2434 81.2751L81.3196 81.3179L81.3879 81.3725L90.3433 74.384L114.153 32.7974L114.079 32.7497L114.007 32.6992L84.3683 70.3538ZM113.857 33.0798L84.4678 70.4165L81.3699 81.2433L90.248 74.3153L113.857 33.0798Z"
                      fill="white"
                    />
                    <path
                      d="M113.857 33.0798L84.4678 70.4165L81.3699 81.2433L90.248 74.3153L113.857 33.0798Z"
                      fill="white"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M70.2301 84.1772L81.2507 81.4228L81.2497 81.3354L81.2628 81.2489L70.7329 76.9875L22.813 77.161L22.8085 77.2488L22.8007 77.3363L70.2301 84.1772ZM23.2057 77.2765L70.2347 84.0597L81.1599 81.3291L70.721 77.1045L23.2057 77.2765Z"
                      fill="white"
                    />
                    <path
                      d="M23.2057 77.2765L70.2347 84.0597L81.1599 81.3291L70.721 77.1045L23.2057 77.2765Z"
                      fill="white"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M89.2297 89.4636L81.334 81.2968L81.2588 81.3414L81.1774 81.3732L82.7519 92.6231L106.862 134.036L106.94 133.996L107.02 133.959L89.2297 89.4636ZM106.766 133.638L89.1257 89.5185L81.2983 81.4222L82.8591 92.5749L106.766 133.638Z"
                      fill="white"
                    />
                    <path
                      d="M106.766 133.638L89.1257 89.5185L81.2983 81.4222L82.8591 92.5749L106.766 133.638Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <g>
                <ellipse
                  cx="157.566"
                  cy="156.622"
                  rx="13.6724"
                  ry="1.7365"
                  transform="rotate(-31.4853 157.566 156.622)"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M145.949 106.318C145.949 108.089 145.225 158.766 145.225 161.913C145.225 165.061 149.282 165.314 149.282 161.913C149.282 158.512 148.558 108.089 148.558 106.318C148.558 104.546 145.949 104.546 145.949 106.318Z"
                  fill="white"
                />
                <g className="blade-two">
                  <ellipse
                    id="Ellipse 2_2"
                    rx="4.23952"
                    ry="4.05937"
                    transform="matrix(0.939693 -0.34202 0.350681 0.936495 147.254 104.989)"
                    fill="white"
                  />
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M153.715 99.9589L147.225 104.914L147.251 104.968L147.268 105.027L155.466 104.635L187.106 90.5271L187.084 90.4705L187.064 90.4131L153.715 99.9589ZM186.813 90.569L153.746 100.034L147.313 104.946L155.44 104.558L186.813 90.569Z"
                      fill="white"
                    />
                    <path
                      d="M186.813 90.569L153.746 100.034L147.313 104.946L155.44 104.558L186.813 90.569Z"
                      fill="white"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M139.578 102.162L147.166 105L147.203 104.95L147.248 104.906L142.946 98.279L115.001 79.2332L114.96 79.2812L114.919 79.3278L139.578 102.162ZM115.18 79.4557L139.631 102.097L147.154 104.911L142.889 98.3407L115.18 79.4557Z"
                      fill="white"
                    />
                    <path
                      d="M115.18 79.4557L139.631 102.097L147.154 104.911L142.889 98.3407L115.18 79.4557Z"
                      fill="white"
                    />
                  </g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M148.367 112.755L147.268 104.962L147.206 104.957L147.145 104.943L143.247 111.961L139.553 145.115L139.616 145.124L139.678 145.135L148.367 112.755ZM139.667 144.851L148.283 112.744L147.194 105.019L143.33 111.977L139.667 144.851Z"
                      fill="white"
                    />
                    <path
                      d="M139.667 144.851L148.283 112.744L147.194 105.019L143.33 111.977L139.667 144.851Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="74.9273"
                y1="150.998"
                x2="171.667"
                y2="146.892"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00084D" />
                <stop offset="0.905823" stopColor="#2E4474" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="142.549"
                y1="156.697"
                x2="202.038"
                y2="154.319"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00084D" />
                <stop offset="0.905823" stopColor="#2E4474" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid-col">
          <div className="data">
            <p>Speed : {weatherData.current.wind_speed} Kmph</p>
            <p>Direction : NorthEast</p>
          </div>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-col">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="humidity-ellipse background-ellipse"
              d="M13.7648 93.3363C7.69869 84.923 4.04319 75.0139 3.19218 64.6767C2.34117 54.3395 4.32692 43.966 8.93547 34.6738C13.544 25.3817 20.6007 17.5232 29.3452 11.945C38.0897 6.3668 48.1905 3.28036 58.5594 3.01821C68.9283 2.75606 79.1721 5.32815 88.1873 10.4573C97.2025 15.5865 104.647 23.0784 109.72 32.1258C114.792 41.1732 117.299 51.4331 116.972 61.8001C116.644 72.1671 113.494 82.2483 107.861 90.9574"
            />
            <text x="46" y="60" fill="white" className="humidity-percent">
              {weatherData.current.humidity}%
            </text>
            <path
              className="humidity-ellipse foreground-ellipse"
              d="M13.7494 93.3149C8.77182 86.4046 5.40595 78.4667 3.8992 70.0846C2.39244 61.7026 2.7831 53.0894 5.04247 44.8782C7.30184 36.6669 11.3725 29.0663 16.9552 22.6349C22.538 16.2036 29.4909 11.105 37.303 7.71379C45.1152 4.32262 53.5879 2.7251 62.0985 3.03865C70.6092 3.35219 78.9414 5.56883 86.4828 9.52565C94.0242 13.4825 100.583 19.0789 105.678 25.9036C110.772 32.7283 114.272 40.6079 115.921 48.9631"
            />
          </svg>
        </div>
        <div className="grid-col">
          <div className="data">
            <p>Humidity : {weatherData.current.humidity}%</p>
            <p>UV index: {weatherData.current.uvi}</p>
          </div>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-col">
          <svg
            width="222"
            height="201"
            viewBox="0 0 222 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="sunrise-sunset" clipPath="url(#clip0)">
              <path
                id="orbit"
                d="M24 145C24 133.181 26.2503 121.478 30.6225 110.558C34.9946 99.6392 41.403 89.7176 49.4817 81.3604C57.5604 73.0031 67.1512 66.3737 77.7065 61.8508C88.2619 57.3279 99.5749 55 111 55C122.425 55 133.738 57.3279 144.294 61.8508C154.849 66.3737 164.44 73.0031 172.519 81.3604C180.597 89.7176 187.005 99.6392 191.377 110.558C195.749 121.478 198 133.181 198 145"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 7"
              />
              <g id="sun">
                <path
                  d="M17.6371 124.923C17.9905 124.814 18.3653 125.012 18.4743 125.365L20.0535 130.483C20.1625 130.837 19.9644 131.212 19.6111 131.321C19.2577 131.43 18.8829 131.232 18.7739 130.878L17.1947 125.76C17.0857 125.406 17.2838 125.032 17.6371 124.923Z"
                  fill="#FFB800"
                />
                <path
                  d="M27.7046 157.553C34.7717 155.372 38.7332 147.876 36.5528 140.809C34.3724 133.741 26.8758 129.78 19.8087 131.96C12.7416 134.141 8.78015 141.637 10.9605 148.704C13.1409 155.772 20.6375 159.733 27.7046 157.553Z"
                  fill="#FFB800"
                />
                <path
                  d="M6.04559 135.711C5.71864 135.538 5.31354 135.663 5.14077 135.99C4.968 136.317 5.09299 136.722 5.41994 136.895L10.1559 139.398C10.4828 139.571 10.8879 139.446 11.0607 139.119C11.2335 138.792 11.1085 138.387 10.7815 138.214L6.04559 135.711Z"
                  fill="#FFB800"
                />
                <path
                  d="M36.5601 151.522C36.7329 151.195 37.138 151.07 37.4649 151.243L42.2009 153.746C42.5279 153.919 42.6528 154.324 42.48 154.651C42.3073 154.978 41.9021 155.103 41.5752 154.93L36.8392 152.427C36.5123 152.254 36.3873 151.849 36.5601 151.522Z"
                  fill="#FFB800"
                />
                <path
                  d="M35.9316 128.883C36.1043 128.556 35.9793 128.151 35.6524 127.978C35.3254 127.805 34.9203 127.93 34.7476 128.257L32.245 132.993C32.0722 133.32 32.1972 133.725 32.5241 133.898C32.8511 134.071 33.2562 133.946 33.4289 133.619L35.9316 128.883Z"
                  fill="#FFB800"
                />
                <path
                  d="M16.3764 156.348C16.7034 156.521 16.8284 156.926 16.6556 157.253L14.1531 161.989C13.9803 162.316 13.5752 162.441 13.2483 162.268C12.9213 162.096 12.7963 161.69 12.9691 161.364L15.4716 156.627C15.6444 156.3 16.0495 156.175 16.3764 156.348Z"
                  fill="#FFB800"
                />
                <path
                  d="M28.7389 158.634C28.6299 158.281 28.255 158.083 27.9017 158.192C27.5483 158.301 27.3503 158.676 27.4593 159.029L29.0386 164.148C29.1476 164.502 29.5225 164.7 29.8758 164.591C30.2292 164.482 30.4272 164.107 30.3182 163.753L28.7389 158.634Z"
                  fill="#FFB800"
                />
                <path
                  d="M3.92254 150.876C3.81352 150.523 4.01159 150.148 4.36494 150.039L9.48339 148.459C9.83674 148.35 10.2116 148.549 10.3206 148.902C10.4296 149.255 10.2315 149.63 9.87819 149.739L4.75974 151.318C4.40638 151.427 4.03156 151.229 3.92254 150.876Z"
                  fill="#FFB800"
                />
                <path
                  d="M37.6348 139.774C37.2814 139.883 37.0833 140.258 37.1924 140.611C37.3014 140.965 37.6762 141.163 38.0296 141.054L43.148 139.474C43.5013 139.365 43.6994 138.991 43.5904 138.637C43.4814 138.284 43.1065 138.086 42.7532 138.195L37.6348 139.774Z"
                  fill="#FFB800"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="222" height="201" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="grid-col">
          <div className="data">
            <p>Sunrise : {to12Hrformat(weatherData.current.sunrise)}</p>
            <p>Sunset : {to12Hrformat(weatherData.current.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;