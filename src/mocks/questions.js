const settings = {
  gameTime: 5,
  errorCount: 3
};

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg`,
        genre: `rock`,
      },
      {
        src: `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `folk`,
    answers: [
      {
        src: `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`,
        genre: `folk`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg`,
        genre: `pop`,
      },
      {
        src: `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Russian_Anthem_chorus.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `https://patrickdearteaga.com/audio/Child's%20Nightmare.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
    ],
  },
];

export {settings, questions};
