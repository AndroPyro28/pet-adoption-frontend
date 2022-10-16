import { useGetAllAnimalRecordQuery } from '../../services/animalRecordApis';
import { FirstColContent, ListBox } from "./components"
import AnimalListBoxData from './AnimalListBoxData';
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
const sampleData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "Total user registration over the months",
        borderColor: "gray",
        backgroundColor:"white",
        fill:false,
        data: [112, 123, 532, 122, 222, 333, 666, 123, 321],
      },
    ],
  };

  
function UsersChart() {
    
    return (<FirstColContent>
      <h1>Total user registration over the months</h1>
        <Line
          data={sampleData}
          options={chartOption!}
          
          style={{ position: "relative", }}
        />
    </FirstColContent>
    )
}

export default UsersChart