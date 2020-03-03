import React from "react";

export default function ResultItem(props) {
    return (
        <div>
            <a className="bp3-menu-item bp3-popover-dismiss result-link" href={ props.item.url }>
                <span className="bp3-text-large">{ props.item.title }</span>
                <span className="bp3-text-small bp3-text-muted result-snippet bp3-text-overflow-ellipsis" dangerouslySetInnerHTML={ { __html: props.item.snippet } }>
                </span>
            </a>
        </div>
    );
}