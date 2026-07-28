// ==UserScript==
// @name        testts
// @namespace   Violentmonkey Scripts
// @icon        data:image/x-icon;base64,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
// @version     1.0.0
//
// @match       https://itch.io/jam/*/rate/*
// @match       https://itch.io/jam/*/entries
// @grant       none
//
// @author      -
// @description
// ==/UserScript==




/*

console.log(jamGame[0])

{
  "id": 910988,
  "rating_count": 287,
  "created_at": "2026-07-26 11:18:45",
  "game": {
    "id": 4824959,
    "cover_color": "#000000",
    "user": {
      "id": 2372311,
      "url": "https://sirmilkman.itch.io",
      "name": "sirmilkman"
    },
    "gif_cover": "https://img.itch.zone/aW1nLzI4Nzc0NTIyLmdpZg==/original/YNx2qM.gif",
    "url": "https://sirmilkman.itch.io/rpg-brokendepths",
    "cover": "https://img.itch.zone/aW1nLzI4Nzc0NTIyLmdpZg==/300x240%23c/KE1yWx.gif",
    "platforms": [
      "windows",
      "web"
    ],
    "short_text": "A turn based roguelike where you only have a few moves to get to the exit. Can you reach floor 30?",
    "title": "Broken Depths RPG"
  },
  "coolness": 7,
  "url": "/jam/gmtk-jam-2026/rate/4824959"
}

*/



async function asyncGetJamGames(jamID) {
    return (await (await fetch(`https://itch.io/jam/${jamID}/entries.json`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "X-Requested-With": "XMLHttpRequest",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Priority": "u=4"
        },
        "referrer": "https://itch.io/jam/gmtk-jam-2026/entries",
        "method": "GET",
        "mode": "cors"
    })).json()).jam_games
}
function rankObj(index, jamGame, jamGames) {
    return {
        "jamGame": jamGame,
        "gameTitle": jamGame.game.title,
        "percentage": Math.round(((index + 1) / jamGames.length) * 1000 * 100) / 1000,
        "popularityRank": index + 1
    }
}

function rankToTextSingleRank(rank) {
    return `#${rank.popularityRank}(${rank.percentage}%)`
}



function collectUsefulData(jamGames) {
    // GATHERING USEFUL DATA
    // GATHERING USEFUL DATA
    // GATHERING USEFUL DATA
    var gameIdToRank = {}
    jamGames.forEach((jamGame, i) => gameIdToRank[jamGame.game.id] = rankObj(i, jamGame, jamGames))
    var gameNameToRank = {}
    jamGames.forEach((jamGame, i) => gameNameToRank[jamGame.game.title] = rankObj(i, jamGame, jamGames))

    var authorToRank = {}
    jamGames.forEach((jamGame, i) => {
        if (jamGame.contributors) {
            jamGame.contributors.forEach(contributor => {
                var author = contributor.name
                if (authorToRank[author]) {
                    authorToRank[author].push(rankObj(i, jamGame, jamGames))
                } else {
                    authorToRank[author] = [rankObj(i, jamGame, jamGames)]
                }
            })
        } else {
            var author = jamGame.game.user.name
            if (authorToRank[author]) {
                authorToRank[author].push(rankObj(i, jamGame, jamGames))
            } else {
                authorToRank[author] = [rankObj(i, jamGame, jamGames)]
            }
        }
    })
    return {
        gameIdToRank, gameNameToRank, authorToRank
    }
}

