import axios, {AxiosInstance} from "axios";
import {injectable} from "tsyringe";
import HttpUnknownError from "../exception/http-unknown-exception";

@injectable()
export default class ServiceConnector {
    public axios: AxiosInstance;

    constructor() {
        this.axios = axios.create();
        this.axios.interceptors.response.use(response => response, this.errorInterceptor());
    }

    getBaseUrl = (): string => {
        return process.env.API_URL as string;
    };

    readonly getHeaders = (options: Record<string, any>): Record<string, any> => {
        return options;
    };

    readonly request = <T>(path: string, options: object | null = {}, cancellable: boolean = true): Promise<T> => {
        const url = this.getBaseUrl() + "/" + path;
        const source = axios.CancelToken.source();
        options = options ?? {};
        return this.axios.request({
            url,
            cancelToken: source.token,
            ...this.getHeaders(options)
        }).then(x => x?.data);
    };

    errorInterceptor(): (error: any) => Promise<any> {
        return async (error): Promise<any> => {
            if (typeof error.response === 'undefined') {
                throw new HttpUnknownError('A network error occurred. This could be a CORS issue or a dropped internet connection. It is not possible for us to know.');
            }

            return Promise.reject(error);
        };
    };
}
