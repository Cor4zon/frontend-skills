let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  Object.setPrototypeOf(table, head);
  Object.setPrototypeOf(bed, table);
  Object.setPrototypeOf(pockets, bed);

  console.log(pockets.pen); // 3
  console.log(bed.glasses); // 1



//   Ответьте на вопрос: как быстрее получить значение glasses – 
//   через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
// Через head.glasses короче


// правильный ответ:
// С точки зрения производительности, для современных движков неважно, 
// откуда берётся свойство – из объекта или из прототипа. Они запоминают, 
// где было найдено свойство, и повторно используют его в следующем запросе.

// Например, при обращении к pockets.glasses они запомнят, что нашли glasses в head, 
// и в следующий раз будут искать там же. Они достаточно умны, чтобы при изменениях обновлять 
// внутренний кеш, поэтому такая оптимизация безопасна.