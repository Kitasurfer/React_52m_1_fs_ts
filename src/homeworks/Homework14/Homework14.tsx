import React from "react";
import { BlogProvider } from "./BlogContext";
import BlogManagement from "./components/BlogManagement/BlogManagement";

const Homework14: React.FC = () => {
  return (
    <BlogProvider>
      <BlogManagement />
    </BlogProvider>
  );
};

export default Homework14;
