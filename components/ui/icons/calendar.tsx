export default function( props: { isActive?: boolean }){

  const { isActive = true } = props;

  return (
    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
      <path className={`fill-current ${isActive ? 'text-indigo-500' : 'text-slate-600'}`} d="M1 3h22v20H1z" />
      <path
        className={`fill-current ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}
        d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
      />
    </svg>
  )
}

