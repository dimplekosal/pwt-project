<canvas id = "myCanvas" height = "600"
width = "800">
</canvas>

canvas=
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseleave",my_mouseleave);

    function my_mouseleave(e)    
{
    mouseEvent="mouseleave";

}
canvas.addEventListener("mouseup",my_mouseup);

    function my_mouseup(e)    
{
    mouseEvent="mouseUP"
    } 
    canvas.addEventListener("mousemove",my_mousemove);

    function my_mousemove(e)    
{
    current_position_of_mouse_x=e
}
