import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Input } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
    var data = require('./data.json')
    var totalAmount = 0;
    var numAmount = 0;
    var rawInput = prompt("Please enter the coin being queried:", "eg: USD");

        var coinType = rawInput.toUpperCase();
        for (var i = 0; i < data.length; i++) {
        if (coinType === '' || data[i].unit_coin === coinType) {
                totalAmount += data[i].amount;
                                        numAmount += 1;
                }
    }
    //alert(numAmount+" sum: "+totalAmount+"\n");

    return (
    <div className="App">
        <header className="App-header">
          <div className="example-input">
    <Input placeholder="large size" />
    <Input placeholder="default size" />
    <Input placeholder="small size" />
  </div>

        <p>
          Coin type being queried is {coinType}!
        </p>

              <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Num Trades" key="1">
      {numAmount}
    </TabPane>
    
    <TabPane tab="Total Amount" key="2">
        {totalAmount}
    </TabPane>
  </Tabs>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default App;
