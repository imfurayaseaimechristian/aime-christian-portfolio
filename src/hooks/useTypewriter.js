import { useEffect, useState } from "react";

export function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const atEnd = !deleting && text === current;
    const atStart = deleting && text === "";

    const delay = atEnd ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
        return;
      }

      if (atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      const nextLength = text.length + (deleting ? -1 : 1);
      setText(current.slice(0, nextLength));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
