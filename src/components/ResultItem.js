import React from "react";

export default function ResultItem(props) {
    console.log(props)
    return (
        <div>
            <a href={ props.item.url }>
                <span className="bp3-text-large">{ props.item.title }</span>
                <span className="bp3-text-small bp3-text-muted bp3-text-overflow-ellipsis">{props.item.snippet} hello </span>
            </a>
        </div>
    );
}