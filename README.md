# DruidUI

DruidUI is a collection of elegantly crafted React components, drawing inspiration from [shadcn/ui](https://github.com/shadcn-ui/ui) and [PostHog's LemonUI](https://github.com/PostHog/posthog). Every component is designed to be easily copy-pasted into your project for maximum flexibility and customization.

**Pre-requisites:**

Here are the NPM dependencies that you will need to use DruidUI components:

- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [clsx](https://github.com/lukeed/clsx)
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- [Lucide React Icons](https://github.com/lucide-icons/lucide) (Optional)

## Philosophies

DruidUI is built with the following philosophies in mind:

- **Minimal dependencies:** DruidUI aims to minimize dependencies to keep your project lightweight and fast.
- **Fully customizable:** Having a copy-paste components instead of an NPM library, you get maximum control. Our opinions on components are just that, opinions.
- **Free and open-source:** DruidUI is free to use and open-source, so you can use it in your personal and commercial projects (we won't sue you, promise).

## Usage

1. Install the necessary dependencies:

   ```bash
   yarn add tailwindcss clsx tailwind-merge lucide-react
   ```

   - You can omit `lucide-react` and replace all its usage with your preferred icon library/set.

2. Copy `index.css` into your global tailwind CSS file.
3. Copy `tailwind.config.ts` into your project (or incorporate it into your existing `tailwind.config.js` file)
4. Copy `util.ts` into your project.
5. Copy the component files into your project.
   - Option A: Copy the entire subdirectory of the component (with storybook).
   - Option B: Only copy `<component>.tsx` and `types.ts` files (no storybook).
     - Merge the `types.ts` into the `<component>.tsx` file for simplicity. Remember to un-export the constant and types to keep React's fast-refresh.
6. That's it! You can now use the components in your project.

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
