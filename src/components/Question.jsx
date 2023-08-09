import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../scss/Question.module.scss";
import "../scss/CSSTransition.scss";

const Question = ({ question, answer }) => {
  const [activeQuestion, setActiveQuestion] = useState(false);
  const questionRef = useRef();
  useEffect(() => {
    const clickOutside = (e) => {
      if (!questionRef.current.contains(e.target)) {
        setActiveQuestion(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [setActiveQuestion]);
  return (
    <div className={styles.container}>
      <p
        style={
          activeQuestion
            ? {
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(to right, #f96e09, #ecd823)",
              }
            : {}
        }
        className={styles.question}
        ref={questionRef}
        onClick={() => setActiveQuestion(!activeQuestion)}
      >
        {question}
      </p>
      <CSSTransition
        in={activeQuestion}
        classNames="alert"
        timeout={200}
        unmountOnExit
      >
        <p className={styles.answer}>{answer}</p>
      </CSSTransition>
    </div>
  );
};
export default Question;
