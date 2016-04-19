export class DashboardService {
    constructor($http, Facebook, $q){
        'ngInject';

        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;

    }

    getUserPosts(){
        const defer = this.$q.defer();
        const url = 'me?fields=posts{comments,likes,created_time,attachments{description,title}}';
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
