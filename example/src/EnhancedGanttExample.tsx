import React, { useState } from "react";
import { Gantt, Task, ViewMode } from "../../src";

const EnhancedGanttExample: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "Task 1",
      name: "Project Planning",
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 15),
      progress: 45,
      type: "project",
      label: "High Priority",
      tags: ["planning", "management"],
      formula: "SUM(B2:B5)"
    },
    {
      id: "Task 2",
      name: "Research Phase",
      start: new Date(2024, 0, 5),
      end: new Date(2024, 0, 20),
      progress: 30,
      type: "task",
      parent: "Task 1",
      label: "Medium Priority",
      tags: ["research", "analysis"],
      formula: "COUNT(A1:A10)"
    },
    {
      id: "Task 3",
      name: "Design Mockups",
      start: new Date(2024, 0, 10),
      end: new Date(2024, 0, 25),
      progress: 60,
      type: "task",
      parent: "Task 1",
      label: "High Priority",
      tags: ["design", "ui", "ux"],
      formula: "AVERAGE(C1:C5)"
    },
    {
      id: "Task 4",
      name: "Development Sprint 1",
      start: new Date(2024, 0, 20),
      end: new Date(2024, 1, 5),
      progress: 25,
      type: "task",
      parent: "Task 1",
      label: "Critical",
      tags: ["development", "sprint", "frontend"],
      formula: "MAX(D1:D10)"
    },
    {
      id: "Task 5",
      name: "Testing Phase",
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 15),
      progress: 10,
      type: "task",
      parent: "Task 1",
      label: "Medium Priority",
      tags: ["testing", "qa"],
      formula: "MIN(E1:E5)"
    },
    {
      id: "Task 6",
      name: "Project Milestone",
      start: new Date(2024, 1, 15),
      end: new Date(2024, 1, 15),
      progress: 0,
      type: "milestone",
      label: "Milestone",
      tags: ["milestone", "delivery"],
      formula: ""
    }
  ]);

  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Month);

  const handleTaskChange = (task: Task) => {
    setTasks(prev => prev.map(t => t.id === task.id ? task : t));
  };

  const handleTaskDelete = (task: Task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const handleProgressChange = (task: Task) => {
    setTasks(prev => prev.map(t => t.id === task.id ? task : t));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enhanced Gantt Chart with Excel-like Columns</h2>
      <p>This example demonstrates the new columns: Label, Tags, and Formula, with compact Excel-like styling.</p>
      
      <div style={{ marginBottom: "20px" }}>
        <label>
          View Mode: 
          <select 
            value={viewMode} 
            onChange={(e) => setViewMode(e.target.value as ViewMode)}
            style={{ marginLeft: "10px" }}
          >
            <option value={ViewMode.Day}>Day</option>
            <option value={ViewMode.Week}>Week</option>
            <option value={ViewMode.Month}>Month</option>
            <option value={ViewMode.Year}>Year</option>
          </select>
        </label>
      </div>

      <div style={{ border: "1px solid #ddd", borderRadius: "4px", overflow: "hidden" }}>
        <Gantt
          tasks={tasks}
          viewMode={viewMode}
          onDateChange={handleTaskChange}
          onTaskDelete={handleTaskDelete}
          onProgressChange={handleProgressChange}
          canResizeColumns={true}
          canMoveTasks={true}
        />
      </div>

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <h3>Features Demonstrated:</h3>
        <ul>
          <li><strong>Label Column:</strong> Shows priority levels and custom labels</li>
          <li><strong>Tags Column:</strong> Displays multiple tags as colored badges</li>
          <li><strong>Formula Column:</strong> Shows Excel-like formulas with = prefix</li>
          <li><strong>Compact Styling:</strong> Excel-like appearance with smaller rows and borders</li>
          <li><strong>Resizable Columns:</strong> Drag column borders to resize</li>
        </ul>
      </div>
    </div>
  );
};

export default EnhancedGanttExample;