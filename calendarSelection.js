// Selects view for the calendar
App.CalendarSelection = (function (){

 // Click on week selection to view that week's calendar
  var _selectView = function () {
    var $weekButton = $('.js-button-week'), // all the buttons have this class
        $calView = $('.js-view-week'), // all the views have this class
        showWeek = 'container-month-week-show', // shows the calendar
        $currentWeek = $('#js-container-current-month-week-1'); // adds a default open view on page load

    // Here are my workings for trying to makes views that are past the date not visible anymore. Incomplete and untested.

    // var $dateListing = $('.calendar-detail-date ul li'),
    //     dateToMatch = ($dateListing.text());
    // var param1 = new Date();
    // var param2 = (param1.getMonth()+1) + '/' +  param1.getDate() + '/' + param1.getFullYear();
    // if (param2 == dateToMatch) {
    //   alert('it works!');
    // }

    $currentWeek.addClass(showWeek); // Default calendar week view.

    $weekButton.on('click', function () {
      $calView.removeClass(showWeek); // Hides whatever view was showing.
      $(".js-view-week[id='"+$(this).attr('data-id')+"']").addClass(showWeek); // Finds the matching id and data-id's
      // The below code allows Foundation's equalizer to work even though the Calendar views are hidden
      $(document).foundation({
        equalizer : {
          act_on_hidden_el: true
        }
      });
    });
  };


  var initialize = function () {
    _selectView();
  };

  return {
    initialize: initialize
  };

})();
