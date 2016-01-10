'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'login': 'Login',
    'order': 'Order a Meal',
    'sell': 'Sell a Dish',
    'join': 'Join',
    'link': '/'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('easyEatsApp')
  .controller('NavbarController', NavbarController);
