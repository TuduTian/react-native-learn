declare global {
  namespace NodeJS {
    interface Global {
      APP_NAME: string;
      px: (numner) => number;
      font: (number) => number;
    }
  }
}

export {};
