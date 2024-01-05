let quotesArr = [
  {'author': 'Mae West', 
   'quote': 'You only live once, but if you do it right, once is enough.'
  },
  {'author': 'Mahatma Gandhi', 
   'quote': 'Be the change that you wish to see in the world.'
  },
  {'author': 'Frank Sinatra', 
   'quote': 'The best revenge is massive success.'
  },
  {'author': 'Mark Twain', 
   'quote': 'If you tell the truth, you do not have to remember anything.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'A friend is someone who knows all about you and still loves you.'
  },
  {'author': 'Oscar Wilde',
   'quote': 'Always forgive your enemies; nothing annoys them so much.' 
  },
];

function generateQuote() {
  let randomIndex = Math.round(Math.random() * (quotesArr.length - 1));
  document.querySelector('#quotePart').textContent = `\"${quotesArr[randomIndex].quote}\"`;
  document.querySelector('#authorPart').textContent = `--${quotesArr[randomIndex].author}`;
}
