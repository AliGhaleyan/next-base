export default class BaseException extends Error {
    constructor(msg: string, errorPrototype: any = BaseException.prototype) {
        super(msg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, errorPrototype);
    }
}
