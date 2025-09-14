import type { Meta, StoryObj } from '@storybook/react';
import { EnhancedGanttExample } from '../example/src/EnhancedGanttExample';

const meta: Meta<typeof EnhancedGanttExample> = {
  title: 'Enhanced Gantt/Excel-like Columns',
  component: EnhancedGanttExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enhanced Gantt Chart with Excel-like columns including Label, Tags, and Formula columns, plus compact styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomStyling: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the enhanced Gantt chart with new columns and Excel-like compact styling.',
      },
    },
  },
};