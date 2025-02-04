import Link from "next/link";
import { snakeCase } from "lodash";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InternalPageMenuItemProps {
  children: string;
  to: string;
}

const InternalPageMenuItem = ({ children, to }: InternalPageMenuItemProps) => {
  const itemTextInSnakeCase = snakeCase(children);
  const href = to || `#${itemTextInSnakeCase}`;

  return (
    <motion.div
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={href}
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm",
          "text-muted-foreground hover:text-foreground",
          "hover:bg-accent",
          "transition-all duration-200"
        )}
      >
        <span className="relative">
          {children}
          <motion.span
            className="absolute -bottom-0.5 left-0 h-[1px] bg-foreground"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default InternalPageMenuItem;
