import { useState, useEffect } from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';

import SkillModal from './SkillModal';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const contactText = 'Business inquiry? Contact me!';
  const careerStart = new Date('2014-07-01').getTime();

  const lines = [
    '{INITIALIZED}',
    'sys.start();',
    'loading profile...',
    'user: Ankrath',
    // 'status: building cool things',
    <>
      latest_project:{' '}
      <a
        href='https://goaltrack.lol'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-green-400 transition-colors underline'
      >
        goaltrack.lol
      </a>
    </>,
    'loading skills...',
    'establishing connections...',
  ];

  useEffect(() => {
    if (!showContent) return;
    setTypedText('');

    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex < contactText.length) {
        setTypedText(contactText.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, 80);

    return () => clearInterval(typingTimer);
  }, [showContent]);

  useEffect(() => {
    setVisible(true);
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev < lines.length ? prev + 1 : prev));
    }, 350);

    if (currentLine === lines.length) {
      setTimeout(() => setShowContent(true), 350);
    }

    return () => clearInterval(timer);
  }, [currentLine, lines.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCursorPosition(prev => (prev === 0 ? 1 : 0));
    }, 530);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const experienceTimer = setInterval(() => {
      const now = new Date().getTime();
      const yearsDiff = (now - careerStart) / (1000 * 60 * 60 * 24 * 365.25);
      setYearsExperience(yearsDiff);
    }, 50);

    const now = new Date().getTime();
    const yearsDiff = (now - careerStart) / (1000 * 60 * 60 * 24 * 365.25);
    setYearsExperience(yearsDiff);

    return () => clearInterval(experienceTimer);
  }, [careerStart]);

  return (
    <div className='min-h-screen w-full bg-black text-green-500 p-8 font-mono text-base md:text-lg overflow-x-hidden overflow-y-auto scrollbar-hide'>
      <div className='fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute text-xs'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
            }}
          >
            {Math.random().toString(36).substring(2, 3)}
          </div>
        ))}
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='max-w-3xl mx-auto'>
          <div className='space-y-2'>
            {lines.slice(0, currentLine).map((line, index) => (
              <div key={index} className='flex items-start'>
                <span className='text-gray-500 mr-2'>$</span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          {currentLine >= lines.length && showContent && (
            <div className='mt-12'>
              <div className='text-sm text-gray-500'>skills</div>
              <div className='flex flex-wrap gap-4'>
                <span className='text-blue-400'>React</span>
                <span className='text-red-400'>TypeScript</span>
                <span className='text-purple-400'>Next.js</span>
                <span className='text-yellow-400'>Node</span>
                <span className='text-orange-400 line-through'>
                  League of Legends
                </span>
                <span className='text-gray-300'>
                  ...and{' '}
                  <span
                    className='underline cursor-pointer hover:text-white'
                    onClick={() => setShowModal(true)}
                  >
                    many others
                  </span>
                </span>
              </div>

              <div className='space-y-2 pt-10 pb-3'>
                <a
                  href='https://github.com/ankrath'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-white hover:text-green-400 transition-colors'
                >
                  <FiGithub size={18} />
                  <span>github.connection_established</span>
                </a>
                <a
                  href='https://twitter.com/ankrath'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-white hover:text-green-400 transition-colors'
                >
                  <FiTwitter size={18} />
                  <span>twitter.connection_established</span>
                </a>
              </div>

              <div className='mt-8 mb-6 grid grid-cols-2 gap-4'>
                <div className='border border-green-500/30 p-4'>
                  <div className='text-sm text-gray-500'>
                    years of experience
                  </div>
                  <div className='mt-1'>{yearsExperience.toFixed(10)}</div>
                </div>
                <div className='border border-green-500/30 p-4'>
                  <div className='text-sm text-gray-500'>location</div>
                  <div className='mt-1'>UK</div>
                </div>
              </div>

              <div className='text-xl flex items-center space-x-2 hover:text-green-400 transition-colors pt-6'>
                <span className='text-gray-500'>$</span>
                <a href='mailto:contact@ankrath.dev'>
                  {typedText}
                  <span
                    className={`inline-block w-2 h-4 bg-green-500 ${
                      cursorPosition ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <SkillModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    from { transform: translateY(-100%); }
    to { transform: translateY(1000%); }
  }
`;
document.head.appendChild(style);

export default App;
