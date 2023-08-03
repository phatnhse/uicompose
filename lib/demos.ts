export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Quick Start',
    items: [
      {
        name: 'Introduction',
        slug: 'layouts',
        description:
          'An overview of the framework and how to create UI shared across routes.',
      },
      {
        name: 'Installation',
        slug: 'layouts',
        description:
          'Instructions for installing and setting up the framework for use.',
      },
      {
        name: 'Theming',
        slug: 'layouts',
        description:
          'Customize the appearance and styles of the UI elements in the framework.',
      },
      {
        name: 'Design',
        slug: 'layouts',
        description:
          'Guidelines and best practices for designing user interfaces with the framework.',
      },
      {
        name: 'Multiplatform',
        slug: 'route-groups',
        description:
          'Efficiently organize routes without affecting the URL paths in a multiplatform environment.',
      },
    ],
  },
  // {
  //     name: 'File Conventions',
  //     items: [
  //         {
  //             name: 'Loading',
  //             slug: 'loading',
  //             description:
  //                 'Create meaningful Loading UI for specific parts of an app',
  //         },
  //         {
  //             name: 'Error',
  //             slug: 'error-handling',
  //             description: 'Create Error UI for specific parts of an app',
  //         },
  //         {
  //             name: 'Not Found',
  //             slug: 'not-found',
  //             description: 'Create Not Found UI for specific parts of an app',
  //         },
  //     ],
  // },
  // {
  //     name: 'Data Fetching',
  //     items: [
  //         {
  //             name: 'Streaming with Suspense',
  //             slug: 'streaming',
  //             description:
  //                 'Streaming data fetching from the server with React Suspense',
  //         },
  //         {
  //             name: 'Static Data',
  //             slug: 'ssg',
  //             description: 'Generate static pages',
  //         },
  //         {
  //             name: 'Dynamic Data',
  //             slug: 'ssr',
  //             description: 'Server-render pages',
  //         },
  //         {
  //             name: 'Incremental Static Regeneration',
  //             slug: 'isr',
  //             description: 'Get the best of both worlds between static & dynamic',
  //         },
  //     ],
  // },
  {
    name: 'Components',
    items: [
      {
        name: 'Accordion',
        slug: 'context',
        description:
          'A component that allows collapsible panels to display content in a stacked manner.',
      },
      {
        name: 'Alert',
        slug: 'context',
        description:
          'A component to display important messages or alerts to users.',
      },
      {
        name: 'Alert Dialog',
        slug: 'context',
        description:
          'A dialog box that presents an important message to the user with an option to take action.',
      },
      {
        name: 'Aspect Ratio',
        slug: 'context',
        description:
          'A component that enforces a specific aspect ratio for its child elements.',
      },
      {
        name: 'Avatar',
        slug: 'context',
        description:
          'A visual representation of a user or entity, typically an image or icon.',
      },
      {
        name: 'Badge',
        slug: 'context',
        description:
          'A small notification or indicator typically used to display counts or status.',
      },
      {
        name: 'Button',
        slug: 'context',
        description:
          'A clickable element that triggers an action when interacted with.',
      },
      {
        name: 'Calendar',
        slug: 'context',
        description:
          'A component to display and interact with dates and events on a calendar.',
      },
      {
        name: 'Card',
        slug: 'context',
        description:
          'A container component used to group related content or information together.',
      },
      {
        name: 'Checkbox',
        slug: 'context',
        description:
          'A UI element that allows users to select one or more options from a list.',
      },
      {
        name: 'Collapsible',
        slug: 'context',
        description:
          'A component that can be expanded or collapsed to show or hide content.',
      },
      {
        name: 'Combobox',
        slug: 'context',
        description:
          'An input field combined with a dropdown list of options for user selection.',
      },
      {
        name: 'Command',
        slug: 'context',
        description: 'A user-triggered action or command in a user interface.',
      },
      {
        name: 'Context Menu',
        slug: 'context',
        description:
          'A menu that appears when the user right-clicks or performs a context-specific action.',
      },
      {
        name: 'Data Table',
        slug: 'context',
        description: 'A tabular representation of data with rows and columns.',
      },
      {
        name: 'Date Picker',
        slug: 'context',
        description:
          'A component that allows users to select dates from a calendar popup.',
      },
      {
        name: 'Dialog',
        slug: 'context',
        description:
          'A popup or modal window that requires user attention or input.',
      },
      {
        name: 'Dropdown Menu',
        slug: 'context',
        description:
          'A list of options that appears when the user clicks on a button or trigger.',
      },
      {
        name: 'Form',
        slug: 'context',
        description:
          'A collection of input fields used to gather information from users.',
      },
      {
        name: 'Hover Card',
        slug: 'context',
        description:
          'A card-like popup that appears when the user hovers over a specific element.',
      },
      {
        name: 'Input',
        slug: 'context',
        description: 'A component that allows users to input text or data.',
      },
      {
        name: 'Label',
        slug: 'context',
        description:
          'A component used to provide a descriptive label for another element.',
      },
      {
        name: 'Menubar',
        slug: 'context',
        description:
          'A horizontal menu bar that typically contains navigation options.',
      },
      {
        name: 'Navigation Menu',
        slug: 'context',
        description:
          'A menu that provides links to navigate within a website or application.',
      },
      {
        name: 'Popover',
        slug: 'context',
        description:
          'A small overlay that appears on top of content when triggered by user action.',
      },
      {
        name: 'Progress',
        slug: 'context',
        description:
          'A visual indicator of the completion status of a task or process.',
      },
      {
        name: 'Radio Group',
        slug: 'context',
        description:
          'A UI element that allows users to select a single option from a list of options.',
      },
      {
        name: 'Scroll Area',
        slug: 'context',
        description:
          'A container that allows content to scroll within a fixed area with a scrollbar.',
      },
      {
        name: 'Select',
        slug: 'context',
        description:
          'A dropdown menu that allows users to select an option from a list.',
      },
      {
        name: 'Separator',
        slug: 'context',
        description: 'A visual divider used to separate content or elements.',
      },
      {
        name: 'Sheet',
        slug: 'context',
        description:
          'A container that appears as a sheet or panel with additional content.',
      },
      {
        name: 'Skeleton',
        slug: 'context',
        description:
          'A component used to show a temporary loading state or placeholder for content.',
      },
      {
        name: 'Slider',
        slug: 'context',
        description:
          'A UI element that allows users to select a value from a continuous range.',
      },
      {
        name: 'Switch',
        slug: 'context',
        description:
          'A component used to toggle between two states, typically on/off.',
      },
      {
        name: 'Table',
        slug: 'context',
        description: 'A tabular representation of data with rows and columns.',
      },
      {
        name: 'Tabs',
        slug: 'context',
        description:
          'A set of tabs used for navigation, organizing content, or switching views.',
      },
      {
        name: 'Textarea',
        slug: 'context',
        description:
          'A component that allows users to input multiline text or data.',
      },
      {
        name: 'Toast',
        slug: 'context',
        description:
          'A brief notification that appears on the screen to provide feedback to users.',
      },
      {
        name: 'Toggle',
        slug: 'context',
        description:
          'A component used to switch between two states, such as on/off or open/close.',
      },
      {
        name: 'Tooltip',
        slug: 'context',
        description:
          'A small popup that appears when the user hovers over an element to display additional information.',
      },
    ],
  },
  // {
  //     name: 'Misc',
  //     items: [
  //         {
  //             name: 'Client Component Hooks',
  //             slug: 'hooks',
  //             description: 'Preview the routing hooks available in Client Components',
  //         },
  //         {
  //             name: 'CSS and CSS-in-JS',
  //             slug: 'styling',
  //             description: 'Preview the supported styling solutions',
  //         },
  //         {
  //             name: 'Code Snippets',
  //             slug: 'snippets',
  //             description: 'A collection of useful App Router code snippets',
  //         },
  //     ],
  // },
];
