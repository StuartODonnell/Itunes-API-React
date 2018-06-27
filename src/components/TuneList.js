import React, {Component} from 'react';
import Tune from './Tune.js';
import "./tunelist.css";

class TuneList extends Component {
  render() {
    const listNodes = this.props.data.map((tune) => {
      return <Tune key={this.props.data.indexOf(tune)} tune={tune}/>

  }
)

  return (
    <div className='tune-list'>
      {listNodes}
    </div>
  )
}
}

export default TuneList;
