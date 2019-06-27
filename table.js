class TradeRow extends React.Component {
  render() {
    const trade = this.props.trade;
    
    const category = trade.category;
    const amount = trade.amount;
    const client = trade.client;

    return (
      <tr>
        <td>{category}</td>
        <td>{amount}</td>
        <td>{client}</td>
      </tr>
    );
  }
}

class TradeTable extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];
    let lastCategory = null;


    this.props.trades.forEach((trade) => {
      if (trade.category.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <TradeRow
          trade={trade}
          key={trade.category}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <td>category</td>
            <td>amount</td>
            <td>client</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class FilterableTradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <TradeTable
          trades={this.props.trades}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

class SumBar extends React.component {

	
}

const TRADES = [
  {category: 'BTC', amount: 9, stocked: true, client: 'Football'},
  {category: 'BTC', amount: 19, stocked: true, client: 'Baseball'},
  {category: 'BTC', amount: 29, stocked: false, client: 'Basketball'},
  {category: 'ETH', amount: 49, stocked: true, client: 'iPod Touch'},
  {category: 'ETH', amount: 59, stocked: false, client: 'iPhone 5'},
  {category: 'ETH', amount: 69, stocked: true, client: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableTradeTable trades={TRADES} />,
  document.getElementById('container')
);
