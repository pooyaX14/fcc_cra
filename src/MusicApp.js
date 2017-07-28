import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MusicApp extends Component {
    constructor(props) {
        super(props);
        this.state = { //These are state variables
            message: '',
            apiKey: '',
            playlist:[],
            name:''
        };
 
        this.printName = this.printName.bind(this);    //Add any new function if created
    }

    // componentDidMount(){
    //   this.printName(); //to render printName automatically after rendering the component
    // }
    printName(){
        var myInput = document.getElementById("myInput");
        this.setState({
            name:myInput.value
        });
        var songs = [
            {
              artist:"Pink Floyd",
              title:"High Hopes"
            },
            {
              artist:"Iron",
              title:"Dance of death"
            }
        ];
        this.setState({
          playlist:songs
        });
    }
        displayMessage(){ 
        var that = this;
        this.setState({
            message: "Welcome!"
        });
    }

    render() {
        var playlist = this.state.playlist.map(function(song, iterator){
        return(
                <div key={iterator}>Artist:{song.artist} Title:{song.title}</div>
            );
        });

        return (
            <div  className={this.props.color}>
                Welcome to React Session 91Springboard {this.props.person}!
                <input type="text" placeholder="Enter your name" id="myInput"/>
                <button onClick={this.printName}>Enter</button>
                <div>
                    <h1> playlist is: { playlist }</h1>
                </div>
                <h2>Your name is: {this.state.name} </h2>
            </div>
        );
    }
}

export default MusicApp;
