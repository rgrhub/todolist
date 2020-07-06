$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    let text = $(this).val();
    if (e.which === 13 && text !== "") {
        $("ul").append( "<li><span><i class='far fa-trash-alt'></i></span> "+text+"</li>" );
        $(this).val("");
    }
});

$("#plus").click(function () {
    $("input[type='text']").toggleClass("hide");
});
