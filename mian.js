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
// shuffle
let arrLi = Array.from(document.querySelectorAll("ul.shuffle li"))
let arrBox = Array.from(document.querySelectorAll(".imgs-container .box"))

arrLi.forEach(ele => {
    ele.addEventListener("click", function (e) {
        arrLi.forEach(el => {
            el.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
           arrBox.forEach(el => {
            el.style.display ="none"
           })
        document.querySelectorAll(e.currentTarget.dataset.type).forEach(element => {
            element.style.display = "block"
        })
            // .style.display = "block"
    })
})