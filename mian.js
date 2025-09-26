$(document).ready(function () {
    var hie = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var element = $(".scroller")
    $(window).scroll(function () {
        var top = document.documentElement.scrollTop;
element.css("width", `${(top / hie) * 100}%`)
// =============================================
        if (this.scrollY <= 700) {
            $(".UP").fadeOut()
        } else {
            $(".UP").fadeIn()
        }


    })

    $(".UP").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })
    
})