import React from 'react';
import BreadcrumbsItem from "../../data/util/breadcrumbs-item";
import AppLink from "./AppLink";

interface Props {
    breadcrumbs: BreadcrumbsItem[]
}

export const Breadcrumbs = ({breadcrumbs}: Props) => {
    if (breadcrumbs == null)
        return null;

    return (
        <nav aria-label="breadcrumbs">
            <ol className="breadcrumb small text-muted mx-3">
                {breadcrumbs.map((x, i) =>
                    i == breadcrumbs.length - 1 || !x.url ?
                        <li className="active" key={i}>
                            <span>{x.title}</span>
                        </li> // active
                        : // normal
                        <li key={i}>
                            <AppLink href={x.url} hasLocale={false}>
                                <a title={x.webTitle != null ? x.webTitle : x.title}>{x.title}</a>
                            </AppLink>
                            <span className="mx-1">/</span>
                        </li>)}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
