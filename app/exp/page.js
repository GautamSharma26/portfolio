"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Chart } from "chart.js";
import Link from 'next/link';

export default function Page() {
    useEffect(() => {
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };
        var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Python Full Stack - 3Y Cont.."],
                datasets: [{
                        data: [75],
                        label: "Python",
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgb(75, 192, 192,0.5)",
                        borderWidth: 2
                    },
                    {
                        data: [80],
                        label: "FastApi/Flask",
                        borderColor: "rgb(255, 205, 86)",
                        backgroundColor: "rgb(255, 205, 86,0.5)",
                        borderWidth: 2
                    },
                    {
                        data: [90],
                        label: "Drf/Django",
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgb(255, 99, 132,0.5)",
                        borderWidth: 2
                    },
                    {
                        data: [60],
                        label: "Cloud",
                        borderColor: "rgb(200, 155, 200)",
                        backgroundColor: "rgb(200, 155, 200,0.5)",
                        borderWidth: 2
                    },
                    {
                        data: [39],
                        label: "Kubernetes",
                        borderColor: "rgb(180, 180, 155)",
                        backgroundColor: "rgb(180, 180, 155,0.5)",
                        borderWidth: 2
                    },
                    {
                        data: [55],
                        label: "AI",
                        borderColor: "rgb(180, 180, 200)",
                        backgroundColor: "rgb(180, 200, 250,0.5)",
                        borderWidth: 2
                    }
                ]
            },
            options: options,
        });
    }, []);

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10">
        <div className="container-centered grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* Image Column */}
            <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 border-4 border-blue-200">
                    <Image src="/static/images/c-boy-removebg-preview.png" width={220} height={220} alt="my image" className="rounded-full shadow-lg" />
                </div>
            </div>

            {/* Chart Column */}
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-2xl font-extrabold text-purple-700 mb-4 text-center">My Experience Graph</h1>
                <div className="w-full">
                    <div className="card-base flex items-center justify-center p-6">
                        <canvas id="myChart" className="w-full h-64"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center w-full mt-10">
            <Link href="/">
                <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer text-center">Home</div>
            </Link>
        </div>
    </div>
    );
}