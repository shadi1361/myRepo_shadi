// این فایل به TypeScript می‌گوید که چگونه فایل‌های .webp را بشناسد

declare module "*.webp" {
  const value: string;
  export default value;
}
