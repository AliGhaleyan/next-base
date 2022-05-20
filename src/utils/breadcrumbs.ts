import {container} from "tsyringe";
import BreadcrumbsManager from "../data/utils/breadcrumbs-manager";


export function registerBreadCrumbs() {
    const {register} = container.resolve(BreadcrumbsManager);
    // const defaultLocale = process.env.DEFAULT_LOCALE;

    register('home', async ({push}) => push({title: 'خانه', url: '/'}));

    register("products", async ({push, setParent}) => {
        setParent({id: "home"});
        push({title: "محصولات", url: "/product"});
    });

    register("product-slug", async ({push, setParent}) => {
        setParent({id: "products"});
        push({title: "لپتاپ لنوو", url: "/product/slug"});
    });
}
