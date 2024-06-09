# DruidUI

DruidUI is a collection of elegantly crafted React components, drawing inspiration from [shadcn/ui](https://github.com/shadcn-ui/ui) and [PostHog's LemonUI](https://github.com/PostHog/posthog). Every component is designed to be easily copy-pasted into your project for maximum flexibility and customization.

## Table of Contents

- [Pre-requisites](#pre-requisites)
- [Philosophies](#philosophies)
- [Usage](#usage)
- [Contributing](#contributing)

## Pre-requisites

To use DruidUI components, ensure you have the following NPM dependencies installed:

- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [clsx](https://github.com/lukeed/clsx)
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- [Lucide React Icons](https://github.com/lucide-icons/lucide) (Optional)

## Philosophies

DruidUI is built with the following principles in mind:

- **Minimal dependencies:** Keep your project lightweight and fast.
- **Fully customizable:** Copy-paste components offer maximum control and flexibility.
- **Free and open-source:** Use DruidUI in personal and commercial projects without restrictions.

## Usage

Follow these steps to integrate DruidUI components into your project:

1. **Install the necessary dependencies:**

    ```bash
    yarn add tailwindcss clsx tailwind-merge lucide-react
    ```

    > You can omit `lucide-react` and replace its usage with your preferred icon library/set.

2. **Copy the necessary files:**

   - Copy `index.css` into your global Tailwind CSS file.
   - Copy `tailwind.config.ts` into your project, or integrate it into your existing `tailwind.config.js` file.
   - Copy `util.ts` into your project.
   - Copy the component files into your project:
     - **Option A:** Copy the entire subdirectory of the component (with Storybook).
     - **Option B:** Only copy `<component>.tsx` and `types.ts` files (no Storybook).
       - Merge the `types.ts` into the `<component>.tsx` file for simplicity. Remember to un-export the constant and types to keep React's fast-refresh.

3. **Start using the components in your project.**

## Contributing

Contributions to DruidUI are welcome and encouraged! To get started:

1. **Clone the repository:** Fork and clone the DruidUI repository to your local machine.

   ```bash
   git clone git@github.com:ShaneMaglangit/druid-ui.git
   ```

2. **Install dependencies:** Navigate into the cloned repository directory and install the required dependencies using Yarn.

   ```bash
   cd druid-ui
   yarn
   ```

3. **Run Storybook:** Launch Storybook to preview and interact with the components.

   ```bash
   yarn storybook
   ```

Feel free to submit bug reports, feature requests, or pull requests to help improve DruidUI. Let's build beautiful interfaces together!
