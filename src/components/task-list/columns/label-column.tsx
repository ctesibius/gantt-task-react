import React from "react";

import { ColumnProps } from "../../../types/public-types";

export const LabelColumn: React.FC<ColumnProps> = ({
  data: {
    colors,
    task,
  },
}) => {
  if (task.type === "empty") {
    return null;
  }

  return (
    <div 
      style={{
        color: colors.barLabelColor,
        padding: "2px 4px",
        fontSize: "12px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
      title={task.label || ""}
    >
      {task.label || ""}
    </div>
  );
};