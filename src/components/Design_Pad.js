import React from 'react'
import '../design.css';

class DesignPad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundImage: `url('https://images.theconversation.com/files/46930/original/8x6wnb39-1398261971.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')`
            // color: 'white'
        }
    }

    onDrop = (event) => {
        console.log("Dropped something right here", this.props.currentInput.src)
        this.setState({
            // color: this.props.currentInput.color
            backgroundImage: this.props.currentInput.src
        })
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <div className = "designPad" style = {
                {backgroundImage: this.state.backgroundImage}} onDragOver = {this.onDragOver} onDrop = {() => this.onDrop()}>
            </div>
        )
    }

}
export default DesignPad