# TheWritingStack (GSD Edition)

> "Stop Prompting. Start Architecting."

TheWritingStack is a precision-engineered content engine for Claude Code CLI. Built on the 3-Layer GSD (Get Shit Done) architecture, it transforms raw technical ideas into high-fidelity technical articles and LinkedIn posts.

## The Philosophy: 3-Layer Agentics

Most AI-generated content fails due to a lack of system design. This engine enforces a strict separation of concerns to maintain technical authenticity and high takeoff density:

1. **Layer 1: Directive (The Intent)**: Markdown-based SOPs defining goals, constraints, and "Definition of Done."
2. **Layer 2: Orchestration (Decision Making)**: The Claude Skill layer that manages state and intelligently routes tasks.
3. **Layer 3: Execution (Doing the Work)**: Local scripts and web tools for research, generation, and linting.

## Features

- **Architected Writing Framework**: Enforces atomic writing, contrast hooks, and takeaway density.
- **ByteByteGo Visuals**: Automated generation of technical diagram prompts for high information density.
- **Context Locking**: Prevents "agentic drift" by enforcing state awareness across sessions.
- **Resilient Research**: Specialized modules for deep technical research using browser subagents.

## Installation

Initialize TheWritingStack in any project directory using npx:

```bash
npx thewritingstack-init
```

This command constructs the necessary directory structure (.claude/skills, .planning, and templates) within your current workspace.

## Available Commands

| Command | Description |
|---------|-------------|
| `/blog:init` | Initialize a new article specification. |
| `/blog:research` | Deep technical research via web search and browser subagents. |
| `/series:init` | Plan a 30-day "Learning in Public" journey. |
| `/series:post [day]` | Generate an architected LinkedIn post for the specified day. |

## Project Structure

```text
.
├── .claude/skills/       # Core skills (The Brain)
├── .planning/            # Project logic and state (The Logic)
├── templates/            # High-signal content templates
└── articles/             # Drafted and finalized outputs
```

## Contributing

Built for the community of Expert Pragmatists. If you have architectural improvements or new writing frameworks, PRs are welcome.

---
*Created by [Naqeebali](https://github.com/naqeebali-shamsi/thewritingstack)*
