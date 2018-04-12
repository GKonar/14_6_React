// Licznik 3
var Counter_3 = React.createClass({
    getInitialState: function() { 
        return {
            counter: 0 
        };
    },
    increment: function(){ 
        this.setState({ 
            counter: this.state.counter + 1
        });
    },
    decrement: function(){ 
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {className: 'incButton', onClick: this.increment}, 'Plus'), // Przycisk increment
            React.createElement('span', {className: 'sum'}, '  ' + this.state.counter), // Span z wynikiem
            React.createElement('button', {className: 'decButton', onClick: this.decrement}, ' Minus') // Przycisk decrement
        );
    }
});

var element = React.createElement(Counter_3);
ReactDOM.render(element, document.getElementById('app_2'));