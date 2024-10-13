// script.js

const scenariosData = [
    // Scenario 1
    {
        id: 1,
        scenario: "It's too much money.",
        hints: {
            Acknowledge: "Repeat the client's words back, showing you understand their hesitation.",
            Associate: "Talk about how other clients felt the same way initially.",
            Ask: "Guide the client toward identifying what they need to make a decision."
        },
        bestApproach: {
            Acknowledge: "It sounds like the price is giving you some hesitation.",
            Associate: "Many of my most successful clients felt the same way at first, but they found that the value far outweighed the cost.",
            Ask: "What's the main result you want to achieve with this investment? Let's make sure it's worth every penny."
        }
    },
    // Scenario 2
    {
        id: 2,
        scenario: "I want to take a break from coaching.",
        hints: {
            Acknowledge: "Express understanding of their need for space.",
            Associate: "Mention how others felt similarly but benefited from continuing.",
            Ask: "Inquire about what they hope to gain from a break."
        },
        bestApproach: {
            Acknowledge: "You feel like you might need some space from coaching.",
            Associate: "Many clients felt that way at some point, but often they found that staying consistent brought them even bigger breakthroughs.",
            Ask: "What's the real reason behind wanting a break? Is it possible that coaching could actually help with that?"
        }
    },
    // ... Include all other scenarios (3 to 19) here in the same format ...
];

const steps = ['Acknowledge', 'Associate', 'Ask'];
let currentScenarioIndex = -1;
let currentStepIndex = 0;
let stepsCompleted = 0;
let scenariosCompleted = 0;
let commissionCollected = 0;
let timeRemaining = 0;
let timerInterval;
let gameEnded = false;
let responses = [];

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start game function
function startGame(minutes) {
    timeRemaining = minutes * 60;
    document.getElementById('timer-buttons').classList.add('hidden');
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('log-container').style.display = 'block';
    shuffleArray(scenariosData);
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
    updateScenario();
}

// Update timer function
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (timeRemaining <= 0) {
        endGame();
    }
    timeRemaining--;
}

// End game function
function endGame() {
    clearInterval(timerInterval);
    gameEnded = true;
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('final-score').innerHTML = `
        Game Ended!<br>
        Steps Completed: ${stepsCompleted}<br>
        Scenarios Completed: ${scenariosCompleted}<br>
        Commission Collected: $${commissionCollected}
    `;
    document.getElementById('final-score').classList.remove('hidden');
}

// Update scenario function
function updateScenario() {
    currentScenarioIndex = (currentScenarioIndex + 1) % scenariosData.length;
    currentStepIndex = 0;
    updateStep();
    document.getElementById('scenario').textContent = `Scenario: "${scenariosData[currentScenarioIndex].scenario}"`;
    clearPreviousResponses();
}

// Update step function
function updateStep() {
    currentStep = steps[currentStepIndex];
    document.getElementById('current-step').textContent = `Current Step: ${currentStep}`;
}

// Clear previous responses
function clearPreviousResponses() {
    document.getElementById('acknowledge-response').classList.add('hidden');
    document.getElementById('associate-response').classList.add('hidden');
    document.getElementById('acknowledge-response').querySelector('span').textContent = '';
    document.getElementById('associate-response').querySelector('span').textContent = '';
}

// Show hint function
function showHint() {
    const hint = scenariosData[currentScenarioIndex].hints[currentStep];
    if (hint) {
        document.getElementById('hint-container').innerText = `Hint for ${currentStep}: ${hint}`;
        document.getElementById('hint-container').classList.remove('hidden');
    }
}

