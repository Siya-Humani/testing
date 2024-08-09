let score = 0;
const totalQuestions = 5;
const tryAgainButton = document.getElementById('try-again');
const downloadLink = document.getElementById('download-images');
const download1 = document.getElementById('download1'); // Assuming you have another download link element

function answerQuestion(questionNumber, isCorrect) {
    // Update score
    if (isCorrect) {
        score++;
    }

    // Hide the current question
    const currentQuestion = document.getElementById('question-' + questionNumber);
    if (currentQuestion) {
        currentQuestion.style.display = 'none';
    }

    // Show the next question or results
    if (questionNumber < totalQuestions) {
        const nextQuestion = document.getElementById('question-' + (questionNumber + 1));
        if (nextQuestion) {
            nextQuestion.style.display = 'flex';
        }
    } else {
        showResults();
    }
}

function showResults() {
    // Hide all questions
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.style.display = 'none';
    });

    // Display results
    const resultMessage = getResultMessage(score);
    const resultElement = document.getElementById('result-message');
    if (resultElement) {
        resultElement.innerText = resultMessage;
    }
    document.getElementById('results').style.display = 'block';

    // Show or hide the "Try Again" button and "Download" link based on score
    if (score >= 4) {
        if (downloadLink) downloadLink.style.display = 'block'; 
    } else {
        if (tryAgainButton) {
            tryAgainButton.style.display = 'block';
            tryAgainButton.onclick = function() {
                window.location.href = 'https://roadtoequalsmarterwithbolt.com'; // Replace with the actual URL to restart the quiz
            };
        }
    }
}

function getResultMessage(score) {
    let message = '';
    if (score === 5) {
        message = "Congratulations! You’re clued up about Women in Mobility! Well done on achieving a perfect score of 5/5! Your knowledge and awareness are impressive. Share your results and nominate an organization that benefits women and deserves to win R68,000. Let’s drive the #RoadToEqual together!";
        if (downloadLink) downloadLink.style.display = 'block'; 
    } else if (score === 4) {
        message = "Great job! You’re almost there! You scored 4/5 – that’s fantastic! You’re well-informed about Women in Mobility. Share your results and nominate an organization that benefits women and can use R68,000 to make a difference. Join us on the #RoadToEqual!";
        if (downloadLink) downloadLink.style.display = 'block'; 
    } else if (score === 3) {
        message = "Good effort, but there’s room to learn more! You scored 3/5. You’re on the right track but there’s still more to learn about Women in Mobility. Give it another try and get even closer to acing it. Let’s continue on the #RoadToEqual!";
        if (tryAgainButton) tryAgainButton.style.display = 'block';
    } else if (score === 2) {
        message = "Oh no, stop the bus! Maybe you should get off, go revise and try again. You scored 2/5. It looks like you need a bit more knowledge about Women in Mobility. Don’t worry, though – try again, and you’ll surely improve. Keep moving forward on the #RoadToEqual!";
        if (tryAgainButton) tryAgainButton.style.display = 'block';
    } else if (score === 1) {
        message = "Oh no, stop the bus! Maybe you should get off, go revise and try again. You scored 1/5. It seems like there’s a lot to learn about Women in Mobility. Take some time to revise and give the quiz another go. You can do it! Stay motivated on the #RoadToEqual!";
        if (tryAgainButton) tryAgainButton.style.display = 'block';
    } else if (score === 0) {
        message = "Oh no, stop the bus! Maybe you should get off and go revise and try again. You scored 0/5. Don’t be discouraged! It’s a chance to learn more about Women in Mobility. Go back, revise, and try the quiz again. You’ll get there! Keep striving on the #RoadToEqual";
        if (tryAgainButton) tryAgainButton.style.display = 'block';
    }
    return message;
}


