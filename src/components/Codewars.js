class Codewars {
  constructor({
    username,
    honor,
    clan,
    languages,
    name,
    totalCompleted,
    codewarsConfig,
  }) {
    
    this.skillsList = document.querySelector(codewarsConfig.skillsList);
    
    this._username = username;
    this._honor = honor;
    this._clan = clan;
    this._languages = Object.keys(languages).length;
    this._rang = name;
    this._totalComplite = totalCompleted;
    this._codewarsData = {
      username,
      honor, 
      clan, 
      ranks: name,
      totalCompleted,
      languages : Object.keys(languages).length,
    };
  }

  setValues() {
    const test = this.skillsList.querySelectorAll('.codewars__text-api')
    test.forEach(val => {
      const textContent = this._codewarsData[val.id]
      val.textContent = textContent
      
    })
}
}
export default Codewars;
