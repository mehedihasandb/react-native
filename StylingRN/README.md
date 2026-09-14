# Northstar authentication UI

Responsive Expo login and registration UI. No new dependencies required.

## Run

```powershell
cd E:\react-native\StylingRN
npm run web
# For phone preview: npm start
```

## Structure

```text
App.js                       App entry and status bar
src/screens/AuthScreen.js    Login/register screens and form state
src/components/FormField.js  Accessible input and password visibility
src/components/Button.js     Shared primary action
src/theme.js                 Shared color tokens
src/utils/validation.js      Pure form validation
```

## Authentication integration

This is a UI demo, not real authentication. Submission validates inputs and displays a preview message. Passwords are cleared after valid submission; credentials are not logged or persisted. Replace the successful validation branch in `submit()` with your authentication API/provider. Add server-side validation, loading/error handling, secure sessions, email verification and password recovery before production use.
