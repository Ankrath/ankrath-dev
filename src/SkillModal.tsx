type SkillModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SkillModal = ({ isOpen, onClose }: SkillModalProps) => {
  if (!isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-black border border-green-500/30 p-6 max-w-2xl w-full font-mono'
        onClick={handleContentClick}
      >
        <div className='flex justify-between items-start mb-4'>
          <div>
            <span className='text-gray-500'>$</span>
            <span className='text-green-500 ml-2'>skills</span>
          </div>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-green-400 transition-colors'
          >
            [x]
          </button>
        </div>

        <div className='space-y-6'>
          <div className='pt-2'>
            <div className='text-sm text-gray-500 mb-1'>full stack</div>
            <div className='flex flex-wrap gap-x-4 gap-y-1'>
              <span className='text-blue-400'>React</span>
              <span className='text-violet-400'>Next.js</span>
              <span className='text-amber-400'>Redux</span>
              <span className='text-yellow-300'>JavaScript</span>
              <span className='text-red-400'>TypeScript</span>
              <span className='text-violet-600'>React Native</span>
              <span className='text-cyan-400'>Zustand</span>
              <span className='text-pink-400'>Tailwind</span>
              <span className='text-emerald-400'>Node</span>
              <span className='text-red-600'>Express</span>
              <span className='text-blue-500'>Go</span>
              <span className='text-fuchsia-400'>GraphQL</span>
              <span className='text-indigo-400'>Prisma</span>
              <span className='text-rose-400'>Redis</span>
            </div>
          </div>

          <div className='pt-2'>
            <div className='text-sm text-gray-500 mb-1'>testing</div>
            <div className='flex flex-wrap gap-4'>
              <span className='text-red-500'>Jest</span>
              <span className='text-violet-500'>RTL</span>
              <span className='text-sky-400'>Playwright</span>
              <span className='text-teal-300'>Cypress</span>
            </div>
          </div>

          <div className='pt-2'>
            <div className='text-sm text-gray-500 mb-1'>db</div>
            <div className='flex flex-wrap gap-4'>
              <span className='text-green-500'>MongoDB</span>
              <span className='text-cyan-300'>PostgreSQL</span>
              <span className='text-amber-300'>MySQL</span>
            </div>
          </div>

          <div className='pt-2'>
            <div className='text-sm text-gray-500 mb-1'>misc</div>
            <div className='flex flex-wrap gap-4'>
              <span className='text-orange-300'>AWS (EC2, S3, Lambda)</span>
              <span className='text-sky-300'>Docker</span>
              <span className='text-rose-300'>Terraform</span>
              <span className='text-indigo-300'>Kubernetes</span>
              <span className='text-fuchsia-300'>Storybook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
