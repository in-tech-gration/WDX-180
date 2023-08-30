export default function UtilityIcon(props: { isActive?: boolean }) {

  const { isActive = true } = props;

  return (
    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
      <circle
        className={`fill-current ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}
        cx="18.5"
        cy="5.5"
        r="4.5"
      />
      <circle
        className={`fill-current ${isActive ? 'text-indigo-500' : 'text-slate-600'}`}
        cx="5.5"
        cy="5.5"
        r="4.5"
      />
      <circle
        className={`fill-current ${isActive ? 'text-indigo-500' : 'text-slate-600'}`}
        cx="18.5"
        cy="18.5"
        r="4.5"
      />
      <circle
        className={`fill-current ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}
        cx="5.5"
        cy="18.5"
        r="4.5"
      />
    </svg>


  )
}

