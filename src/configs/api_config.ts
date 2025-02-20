const isDevelopment = process.env.NODE_ENV === "development";

const BASE_DOMAIN = isDevelopment ? "https://fakestoreapi.com" : "https://fakestoreapi.com";

export const API_CONFIG = {
    BASE_URL: BASE_DOMAIN,
    ENDPOINTS: {
        PRODUCTS: "/products",
    },
} as const;

// 為了方便使用，導出完整的 URL
export const API_URLS = {
    PRODUCTS: `${BASE_DOMAIN}${API_CONFIG.ENDPOINTS.PRODUCTS}`,
} as const;
