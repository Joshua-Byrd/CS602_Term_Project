const mongoose = require("mongoose");

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/cs602projectDb");

  //Populate book collection----------------------------------------------------
  const bookSchema = new mongoose.Schema({
    title: String,
    author: [String],
    isbn13: String,
    isbn10: String,
    description: String,
    genre: [String],
    releaseYear: Number,
    ratings: [Number],
    reviews: [{ user: String, review: String }],
  });

  const Book = new mongoose.model("Book", bookSchema);

  const booksToInsert = [
    {
      title: "The Great Gatsby",
      author: ["F. Scott Fitzgerald"],
      description:
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      isbn13: "979-8745274824",
      isbn10: "",
      genre: [
        "Literature",
        "Classic American Literature",
        "Classic Literature & Fiction",
      ],
      releaseYear: 1925,
      ratings: [3.5, 5, 5, 4],
      reviews: [
        { user: "bookLover", review: "Great book! Loved it!" },
        {
          user: "i_read_classics",
          review: "There's a reason it's considered the great American novel.",
        },
        {
          user: "reviewb0mber",
          review: "Not as good as they think.",
        },
      ],
    },
    {
      title: "The Time Machine",
      author: ["H. G. Wells"],
      description:
        "The Time Machine by H.G. Wells is a classic science fiction novel that takes readers on a thrilling journey through time. As the Time Traveller explores the future, he encounters dystopian societies and grapples with the profound implications of human evolution.",
      isbn13: "978-9358561661",
      isbn10: "9358561661",
      genre: ["Science Fiction Adventures", "Classic Literature & Fiction"],
      releaseYear: 1895,
      ratings: [3, 2.5, 2, 4, 4.5],
      reviews: [
        { user: "bookLover", review: "A classic that should stay in the past" },
        {
          user: "i_read_classics",
          review: "A perfectly passable sci-fi novel.",
        },
      ],
    },
    {
      title: "War of the Worlds",
      author: ["H. G. Wells"],
      description:
        "The plot is similar to other works of invasion literature from the same period, and has been variously interpreted as a commentary on the theory of evolution, British colonialism, and Victorian-era fears, superstitions and prejudices. Wells later noted that inspiration for the plot was the catastrophic effect of European colonisation on the Aboriginal Tasmanians. Some historians have argued that Wells wrote the book to encourage his readership to question the morality of imperialism. At the time of publication, it was classified as a scientific romance, like Wells's earlier novel, The Time Machine.",
      isbn13: "978-0866118705",
      isbn10: "",
      genre: ["Science Fiction Adventures", "Classic Literature & Fiction"],
      releaseYear: 1897,
      ratings: [3, 2.5, 2, 4, 4.5],
      reviews: [
        { user: "bookLover", review: "The first alien invasion novel" },
        {
          user: "i_read_classics",
          review: "'salright",
        },
      ],
    },
    {
      title: "Fight Club",
      author: ["Chuck Palahniuk"],
      description:
        "Chuck Palahniuk showed himself to be his generation’s most visionary satirist in this, his first book. Fight Club’s estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basements of bars. There, two men fight 'as long as they have to.' This is a gloriously original work that exposes the darkness at the core of our modern world.",
      isbn13: "9780091835132",
      isbn10: "",
      genre: ["Satire", "Literature & Fiction"],
      releaseYear: 2005,
      ratings: [3, 4, 4.5, 5],
      reviews: [
        { user: "iFightUnderground", review: "Better than the movie" },
        {
          user: "johnQcitizen",
          review: "My favorite novel ever",
        },
      ],
    },
    {
      title: "Choke",
      author: ["Chuck Palahniuk"],
      description:
        "Victor Mancini, a medical-school dropout, is an antihero for our deranged times. Needing to pay elder care for his mother, Victor has devised an ingenious scam: he pretends to choke on pieces of food while dining in upscale restaurants. He then allows himself to be “saved” by fellow patrons who, feeling responsible for Victor's life, go on to send checks to support him. When he's not pulling this stunt, Victor cruises sexual addiction recovery workshops for action, visits his addled mom, and spends his days working at a colonial theme park. His creator, Chuck Palahniuk, is the visionary we need and the satirist we deserve.",
      isbn13: "",
      isbn10: "",
      genre: ["Literary Satire Fiction", "Literature & Fiction"],
      releaseYear: 2002,
      ratings: [1, 3.5, 4.5, 3, 3],
      reviews: [
        {
          user: "Agoodusername",
          review: "Hilarious, cringe-inducing, awful, and great.",
        },
        {
          user: "ChuckPFan",
          review: "I still don't get it",
        },
      ],
    },
    {
      title: "Haunted: A Novel",
      author: ["Chuck Palahniuk"],
      description:
        "Haunted is a novel made up of twenty-three horrifying, hilarious, and stomach-churning stories. They're told by people who have answered an ad for a writer's retreat and unwittingly joined a “Survivor”-like scenario where the host withholds heat, power, and food. As the storytellers grow more desperate, their tales become more extreme, and they ruthlessly plot to make themselves the hero of the reality show that will surely be made from their plight. This is one of the most disturbing and outrageous books you'll ever read, one that could only come from the mind of Chuck Palahniuk.",
      isbn13: "",
      isbn10: "9780099458371",
      genre: ["Horror", "Literature & Fiction"],
      releaseYear: 2005,
      ratings: [1, 5, 4.5, 5, 2],
      reviews: [
        {
          user: "iFightUnderground",
          review: "The most disgusting book I've ever read",
        },
        {
          user: "ScubaSteve",
          review: "Wonderfully awful",
        },
      ],
    },
    {
      title: "We Ate The Dark",
      author: ["Mallory Pearson"],
      description:
        "Five years after Sofia Lyon disappeared, her remains are found stuffed into the hollow of a tree bursting through the floorboards of an abandoned house in the woods. The women who loved her flock home to the North Carolina hills to face their grief. Frankie, Sofia's twin, is in furious mourning. Poppy is heartbroken. Cass has never felt more homesick. And Marya knows something the rest of them don't. Determined to find Sofia's murderer, they share more than a need to see justice done for their friend. Each woman is haunted, bound to the next by something both cruel and kind, and now stalked by a shadowy presence they've yet to understand. Only to question, and to fear.",
      isbn13: "",
      isbn10: "",
      genre: ["Occult Horror", "Ghost Fiction"],
      releaseYear: 2024,
      ratings: [2, 2.5, 3, 3],
      reviews: [
        { user: "Horrorguy", review: "A hugely overwritten horror novel" },
        {
          user: "johnQcitizen",
          review: "Good, but left with an unsatisfying ending",
        },
      ],
    },
    {
      title: "The Three Body problem",
      author: ["Cixin Liu", "Ken Liu"],
      description:
        "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion. The result is a science fiction masterpiece of enormous scope and vision.",
      isbn13: "978-9861206066",
      isbn10: "9780765382030",
      genre: ["Chinese Fiction", "Hard Science Fiction"],
      releaseYear: 2014,
      ratings: [5, 5, 4.5, 4.5, 4],
      reviews: [
        {
          user: "scifi_reader",
          review: "The best science fiction novel of the decade",
        },
        {
          user: "johnQcitizen",
          review: "A science fiction tour-de-force",
        },
        { user: "marcusoreilly", review: "One of my favorite novels ever" },
      ],
    },
    {
      title: "1984",
      author: ["George Orwell"],
      description:
        "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can't escape the fact that Big Brother is always watching...",
      isbn13: "978-04151524935",
      isbn10: "9780451524935",
      genre: [
        "Dystopian Fiction",
        "Classic Literature & Fiction",
        "Literary Fiction",
      ],
      releaseYear: 1961,
      ratings: [4, 4, 4.5, 4.5, 3],
      reviews: [
        {
          user: "scifi_reader",
          review: "Should be required reading for everyone.",
        },
      ],
    },
    {
      title: "Animal Farm",
      author: ["George Orwell"],
      description:
        "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.",
      isbn13: "",
      isbn10: "9780451526342",
      genre: [
        "Dystopian Fiction",
        "Classic Literature & Fiction",
        "Literary Fiction",
      ],
      releaseYear: 1975,
      ratings: [5, 3, 4.5, 4.5, 2],
      reviews: [
        {
          user: "scifi_reader",
          review: "Everyone's great till they get in power.",
        },
      ],
    },
  ];

  //insert the books and return confirmation
  await Book.insertMany(booksToInsert)
    .then((booksToInsert) => {
      console.log(`${booksToInsert.length} books inserted into database.`);
    })
    .catch((err) => {
      console.log("Something went wrong when inserting the books: ", err);
    });

  //Populate Users--------------------------------------------------------------
  const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    admin: Boolean,
    read: [String],
    toBeRead: [String],
    bio: String,
  });

  const User = new mongoose.model("User", userSchema);

  const usersToInsert = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "iamastandarduser@gmail.com",
      admin: false,
      read: ["1984", "Fight Club", "The Three Body Problem"],
      toBeRead: ["We Ate The Dark"],
      bio: "",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      admin: true,
      email: "iamtheadmin@newapp.com",
      read: ["The Time Machine", "The Great Gatsby"],
      toBeRead: ["The Three Body Problem", "1984"],
    },
  ];

  await User.insertMany(usersToInsert)
    .then((usersToInsert) => {
      console.log(`${usersToInsert.length} users inserted into Database.`);
    })
    .catch((err) => {
      console.log("Something went wrong when inserting the users: ", err);
    });
}

seed()
  .catch((err) => console.log("Something went wrong: ", err))
  .finally(() => {
    mongoose.connection.close();
  });
