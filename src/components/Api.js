class Api {
  constructor(phpScriptLink) {
    this._phpScriptLink = phpScriptLink;
  }

  sentTelegramMessage(bodyData) {
    return fetch(this._phpScriptLink, {
      method: "POST",
      body: bodyData,
    })
    // .then(res => console.log(res));
  }
}


export default Api