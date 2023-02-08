const productionHost = "shopping-cart-gp.vercel.app";
const devHost = "localhost:3000";
const host = import.meta.env.MODE === "production" ? productionHost : devHost;

const protocol = import.meta.env.MODE === "production" ? "https" : "http";

export const siteUrl = `${protocol}://${host}`;
export { host, protocol };
