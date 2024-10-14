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
// Scenario 3
{
    id: 3,
    scenario: "I need to think about it first.",
    hints: {
        Acknowledge: "Acknowledge their desire for time to think.",
        Associate: "Mention others who felt the same but didn’t need as much time.",
        Ask: "Help them feel more certain about their decision."
    },
    bestApproach: {
        Acknowledge: "You feel like you need some time to process this decision.",
        Associate: "A lot of people felt that way, but once they jumped in, they realized they didn’t need as much time as they thought.",
        Ask: "What would help you feel more certain about your decision?"
    }
},
// Scenario 4
{
    id: 4,
    scenario: "I don’t have the money.",
    hints: {
        Acknowledge: "Recognize their concern about finances.",
        Associate: "Reassure them by referencing others who initially had similar concerns.",
        Ask: "Frame it in terms of helping them prioritize their goals."
    },
    bestApproach: {
        Acknowledge: "So, you’re feeling like finances are a concern right now.",
        Associate: "A lot of people feel this way initially, but they often realize that the investment pays off far more than expected.",
        Ask: "If this investment could help you reach your goals, how would you prioritize it?"
    }
},
// Scenario 5
{
    id: 5,
    scenario: "I’m keeping my coaching a secret and I can’t find a way to hide taking more money from the account.",
    hints: {
        Acknowledge: "Understand the difficulty of keeping coaching private.",
        Associate: "Relate how others have navigated this challenge.",
        Ask: "Brainstorm discreet ways to manage the finances."
    },
    bestApproach: {
        Acknowledge: "You’re worried about how to manage the finances without others knowing.",
        Associate: "This is a challenge a lot of my clients have faced, and they found ways to work around it.",
        Ask: "What are your options for managing this discreetly? Let’s find a solution that works for you."
    }
},
// Scenario 6
{
    id: 6,
    scenario: "I want to settle/apply all the learnings first.",
    hints: {
        Acknowledge: "Acknowledge their desire to apply what they’ve learned.",
        Associate: "Mention how others realized coaching helps accelerate progress.",
        Ask: "Prompt them to consider if coaching could speed up their application."
    },
    bestApproach: {
        Acknowledge: "You want some time to integrate what you’ve learned before continuing.",
        Associate: "Many of my clients felt this way, but they realized coaching helped them apply those lessons even better.",
        Ask: "What if coaching could help you accelerate your application and make progress even faster?"
    }
},
// Scenario 7
{
    id: 7,
    scenario: "Budget only allows for one (Husband is in coaching, wife is in BOGO).",
    hints: {
        Acknowledge: "Understand their limited budget for coaching.",
        Associate: "Talk about how couples benefited from investing together.",
        Ask: "Discuss how both in coaching could multiply their results."
    },
    bestApproach: {
        Acknowledge: "So you feel like the budget is tight, and only one of you can continue with coaching.",
        Associate: "That’s a common concern. However, many couples found that investing in both partners accelerated their progress together.",
        Ask: "What if we could find a way to make this work for both of you? Would that bring you closer to your shared goals?"
    }
},
// Scenario 8
{
    id: 8,
    scenario: "I think I need a mentor more than a coach, I have money only for one.",
    hints: {
        Acknowledge: "Acknowledge the mentor vs coach decision.",
        Associate: "Mention how others found coaching provided what they needed.",
        Ask: "Guide them to explore if coaching can meet their key needs."
    },
    bestApproach: {
        Acknowledge: "You’re feeling torn between mentorship and coaching, and you have to choose one.",
        Associate: "This is common. A lot of clients felt like they needed a mentor, but coaching gave them the accountability and framework to apply knowledge and make measurable progress.",
        Ask: "What’s the biggest outcome you’re looking for? Let’s explore if coaching can get you there faster."
    }
},
// Scenario 9
{
    id: 9,
    scenario: "I’m waiting for my business deal/promotion/sale to come through to continue the coaching.",
    hints: {
        Acknowledge: "Acknowledge their desire to wait for the deal or promotion.",
        Associate: "Talk about how others found coaching accelerated those events.",
        Ask: "Ask them what would change if they didn’t wait and acted now."
    },
    bestApproach: {
        Acknowledge: "You’re feeling like the timing isn’t right until this business deal or promotion comes through.",
        Associate: "Many of my clients felt this way, but they found that pushing forward with coaching actually helped them secure those deals faster.",
        Ask: "What if the coaching could help you close that deal or get that promotion sooner? Would that change your decision?"
    }
},
// Scenario 10
{
    id: 10,
    scenario: "Everything in my life is going the way I want, so there is no need for investing in coaching.",
    hints: {
        Acknowledge: "Understand that everything seems to be going well for them.",
        Associate: "Talk about how others invested in coaching during good times and saw exponential growth.",
        Ask: "Help them imagine what an even higher level of success would look like."
    },
    bestApproach: {
        Acknowledge: "So everything’s on track, and you don’t feel the need for coaching right now.",
        Associate: "A lot of people feel that way when things are going well, but the ones who invest in themselves during the good times often experience exponential growth.",
        Ask: "What if coaching could take things to an even higher level? What would that look like for you?"
    }
},
// Scenario 11
{
    id: 11,
    scenario: "I am unemployed and I’m saving the money for coaching to invest in Facebook ads.",
    hints: {
        Acknowledge: "Understand their desire to invest in ads rather than coaching.",
        Associate: "Talk about how others in similar situations used coaching to optimize their ads and create long-term growth.",
        Ask: "Ask them what would change if they combined both coaching and ads."
    },
    bestApproach: {
        Acknowledge: "So you’re prioritizing investing in ads because you think they’ll get you clients faster than coaching.",
        Associate: "A lot of clients in your position felt the same, but they discovered that coaching gave them the skills to turn ads into real opportunities and long-term growth.",
        Ask: "What if we could combine both? Coaching can help you optimize your ads to get clients faster. Does that sound like a win-win?"
    }
},
// Scenario 12
{
    id: 12,
    scenario: "I have money for you or a sales coach.",
    hints: {
        Acknowledge: "Acknowledge their choice between a coach and a sales coach.",
        Associate: "Talk about how coaching provides sales strategies and more.",
        Ask: "Guide them to see how coaching covers sales and beyond."
    },
    bestApproach: {
        Acknowledge: "You’re deciding between working with me or a sales coach, and you only have the budget for one.",
        Associate: "This happens a lot. Many clients realized that working with me gave them both the sales strategies they needed and a whole lot more.",
        Ask: "What if we could cover sales and more in coaching? How would that impact your results?"
    }
},
// Scenario 13
{
    id: 13,
    scenario: "I want to cover my debt first.",
    hints: {
        Acknowledge: "Acknowledge their desire to pay off debt first.",
        Associate: "Mention how others found coaching helped them repay debt faster.",
        Ask: "Guide them to explore how coaching could accelerate debt repayment."
    },
    bestApproach: {
        Acknowledge: "You’re feeling like your debt is a priority before investing in coaching.",
        Associate: "This is a common concern. Many clients found that coaching helped them develop strategies to grow their income and pay off debt faster.",
        Ask: "What if coaching could give you the tools to accelerate your debt repayment and increase your financial stability?"
    }
},
// Scenario 14
{
    id: 14,
    scenario: "I want to save money for other things.",
    hints: {
        Acknowledge: "Understand they want to prioritize saving for other things.",
        Associate: "Talk about how clients found coaching helped them save faster.",
        Ask: "Ask if coaching could help them achieve their savings goals quicker."
    },
    bestApproach: {
        Acknowledge: "You’re prioritizing saving for other things right now, which makes total sense.",
        Associate: "A lot of my clients were in the same position but found that the clarity and strategies they gained from coaching helped them achieve those savings goals more quickly.",
        Ask: "What if coaching accelerated your ability to save for those other things? Would that change how you see this investment?"
    }
},
// Scenario 15
{
    id: 15,
    scenario: "I need to check my finances.",
    hints: {
        Acknowledge: "Recognize their need to review finances before deciding.",
        Associate: "Mention how coaching often helped clients improve financial control.",
        Ask: "Help them explore how coaching could improve their finances."
    },
    bestApproach: {
        Acknowledge: "You’re feeling like you need to review your financial situation before making a decision.",
        Associate: "That’s a smart move, and many clients realized that through coaching, they developed better financial strategies and control.",
        Ask: "What if coaching gave you the tools to not only manage your finances but also improve them? Would that change how you see this decision?"
    }
},
// Scenario 16
{
    id: 16,
    scenario: "I need to get my finances where they should be.",
    hints: {
        Acknowledge: "Acknowledge their need to improve their financial situation.",
        Associate: "Talk about how coaching helped others accelerate financial improvement.",
        Ask: "Help them consider if coaching could help achieve financial security sooner."
    },
    bestApproach: {
        Acknowledge: "You want to feel more financially secure before making this investment.",
        Associate: "A lot of clients were in a similar position but found that coaching actually helped them get their finances on track much faster.",
        Ask: "What if coaching could provide the tools to help you get your finances where you want them to be? How would that influence your decision?"
    }
},
// Scenario 17
{
    id: 17,
    scenario: "I feel good right now, I don’t need coaching.",
    hints: {
        Acknowledge: "Acknowledge their feeling that everything is in a good place.",
        Associate: "Mention how clients investing in good times experienced exponential growth.",
        Ask: "Help them consider what the next level could look like."
    },
    bestApproach: {
        Acknowledge: "You’re feeling like everything is in a good place, and that’s why coaching doesn’t seem necessary right now.",
        Associate: "Many clients felt the same, but they realized that coaching during the good times actually helped them create even more opportunities and growth.",
        Ask: "What’s your next goal? What if coaching could help you reach it even faster?"
    }
},
// Scenario 18
{
    id: 18,
    scenario: "I want to check other coaching programs for a different perspective.",
    hints: {
        Acknowledge: "Understand their desire to explore other coaching options.",
        Associate: "Mention how clients often found what they needed right here.",
        Ask: "Help them explore if their needs can be met here."
    },
    bestApproach: {
        Acknowledge: "You’re thinking of exploring other coaching options to get a broader view.",
        Associate: "That’s a natural part of the decision process. Many clients found that after looking around, they got exactly what they needed with this program.",
        Ask: "What are the key things you’re hoping to find elsewhere? Let’s explore if we can meet those needs here."
    }
},
// Scenario 19
{
    id: 19,
    scenario: "I am thinking of maybe taking a different program, I’m not sure which one I will take.",
    hints: {
        Acknowledge: "Recognize their uncertainty between programs.",
        Associate: "Talk about how clients found alignment with this program after exploring others.",
        Ask: "Help them clarify what their key decision factors are."
    },
    bestApproach: {
        Acknowledge: "You’re feeling unsure about which program to choose and are considering other options.",
        Associate: "That’s completely understandable. Many clients found that, after weighing their options, they came back because this program aligned best with their long-term goals.",
        Ask: "What’s the key factor for you in deciding between programs? Let’s see if this is the right fit for that."
    }
}
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
    // ... (same as before)
}

