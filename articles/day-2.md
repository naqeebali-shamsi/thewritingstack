# Day 2: Directives vs. Prompts

![Directives vs. Prompts: The Architected Approach](day_2_hero.png)

### The Hook
**Prompts are conversations. Directives are Operating Systems.**

Most agency workflows fail because they treat an LLM like a chat partner. I treat it like a specialized VM. If you are still "prompting" your agents, you are building on sand. 

---

### The Shift: From Chat to SOP

1. **The Fragile Chat Loop**
   Prompts are ephemeral. You ask, it answers, the context drifts. By turn 10, the "Expert Engineer" you hired has devolved into a generic bot. This is where hallucinations live.

2. **The Directive (The Layer 1 Logic)**
   A Directive is a Markdown-based SOP. It’s not part of the chat—it’s the **Environment Variable** of the task. It defines the goal, the tech stack, and the non-negotiables before the agent even "thinks."

3. **Context Injection**
   Instead of one long prompt, use **Required Reading**. My agents must read `.planning/PROJECT.md` before every action. This locks the context and forces 100% alignment with the business goal.

4. **Deterministic Success**
   A prompt asks "Can you do this?". A Directive says "Step 1: Read the DB. Step 2: Extract metrics. Step 3: Stop." This removes the "AI shimmy"—that annoying moment where the agent tries to be creative instead of useful.

5. **Version Control for Thinking**
   You can't `git commit` a conversation. You *can* version control a Directive. If an agent starts failing, I don't "prompt better"—I debug the system logic in the Markdown file.

---

### The Tradeoff
**Rigidity vs. Flexibility.** Directives take longer to write than a quick chat prompt. But they provide **99% repeatability**. 

**Day 2 of 30: Stop chatting with your agents. Start directing them.**

**Over to you:** Have you ever seen a prompt fail because the agent "forgot" the initial instructions? How did you fix it? 👇

#agenticAI #promptengineering #softwarearchitecture #systemdesign #LLM #30DayChallenge
