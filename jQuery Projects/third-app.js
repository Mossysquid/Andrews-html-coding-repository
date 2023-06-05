

let boxCount = 0;
while(boxCount < 16) {
        $('#mainContainer').append('<div class="box"></div>');
        boxCount++;
    }

$('.box').on('click', function() {
    $(this).toggleClass('greyBox');
});
