/**
 * Author: Ejaz Bawasa
 * email: bawasa.ejaz@gmail.com
 * Date: 13/06/16 on 4:41 AM
 */


import React, {Component} from 'react';

class SelectBox extends Component {

	buildOption(item, key) {
		var me = this;
		return (<option value={item} key={key}>{item}</option>)
	}

	render() {

		var me = this
			,data = me.props.data || []
		;

		// console.log(data);
		return (
			<label htmlFor=""> Select API
				<select onChange={this.props.onChange}>
					// {data.map(me.buildOption.bind(me))}
				</select>
			</label>
		)
	}
}

export default SelectBox;