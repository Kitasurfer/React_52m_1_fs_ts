import React, { createContext, useState, ReactNode } from 'react';

export interface IBlogContext {
  postedMessage: string;
  setPostedMessage: (msg: string) => void;
}

export const BlogContext = createContext<IBlogContext | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [postedMessage, setPostedMessage] = useState<string>('');

  return (
    <BlogContext.Provider value={{ postedMessage, setPostedMessage }}>
      {children}
    </BlogContext.Provider>
  );
};
