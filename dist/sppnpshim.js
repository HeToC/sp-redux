import * as PNP from 'sp-pnp-js';
export var UserProfileManager = undefined;
export function initializeDev(userProfieManager = PNP.sp.profiles) {
    UserProfileManager = userProfieManager;
}
//# sourceMappingURL=sppnpshim.js.map