tailwind.config = {
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            body: ["Roboto", "sans-serif"],
            mono: ["ui-monospace", "monospace"],
          },
      extend: {
        colors: {
          clifford: '#da373d',
        }
      },
    },
    corePlugins: {
        preflight: false,
      },
  };

// tailwind.config = {
//     darkMode: "class",
//     theme: {
//       fontFamily: {
//         sans: ["Roboto", "sans-serif"],
//         body: ["Roboto", "sans-serif"],
//         mono: ["ui-monospace", "monospace"],
//       },
//     },
//     corePlugins: {
//       preflight: false,
//     },
//   };