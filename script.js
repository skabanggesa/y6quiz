// User data
const users = {
    "AFRIQ": "12142867",
    "MIKHAEL": "13142870",
    "BADRIYYA": "13142875",
    "DARWIS": "13143031",
    "ISDAMIN": "13143033",
    "SYAFARUDDIN": "13143036",
    "IEZZARIEL": "13143362",
    "ATTA": "13143364",
    "SYAFIQ": "13143387",
    "AIDIL": "13143389",
    "RYKARL": "13143392",
    "HAMIZAN": "13280536",
    "NIDZAM": "13144397",
    "DAMIYA": "13144314",
    "NUFAIL": "13144320",
    "ULYAA": "13144322",
    "AULIA": "13144326",
    "AZMINA": "13144241",
    "FATIMAH": "13144344",
    "SATIRAH": "13144822",
    "NURNABILA": "13144824",
    "ARIANA": "13144866",
    "RASYA": "13144868",
    "SHAFA": "13269636"
};

// Section A questions
const sectionAQuestions = [
    { question: "She ______ (go) to the market every Saturday.", options: ["goes", "go", "is going", "went"], answer: "goes" },
    { question: "I ______ (not see) him since last week.", options: ["didn't see", "haven't seen", "don't see", "am not seeing"], answer: "haven't seen" },
    { question: "By next year, they ______ (finish) the building.", options: ["will finish", "will have finished", "finished", "are finishing"], answer: "will have finished" },
    { question: "He usually ______ (walk) to school.", options: ["walks", "is walking", "walk", "walked"], answer: "walks" },
    { question: "What ______ you ______ (do) when I called you?", options: ["were, doing", "are, doing", "did, do", "do, do"], answer: "were, doing" },
    { question: "She ______ (be) in London for two years.", options: ["is", "was", "has been", "had been"], answer: "has been" },
    { question: "We ______ (eat) when the phone rang.", options: ["ate", "were eating", "have eaten", "are eating"], answer: "were eating" },
    { question: "They ______ (study) English now.", options: ["study", "studied", "are studying", "have studied"], answer: "are studying" },
    { question: "If it rains, we ______ (stay) indoors.", options: ["stay", "will stay", "would stay", "stayed"], answer: "will stay" },
    { question: "The train ______ (arrive) at 7 pm.", options: ["arrives", "arrive", "is arriving", "arrived"], answer: "arrives" },
    { question: "I ______ (not do) my homework yet.", options: ["didn't do", "haven't done", "don't do", "am not doing"], answer: "haven't done" },
    { question: "When he came, I ______ (read) a book.", options: ["read", "was reading", "have read", "am reading"], answer: "was reading" },
    { question: "______ you ever ______ (be) to Japan?", options: ["Did, be", "Have, been", "Do, be", "Are, being"], answer: "Have, been" },
    { question: "I think it ______ (rain) later.", options: ["rains", "is raining", "will rain", "rained"], answer: "will rain" },
    { question: "He ______ (leave) before you arrived.", options: ["left", "had left", "has left", "was leaving"], answer: "had left" },
    { question: "She ______ (write) five emails today.", options: ["writes", "has written", "is writing", "wrote"], answer: "has written" },
    { question: "We ______ (live) here since 2015.", options: ["live", "lived", "have lived", "are living"], answer: "have lived" },
    { question: "My brother ______ (graduate) next year.", options: ["graduates", "will graduate", "is graduating", "graduated"], answer: "will graduate" },
    { question: "He ______ (not eat) breakfast yet.", options: ["didn't eat", "hasn't eaten", "doesn't eat", "isn't eating"], answer: "hasn't eaten" },
    { question: "I ______ (sleep) for two hours before the alarm rang.", options: ["slept", "had slept", "have slept", "was sleeping"], answer: "had slept" },
    { question: "Neither of the boys ______ late.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "The committee ______ deciding on the matter now.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "Mathematics ______ my favourite subject.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "The list of names ______ on the table.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "Everyone ______ excited about the trip.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "The children ______ playing in the park.", options: ["is", "are", "was", "be"], answer: "are" },
    { question: "Either the cat or the dogs ______ making noise.", options: ["is", "are", "were", "be"], answer: "are" },
    { question: "The team ______ winning this season.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "Ten dollars ______ too much for that item.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "Bread and butter ______ his daily breakfast.", options: ["is", "are", "were", "be"], answer: "is" },
    { question: "She bought ______ umbrella.", options: ["a", "an", "the", "-"], answer: "an" },
    { question: "I saw ______ owl in the tree.", options: ["a", "an", "the", "-"], answer: "an" },
    { question: "Can you pass me ______ salt, please?", options: ["a", "an", "the", "-"], answer: "the" },
    { question: "They visited ______ Eiffel Tower.", options: ["a", "an", "the", "-"], answer: "the" },
    { question: "We stayed in ______ hotel by the beach.", options: ["a", "an", "the", "-"], answer: "a" },
    { question: "I have never seen ______ elephant.", options: ["a", "an", "the", "-"], answer: "an" },
    { question: "She is reading ______ interesting book.", options: ["a", "an", "the", "-"], answer: "an" },
    { question: "______ moon looks beautiful tonight.", options: ["A", "An", "The", "-"], answer: "The" },
    { question: "I met ______ European tourist yesterday.", options: ["a", "an", "the", "-"], answer: "a" },
    { question: "He is ______ honest man.", options: ["a", "an", "the", "-"], answer: "an" },
    { question: "The cat is hiding ______ the sofa.", options: ["in", "on", "under", "at"], answer: "under" },
    { question: "She arrived ______ the airport at 8 am.", options: ["in", "on", "at", "to"], answer: "at" },
    { question: "They walked ______ the river.", options: ["along", "on", "in", "at"], answer: "along" },
    { question: "He is good ______ painting.", options: ["in", "on", "at", "for"], answer: "at" },
    { question: "The book is ______ the table.", options: ["in", "on", "at", "under"], answer: "on" },
    { question: "I was born ______ March.", options: ["in", "on", "at", "-"], answer: "in" },
    { question: "They live ______ Kuala Lumpur.", options: ["in", "on", "at", "-"], answer: "in" },
    { question: "He was angry ______ me.", options: ["with", "at", "for", "on"], answer: "with" },
    { question: "The plane flew ______ the clouds.", options: ["in", "on", "above", "at"], answer: "above" },
    { question: "I will call you ______ Monday.", options: ["in", "on", "at", "-"], answer: "on" },
    { question: "You ______ not speak during the test.", options: ["can", "may", "must", "should"], answer: "must" },
    { question: "______ I borrow your pen?", options: ["Can", "May", "Must", "Should"], answer: "May" },
    { question: "He ______ run very fast when he was younger.", options: ["can", "could", "may", "might"], answer: "could" },
    { question: "You ______ see a doctor.", options: ["can", "may", "should", "would"], answer: "should" },
    { question: "It ______ rain later. Take an umbrella.", options: ["can", "may", "must", "should"], answer: "may" },
    { question: "Students ______ wear uniforms.", options: ["can", "may", "must", "should"], answer: "must" },
    { question: "______ you like some tea?", options: ["Can", "May", "Would", "Should"], answer: "Would" },
    { question: "She ______ have missed the bus.", options: ["can", "may", "must", "should"], answer: "may" },
    { question: "They ______ be at home now.", options: ["can", "may", "must", "should"], answer: "must" },
    { question: "We ______ finish the work by tomorrow.", options: ["can", "may", "must", "should"], answer: "must" },
    { question: "If you heat ice, it ______ (melt).", options: ["melts", "will melt", "would melt", "melted"], answer: "melts" },
    { question: "If I see him, I ______ (tell) him the news.", options: ["tell", "will tell", "would tell", "told"], answer: "will tell" },
    { question: "If I were rich, I ______ (travel) the world.", options: ["travel", "will travel", "would travel", "travelled"], answer: "would travel" },
    { question: "If he had studied, he ______ (pass) the exam.", options: ["passes", "will pass", "would pass", "would have passed"], answer: "would have passed" },
    { question: "If it ______ (rain), we will cancel the picnic.", options: ["rains", "will rain", "would rain", "rained"], answer: "rains" },
    { question: "If you didn't lie, they ______ (believe) you.", options: ["believe", "will believe", "would believe", "would have believed"], answer: "would believe" },
    { question: "If she ______ (be) taller, she would join the team.", options: ["is", "was", "were", "had been"], answer: "were" },
    { question: "If I ______ (know) earlier, I would have helped.", options: ["know", "knew", "had known", "would know"], answer: "had known" },
    { question: "If they invite me, I ______ (go).", options: ["go", "will go", "would go", "would have gone"], answer: "will go" },
    { question: "If I have time, I ______ (call) you tonight.", options: ["call", "will call", "would call", "called"], answer: "will call" },
    { question: "The cake ______ (bake) by my sister.", options: ["bakes", "is baked", "was baked", "has baked"], answer: "was baked" },
    { question: "A song ______ (sing) by her at the party.", options: ["sings", "is sung", "was sung", "has sung"], answer: "was sung" },
    { question: "The documents ______ (send) yesterday.", options: ["send", "are sent", "were sent", "have sent"], answer: "were sent" },
    { question: "This book ______ (write) by a famous author.", options: ["writes", "is written", "was written", "has written"], answer: "was written" },
    { question: "The window ______ (break) last night.", options: ["breaks", "is broken", "was broken", "has broken"], answer: "was broken" },
    { question: "She said she ______ (be) tired.", options: ["is", "was", "has been", "had been"], answer: "was" },
    { question: "He asked if I ______ (like) chocolate.", options: ["like", "liked", "have liked", "had liked"], answer: "liked" },
    { question: "They said they ______ (go) to the zoo.", options: ["go", "went", "have gone", "had gone"], answer: "went" },
    { question: "I told her I ______ (call) her later.", options: ["call", "will call", "would call", "called"], answer: "would call" },
    { question: "She said she ______ (not see) the movie.", options: ["doesn't see", "didn't see", "hasn't seen", "hadn't seen"], answer: "hadn't seen" },
    { question: "______ do you live?", options: ["Where", "When", "How", "Why"], answer: "Where" },
    { question: "What ______ she doing now?", options: ["is", "are", "was", "were"], answer: "is" },
    { question: "______ you ever been to Langkawi?", options: ["Did", "Have", "Do", "Are"], answer: "Have" },
    { question: "Why ______ he leave early?", options: ["does", "did", "has", "is"], answer: "did" },
    { question: "How long ______ you studied English?", options: ["did", "have", "do", "are"], answer: "have" },
    { question: "The man ______ lives next door is a doctor.", options: ["who", "which", "whom", "whose"], answer: "who" },
    { question: "This is the book ______ I borrowed.", options: ["who", "which", "whom", "whose"], answer: "which" },
    { question: "She's the girl ______ won the contest.", options: ["who", "which", "whom", "whose"], answer: "who" },
    { question: "That's the dog ______ barked all night.", options: ["who", "which", "whom", "whose"], answer: "that" },
    { question: "The house ______ we stayed in was beautiful.", options: ["who", "which", "whom", "whose"], answer: "which" },
    { question: "She enjoys ______ (read) novels.", options: ["read", "to read", "reading", "reads"], answer: "reading" },
    { question: "I want ______ (travel) to Europe.", options: ["travel", "to travel", "travelling", "travels"], answer: "to travel" },
    { question: "They decided ______ (stay) at home.", options: ["stay", "to stay", "staying", "stays"], answer: "to stay" },
    { question: "He avoids ______ (talk) too much.", options: ["talk", "to talk", "talking", "talks"], answer: "talking" },
    { question: "It's important ______ (be) on time.", options: ["be", "to be", "being", "is"], answer: "to be" },
    { question: "This car is ______ (fast) than that one.", options: ["fast", "faster", "fastest", "more fast"], answer: "faster" },
    { question: "He is the ______ (tall) boy in class.", options: ["tall", "taller", "tallest", "most tall"], answer: "tallest" },
    { question: "My house is ______ (big) than yours.", options: ["big", "bigger", "biggest", "more big"], answer: "bigger" },
    { question: "That was the ______ (bad) day of my life.", options: ["bad", "worse", "worst", "most bad"], answer: "worst" },
    { question: "She sings ______ (well) than her sister.", options: ["well", "better", "best", "more well"], answer: "better" }
];

// Section B questions
const sectionBSentences = [
    "Yesterday, I bought a book and my sister read a magazine.",
    "This morning, the teacher gave homework and the students wrote the answers.",
    "Last night, she cooked dinner and her husband washed the dishes.",
    "Every Sunday, we play football and our parents watch us.",
    "At 8 o'clock, he called his friend and they discussed the project.",
    "Last week, I visited my grandparents and my brother stayed at home.",
    "Today, she wears a red dress and her friend wears a blue one.",
    "This evening, they are watching a movie and I am reading a novel.",
    "Every day, my father drives to work and my mother takes the bus.",
    "Tomorrow, we will clean the house and they will decorate the hall.",
    "In the afternoon, she studied mathematics and he revised science.",
    "Last weekend, we went to the zoo and our cousins took photos.",
    "After lunch, the students returned to class and the teacher continued the lesson.",
    "Every morning, she feeds the cat and he waters the plants.",
    "Last night, I watched a documentary and my sister played games.",
    "Next Friday, we are going to the beach and our friends are joining us.",
    "At noon, he ate his lunch and she drank some juice.",
    "Before school, I packed my bag and my brother checked his homework.",
    "In the evening, the children played outside and their mother called them in.",
    "At night, I listen to music and my cousin writes poems.",
    "On Monday, she had a test and her friend borrowed her notes.",
    "Yesterday afternoon, we cleaned the classroom and the teacher gave us stars.",
    "Before dinner, I fed the cat and my sister swept the floor.",
    "This morning, Ali walked to school and Siti cycled there.",
    "Every weekend, my friends play badminton and I join them.",
    "Next week, we will attend a camp and our teachers will supervise us.",
    "After school, I did my homework and my brother watched TV.",
    "On Tuesday, the students had a field trip and the teacher gave instructions.",
    "This afternoon, we are practising for the play and they are preparing props.",
    "Yesterday evening, I cooked noodles and she fried eggs.",
    "Every Friday, we go to the library and borrow books.",
    "Next month, the school will organise a competition and many students will participate.",
    "On Saturday, my aunt visited us and my mother baked a cake.",
    "In the morning, she did yoga and he jogged in the park.",
    "At 10 a.m., the baby slept peacefully and her mother read a book.",
    "This weekend, I am visiting my uncle and my parents are going shopping.",
    "After dinner, we played board games and watched a movie.",
    "This morning, he lost his keys and I found them under the table.",
    "Yesterday, they painted the wall and I helped them.",
    "Last year, she travelled to Japan and he studied in Korea."
];

// Global variables
let currentUser = null;
let currentSection = 'A';
let currentQuestionIndex = 0;
let selectedQuestionsA = [];
let selectedQuestionsB = [];
let userAnswersA = [];
let userAnswersB = [];
let scoreA = 0;
let scoreB = 0;

// DOM elements
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const container = document.querySelector('.container');

// Login function
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim().toUpperCase();
    const password = document.getElementById('password').value;
    
    if (users[username] && users[username] === password) {
        currentUser = username;
        showQuizSection();
    } else {
        loginError.textContent = "Invalid username or password";
    }
}

