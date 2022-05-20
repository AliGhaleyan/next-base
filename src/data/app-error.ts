import { AxiosError } from "axios";

export namespace AppError {
    export class Exception {
        constructor(public error: any) { }
    }

    export class NetworkConnection extends Exception {}
    export class NotFound extends Exception {}
    export class ServerProblem extends Exception {}
	export class Unauthorized extends Exception {}
    export class Unprocessable extends Exception {}

    export function fromAxiosError(e: AxiosError): AppError.Exception {
        if (typeof e.response == 'undefined')
            return new AppError.NetworkConnection(e);
    
        if (e.response.status == 404)
            return new AppError.NotFound(e);
    
        if (e.response.status >= 500)
            return new AppError.ServerProblem(e);
    
        return new AppError.Exception(e);
    }
}
