# 3D Portfolio Website

A modern, responsive portfolio website built with Next.js, Three.js, and EmailJS. Features a stunning 3D animated background, smooth transitions, and interactive elements.

🌐 [Live Demo](https://3d-portfolio-4sepeun5u-ashirvaddubeys-projects.vercel.app)

## ✨ Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **3D Background**: Interactive animated background using Three.js
- **Responsive Design**: Fully responsive on all devices
- **Dark/Light Mode**: Theme switching capability
- **Contact Form**: Integrated EmailJS for seamless message delivery
- **Sections**:
  - About
  - Skills
  - Projects
  - Education
  - Experience
  - Contact

## 🛠️ Built With

- [Next.js 15.2.4](https://nextjs.org/) - React Framework
- [React 19.1.0](https://reactjs.org/) - JavaScript Library
- [Three.js](https://threejs.org/) - 3D Graphics Library
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Vercel](https://vercel.com/) - Deployment Platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v10 or higher)

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/Ashirvaddubey/MyPortfolio.git
cd MyPortfolio
\`\`\`

2. Install dependencies
\`\`\`bash
pnpm install
\`\`\`

3. Create a \`.env.local\` file in the root directory and add your EmailJS credentials:
\`\`\`env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
\`\`\`

4. Start the development server
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
3d-portfolio/
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── ui/             # UI components
│   ├── sections/       # Page sections
│   └── ...
├── public/             # Static assets
├── styles/            # Global styles
├── lib/               # Utility functions
└── ...
\`\`\`

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service
3. Create an Email Template with variables:
   - \`{{from_name}}\`
   - \`{{from_email}}\`
   - \`{{message}}\`
   - \`{{to_email}}\`

## 🌐 Deployment

The project is deployed on Vercel. Any push to the main branch will trigger automatic deployment.

To deploy your own version:

1. Fork this repository
2. Sign up on [Vercel](https://vercel.com)
3. Import your forked repository
4. Add your environment variables in Vercel's project settings
5. Deploy!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ashirvaddubey/MyPortfolio/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

Ashirvad Dubey
- Email: dubeyashirvad50@gmail.com
- LinkedIn: [Ashirvad Dubey](https://linkedin.com/in/ashirvad-dubey-a43bb7253/)
- GitHub: [@Ashirvaddubey](https://github.com/Ashirvaddubey)

## 🙏 Acknowledgments

- Three.js community for 3D graphics resources
- Vercel for hosting
- EmailJS for contact form functionality 