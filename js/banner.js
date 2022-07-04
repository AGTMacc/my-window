$(function () {
    let left = parseInt($('.course').css('left'))
    function ifs() {

        $('#leftBtn').css('display', 'block')
        $('#rightBtn').css('display', 'block')
        if (left <= 0) {
            left = 0
            $('#leftBtn').css('display', 'none')
        }
        if (left >= parseInt($('.max-box-3').css('width')) / 2) {
            left = parseInt($('.max-box-3').css('width')) / 2
            $('#rightBtn').css('display', 'none')
        }
    }
    ifs()
    $(window).resize(function () {
        ifs()
    })
    $('#leftBtn').on('click', function () {
        left -= 200
        ifs()
        $('.course').css('left', -left)
    })
    $('#rightBtn').on('click', function () {
        left += 200
        ifs()
        $('.course').css('left', -left)
    })
    $('#leftBtn').click()


})