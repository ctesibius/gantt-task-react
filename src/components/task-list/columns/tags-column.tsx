import React from "react";

import { ColumnProps } from "../../../types/public-types";

export const TagsColumn: React.FC<ColumnProps> = ({
  data: {
    colors,
    task,
  },
}) => {
  if (task.type === "empty") {
    return null;
  }

  const tags = task.tags || [];

  return (
    <div 
      style={{
        color: colors.barLabelColor,
        padding: "2px 4px",
        fontSize: "12px",
        display: "flex",
        flexWrap: "wrap",
        gap: "2px",
        overflow: "hidden",
        maxHeight: "20px",
      }}
    >
      {tags.map((tag, index) => (
        <span
          key={index}
          style={{
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
            padding: "1px 4px",
            borderRadius: "3px",
            fontSize: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "60px",
          }}
          title={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};