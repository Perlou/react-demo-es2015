/**
 * @author Perlou
 * @index.js
 */

import './style/main.css';
import React from 'react';
import {render} from 'react-dom';
import FilterProductTable from './src/filterProductTable';

import products from './src/models/products';

let init = () => {
	let box = document.createElement('div');
	box.className = 'app-shell';
	document.body.appendChild(box);
	render(
		<FilterProductTable products={products} />,
		box
	);	
};

init();
