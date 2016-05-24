/**
 * @author Perlou
 * @productTable.js
 */

import React, {Component} from 'react';
import ProductRow from './productRow';
import ProductCategoryRow from './productCategoryRow';

export default class ProductTable extends Component {

	render (){
		let rows = [];
		let lastCategory = null;

		this.props.products.forEach( product => {
			if(product.name.indexOf(this.props.filterText) == -1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}
			if(product.category !== lastCategory){
				rows.push(
					<ProductCategoryRow 
						category={product.category} />
				);
			}
			rows.push(
				<ProductRow 
					product={product} />
			);
			lastCategory = product.category;
		}.bind(this));

		return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
		);
	}

}