// Check answer function
function checkAnswer(input) {
    const lowercaseInput = input.toLowerCase();
    let feedback = '';
    let isCorrect = false;

    // Determine correctness based on keyword matching
    if (currentStep === 'Acknowledge') {
        if (lowercaseInput.includes('understand') || lowercaseInput.includes('hear') || lowercaseInput.includes('see')) {
            isCorrect = true;
            feedback = 'Boom! Great acknowledgment of the concern!';
        } else {
            feedback = 'Almost there! Acknowledge by showing understanding.';
        }
        document.getElementById('acknowledge-response').classList.remove('hidden');
        document.getElementById('acknowledge-response').querySelector('span').textContent = input;
    } else if (currentStep === 'Associate') {
        if (lowercaseInput.includes('client') || lowercaseInput.includes('successful') || lowercaseInput.includes('same way')) {
            isCorrect = true;
            feedback = 'Yes! Fantastic association with positive outcomes!';
        } else {
            feedback = 'Try to associate it with success and positivity!';
        }
        document.getElementById('associate-response').classList.remove('hidden');
        document.getElementById('associate-response').querySelector('span').textContent = input;
    } else if (currentStep === 'Ask') {
        if (lowercaseInput.includes('?')) {
            isCorrect = true;
            feedback = 'Boom! You nailed it with a great question!';
        } else {
            feedback = 'Remember to ask a question to lead the conversation forward!';
        }
    }

    if (isCorrect) {
        stepsCompleted++;
    }

    responses.push({
        scenarioIndex: currentScenarioIndex,
        step: currentStep,
        response: input
    });

    logResponse(responses[responses.length - 1]);

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('feedback').classList.remove('hidden');
    updateScoreDisplay();

    // Proceed to next step
    nextStep();
}

// Update score display function
function updateScoreDisplay() {
    document.getElementById('score').innerHTML = `
        Steps Completed: ${stepsCompleted}<br>
        Scenarios Completed: ${scenariosCompleted}<br>
        Commission Collected: $${commissionCollected}
    `;
}

// Next step function
function nextStep() {
    currentStepIndex++;
    if (currentStepIndex >= steps.length) {
        // Scenario completed
        if (stepsCompleted % 3 === 0) {
            scenariosCompleted++;
            commissionCollected += 1200;
        }
        updateScoreDisplay();
        updateScenario();
    } else {
        updateStep();
    }
}

// Submit answer function
function submitAnswer() {
    if (timeRemaining <= 0 || gameEnded) return;
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        checkAnswer(userInput.trim());
        document.getElementById('user-input').value = '';
    }
}

// Log response function
function logResponse(response) {
    let scenarioLog = document.getElementById(`scenario-log-${response.scenarioIndex}`);
    if (!scenarioLog) {
        scenarioLog = document.createElement('div');
        scenarioLog.id = `scenario-log-${response.scenarioIndex}`;
        scenarioLog.classList.add('mb-4');
        scenarioLog.innerHTML = `<h3 class="text-lg font-bold mb-2">Scenario: "${scenariosData[response.scenarioIndex].scenario}"</h3>`;
        document.getElementById('response-log').appendChild(scenarioLog);
    }
    const logEntry = document.createElement('div');
    logEntry.classList.add('mb-2');
    logEntry.innerHTML = `<strong>${response.step}:</strong> ${response.response}`;
    scenarioLog.appendChild(logEntry);

    // After game ends, enable clicking to view best approaches
    if (gameEnded) {
        scenarioLog.style.cursor = 'pointer';
        scenarioLog.addEventListener('click', function() {
            displayBestApproach(response.scenarioIndex, scenarioLog);
        });
    }
}

// Display best approach function
function displayBestApproach(index, scenarioLogElement) {
    const existingBestApproach = scenarioLogElement.querySelector('.best-approach');
    if (existingBestApproach) {
        existingBestApproach.remove();
        return; // Toggle off if already displayed
    }

    const best = scenariosData[index].bestApproach;
    const userResponses = responses.filter(r => r.scenarioIndex === index);
    let comparisonHTML = '<div class="best-approach mt-4 p-4 bg-gray-100 rounded-lg">';
    ['Acknowledge', 'Associate', 'Ask'].forEach(step => {
        const userResponse = userResponses.find(r => r.step === step)?.response || 'No response';
        const bestResponse = best[step];
        comparisonHTML += `
            <h4 class="font-bold mt-2">${step}:</h4>
            <p><strong>Your response:</strong> ${userResponse}</p>
            <p><strong>Best approach:</strong> ${bestResponse}</p>
        `;
    });
    comparisonHTML += '</div>';
    scenarioLogElement.insertAdjacentHTML('beforeend', comparisonHTML);
}

// Event listeners
document.getElementById('submit-btn').addEventListener('click', submitAnswer);
document.getElementById('hint-btn').addEventListener('click', showHint);
document.getElementById('end-game-btn').addEventListener('click', endGame);

document.getElementById('timer-5min').addEventListener('click', () => startGame(5));
document.getElementById('timer-10min').addEventListener('click', () => startGame(10));
document.getElementById('timer-15min').addEventListener('click', () => startGame(15));

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitAnswer();
    }
});
