import React, {Component} from 'react';
import TuneList from '../components/TuneList.js';
import "./tunesbox.css";

class TunesBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tunes: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(tunes => this.setState({tunes: tunes.feed.entry}));
  }

  render() {
    return (

        <TuneList data={this.state.tunes}/>
    )
  }
}

export default TunesBox;
