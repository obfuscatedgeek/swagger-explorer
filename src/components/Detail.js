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

				<tbody>

				{arrKeys.map((k, index) => {
					return (<tr key={index}><td><b>{k}</b></td><td>{item[k]}</td></tr>)
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
			,produces = rowData.produces || []
			,responses = rowData.responses || {}
			,responseKey = Object.keys(responses)
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

		return (

			<div className={className} key={key}>
				<h5>/{item}</h5>
				<h6>{rowData.summary}</h6>
				<p><b>description: </b>{rowData.description}</p>

				<div className="row">
					<div className="columns medium-1">&nbsp;</div>
					<div className="columns medium-11">
						<div className="label secondary">Parameters:</div>
						{parameters.map(me.buildParameters.bind(me))}
					</div>
				</div>


				<div className="row">
					<div className="columns medium-1">&nbsp;</div>
					<div className="columns medium-11">
						<div className="label secondary">Responses:</div>
						{responseKey.map( (rk, idx) => {
							return <p key={idx}><b>{rk}: </b>{responses[rk].description}</p>
						})}
					</div>
				</div>
			</div>
		)
	}

// <p>
// <b>produces: </b>{produces.map( (prod, idx) => {
// 	return (<span><button key={idx} className="button small">{prod}</button>&nbsp;</span>)
// })}
// </p>

	render() {

		var me = this
			,jsonData = me.props.data
			,keys = Object.keys(jsonData)
		;

		return (
			<div>
				{keys.map(me.buildRow.bind(me))}
			</div>
		)
	}
}

export default Detail;