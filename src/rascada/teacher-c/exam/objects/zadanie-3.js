'use strict';

const now = new Date();
const date = now.toLocaleDateString();

date
	.split('.')
	.map((text, i) => {
		if (i === 1) 
			switch (text) {
				case '03': return 'Marca';
				case '04': return 'Kwietnia';
				case '05': return 'Maja';
			}
	
		return text;
	})
	.forEach(text => document.body.innerText += ` ${text}`);