async function displayRankOverlaysInEntriesPage() {
    // GET jamID from rate page
    function getJamIDFromEntriesPage() {
        let e = /\\\/jam\\\/(\d+)\\\/entries\.json/gmi;
        let allScriptInnerHTML = [...document.querySelectorAll("script")].map(s => s.innerHTML).join("\n")
        return Number([...allScriptInnerHTML.matchAll(e)][0][1])
    }


    // APPLICATION LEVEL LOGIC
    // APPLICATION LEVEL LOGIC
    // APPLICATION LEVEL LOGIC
    function renderTextOnGameCard(gameId, text) {
        var e = document.createElement("span")
        e.innerText = text
        e.style.backgroundColor = "#000a"
        e.style.color = "#fff"
        e.style.position = "absolute"
        e.style.right = 0
        e.style.zIndex = 1000
        var gameElement = document.querySelector(`[data-game_id="${gameId}"] .bordered`)
        if (!gameElement) return

        if (gameElement.classList.contains("injectedRanking")) return
        gameElement.classList.add("injectedRanking")
        gameElement.append(e)
    }

    function renderRanksOnGameCards(gameIdToRank) {
        var gameItems = document.querySelectorAll(`[data-game_id]`);
        gameItems.forEach(item => {
            var gameId = Number(item.dataset.game_id)
            let rank = gameIdToRank[gameId]
            renderTextOnGameCard(gameId, rankToTextSingleRank(rank) + ` ${rank.jamGame.rating_count} votes`)
        })
    }


    function renderTextOnEntriesHeader(text, allowOverrides = false, href = "") {
        var header = document.querySelector(".primary_header")
        if (!header) return
        if (allowOverrides) {
            const previousRenderText = header.querySelector("[class*=injectedRanking]")
            previousRenderText && previousRenderText.remove()
        }
        if (header.querySelector("[class*=injectedRanking]") !== null) return

        var e = document.createElement("a")
        e.innerText = text
        e.style.backgroundColor = "#a00c"
        e.style.color = "#fff"
        e.style.position = "fixed"
        e.style.right = 0
        e.style.top = 0
        e.style.zIndex = 1000
        e.classList.add("injectedRanking")
        if (href.length > 0) e.href = href

        header.append(e)
    }






    // MAIN CODE
    // MAIN CODE
    // MAIN CODE
    if (location.href.split("/").pop() !== "entries") return

    // GATHERING RAW DATA
    var jamID = getJamIDFromEntriesPage()
    renderTextOnEntriesHeader("Fetching ranks...")
    var jamGames = await asyncGetJamGames(jamID)

    // GATHERING USEFUL DATA
    const { gameIdToRank, gameNameToRank, authorToRank } = collectUsefulData(jamGames)


    setInterval(() => {
        renderRanksOnGameCards(gameIdToRank)
    }, 150)

    // Render User's Rank
    let userEl = document.querySelector(".profile_link .user_name")
    let userRanks = userEl ? authorToRank[userEl.innerText] : null
    if (userRanks) {
        if (userRanks.length === 1) {
            const rank = userRanks[0]
            renderTextOnEntriesHeader(`${rank.gameTitle}: ` + rankToTextSingleRank(rank), true, rank.jamGame.url)
        } else {
            const text = userRanks.map(rank => `${rank.gameTitle}: #${rankToTextSingleRank(rank)}`)
            renderTextOnEntriesHeader(text.join("\n"), true)
        }
    } else {
        renderTextOnEntriesHeader("", true)
    }
}

































// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// RATINGS PAGE
// GET jamID from rate page
function getJamIDFromRatePage() {
    return Number([...document.querySelector(".jam_game_header").innerHTML.matchAll(/jam_id\=(\d+)/gmi)][0][1])
}
function renderTextOnGameHeader(text, allowOverrides = false) {
    var header = document.querySelector(`.jam_game_header .responsive_column h1`)
    if (!header) return

    if (allowOverrides) {
        const previousRenderText = header.querySelector("[class*=injectedRanking]")
        previousRenderText && previousRenderText.remove()
    }
    if (header.querySelector("[class*=injectedRanking]") !== null) return

    var e = document.createElement("span")
    e.innerText = text
    e.style.backgroundColor = "#a00c"
    e.style.color = "#fff"
    e.style.position = "relative"
    e.style.left = 0
    e.style.zIndex = 1000

    e.classList.add("injectedRanking")
    header.append(e)
}

async function displayRankInRatingPage() {
    var url = new URL(location.href)
    var args = url.pathname.split("/")
    if (args[args.length - 2] !== "rate") return
    renderTextOnGameHeader("Fetching rankings")
    var jamID = getJamIDFromRatePage()
    var jamGames = await asyncGetJamGames(jamID)

    var gameId = Number(location.href.split("/").pop())

    const { gameIdToRank, gameNameToRank, authorToRank } = collectUsefulData(jamGames)

    renderTextOnGameHeader(rankToTextSingleRank(gameIdToRank[gameId]) + ` of ${jamGames.length}`, true)
    addColumnForRankPercentage(jamGames.length)
}


function addColumnForRankPercentage(numberOfEntries) {
    /* USE THE REAL NUMBER OF ENTRIES NOT THE DISPLAYED ONE USING HTML.... */
    var rankIndex = [...document.querySelectorAll("table thead td")].findIndex(e => e.innerText === "Rank")
    var table = document.querySelector("table");
    var rows = [...table.querySelectorAll("tr")];
    var rowHeader = rows.shift();

    var newHeader = document.createElement("td")
    newHeader.innerText = "PROPORTIONAL RANKS USING VISIBLE ENTRIES"
    rowHeader.append(newHeader)

    var rankVals = rows.map(tr => tr.querySelectorAll("td")[rankIndex].innerText).map(rawText => Number([...rawText.matchAll(/\d+/gmi)][0][0]))
    // var rankPercentages = rankVals.map(val => Math.round((val / numberOfEntries) * 1000) / 1000 * 100)
    var rankPercentages = rankVals.map(val => Number((val / numberOfEntries * 100).toFixed(3)))
    rows.forEach((tr, i) => {
        var td = document.createElement("td")
        td.innerText = `${rankPercentages[i]}% (#${rankVals[i]} of ${numberOfEntries})`
        tr.append(td)
    })
}


// var serachIndex = jamGames.findIndex((obj, i) => obj.game.title == "Divine Wind")
(() => {
    displayRankOverlaysInEntriesPage()
    displayRankInRatingPage()
})()




