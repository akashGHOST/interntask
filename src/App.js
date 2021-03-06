import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap'


const App= () => {
  const Values = [
    {Ticker: "MOTHERSUMI-I", DateTime: "17/05/21 9:15", CMP: "241.05",   Price_Change:"5.26",   Gap52_W_H: "-2.05",  Gap52_W_L: "-64.09", ST_1:"226.75",   ST_2:"217.20",   Candle:"",    Trend:"Buy_52_W_H..", Score:"140.49", Rank:"19",  MR_Signal:""},
    {Ticker: "UPL-I",        DateTime: "17/05/21 9:15", CMP: "769.25",   Price_Change:"3.12",   Gap52_W_H: "-2.21",  Gap52_W_L: "-49.69", ST_1:"226.75",   ST_2:"708.88",   Candle:"",    Trend:"Buy_52_W_H..", Score:"261.84", Rank:"3",   MR_Signal:""},
    {Ticker: "BALKRISIND-I", DateTime: "17/05/21 9:15", CMP: "2,101.00", Price_Change:"11.18",  Gap52_W_H: "-0.43",  Gap52_W_L: "-49.26", ST_1:"1,921.34", ST_2:"1,849.78", Candle:"Up",  Trend:"Buy_52_W_H..", Score:"1",      Rank:"19",  MR_Signal:""},
    {Ticker: "BERGEOAINT-I", DateTime: "17/05/21 9:15", CMP: "769.30",   Price_Change:"2.16",   Gap52_W_H: "-6.77",  Gap52_W_L: "-40.84", ST_1:"744.98",   ST_2:"724.87",   Candle:"",    Trend:"Buy_52_W_H..", Score:"94.41",  Rank:"40",  MR_Signal:""},
    {Ticker: "COLPAL-I",     DateTime: "17/05/21 9:15", CMP: "1,611.00", Price_Change:"2.35",   Gap52_W_H: "-3.99",  Gap52_W_L: "-18.91", ST_1:"1,571.73", ST_2:"1,537.56", Candle:"",    Trend:"Buy_10_D_H..", Score:"90.24",  Rank:"42",  MR_Signal:""},
    {Ticker: "SBIN-I",       DateTime: "17/05/21 9:15", CMP: "386.20",   Price_Change:"6.83",   Gap52_W_H: "-10.92", Gap52_W_L: "-57.99", ST_1:"362.14",   ST_2:"348.84",   Candle:"Up",  Trend:"Buy_10_D_H..", Score:"80.15",  Rank:"47",  MR_Signal:""},
    {Ticker: "ICICIBANK-I",  DateTime: "17/05/21 9:15", CMP: "624.50",   Price_Change:"4.42",   Gap52_W_H: "-9.77",  Gap52_W_L: "-48.12", ST_1:"596.73",   ST_2:"580.56",   Candle:"Up",  Trend:"Buy_10_D_H..", Score:"76.70",  Rank:"50",  MR_Signal:""},
    {Ticker: "UBL-I",        DateTime: "17/05/21 9:15", CMP: "1,234.85", Price_Change:"1.87",   Gap52_W_H: "-7.43",  Gap52_W_L: "-27.26", ST_1:"1,196.98", ST_2:"1,163.54", Candle:"",    Trend:"Buy_10_D_H..", Score:"61.90",  Rank:"58",  MR_Signal:""},
    {Ticker: "ITC-I",        DateTime: "17/05/21 9:15", CMP: "213.20",   Price_Change:"-0.30",  Gap52_W_H: "-10.14", Gap52_W_L: "-23.45", ST_1:"210.30",   ST_2:"205.95",   Candle:"",    Trend:"Buy_10_D_H..", Score:"58.83",  Rank:"61",  MR_Signal:"" },
    {Ticker: "GMRINFRA-I",   DateTime: "17/05/21 9:15", CMP: "26.25",    Price_Change: "4.37," ,Gap52_W_H: "-12.65", Gap52_W_L: "-33.14", ST_1:"24.78",    ST_2:"23.78",    Candle:"UP",  Trend:"Buy_10_D_H..", Score:"51.22",  Rank:"67",  MR_Signal:"" },
    {Ticker: "BRITANNIA-I",  DateTime: "17/05/21 9:15", CMP: "3,494.00", Price_Change: "-0.46,",Gap52_W_H: "-12.95", Gap52_W_L: "-6.10",  ST_1:"3,444.95", ST_2:"3,530.23", Candle:"Down",Trend:"Buy_10_D_H..", Score:"-38.23", Rank:"119", MR_Signal:"" },
    {Ticker: "EICHERMOT-I",  DateTime: "17/05/21 9:15", CMP: "2,495.05", Price_Change: "2.86,", Gap52_W_H: "-88.85", Gap52_W_L: "-19.35", ST_1:"2,403.67", ST_2:"2,339.37", Candle:"UP",  Trend:"Buy_10_D_H..", Score:"-34.72", Rank:"118", MR_Signal:"" },
    {Ticker: "RBLBANK-I",    DateTime: "17/05/21 9:15", CMP: "198.25",   Price_Change: "5.26,", Gap52_W_H: "-27.58", Gap52_W_L: "-43.23", ST_1:"186.09",   ST_2:"178.42",   Candle:"UP",  Trend:"Buy_10_D_H..", Score:"-54.74", Rank:"128", MR_Signal:"" },
    {Ticker: "NESTLEIND-I",  DateTime: "17/05/21 9:15", CMP: "17,079.00",Price_Change: "-1.28,",Gap52_W_H: "-9.37",  Gap52_W_L: "-11.50", ST_1:"16,889.13",ST_2:"16,582.63",Candle:"Down",Trend:"Buy_10_D_H..", Score:"26.67",  Rank:"74",  MR_Signal:"" },
    {Ticker: "LT-I",         DateTime: "17/05/21 9:15", CMP: "1,391.40", Price_Change: "-2/06,",Gap52_W_H: "-13.17", Gap52_W_L: "-39.42", ST_1:"1,372.02", ST_2:"1,339.44", Candle:"",    Trend:"Buy_10_D_H..", Score:"22.80",  Rank:"77",  MR_Signal:"" },
    {Ticker: "MUTHOOTFIN-I", DateTime: "17/05/21 9:15", CMP: "1,233,10", Price_Change: "5.48,", Gap52_W_H: "-12.20", Gap52_W_L: "-31.90", ST_1:"1,172.22", ST_2:"1,150.65", Candle:"UP",  Trend:"Buy_10_D_H..", Score:"18.06",  Rank:"79",  MR_Signal:"" },
    {Ticker: "TRENT-I",      DateTime: "17/05/21 9:15", CMP: "797.00",   Price_Change: "-2.65,",Gap52_W_H: "-15.84", Gap52_W_L: "-13.43", ST_1:"735.96",   ST_2:"16,582.63",Candle:"",    Trend:"Buy_10_D_H..", Score:"",       Rank:"74",  MR_Signal:"" },]
    
   
  const renderTable = (Values, index)=>{
    return(
      <tr>
        <td>{Values.Ticker}</td>
        <td>{Values.DateTime}</td>
        <td>{Values.CMP}</td>
        <td>{Values.Price_Change}</td>
        <td className='gap'>        
        {Values.Gap52_W_H}
        </td>
        <td>{Values.Gap52_W_L}</td>
        <td>{Values.ST_1}</td>
        <td>{Values.ST_2}</td>
        <td>{Values.Candle}</td>
        <td>{Values.Trend}</td>
        <td>{Values.Score}</td>
        <td>{Values.Rank}</td>
        <td>{Values.MR_Signal}</td>
      </tr>
    )
  }
  return(
    <div className='App'>
      
      <ReactBootStrap.Table>
        <thead>
          <tr>     
            <th>Ticker</th>
            <th>Date/Time</th>
            <th>CMP</th>
            <th>Price_Change%</th>
            <th>Gap:52_W_H</th>
            <th>Gap:52_W_L</th>
            <th>ST_1</th>
            <th>ST_2</th>
            <th>Candle</th>
            <th>Trend</th>
            <th>Score</th>
            <th>Rank</th>
            <th>MR_Signal</th>
          </tr>
        </thead>            
    <tbody>
      {Values.map(renderTable)}
    
    </tbody>
 
</ReactBootStrap.Table>
    </div>
  );
}


export default App;