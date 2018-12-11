## Övingar för student kväll om React
Applikationen kan i nulägget lägg till en todo genom att skriva in input fältet.

### Steg 1(addTodo):
  I React vill man dela upp funktionalitet i mindre komponenter, dels för att kunna återanvända generella komponenter
  och dels för att bryta isär logik och templates till mindre delar. I steg 1 ska ni ändra så att istället för att app
  komponenten spara texten för den ny inputen ska den hanteras i addTodo komponenten. Sedan ska app komponenten lyssna på
  ett event från addTodo komponenten om när den ska lägga till en todo i state variablen todos.

### Steg 2(removeTodo):
  I det här steget ska ni dels lägga in en knapp för att kunna ta bort en nyligen tillagd todo, kolla efer kommentar

### Steg 3
  Nu ska ni lägga till en checkbox för att kunna markera en todo som gjord, todo ska även byta färg när checkboxen är ikryssad

### Steg 4
  Nu vill jag att ni:
  - sparar todos i api när den lagts till i när man klickar på lägg till knappen,
  - hämtar todos ifrån API under mount
  - samt tar bort todos i API när den tagits bort i listan i applicationen
API returnerar en promise när den har svarat som man ska lyssna på

API används t.ex. för att hämta listan
getList().then((res) => )

### Steg 5
Nu ska ni lägga till så att man enbart kan ta bort todos om man först klickar på en edit knapp, för att inte kunna ta bort todos genom felklick.

