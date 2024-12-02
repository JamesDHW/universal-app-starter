# Architectural Decision Records (ADRs)

## What is an ADR?

:::info[Architectural Decision Record (ADR)]
**A document that captures important architectural decisions, providing a historical context for why certain decisions were made, the alternatives considered, and the implications of the decision.**
:::

:::tip[Intent of Doing an ADR]

- **Critical Thinking**: Instead of choosing the first solution that comes to mind, consider and evaluate all options.
- **Communication**: Share knowledge and reasoning among team members and stakeholders.
- **Documentation**: Keep a record of architectural decisions and their rationale.

:::

## Components of a Good ADR

### Problem

- Explain the context and any potential project specific requirements

### Critical performances

- A key criteria to chose the tech/ solution
- Depends on the business requirements, the client stakeholders and technical constraints (stability, security, speed)
- Should ideally be measurable

### Options

- A “**_Tech option_**” can be anything from `Java` to `Microservice Architecture` or `React.pdf`
- Add in examples of API, SDK, etc. so it is concrete to justify evaluations later.

### Evaluation

- Show succinct, summarized information in a table

### Decision

- Final recommendation, based on the selected critical performance and the specific context of this situation

### Consequences

- Any additional considerations or mitigations to be acted on.

## Common Errors

| **Errors**                                                                                           | **Consequences**                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚨 Identifying **too many** critical performances                                                    | The final choice would be subjective, because the critical performances won’t help prioritise and settle on a single option                         |
| 🚨  Tunnelling on getting measurable critical performances when too complex                          | The return on investment of measuring performance for each option will be small, and incompatible with making a quick decision                      |
| 🚨  Setting a critical performance just to highlight your favourite solution                         | This critical performance will necessarily be biased towards a single solution                                                                      |
| 🚨  Only focusing on one kind of user of the tech (i.e. the dev)                                     | Ignoring the end-user’s experience (UX, performance), or the way it will be perceived by the client’s security department, will cause future rework |
| 🚨  Not looping in the people with a different opinion (when writing and getting the ADR challenged) | People who weren’t involved in the decision risk being opposed to implementing the solution                                                         |
| 🚨  Make the ADR a perfect democracy                                                                 | If everyone can add / remove performances and solutions indefinitely, no decision will be made                                                      |

## How to Contribute

Contributing to the ADRs is simple! Follow these steps to add a new ADR:

1. **Create a New File**: Navigate to the `docs/architectural-decision-records` folder in the repository.
   Name your file using the following format: `YYYY-MM-DD-decision-name.md`
   For example, if you are documenting a decision made on January 15, 2024, regarding the choice of a database, you might name the file: `2024-01-15-database.md`.

2. **Submit a Pull Request**: Once you have created your ADR file, submit a pull request to the repository. Ensure that your changes are well-documented and follow the project's contribution guidelines.

3. **Review Process**: Your pull request will be reviewed by the team. Feedback may be provided, and once approved, your ADR will be merged into the main branch.

## Suggested Template

```markdown
# Title

## ⚠️ Problem

## 💯 Critical Performances

- **Performance 1:**
- **Performance 2:**
- **Performance 3:**

## ⚙️ Options

- **Option 1:**
- **Option 2:**
- **Option 3:**

## ✅ Evaluation

|                            | **Option 1**        | **Option 2**        | **Option 3**        |
| -------------------------- | ------------------- | ------------------- | ------------------- |
| **Critical Performance 1** | ✅ ✅ [explanation] | ❌ [explanation]    | ✅ [explanation]    |
| **Critical Performance 2** | ❌ [explanation]    | ✅ ✅ [explanation] | ✅ ✅ [explanation] |
| **Critical Performance 3** | ❌ [explanation]    | ⚠️ [explanation]    | ❌ [explanation]c   |

## 🌳 Decision

## 🚨 Consequences
```
