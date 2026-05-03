# Project Instructions: kix-wash-site

## Git Workflow Rules
- **Start of Session:** Always check `git status` and `git fetch` to see if the local branch is behind the remote. If it is, prompt the user to `git pull`. If there are local changes that conflict, ask the user how to resolve them (stash, commit, or discard).
- **End of Session:** After completing tasks, ask the user if they want to push their changes to GitHub. If confirmed, perform `git add`, `git commit`, and `git push` with a descriptive message.
- **Backup Policy:** Ask the user if they want to create a local backup in the `backups/` directory after significant changes or before ending the session.

## Development Commands
- **Start Server:** `npm.cmd run dev` (Vite)
- **Install Dependencies:** `npm.cmd install`
