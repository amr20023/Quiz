import { Quiz } from "./Quiz.js";
export class settings {
  constructor() {
    this.category = document.getElementById("category");
    this.difficulty = document.getElementsByName("difficulty");
    this.numOfQuestions = document.getElementById("numOfQuestions");
    $("#startBtn").click(this.getVlaues.bind(this));
  }

  async getVlaues() {
    let Category = this.category.value;
    let difficulty = Array.from(this.difficulty).filter((e) => e.checked)[0]
      .value;
    let numOfQuestions = this.numOfQuestions.value;
    let API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${Category}&difficulty=${difficulty}`;
    let result = await this.getMainLink(API);
    if (result.length > 0) {
      let quiz = new Quiz(result);
      $("#setting").fadeOut(200);
      $("#quiz").fadeIn(200);
    } else {
      $("#formAlert").fadeIn(2000).fadeOut(1000);
    }
  }

  async getMainLink(api) {
    let link = await fetch(api);
    let data = await link.json();
    return data.results;
  }
}
