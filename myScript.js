var shortlink; 
var search;
window.dataLayer = window.dataLayer || [];

$(function () {
    $("#refresh").bind("click", function () { doTag(1) });
    doTag(0);
});

function doTag(fresh) {
    var adjectives = ["bad", "bashful", "bent", "big", "bizarre", "bloody", "bored", "bouncy", "brainy", "brave", "brawny", "bright", "broad", "burly", "busy", "cautious", "chubby", "chunky", "clammy", "classy", "colossal", "combative", "cool", "courageous", "cowardly", "crabby", "crazy", "creepy", "crooked", "curious", "curvy", "cute", "daffy", "damaged", "damp", "dangerous", "dark", "dead", "defeated", "defective", "demonic", "depressed", "deranged", "determined", "devilish", "dirty", "dizzy", "dramatic", "drunk", "faded", "famous", "fancy", "fast", "fat", "faulty", "festive", "fierce", "filthy", "flashy", "flat", "flowery", "frail", "fragile", "furry", "futuristic", "gigantic", "goofy", "guarded", "hanging", "heavenly", "heavy", "hideous", "huge", "hulking", "jaded", "jagged", "jazzy", "jittery", "large", "late", "lazy", "little", "magical", "majestic", "married", "mature", "medical", "military", "miniature", "motionless", "nappy", "naughty", "nervous", "nosy", "nutty", "plain", "powerful", "prickly", "proud", "psychotic", "puffy", "puny", "purring", "puzzled", "quarrelsome", "quick", "rabid", "ragged", "rare", "ratty", "rich", "righteous", "round", "royal", "ruthless", "sad", "safe", "scared", "scary", "scientific", "scrawny", "serious", "shaggy", "shivering", "shy", "sick", "simple", "skinny", "sleepy", "slimy", "small", "smelly", "smiling", "smooth", "sneaky", "snotty", "soggy", "sophisticated", "sparkling", "spiky", "spiritual", "spooky", "spotted", "squeamish", "sticky", "stingy", "strange", "striped", "strong", "swift", "tacky", "talented", "tall", "tearful", "thick", "thin", "thirsty", "threatening", "thundering", "tidy", "tiny", "tired", "tough", "towering", "trashy", "victorious", "violent", "wacky", "waiting", "wandering", "watery", "weak", "wealthy", "well-groomed", "wet", "wicked", "wide", "wiggly", "wild", "wise", "wistful", "wonderful", "wooden", "woozy", "worried", "wrathful", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy"];
    var nouns = ["aardvark", "alien", "alligator", "angel", "animal", "ant", "anteater", "antelope", "armadillo", "baboon", "badger", "bear", "beast", "beaver", "bee", "beetle", "beggar", "bird", "bowler", "boxer", "boy", "burglar", "camel", "cat", "cheetah", "chicken", "coach", "cow", "crab", "creature", "criminal", "crocodile", "detective", "dinosaur", "dog", "donkey", "dragon", "duck", "elephant", "fireman", "fish", "fox", "gazelle", "ghost", "giant", "giraffe", "girl", "goose", "gorilla", "hyena", "jaguar", "jellyfish", "judge", "kangaroo", "kitten", "lady", "leopard", "llama", "magician", "maid", "man", "mechanic", "mermaid", "minister", "monkey", "monster", "mouse", "ninja", "nun", "octopus", "ostrich", "owl", "pig", "pigeon", "pilot", "pirate", "plumber", "prisoner", "psychiatrist", "pumpkin", "puppet", "puppy", "queen", "rabbit", "raven", "reindeer", "rhinoceros", "robot", "rooster", "samurai", "scarecrow", "sheep", "skeleton", "snail", "snake", "soldier", "spider", "squirrel", "superhero", "tank", "tiger", "toad", "wasp", "witch", "wolf", "zombie"];
    var verbs = ["accusing", "amusing", "arresting", "bathing", "beating up", "becoming", "calling", "capturing", "carrying", "catching", "chasing", "cheering", "choking", "climbing", "controlling", "cooking", "dancing with", "dancing with", "decorating", "drawing", "dreaming of", "drinking with", "driving", "eating", "falling with", "feeding", "fighting", "filming", "firing", "fishing with", "gaming with", "guarding", "haunting", "holding", "hugging", "imagining", "kissing", "launching", "licking", "on a date with", "painting", "playing with", "preaching to", "racing", "rescuing", "riding on", "shocking", "shooting", "sparring with", "talking to", "throwing", "touching", "washing", "watching"];
    var myNumbers = [];
    var myString = '';

    if (querystring() === "" || fresh === 1) {
        myNumbers = [randomize(adjectives.length), randomize(nouns.length), randomize(verbs.length), randomize(adjectives.length), randomize(nouns.length)]
        if (myNumbers[0] === myNumbers[3]) { myNumbers[3] = randomize(adjectives.length); }
        if (myNumbers[1] === myNumbers[4]) { myNumbers[4] = randomize(nouns.length); }
    } else {
        myString = querystring();
		if(myString.indexOf("-")>-1){
			myNumbers = myString.split("-");
		}else{
			myNumbers = myString.split("a");
		}
    }
    
    var adj1 = adjectives[myNumbers[0]];
    var noun1 = nouns[myNumbers[1]];
    var verb = verbs[myNumbers[2]];
    var adj2 = adjectives[myNumbers[3]];
    var noun2 = nouns[myNumbers[4]];
    var tagline = "a " + adj1 + " " + noun1 + " " + verb + " a " + adj2 + " " + noun2;

    $("#tagline").text(tagline);

    datalayer.push([
        {'tagline': tagline, 'shortlink': myNumbers.join("-")}
    ]);

    $('#adj1').text(adj1);
    $('#noun1 span').text(noun1);
    get_image(noun1, '#noun1');
    $('#verb').text(verb);
    $('#adj2').text(adj2);
    $('#noun2 span').text(noun2 + '.');
    //$('#noun2 img').attr('src', 'http://blog.comperiosearch.com/wp-content/uploads/2012/09/handlebars_logo-150x150.png');
    get_image(noun2, '#noun2');
    
    shortlink = "/?" + myNumbers.join("-");
    $("#myLink").attr("href", shortlink);
    $("#facebook_link").attr("href", "https://www.facebook.com/sharer/sharer.php?u=http://www.drawlly.com" + shortlink);
    $("#twitter_link").attr("href", "https://twitter.com/intent/tweet?text=http://www.drawlly.com" + shortlink);
}

function randomize(max) {
    return Math.floor(Math.random() * max);
}

function querystring() {
    var re = new RegExp('(?:\\?|&)' + '(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
    return r.toString();
}

function get_image(keyword, img){
        $.ajax({
          url: 'https://api.gettyimages.com:443/v3/search/images/creative?phrase=' + keyword,
          type: 'GET',
          dataType: 'json',
          success: function(data){ got_image(data, img) },
          error: function() { alert('boo!'); },
          beforeSend: setHeader
        });
}

function got_image(data, img){
    var image_number = randomize(data.images.length)
    $(img + ' img').attr('src', data.images[image_number].display_sizes[0].uri) ;
}

function setHeader(xhr) {
    xhr.setRequestHeader('Api-Key', 'gu4mn7ukacpafbqu9mydqfez');
}



