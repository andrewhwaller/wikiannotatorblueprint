import React from "react";

export default function ResultItem(props) {
    return (
        <li className="bp3-menu-item result-item">
            <a href={ props.item.url } className="">
                <span className="bp3-text-large">{ props.item.title }</span>
                <span className="bp3-text-small bp3-text-muted bp3-text-overflow-ellipsis result-snippet" dangerouslySetInnerHTML={{ __html: props.item.subtitle }}></span>
            </a>
        </li>
    );
}