// Show quiz section after login
function showQuizSection() {
    container.innerHTML = `
        <div class="header">
            <h1>English Quiz</h1>
            <div class="username-display">${currentUser}</div>
            <button class="logout-btn">Logout</button>
        </div>
        
        <div class="quiz-container" id="sectionA">
            <h2>Section A: Multiple Choice</h2>
            <div id="question-container"></div>
            <div class="navigation">
                <button id="prev-btn">Previous</button>
                <button id="next-btn">Next</button>
            </div>
            <button id="next-section-btn" style="display:none;">Continue to Section B</button>
        </div>
        
        <div class="quiz-container" id="sectionB">
            <h2>Section B: Jumbled Sentences</h2>
            <div id="jumbled-container"></div>
            <div class="navigation">
                <button id="prev-btn-b">Previous</button>
                <button id="next-btn-b">Next</button>
            </div>
            <button id="finish-btn">Finish Quiz</button>
        </div>
        
        <div class="result-container">
            <h2>Quiz Result</h2>
            <div class="section-score">Section A: <span id="score-a">0</span>/30 correct</div>
            <div class="section-score">Section B: <span id="score-b">0</span>/20 correct</div>
            <div class="score">Total score: <span id="total-score">0</span>/120</div>
            <div class="grade">Grade: <span id="grade-value">-</span></div>
            <div class="feedback" id="feedback"></div>
            <button class="try-again-btn">Try Again</button>
            <button class="send-result-btn">Send Result</button>
            <button class="logout-btn">Logout</button>
        </div>
    `;
    
    document.querySelector('.logout-btn').addEventListener('click', logout);
    startSectionA();
}

