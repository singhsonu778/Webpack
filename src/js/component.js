import renderElement from './element';
var renderComponent = function () {
    var component = document.getElementById('root');
	component.innerHTML = 'Webpack Page';
	document.body.appendChild(renderElement());
};
export default renderComponent;
