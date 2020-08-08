import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Elevation, Intent } from "@blueprintjs/core";
import { connect } from "react-redux";
import { getAllArticles } from "../actions/articles";
import { setArticle, deleteArticle } from "../actions/article";

class Article extends Component {
    handleEditClick(article) {
        this.props.setArticle(article)
    }

    async handleDeleteClick(article) {
        await this.props.deleteArticle(article)

        if (this.props.article.id === article.id) {
            await this.props.setArticle({})
        }

        this.props.getAllArticles();
    }

    render() {
        return (
            <Card interactive={ false } elevation={ Elevation.TWO } className={ "m-0-5" } >
                <div className="d-flex-row">
                    <div className="d-flex-column">
                        <h3 style={ { marginTop: "0", marginBottom: "0" } }>{ this.props.article.title }</h3>
                        <div className="d-flex-column my-1">
                            <span>
                                <strong>Created: </strong>
                                <span>{ this.props.article.created_at }</span>
                            </span>
                            <span>
                                <strong>Last updated: </strong>
                                <span>{ this.props.article.updated_at }</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="d-flex-row">
                    <Link to={ "/articles/" + this.props.article.id + "/edit" } onClick={ () => { this.handleEditClick(this.props.article); } }>
                        <Button intent={ Intent.PRIMARY } icon={ "edit" } >Edit</Button>
                    </Link>
                    <Button className="ml-auto" intent={ Intent.DANGER } icon={ "trash" } onClick={ () => { this.handleDeleteClick(this.props.article) } }>Delete</Button>
                </div>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: state.article,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllArticles: () => dispatch(getAllArticles()),
        setArticle: article => dispatch(setArticle(article)),
        deleteArticle: article => dispatch(deleteArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);