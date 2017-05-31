import { UserProfileQuery } from 'sp-pnp-js/lib/sharepoint/userprofiles';

import * as PNP from 'sp-pnp-js';

export var UserProfileManager: UserProfileQuery = undefined;

export function initializeDev(userProfieManager: UserProfileQuery = PNP.sp.profiles): void { 
    UserProfileManager = userProfieManager;
}
