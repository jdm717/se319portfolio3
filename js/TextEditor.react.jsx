var ContentState = Draft.ContentState;
var EditorState = Draft.EditorState;
var Editor = Draft.Editor;

class TextEditor extends React.Component {
	constructor(props) {
		super(props);

		if(props.text) {
			var contentState = ContentState.createFromText(props.text);
			this.state = {editorState: EditorState.createWithContent(contentState)};
		}
		else {
			this.state = {editorState: EditorState.createEmpty()};
		}
		this.onChange = (editorState) => {
			textContent = editorState.getCurrentContent().getPlainText();
			this.setState({editorState});
			update();
		}
	}

	render() {
		return (
			<Editor 
				editorState={this.state.editorState} 
				onChange={this.onChange}
				placeholder={"Start typing..."}
				spellCheck={true}
			/>
		);
	}
};