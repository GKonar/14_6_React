// Licznik 1
var Counter = React.createClass({
    // <<<<<<<<<<<<<< FAZA INICJALIZACJI >>>>>>>>>>>>>>>
    
    // - - - - - - - getDefaultProps
    getDefaultProps(){
        console.log('getDefaultProps - Metoda ustawia warości domyślne propsów.')
    },
    // - - - - - - - getInitialState
    getInitialState() { // dzieki tej metodzie jesteśmy w stanie określić stan początkowy komponentu
        return {
            counter: 0 // zwraca obiekt do którego dostajemy się za pmocą THIS.STATE !!!!!
        };
    },
    increment(){ // zajmuje się odpowiednią zmianą stanu
        this.setState({ // ustawiamy stan za pomocą tej metody
            counter: this.state.counter + 1
        });
    },
    decrement(){ 
        this.setState({
            counter: this.state.counter - 1
        });
    },
    // - - - - - - - componentWillMount 
    componentWillMount() {
        console.log('componentWillMount - Wywoływana zaraz przed funkcją render.')    
    },
    // - - - - - - - render
    render() {
        return React.createElement('div', {},
            React.createElement('button', {className: 'incButton', onClick: this.increment}, 'Plus'), // Przycisk increment
            React.createElement('span', {className: 'sum'}, '  ' + this.state.counter), // Span z wynikiem
            React.createElement('button', {className: 'decButton', onClick: this.decrement}, ' Minus') // Przycisk decrement
        );
    },
    // - - - - - - - componentDidMount
    componentDidMount() {
        console.log('componentDidMount - Do wykonywania opercji manipulacji, używania na elemencie jQuerry, pobrania danych z elementu.')
    },
    
    // <<<<<<<<<<<<<< FAZA AKTUALIZACJI >>>>>>>>>>>>>>>
    
    // - - - - - - - componentWillReciveProps
    componentWillReciveProps(Next_Props) {
        console.log('componentWillReciveProps - Metoda ta pozwala aktualizować stan na podstawie nadchodzących właściwości.')
    },
    // - - - - - - - shouldComponentUpdate
    shouldComponentUpdate(Next_Props, Next_State){
        if (i = 1) {
           return true 
        }
        console.log('shouldComponentUpdate - pozwala sprawdzić czy faktycznie trzeba jeszcze raz przerysować komponent')
    },
    // - - - - - - - - componentWillUpdate
    componentWillUpdate(nextProps, Next_State) {
        console.log('componentWillUpdate - wywoływana tylko do przygotowania na nadchodzące zmiany')
    },
    // - - - - - - - - componentDidUpdate
    componentDidUpdate(prev_Props, prev_State) {
        console.log('componentDidUpdate - w niej możemy wykonać np. jakieś manipulacje DOM')
    },

    // <<<<<<<<<<<<<< FAZA USUWANIA >>>>>>>>>>>>>>>

    // - - - - - - - - componentWillUnmount
    componentWillUnmount() {
        console.log('componentWillUnmount - możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM.')
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var element2 = React.createElement(Counter);
ReactDOM.render(element2, document.getElementById('app_1'));

var element3 = React.createElement(Counter);
ReactDOM.render(element3, document.getElementById('app_2'));
