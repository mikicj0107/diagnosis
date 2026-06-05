document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const chart = {
    q1: { question: "人と話すのが好き", yes: "q2", no: "q3" },

    q2: { question: "にぎやかな場所のほうが落ち着く", yes: "q4", no: "q5" },
    q4: { question: "チームで協力して働くのが好きだ", yes: "t1", no: "t2" },
    q5: { question: "相手の気持ちを考えて行動する方だ", yes: "t2", no: "t1" },

    // 非接客タイプの分岐
    q3: { question: "一人で黙々と作業するのが好きだ", yes: "q6", no: "q7" },
    q6: { question: "細かい作業を続けるのが得意だ", yes: "t3", no: "q8" },
    q7: {
      question: "アイデアを考えたり表現するのが好きだ",
      yes: "q8",
      no: "t3",
    },
    q8: {
      question: "パソコンやスマホを使って何か作るのが好きだ",
      yes: "t4",
      no: "t3",
    },

    // 結果
    t1: {
      answer:
        "あなたは元気に動く仕事がぴったり！<br>例：飲食店ホール、イベントスタッフ、居酒屋など",
    },
    t2: {
      answer:
        "あなたは人と丁寧に関わる仕事がぴったり！<br>例：アパレル、カフェ、受付など",
    },
    t3: {
      answer:
        "あなたは集中力を活かせる仕事がぴったり！<br>例：事務、品出し、データ入力など",
    },
    t4: {
      answer:
        "あなたは発想力を活かせる仕事がぴったり！<br>例：SNS運用、デザイン補助、動画編集など",
    },
  };

  let state = "q1";
  let answer;

  function displayQuestion() {
    document.querySelector(".quest").textContent = chart[state].question;
    document.querySelector(".answer").style.display = "none";
    answer = "";
  }

  function displayAnswer() {
    document.querySelector(".answer").innerHTML = chart[state].answer;
    document.querySelector(".answer").style.display = "block";
    document.querySelector("#input").innerHTML = "";
    document.querySelector(".quest").textContent = "お疲れ様でした";
  }

  function handleNextButtonClick() {
    if (answer === "yes") {
      state = chart[state].yes;
    } else if (answer === "no") {
      state = chart[state].no;
    } else {
      alert("YesかNoをお選びください");
      return;
    }

    if (chart[state].question) {
      displayQuestion();
    } else if (chart[state].answer) {
      displayAnswer();
    }

    clearSelections();
  }

  function clearSelections() {
    document.querySelectorAll("input[name='toi']").forEach(function (input) {
      input.checked = false;
    });
  }

  document.querySelectorAll("input[name='toi']").forEach(function (input) {
    input.addEventListener("click", function () {
      answer = this.value;
    });
  });

  document
    .querySelector(".next")
    .addEventListener("click", handleNextButtonClick);

  displayQuestion();
});
