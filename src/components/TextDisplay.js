import React, { Component } from "react";
import ArticleEditor from "./ArticleEditor";

class TextDisplay extends Component {
    render() {
        return (
            <div id="content">
                <h1>Article</h1>
                <ArticleEditor></ArticleEditor>
            </div>
        );
    }
}

export default TextDisplay;