import React from 'react';

class About extends React.Component {

    constructor() {
        super();
        // Undifine
        // console.warn("prop",this.props);
        console.warn("undefine props");
    }

    componentDidMount() {
        // console.warn("prop",this.props);
        console.warn("prop", this.props.name);
    }

    componentDidUpdate() {
        console.warn("props in update", this.props.ename);
    }

    render() {
        return (
            <div>
                <h2>Class Component Exmple</h2>
                <h2>{this.props.name}</h2>
                <h2>UseState :{this.props.ename}</h2>

            </div>
        )
    }
}

export default About;