import { useEffect, useState } from 'react';

interface DynamicTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const DynamicText: React.FC<DynamicTextProps> = ({
  words,
  typingSpeed = 150,  // Default typing speed
  deletingSpeed = 100, // Default deleting speed
  delayBetweenWords = 1000, // Default delay between words
}) => {
  const [dynamicWord, setDynamicWord] = useState("");
  const [showCaret, setShowCaret] = useState(true); // Controls blinking caret

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // Typing in
        if (letterIndex < currentWord.length) {
          setDynamicWord(currentWord.substring(0, letterIndex + 1)); // Append the next letter
          letterIndex++;
        } else {
          // Pause after typing the full word
          setTimeout(() => {
            isDeleting = true;
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (letterIndex > 0) {
          setDynamicWord(currentWord.substring(0, letterIndex - 1)); // Remove the last letter
          letterIndex--;
        } else {
          // Move to the next word
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [words, typingSpeed, deletingSpeed, delayBetweenWords]);

  // Control the blinking caret
  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev); // Toggle caret visibility
    }, 500); // Blink every 500ms

    return () => clearInterval(caretInterval);
  }, []);

  return (
    <span>
      <span className="dynamic-word font-bold">{dynamicWord}</span>
      {showCaret && <span className="caret">|</span>}
    </span>
  );
};

export default DynamicText;
