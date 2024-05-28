// hooks/useLanguageDetector.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import csharp from 'highlight.js/lib/languages/csharp';
import go from 'highlight.js/lib/languages/go';
import html from 'highlight.js/lib/languages/html';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('go', go);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);

const languages = ['javascript', 'python', 'java', 'cpp', 'csharp', 'go', 'html', 'css', 'json']; 

const useLanguageDetector = () => {
  const detectLanguage = (code: string) => {
    let detectedLanguage = 'unknown';
    let highestRelevance = 0;

    languages.forEach((lang) => {
      const result = hljs.highlight(code, { language: lang, ignoreIllegals: true });
      if (result.relevance > highestRelevance) {
        highestRelevance = result.relevance;
        detectedLanguage = lang;
      }
    });

    return detectedLanguage;
  };

  return { detectLanguage };
};

export default useLanguageDetector;
