/**
 * @author Joel Hernandez <involvmnt@gmail.com>
 */

require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});