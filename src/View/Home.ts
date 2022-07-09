import { LitElement, html, css, property } from "lit-element";
import { Router } from '@vaadin/router';
import { User } from "../Model/User";

export class Home extends LitElement {
    @property({ type: Object })
    user: User;

    static get styles() {
        return css`
            #container {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
            }

            #row1 {
                display: flex;
                flex-direction: row;
                align-items: center;
                row-gap: 12px;
            }

            #username {
                flex-grow: 2;
                font-size: 1.5em;
            }

            #create-btn {
                flex-grow: 1;
                width: 24px;
                height: 24px;
                background: url('./assets/create.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            #more-btn {
                flex-grow: 1;
                width: 24px;
                height: 24px;
                background: url('./assets/more.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            #name {
                font-size: 1em;
            }
        `;
    }

    constructor() {
        super();
        this.user = new User(
            "puruwincho", 
            "David", 
            "Pérez Martínez", 
            "johndoe123@gmail.com", 
            120, 
            2300, 
            "https://i.pravatar.cc/300");

    }

    render() {
        return html`
            <div id="container">
                <div id="row1">
                    <h1 id="username">${this.user.username}</h1>
                    <a href="#" id="create-btn"></a>
                    <a href="#" id="more-btn"></a>
                </div>
                <img id="avatar" src="${this.user.avatar}">
                <h2 id="name">${this.user.name} ${this.user.surname}</h2>
            </div>
        `;
    }
}

customElements.define('home-view', Home);