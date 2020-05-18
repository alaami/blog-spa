import { UserManager, WebStorageStateStore, User } from "oidc-client";
import { CookieStorage } from 'cookie-storage';
export default class AuthService {
    private userManager: UserManager;

    constructor() {
        const cookieStorage = new CookieStorage({
            expires: new Date(Date.now() + 2000),
        }
        );
         // Log.logger = console;
          //Log.level = Log.DEBUG;
        const settings: {}  = {
            // To use localStorage 
            //userStore: new WebStorageStateStore({ store: window.localStorage }),
            userStore: new WebStorageStateStore({ store: cookieStorage }),
            authority: process.env.VUE_APP_AUTH0_DOMAIN,
            client_id: process.env.VUE_APP_CLIENT_ID,
            redirect_uri: process.env.VUE_APP_REDIRECT_URI,
            automaticSilentRenew: process.env.VUE_APP_AUTOMATIC_SILENT_RENEW,
            silent_redirect_uri: process.env.VUE_APP_SILENT_REDIRECT_URI,
            response_type: process.env.VUE_APP_RESPONSE_TYPE,
            scope: process.env.VUE_APP_SCOPE,
            post_logout_redirect_uri: process.env.VUE_APP_POST_LOGOUT_REDIRECT_URI,
            filterProtocolClaims: process.env.VUE_APP_FILTER_PROTOCOL_CLAIMS,
            response_mode: 'query',
            extraQueryParams: {audience: "http://localhost:8000/api"},
            metadata: {
                issuer: process.env.VUE_APP_AUTH0_DOMAIN + "/",
                authorization_endpoint: process.env.VUE_APP_AUTH0_DOMAIN + "/authorize",
                userinfo_endpoint: process.env.VUE_APP_AUTH0_DOMAIN + "/userinfo",
                end_session_endpoint: process.env.VUE_APP_AUTH0_DOMAIN + "/v2/logout",
                jwks_uri: process.env.VUE_APP_AUTH0_DOMAIN + "/.well-known/jwks.json",
            }
        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
       console.log(process.env.VUE_APP_API_MANAGER_URL);
       return this.userManager.signinRedirect();
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();      
    }
    
    public async isLoggedIn(): Promise<boolean> {
        const user: User | null = await this.getUser();
        return (user !== null && !user.expired);
    }
    public getAccessToken() {
        return this.userManager.getUser().then((data: any) => {
            return data.access_token;
        });
        
    }

    public logoutcustom() {      
        document.cookie = process.env.VUE_APP_OIDC_KEY+'=; Max-Age=-99999999;';
        window.location.href = '/';    
    }

}