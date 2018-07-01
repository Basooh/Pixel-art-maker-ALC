// Select color input
// Select size input
let rows, columns, gridColor;
//define the needed variables
$('form').submit(function(event) {
event.preventDefault();

rows = $('#inputHeight').val(); //specifies the input height
columns = $('#inputWidth').val(); //specifies the input width
makeGrid(rows, columns);
});


// When size is submitted by the user, call makeGrid()

function makeGrid(row, col) {
  $('tr').remove();

//loop for creating the rows
for (let x=1; x<=row; x++) {
$('#pixelCanvas').append('<tr id = r' + x + '></tr>');

//loop for creating columns
for (let y=1; y<=col;y++) {
$('#r' + x).append('<td></td>');
}
}

//select the color for the colorPicker
$('td').on('click' , function () {
	gridColor =  $('#colorPicker').val();

	if ($(this).attr('style')) {
	  $(this).removeAttr('style');
	} else {
	  $(this).attr('style', 'background-color:' + gridColor);
}
});
}
