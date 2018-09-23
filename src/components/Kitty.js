import React from 'react';
import { CONTRACT_ADDRESS } from '../config';

class Kitty extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="kittyData">
        <h4>Genes</h4>
        <p>{this.props.kittyData.genes}</p>
        <h4>Generation</h4>
        <p>{this.props.kittyData.generation}</p>
        <h4>Birth Time</h4>
        <p>{this.props.kittyData.birthTime}</p>
        <div className="card" style={{width: 400, height: 400}}>
          <div className="card-block">
            <img
              className="card-img-top"
              alt="Kitty"
              src={`https://storage.googleapis.com/ck-kitty-image/${CONTRACT_ADDRESS}/${this.props.kittyData.kittyId}.svg`}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default Kitty;
