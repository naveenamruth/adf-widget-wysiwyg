/*
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 /*jshint multistr: true */

 /* global window */

 (function (window) {

     'use strict';

     var angular = window.angular;

     angular.module('adf.widget.wysiwyg', ['adf.provider', 'textAngular'])
       .config(function(dashboardProvider){
         dashboardProvider
           .widget('wysiwyg', {
             title: 'WYSIWYG',
             description: 'WYSIWYG widget',
             controller: 'WysiwygCtrl',
             templateUrl: '{widgetsPath}/wysiwyg/src/view.html',
             edit: {
               templateUrl: '{widgetsPath}/wysiwyg/src/edit.html',
               modalSize: 'lg',
               reload: false
             }
           });
       })
       .controller('WysiwygCtrl', function($scope, config){
         $scope.size = 'lg';

         if (!config.content){
           config.content = '';
         }
         $scope.config = config;

         $scope.configured = function() {
           return $scope.config.content !== '';
         };

         $scope.notConfigured = function() {
           return $scope.config.content === '';
         };

       });
 }(window));
