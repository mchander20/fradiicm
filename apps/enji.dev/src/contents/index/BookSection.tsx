// @/contents/index/BookSection.js

import clsx from 'clsx';
import Image from 'next/image';

function BookSection() {
  return (
    <section
      className={clsx(
        'content-wrapper flex flex-col items-center rounded-xl bg-slate-50 p-6 shadow-lg',
        'md:flex-row md:gap-8 md:p-10',
        'dark:bg-slate-900'
      )}
    >
      <div className={clsx('flex-shrink-0')}>
        <Image
          src="/assets/images/financia-lift-off.jpg"
          alt="Book Cover: Path to Financial Independence"
          width={210}
          height={320}
          className={clsx(
            'rounded-lg shadow-md',
            'border border-slate-200',
            'dark:border-slate-700'
          )}
          priority
        />
      </div>
      <div
        className={clsx(
          'mt-6 text-center md:mt-0 md:text-left flex flex-col justify-center'
        )}
      >
        <h2
          className={clsx(
            'text-3xl font-extrabold text-slate-800 mb-2',
            'md:text-4xl',
            'dark:text-slate-100'
          )}
        >
          Path to Financial Independence
        </h2>
        <p
          className={clsx(
            'text-lg text-slate-600 mb-4',
            'md:text-xl',
            'dark:text-slate-300'
          )}
        >
          Discover practical strategies, mindset shifts, and real-world stories to achieve true financial freedom. This book guides you from budgeting basics to building wealth step-by-step.
        </p>
        <button
          type="button"  // Add this line
          style={{ backgroundColor: "#bf0000" }}
          className={clsx(
            'inline-block rounded-md bg-amber-500 px-5 py-2 text-white font-semibold transition hover:bg-amber-600',
            'dark:bg-amber-700 dark:hover:bg-amber-800'
          )}
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}

export default BookSection;
