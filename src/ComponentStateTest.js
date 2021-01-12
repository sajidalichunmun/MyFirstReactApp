import React from 'react'

class ComponentStateTest extends React.Component
{

    constructor(props) {
        super();
        //console.warn('Call supper');
        //console.warn('Call supper'+ props.const [state, setstate] = useState(initialState));
        this.state={
            name:"sajid",
            age:26
        }
    }

    componentDidMount() {
        console.warn('did mount');
    }

    componentDidUpdate() {
        console.warn('did Update');
        //alert('did updated');
    }

    componentWillUnmount() {
        console.warn('did Unmount');
    }
    render(){
        //console.warn('display every time');
        return(
            <div>
                <h1>Component State Example</h1>
                <span>{this.state.name}</span>
                <span>&nbsp;{this.state.age}</span>
                <br/>
                <button onClick={() => this.setState({name : 'sajid ali'})}>Upldate State Value</button>
            </div>
        )
    }
}

export default ComponentStateTest;