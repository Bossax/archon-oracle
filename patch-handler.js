const fs = require('fs');
const path = 'C:/Users/sitth/OracleWorkspace/engine/src/forum/handler.ts';

if (!fs.existsSync(path)) {
    console.error('Target file not found:', path);
    process.exit(1);
}

const originalContent = fs.readFileSync(path, 'utf8');

const newCode = `  // --- AUTO-RESPONSE ENGINE (Search-Based) ---
  let oracleResponse: { content: string; principlesFound: number; patternsFound: number } | undefined;

  if (role === "human" || role === "claude") {
    updateThreadStatus(thread.id, "pending");

    // Perform a search to find relevant context for the response
    try {
      const { search } = await import("../tools/search.ts");
      const searchResult = await search({ query: message, limit: 3 });
      const parsedResults = JSON.parse(searchResult.content[0].text);

      if (parsedResults.results && parsedResults.results.length > 0) {
        const topResult = parsedResults.results[0];
        const responseContent = "[Auto-Response Context Found]\\n\\nBased on my knowledge base: \\\"" + topResult.content.substring(0, 300).replace(/\\n/g, ' ') + "...\\\"\\n\\n(Source: " + topResult.source_file + ")";

        // Add the Oracle response
        const addedResponse = addMessage(thread.id, "claude", responseContent, {
          author: "oracle@" + (project || "global"),
          principlesFound: topResult.concepts?.length || 0,
          patternsFound: 1
        });

        oracleResponse = {
          content: addedResponse.content,
          principlesFound: addedResponse.principlesFound || 0,
          patternsFound: addedResponse.patternsFound || 0
        };

        updateThreadStatus(thread.id, "answered");
      }
    } catch (err) {
      console.error("Auto-response failed:", err);
    }
  }

  // Get updated thread status
  const updatedThread = getThread(thread.id)!;

  return {
    threadId: thread.id,
    messageId: userMessage.id,
    status: updatedThread.status as ThreadStatus,
    issueUrl: updatedThread.issueUrl,
    oracleResponse
  };`;

// Use a regex that targets the specific "Mark as pending" block down to the return statement
const updatedContent = originalContent.replace(
    /\/\/ Mark as pending \(no auto-response engine currently\)([\s\S]*?)return \{([\s\S]*?)\};/,
    newCode
);

if (updatedContent === originalContent) {
    console.error('Pattern not found. Replacement failed.');
    process.exit(1);
}

fs.writeFileSync(path, updatedContent, 'utf8');
console.log('Successfully patched handler.ts');
