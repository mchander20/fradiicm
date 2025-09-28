import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
      style={{ backgroundColor: '#bf0000', borderColor:"#bf0000" }}
        className={clsx(
          'border-box flex h-8 w-8 items-center justify-center rounded-xl border-2',
          'sm:h-6 sm:w-6 sm:rounded-lg',
          [
            active
              ? 'border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500'
              : 'border-accent-600 dark:border-accent-500',
          ]
        )}
      >
        <span
  className={clsx(
    'inline-block text-xs font-semibold rounded-full select-none',
    'sm:text-sm',
    [active ? 'text-white' : 'text-accent-600 dark:text-accent-400']
  )}
>
  FC
</span>
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          Fradii
        </span>
        <span style={{ color: '#bf0000' }} className={clsx('text-accent-600', 'dark:text-accent-500')}>
          CM
        </span>
      </div>
    </div>
  );
}

export default Logo;
