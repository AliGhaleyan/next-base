import {singleton} from "tsyringe";
import AppLangItem from "./app-lang-item";

@singleton()
export class AppLang {

    /**
     * All real supported locales in app. don't use 'fake' locale here.
     */
    public supportedLocales: AppLangItem[];

    private currentLang?: AppLangItem;

    public constructor() {
        this.supportedLocales = (process.env.SUPPORTED_LOCALES ?? "")
            .split(',')
            .map(l => new AppLangItem(l));

        if (process.env.DEFAULT_LOCALE)
            this.currentLang = new AppLangItem(process.env.DEFAULT_LOCALE);
    }

    public getLang = (): string | undefined => {
        return this.currentLang?.getLang();
    };

    public setLang = (lang: string): void => {
        this.currentLang = new AppLangItem(lang);
    };

    public getSourceLang = (): string | undefined => {
        return this.currentLang?.sourceLang;
    };

    public getDestinationLang = (): string | undefined => {
        return this.currentLang?.destinationLang;
    };

    public detectLocaleFromURL = (url: string): string | null => {
        const routeSegments = url.split('/');

        if (routeSegments.length < 2)
            return null;

        const locale = routeSegments[1];

        if ((process.env.SUPPORTED_LOCALES ?? "").includes(locale))
            return locale;

        return null;
    }
}
