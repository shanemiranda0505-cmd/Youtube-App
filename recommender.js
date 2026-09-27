// ===== Data =====

// Category -> keyword list. This replaces the old raw seed words
// ("hey", "man") with something that actually maps to a recommendation.
const CategoryKeywords = {
    Gaming: [
        "game", "games", "gaming", "gameplay", "boss", "fps", "speedrun",
        "playthrough", "walkthrough", "level", "controller", "console",
        "multiplayer", "esports", "stream", "streamer", "rpg", "loot",
        "achievement", "glitch", "mod", "minecraft", "fortnite", "valorant"
    ],
    Music: [
        "song", "songs", "music", "beat", "beats", "remix", "lofi", "album",
        "lyrics", "cover", "acoustic", "playlist", "instrumental", "band",
        "concert", "rap", "hiphop", "pop", "rock", "jazz", "melody", "dj"
    ],
    Tech: [
        "review", "reviews", "gadget", "gadgets", "unboxing", "specs",
        "tech", "technology", "smartphone", "laptop", "software", "app",
        "coding", "programming", "ai", "robot", "gpu", "cpu", "benchmark",
        "comparison", "vs"
    ],
    Education: [
        "tutorial", "tutorials", "howto", "how-to", "learn", "learning",
        "explained", "lesson", "course", "guide", "study", "science",
        "history", "documentary", "facts", "lecture", "exam", "revision"
    ],
    Comedy: [
        "funny", "prank", "pranks", "fail", "fails", "meme", "memes",
        "compilation", "sketch", "parody", "roast", "joke", "jokes",
        "satire", "impression", "standup", "comedy"
    ]
};

// KeywordArray keeps the same shape as the original: [word, count]
let KeywordArray = [];

// Adds every category keyword into KeywordArray at 0 so counts have
// something to accumulate onto from the start.
function startkeywords() {
    for (let category in CategoryKeywords) {
        for (let i = 0; i < CategoryKeywords[category].length; i++) {
            KeywordArray.push([CategoryKeywords[category][i], 0]);
        }
    }
}

// ===== Splitting + counting (kept from the original, unchanged logic) =====

function TitleSpliter() {
    let NewVideoTitle = document.getElementById("VideoTitle").value;
    NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z0-9\s]/g, "");
    NewVideoTitle = NewVideoTitle.toLowerCase();
    let Keyword = NewVideoTitle.split(/\s+/);

    // Checks for new keywords and if they are not in KeywordArray pushes
    // that word as a new array into KeywordArray
    for (let i = 0; i < Keyword.length; i++) {
        if (Keyword[i] === "") continue; // skip empty strings from extra spaces

        let matchArray = [];
        for (let j = 0; j < KeywordArray.length; j++) {
            if (Keyword[i] == KeywordArray[j][0]) {
                matchArray.push("YES");
            } else {
                matchArray.push("NO");
            }
        }
        if (!matchArray.includes("YES")) {
            KeywordArray.push([Keyword[i], 0]);
        }
    }

    // count the number of times a word has been entered and increment
    // the number in KeywordArray
    for (let i = 0; i < KeywordArray.length; i++) {
        for (let j = 0; j < Keyword.length; j++) {
            if (KeywordArray[i][0] == Keyword[j]) {
                KeywordArray[i][1]++;
            }
        }
    }

    // this is the new step: turn the updated counts into a recommendation
    Sortandlimits();
}

// ===== Decision step (this was empty before — now implemented) =====

function Sortandlimits() {
    let categoryScore = { Gaming: 0, Music: 0, Tech: 0, Education: 0, Comedy: 0 };

    // Tally each counted keyword into whichever category it belongs to
    for (let i = 0; i < KeywordArray.length; i++) {
        let word = KeywordArray[i][0];
        let count = KeywordArray[i][1];

        for (let category in CategoryKeywords) {
            if (CategoryKeywords[category].includes(word)) {
                categoryScore[category] += count;
            }
        }
    }

    // Find the top-scoring category
    let topCategory = "";
    let topScore = 0;
    for (let category in categoryScore) {
        if (categoryScore[category] > topScore) {
            topScore = categoryScore[category];
            topCategory = category;
        }
    }

    let outputBox = document.getElementById("Output");
    let searchButton = document.getElementById("SearchButton");

    if (topScore === 0) {
        outputBox.innerText = "Not enough signal yet - try a title with words like 'game', 'song', 'review', 'tutorial', or 'funny'.";
        searchButton.style.display = "none";
    } else {
        outputBox.innerText = "Recommended category: " + topCategory + " (score: " + topScore + ")";

        // Build a YouTube search link for the winning category and reveal the button
        let searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(topCategory);
        searchButton.href = searchUrl;
        searchButton.style.display = "inline-block";
    }

    console.log(categoryScore);
}

// Resets the accumulated word counts back to zero, so testing/demoing
// doesn't require a full page reload between titles.
function resetKeywords() {
    KeywordArray = [];
    startkeywords();
    document.getElementById("Output").innerText = "";
    let searchButton = document.getElementById("SearchButton");
    if (searchButton) searchButton.style.display = "none";
}

// Preload the keyword list as soon as the script runs
startkeywords();
