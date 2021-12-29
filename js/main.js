function showArr(v) {
    var panels=document.getElementsByClassName('panel');
    for(var i=0;i<panels.length;i++)
        panels[i].style.visibility="hidden";
    panels[v].style.visibility="visible";
}