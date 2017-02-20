function PageFactory() {};

//PageFactory.create = function(type){
//	var	pageType = type,
//		newPage;
//	// сообщить об ошибке, если конструктор
//	// для запрошенного типа отсутствует
//	if (typeof PageFactory[pageType] !== “function”) {
//		throw {
//		name: “Error”,
//		message: pageType + “ doesn’t exist”
//		};
//	}
//	// в этой точке известно, что требуемый конструктор существует
//	// поэтому определим отношения наследования с предком,
//	// но только один раз
//	if (typeof PageFactory[pageType].prototype.drive !== “function”) {
//		PageFactory[pageType].prototype = new PageFactory();
//	}
//	// создать новый экземпляр
//	newPage = new PageFactory[constr]();
//	// дополнительно можно вызвать какие-либо методы
//	// и затем вернуть объект...
//	return newcar;
//};

//// специализированные конструкторы
//CarMaker.Compact = function () {
//this.doors = 4;
//};
//CarMaker.Convertible = function () {
//this.doors = 2;
//};
//CarMaker.SUV = function () {
//this.doors = 24;
//};
