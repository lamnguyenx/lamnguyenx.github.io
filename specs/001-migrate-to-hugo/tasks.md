---

description: "Task list template for feature implementation"
---

# Tasks: Migrate to Hugo Site

**Input**: Design documents from `/specs/001-migrate-to-hugo/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Manual visual testing and link validation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Hugo site root for all paths
- Content in content/ directory
- Layouts in layouts/ directory
- Assets in assets/ directory

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Backup existing Quarto content in content_backup/
- [ ] T002 Install Hugo static site generator
- [ ] T003 Create new Hugo site structure with hugo new site
- [ ] T004 Configure basic hugo.toml with site settings
- [ ] T005 Create layouts/_default/baseof.html template
- [ ] T006 Create layouts/_default/single.html template
- [ ] T007 Create layouts/_default/list.html template

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Setup assets/css/main.css with basic styling
- [ ] T009 Setup assets/js/theme-toggle.js for dark mode functionality
- [ ] T010 Configure static/ directory for images and assets

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Migrate Site to Hugo (Priority: P1) 🎯 MVP

**Goal**: Convert existing Quarto content to Hugo-compatible format

**Independent Test**: Build Hugo site and verify all pages display correctly with original content

### Implementation for User Story 1

- [ ] T011 [US1] Convert index.qmd to content/_index.md using quarto render --to hugo-md
- [ ] T012 [US1] Convert advanced-context-engineering.qmd to content/posts/advanced-context-engineering.md
- [ ] T013 [US1] Convert any remaining .qmd files in content/ directory
- [ ] T014 [US1] Copy static assets from Quarto static/ to Hugo static/
- [ ] T015 [US1] Update frontmatter in converted .md files for Hugo compatibility
- [ ] T016 [US1] Test Hugo build with hugo server locally

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Minimize Dependencies (Priority: P2)

**Goal**: Ensure site uses only core Hugo without plugins or themes

**Independent Test**: Verify Hugo build completes with only standard Hugo installation

### Implementation for User Story 2

- [ ] T017 [US2] Remove any theme references from hugo.toml
- [ ] T018 [US2] Verify layouts use only built-in Hugo functions
- [ ] T019 [US2] Confirm CSS uses standard features without preprocessors
- [ ] T020 [US2] Test build on clean Hugo installation without extras

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Add Dark Mode Toggle (Priority: P3)

**Goal**: Implement dark mode toggle with user preference persistence

**Independent Test**: Click toggle button and verify theme switches with persistence

### Implementation for User Story 3

- [ ] T021 [US3] Add dark mode CSS variables to assets/css/main.css
- [ ] T022 [US3] Implement theme toggle JavaScript in assets/js/theme-toggle.js
- [ ] T023 [US3] Add toggle button to layouts/_default/baseof.html
- [ ] T024 [US3] Test toggle functionality across all pages
- [ ] T025 [US3] Verify localStorage persistence of theme preference

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T026 Test site on GitHub Pages deployment
- [ ] T027 Validate all internal links work correctly
- [ ] T028 Optimize images and static assets
- [ ] T029 Update README.md with Hugo-specific instructions
- [ ] T030 Remove Quarto-specific files and configurations

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May verify after US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Implementation tasks depend on previous tasks in same story
- Stories complete before moving to next priority

### Parallel Opportunities

- All Setup tasks can run in parallel
- All Foundational tasks can run in parallel (within Phase 2)
- Once Foundational is done, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Convert multiple .qmd files in parallel
quarto render content/index.qmd --to hugo-md &
quarto render content/advanced-context-engineering.qmd --to hugo-md &
wait
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
    - Developer A: User Story 1
    - Developer B: User Story 2
    - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