// Start Section A
function startSectionA() {
    currentQuestionIndex = 0;
    userAnswersA = [];
    scoreA = 0;
    
    document.getElementById('sectionB').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
    document.getElementById('sectionA').style.display = 'block';
    
    selectedQuestionsA = [...sectionAQuestions].sort(() => 0.5 - Math.random()).slice(0, 30);
    showQuestionA();
    
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestionA();
        }
    });
    
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < selectedQuestionsA.length - 1) {
            currentQuestionIndex++;
            showQuestionA();
        } else {
            document.getElementById('next-section-btn').style.display = 'block';
        }
    });
    
    document.getElementById('next-section-btn').addEventListener('click', startSectionB);
}

// Show question for Section A
function showQuestionA() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = selectedQuestionsA[currentQuestionIndex];
    
    const shuffledOptions = [...currentQuestion.options].sort(() => 0.5 - Math.random());
    
    questionContainer.innerHTML = `
        <div class="question">
            <h3>Question ${currentQuestionIndex + 1}/${selectedQuestionsA.length}</h3>
            <p>${currentQuestion.question}</p>
            <div class="options">
                ${shuffledOptions.map((option, index) => `
                    <button class="option-btn" data-index="${index}">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
    
    if (currentQuestionIndex < selectedQuestionsA.length - 1) {
        document.getElementById('next-section-btn').style.display = 'none';
    }
    
    if (userAnswersA[currentQuestionIndex] !== undefined) {
        const selectedIndex = shuffledOptions.indexOf(userAnswersA[currentQuestionIndex]);
        if (selectedIndex !== -1) {
            document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('selected');
        }
    }
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userAnswersA[currentQuestionIndex] = shuffledOptions[parseInt(btn.dataset.index)];
        });
    });
}

