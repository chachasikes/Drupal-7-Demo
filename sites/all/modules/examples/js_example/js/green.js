// $Id: green.js,v 1.2 2010/08/11 23:16:27 rfay Exp $

(function($){
$(document).ready(function(){
  var weight = Drupal.settings.js_weights.green;
  var newDiv = $('<div></div>').css('color', 'green').html('I have a weight of ' + weight);
  $('#js-weights').append(newDiv);
});
})(jQuery);
