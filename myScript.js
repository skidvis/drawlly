$(function () {
    $("#refresh").bind("click", function () { doTag(1) });
    doTag(0);
});

function doTag(fresh) {
    adjectives = ["bad", "bashful", "bent", "big", "bizarre", "bloody", "bored", "bouncy", "brainy", "brave", "brawny", "bright", "broad", "burly", "busy", "cautious", "chubby", "chunky", "clammy", "classy", "colossal", "combative", "cool", "courageous", "cowardly", "crabby", "crazy", "creepy", "crooked", "curious", "curvy", "cute", "daffy", "damaged", "damp", "dangerous", "dark", "dead", "defeated", "defective", "demonic", "depressed", "deranged", "determined", "devilish", "dirty", "dizzy", "dramatic", "drunk", "faded", "famous", "fancy", "fast", "fat", "faulty", "festive", "fierce", "filthy", "flashy", "flat", "flowery", "frail", "fragile", "furry", "futuristic", "gigantic", "goofy", "guarded", "hanging", "heavenly", "heavy", "hideous", "huge", "hulking", "jaded", "jagged", "jazzy", "jittery", "large", "late", "lazy", "little", "magical", "majestic", "married", "mature", "medical", "military", "miniature", "motionless", "nappy", "naughty", "nervous", "nosy", "nutty", "plain", "powerful", "prickly", "proud", "psychotic", "puffy", "puny", "purring", "puzzled", "quarrelsome", "quick", "rabid", "ragged", "rare", "ratty", "rich", "righteous", "round", "royal", "ruthless", "sad", "safe", "scared", "scary", "scientific", "scrawny", "serious", "shaggy", "shivering", "shy", "sick", "simple", "skinny", "sleepy", "slimy", "small", "smelly", "smiling", "smooth", "sneaky", "snotty", "soggy", "sophisticated", "sparkling", "spiky", "spiritual", "spooky", "spotted", "squeamish", "sticky", "stingy", "strange", "striped", "strong", "swift", "tacky", "talented", "tall", "tearful", "thick", "thin", "thirsty", "threatening", "thundering", "tidy", "tiny", "tired", "tough", "towering", "trashy", "victorious", "violent", "wacky", "waiting", "wandering", "watery", "weak", "wealthy", "well-groomed", "wet", "wicked", "wide", "wiggly", "wild", "wise", "wistful", "wonderful", "wooden", "woozy", "worried", "wrathful", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy"];
    nouns = ["coach", "judge", "scarecrow", "maid", "mermaid", "tank", "snail", "snake", "tiger", "ghost", "giraffe", "giant", "fish", "car", "ninja", "dragon", "monster", "nun", "angel", "toad", "robot", "dog", "cat", "bear", "soldier", "spider", "superhero", "boy", "man", "girl", "lady", "box", "puppet", "samurai", "plumber", "skeleton", "zombie", "witch", "alien", "pirate"];
    verbs = ["fishing with", "eating", "chasing", "talking to", "beating up", "drinking with", "firing", "riding on", "shooting", "calling", "fighting", "racing", "arresting", "bathing", "becoming", "cooking", "cheering", "choking", "catching", "carrying", "dancing with", "decorating", "controlling", "driving", "feeding", "filming", "guarding", "haunting", "licking", "preaching to", "shocking", "throwing", "washing"];
    myNumbers = [];

    if (querystring("themer") === "" || fresh === 1) {
        myNumbers = [randomize(adjectives.length), randomize(nouns.length), randomize(verbs.length), randomize(adjectives.length), randomize(nouns.length)]
        if (myNumbers[0] === myNumbers[3]) { myNumbers[3] = randomize(adjectives.length); }
        if (myNumbers[1] === myNumbers[4]) { myNumbers[4] = randomize(nouns.length); }
    } else {
        myString = querystring("themer");
		if(myString.indexOf("-")>-1){
			myNumbers = myString.split("-");
		}else{
			myNumbers = myString.split("a");
		}
    }
    
    $("#tagline").text("a " + adjectives[myNumbers[0]] + " " + nouns[myNumbers[1]] + " " + verbs[myNumbers[2]] + " a " + adjectives[myNumbers[3]] + " " + nouns[myNumbers[4]]);
    $("#myLink").attr("href", "/?themer=" + myNumbers.join("a"));
}

function randomize(max) {
    return Math.floor(Math.random() * max);
}

function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
    return r.toString();
}