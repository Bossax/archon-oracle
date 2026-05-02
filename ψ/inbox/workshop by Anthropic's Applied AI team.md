# Actionable Best Practices for AI Coding Agents (Claude Code)

### 1. Master the `claude.md` File (The Agent's Memory)
Because the agent lacks long-term memory between sessions, the `claude.md` file is the primary way to share state. When you start the agent, this file is automatically *"plopped into context."*

*   **The Mental Model:** The file essentially tells the model: *"Hey Claude, by the way, these are important instructions the developer left for you. Be sure to pay close attention to this."*
*   **What to Write Inside:** Make it highly specific to your environment.
    *   **Testing Commands:** *"Hey, by the way, maybe this is how you run the unit tests."* (e.g., `npm run test`).
    *   **Architecture & Geography:** *"Here's an overview of kind of how this project is laid out, where the tests live, what different modules are, things like that."*
    *   **Rules & Style:** *"Here's our style guide."* (e.g., rules about inline comments, component structures).
    *   **Custom Tools:** Document any internal proprietary CLI tools you use so the agent knows they exist.
*   **Advanced Setup:**
    *   **Global Rules:** Put a `claude.md` file in your home (`~`) directory for rules you *"just want Claude to always know about regardless of what you're working on."*
    *   **Team Syncing:** Commit the file to your project repository *"so all your teammates share it."*
    *   **File Referencing:** If your rules are long, you can use the `@` symbol inside your `claude.md` to reference and pull in other markdown files.


The consensus among practitioners and Anthropic’s engineering team suggests a "Goldilocks" zone for `claude.md`. If the file is too long, the agent suffers from "instruction drift"—it begins to treat all rules as equally important or ignores instructions buried in the middle.


*   **Target Length:** **Under 60 lines** is the sweet spot for high-performance instruction following.
*   **The Hard Ceiling:** **200 lines.** Beyond this, Claude reliably begins to ignore or deprioritize instructions.
*   **The "Instruction Budget":** Frontier models typically follow about **150–200 instructions** reliably. Since the system prompt uses about 50, your `claude.md` should aim for no more than **100 explicit instructions**.
*   **The Pruning Test:** For every line, ask: *"Would removing this cause Claude to make a mistake?"* If the answer is no, delete the line.
*   **The "Repeat Twice" Trigger:** If you find yourself manually typing the same instruction in chat more than twice, **promote it** to your `claude.md`.

### 2. Strategic `claude.md` Content
Don't use vague prose; use **imperative, verifiable language**.

*   **Bad (Vague):** "Please try to write clean code and use tests."
*   **Good (Actionable):** 
    *   "Use 2-space indentation and no semicolons."
    *   "Run `npm test` after every file edit."
    *   "Always use TypeScript strict mode; NEVER use `any`."
*   **Structure by "Geography":**
    *   **Root `claude.md`:** High-level tech stack and essential "Always/Never" rules.
    *   **Sub-directory `claude.md`:** Specific rules for that module (e.g., `/api/claude.md` for endpoint conventions).
    *   **Home `~/.claude.md`:** Personal preferences (e.g., "I prefer tabs over spaces").

### 3. Use Exact "Thought Partner" Prompts
Force the agent to investigate and plan before it touches your code.

*   **For Planning:** *"Search the codebase and report back with a plan to fix [Bug X]. **Don't start writing any files yet.**"*
*   **For Context:** *"Look at the Git history of this file and tell me the 'story' of how this feature evolved."*
*   **For Options:** *"Give me three different ways to refactor this, ranging from 'quick fix' to 'ideal architecture'."*



### 4. Context & Token Management
The agent has a 200,000 token limit. As you work, it builds up context through tool calls, which can max out its memory and degrade performance.

*   **The `/compact` Command:** When you see a warning that the window is filling up, run `/compact`. This triggers an internal prompt that says: *"Hey, I need to go summarize everything we've been up to. I'm going to give this to another developer and they're going to pick up where I left off."* The agent will write a summary and use it to seed a fresh, clean session.
*   **The `/clear` Command:** Use this to completely wipe the context (except for your `claude.md`) when you are moving to a totally unrelated task.

### 5. Smart "Vibe Coding" & Interruption
Don't just hit enter and hope for the best. Keep the agent on a tight leash.

*   **The `Escape` Key:** This is your best friend. Keep an eye on the agent's auto-generated "to-do list." If it goes off track, press `Escape` and say: *"Hey, I think you're going on the wrong path,"* or *"Let's change the to-do list."*
*   **Double Escape:** A hidden feature. Press `Escape` twice to instantly jump back in the conversation history and reset the tool's current path.
*   **Auto-Accept Mode:** Use `Shift + Tab` to let the agent work without asking for permission for every read/write action, or configure your settings to permanently approve repetitive safe commands (like running tests).
*   **TDD & Commits:** Instruct the agent to make small changes, check the linting/TypeScript, run tests, and commit regularly. This gives you safe fallback points.

### 6. Advanced Orchestration & Multimodal Debugging
*   **Trigger "Think Hard":** For complex logic, explicitly add *"think hard"* to your prompt. The agent will execute extended reasoning between its tool calls (indicated by lighter gray text in the terminal) instead of rushing into an action.
*   **Use Screenshots:** Since the model is multimodal, you can use images for UI work. *"Hey Claude, look at this mock.png and then build the website for me."*
*   **Multi-Agent Workflows:** Run multiple agents at once in different terminal tabs (e.g., using Tmux). To make them communicate, have them write to a shared file. For example, tell one agent to draft requirements in `ticket.md`, then tell the second agent: *"Hey, read ticket.md, another developer left this note for you. This is what you're going to work on."*
