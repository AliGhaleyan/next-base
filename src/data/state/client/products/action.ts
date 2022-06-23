import {RemoteEntityState} from "../../remote-entity";
import {Product} from "../../../model/product.model";

export namespace ProductsAction {
    export const GET_ALL = "products/get-all";
    export const GET_ALL_RESULT = "products/get-all/result";

    export interface GetAll {
        type: typeof GET_ALL
    }

    export interface GetAllResult extends RemoteEntityState<Product[]> {
        type: typeof GET_ALL_RESULT
    }

    export type Types = GetAll | GetAllResult;
}