import { getCards } from "../../src/services/get-cards";

export default function handler(request, response) {
  const cards = getCards();

  cards.push({
    id: 1,
    content: "Testy test",
    name: "Testname",
  });

  response.status(200).json(cards);
}
