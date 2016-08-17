/**
 * @author Perlou
 * @index.js
 */

'use strict';

/**
 * redux todo
 */

import './style/main.css';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let init = () => {
	let box = document.createElement('div');
	box.className = 'app-shell';
	document.body.appendChild(box);
	render(
		<div>
			Hello
		</div>,
		box
	);
};

/**
 * productTable
 */

// import './style/main.css';
// import React from 'react';
// import {render} from 'react-dom';
// import FilterProductTable from './src/filterProductTable';

// import products from './src/models/products';

// let init = () => {
// 	let box = document.createElement('div');
// 	box.className = 'app-shell';
// 	document.body.appendChild(box);
// 	render(
// 		<FilterProductTable products={products} />,
// 		box
// 	);	
// };

// init();
