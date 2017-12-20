export default function() {
  return [
    { title: 'Javascript The Good Parts', pages: 120 },
    { title: 'Harry Potter', pages: 547 },
    { title: 'The Dark Tower', pages: 854 },
    { title: 'Eloquent Ruby', pages: 452 }
  ];
}

//Редюсера е просто функция, която връща една част от състоянието на приложението.
// Първо ние създаваме редюсера, а след това го свързваме с нашето приложение. Това го правим в index.js в същата папка.
