import { singleton } from "tsyringe";
import { DecodedToken, Token } from "../model/token.model";
import { User } from "../model/user.model";
import jwtDecode from "jwt-decode";
import CookieStore from "./cookie-store";

@singleton()
export default class TokenRepository {
    private cookies: CookieStore;
    private decoded?: DecodedToken;
    private token?: string;

    constructor(cookieStore: CookieStore) {
        this.cookies = cookieStore;
    }

    readonly store = (token: Token): void => {
        this.token = token.access_token;
        const domain = process.env.MAIN_DOMAIN;
        const options: Record<string, string> = {};
        if (domain)
            options['domain'] = domain;

        this.cookies.set(this.getKey(), token.access_token, options);
    };

    readonly get = (): User | null => {
        let token = this.getToken();
        if (!token) return null;

        // We not check public key in client side
        this.decoded = jwtDecode(token);

        return { ...this.decoded } as User;
    };

    readonly expiredToken = (): boolean => this.decoded ? this.decoded.exp <= (Math.floor(Date.now() / 1000) + (24 * 60 * 60)) : false;

    readonly getToken = (): string | null => (this.token as string) ?? this.cookies.get(this.getKey());

    readonly getKey = (): string => "token";
}
