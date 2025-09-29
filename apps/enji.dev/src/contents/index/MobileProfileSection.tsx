import clsx from 'clsx';
import Image from 'next/image';

function MobileProfileSection() {
  return (
    <section
      className={clsx(
        'flex flex-col items-center justify-center py-8',
        'md:hidden' // visible only on mobile
      )}
    >
      <div
        className={clsx(
          'relative rounded-full bg-slate-100 w-56 h-56 mb-5 overflow-hidden shadow'
        )}
      >
        <Image
          src="/assets/images/me.png" // update with your image path
          alt="Chander Mohan"
          layout="fill"
          objectFit="cover"
          className={clsx('rounded-full')}
          priority
        />
      </div>
      <h3 className={clsx('text-xl font-bold mb-1')}>
        <span>Chander </span>
        <span style={{ color: '#bf0000' }}>Mohan</span>
      </h3>
      <p className={clsx('text-sm text-slate-500 text-center max-w-xs')}>
        Entrepreneur | Full-Stack Developer | Writer
      </p>
    </section>
  );
}

export default MobileProfileSection;
