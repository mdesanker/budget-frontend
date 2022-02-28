export const barLineOptions = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      usePointStyle: true,
      reverse: true,
      labels: {
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
      grid: {
        drawBorder: true,
        borderColor: "#94a3b8",
        borderWidth: 3,
      },
    },
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      ticks: {
        color: "#0891b2",
        font: {
          size: 14,
          weight: "bold",
        },
      },
      grid: {
        drawBorder: true,
        borderColor: "#0891b2",
        borderWidth: 2,
        tickColor: "#0891b2",
        tickWidth: 2,
      },
      title: {
        display: true,
        text: "Amount",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      ticks: {
        color: "#b91c1c",
        font: {
          size: 14,
          weight: "bold",
        },
      },
      grid: {
        drawOnChartArea: false,
        drawBorder: true,
        borderColor: "#b91c1c",
        borderWidth: 2,
        tickColor: "#b91c1c",
        tickWidth: 2,
      },
      title: {
        display: true,
        text: "Transactions",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  },
};
