import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Input } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class App extends React.Component {
  
    constructor(props) {
        super(props);
        var data = require('./data.json');
        this.state = {
            coinType: '',
            totalAmount: 0,
            numAmount: 0,
        }
    this.handleQuery = this.handleQuery.bind(this);
    }
  
    handleQuery(event) {
    const data = require('./data.json');
        var totalAmount = 0;
        var numAmount = 0;
    var coinType = event.target.value;
        for (var i = 0; i < data.length; i++) {
            if (coinType === '' || data[i].unit_coin === coinType) {
                totalAmount += data[i].amount;
                numAmount += 1;
            }
        }
        this.setState({
            coinType: coinType,
            totalAmount: totalAmount,
            numAmount: numAmount,
        });
    }

    render() {
        return (
    <div className="App">
        <header className="App-header">
          <div className="example-input">
          
            <Input placeholder="coin type" value={this.state.coinType} onChange={this.handleQuery}/>
            <Input placeholder="default size" />
           </div>

        <p>
          Coin type being queried is {this.state.coinType}!
        </p>

              <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Num Trades" key="1">
      {this.state.numAmount}
    </TabPane>

    <TabPane tab="Total Amount" key="2">
        {this.state.totalAmount}
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
}

export default App;
