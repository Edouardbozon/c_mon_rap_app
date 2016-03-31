export class ProfileService {
    constructor($http, Facebook, $q){
        'ngInject';

        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;

    }

    getUserPhotos(){
        const defer = this.$q.defer();
        const url = '/me/photos';
        this.Facebook.api(url, (response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

}
