import React, { Component } from 'react';
import { object } from 'prop-types';
import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
import Kitty from './Kitty';

class Browser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showKittyData: false,
      kittyBirthTime: '',
      kittyGenes: '',
      kittyGeneration: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider);

    // Initialize the contract instance

    const kittyContract = new web3.eth.Contract(
      KittyCoreABI, // import the contracts's ABI and use it here
      CONTRACT_ADDRESS,
    );

    // Add the contract to the drizzle store

    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: kittyContract,
    });
  }

  // Format kitty birth timestamp to regular date format
  formatDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ' ' + year;
  }

  // Method to get kitty data and set respective state data
  getKitty(kittyId) {
    const contract =  this.context.drizzle.findContractByAddress(CONTRACT_ADDRESS)
    contract.methods.getKitty(kittyId).call().then((kitty) => {
      const { genes, generation } = kitty;
      const birthTime = this.formatDate(new Date(kitty.birthTime*1000));
      this.setState({
        showKittyData: true,
        kittyData: {kittyId, birthTime, genes, generation}
      });
    });
  }

  // Method to handle kitty search for defined kitty id
  handleClick() {
    const kittyId = document.getElementById('kittyId').value;
    kittyId ? this.getKitty(kittyId) : alert('Please enter a Kitty Id');
  }

  // Method to handle kitty search for random kitty id
  handleRandomClick() {
    const randomId = Math.floor((Math.random() * 100000) + 1);
    this.getKitty(randomId);
    document.getElementById('kittyId').value = randomId;
  }

  render() {
    return (
      <div className="browser">
        <h1>
          Kitty Browser
        </h1>

        <br />

        {/* Input to type in the kitty ID here */}
        <div className="row">
          <h4 className="container">Kitty Id:</h4>
          <div className="col-5">
            <input id="kittyId" className="form-control" type="number" maxLength="6" />
          </div>
          &nbsp;
          <div className="row">
            <button type="button" className="col btn btn-secondary" onClick={this.handleClick}>Find Kitty</button>
            &nbsp;
            <button type="button" className="col btn btn-warning" onClick={this.handleRandomClick}>Fetch random Kitty</button>
          </div>
        </div>

        <br />

        {/* Display Kitty info here */}
        {this.state.showKittyData && <Kitty kittyData={this.state.kittyData} />}
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
