$(function () {
    $('.card').on('mousemove', function (event) {
        var boxw = this.offsetWidth; //box的宽度
        var boxh = this.offsetHeight; //box的高度

        var x = event.offsetX; //鼠标的x的位置
        var y = event.offsetY; //鼠标的y的位置

        var movex = boxw / 2 - x;  //鼠标距离中心点的位置 x
        var movey = boxh / 2 - y;  //鼠标距离中心点的位置 y

        //y轴旋转角度计算
        var percent = movex / (boxw / 2); //算出百分比
        var deg = 10 * percent; //假设最大旋转角度是10度

        var percenty = movey / (boxh / 2); //算出百分比
        var degy = 10 * percenty; //假设最大旋转角度是10度
        //用js来设置transform
        $(this).css('transform', "rotateY(" + -deg + "deg) rotateX(" + degy + "deg)")
    })
})
