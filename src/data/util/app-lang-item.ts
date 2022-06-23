export default class AppLangItem {

    /**
     * the language which we are planning to teach our users
     * our source has been written in this language
     */
    public readonly sourceLang: string;

    /**
     * the user's language
     * our translations have been written in this language
     */
    public readonly destinationLang: string;

    constructor(lang: string){
        [this.sourceLang, this.destinationLang] = lang.toLowerCase().trim().split('-');
    }

    public getLang = (): string => {
        if(this.destinationLang != null)
            return `${this.sourceLang}-${this.destinationLang.toUpperCase()}`;
        return this.sourceLang;
    };
}
