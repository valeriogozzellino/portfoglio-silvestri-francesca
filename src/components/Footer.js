import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        background: "rgb(0, 0, 0)", // Colore del background impostato qui
        color: "#fff", // Colore del testo impostato a bianco per contrasto
        textAlign: "center",
        padding: "20px 0",
        fontSize: "14px",
      }}>
      <div className="w-full flex flex-col justify-center">
        <p className="font-medium m-2">Francesca Silvestri - Videomaker</p>
        <p className="m-2">Connect with me:</p>
        <div className=" m-2 flex flex-row justify-center">
          <a className="m-2" href="mailto:fsilvestrivideo@gmail.com">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </a>

          <Link className="m-2" href={"https://www.instagram.com/memegirvl/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50">
              <path
                d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                fill="white"
                stroke="white"
                strokeWidth="2"></path>
            </svg>
          </Link>
          <a className="m-2" href="tel:+393245822464">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p className="font-medium m-2">
          © {new Date().getFullYear()} Francesca Silvestri. All rights reserved.
        </p>
        <p className="font-thin">
          created by :{" "}
          <a href="https://www.linkedin.com/in/valerio-gozzellino-36ba65240/">
            Valerio Gozzellino -{" "}
          </a>
          <a href="https://www.linkedin.com/in/gabrielemasciulli/">
            Gabriele Masciulli
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
