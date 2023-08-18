export const TransactionsProperties = () => {
  const statusColor = (status: string): string => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400';
      case 'Canceled':
        return 'bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
    }
  }

  const amountColor = (amount: string): string => {
    switch (amount.charAt(0)) {
      case '+':
        return 'text-emerald-500'
      default:
        return 'text-slate-800 dark:text-slate-300'
    }
  } 

  return {
    statusColor,
    amountColor,
  }
}
