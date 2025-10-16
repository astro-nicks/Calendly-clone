declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

// Allow importing CSS as a string (for globals.css imports without modules)
declare module '*.css?raw' {
  const content: string;
  export default content;
}