// Smart answer checking for Section B
function isAnswerAcceptable(userAnswer, correctSentence) {
    // Normalize both sentences
    const normalize = (str) => {
        return str.toLowerCase()
                 .replace(/[.,]/g, '')
                 .split(' ')
                 .filter(word => word.length > 0);
    };
    
    const userWords = normalize(userAnswer);
    const correctWords = normalize(correctSentence);
    
    // Check if word counts match
    if (userWords.length !== correctWords.length) {
        return false;
    }
    
    // Check for exact word set match (order doesn't matter)
    const userWordSet = new Set(userWords);
    const correctWordSet = new Set(correctWords);
    
    if (userWordSet.size !== correctWordSet.size) {
        return false;
    }
    
    for (const word of userWordSet) {
        if (!correctWordSet.has(word)) {
            return false;
        }
    }
    
    return true;
}

// Start Section B
function startSectionB() {
    currentQuestionIndex = 0;
    userAnswersB = [];
    scoreB = 0;
    
    document.getElementById('sectionA').style.display = 'none';
    document.getElementById('sectionB').style.display = 'block';
    
    selectedQuestionsB = [...sectionBSentences].sort(() => 0.5 - Math.random()).slice(0, 30);
    showQuestionB();
    
    document.getElementById('prev-btn-b').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestionB();
        }
    });
    
    document.getElementById('next-btn-b').addEventListener('click', () => {
        if (currentQuestionIndex < selectedQuestionsB.length - 1) {
            currentQuestionIndex++;
            showQuestionB();
        }
    });
    
    document.getElementById('finish-btn').addEventListener('click', showResult);
}

