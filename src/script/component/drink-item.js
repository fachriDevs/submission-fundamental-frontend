/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class DrinkItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          * {
          margin:0px;
          padding: 0px;
          box-sizing: border-box;
          }
          :host {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
          }
          .drink-info {
            padding: 24px;
          }
          .drink-info > h2 {
            font-weight: lighter;
          }
          .drink-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
          }
          .drink-photo{
            max-height:300px;
            width:100%;
            
          }
          @media screen and (max-width: 300px) {
            :host {
              display: block;
              gap: 5px;
              margin: 5px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              overflow: hidden;
            }
            .drink-info {
              padding: 24px;
            }
            .drink-info > h2 {
              font-weight: lighter;
            }
            .drink-info > p {
              margin-top: 5px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10;
            }
            .drink-photo{
              max-height:150px;
              width:100%;
              
            }
        </style>
        <img class="drink-photo" src="${this._drink.strDrinkThumb}" alt="Photo">
        <div class="drink-info">
          <h2>${this._drink.strDrink}</h2>
          <p>${this._drink.strInstructions}</p>
        </div>
      `;
  }
}

customElements.define('drink-item', DrinkItem);
