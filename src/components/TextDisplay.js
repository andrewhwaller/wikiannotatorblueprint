import React, { Component } from "react";
import ArticleEditor from "./ArticleEditor";
import { Alert, Button, Intent, Spinner } from "@blueprintjs/core";
import { connect } from "react-redux";
import { clearDelta } from "../actions/unsavedDelta";
import { clearAlert } from "../actions/alert";
import { beginSaveArticle, setDirtyFalse } from "../actions/article";

class TextDisplay extends Component {
    constructor() {
        super();
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleSaveClick = async () => {
        await this.props.beginSaveArticle(this.props.article);
        this.props.setDirtyFalse(false);
        this.props.clearDelta();
    }

    renderSpinnerMessage() {
        let spinnerMessage;

        if (this.props.articleLoading) {
            spinnerMessage = "Article loading...";
        } else if (this.props.articleSaving) {
            spinnerMessage = "Article saving...";
        }

        return spinnerMessage;
    }

    render() {
        return (
            <div id="content" className={ "d-flex-column" }>
                <Alert 
                    isOpen={ this.props.alert } 
                    onClose={ () => { this.props.clearAlert() } }
                    canEscapeKeyCancel={ true }
                    canOutsideClickCancel={ true }
                    icon={ this.props.alert.type === "alert-danger" ? "warning-sign" : this.props.alert.type === "alert-success" ? "tick-circle" : "issue" }
                    intent={this.props.alert.type === "alert-danger" ? Intent.DANGER : this.props.alert.type === "alert-success" ? Intent.SUCCESS : Intent.PRIMARY }
                >
                    <span>{ this.props.alert.message }</span>
                </Alert>
                { this.props.articleLoading || this.props.articleSaving ? 
                    <div className={"d-flex-row h-100"}>
                        <div className={"mx-auto mb-auto"} style={{marginTop: "15rem"}}>
                            <Spinner className={""} intent={"primary"} size={150} />
                            <h2 className="bp3-text-muted">
                                { this.renderSpinnerMessage() }
                            </h2>
                        </div>
                    </div> 
                :
                    <div className="d-flex-column h-100">
                        <div className={"d-flex-row flex-shrink-0"}>
                            <h1 className={"ml-1 mt-1 mb-auto"}>Edit article</h1>
                            <div className={"ml-auto mt-1 mr-1"}>
                                <Button onClick={ this.handleSaveClick } className={this.props.articleDirty ? `bp3-intent-danger` : `bp3-intent-primary`} icon="floppy-disk" text="Save" />
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
        alert: state.alert,
        article: state.article,
        articleDirty: state.articleDirty,
        articleLoading: state.articleLoading,
        articleSaving: state.articleSaving,
        unsavedDelta: state.unsavedDelta
    }
}

const mapDispatchToProps = dispatch => {
    return {
        beginSaveArticle: value => dispatch(beginSaveArticle(value)),
        setDirtyFalse: value => dispatch(setDirtyFalse(value)),
        clearDelta: value => dispatch(clearDelta()),
        clearAlert: () => dispatch(clearAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextDisplay);