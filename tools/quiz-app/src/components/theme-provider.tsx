// @ts-expect-error ...
export function ThemeProvider({ children, defaultTheme }) {
  console.log(defaultTheme);
  return <>{ children }</>
}
