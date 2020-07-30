import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from'./Spinner';

// Use React.Component when you need to use 'state'
class App extends React.Component{
    state = { lat: null, errorMessage: '' };

    // Use this for loading data instead of using the constructor.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message })
        );
    }

    // Helper method to handle conditional logic
    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    };

    // If there is conditional logic move it out to another function. AVOID consditional login in redner method.
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);