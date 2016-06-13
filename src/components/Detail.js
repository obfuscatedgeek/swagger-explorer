/**
 * Author: Ejaz Bawasa
 * email: bawasa.ejaz@gmail.com
 * Date: 13/06/16 on 3:53 AM
 */


import React, {Component} from 'react';

class Detail extends Component {

	buildParameters(item, key) {

		var me = this
			,arrKeys = Object.keys(item)
		;

		return (
			<table key={key}>
				<thead>
					<tr>
						<th colSpan="2">Parameters</th>
					</tr>
				</thead>
				<tbody>

				{arrKeys.map(k => {
					return (<tr><td><b>{k}</b></td><td>{item[k]}</td></tr>)
				})}
				</tbody>
			</table>
		)

	}


	buildRow(item, key) {

		var me = this
			,jsonData = me.props.data
			,rowData = jsonData[item]
			,parameters = rowData.parameters || []
			,className = 'callout secondary'
		;

		switch(item) {
			case 'get':
				className = 'callout success';
				break;
			case 'put':
				className = 'callout primary';
				break;
			case 'post':
				className = 'callout alert';
				break;
			case 'delete':
				className = 'callout warning';
				break;

		}

		console.log(rowData);



		return (

			<div className={className} key={key}>
				<h5>/{item}</h5>
				<p><b>description: </b>{rowData.description}</p>
				<div className="row">
					<div className="columns medium-1">&nbsp;</div>
					<div className="columns medium-11">
						{parameters.map(me.buildParameters.bind(me))}
					</div>
				</div>
			</div>
		)
	}


	render() {

		var me = this
			,jsonData = me.props.data
			,keys = Object.keys(jsonData)
		;

		// console.log(keys);

		return (
			<div>
				{keys.map(me.buildRow.bind(me))}
			</div>
		)
	}
}

export default Detail;