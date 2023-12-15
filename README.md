# Riley's Portfolio

Welcome to my personal portfolio site! This Next.js project is a React application with TypeScript and Tailwind CSS, utilizing Shadcn-UI components, Google Font "Dongle," and Radix-UI icons.

## Getting Started

To run the development environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to explore the portfolio.

## Deployment

Deployment of the project is handled through Docker Hub. Follow these steps to deploy:

1. Ensure you have Docker installed on your machine.

2. Create a `.env` file in the project root and set the appropriate environment variables, if needed.

3. Run the deployment script with the desired version as an argument:

   ```bash
   ./docker_push.ps1 v#.#.#
   ```

This script builds the production-ready version, creates a Docker container image, and pushes it to Docker Hub at `rileysaur/portfolio`.

## Technologies Used

- Next.js
- React with TypeScript
- Tailwind CSS
- Shadcn-UI components
- Google Font "Dongle"
- Radix-UI icons

## Credits

- Shadcn-UI: [Link to Shadcn-UI](https://ui.shadcn.com)
- Google Fonts: [Link to Dongle](https://fonts.google.com/specimen/Dongle)
- Radix-UI Icons: [Link to Radix-UI Icons](https://icons.radix-ui.com)

## License

This project is licensed under the [MIT License](LICENSE).
