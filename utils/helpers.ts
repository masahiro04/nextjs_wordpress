export const reistrictCharacters = (chars: string, limit: number): string => chars.slice(0, limit);

export const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';
