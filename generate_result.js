import React from 'react';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { Table } from 'antd';
import { Tabs } from 'antd';
import { Input } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyColumn: '',
            targetColumn: '',
        }
        this.handleKey = this.handleKey.bind(this);
        this.handleTarget = this.handleTarget.bind(this);
    }

    handleKey(event) {
        var keyColumn = event.target.value;
        this.setState({
            keyColumn: keyColumn
        });
    }
  
   handleTarget(event){
       var targetColumn = event.target.value;
        this.setState({
            targetColumn: targetColumn
        });
    }

    render() {
        const columns = [
            {
                title: this.state.keyColumn,
                dataIndex: this.state.keyColumn,
                key: this.state.keyColumn
            },
            {
                title: 'Number of instances',
                dataIndex: 'num',
                key: 'num',
            },
            {
                title: 'Mean',
                dataIndex: 'mean',
                key: 'mean'
            },
            {
                title: 'Standard deviation',
                dataIndex: 'stdDev',
                key: 'stdDev'
            }
        ];

        const allData = require('./data.json');
        var dataMap = {};
        for (var i = 0; i < allData.length; i++) {
            var currentKey = allData[i][this.state.keyColumn];
            if (!(currentKey in dataMap)) {
                dataMap[currentKey] = [];
            }
            var currentValue = allData[i][this.state.targetColumn];
            dataMap[currentKey].push(currentValue);
        }
      
      
        var data = [];
        for (var key in dataMap) {
            var currentRow = {};
            currentRow[this.state.keyColumn] = key;
            const currentTarget = dataMap[key];
            const n = currentTarget.length;
            const mean = currentTarget.reduce((a,b) => a+b)/n;
            const stdDev = Math.sqrt(currentTarget.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/n);
            currentRow['mean'] = mean;
            currentRow['num'] = n;
            currentRow['stdDev'] = stdDev;
            data.push(currentRow);
        }

        return (
    <div className="App">
        <header className="App-header">
        <div className="example-input">
            <Input placeholder="key type" value={this.state.keyColumn} onChange={this.handleKey}/>
            <Input placeholder="target type" value={this.state.targetColumn} onChange={this.handleTarget}/>
        </div>

        <Table columns={columns} dataSource={data} />

        </header>
    </div>
        );
    }
}

export default App;
