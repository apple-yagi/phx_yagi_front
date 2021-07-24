import { useEffect, useState } from "react";

const emojiList = [
  "🦁",
  "🦜",
  "🐐",
  "🐱",
  "🐶",
  "🐰",
  "🐭",
  "🐹",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐷",
  "🐮",
  "🐵",
  "🐯",
  "🐥",
  "🐔",
  "🐧"
];

export const useAnimal = () => {
  const [animal, setAnimal] = useState("");

  useEffect(() => {
    const randIndex = Math.floor(Math.random() * emojiList.length);
    setAnimal(emojiList[randIndex]);
  }, []);

  return { animal };
};
