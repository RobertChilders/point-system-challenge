import { useEffect, useState } from "react";

import InfoCard from "./components/reusable-components/InfoCard";
import SubContent from "./components/reusable-components/SubContent";
import TransactionTable from "./components/TransactionTable";
import { TransactionService } from "./services/Transaction.service";

function App() {
  const transServ = new TransactionService();
  const [transactions, setTransactions] = useState(transServ.getData());
  const [monthlySummary, setMonthlySummary] = useState({});

  useEffect(() => {
    setMonthlySummary(getMonthlyPoints());
  }, [])

  const monthData = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getMonthlyPoints = () => {
    const overViewData = {};
    for(let i = 0; i < transactions.length; i++){
      !overViewData[transactions[i].getMonthName()] ?
        overViewData[transactions[i].getMonthName()] = transactions[i].getPoints() :
        overViewData[monthData[transactions]] += transactions[i].getPoints();
    }
    return overViewData;
  }

  return (
    <div className="container row justify-content-center mt-3">
      <div className="col-5">
        <TransactionTable transactions={transactions}/>
      </div>
      <div className="col-5">
        <InfoCard title={'Transaction Overview'}>
          {
            Object.keys(monthlySummary).map(month => (
              month !== 'undefined' ? (
                <SubContent key={month} title={month}>
                  <p>Total Points: {monthlySummary[month]}</p>
                </SubContent>
              ) : ''
            ))
          }
        </InfoCard>
      </div>
    </div>
  );
}

export default App;
