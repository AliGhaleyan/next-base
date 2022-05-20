import {registerBreadCrumbs} from "./utils/breadcrumbs";

var isInitialized = false;

export const appDefaultLocale = process.env.DEFAULT_LOCALE;

/**
 * initialize the app libraries, this method is called at two different points in the app,
 * 1. on the getServerSideProps/getStaticProps for the server side use (before the components has been rendered)
 * 2. on the App component for the clientside use
 * at the begining of the script
 * @param locale
 */
export default function initApp(locale: string | null = null) {
    if (!locale && isInitialized)
        return;

    isInitialized = true;

    // this is to prevent sending request with fake locale to content-service
    // container.resolve(AppLang).setLang(locale ?? appDefaultLocale);
    registerBreadCrumbs();

    if (typeof window === 'undefined')
        return;
}
