const generateNpmConfig = () => {
  const config = `
  shamefully-hoist=true
  strict-peer-dependencies=false
  `;

  return config;
};

export default generateNpmConfig;
