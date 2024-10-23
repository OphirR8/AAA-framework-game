// script.js

const scenariosData = [
    {
        "id": 1,
        "scenario": "It's too much money.",
        "bestApproach": {
            "Acknowledge": "It sounds like the price is giving you some hesitation.",
            "Associate": "Many of my most successful clients felt the same way at first, but they found that the value far outweighed the cost.",
            "Ask": "What's the main result you want to achieve with this investment? Let's make sure it's worth every penny."
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like the investment is too high.",
            "Associate": "A lot of people I’ve coached were initially concerned about cost, but they realized the greatest investment you can make is in yourself.",
            "Ask": "If you knew this could create a massive shift in your life, would you still be hesitant? What’s really holding you back?"
        },
        "alexHormozi": {
            "Acknowledge": "So you’re saying this feels like a big financial commitment.",
            "Associate": "A lot of our top clients thought the same thing initially, but they made the investment because they saw the return in themselves.",
            "Ask": "What would make this feel like a no-brainer investment for you?"
        }
    },
    {
        "id": 2,
        "scenario": "I want to take a break from coaching.",
        "bestApproach": {
            "Acknowledge": "You feel like you might need some space from coaching.",
            "Associate": "Many clients felt that way at some point, but often they found that staying consistent brought them even bigger breakthroughs.",
            "Ask": "What’s the real reason behind wanting a break? Is it possible that coaching could actually help with that?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like a break might help you.",
            "Associate": "Sometimes, when people take a break, they lose momentum. Often, the biggest breakthroughs come just when you feel like pausing.",
            "Ask": "What are you hoping to gain from the break that continuing with coaching couldn’t help you with right now?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re thinking about taking a break from coaching.",
            "Associate": "A lot of successful people felt like taking a break, but the ones who stuck with it saw the most progress.",
            "Ask": "What do you think will change during the break that you’re not getting from coaching now?"
        }
    },
    {
        "id": 3,
        "scenario": "I need to think about it first.",
        "bestApproach": {
            "Acknowledge": "You feel like you need some time to process this decision.",
            "Associate": "A lot of people felt that way, but once they jumped in, they realized they didn’t need as much time as they thought.",
            "Ask": "What would help you feel more certain about your decision?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need time to think before making a decision.",
            "Associate": "It’s great that you want to be thoughtful, but sometimes action is what brings the clarity you need.",
            "Ask": "What specifically are you weighing in your mind? Let’s make sure nothing is holding you back from making the right choice."
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you need some time to think it over.",
            "Associate": "Our most successful clients often felt the same way, but they realized waiting wouldn’t get them closer to their goals.",
            "Ask": "What would make this decision a clear yes for you?"
        }
    },
    {
        "id": 4,
        "scenario": "I don’t have the money.",
        "bestApproach": {
            "Acknowledge": "So, you’re feeling like finances are a concern right now.",
            "Associate": "A lot of people feel this way initially, but they often realize that the investment pays off far more than expected.",
            "Ask": "If this investment could help you reach your goals, how would you prioritize it?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you don’t have the financial resources.",
            "Associate": "I’ve seen so many people who didn’t think they could afford it, but when they found a way, their lives transformed.",
            "Ask": "What would need to happen for you to feel comfortable making this investment?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you don’t have the funds right now.",
            "Associate": "Many of our top clients felt the same way initially, but they found ways to make it work because they knew the payoff would be worth it.",
            "Ask": "If you knew this would 10x your results, would you find a way to invest now?"
        }
    },
    {
        "id": 5,
        "scenario": "I’m keeping my coaching a secret and I can’t find a way to hide taking more money from the account.",
        "bestApproach": {
            "Acknowledge": "You’re worried about how to manage the finances without others knowing.",
            "Associate": "This is a challenge a lot of my clients have faced, and they found ways to work around it.",
            "Ask": "What are your options for managing this discreetly? Let’s find a solution that works for you."
        },
        "tonyRobbins": {
            "Acknowledge": "You’re feeling stressed about how to keep this investment hidden.",
            "Associate": "Many people I’ve worked with had to manage this, and they found creative solutions.",
            "Ask": "What’s the main concern here? Is it the financial aspect, or is there something deeper we need to address?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re concerned about keeping this investment private.",
            "Associate": "A lot of clients have faced the same challenge, but they found ways to make it work.",
            "Ask": "What would need to happen to keep this discreet while making it work financially?"
        }
    },
    {
        "id": 6,
        "scenario": "I want to settle/apply all the learnings first. I want to practice what I’ve learned.",
        "bestApproach": {
            "Acknowledge": "You want some time to integrate what you’ve learned before continuing.",
            "Associate": "Many of my clients felt this way, but they realized coaching helped them apply those lessons even better.",
            "Ask": "What if coaching could help you accelerate your application and make progress even faster?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need to apply what you’ve learned before moving forward.",
            "Associate": "I’ve seen people take that route, but the truth is, consistent growth happens when you have guidance through the application process.",
            "Ask": "What if you could apply the learnings and make progress faster by staying in coaching?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you want to take some time to apply what you’ve learned before continuing.",
            "Associate": "A lot of people have felt this way, but they found that consistent coaching helps them apply the learnings even faster.",
            "Ask": "What if the coaching actually helped you implement those learnings more effectively?"
        }
    },
    {
        "id": 7,
        "scenario": "Budget only allows for one (Husband is in coaching, wife is in BOGO).",
        "bestApproach": {
            "Acknowledge": "So you feel like the budget is tight, and only one of you can continue with coaching.",
            "Associate": "That’s a common concern. However, many couples found that investing in both partners accelerated their progress together.",
            "Ask": "What if we could find a way to make this work for both of you? Would that bring you closer to your shared goals?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like the budget only allows for one person to participate in coaching.",
            "Associate": "I’ve seen couples who had the same concern, but they realized that when both partners invest in their growth, it creates exponential results.",
            "Ask": "What if investing in both of you brought about faster, more transformative results for your relationship and goals?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying that your budget only allows for one person to be in coaching.",
            "Associate": "Many couples face the same dilemma, but they find that investing in both partners accelerates growth for both of them.",
            "Ask": "How do you think having both of you in coaching could multiply your results?"
        }
    },
    {
        "id": 8,
        "scenario": "I think I need a mentor more than a coach, I have money only for one.",
        "bestApproach": {
            "Acknowledge": "You’re feeling torn between mentorship and coaching, and you have to choose one.",
            "Associate": "This is common. A lot of clients felt like they needed a mentor, but coaching gave them the accountability and framework to apply knowledge and make measurable progress.",
            "Ask": "What’s the biggest outcome you’re looking for? Let’s explore if coaching can get you there faster."
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like mentorship might be more valuable than coaching right now.",
            "Associate": "Many successful people have felt the same, but the truth is that coaching gives you the strategies and tools to create breakthroughs and lasting transformation.",
            "Ask": "What specific outcome are you looking for that makes you lean towards a mentor? Let’s see if coaching can meet that need."
        },
        "alexHormozi": {
            "Acknowledge": "You’re thinking that you need a mentor more than a coach, and you’ve got to choose between them.",
            "Associate": "I’ve seen a lot of clients in this situation, but they realized that coaching provides not just direction but also accountability, which helped them implement faster.",
            "Ask": "What do you think a mentor could provide that coaching wouldn’t?"
        }
    },
    {
        "id": 9,
        "scenario": "I’m waiting for my business deal/promotion/sale to come through to continue the coaching.",
        "bestApproach": {
            "Acknowledge": "You’re feeling like the timing isn’t right until this business deal or promotion comes through.",
            "Associate": "Many of my clients felt this way, but they found that pushing forward with coaching actually helped them secure those deals faster.",
            "Ask": "What if the coaching could help you close that deal or get that promotion sooner? Would that change your decision?"
        },
        "tonyRobbins": {
            "Acknowledge": "You’re feeling like you need to wait until the deal closes or the promotion comes before moving forward.",
            "Associate": "I’ve worked with many clients in similar situations, and what they found was that coaching helped them make the deal or promotion happen even faster.",
            "Ask": "What if continuing the coaching helped you accelerate that deal or promotion? How would that change things?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re waiting for a big business deal or promotion to come through before continuing.",
            "Associate": "A lot of our top clients felt the same way, but they realized waiting for the perfect moment held them back from reaching their next level.",
            "Ask": "What would happen if you didn’t wait and took action now?"
        }
    },
    {
        "id": 10,
        "scenario": "Everything in my life is going the way I want, so there is no need for investing in coaching.",
        "bestApproach": {
            "Acknowledge": "So everything’s on track, and you don’t feel the need for coaching right now.",
            "Associate": "A lot of people feel that way when things are going well, but the ones who invest in themselves during the good times often experience exponential growth.",
            "Ask": "What if coaching could take things to an even higher level? What would that look like for you?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like life is going great and there’s no immediate need for coaching.",
            "Associate": "I’ve seen this before, but what separates the good from the great is that they invest in their growth even when things are going well. That’s how they stay ahead.",
            "Ask": "What’s the next level for you? What if coaching could help you get there?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying everything’s going well right now, so you don’t feel a need for coaching.",
            "Associate": "I’ve had a lot of clients in your position—everything was going smoothly, but they realized that coaching helped them scale even further.",
            "Ask": "What would it look like if you could take things from ‘good’ to ‘great’?"
        }
    },
    {
        "id": 11,
        "scenario": "I am unemployed and I’m saving the money for coaching to invest in Facebook ads, they can tangibly get me clients when coaching does not.",
        "bestApproach": {
            "Acknowledge": "So you’re prioritizing investing in ads because you think they’ll get you clients faster than coaching.",
            "Associate": "A lot of clients in your position felt the same, but they discovered that coaching gave them the skills to turn ads into real opportunities and long-term growth.",
            "Ask": "What if we could combine both? Coaching can help you optimize your ads to get clients faster. Does that sound like a win-win?"
        },
        "tonyRobbins": {
            "Acknowledge": "You’re focused on investing in ads to get tangible results rather than coaching right now.",
            "Associate": "I’ve seen this before—people think ads will bring them clients, but without the right mindset and strategy, they don’t see the return they expect.",
            "Ask": "What if coaching could give you the strategies to make sure those ads convert into real, sustainable business?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you’re unemployed and think Facebook ads will get you clients faster than coaching.",
            "Associate": "Many people in your position thought the same, but what they found was that coaching helped them set up systems and strategies to turn those ads into consistent revenue.",
            "Ask": "What if coaching could give you the tools to maximize the effectiveness of those ads? Would that be worth it?"
        }
    },
    {
        "id": 12,
        "scenario": "I have money for you or a sales coach.",
        "bestApproach": {
            "Acknowledge": "You’re deciding between working with me or a sales coach, and you only have the budget for one.",
            "Associate": "This happens a lot. Many clients realized that working with me gave them both the sales strategies they needed and a whole lot more.",
            "Ask": "What if we could cover sales and more in coaching? How would that impact your results?"
        },
        "tonyRobbins": {
            "Acknowledge": "You’re deciding between investing in a coach or a sales coach.",
            "Associate": "I’ve seen many people struggle with this choice, but the reality is, the right coaching addresses the mindset and strategy behind sales, which leads to even greater results.",
            "Ask": "What if you could get sales results and transform your personal and professional life at the same time? Would that be worth it?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re debating whether to invest in me or a sales coach.",
            "Associate": "A lot of people in your shoes made the same decision, and they realized that coaching with me helped them get their sales process on track and so much more.",
            "Ask": "What’s the biggest outcome you’re looking for in coaching? Let’s see how we can cover that and more."
        }
    },
    {
        "id": 13,
        "scenario": "I want to cover my debt first.",
        "bestApproach": {
            "Acknowledge": "You’re feeling like your debt is a priority before investing in coaching.",
            "Associate": "This is a common concern. Many clients found that coaching helped them develop strategies to grow their income and pay off debt faster.",
            "Ask": "What if coaching could give you the tools to accelerate your debt repayment and increase your financial stability?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need to eliminate your debt before you invest in coaching.",
            "Associate": "I’ve worked with many clients in debt, and they discovered that coaching helped them grow their income, allowing them to pay off their debt faster.",
            "Ask": "What if coaching could give you the tools to eliminate your debt sooner and build a more secure future?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you want to prioritize covering your debt before investing in coaching.",
            "Associate": "A lot of people feel the same, but they realized that investing in coaching helped them clear their debt even faster by increasing their income.",
            "Ask": "What if coaching helped you create a plan to clear your debt and increase your earnings?"
        }
    },
    {
        "id": 14,
        "scenario": "I want to save money for other things.",
        "bestApproach": {
            "Acknowledge": "You’re prioritizing saving for other things right now, which makes total sense.",
            "Associate": "A lot of my clients were in the same position but found that the clarity and strategies they gained from coaching helped them achieve those savings goals more quickly.",
            "Ask": "What if coaching accelerated your ability to save for those other things? Would that change how you see this investment?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need to save money for other things in your life.",
            "Associate": "Many of my clients were in the same boat, but they discovered that by investing in themselves through coaching, they could create the resources and mindset to achieve those other goals faster.",
            "Ask": "What are those other priorities you want to save for? What if coaching could help you reach them more effectively?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you want to save your money for other priorities right now.",
            "Associate": "A lot of clients thought the same at first, but they soon realized that investing in themselves actually created the ability to afford more of the things they wanted.",
            "Ask": "What if coaching could help you generate more income or opportunities, allowing you to save even more for those other things?"
        }
    },
    {
        "id": 15,
        "scenario": "I need to check my finances.",
        "bestApproach": {
            "Acknowledge": "You’re feeling like you need to review your financial situation before making a decision.",
            "Associate": "That’s a smart move, and many clients realized that through coaching, they developed better financial strategies and control.",
            "Ask": "What if coaching gave you the tools to not only manage your finances but also improve them? Would that change how you see this decision?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need to check your finances before moving forward.",
            "Associate": "It’s great that you’re being responsible. A lot of my clients did the same and found that coaching actually helped them master their financial situation.",
            "Ask": "What if coaching could help you get even clearer and stronger with your finances? How would that impact your decision?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you need to take a closer look at your finances before committing.",
            "Associate": "A lot of people have felt the same, but they found that investing in coaching often helped them manage their finances more effectively.",
            "Ask": "What part of your finances are you most concerned about? Let’s see if we can find a solution together."
        }
    },
    {
        "id": 16,
        "scenario": "I need to get my finances where they should be.",
        "bestApproach": {
            "Acknowledge": "You want to feel more financially secure before making this investment.",
            "Associate": "A lot of clients were in a similar position but found that coaching actually helped them get their finances on track much faster.",
            "Ask": "What if coaching could provide the tools to help you get your finances where you want them to be? How would that influence your decision?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you need to get your finances in a better place before moving forward.",
            "Associate": "That’s a common feeling, but many people have found that investing in coaching helped them take control of their finances much more quickly.",
            "Ask": "What if coaching could help you get your finances in order and beyond? Would that shift your perspective?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you want to get your finances in order before investing in coaching.",
            "Associate": "A lot of our clients felt that way at first, but they realized that coaching helped them accelerate their financial growth.",
            "Ask": "What if coaching helped you fix your finances faster? Would that change things for you?"
        }
    },
    {
        "id": 17,
        "scenario": "I feel good right now, I don’t need coaching.",
        "bestApproach": {
            "Acknowledge": "You’re feeling like everything is in a good place, and that’s why coaching doesn’t seem necessary right now.",
            "Associate": "Many clients felt the same, but they realized that coaching during the good times actually helped them create even more opportunities and growth.",
            "Ask": "What’s your next goal? What if coaching could help you reach it even faster?"
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like you’re in a good spot and don’t see the need for coaching at the moment.",
            "Associate": "That’s fantastic! Often, the best time to invest in coaching is when you feel good—it’s about creating even more momentum and raising the standard of your life.",
            "Ask": "What would the next level of your life look like? What if coaching could help you achieve that?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re saying you’re in a good place and don’t feel the need for coaching right now.",
            "Associate": "A lot of successful people felt that way too, but they found that coaching during the ‘good times’ actually helped them go to the next level.",
            "Ask": "What if coaching could help you go from feeling good to achieving your biggest goals? Would that be worth exploring?"
        }
    },
    {
        "id": 18,
        "scenario": "I want to check other coaching programs for a different perspective.",
        "bestApproach": {
            "Acknowledge": "You’re thinking of exploring other coaching options to get a broader view.",
            "Associate": "That’s a natural part of the decision process. Many clients found that after looking around, they got exactly what they needed with this program.",
            "Ask": "What are the key things you’re hoping to find elsewhere? Let’s explore if we can meet those needs here."
        },
        "tonyRobbins": {
            "Acknowledge": "You feel like exploring other coaching programs to get a different perspective.",
            "Associate": "That’s a smart move, but many people realized that they already had what they needed here—they just needed to dive in.",
            "Ask": "What are you looking for in those other programs? Let’s see if we can address that right here."
        },
        "alexHormozi": {
            "Acknowledge": "You’re considering checking out other coaching programs before making a decision.",
            "Associate": "A lot of people wanted to explore other options too, but they found that our program gave them what they were looking for.",
            "Ask": "What are you hoping to find in another program that you haven’t seen here? Let’s make sure this is the right fit for you."
        }
    },
    {
        "id": 19,
        "scenario": "I am thinking of maybe taking a different program I’m thinking about, I’m not sure which one I will take.",
        "bestApproach": {
            "Acknowledge": "You’re feeling unsure about which program to choose and are considering other options.",
            "Associate": "That’s completely understandable. Many clients found that, after weighing their options, they came back because this program aligned best with their long-term goals.",
            "Ask": "What’s the key factor for you in deciding between programs? Let’s see if this is the right fit for that."
        },
        "tonyRobbins": {
            "Acknowledge": "You’re considering another program but haven’t fully decided yet.",
            "Associate": "I’ve seen people weighing their options like this before, and often, it’s about making sure the program aligns with your deepest goals and needs.",
            "Ask": "What’s the one thing you’re hoping to get from another program? What if we could meet that right here?"
        },
        "alexHormozi": {
            "Acknowledge": "You’re thinking about taking a different program but haven’t decided yet.",
            "Associate": "Many people were in the same position, but they realized that the clarity they got from our program was exactly what they needed to move forward.",
            "Ask": "What are you hoping that other program will offer you? Let’s make sure this is the best fit for your goals."
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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start game function
function startGame(minutes) {
    timeRemaining = minutes * 60;
    document.getElementById('timer-buttons').classList.add('hidden');
    document.getElementById('learn-btn').classList.add('hidden'); // Hide Learn button
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

    // Show the Start Over button
    document.getElementById('start-over-container').classList.remove('hidden');

    // Show the Learn button
    document.getElementById('learn-btn').classList.remove('hidden');
}


// Start over function
function startOver() {
    // Reset all game variables
    currentScenarioIndex = -1;
    currentStepIndex = 0;
    stepsCompleted = 0;
    scenariosCompleted = 0;
    commissionCollected = 0;
    timeRemaining = 0;
    gameEnded = false;
    responses = [];

    // Hide elements related to game end
    document.getElementById('final-score').classList.add('hidden');
    document.getElementById('start-over-container').classList.add('hidden');
    document.getElementById('best-approach-container').classList.add('hidden');

    // Clear the response log
    document.getElementById('response-log').innerHTML = '';
    document.getElementById('log-container').style.display = 'none';

    // Hide feedback and hint containers
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('hint-container').classList.add('hidden');

    // Show the timer buttons again
    document.getElementById('timer-buttons').classList.remove('hidden');

    // Hide the score display
    document.getElementById('score').innerHTML = '';

    // Reset the game container visibility
    document.getElementById('game-container').classList.add('hidden');

    // Show the Learn button again
    document.getElementById('learn-btn').classList.remove('hidden');

    // Show the timer buttons again
    document.getElementById('timer-buttons').classList.remove('hidden');

    // Hide the game container
    document.getElementById('game-container').classList.add('hidden');
}

// Update scenario function
function updateScenario() {
    currentScenarioIndex = (currentScenarioIndex + 1) % scenariosData.length;
    currentStepIndex = 0;
    updateStep();
    document.getElementById('scenario').textContent = `Scenario: "${scenariosData[currentScenarioIndex].scenario}"`;
    clearPreviousResponses();
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('hint-container').classList.add('hidden');
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
    let hintText = '';
    if (currentStep === 'Acknowledge') {
        hintText = 'Repeat the prospect’s concern back to them to show understanding.';
    } else if (currentStep === 'Associate') {
        hintText = 'Relate their concern to positive experiences of others.';
    } else if (currentStep === 'Ask') {
        hintText = 'Ask an open-ended question to explore their concern further.';
    }

    if (hintText) {
        document.getElementById('hint-container').innerText = `Hint for ${currentStep}: ${hintText}`;
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
        if (lowercaseInput.includes('understand') || lowercaseInput.includes('hear') || lowercaseInput.includes('see') || lowercaseInput.includes('feel') || lowercaseInput.includes('you')) {
            isCorrect = true;
            feedback = 'Boom! Great acknowledgment of the concern!';
        } else {
            feedback = 'Almost there! Acknowledge by showing understanding.';
        }
        document.getElementById('acknowledge-response').classList.remove('hidden');
        document.getElementById('acknowledge-response').querySelector('span').textContent = input;
    } else if (currentStep === 'Associate') {
        if (lowercaseInput.includes('client') || lowercaseInput.includes('successful') || lowercaseInput.includes('same way') || lowercaseInput.includes('others')) {
            isCorrect = true;
            feedback = 'Yes! Fantastic association with positive outcomes!';
        } else {
            feedback = 'Try to associate it with success and positivity!';
        }
        document.getElementById('associate-response').classList.remove('hidden');
        document.getElementById('associate-response').querySelector('span').textContent = input;
    } else if (currentStep === 'Ask') {
        if (lowercaseInput.includes('?') || lowercaseInput.includes('what') || lowercaseInput.includes('how') || lowercaseInput.includes('when') || lowercaseInput.includes('where')) {
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

         // Hide the hint container after submission
        document.getElementById('hint-container').classList.add('hidden');
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

// Event listeners for timer buttons
document.getElementById('timer-5min').addEventListener('click', () => startGame(5));
document.getElementById('timer-10min').addEventListener('click', () => startGame(10));
document.getElementById('timer-15min').addEventListener('click', () => startGame(15));

// Event listener for Start Over button
document.getElementById('start-over-btn').addEventListener('click', startOver);

// Event listeners for other buttons
document.getElementById('submit-btn').addEventListener('click', submitAnswer);
document.getElementById('hint-btn').addEventListener('click', showHint);
document.getElementById('end-game-btn').addEventListener('click', endGame);

// Event listener for Enter key on user input
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitAnswer();
    }
});
