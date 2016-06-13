angular.module('app').constant('CONFIG', {
    /**
     * CLIENT_ID przypisany do aplikacji angularowej przez /oauth/applications
     */
    CLIENT_ID: '3d05ea81a51dbf0143f53936832a5728c341d32d080faed9499196872abe703d',
    ANGULAR_URL: 'http://localhost:5000',
    RAILS_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:3000/api/v1/',
    OAUTH_URL: 'http://localhost:3000/oauth/',
    LOGOUT_URL: 'http://localhost:3000/users/sign_out'
});