// Show question for Section B
function showQuestionB() {
    const jumbledContainer = document.getElementById('jumbled-container');
    const currentSentence = selectedQuestionsB[currentQuestionIndex];
    
    const words = currentSentence.split(' ');
    const shuffledWords = [...words].sort(() => 0.5 - Math.random());
    
    jumbledContainer.innerHTML = `
        <div class="jumbled-sentence">
            <h3>Question ${currentQuestionIndex + 1}/${selectedQuestionsB.length}</h3>
            <p>Rearrange the words to form a correct sentence:</p>
            <div class="jumbled-words" id="jumbled-words">
                ${shuffledWords.map((word, index) => `
                    <span class="word" data-index="${index}">${word}</span>
                `).join('')}
            </div>
            <div class="answer-area" id="answer-area"></div>
            <button id="clear-btn">Clear</button>
        </div>
    `;
    
    if (userAnswersB[currentQuestionIndex] !== undefined) {
        const answerArea = document.getElementById('answer-area');
        userAnswersB[currentQuestionIndex].forEach(word => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = word;
            answerArea.appendChild(wordElement);
        });
    }
    
    document.querySelectorAll('#jumbled-words .word').forEach(word => {
        word.addEventListener('click', () => {
            const answerArea = document.getElementById('answer-area');
            if (!answerArea.contains(word)) {
                const clone = word.cloneNode(true);
                answerArea.appendChild(clone);
                word.style.visibility = 'hidden';
                updateUserAnswerB();
            }
        });
    });
    
    document.getElementById('answer-area').addEventListener('click', e => {
        if (e.target.classList.contains('word')) {
            const word = e.target;
            const originalWord = document.querySelector(`#jumbled-words .word[data-index="${word.dataset.index}"]`);
            originalWord.style.visibility = 'visible';
            word.remove();
            updateUserAnswerB();
        }
    });
    
    document.getElementById('clear-btn').addEventListener('click', () => {
        const answerArea = document.getElementById('answer-area');
        document.querySelectorAll('#jumbled-words .word').forEach(word => {
            word.style.visibility = 'visible';
        });
        answerArea.innerHTML = '';
        updateUserAnswerB();
    });
}

