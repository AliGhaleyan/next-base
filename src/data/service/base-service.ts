import ServiceConnector from "../connector/service.connector";

export default class BaseService {
    constructor(private connector: ServiceConnector) {
    }

    protected readonly get = <T>(path: string, cancellable: boolean = true): Promise<T> => {
        return this.connector.request<T>(path, null, cancellable);
    };

    readonly post = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.connector.request<T>(path, {data, method: 'POST'}, cancellable);
    };

    readonly delete = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.connector.request(path, {data, method: 'DELETE'}, cancellable);
    };

    readonly put = <T>(path: string, data: any = null, cancellable: boolean = true): Promise<T> => {
        return this.connector.request<T>(path, {data, method: 'PUT'}, cancellable);
    };

}
