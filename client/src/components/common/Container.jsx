import { MAX_WIDTH } from "../../constants/theme";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`${MAX_WIDTH} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;