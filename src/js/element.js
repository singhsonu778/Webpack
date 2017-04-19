import message from './message';
var renderElement = function () {
    var element = document.createElement('h2');
    element.innerHTML = message('Hello World!!!');
    return element;
};
export default renderElement;
