export interface RemoteEntityState<T=unknown> {
    data?: T,
    message?: string,
    hasError: boolean,
}