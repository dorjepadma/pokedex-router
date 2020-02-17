import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <p> About Me: my children love pokemon, so this is wa work of love.</p>
                <p>param1 { this.props.match.params.other }</p>
                <p>param2 { this.props.match.params.thing }</p>
                <p>param3 { this.props.match.params.here }</p>

            </div>
        )
    }
}