function updateUserAnswerB() {
    const answerArea = document.getElementById('answer-area');
    const words = Array.from(answerArea.children).map(word => word.textContent);
    userAnswersB[currentQuestionIndex] = words;
}

// Show result
function showResult() {
    // Calculate Section A score
    scoreA = 0;
    selectedQuestionsA.forEach((question, index) => {
        if (userAnswersA[index] === question.answer) {
            scoreA++;
        }
    });
    
    // Calculate Section B score with flexible checking
    scoreB = 0;
    selectedQuestionsB.forEach((sentence, index) => {
        const userAnswer = userAnswersB[index] ? userAnswersB[index].join(' ') : '';
        if (isAnswerAcceptable(userAnswer, sentence)) {
            scoreB++;
        }
    });
    
    const totalScore = (scoreA + scoreB) * 2;
    
    document.getElementById('sectionB').style.display = 'none';
    const resultContainer = document.querySelector('.result-container');
    resultContainer.style.display = 'block';
    
    document.getElementById('score-a').textContent = scoreA;
    document.getElementById('score-b').textContent = scoreB;
    document.getElementById('total-score').textContent = totalScore;
    
    let grade = '';
    let feedback = '';
    
    if (totalScore >= 80) {
        grade = 'A (EXCELLENT)';
        feedback = `${currentUser} is making steady progress academically.`;
    } else if (totalScore >= 60) {
        grade = 'B (GOOD)';
        feedback = `${currentUser} is maturing nicely, and I hope this continues.`;
    } else if (totalScore >= 40) {
        grade = 'C (SATISFACTORY)';
        feedback = `${currentUser} needs to listen to directions more attentively during lessons.`;
    } else if (totalScore >= 20) {
        grade = 'D (WEAK)';
        feedback = `${currentUser} is encouraged to be more responsible in completing tasks without needing regular reminders.`;
    } else {
        grade = 'F (FAILED)';
        feedback = `${currentUser} has difficulty remembering previously-discussed writing skills and often makes errors with punctuation, grammar, and overall sentence structure. Basic writing skills need improvement.`;
    }
    
    document.getElementById('grade-value').textContent = grade;
    document.getElementById('feedback').textContent = feedback;
    
    document.querySelector('.try-again-btn').addEventListener('click', () => {
        startSectionA();
    });
    
    document.querySelector('.send-result-btn').addEventListener('click', sendResult);
    document.querySelector('.logout-btn').addEventListener('click', logout);
}

function sendResult() {
    const totalScore = (scoreA + scoreB) * 2;
    let grade = '';
    
    if (totalScore >= 80) grade = 'A (EXCELLENT)';
    else if (totalScore >= 60) grade = 'B (GOOD)';
    else if (totalScore >= 40) grade = 'C (SATISFACTORY)';
    else if (totalScore >= 20) grade = 'D (WEAK)';
    else grade = 'F (FAILED)';
    
    const message = `English Quiz Result\nStudent: ${currentUser}\nSection A: ${scoreA}/30\nSection B: ${scoreB}/30\nTotal Score: ${totalScore}/120\nGrade: ${grade}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/60106607787?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function logout() {
    currentUser = null;
    container.innerHTML = `
        <h1>English Quiz</h1>
        <div class="login-form">
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
            <p id="loginError" class="error-message"></p>
        </div>
    `;
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

// Initialize
loginForm.addEventListener('submit', handleLogin);
