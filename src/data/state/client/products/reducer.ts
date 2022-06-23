import {RemoteEntityState} from "../../remote-entity";
import {Product} from "../../../model/product.model";
import produce from "immer";
import {ProductsAction} from "./action";

export type ProductsState = RemoteEntityState<Product[]>;

const initialState: ProductsState = {
    hasError: false,
    data: [
        {
            id: 1,
            title: "لپ تاپ Levnovo Legion 5",
            subtitle: "لپ تاپ گیمینگ لنوو",
            price: 34000
        },
        {
            id: 2,
            title: "لپ تاپ Levnovo Legion 5",
            subtitle: "لپ تاپ گیمینگ لنوو",
            price: 34000
        }
    ]
};

export const productsReducer = produce(handler, initialState);

function handler(draft: ProductsState, action: ProductsAction.Types) {
    //
}