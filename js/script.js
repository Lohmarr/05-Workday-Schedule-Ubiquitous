// Event Listener to save user input
$(function () {
  $('.saveBtn').on('click', function() {
    const id = $(this).closest('.time-block').attr('id');
    const description = $(this).siblings('.description').val();
    
    localStorage.setItem(id, description);
  });

  // Get the current hour in 24-hour time using Day.js library
  const currentHour = dayjs().hour();

  // Apply the past, present, or future class to each time-block
  $('.time-block').each(function() {
    const hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Get any user input that was saved in localStorage and put it in description
  $('.time-block').each(function() {
    const id = $(this).attr('id');
    const description = localStorage.getItem(id);
    $(this).find('.description').val(description);
  });

  // Display the current date in the header
  const currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);
});
