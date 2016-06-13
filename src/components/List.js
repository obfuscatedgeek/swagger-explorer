/**
 * Author: Ejaz Bawasa
 * email: bawasa.ejaz@gmail.com
 * Date: 13/06/16 on 3:40 AM
 */


import React, {Component} from 'react';

class List extends Component {

	buildItem(item, key) {
		var me = this;
		

		return (<li onClick={me.props.onListClick} key={key} name={item}>{item}</li>)
	}

	render() {


		var listings = this.props.data
			,me = this
		;

		return (
			<ul>
				{listings.map(me.buildItem.bind(me))}
			</ul>
		)
	}
}

export default List;