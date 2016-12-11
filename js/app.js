function start_test() {
	debugger;
	ReactDOM.render(<Test/>, document.getElementById('content'));
}

var Test = React.createClass({
	render: function() {
		return <span>Hello World!</span>;
	}
});