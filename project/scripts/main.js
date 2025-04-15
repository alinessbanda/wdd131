// DOMContentLoaded for all pages
document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    setupTipGenerator();
    setupMoodTracker();
});

// 1. Footer Year and Last Modified
function updateFooter() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedPara = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedPara) {
        modifiedPara.textContent = `Last modified: ${document.lastModified}`;
    }
}

// 2. Self-Care Tips Feature
const tips = [
    { message: "Take a deep breath and relax." },
    { message: "Drink water and stay hydrated." },
    { message: "Go for a walk outside." },
    { message: "Talk to a friend." },
    { message: "Write your thoughts in a journal." }
];

function setupTipGenerator() {
    const tipBtn = document.getElementById("newTipBtn");
    const tipDisplay = document.getElementById("tipDisplay");
    const saveBtn = document.getElementById("saveTipBtn");

    if (tipBtn && tipDisplay) {
        tipBtn.addEventListener("click", () => {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            tipDisplay.textContent = `${randomTip.message}`;
        });

        saveBtn?.addEventListener("click", () => {
            const currentTip = tipDisplay.textContent;
            if (currentTip) {
                let saved = JSON.parse(localStorage.getItem("savedTips")) || [];
                saved.push(currentTip);
                localStorage.setItem("savedTips", JSON.stringify(saved));
                alert("Tip saved!");
            }
        });
    }
}

// 3. Mood Tracker Feature
function setupMoodTracker() {
    const moodForm = document.getElementById("moodForm");
    const moodHistory = document.getElementById("moodHistory");

    if (moodForm && moodHistory) {
        moodForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const moodInput = document.getElementById("moodInput");
            const mood = moodInput.value.trim();

            if (mood !== "") {
                let moods = JSON.parse(localStorage.getItem("moods")) || [];
                const entry = { mood: mood, date: new Date().toLocaleDateString() };
                moods.push(entry);
                localStorage.setItem("moods", JSON.stringify(moods));
                displayMoodHistory();
                moodForm.reset();
            }
        });

        displayMoodHistory();
    }
}

function displayMoodHistory() {
    const moodHistory = document.getElementById("moodHistory");
    if (!moodHistory) return;

    const moods = JSON.parse(localStorage.getItem("moods")) || [];

    moodHistory.innerHTML = moods.map(entry =>
        `<li>${entry.date}: You felt <strong>${entry.mood}</strong></li>`
    ).join("");
}
