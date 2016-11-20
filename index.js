window.onload = load;

function load(){
    var context = getCanvasContext();

    initLayout(context);

    initInteractiveDesign(context);
}

function initLayout(context){
    var leftContainer = document.getElementById("left");
    context.canvas.width =  leftContainer.clientWidth;
    context.canvas.height = leftContainer.clientHeight;
}

function initInteractiveDesign(context){
    var designScript = document.getElementById("designScript");
    designScript.addEventListener("input", 
        function(){ onDesignChange(context, designScript.value);}, false);

    onDesignChange(context, designScript.value);
}

function onDesignChange(context, designScriptValue){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    try {
        eval(designScriptValue);
    }
    catch(error){
        console.debug(error);
    }
}

function getCanvasContext(){
    var canvas = document.getElementById("canvas");

    return canvas.getContext("2d");   
}