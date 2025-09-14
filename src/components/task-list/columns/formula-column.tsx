import React from "react";

import { ColumnProps } from "../../../types/public-types";

export const FormulaColumn: React.FC<ColumnProps> = ({
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
        fontFamily: "monospace",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        backgroundColor: task.formula ? "#f5f5f5" : "transparent",
        border: task.formula ? "1px solid #ddd" : "none",
        borderRadius: "2px",
      }}
      title={task.formula || ""}
    >
      {task.formula ? `=${task.formula}` : ""}
    </div>
  );
};