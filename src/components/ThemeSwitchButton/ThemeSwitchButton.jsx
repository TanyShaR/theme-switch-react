import classNames from "classnames";
import S from "./ThemeSwitchButton.module.css";

export const ThemeSwitchButton = ({ value, active, onSwitch, children }) => {
  /* const className = active ? `${S.container} ${S.active}` : S.container; */
  const className = classNames(S.container, active && S.active);

  return (
    <button onClick={() => onSwitch(value)} className={className}>
      {children}
    </button>
  );
};
