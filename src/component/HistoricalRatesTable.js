import React,{ useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

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

function HistoricalRatesTable({ historicalRates=[], baseCurrency, targetCurrency }) {


    console.log(targetCurrency, "targetCurrency");

    const [sortedData, setSortedData] = useState([...dataColl]);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = () => {
      let sorted = [...sortedData].sort((a, b) => (a.currencies.EUR.value > b.currencies.EUR.value ? 1 : -1));
      if (sortOrder === "asc") {
        setSortOrder("desc");
        sorted.reverse();
      } else {
        setSortOrder("asc");
      }
      setSortedData(sorted);
    };


  return (
    <div className='historical-table-wrapper'>
      <h2>Historical Rates Table</h2>

      <Table striped bordered hover responsive>
      <thead className='thead'>
      <tr>
          <th>Datetime</th>
          <th onClick={handleSort} className='value-header'>EUR Value
            {sortOrder === "asc" ? (
                    <FontAwesomeIcon icon={faSortUp} />
                  ) : (
                    <FontAwesomeIcon icon={faSortDown} />
                  )}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((result,index) =>
            <tr key={index}>
                <td>{result.datetime}</td>
                <td>{result.currencies.EUR.value}</td>
            </tr>)}  
      </tbody>
    </Table>

    </div>
  );
}

export default HistoricalRatesTable;
