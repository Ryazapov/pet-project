// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery2
//= require jquery-ujs
//= require foundation
//= require cookie
//= require current_user
//= require current_coordinates
//= require ckeditor/init
//= require location_input
//= require coffee_house_map
//= require common_map
//= require_tree ../templates
//= require_tree .

$(document).foundation();
$(".coffee-house__map").initCoffeeHouseMap();
