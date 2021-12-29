var arrSize=document.getElementById("arrSize");
var arrElements=document.getElementById("arrElements");
var showDS=document.getElementsByClassName("showDS")[0];



const createArr=function (e) {
    while (showDS.firstChild) {
        showDS.removeChild(showDS.firstChild);
    }
    var n=0;
    if(arrSize.value==""||arrSize.value==NaN||arrSize.value==null)
        n=0;
    else
        n=parseInt(arrSize.value);
    var indblocks=[];
    for(var i=0;i<n;i++) {
        indblocks[i]=document.createElement("div");
        indblocks[i].style.cssText='display: inline-block; line-height: 70px; border: 1px solid #fff; width: 70px; height: 70px; text-align: center;';
        indblocks[i].innerText=i;
        showDS.appendChild(indblocks[i]);
    }
    showDS.appendChild(document.createElement("br"));
    var arr=[];
    if(arrElements.value==""||arrElements.value==NaN||arrElements.value==null)
        arr=[];
    else
        arr=arrElements.value.replace(/(->|\{|\}| |\n|,|\[|\(|\)|\])/g," ").split(" ");
    for(var i=0;i<arr.length;i++) {
        if(arr[i]=="")
            arr.splice(i--,1);
    }
    var arrblocks=[];
    var j=0;
    for(var i=0;i<n;i++) {
        arrblocks[i]=document.createElement("div");
        arrblocks[i].style.cssText='display: inline-block; line-height: 70px; border: 1px solid #000; width: 70px; height: 70px; text-align: center;';
        if(j<arr.length&&arr[j]!=""&&arr[j]!='\n')
            arrblocks[i].innerText=arr[j];
        else 
            arrblocks[i].innerText="N";
        j++;
        showDS.appendChild(arrblocks[i]);
    }
}
const createArr1=function (e) {
    while (showDS.firstChild) {
        showDS.removeChild(showDS.firstChild);
    }
    var n=0;
    if(arrSize.value==""||arrSize.value==NaN||arrSize.value==null)
        n=0;
    else
        n=parseInt(arrSize.value);
    var arr=[];
    if(arrElements.value==""||arrElements.value==NaN||arrElements.value==null)
        arr=[];
    else
        arr=arrElements.value.replace(/(->|\{|\}| |\n|,|\[|\(|\)|\])/g," ").split(" ");
    for(var i=0;i<arr.length;i++) {
        if(arr[i]=="")
            arr.splice(i--,1);
    }
    if(arr.length>n) {
        n=arr.length;
    }
    arrSize.value=n;
    var indblocks=[];
    for(var i=0;i<n;i++) {
        indblocks[i]=document.createElement("div");
        indblocks[i].style.cssText='display: inline-block; line-height: 70px; border: 1px solid #fff; width: 70px; height: 70px; text-align: center;';
        indblocks[i].innerText=i;
        showDS.appendChild(indblocks[i]);
    }
    showDS.appendChild(document.createElement("br"));
    var arrblocks=[];
    var j=0;
    for(var i=0;i<n;i++) {
        arrblocks[i]=document.createElement("div");
        arrblocks[i].style.cssText='display: inline-block; line-height: 70px; border: 1px solid #000; width: 70px; height: 70px; text-align: center;';
        if(j<arr.length&&arr[j]!=""&&arr[j]!='\n')
            arrblocks[i].innerText=arr[j];
        else 
            arrblocks[i].innerText="N";
        j++;
        showDS.appendChild(arrblocks[i]);
    }
}

arrSize.addEventListener('input',createArr);
arrSize.addEventListener('propertychange',createArr);

arrElements.addEventListener('input',createArr1);
arrElements.addEventListener('propertychange',createArr1);