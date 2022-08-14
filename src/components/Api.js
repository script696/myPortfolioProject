class Api {
  constructor({phpScriptLink, codewarsLink}) {
    this._phpScriptLink = phpScriptLink;
    this._codewarsLink = codewarsLink;

  }

  sentTelegramMessage(bodyData) {
    return fetch(this._phpScriptLink, {
      method: "POST",
      body: bodyData,
    })
  }

  getCodewarsUserData(){
    return fetch(this._codewarsLink)
    .then(res => res.json())
  }
}


export default Api