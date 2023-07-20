const mapping: Record<string, string> = {
  businesses: 'business',
  contents: 'content',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
