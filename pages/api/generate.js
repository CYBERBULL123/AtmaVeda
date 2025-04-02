import db from '../../lib/db';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { part, language } = req.body;
  if (!part || !language) {
    return res.status(400).json({ error: 'Missing part or language parameter' });
  }

  // Check the SQLite cache
  const cachedRow = db.prepare('SELECT content FROM aiCache WHERE part = ? AND language = ?').get(part, language);
  if (cachedRow) {
    return res.status(200).json({ content: cachedRow.content, cached: true });
  }

  // Build advanced prompt with internal CoT and ToT reasoning instructions
  let prompt = `Assume the role of an authoritative Vedic scholar with deep academic expertise. Provide a comprehensive and well-structured explanation of "${part}" that includes the following sections:
  
🔸 **Sanskrit Verse & Transliteration:**  
Present a carefully chosen Sanskrit verse along with its precise transliteration.

🔸 **Translation & In-Depth Interpretation:**  
Offer a full English translation along with a detailed interpretation of the verse.

🔸 **Philosophical Significance:**  
Explain the underlying philosophical concepts and their relevance to modern thought.

🔸 **Practical Applications:**  
Describe how these teachings can be applied in daily life, supported by practical examples.

🔸 **Mythological & Historical Context:**  
Include relevant mythological stories or historical anecdotes to provide context.

For the generation process, use your internal chain-of-thought (CoT) and tree-of-thought (ToT) reasoning to refine your answer. **Do not reveal any internal reasoning or thought processes in the final output.** Provide only a polished, cohesive, and detailed explanation in advanced Markdown formatting with clear section headers and emojis for readability.

`;

  if (language === 'hi') {
    prompt = `एक प्रबुद्ध और विशेषज्ञ वैदिक विद्वान की भूमिका निभाएं, और "${part}" का एक विस्तृत एवं सुव्यवस्थित विश्लेषण प्रदान करें, जिसमें निम्नलिखित अनुभाग शामिल हों:
    
🔸 **संस्कृत श्लोक एवं ट्रांसलिटरेशन:**  
उपयुक्त संस्कृत श्लोक और उसका सटीक ट्रांसलिटरेशन प्रस्तुत करें।

🔸 **अनुवाद एवं गहन व्याख्या:**  
श्लोक का पूर्ण अनुवाद और उसकी गहन व्याख्या दें।

🔸 **दार्शनिक महत्व:**  
आंतरिक दार्शनिक सिद्धांतों और उनके आधुनिक जीवन में प्रभाव की व्याख्या करें।

🔸 **व्यावहारिक उपयोग:**  
इन शिक्षाओं को रोजमर्रा के जीवन में कैसे अपनाया जा सकता है, उसके व्यावहारिक उदाहरणों सहित चर्चा करें।

🔸 **पौराणिक एवं ऐतिहासिक संदर्भ:**  
संबंधित पौराणिक कथाएँ या ऐतिहासिक प्रसंग शामिल करें।

अपने आंतरिक विचार (चेन-ऑफ-थॉट और ट्री-ऑफ-थॉट) का उपयोग करके उत्तर को परिष्कृत करें, परन्तु **इन आंतरिक प्रक्रियाओं को अंतिम आउटपुट में न दिखाएं।** केवल एक सुसंगत, विस्तृत और आकर्षक व्याख्या प्रदान करें।

`;
  }

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // Save the generated content to the SQLite database
    const stmt = db.prepare('INSERT OR REPLACE INTO aiCache (part, language, content) VALUES (?, ?, ?)');
    stmt.run(part, language, responseText);

    return res.status(200).json({ content: responseText, cached: false });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to connect with divine wisdom. Please try again later." });
  }
}
