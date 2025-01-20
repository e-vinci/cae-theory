import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface InternalPageMenuProps {
  children: React.ReactNode;
  id: number;
}

const InternalPageMenu = ({ children }: InternalPageMenuProps) => {
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  const onCloseOpenBtnClick = () => {
    setMenuIsHidden(!menuIsHidden);
  };

  if (menuIsHidden)
    return (
      <div>
        <MenuOpenIcon onClick={onCloseOpenBtnClick} />
      </div>
    );

  return (
    <div>
      <HighlightOffIcon onClick={onCloseOpenBtnClick} />
      {children}
    </div>
  );
};

export default InternalPageMenu;
