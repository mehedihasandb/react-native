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

Sign-in sends the entered email and password to `http://192.168.10.69:4000/auth/login/GLSC`. The returned session is kept in memory until sign-out or reload. Registration is not connected.

For Expo web development, `metro.config.js` forwards `/api/auth/login/GLSC` to that fixed API address, because the API does not allow the local web origin through CORS. Restart Expo after changing Metro configuration: `npm run web -- --clear`.

Native devices contact the API directly and need network access to `192.168.10.69`. The proxy is development-only; a deployed website needs backend CORS configured for its origin or an equivalent same-origin server route.
