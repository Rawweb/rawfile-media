import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Cta = () => {
  // Pairs of phrases
  const phrases = [
    ["Let's", 'Work Together'],
    ['Capture', 'The Moment'],
    ['Create', 'Memories'],
  ];

  const [setIndex, setSetIndex] = useState(0); // which pair we’re on
  const [letDisplayed, setLetDisplayed] = useState('');
  const [workDisplayed, setWorkDisplayed] = useState('');
  const [phase, setPhase] = useState('typingLet');
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentLet = phrases[setIndex][0];
  const currentWork = phrases[setIndex][1];

  useEffect(() => {
    let timeout;
    const typingSpeed = 120;
    const deletingSpeed = 80;

    if (phase === 'typingLet') {
      if (letDisplayed.length < currentLet.length) {
        timeout = setTimeout(() => {
          setLetDisplayed(currentLet.slice(0, letDisplayed.length + 1));
          setCursorVisible(true);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('typingWork'), 500);
        setCursorVisible(false);
      }
    }

    if (phase === 'typingWork') {
      if (workDisplayed.length < currentWork.length) {
        timeout = setTimeout(() => {
          setWorkDisplayed(currentWork.slice(0, workDisplayed.length + 1));
          setCursorVisible(true);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1000);
        setCursorVisible(false);
      }
    }

    if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deletingWork'), 1000);
    }

    if (phase === 'deletingWork') {
      if (workDisplayed.length > 0) {
        timeout = setTimeout(() => {
          setWorkDisplayed(currentWork.slice(0, workDisplayed.length - 1));
          setCursorVisible(true);
        }, deletingSpeed);
      } else {
        setPhase('deletingLet');
      }
    }

    if (phase === 'deletingLet') {
      if (letDisplayed.length > 0) {
        timeout = setTimeout(() => {
          setLetDisplayed(currentLet.slice(0, letDisplayed.length - 1));
          setCursorVisible(true);
        }, deletingSpeed);
      } else {
        // Move to next phrase set
        setSetIndex(prev => (prev + 1) % phrases.length);
        setPhase('typingLet');
      }
    }

    return () => clearTimeout(timeout);
  }, [
    letDisplayed,
    workDisplayed,
    phase,
    currentLet,
    currentWork,
    phrases.length,
  ]);

  return (
    <div>
      {/* First line: Let's + Button */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-3xl md:text-4xl text-white uppercase">
          {letDisplayed}
          {cursorVisible && <span className="animate-pulse">|</span>}
        </h1>
        <button className="flex items-center gap-2 bg-purple-dark hover:bg-purple-midDark text-white px-5 md:px-8 py-2 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow">
          <FiArrowUpRight className="size-5" />
        </button>
      </div>

      {/* Second line: Work Together */}
      <h1 className="text-3xl md:text-4xl text-white uppercase">
        {workDisplayed}
        {cursorVisible && <span className="animate-pulse">|</span>}
      </h1>
    </div>
  );
};

export default Cta;
