# 🧠 TheWritingStack (GSD Edition)

> **"Stop Prompting. Start Architecting."**

This is a precision-engineered content engine for Claude Code CLI. Built on the **3-Layer GSD (Get Shit Done)** architecture, **TheWritingStack** transforms raw technical ideas into high-fidelity, "Expert Pragmatist" technical articles and LinkedIn posts.

## 🚀 The Philosophy: 3-Layer Agentics

Most AI-generated content fails because it lacks **System Design**. This engine enforces a separation of concerns:

1.  **Layer 1: Directive (The Intent)**: Markdown-based SOPs that define goals, constraints, and "Definition of Done."
2.  **Layer 2: Orchestration (Decision Making)**: The Claude Skill layer that decides which tools to call and manages state.
3.  **Layer 3: Execution (Doing the Work)**: Local scripts and web tools that handle the heavy lifting (Research, Generation, Linting).

---

## 🛠️ Features

- **Architected Writing Framework**: Enforces Atomic Writing, Contrast Hooks, and Takeaway Density.
- **ByteByteGo Visuals**: Automated generation of technical diagrams via DALL-E/Midjourney prompts.
- **Context-Injection**: Automatically reads project state and roadmaps before every action to prevent "Agentic Drift."
- **Resilient Research**: Specialized skills for deep technical research via browser subagents and MCP.

---

## 📦 How to Use with Claude Code CLI

### 1. Install the Skills
Clone this repo and move the `.claude/skills` directory into your project's `.claude/` folder.

```bash
cp -r .claude/skills your-project/.claude/
```

### 2. Available Commands

| Command | Description |
|---------|-------------|
| `/blog:init` | Initialize a new article specification from a topic. |
| `/blog:research` | Perform deep technical research on the current article. |
| `/series:init` | Map out a 30-day learning-in-public journey. |
| `/series:post [day]` | Generate a high-impact, architected LinkedIn post for a specific day. |

---

## 🏗️ Project Structure

```text
.
├── .claude/skills/       # The "Brain" (Claude Skills)
├── .planning/            # The "Logic" (PROJECT, ROADMAP, STATE)
├── templates/            # High-signal content templates
└── articles/             # Generated output
```

## 🤝 Contributing
Built for the community of **Expert Pragmatists**. If you have an architectural improvement or a new writing framework, PRs are welcome.

---
*Created by [Naqeebali](https://github.com/glittercowboy/get-shit-done)*
