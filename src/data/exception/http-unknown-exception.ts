import BaseException from "./base-exception";

export default class HttpUnknownException extends BaseException {
    constructor(message: string) {
        super(message, HttpUnknownException.prototype);
    }
}
