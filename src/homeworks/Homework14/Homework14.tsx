import { BlogProvider } from "./BlogContext";
import BlogManagement from "./components/BlogManagement/BlogManagement";

function Homework14() {
  return (
    <BlogProvider>
      <BlogManagement />
    </BlogProvider>
  );
};

export default Homework14;
