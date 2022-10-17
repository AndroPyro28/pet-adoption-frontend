// import React, { useEffect, useState } from 'react'
// import { useGetAllAdoptionRequestQuery } from '../../services/adoptionRecordApis';
import AdoptionListBoxData from './AdoptionListBoxData'
import { FirstColContent, ListBox } from "./components"
import {AdoptionRecord} from '../../models/Adoption.ts';


import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    LineController,
    BarController,
    ChartOptions,
    DatasetController,
    ChartData
} from "chart.js";
import { useGetAllPetsStatusQuery } from '../../services/animalRecordApis';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    CategoryScale,
    LineController,
    BarController
);

const chartOption: ChartOptions = {
    responsive: true,
    // plugins: {
    //   title: {
    //     display: true,
    //     align: "center",
    //     // fontSize: 50,
    //     color: "black",
    //   },
    // },
    animations: {
        tension: {
            duration: 1000,
            easing: "linear",
            from: 0,
            to: 1,
            loop: true,
        },
    },
    // scales: {
    //   y: {
    //     // defining min and max so hiding the dataset does not change scale range
    //     min: 0,
    //   },
    // },
    // maintainAspectRatio: false,
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function PetsChart() {
    const {data} = useGetAllPetsStatusQuery()
    console.log(data);
    const animalRecordStats = new Array(12);
    data?.forEach((animalRecord) => {
        animalRecordStats[animalRecord.month] = animalRecord.total
    })

    const sampleData: ChartData<"line", number[], string> = {
        labels,
        datasets: [
          {
            label: "Total pets registration over the months",
            borderColor: "gray",
            backgroundColor:"white",
            fill:false,
            data: animalRecordStats,
          },
        ],
      };
    return (
        <FirstColContent>
            <h1>Total pets over the month</h1>
            <Line
                data={sampleData}
                options={chartOption!}
                style={{ position: "relative", }}
            />
        </FirstColContent>
    )
}

export default PetsChart