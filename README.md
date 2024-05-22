
# Workflow builder

## Requirements
- Node version >= v18.17.0
- Yarn version >= 1.22.22

## Run Locally

Here is the steps to run project locally

Clone the project
```bash
  git clone https://github.com/parthnariya/work-flow-demo.git
```

Go to the project directory

```bash
  cd work-flow-demo
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run dev
```


## Tech Stack

**Development:** Reactjs with Typescript, ReactFlow

**State Management:** Redux, Redux-toolkit

**Styling:** Tailwind


## Features

**Data Import and Filtering:**

- **CSV Upload:** Accepts comma-separated values (CSV) files for data processing.
- **Flexible Filtering:** Provides multiple filtering options to refine the data
    - "text is exactly": Filters rows where a specific text appears exactly in the chosen column.
    - "text is not exactly": Excludes rows containing the specified text in the chosen column.
    - "text includes": Retains rows with text containing a particular phrase or word in the selected column.
    - "text does not includes": Removes rows where text in the designated column includes a certain phrase or word.

- **Sorting Capability:** Allows you to organize the filtered data in a specific order based on a chosen column.

- **CSV Export:** Enables you to save the filtered and sorted data back into a CSV file for further use or sharing.
- **Example Data:** provided some example data to play around the project.
