import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Elevation, Intent } from "@blueprintjs/core";
import { connect } from "react-redux";
import { getAllArticles } from "../actions/articles";
import { getArticle, setArticle, deleteArticle } from "../actions/article";

class Article extends Component {
    handleEditClick(id) {
        this.props.getArticle(id)
    }

    async handleDeleteClick(id) {
        await this.props.deleteArticle(id)

        if (this.props.article.id === id) {
            this.props.setArticle({})
        }

        this.props.getAllArticles();
    }

    render() {
        return (
            <Card interactive={ false } elevation={ Elevation.TWO } className={ "m-0-5" } >
                <div className="d-flex-row">
                    <div className="d-flex-column">
                        <h3 style={ { marginTop: "0", marginBottom: "0" } }>{ this.props.mappedArticle.title }</h3>
                        <div className="d-flex-column my-1">
                            <span>
                                <strong>Created: </strong>
                                <span>{ this.props.mappedArticle.created_at.split('T')[0] }</span>
                            </span>
                            <span>
                                <strong>Last updated: </strong>
                                <span>{ this.props.mappedArticle.updated_at.split('T')[0] }</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="d-flex-row">
                    <Link to={ "/articles/" + this.props.mappedArticle.id + "/edit" } onClick={ () => { this.handleEditClick(this.props.mappedArticle.id); } }>
                        <Button intent={ Intent.PRIMARY } icon={ "edit" } >Edit</Button>
                    </Link>
                    <Button className="ml-auto" intent={ Intent.DANGER } icon={ "trash" } onClick={ () => { this.handleDeleteClick(this.props.mappedArticle.id) } }>Delete</Button>
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
        getArticle: article => dispatch(getArticle(article)),
        deleteArticle: article => dispatch(deleteArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);