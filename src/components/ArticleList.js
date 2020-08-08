import React, { Component } from "react";
import { Alert, Button, Card, Elevation, Intent, Spinner } from "@blueprintjs/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllArticles } from "../actions/articles";
import { setArticle, deleteArticle } from "../actions/article";

class ArticleList extends Component {

    componentDidMount() {
        this.props.getAllArticles();
    }

    handleEditClick(article) {
        this.props.setArticle(article)
    }

    async handleDeleteClick(article) {
        await this.props.deleteArticle(article)
        this.props.getAllArticles();
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
                { this.props.articleLoading ?
                    <div className={"d-flex-row h-100"}>
                        <div className={"mx-auto mb-auto"} style={{marginTop: "15rem"}}>
                            <Spinner className={""} intent={"primary"} size={150} />
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
                                    <div key={ article.id }>
                                        <Card interactive={ false } elevation={ Elevation.TWO } className={ "m-0-5" } >
                                            <div className="d-flex-row">
                                                <div className="d-flex-column">
                                                    <h3 style={ { marginTop: "0", marginBottom: "0" } }>{ article.title }</h3>
                                                    <div className="d-flex-column my-1">
                                                        <span><strong>Created: </strong><span>{ article.created_at.split('T')[0] }</span></span>
                                                        <span><strong>Last updated: </strong><span>{ article.updated_at.split('T')[0] }</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex-row">
                                                <Link to={ "/articles/" + article.id + "/edit" } onClick={ () => { this.handleEditClick(article); } }>
                                                    <Button intent={ Intent.PRIMARY } icon={ "edit" } >Edit</Button>
                                                </Link>
                                                <Button className="ml-auto" intent={ Intent.DANGER } icon={ "trash" } onClick={ () => { this.handleDeleteClick(article) } }>Delete</Button>
                                            </div>
                                        </Card>
                                    </div>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllArticles: () => dispatch(getAllArticles()),
        setArticle: article => dispatch(setArticle(article)),
        deleteArticle: article => dispatch(deleteArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);