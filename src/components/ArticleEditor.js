import React, { Component } from "react";
import ReactQuill from "react-quill";
import { connect } from "react-redux";
import { setDirtyTrue } from "../actions/article"
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { setDelta } from "../actions/unsavedDelta";

class ArticleEditor extends Component {
	constructor(props) {
		super(props);
		this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};

		this.formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline',
		    'list', 'bullet',
		    'align',
		    'color', 'background'
	  	];

	  	this.state = {
            unsavedDelta: {},
            dirty: false
		}

		this.rteChange = this.rteChange.bind(this);
	}

    rteChange = (content, delta, source, editor) => {
        this.props.setDirtyTrue(true);
        let unsavedDelta = this.props.article;
        unsavedDelta.extract = content;
        this.props.setDelta(unsavedDelta);
    }

	render() {
	    return (
	      <div className={"editor-container d-flex-column w-100 h-100"}>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
				defaultValue={this.props.article.extract || ""}
			/>
	      </div>
	    );
	}

}

const mapStateToProps = state => {
    return {
		articleDirty: state.articleDirty,
        article: state.article,
        unsavedDelta: state.unsavedDelta
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDirtyTrue: value => dispatch(setDirtyTrue(value)),
        setDelta: value => dispatch(setDelta(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);