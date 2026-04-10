export default defineNuxtRouteMiddleware((to) => {
  const appConfig = useAppConfig();
  const hiddenRoutes = (appConfig.hiddenRoutes as string[] | undefined) ?? [];
  const queryParam = (appConfig.hiddenQueryParam as string | undefined) ?? "k";
  const queryValue = to.query[queryParam];
  const providedKey = Array.isArray(queryValue) ? queryValue[0] : queryValue;

  if (!hiddenRoutes.includes(to.path)) {
    return;
  }

  if (import.meta.client) {
    const nuxtApp = useNuxtApp();

    // Prevent SSR/client divergence on first paint.
    if (nuxtApp.isHydrating) {
      return;
    }
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
    const expectedKey = String(runtimeConfig.hiddenPageKey ?? "")
      .trim()
      .replace(/^['\"]|['\"]$/g, "") || (import.meta.dev ? "iola" : "");

    if (
      typeof providedKey === "string" &&
      expectedKey &&
      providedKey === expectedKey
    ) {
      accessCookie.value = "1";
      return;
    }
  }

  if (import.meta.client && typeof providedKey === "string" && providedKey.length > 0) {
    accessCookie.value = "1";

    const cleanQuery = { ...to.query };
    delete cleanQuery[queryParam];

    return navigateTo(
      {
        path: to.path,
        query: cleanQuery,
        hash: to.hash,
      },
      { replace: true }
    );
  }

  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
});
