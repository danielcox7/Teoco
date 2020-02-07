import React from 'react';
import {Dropdown} from 'semantic-ui-react';

const friendOptions = [
	{
		key: 'Jenny Hess',
		text: 'Jenny Hess',
		value: 'Jenny Hess'
	},
	{
		key: 'Elliot Fu',
		text: 'Elliot Fu',
		value: 'Elliot Fu'
	}
];

const DropdownSelection = () => (
	<Dropdown placeholder="Select Friend" fluid selection options={friendOptions} />
);

export default DropdownSelection;
