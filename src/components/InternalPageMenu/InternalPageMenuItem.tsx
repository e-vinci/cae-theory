import Link from "next/link";
import { snakeCase } from "lodash";
import MenuItem from "@mui/material/MenuItem";
import MUILink from "@mui/material/Link";

interface InternalPageMenuItemProps {
  children: string;
  to: string;
}


const InternalPageMenuItem = ({
  children,
  to,
}: InternalPageMenuItemProps) => {
  const itemTextInSnakeCase = snakeCase(children);

    return (
    <MenuItem>
      <MUILink href={to ? to : "#" + itemTextInSnakeCase} underline="hover" color="inherit" component={Link}>
        {children}
      </MUILink>
    </MenuItem>
  );
};

export default InternalPageMenuItem;
