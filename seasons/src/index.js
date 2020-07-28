import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props);

        // This is the only time you do a direct assignment to the state.
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // To update we called setState!!
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    // React requires render function.
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);