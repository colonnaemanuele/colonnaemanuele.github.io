export default defineNuxtRouteMiddleware((to) => {
  const appConfig = useAppConfig();
  const hiddenRoutes = (appConfig.hiddenRoutes as string[] | undefined) ?? [];

  if (!hiddenRoutes.includes(to.path)) {
    return;
  }

  const accessCookie = useCookie<string | null>("hidden_access", {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  if (accessCookie.value === "1") {
    return;
  }

  if (import.meta.server) {
    const runtimeConfig = useRuntimeConfig();
    const queryParam = (appConfig.hiddenQueryParam as string | undefined) ?? "k";
    const queryValue = to.query[queryParam];
    const providedKey = Array.isArray(queryValue) ? queryValue[0] : queryValue;

    if (
      typeof providedKey === "string" &&
      runtimeConfig.hiddenPageKey &&
      providedKey === runtimeConfig.hiddenPageKey
    ) {
      accessCookie.value = "1";
      return;
    }
  }

  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
});
