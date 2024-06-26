import React, { useState } from "react";
import styles from "@/styles/components/burger.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setIsOpenNav } from "@/redux/nav-slice/nav-slice";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navIsOpenNow = useAppSelector(
    (state: RootState) => state.navIsOpen.value
  );

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    dispatch(setIsOpenNav(newIsOpen));
  };

  return (
    <div
      className={`${styles.menu_icon} ${isOpen ? styles.menu_icon_open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
    </div>
  );
};

export default Burger;
