
# AI Text Summarizer

A web application that leverages Hugging Face's BART model to generate concise summaries of long texts, built with Node.js, Express, and vanilla JavaScript.




## Features

### Core Functionality (From Postman Project based learning program Instructions)

- Text summarization using Hugging Face's `facebook/bart-large-cnn` model
- Minimum 100 words requirement for input text
- Basic frontend with:
  - Input text area
  - Summarize button
  - Output display
- Backend API built with Express


### New Features and Improvements Added

1. **Enhanced UI/UX**
   - Modern dark theme with improved typography
   - Word count display
   - Clear and Copy buttons
   - Loading spinner during API requests
   - Responsive design for mobile devices

2. **New Functionality**
   - Text clearing capability
   - One-click copy functionality for summaries
   - Input validation (100-100,000 characters)
   - Error handling and user feedback

3. **Technical Improvements**
   - Environment variable configuration for API tokens


## Tech Stack
**Frontend:**  
- HTML5, CSS3 (Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- Inter font family

**Backend:**  
- Node.js (v18+)
- Express.js
- Axios for API calls

**APIs & Services:**  
- Hugging Face Inference API (`facebook/bart-large-cnn`)
- Postman (initial API testing)
- 

## Installations

1. Clone the repository:
   ```bash
   git clone https://github.com/GimhaniSandareka/AI-Text-Summarizer.git
   cd AI-Text-Summarizer

2. Install dependencies:
```
npm install
```
3. Create a ```.env``` file with your Hugging Face token:
```
ACCESS_TOKEN=your_huggingface_api_token
```

4. Start the development server:
```
node index.js
```
5. Open in your browser
```
http://localhost:3000
```
## Project Structure

```
AI-Text-Summarizer/
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
├── index.js                # Express server
├── summarize.js            # Hugging Face API integration
└── public/                 # Frontend files
    ├── index.html          # Main HTML file
    ├── script.js           # Client-side JavaScript
    └── stylesheet.css      # Custom styles

```


## UI Improvements
**Before (Original):**

- Basic unstyled interface

- Single textarea

- No loading indicators

**After (Enhanced):**

- Professional dark theme

- Animated buttons

- Word counter

- Section transitions

- Mobile-responsive layout

  
## Troubleshooting
If you encounter:

**401 Unauthorized errors**: Verify your ```.env``` file has the correct Hugging Face token

**Blank summary output**: Check browser console for errors (F12)

**CORS issues**: Ensure you're accessing via ```http://localhost:3000```


## Developed By

[Gimhani Sandareka] 

*Originally inspired by Postman's Project Based Learning*

