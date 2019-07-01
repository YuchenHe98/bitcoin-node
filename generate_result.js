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
            columnName: '',
            query: '',
            totalAmount: 0,
            numAmount: 0,
        }
        this.handleQuery = this.handleQuery.bind(this);
        this.chooseColumn = this.chooseColumn.bind(this);
      
    }

    chooseColumn(event) {
        var columnName = event.target.value;
        this.setState({
            columnName: columnName
        });
    }

    handleQuery(event) {
        const data = require('./data.json');
        var totalAmount = 0;
        var numAmount = 0;
        var query = event.target.value;
        for (var i = 0; i < data.length; i++) {
            if (this.state.columnName === '' || query === '' || data[i][this.state.columnName] === query) {
                totalAmount += data[i].amount;
                numAmount += 1;
            }
        }

        this.setState({
            query: query,
            totalAmount: totalAmount,
            numAmount: numAmount,
        });
    }

    render() {
        return (
    <div className="App">
        <header className="App-header">
        <div className="example-input">
            <Input placeholder="key type" value={this.state.columnName} onChange={this.chooseColumn}/>
            <Input placeholder="coin type" value={this.state.query} onChange={this.handleQuery}/>
        </div>

        <p>
            Column {this.state.columnName} is queried, and the query is {this.state.query}!
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
