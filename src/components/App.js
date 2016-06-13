/**
 * Author: Ejaz Bawasa
 * email: bawasa.ejaz@gmail.com
 * Date: 13/06/16 on 3:13 AM
 */

import React from 'react';
import List from './List';
import Detail from './Detail';

import Ajax from 'superagent';

import SelectBox from './SelectBox';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);

		let me = this;

		me.onSelectChange = me.onSelectChange.bind(me);
		me.onListClick = me.onListClick.bind(me);


		me.state = {
			selectedApi : ''
			,listKeys: []
			,listObject: []
			,listDetail: []
		};
	}

	componentDidMount() {

		let me = this
			,URL = 'https://api.apis.guru/v2/list.json'
		;

		Ajax.get(URL)
			.end((req, res) => {
				let jsonObj = JSON.parse(res.text);
				me.setState({keys: Object.keys(jsonObj), all: jsonObj})
			})
	}

	onSelectChange(e) {

		let me = this
			,selValue = e.target.value
			,selJson = me.state.all[selValue]
			,arrSelKeys = Object.keys(selJson.versions)
			,selUrl = selJson.versions[arrSelKeys[0]].swaggerUrl
		;

		Ajax.get(selUrl)
			.end((req, res) => {
				let jsonObj = JSON.parse(res.text);
				me.setState(
					{
						listKeys: Object.keys(jsonObj.paths)
						, listObject: jsonObj
						, listDetail: []
					})
			});
	}

	onListClick(e) {

		let me = this
			,val = e.currentTarget.getAttribute('name')
		;

		document.getElementsByClassName('active')[0] ? document.getElementsByClassName('active')[0].className = '' : '';

		e.currentTarget.className += ' active';

		me.setState({listDetail: this.state.listObject.paths[val]});

		window.scrollTo(0,0);
	}


	render() {

		let me = this;

		return (
			<div>
				<div className="top-bar">
					<div class="top-bar-title">EJAZ || obfuscated.geek@gmail.com</div>
				</div>
				<div className="callout large primary">
					<div className="row text-center">
						<h1>Swagger Explorer</h1>
					</div>
				</div>
				<div className="row">
					<SelectBox data={this.state.keys} onChange={this.onSelectChange}/>
				</div>
				<div className="row">
					<div className="columns medium-4">
						<div className="panel">
						<h4>Paths</h4>
						<List data={this.state.listKeys} onListClick={me.onListClick}/>
						</div>
					</div>
					<div className="columns medium-8">
						<h4>Details</h4>
						<Detail data={me.state.listDetail}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;