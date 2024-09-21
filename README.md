# Real-Time Text Analysis and String Replacement

This project is a **React-based web application** that allows users to type text into a textarea and get real-time statistics, including the count of unique words, the number of characters (excluding spaces and punctuation), and the ability to dynamically replace text strings. The app also includes additional features like a dynamic, color-changing **Three.js** background, real-time word highlighting after string replacement, and a responsive UI for a seamless experience across devices.

## Features:

1. **Real-Time Text Analysis**:
   - **Unique Word Count**: Displays the number of unique words entered, case-insensitively.
   - **Character Count**: Shows the number of characters in the text, excluding spaces and punctuation (only letters and numbers are counted).

2. **String Replacement**:
   - The app provides two input fields for searching and replacing strings in the textarea content.
   - Clicking "Replace All" replaces all occurrences of the first string with the second string in the text.
   - Replacements are case-sensitive.

3. **Bonus Features**:
   - **Word Highlighting**: After the replacement, the replaced words are highlighted in yellow, allowing the user to see what has been changed.
   - **Three.js Animated Background**: A rotating, color-changing 3D sphere rendered in the background using **Three.js** to create a visually engaging experience. This feature adds a modern, dynamic aesthetic that makes the app more interactive and lively.
   - **Responsive Design**: The app is fully responsive, ensuring usability on both desktop and mobile devices.

## Three.js Feature:

The app includes a unique background powered by **Three.js**, which renders a rotating, color-changing 3D sphere in the background. This element adds a layer of interactivity to the app, making it visually appealing without interfering with the core functionality. The **Three.js** scene adjusts to the window size, ensuring that the animation remains fluid and adaptive across different screen resolutions. You can easily customize the colors and the animation speed within the `App.js` file.

### How it Works:
- **Three.js** is a lightweight JavaScript 3D library that renders the sphere in real-time.
- The sphere’s color changes dynamically, creating a mesmerizing background animation while users interact with the text input.
- The animation does not affect performance, as it's rendered efficiently using WebGL.


- The **live demo link** has been updated to `https://realtimetextanalysis.vercel.app/`.
  


## Getting Started

To run the project locally, follow the steps below.

### Prerequisites:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/real-time-text-analysis.git
