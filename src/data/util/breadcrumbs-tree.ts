import BreadcrumbsItem from "./breadcrumbs-item"

export default class BreadcrumbsTree {

    readonly items: BreadcrumbsItem[] = [];
    private parent?: { id: string, params?: any } | null = null;

    readonly push = (item: BreadcrumbsItem): void => {
        this.items.push({
            ...item,
            url: item.url ? (item.locale ? `/${item.locale}${item.url}` : item.url) : undefined
        });
    };

    readonly setParent = (parent?: { id: string, params?: any } | undefined): void => {
        this.parent = parent;
    };

    readonly getParent = (): { id: string, params?: any } | null | undefined => {
        return this.parent;
    }
}
