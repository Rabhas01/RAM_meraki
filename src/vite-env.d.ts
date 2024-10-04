/// <reference types="vite/client" />
/// <reference types="vite/client" />

// For imports with width parameters
declare module '*.jpg?w=*' {
  const src: string;
  export default src;
}

// For imports with multiple parameters
declare module '*.jpg?*' {
  const src: string;
  export default src;
}

// For general image imports with query parameters
declare module '*&imagetools' {
  const src: string;
  export default src;
}
