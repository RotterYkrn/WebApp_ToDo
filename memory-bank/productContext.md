# Product Context: 1Day ToDo Application

## Purpose

The 1Day ToDo Application is designed to address the needs of individuals who find traditional long-term task planning overwhelming or ineffective. It provides a flexible, day-by-day approach to managing tasks and habits, focusing on what needs to be done today or tomorrow.

## Problem Solved

Many people struggle with maintaining detailed, long-term ToDo lists. This application simplifies the process by allowing users to curate their daily tasks from a larger list, promoting a sense of accomplishment and reducing the pressure associated with planning far in advance.

## How it Works

Users maintain a comprehensive ToDo list and a separate Habit list. Each day (or the day before), they select tasks and habits from these lists to form their "Daily Plan". Additional, one-off tasks can also be added directly to the Daily Plan. The Daily Plan can be reordered for better time management.

## User Experience Goals

- **Simplicity:** The core workflow of creating a daily plan should be intuitive and quick.
- **Flexibility:** Users should be able to easily add, remove, and reorder tasks in their daily plan.
- **Focus:** The primary view should be the current day's plan, minimizing distractions from future tasks.
- **Habit Integration:** Seamlessly incorporate recurring habits into the daily planning process.
- **Customization:** Allow basic settings adjustments, such as the date change time.

## Page Structure

- **Daily Plan (Home):**
    - If no plan exists: Display a prompt to create a plan, potentially showing a confirmation screen for the previous day's tasks. Allow selection from ToDo and Habit lists, and manual entry.
    - If a plan exists: Display the list of tasks for the day. Provide options for reordering (title, time, priority).
- **ToDo List:** Manage non-repeating tasks with detailed properties (title, deadline, description, priority, category, subtasks, completion).
- **Habit List:** Manage repeating tasks with properties (title, description, category, auto-include option).
- **Settings:** Configure general application settings and manage user accounts (email/password, external logins).
