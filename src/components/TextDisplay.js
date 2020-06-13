import React, { Component } from "react";
import ArticleEditor from "./ArticleEditor";
import { Button } from "@blueprintjs/core";

class TextDisplay extends Component {
    render() {
        return (
            <div id="content" class="d-flex-column">
                <div class="d-flex-row flex-shrink-0">
                    <h1 class="ml-1 mt-1 mb-auto">Edit article</h1>
                    <Button className={"ml-auto mt-1 mr-1 bp3-intent-primary"} icon="floppy-disk" text="Save" />
                </div>
                <div class="d-flex-row flex-grow-1 p-1">
                    <ArticleEditor></ArticleEditor>
                </div>
            </div>
        );
    }
}

export default TextDisplay;