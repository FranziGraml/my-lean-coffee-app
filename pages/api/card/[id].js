import { getCards } from "../../../src/services/get-cards";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default function handler(request, response) {
  const { id } = request.query;

  const cards = getCards();
  const singleCard = cards.find((card) => card.id === id);

  if (request.method === "DELETE") {
    response.status(200).json({ message: "card deleted", card: singleCard });
  } else if (request.methode === "PUT") {
    const changedCard = JSON.parse(request.body);
    response.status(200).json({ message: "card updated", card: changedCard });
  } else {
    response.status(200).json(singleCard);
  }
}
