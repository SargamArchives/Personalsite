import { useState, useEffect } from "react";

const useTyping = (phrase) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < phrase.length) {
        setText(() => text + phrase[index]);
        setIndex(() => index + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return text;
};

export default useTyping;
