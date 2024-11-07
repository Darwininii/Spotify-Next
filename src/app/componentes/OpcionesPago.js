import React from "react";
import Image from "next/image";

const OpcPagos = () => (
  <div className="flex justify-center items-center gap-4 mt-4">
    <Image
      className="w-12"
      src="/Visa.webp"
      width={100}
      height={100}
      alt="Visa"
    />
    <Image
      className="w-12"
      src="/mastercard.png"
      width={100}
      height={100}
      alt="Visa"
    />
    <Image
      className="w-12"
      src="/amex.png"
      width={100}
      height={100}
      alt="Visa"
    />
    <Image
      className="w-12"
      src="/paypal.png"
      width={100}
      height={100}
      alt="Visa"
    />
    <span className="text-gray-400">+ 2 más</span>
  </div>
);

export default OpcPagos;
