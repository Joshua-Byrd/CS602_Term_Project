const mongoose = require("mongoose");

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/projectTestDb");

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
  ];

  //insert the books and return confirmation
  await Book.insertMany(booksToInsert)
    .then((booksToInsert) => {
      console.log(`${booksToInsert.length} books inserted into database.`);
    })
    .catch((err) => {
      console.log("Something went wrong when inserting the books: ", err);
    });

  //Populate Authors------------------------------------------------------------
  const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    booksWritten: [String],
  });

  const Author = new mongoose.model("Author", authorSchema);

  authorsToInsert = [
    {
      firstName: "H.G.",
      lastName: "Wells",
      bio: "Herbert George Wells (21 September 1866 - 13 August 1946) was an English writer. Prolific in many genres, he wrote more than fifty novels and dozens of short stories. His non-fiction output included works of social commentary, politics, history, popular science, satire, biography, and autobiography. Wells' science fiction novels are so well regarded that he has been called the 'father of science fiction'.",
      booksWritten: [
        "The Time Machine",
        "The Wonderful Visit",
        "The Island of Doctor Moreau",
        "The Wheels of Chance",
        "The Invisible Man",
        "The War of the Worlds",
        "When the Sleeper Wakes",
        "Love and Mr Lewisham",
        "The First Men in the Moon",
      ],
    },
    {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
      bio: "(September 24, 1896 - December 21, 1940) was an American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age—a term he popularized in his short story collection Tales of the Jazz Age. During his lifetime, he published four novels, four story collections, and 164 short stories. Although he achieved temporary popular success and fortune in the 1920s, Fitzgerald received critical acclaim only after his death and is now widely regarded as one of the greatest American writers of the 20th century.",
      booksWritten: [
        "The Great Gatsby",
        "This Side Of Paradise",
        "The Beautiful And the Damned",
        "Tender Is The Night",
      ],
    },
    {
      firstName: "Chuck",
      lastName: "Palahniuk",
      bio: "Charles Michael 'Chuck' Palahniuk (born February 21, 1962) is an American novelist who describes his work as transgressional fiction. He has published 19 novels, three nonfiction books, two graphic novels, and two adult coloring books, as well as several short stories. His first published novel was Fight Club, which was adapted into a film of the same title.",
      booksWritten: [
        "Fight club",
        "Haunted",
        "Lullaby",
        "Invisible Monsters",
        "Choke",
        "Survivor",
      ],
    },
    {
      firstName: "Mallory",
      lastName: "Pearson",
      bio: "New author Mallory Pearson made her debut with this year's 'We Ate the Dark'.",
      booksWritten: ["We Ate The Dark"],
    },
    {
      firstName: "Cixin",
      lastName: "Liu",
      bio: "Liu Cixin is a Chinese computer engineer and science fiction writer.He is a nine-time winner of China's Galaxy Award and has also received the 2015 Hugo Award for his novel The Three-Body Problem as well as the 2017 Locus Award for Death's End. He is also a winner of the Chinese Nebula Award. In English translations of his works, his name is given as Cixin Liu. ",
      booksWritten: [
        "China 2185",
        "The Devil's Bricks",
        "Ball Lightning",
        "The Three Body Problem",
        "The Dark Forest",
        "Death's End",
      ],
    },
    {
      firstName: "George",
      lastName: "Orwell",
      bio: "Eric Arthur Blair (25 June 1903 - 21 January 1950) was a British novelist, essayist, journalist, and critic who wrote under the name George Orwell. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism.",
      booksWritten: [
        "Animal Farm",
        "Nineteen Eighty-Four",
        "The Road to Wigan Pier",
        "Home To Catlonia",
      ],
    },
  ];

  await Author.insertMany(authorsToInsert)
    .then((authorsToInsert) => {
      console.log(`${authorsToInsert.length} authors inserted into database.`);
    })
    .catch((err) => {
      console.log("Something went wrong when inserting the authors: ", err);
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
