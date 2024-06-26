import React, { useState, useEffect } from "react";
import styles from "@/styles/components/burger.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setIsOpenNav } from "@/redux/nav-slice/nav-slice";

const Burger = () => {
  const dispatch = useAppDispatch();

  const navIsOpenNow = useAppSelector(
    (state: RootState) => state.navIsOpen.value
  );

  const toggleMenu = () => {
    const newIsOpen = !navIsOpenNow;
    dispatch(setIsOpenNav(newIsOpen));
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsOpenNav(false));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (navIsOpenNow) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navIsOpenNow]);

  return (
    <div
      className={`${styles.menu_icon} ${
        navIsOpenNow ? styles.menu_icon_open : ""
      }`}
      onClick={toggleMenu}
    >
      <span></span>
    </div>
  );
};

export default Burger;
