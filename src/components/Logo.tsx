'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 45 55" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0C2.23858 0 0 2.23858 0 5V40C0 42.7614 2.23858 45 5 45H35L45 55V5C45 2.23858 42.7614 0 40 0H5Z" fill="#25D366"/>
        <path d="M26 15L16 28H23L19 40L29 27H22L26 15Z" fill="white"/>
      </svg>
      <span className="text-xl font-semibold text-white">Whomation</span>
    </Link>
  );
}
