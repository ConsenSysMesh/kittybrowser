import React, { Component } from 'react';
import { object } from 'prop-types';
// import Web3 from 'web3';
// import KittyCoreABI from 'contracts/KittyCoreABI.json';
// import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';

class Browser extends Component {
  
  componentDidMount() {
    // const web3 = new Web3(window.web3.currentProvider);

    // Initialize the contract instance

    // const kittyContract = new web3.eth.Contract(
    //   KittyCoreABI, // import the contracts's ABI and use it here
    //   CONTRACT_ADDRESS,
    // );

    // Add the contract to the drizzle store

    // this.context.drizzle.addContract({
    //   contractName: CONTRACT_NAME,
    //   web3Contract: kittyContract,
    // });
  }

  render() {
    return (
      <div className="browser">
        <h1>
          Kitty Browser
        </h1>

        {/* Input to type in the kitty ID here */}

        {/* Display Kitty info here */}
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
