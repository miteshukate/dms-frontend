# 🔐 Authentication - Quick Reference Card

## Files at a Glance

| File | Purpose | Lines |
|------|---------|-------|
| `src/context/auth-context-def.ts` | Context definition | 18 |
| `src/context/auth-context.tsx` | Provider component | 168 |
| `src/context/use-auth.ts` | useAuth hook | 9 |
| `src/pages/login.tsx` | Login page | 115 |
| `src/components/protected-route.tsx` | Route protection | 28 |
| `src/components/ui/alert.tsx` | Alert UI | 60 |

## Import Statements

### Use Auth Context
```typescript
import { useAuth } from '@/context/use-auth';
```

### Use Protected Route
```typescript
import { ProtectedRoute } from '@/components/protected-route';
```

### Use Alert Component
```typescript
import { Alert, AlertDescription } from '@/components/ui/alert';
```

## Common Tasks

### Get Current User
```typescript
const { user } = useAuth();
console.log(user?.email);
```

### Check if Authenticated
```typescript
const { isAuthenticated } = useAuth();
if (!isAuthenticated) {
  // redirect or show login
}
```

### Logout
```typescript
const { logout } = useAuth();
await logout(); // Redirects to /login
```

### Access Token
```typescript
const { accessToken } = useAuth();
// Token automatically added to API requests
```

### Protected Route Component
```typescript
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```

## API Methods Available

```typescript
const {
  user,              // UserResponse | null
  accessToken,       // string | null
  refreshToken,      // string | null
  isAuthenticated,   // boolean
  isLoading,         // boolean
  login,             // (email, password, tenantId?) => Promise<void>
  logout,            // () => Promise<void>
  refreshAccessToken,// (token) => Promise<void>
  verifyAuth,        // () => Promise<void>
} = useAuth();
```

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/v1/auth/login` | Authenticate user |
| POST | `/v1/auth/logout` | Invalidate token |
| POST | `/v1/auth/refresh` | Get new access token |
| GET | `/v1/auth/me` | Get current user |

## localStorage Keys

```
accessToken    - JWT access token
refreshToken   - JWT refresh token
user           - User object (JSON)
```

## Demo Login

```
Email:    admin@example.com
Password: password123
```

## Error Handling

```typescript
try {
  await login(email, password);
} catch (error) {
  const msg = error instanceof Error 
    ? error.message 
    : 'Login failed';
  console.error(msg);
}
```

## Authentication State Transitions

```
Initial         ─┐
                 ├─ [Checking tokens]
No Auth         ─┤
                 └─ [User not logged in]
                 
Logged In       ─┐
                 ├─ [Valid token]
                 └─ [User authenticated]
                 
Redirecting     ─┐
                 ├─ [After login success]
                 └─ [Navigate to dashboard]
```

## Axios Interceptor Flow

```
Request
  │
  ├─ Attach token to Authorization header
  │
API Response
  │
  ├─ Status 401?
  │  ├─ Yes: Refresh token → Retry request
  │  └─ No: Return response
  │
Client code receives response
```

## Component Architecture

```
AuthProvider (Context)
  ├─ User state
  ├─ Token state
  ├─ Loading state
  └─ Methods (login, logout, etc)

useAuth Hook
  └─ Accesses AuthProvider context

ProtectedRoute Component
  ├─ Checks isAuthenticated
  ├─ Shows loading spinner if checking
  └─ Redirects to /login if not auth

Login Page
  ├─ Form inputs
  ├─ Error display
  └─ Calls auth.login()
```

## Security Checklist

- ✅ JWT tokens used
- ✅ Tokens stored in localStorage
- ✅ Token in Authorization header
- ✅ Auto-refresh on 401
- ✅ Routes protected
- ✅ Logout clears data
- ✅ Types are safe

## Performance Tips

1. **Memoize auth values** if accessing in large lists
2. **Use useAuth() once per component** (not multiple times)
3. **Tokens auto-attached** (no manual header setting needed)
4. **Refresh is transparent** (client code unaware)

## Debugging Tips

### Check if authenticated
```javascript
localStorage.getItem('accessToken') // Should exist
localStorage.getItem('refreshToken') // Should exist
```

### Check current user
```javascript
const user = JSON.parse(localStorage.getItem('user'))
console.log(user)
```

### Check axios interceptor
```javascript
// Network tab → Headers → Authorization
// Should show: Bearer {token}
```

### Check auth state
```typescript
const { isAuthenticated, isLoading, user } = useAuth();
console.log({ isAuthenticated, isLoading, user });
```

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Token not persisting | Check localStorage enabled in browser |
| Auto-logout happening | Verify refresh token endpoint exists |
| 401 errors still showing | Clear localStorage, login again |
| Can't access protected routes | Check isAuthenticated in DevTools |
| Token not in headers | Verify axios-setup.ts is loaded |

## Context Usage Patterns

### Pattern 1: Conditional Render
```typescript
const { isAuthenticated, isLoading } = useAuth();

if (isLoading) return <Spinner />;
if (!isAuthenticated) return <Redirect to="/login" />;
return <Dashboard />;
```

### Pattern 2: Require Auth
```typescript
const { user } = useAuth();
if (!user) return null; // Rely on ProtectedRoute

return <h1>Welcome {user.email}</h1>;
```

### Pattern 3: Role Check
```typescript
const { user } = useAuth();

if (user?.role !== 'admin') {
  return <NotAuthorized />;
}
return <AdminPanel />;
```

## Testing Checklist

- [ ] App starts → redirects to /login
- [ ] Login with demo credentials → redirects to /
- [ ] Token visible in localStorage
- [ ] API requests include Authorization header
- [ ] Logout → clears storage → redirects to /login
- [ ] Navigate to protected page without auth → redirect to /login
- [ ] Token refresh works (if testing with expired token)

## Next Steps

1. ✅ Implementation complete
2. Test with your backend API
3. Customize demo credentials
4. Add role-based route protection
5. Implement 2FA if needed

## Documentation Links

- **Full Docs**: See `AUTHENTICATION.md`
- **Integration Guide**: See `AUTHENTICATION-GUIDE.md`
- **Flow Diagrams**: See `AUTH-FLOWS.md`
- **Change Log**: See `AUTH-CHANGELOG.md`

---

**Status**: ✅ Ready to Use  
**Last Updated**: March 10, 2026  
**Version**: 1.0.0

