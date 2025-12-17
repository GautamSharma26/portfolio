import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return ( <
        div className = "min-h-screen overflow-y-auto bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 font-sans" >
        <
        div className = "container-centered max-w-6xl mx-auto px-4 flex flex-col items-center justify-center py-10" > { /* Personal Introduction Section */ } <
        div className = "flex-shrink-0 flex flex-col items-center justify-center card-base w-80 md:w-96 lg:w-[28rem] mb-10" >
        <
        div className = "rounded-full w-28 h-28 md:w-36 md:h-36 overflow-hidden shadow-lg border-4 border-gray-200" >
        <
        Image src = "/static/images/20230114_165730.jpg"
        alt = "Profile Picture"
        width = { 144 }
        height = { 144 }
        className = "object-cover w-full h-full" /
        >
        <
        /div> <
        h1 className = "text-2xl md:text-3xl font-extrabold text-gray-800 mt-5" > Gautam Sharma < /h1> <
        span className = "text-base md:text-lg text-gray-500 mt-1 font-medium" > Python / AI Developer < /span> <
        p className = "text-center text-gray-600 text-sm md:text-base mt-3" >
        Hi, I 'm Gautam, a passionate Python/AI developer. Working on innovative solutions and exploring the latest in technology to create impactful applications. < /
        p > <
        div className = "flex gap-3 mt-4 justify-center" >
        <
        a href = "https://www.youtube.com/channel/UCDFpwbMB8Owgk0QRBEchNVw"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "p-2 rounded-full bg-red-100 hover:bg-red-200 transition" >
        <
        svg className = "w-5 h-5 text-red-600"
        fill = "currentColor"
        viewBox = "0 0 24 24" > < path d = "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" / > < /svg> < /
        a > <
        a href = "https://www.instagram.com/sharma_gautam_26/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition" >
        <
        svg className = "w-5 h-5 text-pink-600"
        fill = "currentColor"
        viewBox = "0 0 24 24" > < path d = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.015 8.333 0 8.756 0 12c0 3.244.015 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.704.072 4.948.072 3.244 0 3.668-.015 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.057-1.28.072-1.704.072-4.948 0-3.244-.015-3.668-.072-4.948-.196-4.363-2.618-6.78-6.979-6.98-1.281-.057-1.704-.072-4.948-.072zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" / > < /svg> < /
        a > <
        /div> < /
        div >

        { /* About Section */ } <
        div className = "card-base w-full max-w-4xl mb-10" >
        <
        h2 className = "text-2xl font-bold text-gray-800 mb-3" > About Me < /h2> <
        p className = "text-gray-700 mb-3" > I 'm a full-stack Python/AI developer with 4+ years of experience building scalable web applications, integrating AI/ML models, and deploying cloud solutions. I specialize in Django, FastAPI, React, and modern DevOps practices.</p> <
        p className = "text-gray-700" > Passionate about solving real - world problems through technology, I enjoy collaborating with teams, learning new tools, and contributing to open - source projects. < /p> < /
        div >

        { /* Quick Stats */ } <
        div className = "grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-10" >
        <
        div className = "card-base text-center" >
        <
        div className = "text-2xl font-bold text-purple-600" > 4 + < /div> <
        div className = "text-sm text-gray-600" > Years Experience < /div> < /
        div > <
        div className = "card-base text-center" >
        <
        div className = "text-2xl font-bold text-purple-600" > 10 + < /div> <
        div className = "text-sm text-gray-600" > Projects Completed < /div> < /
        div > <
        div className = "card-base text-center" >
        <
        div className = "text-2xl font-bold text-purple-600" > 5 + < /div> <
        div className = "text-sm text-gray-600" > Tech Stacks < /div> < /
        div > <
        div className = "card-base text-center" >
        <
        div className = "text-2xl font-bold text-purple-600" > 100 % < /div> <
        div className = "text-sm text-gray-600" > Dedicated < /div> < /
        div > <
        /div>

        { /* Container for grid content */ } <
        div className = "grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-4xl px-4 py-2 mb-10" >
        <
        Link href = "/main" >
        <
        div className = "flex flex-col items-center justify-center bg-yellow-50 rounded-xl p-6 hover:shadow-xl border border-yellow-100 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-7 w-7 text-yellow-500 mb-3"
        viewBox = "0 0 20 20"
        fill = "currentColor" >
        <
        path fillRule = "evenodd"
        d = "M7.121 7.464l1.415 1.414L12 6.828l-1.414-1.415-3.536 3.536zM10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3H3a1 1 0 01-1-1V3zm2 1v8h12V4H4z"
        clipRule = "evenodd" / >
        <
        /svg> <
        span className = "font-semibold text-lg text-gray-700" > Skills < /span> < /
        div > <
        /Link> <
        Link href = "/exp" >
        <
        div className = "flex flex-col items-center justify-center bg-red-50 rounded-xl p-6 hover:shadow-xl border border-red-100 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-7 w-7 text-red-500 mb-3"
        viewBox = "0 0 20 20"
        fill = "currentColor" >
        <
        path fillRule = "evenodd"
        d = "M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v13a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H2a1 1 0 01-1-1V3zm8 7a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h2zm2-6H4v10h8V4z"
        clipRule = "evenodd" / >
        <
        /svg> <
        span className = "font-semibold text-lg text-gray-700" > Experience < /span> < /
        div > <
        /Link> <
        Link href = "/blogs" >
        <
        div className = "flex flex-col items-center justify-center bg-orange-50 rounded-xl p-6 hover:shadow-xl border border-orange-100 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-7 w-7 text-orange-500 mb-3"
        viewBox = "0 0 20 20"
        fill = "currentColor" >
        <
        path fillRule = "evenodd"
        d = "M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1h-2a1 1 0 01-1-1V4H4v13h5a1 1 0 011 1h5v-1a1 1 0 01-1-1H3V3zm7 7a1 1 0 100-2 1 1 0 000 2z"
        clipRule = "evenodd" / >
        <
        /svg> <
        span className = "font-semibold text-lg text-gray-700" > My Blogs < /span> < /
        div > <
        /Link> <
        Link href = "/project" >
        <
        div className = "flex flex-col items-center justify-center bg-blue-50 rounded-xl p-6 hover:shadow-xl border border-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-7 w-7 text-blue-500 mb-3"
        viewBox = "0 0 20 20"
        fill = "currentColor" >
        <
        path fillRule = "evenodd"
        d = "M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1H2V3zm5 11a1 1 0 100-2 1 1 0 000 2zM4 7h12v1H4V7z"
        clipRule = "evenodd" / >
        <
        /svg> <
        span className = "font-semibold text-lg text-gray-700" > Projects < /span> < /
        div > <
        /Link> < /
        div >

        { /* CTA Section */ } <
        div className = "card-base bg-gradient-to-r from-purple-50 to-pink-50 w-full max-w-4xl mb-10 text-center border-2 border-purple-200" >
        <
        h2 className = "text-2xl font-bold text-gray-800 mb-2" > Let 's Work Together</h2> <
        p className = "text-gray-700 mb-4" > Interested in collaborating or have a project in mind ? I 'd love to hear from you!</p> <
        Link href = "/contact" >
        <
        button className = "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105" >
        Get In Touch <
        /button> < /
        Link > <
        /div> < /
        div > <
        /div>
    );
}