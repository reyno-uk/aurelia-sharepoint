import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) : Promise<any>{
  
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  return aurelia.start();
  
}