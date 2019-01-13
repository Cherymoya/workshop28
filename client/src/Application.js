import { html, render } from 'lit-html';
import 'material-design-lite';
import './AppShell.scss';

const template = () => html`
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-title">PWA Todoist</div>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">PWA Todoist</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/">Home</a>
        <a class="mdl-navigation__link" href="/projects">Projects</a>
        <a class="mdl-navigation__link" href="/settings">Settings</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div id="content" class="page-content"></div>
    </main>
  </div>
`;

export default class Application {
    constructor(rootEl){
        this.rootEl = rootEl;
    }
    
    start(){
        render(template(), this.rootEl);
    }
};