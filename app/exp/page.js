"use client";
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { Chart } from "chart.js";
import Link from 'next/link';

const page = () => {
  useEffect(() => {
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Inexture - 2Y Cont..", "upcoming"],
        datasets: [{
          data: [75],
          label: "Python",
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgb(75, 192, 192,0.5)",
          borderWidth: 2
        }, {
          data: [80],
          label: "Django",
          borderColor: "rgb(255, 205, 86)",
          backgroundColor: "rgb(255, 205, 86,0.5)",
          borderWidth: 2
        }, {
          data: [90],
          label: "Drf",
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgb(255, 99, 132,0.5)",
          borderWidth: 2
        },
        {
          data: [39],
          label: "Cloud",
          borderColor: "rgb(200, 155, 200)",
          backgroundColor: "rgb(200, 155, 200,0.5)",
          borderWidth: 2
        },
        {
          data: [50],
          label: "FastAPI",
          borderColor: "rgb(180, 180, 155)",
          backgroundColor: "rgb(180, 180, 155,0.5)",
          borderWidth: 2
        }
        ]
      },
      options:options,
    });
  }, [])
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {/* Image Column */}
      <div className='grid mt-7 ml-5 py-2'>
        <Image
          src="/static/images/c-boy-removebg-preview.png"
          width={300}
          height={300}
          alt="my image"
        />
      </div>

      {/* Chart Column */}
      <div className='flex flex-col mt-5 mr-5'>
        {/* Move the heading above the chart */}
        <h1 className="mx-auto text-xl font-semibold md:mb-1">My Experience Graph</h1>

        <div className="w-full mx-auto">
          {/* Increase the width of the chart container */}
          <div className='border border-gray-400 rounded-xl w-full h-fit my-auto shadow-xl'>
            <canvas id='myChart'></canvas>
          </div>
        </div>
      </div>
    </div>
    <div className='grid justify-center w-screen'>
    <div className='my-2 rounded-md bg-blue-300 text-center w-20 hover:bg-green-300'><Link href="/">Home</Link></div>
    </div>
    </>
  )
}

export default page