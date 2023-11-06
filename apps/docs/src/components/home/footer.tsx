import React from "react";
import HeartIcon from "../icons/heart";

export default function Footer() {
  return (
    <footer className="mt-4 sm:mt-6 md:mt-12 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <div className="py-2 xl:py-3 flex items-center justify-center">
          Designed and developed with <HeartIcon className="w-5 h-5 mx-1.5" />
          by -
          <a
            target="_blank"
            href="https://redq.io/"
            className="text-gray-900 font-semibold ml-1"
          >
            REDQ
          </a>
        </div>
      </div>
    </footer>
  );
}
