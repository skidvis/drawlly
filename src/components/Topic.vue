<template>
    <div>
        <div class="tagline">
          A {{ adj1 }} {{ noun1 }} <span class="verb">{{ verb }}</span> a {{ adj2 }} {{ noun2 }}
        </div>
        <h5>
            <a href="#" @click.prevent="refresh">refresh</a> -- 
            <a :href="shortlink">permalink</a>
            <!-- <a :href="getFacebookLink()" target="_blank">facebook</a> --
            <a :href="getTwitterLink()" target="_blank">twitter</a> -->
        </h5>        
    </div>
</template>
<script>
export default {
  data() {
    return {
      adjectives: ["bad", "bashful", "bent", "big", "bizarre", "bloody", "bored", "bouncy", "brainy", "brave", "brawny", "bright", "broad", "burly", "busy", "cautious", "chubby", "chunky", "clammy", "classy", "colossal", "combative", "cool", "courageous", "cowardly", "crabby", "crazy", "creepy", "crooked", "curious", "curvy", "cute", "daffy", "damaged", "damp", "dangerous", "dark", "dead", "defeated", "defective", "demonic", "depressed", "deranged", "determined", "devilish", "dirty", "dizzy", "dramatic", "drunk", "faded", "famous", "fancy", "fast", "fat", "faulty", "festive", "fierce", "filthy", "flashy", "flat", "flowery", "frail", "fragile", "furry", "futuristic", "gigantic", "goofy", "guarded", "hanging", "heavenly", "heavy", "hideous", "huge", "hulking", "jaded", "jagged", "jazzy", "jittery", "large", "late", "lazy", "little", "magical", "majestic", "married", "mature", "medical", "military", "miniature", "motionless", "nappy", "naughty", "nervous", "nosy", "nutty", "plain", "powerful", "prickly", "proud", "psychotic", "puffy", "puny", "purring", "puzzled", "quarrelsome", "quick", "rabid", "ragged", "rare", "ratty", "rich", "righteous", "round", "royal", "ruthless", "sad", "safe", "scared", "scary", "scientific", "scrawny", "serious", "shaggy", "shivering", "shy", "sick", "simple", "skinny", "sleepy", "slimy", "small", "smelly", "smiling", "smooth", "sneaky", "snotty", "soggy", "sophisticated", "sparkling", "spiky", "spiritual", "spooky", "spotted", "squeamish", "sticky", "stingy", "strange", "striped", "strong", "swift", "tacky", "talented", "tall", "tearful", "thick", "thin", "thirsty", "threatening", "thundering", "tidy", "tiny", "tired", "tough", "towering", "trashy", "victorious", "violent", "wacky", "waiting", "wandering", "watery", "weak", "wealthy", "well-groomed", "wet", "wicked", "wide", "wiggly", "wild", "wise", "wistful", "wonderful", "wooden", "woozy", "worried", "wrathful", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy"],
      nouns: ["aardvark", "alien", "alligator", "angel", "animal", "ant", "anteater", "antelope", "armadillo", "baboon", "badger", "bear", "beast", "beaver", "bee", "beetle", "beggar", "bird", "bowler", "boxer", "boy", "burglar", "camel", "cat", "cheetah", "chicken", "coach", "cow", "crab", "creature", "criminal", "crocodile", "detective", "dinosaur", "dog", "donkey", "dragon", "duck", "elephant", "fireman", "fish", "fox", "gazelle", "ghost", "giant", "giraffe", "girl", "goose", "gorilla", "hyena", "jaguar", "jellyfish", "judge", "kangaroo", "kitten", "lady", "leopard", "llama", "magician", "maid", "man", "mechanic", "mermaid", "minister", "monkey", "monster", "mouse", "ninja", "nun", "octopus", "ostrich", "owl", "pig", "pigeon", "pilot", "pirate", "plumber", "prisoner", "psychiatrist", "pumpkin", "puppet", "puppy", "queen", "rabbit", "raven", "reindeer", "rhinoceros", "robot", "rooster", "samurai", "scarecrow", "sheep", "skeleton", "snail", "snake", "soldier", "spider", "squirrel", "superhero", "tank", "tiger", "toad", "wasp", "witch", "wolf", "zombie"],
      verbs: ["accusing", "amusing", "arresting", "bathing", "beating up", "becoming", "calling", "capturing", "carrying", "catching", "chasing", "cheering", "choking", "climbing", "controlling", "cooking", "dancing with", "dancing with", "decorating", "drawing", "dreaming of", "drinking with", "driving", "eating", "falling with", "feeding", "fighting", "filming", "firing", "fishing with", "gaming with", "guarding", "haunting", "holding", "hugging", "imagining", "kissing", "launching", "licking", "on a date with", "painting", "playing with", "preaching to", "racing", "rescuing", "riding on", "shocking", "shooting", "sparring with", "talking to", "throwing", "touching", "washing", "watching"],
      tagline: '',
      adj1: 'adjective',
      noun1: 'hi',
      verb: 'verb',
      adj2: 'adjective',
      noun2: 'bye',
      shortlink: '',
      myNumbers: []
    };
  },
  mounted() {
    this.doTag(0);
  },
  methods: {
    randomize(max) {
      return Math.floor(Math.random() * max);
    },
    querystring() {
      const re = new RegExp('(?:\\?|&)' + '(.*?)(?=&|$)', 'gi');
      const r = [];
      let m;
      while ((m = re.exec(window.location.search)) != null) {
        r.push(m[1]);
      }
      return r.toString();
    },
    doTag(fresh) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
          page_title: 'Drawlly Pageview',
          page_location: '/vpv/drawlly/pageview'
        });
      }

      if (this.querystring() === "" || fresh === 1) {
        this.myNumbers = [
          this.randomize(this.adjectives.length),
          this.randomize(this.nouns.length),
          this.randomize(this.verbs.length),
          this.randomize(this.adjectives.length),
          this.randomize(this.nouns.length)
        ];
        if (this.myNumbers[0] === this.myNumbers[3]) {
          this.myNumbers[3] = this.randomize(this.adjectives.length);
        }
        if (this.myNumbers[1] === this.myNumbers[4]) {
          this.myNumbers[4] = this.randomize(this.nouns.length);
        }
      } else {
        const myString = this.querystring();
        if (myString.indexOf("-") > -1) {
          this.myNumbers = myString.split("-");
        } else {
          this.myNumbers = myString.split("a");
        }
      }

      this.adj1 = this.adjectives[this.myNumbers[0]];
      this.noun1 = this.nouns[this.myNumbers[1]];
      this.verb = this.verbs[this.myNumbers[2]];
      this.adj2 = this.adjectives[this.myNumbers[3]];
      this.noun2 = this.nouns[this.myNumbers[4]];
      this.tagline = `a ${this.adj1} ${this.noun1} ${this.verb} a ${this.adj2} ${this.noun2}`;

      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          event: 'idea_refresh',
          tagline: this.tagline,
          shortlink: this.myNumbers.join("-")
        });
      }

      this.get_image(this.noun1, 'noun1');
      this.get_image(this.noun2, 'noun2');
      
      this.shortlink = `/?${this.myNumbers.join("-")}`;
    },
    get_image(keyword, target) {
    //   fetch(`https://api.gettyimages.com:443/v3/search/images/creative?phrase=${keyword}`, {
    //     method: 'GET',
    //     headers: {
    //       'Api-Key': 'gu4mn7ukacpafbqu9mydqfez'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => this.got_image(data, target))
    //   .catch(error => console.error('Image fetch error:', error));
    },
    got_image(data, target) {
      if (data.images && data.images.length > 0) {
        const imageNumber = this.randomize(data.images.length);
        const imageUrl = data.images[imageNumber].display_sizes[0].uri;
        this.$nextTick(() => {
          const imgElement = this.$el.querySelector(`#${target} img`);
          if (imgElement) {
            imgElement.src = imageUrl;
          }
        });
      }
    },
    refresh() {
      this.doTag(1);
    },
    getFacebookLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=http://www.drawlly.com${this.shortlink}`;
    },
    getTwitterLink() {
      return `https://twitter.com/intent/tweet?text=http://www.drawlly.com${this.shortlink}`;
    }
  }
};
</script>
<style>
.verb{
    color: green;
    font-weight: bold;
    font-style: italic;
}

.tagline{
  font-family: 'Happy Monkey', cursive;
  font-size: 50px;
  text-align: center;
}
</style>
