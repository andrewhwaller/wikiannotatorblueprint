import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { connect } from "react-redux";
import { setDirtyTrue } from "../actions/article"
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

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
            comments: '',
            dirty: false
		}

		this.rteChange = this.rteChange.bind(this);
	}

	rteChange = (content, delta, source, editor) => {
        this.props.setDirtyTrue(true)
	}

	render() {
	    return (
	      <div className={"editor-container d-flex-column w-100 h-100"}>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
			value={this.props.article || ""}/>
	      </div>
	    );
	}

}

const mapStateToProps = state => {
    return {
		dirty: state.dirty,
		article: state.article.extract
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDirtyTrue: value => dispatch(setDirtyTrue(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);