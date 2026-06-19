# SpinBattles Web3 DApp Developer Challenge

This short practical assessment evaluates real DApp development skills for the SpinBattles Web3 DApp Developer role.

---

## Setup

**Requirements:** Node.js 18+, a browser wallet extension (MetaMask recommended)

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

> The app works out of the box with MetaMask and other browser-injected wallets. No account registration or wallet funds are required.

> Some dependency warnings may appear during installation. They do not affect the assessment if the app installs and starts successfully. Please do not run `npm audit fix --force`, as it may change project dependencies.

---

## Your Goal

Complete and verify the reward claim flow. Most of the wiring is already in place — your job is to verify it works correctly end-to-end, fix one intentional bug, and ensure the UI accurately reflects state at every step.

**Work through this checklist:**

- [x] **Wallet** — connect a browser wallet, display the full connected address (currently truncated), and confirm the connection is reflected in the UI
- [x] **Data** — verify pending reward data from the backend and token balance from the contract adapter are fetched and displayed correctly
- [x] **Claim flow** — complete the reward claim end-to-end: submit a transaction, wait for the result, update the backend, refresh the UI, and confirm backend reward status updates after a claim
- [ ] **Transaction states** — ensure `pending`, `confirmed`, and `failed` are handled correctly at all times
- [ ] **Bug fix** — find and fix the one intentional bug in the claim flow, and explain what it was and how you fixed it
- [ ] **UI** — review functional clarity; all sections should be visible and accurately reflect state

---

## Deliverables

- Working DApp with the full claim flow verified and complete.
- Bug identified and fixed.
- Brief explanation (inline comments or a short note in this README) covering:
  - Your architecture and integration approach.
  - What the bug was and how you fixed it.

> **Hint:** the bug is in the claim flow. It is related to claim status and transaction state handling.

---

## Submission

Work in your own fork or local copy. You do not need write access to the SpinBattles repository.

Please submit your completed assessment by replying to the email from the SpinBattles tech team with either:

- a GitHub repository link, or
- a ZIP file of your completed project

Please include a short note explaining what you changed and how you fixed the bug.

---

## Project Structure

```
src/
├── app/
│   ├── api/              # Mock backend API routes
│   │   ├── user/balance/
│   │   ├── user/rewards/
│   │   └── rewards/claim/
│   ├── page.tsx          # Main page
│   └── providers.tsx     # Wallet/query providers
├── components/           # UI components
├── lib/
│   ├── contract/         # Contract ABI and adapter
│   ├── api/              # Backend API client
│   ├── hooks/            # React hooks (wallet, rewards)
│   └── store/            # Shared in-memory data store
└── types/                # TypeScript types
```

---

## Assessment Time

This assessment is designed for approximately 1 hour.

---

## Security Note

SpinBattles will never ask for seed phrases, private keys, personal wallet funds, or sensitive wallet credentials.

---

## Notes

- No real funds, tokens, or wallet credentials are needed.
- The contract adapter simulates contract transaction behavior — no deployment required.
- Backend API uses in-memory data and resets on server restart.
- Simulated transactions may sometimes fail. This is intentional and is part of the transaction-state handling assessment.

---

## Evaluation Criteria

Your submission will be reviewed across these areas:


| Area                                                 | Weight  |
| ---------------------------------------------------- | ------- |
| Bug-fix reasoning and transaction lifecycle handling | ~35–40% |
| Wallet connection and DApp flow understanding        | ~20%    |
| Backend integration and state refresh                | ~20%    |
| Code clarity and structure                           | ~15%    |
| Functional UI clarity                                | ~5–10%  |


