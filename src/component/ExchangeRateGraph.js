import React, { useState }  from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

// Dummy data set
  const dataColl = [
    {
        "datetime": "2022-01-01T23:59:59Z",
        "currencies": {
            "EUR": {
                "code": "EUR",
                "value": 3.67306
            },
            "AFN": {
                "code": "AFN",
                "value": 91.80254
            },
            "ALL": {
                "code": "ALL",
                "value": 108.22904
            },
            "AMD": {
                "code": "AMD",
                "value": 480.41659
            },
            "...": "150+ more currencies"
        }
    },
    {
        "datetime": "2022-01-02T23:59:59Z",
        "currencies": {
            "EUR": {
                "code": "EUR",
                "value": 2.67306
            },
            "AFN": {
                "code": "AFN",
                "value": 91.80254
            },
            "ALL": {
                "code": "ALL",
                "value": 108.22904
            },
            "AMD": {
                "code": "AMD",
                "value": 480.41659
            },
            "...": "150+ more currencies"
        }
    },
    {
        "datetime": "2022-01-03T23:59:59Z",
        "currencies": {
            "EUR": {
                "code": "EUR",
                "value": 3.67306
            },
            "AFN": {
                "code": "AFN",
                "value": 91.80254
            },
            "ALL": {
                "code": "ALL",
                "value": 108.22904
            },
            "AMD": {
                "code": "AMD",
                "value": 480.41659
            },
            "...": "150+ more currencies"
        }
    },
    {
        "datetime": "2022-01-04T23:59:59Z",
        "currencies": {
            "EUR": {
                "code": "EUR",
                "value": 4.67306
            },
            "AFN": {
                "code": "AFN",
                "value": 91.80254
            },
            "ALL": {
                "code": "ALL",
                "value": 108.22904
            },
            "AMD": {
                "code": "AMD",
                "value": 480.41659
            },
            "...": "150+ more currencies"
        }
    },
    {
        "datetime": "2022-01-05T23:59:59Z",
        "currencies": {
            "EUR": {
                "code": "EUR",
                "value": 3.67306
            },
            "AFN": {
                "code": "AFN",
                "value": 91.80254
            },
            "ALL": {
                "code": "ALL",
                "value": 108.22904
            },
            "AMD": {
                "code": "AMD",
                "value": 480.41659
            },
            "...": "150+ more currencies"
        }
    }
]

function ExchangeRateGraph({ historicalRates =[], baseCurrency, targetCurrency}) {

//   const historicalRatesVal = historicalRates.map((dataPoint) => dataPoint.historicalRates); // Replace 'date' with the actual key in your data
//   const exchangeRates = historicalRates.map((dataPoint) => dataPoint.exchangeRate); // Replace 'exchangeRate' with the actual key in your data
    const historicalRatesVal = dataColl.map((currencies)=> currencies.currencies.EUR.value);
    const historicalRatesDate = dataColl.map((currencies)=> currencies.datetime);

  // Create chart data
  const chartData = {
    labels: historicalRatesDate,
    datasets: [
      {
        label: `Exchange Rate (${baseCurrency} to ${targetCurrency})`,
        data: historicalRatesVal, 
        fill: false, 
        borderColor: 'blue', 
        borderWidth: 2, 
      },
    ],
  };

  // Create chart options

    const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };
  
  

  return (
    <div>
      <h2>Exchange Rate Graph</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default ExchangeRateGraph;
