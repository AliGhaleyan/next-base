import { singleton } from "tsyringe";
import { AppError } from "../app-error";
import BreadcrumbsItem from "./breadcrumbs-item";
import BreadcrumbsTree from "./breadcrumbs-tree";

type BreadcrumbCallback = (tree: BreadcrumbsTree, params?: any) => Promise<void>;

@singleton()
export default class BreadcrumbsManager {
    private maps: Record<string, BreadcrumbCallback> = {};

    readonly register = (id: string, callback: BreadcrumbCallback): void => {
        this.maps[id] = callback;
    };

    readonly for = async (id: string, params?: any): Promise<BreadcrumbsItem[]> => {
        const tree = new BreadcrumbsTree();
        let mapId: string | undefined = id;
        do {
            tree.setParent();
            if (!this.maps.hasOwnProperty(mapId))
                throw new AppError.Exception(`Breadcrumb ${mapId} is not registered`);
            await this.maps[mapId](tree, params);
            mapId = tree.getParent()?.id;
            params = tree.getParent()?.params;
        } while (mapId != null);

        return tree.items.reverse();
    }
}
