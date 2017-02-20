function PageFactory() {};

PageFactory.create = function(type){
    var	pageType = type,
            newPage;
    // сообщить об ошибке, если конструктор
    // для запрошенного типа отсутствует
    if (typeof PageFactory[pageType] !== "function") {
        throw {
            name: "Error",
            message: pageType + " doesn’t exist"
        };
    }
    // в этой точке известно, что требуемый конструктор существует
    // поэтому определим отношения наследования с предком,
    // но только один раз
    if (typeof PageFactory[pageType].prototype.drive !== "function") {
        PageFactory[pageType].prototype = new PageFactory();
    }
    // создать новый экземпляр
    newPage = new PageFactory[constr]();
    // дополнительно можно вызвать какие-либо методы
    // и затем вернуть объект...
    return newPage;
};
var	buttonBack,
        buttonMenu;
function createButtons(){
    var	buttonComponent = Qt.createComponent("Button.qml"),
            buttonBackObj,
            buttonMenuObj;
    buttonBackObj = {
        width: page.width/4,
        height: page.height/10,
        text: "≺"
    };
    buttonBack = buttonComponent.createObject(page, buttonBackObj);
    buttonBack.anchors.bottom = page.bottom;
    buttonBack.anchors.left = page.left;

    buttonMenuObj = {
        width: page.width/4,
        height: page.height/10,
        text: "⋯"
    }
    buttonMenu = buttonComponent.createObject(page, buttonMenuObj);
    buttonMenu.anchors.bottom = page.bottom;
    buttonMenu.anchors.right = page.right;
    buttonMenu.clicked.connect(function (){
        buttonBack.anchors.bottom = undefined;
        buttonBack.anchors.top = page.top;
    })
}

function changeButtons(){
    //    console.log(buttonBack.anchors.bottom);
    buttonBack.anchors.bottom = undefined;
    buttonBack.anchors.top = page.top;
}



Object.prototype.print = function print( indent ){
    if (typeof indent === "undefined") indent = "";
    if(indent.length > 36) {
        console.log(indent+"..............");
        return;
    }
    for (var key in this){
        if(key!=="print"){
            if(typeof this[key] === "function" || (typeof this[key] === "object" && this[key] !== null)){
                console.log(indent + key + ": " + typeof this[key] + " {");
                var oldIndent = indent;
                indent+="    ";
                this[key].print(indent);
                indent = indent.slice(0,-4)
                console.log(indent+"}");
            }
            else{
                console.log(indent + key + ": " + this[key]);
            }
        }
    }
}





