$(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {
        console.log("Edit cai dit con me may");
        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73 || event.keyCode==73)
    {
        console.log("Edit cai dit con me may");
        return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==67)
    {
        console.log("Edit cai dit con me may");
        return false;  //Prevent from ctrl+shift+i
    }
});

$(document).on("contextmenu",function(e)
{
console.log("Edit cai dit con me may");
e.preventDefault();
});