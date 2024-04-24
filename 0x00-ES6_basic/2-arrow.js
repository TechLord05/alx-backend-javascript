/**
 * Represents a list of neighborhoods in San Francisco.
 * @constructor
 */
export default function getNeighborhoodsList() {
    // Initialize the list of neighborhoods
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Add a new neighborhood to the list
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }