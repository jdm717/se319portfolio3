var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var FormGroup = ReactBootstrap.FormGroup;
var InputGroup = ReactBootstrap.InputGroup;
var FormControl = ReactBootstrap.FormControl;
var Glyphicon = ReactBootstrap.Glyphicon;
var Row = ReactBootstrap.Row;

function setup_filesystem(items) {
	ReactDOM.render(<FileSystem data={items}/>, document.getElementById("content"));
}

var FileSystem = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render: function() {
		var items = [];

		for(var key in this.props.data) {
			items.push(<FileNode item={this.props.data[key]} key={key}/>);
		}

		return (
			<div style={{margin: "20.5px 0 0 0 "}}>
				{items}
			</div>
		);
	}
});

var FileNode = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			hovered: false
		};
	},
	render: function() {
		var className = "";

		if(this.state.hovered) {
			className = "hovered";
		}

		return (
			<Row
				onMouseEnter={this._handleItemHover}
				onMouseLeave={this._handleItemHover}
				className={className}
			>
				<Glyphicon glyph="folder-close"/>
				<a href="#">{this.props.item.name}</a>
			</Row>
		);
	},
	_handleItemHover: function(e) {
		this.setState({
			hovered: !this.state.hovered
		});
	}
});





