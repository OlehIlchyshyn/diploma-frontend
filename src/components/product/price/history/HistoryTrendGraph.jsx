import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        // unit: "minute",
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Історія цін",
    },
  },
};

let data = {
  datasets: [
    {
      data: [
        {
          x: "2022-04-21T06:50:57.498+00:00",
          y: 8899,
        },
        {
          x: "2022-04-22T06:50:57.498+00:00",
          y: 8899,
        },
        {
          x: "2022-04-23T06:50:57.498+00:00",
          y: 9899,
        },
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function mapHistoryArrayToData(historyArray) {
  return historyArray
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    .map((historyEntry) => {
      return { x: historyEntry.date, y: historyEntry.amount };
    });
}

function updateGraphData(priceHistory) {
  data.datasets[0].data = mapHistoryArrayToData(priceHistory);
}

const HistoryTrendGraph = ({ priceHistory }) => {
  updateGraphData(priceHistory);
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryTrendGraph;
