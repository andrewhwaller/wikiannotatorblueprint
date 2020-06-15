import React, { Component } from "react";
import ArticleEditor from "./ArticleEditor";
import { Button, Colors, Spinner } from "@blueprintjs/core";
import { connect } from "react-redux";

class TextDisplay extends Component {
    render() {
        return (
            <div id="content" className={"d-flex-column"}>
                {this.props.articleLoading ? 
                    <div className={"d-flex-row h-100"}>
                        <div className={"mx-auto mb-auto"} style={{marginTop: "15rem"}}>
                            <Spinner className={""} intent={"primary"} size={150} />
                            <h2 class="bp3-text-muted">Loading article...</h2>
                        </div>
                    </div> 
                :
                    <div className="d-flex-column h-100">
                        <div className={"d-flex-row flex-shrink-0"}>
                            <h1 className={"ml-1 mt-1 mb-auto"}>Edit article</h1>
                            <div className={"ml-auto mt-1 mr-1"}>
                                <Button className={this.props.articleDirty ? `bp3-intent-danger` : `bp3-intent-primary`} icon="floppy-disk" text="Save" />
                            </div>
                        </div>
                        <div className={"d-flex-row flex-grow-1 p-1"} style={{overflow: "hidden"}}>
                            <ArticleEditor></ArticleEditor>
                        </div> 
                    </div>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleDirty: state.articleDirty,
        articleLoading: state.articleLoading
    }
}

export default connect(mapStateToProps)(TextDisplay);