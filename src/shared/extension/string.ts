export const truncate = (text: string, limit: number): string => text.slice(0, limit);

export const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';
