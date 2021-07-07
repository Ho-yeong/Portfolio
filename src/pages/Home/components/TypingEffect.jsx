import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = ({ text, staticText, eraseSpeed, eraseDelay, typingDelay, speed }) => {
  return (
    <>
      <ReactTypingEffect
        staticText={staticText ? staticText : ''}
        eraseDelay={eraseDelay}
        eraseSpeed={eraseSpeed}
        typingDelay={typingDelay}
        speed={speed}
        text={text}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span key={key} style={{ fontWeight: 700 }}>
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default TypingEffect;
