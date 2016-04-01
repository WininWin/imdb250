var movieControllers=angular.module("movieControllers",[]);movieControllers.controller("MovieListCtrl",["$scope","$http",function($scope,$http){$http.get("./data/imdb250.json").success(function(data){$scope.movies=data}),$scope.movetodetails=function(rank){window.location="#/movies/"+rank},$scope.movetogallery=function(genere){window.location="#/movies/gallery/all"},$scope.orderProp="rank"}]),movieControllers.controller("MovieDetailCtrl",["$scope","$routeParams","$http",function($scope,$routeParams,$http){$scope.movieId=$routeParams.movieId,$http.get("./data/imdb250.json").success(function(data){$scope.movie=data[$scope.movieId-1]}),$scope.move_prev=function(rank){var prev_rank=rank-1;1>=prev_rank&&(prev_rank=1),window.location="#/movies/"+prev_rank},$scope.move_next=function(rank){var next_rank=rank+1;next_rank>=250&&(next_rank=250),window.location="#/movies/"+next_rank},$scope.movetogallery=function(genere){window.location="#/movies/gallery/all"}}]),movieControllers.controller("MovieGalleryCtrl",["$scope","$routeParams","$http",function($scope,$routeParams,$http){$scope.genre=$routeParams.genre,$http.get("./data/imdb250.json").success(function(data){if("all"==$scope.genre)$scope.movies=data;else{var genre_filter=[];for(i=0;i<data.length;i++)for(j=0;j<data[i].genre.length;j++)data[i].genre[j]==$scope.genre&&genre_filter.push(data[i]);$scope.movies=genre_filter}}),$scope.movetogallery=function(){window.location="#/movies/gallery/all"}}]);