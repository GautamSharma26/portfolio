import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white/60 backdrop-blur-sm">
      <div className="container-centered flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
            <Image src="/static/images/logo-g.jpeg" alt="logo" width={40} height={40} />
          </div>
          <span className="font-semibold text-gray-800">Gautam Sharma</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/main" className="hover:text-gray-900">Skills</Link>
          <Link href="/project" className="hover:text-gray-900">Projects</Link>
          <Link href="/blogs" className="hover:text-gray-900">Blogs</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;