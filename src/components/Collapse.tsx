import React, { useState } from "react";

interface ICollapseProps {
  isExpanded: boolean;
  collapsedLabel: string;
  expandedLabel: string;
  children: React.ReactNode;
}
const Collapse = ({
  isExpanded,
  collapsedLabel = "развернуть",
  expandedLabel = "свернуть",
  children,
}: ICollapseProps) => {
  const [show, setShow] = useState<boolean>(isExpanded);

  const onExpandedChange = (show: boolean) => setShow(!show);

  return (
    <div onClick={() => onExpandedChange(show)} className="display-link">
      <a
        className="link collapse__link link_pseudo link_size_m link_theme_alfa-on-white"
        href="#"
      >
        <span className="link__text">
          {show ? expandedLabel : collapsedLabel}
        </span>
        <span className="link__icon">
          {show ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </span>
      </a>
      {show && children}
    </div>
  );
};

export default Collapse;
