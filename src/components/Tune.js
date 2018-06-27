import React, {Component} from 'react';
import "./tune.css";

class Tune extends Component {
  render() {
    return (
      <div className='tune'>

        {console.log(this.props.tune)}
          {/* <h2 className="tune-position">{(this.props.tune.indexOf()+1)}</h2> */}
          <h3 className='tune-name'>{this.props.tune["im:name"].label}</h3>
          <h3 className='tune-artist'>{this.props.tune["im:artist"].label}</h3>
          <h4 className='tune-album'>{this.props.tune["im:collection"]["im:name"].label}</h4>
          <img className="tune-cover" src={this.props.tune["im:image"][2].label}/>






      </div>
    )
  }
}

export default Tune;
