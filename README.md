# aurelia-sharepoint

##Getting Started
Make sure you have [http://nodejs.org](nodejs) and [https://github.com/nodejs/node-gyp](node-gyp) installed.  The instructions for node-gyp are a little long-winded, but when followed they seem to work ok.

Clone the repository to your computer.

To install the npm and jspm packages, run the following in the `web` directory:
```cmd
npm i && jspm install
```
Now, to build and bundle the Aurelia app and copy the resources into the modules folders in the add-in project, run the following in the `web` directory:
```cmd
gulp export
```
Open the addin project in Visual Studio and set the site url for the project to your development SharePoint site.  You can now right-click/deploy the project. 

*
**Note**: it's also a good idea to change the ProductID in the appmanifest.xml file to a new Guid
*