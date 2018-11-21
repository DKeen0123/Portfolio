# Portfolio

To start this service in development:

1. ```cd server```
2. ```npm install```
3. create a database on mlab, and create a user for it. store the URI within a file within the config/environments folder called 'dev.js'.
example:
```
module.exports = {
  mongoURI: 'mongodb://<dbuser>:<dbpassword>@d70d404.mlab.com:1449332/portfolio-dev'
}
```
4. create a project on  https://console.developers.google.com and enable google oath api (actually the google+ api) and then create Oath client id credentials (consent screen setup). Grab the client ID and secret, and store them within the dev.js file:
```
module.exports = {
  mongoURI: 'mongodb://<dbuser>:<dbpassword>@d70d404.mlab.com:1449332/portfolio-dev',
  googleClientID: 'doienrj34re9df8uewhrne_Sndeiwjk',
  googleClientSecret: 'fkdl_*EHJW'
}
```
this will enable oAuth.

5. Finally, run: ```npm run server ``` to boot up the backend.
