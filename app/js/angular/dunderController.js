angular.module('dunderApp')
app.controller('dunderController', ['$scope', '$http','$sce', function ($scope, $http, $sce) {
    $scope.articles = [{
        title: "Title",
        date: "2016/05/20",
        datetime: "13:46",
        user: "Admin",
        ribbon: "Nyhet",
        ribbonColor: "#ff5148",
        ribbonTextColor: "#fff",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue arcu, tempus id pulvinar a, aliquet cursus justo. Praesent eleifend ullamcorper mollis. In ullamcorper aliquet nunc eget varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque dignissim a est in iaculis. Nullam sodales, nibh tincidunt varius laoreet, metus ante vulputate elit, nec finibus odio elit vulputate erat. Duis a sagittis libero. Sed dapibus, purus at tincidunt tincidunt, nisi eros aliquam nunc, vel rhoncus metus sapien finibus nisl. Fusce elementum magna tellus, id vestibulum ipsum elementum eget. Aliquam erat volutpat. Curabitur nec pretium metus. Proin ultrices maximus ullamcorper.\n\nNulla id nisi nec diam pellentesque lobortis. In aliquet elementum mi sit amet sodales. Curabitur hendrerit enim ut ligula euismod bibendum. Nulla ligula erat, vulputate et porta non, vulputate non sem. Praesent feugiat nec leo nec porta. Integer ac dolor sit amet nibh consequat lacinia non ullamcorper leo.',
    },{
        title: "Title",
        date: "2016/05/20",
        datetime: "13:46",
        user: "Admin",
        ribbon: "Nyhet",
        ribbonColor: "#48bbff",
        ribbonTextColor: "#fff",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue arcu, tempus id pulvinar a, aliquet cursus justo. Praesent eleifend ullamcorper mollis. In ullamcorper aliquet nunc eget varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque dignissim a est in iaculis. Nullam sodales, nibh tincidunt varius laoreet, metus ante vulputate elit, nec finibus odio elit vulputate erat. Duis a sagittis libero. Sed dapibus, purus at tincidunt tincidunt, nisi eros aliquam nunc, vel rhoncus metus sapien finibus nisl. Fusce elementum magna tellus, id vestibulum ipsum elementum eget. Aliquam erat volutpat. Curabitur nec pretium metus. Proin ultrices maximus ullamcorper.\n\nNulla id nisi nec diam pellentesque lobortis. In aliquet elementum mi sit amet sodales. Curabitur hendrerit enim ut ligula euismod bibendum. Nulla ligula erat, vulputate et porta non, vulputate non sem. Praesent feugiat nec leo nec porta. Integer ac dolor sit amet nibh consequat lacinia non ullamcorper leo.',
    },{
        title: "Title",
        date: "2016/05/20",
        datetime: "13:46",
        user: "Admin",
        ribbon: "Nyhet",
        ribbonColor: "#ff5148",
        ribbonTextColor: "#fff",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue arcu, tempus id pulvinar a, aliquet cursus justo. Praesent eleifend ullamcorper mollis. In ullamcorper aliquet nunc eget varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque dignissim a est in iaculis. Nullam sodales, nibh tincidunt varius laoreet, metus ante vulputate elit, nec finibus odio elit vulputate erat. Duis a sagittis libero. Sed dapibus, purus at tincidunt tincidunt, nisi eros aliquam nunc, vel rhoncus metus sapien finibus nisl. Fusce elementum magna tellus, id vestibulum ipsum elementum eget. Aliquam erat volutpat. Curabitur nec pretium metus. Proin ultrices maximus ullamcorper.\n\nNulla id nisi nec diam pellentesque lobortis. In aliquet elementum mi sit amet sodales. Curabitur hendrerit enim ut ligula euismod bibendum. Nulla ligula erat, vulputate et porta non, vulputate non sem. Praesent feugiat nec leo nec porta. Integer ac dolor sit amet nibh consequat lacinia non ullamcorper leo.',
    },{
        title: "Title",
        date: "2016/05/20",
        datetime: "13:46",
        user: "Admin",
        ribbon: "Nyhet",
        ribbonColor: "#ff5148",
        ribbonTextColor: "#fff",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue arcu, tempus id pulvinar a, aliquet cursus justo. Praesent eleifend ullamcorper mollis. In ullamcorper aliquet nunc eget varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque dignissim a est in iaculis. Nullam sodales, nibh tincidunt varius laoreet, metus ante vulputate elit, nec finibus odio elit vulputate erat. Duis a sagittis libero. Sed dapibus, purus at tincidunt tincidunt, nisi eros aliquam nunc, vel rhoncus metus sapien finibus nisl. Fusce elementum magna tellus, id vestibulum ipsum elementum eget. Aliquam erat volutpat. Curabitur nec pretium metus. Proin ultrices maximus ullamcorper.\n\nNulla id nisi nec diam pellentesque lobortis. In aliquet elementum mi sit amet sodales. Curabitur hendrerit enim ut ligula euismod bibendum. Nulla ligula erat, vulputate et porta non, vulputate non sem. Praesent feugiat nec leo nec porta. Integer ac dolor sit amet nibh consequat lacinia non ullamcorper leo.',
    }
    ];
}]);