// Start game function
function startGame(minutes) {
    // ... (same as before)
}

// Update timer function
function updateTimer() {
    // ... (same as before)
}

// End game function
function endGame() {
    // ... (same as before)
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

    // Show the Start Over button
    document.getElementById('start-over-container').classList.remove('hidden');
}

}

// Update scenario function
function updateScenario() {
    // ... (same as before)
}

// Update step function
function updateStep() {
    // ... (same as before)
}

// Clear previous responses
function clearPreviousResponses() {
    // ... (same as before)
}

// Show hint function
function showHint() {
    // ... (same as before)
}

// Check answer function
function checkAnswer(input) {
    // ... (same as before)
}

// Update score display function
function updateScoreDisplay() {
    // ... (same as before)
}

// Next step function
function nextStep() {
    // ... (same as before)
}

// Submit answer function
function submitAnswer() {
    // ... (same as before)
}

// Log response function (UPDATED)
function logResponse(response) {
    let scenarioLog = document.getElementById(`scenario-log-${response.scenarioIndex}`);
    if (!scenarioLog) {
        scenarioLog = document.createElement('div');
        scenarioLog.id = `scenario-log-${response.scenarioIndex}`;
        scenarioLog.classList.add('mb-4');
        scenarioLog.innerHTML = `<h3 class="text-lg font-bold mb-2">Scenario: "${scenariosData[response.scenarioIndex].scenario}"</h3>`;
        document.getElementById('response-log').appendChild(scenarioLog);

        // Add click event listener to the scenario log
        scenarioLog.style.cursor = 'pointer';
        scenarioLog.addEventListener('click', function() {
            if (gameEnded) {
                displayBestApproach(response.scenarioIndex, scenarioLog);
            } else {
                alert('You can view the best possible answers after the game ends.');
            }
        });
    }
    const logEntry = document.createElement('div');
    logEntry.classList.add('mb-2');
    logEntry.innerHTML = `<strong>${response.step}:</strong> ${response.response}`;
    scenarioLog.appendChild(logEntry);
}

// Display best approach function
function displayBestApproach(index, scenarioLogElement) {
    // ... (same as before)
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
