import React, { Component } from "react";
import { Alert, Intent, Spinner } from "@blueprintjs/core";
import { connect } from "react-redux";
import Article from "./Article"
import { getAllArticles } from "../actions/articles";
import { clearAlert } from "../actions/alert";
import { setArticle, deleteArticle } from "../actions/article";

class ArticleList extends Component {
    componentDidMount() {
        this.props.getAllArticles();
    }

    handleEditClick(article) {
        this.props.setArticle(article);
    }

    async handleDeleteClick(article) {
        await this.props.deleteArticle(article);
        await this.props.setArticle([]);
        this.props.getAllArticles();
    }

    renderSpinnerMessage() {
        let spinnerMessage;

        if (this.props.articleLoading) {
            spinnerMessage = "Articles loading...";
        } else if (this.props.articleDeleting) {
            spinnerMessage = "Deleting article...";
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
                { this.props.articleLoading || this.props.articleDeleting ?
                    <div className={"d-flex-row h-100"}>
                        <div className={"mx-auto mb-auto"} style={{marginTop: "15rem"}}>
                            <Spinner className={ "" } intent={ "primary" } size={ 150 } />
                            <h2 className="bp3-text-muted">
                                { this.renderSpinnerMessage() }
                            </h2>
                        </div>
                    </div> 
                :
                    <div className="d-flex-column h-100">
                        <div className={"d-flex-row flex-shrink-0"}>
                            <h1 className={"ml-1 mt-1 mb-auto"}>Saved articles</h1>
                        </div>
                        <div className={ "d-flex-column flex-grow-1 px-5 mt-1 pb-1" } style={ { overflow: "auto" } }>
                            <div className="article-grid">
                                { this.props.articles.map(article => (
                                    <Article mappedArticle={ article } key={ article.id }></Article>
                                )) }
                            </div>
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
        articles: state.articles,
        articleLoading: state.articleLoading,
        articleDeleting: state.articleDeleting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllArticles: () => dispatch(getAllArticles()),
        setArticle: article => dispatch(setArticle(article)),
        deleteArticle: article => dispatch(deleteArticle(article)),
        clearAlert: () => dispatch(clearAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);