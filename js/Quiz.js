export class Quiz {
  constructor(result) {
    this.result = result;
    this.len = result.length;
    this.score = 0;
    this.index = 0;
    this.getQuestion();
    document
      .getElementById("next")
      .addEventListener("click", this.nextQuestiont.bind(this));
    document.getElementById("tryBtn").addEventListener("click", function () {
      $("#finish").fadeOut(100, function () {
        $("#setting").fadeIn(100);
      });
    });
  }
  getQuestion() {
    document.getElementById("question").innerHTML = `${
      this.result[this.index].question
    }`;
    document.getElementById("current").innerHTML = this.index + 1;
    document.getElementById("totalAmount").innerHTML = this.len;
    let ansewres = [
      this.result[this.index].correct_answer,
      ...this.result[this.index].incorrect_answers,
    ];
    this.shuffle(ansewres);
    let htmlCode = "";
    for (let i = 0; i < ansewres.length; i++) {
      htmlCode += ` <label class="form-check-label">
            <input type="radio" class="form-check-input" name="ansewer" value="${ansewres[i]}">
            ${ansewres[i]}
            </label>
            <br/>
            `;
    }
    document.getElementById("rowAnswer").innerHTML = `${htmlCode}`;
  }
  nextQuestiont() {
    this.check();
    this.index += 1;
    if (this.len > this.index) {
      return this.getQuestion();
    } else {
      $("#quiz").fadeOut(100);
      $("#finish").fadeIn(100);
      document.getElementById("score").innerHTML = this.score;
    }
  }
  check() {
    let A = document.getElementsByName("ansewer");
    let chekA = Array.from(A).filter((i) => i.checked)[0].value;
    let correctA = this.result[this.index].correct_answer;
    if (chekA == correctA) {
      this.score++;
      $("#Correct").fadeIn(500).fadeOut(500);
    } else {
      $("#inCorrect").fadeIn(500).fadeOut(500);
    }
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
