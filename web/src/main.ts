import {Aurelia} from 'aurelia-framework';
import {configure as configureAurelia}  from 'utilities/configuration';

export function configure(aurelia: Aurelia) {
    
    configureAurelia(aurelia).then(() => aurelia.setRoot("apps/main"));
    
}