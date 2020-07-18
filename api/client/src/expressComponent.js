import React, { Component } from 'react'
import API from "./services/API"
export class expressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        API.testRoute()
            .then(res => this.setState({ apiResponse: res.data }));
    }
    
    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
            <div>
                <p className="App-intro">;{this.state.apiResponse}</p>

            </div>
        )
    }
}

export default expressComponent
