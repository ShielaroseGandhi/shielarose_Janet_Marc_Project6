import React, { Component } from 'react';
import GuestSearchForm from './GuestSearchForm';

class SearchNav extends Component {
   render() {
      return (
         <div className="subNav">
            { 
            <GuestSearchForm
               filteredReg={this.props.filteredReg}
               handleSearchChange={this.props.handleSearchChange}
               handleSearchSubmit={this.props.handleSearchSubmit}
            />  
            }
         </div>
      )
   }
}

export default SearchNav;