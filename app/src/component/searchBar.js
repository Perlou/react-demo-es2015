/**
 * @author Perlou
 * @searchBar.js
 */

import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (ev){
    	this.props.onUserInput(
            this.refs['filterTextInput'].value,
            this.refs['inStockOnlyInput'].checked
    	);
    }

	render (){
		return (
			<form>
				<input
					type = "text"
					placeholder = "search..."
					value = {this.props.filterText}
					onChange={this.handleChange}
					ref="filterTextInput" />
				<input
					type = "checkbox"
					checked = {this.props.inStockOnly}
					ref = "inStockOnlyInput"
					onChange = {this.handleChange} />
				stock only
			</form>	
		);
	}

}
