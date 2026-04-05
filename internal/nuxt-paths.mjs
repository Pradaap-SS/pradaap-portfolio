const ensureTrailingSlash = (value) => (value.endsWith("/") ? value : `${value}/`)

export const baseURL = () => ensureTrailingSlash(process.env.NUXT_APP_BASE_URL || "/")
