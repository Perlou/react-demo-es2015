/**
 * @author Perlou
 * @productCategoryRow.js
 */

'use strict';

import React, {Component} from 'react';

export default class ProductCategoryRow extends Component {

	render (){
		return (
		    <tr>
		        <th colSpan="2">{this.props.category}</th>
		    </tr>
		);

	}

}