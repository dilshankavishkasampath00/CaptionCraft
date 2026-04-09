/**
 * Utility to call DeepSeek API with retry logic for busy server errors
 */
export async function callDeepSeek(prompt, apiKey, options = {}) {
  const maxRetries = 3;
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      const res = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: options.model || "deepseek-chat",
          messages: [{ role: "user", content: prompt }],
          temperature: options.temperature || 0.7,
          response_format: options.response_format || { type: "json_object" }
        }),
      });

      const data = await res.json();

      if (res.status === 429 || res.status === 503) {
        // High demand / Rate limit
        throw new Error("SERVER_BUSY");
      }

      if (!res.ok) {
        throw new Error(data.error?.message || "Failed to generate");
      }

      return data.choices[0].message.content;
    } catch (err) {
      attempt++;
      if (err.message === "SERVER_BUSY" && attempt < maxRetries) {
        // Wait 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }
      
      if (err.message === "SERVER_BUSY") {
        throw new Error("DeepSeek servers are currently busy due to high demand. Please try again in a few moments.");
      }
      
      throw err;
    }
  }
}
