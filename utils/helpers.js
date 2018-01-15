import shuffle from "shuffle-array";

export const capitalizer = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const buildQuiz = questions => {
  const answers = questions.map(q => q.answer);
  const shuffledAnswers = buildShuffledAnswers(answers);
  const quiz = questions.map((q, i) => ({
    question: q.question,
    correct: q.answer,
    incorrect: shuffledAnswers[i]
  }));
  return quiz;
};

buildShuffledAnswers = answers => {
  let flag = false;
  let shuffledAnswers;
  while (!flag) {
    shuffledAnswers = shuffle(answers, { copy: true });
    // flag is true if no shuffledAnswer sits in the same index in answers
    flag = shuffledAnswers.filter((s, i) => s === answers[i]).length === 0;
  }
  return shuffledAnswers;
};
