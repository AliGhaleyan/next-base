import Cookies from "js-cookie";
import {singleton} from "tsyringe";

@singleton()
export default class CookieStore {
    readonly set = (name: string, value: any, options: any) => {
        Cookies.set(name, value, options);
    };

    readonly get = (name: string) => {
        return Cookies.get(name);
    };

    readonly remove = (name: string) => {
        Cookies.remove(name);
    };
}
