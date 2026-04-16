# Authentication Integration Guide

## Quick Start

### 1. The system is now fully integrated!

Your DMS frontend has complete authentication. Here's what's automatically set up:

### 2. App Structure

```
App.tsx (Entry)
  ↓
AuthProvider (Context wrapper)
  ↓
Router
  ├─ /login (public route)
  └─ /* (protected routes)
       └─ ProtectedRoute (checks auth)
           └─ DMSLayout
               └─ Protected pages
```

### 3. Using Authentication in Components

#### Access current user:
```typescript
import { useAuth } from '@/context/use-auth';

export function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <div>
      <p>Welcome, {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

#### Protect a component:
```typescript
import { useAuth } from '@/context/use-auth';

export function AdminPanel() {
  const { user } = useAuth();
  
  if (user?.role !== 'admin') {
    return <div>Access denied</div>;
  }
  
  return <div>Admin content</div>;
}
```

#### Make authenticated API calls:
```typescript
import { FilesApi } from '@/client';
import { Configuration } from '@/client';

export function FileList() {
  const { accessToken } = useAuth();
  
  const loadFiles = async () => {
    const config = new Configuration({ accessToken, basePath: '/v1' });
    const api = new FilesApi(config);
    const response = await api.getFiles();
    // accessToken automatically added to request headers
  };
  
  return <button onClick={loadFiles}>Load Files</button>;
}
```

### 4. API Endpoints Reference

All endpoints require Bearer token in Authorization header (automatically added by axios interceptor):

```
POST   /auth/login           - Login with email/password
POST   /auth/logout          - Logout (invalidate refresh token)
POST   /auth/refresh         - Refresh access token
GET    /auth/me              - Get current user profile
PUT    /auth/me/password     - Change password
```

### 5. Token Lifecycle

```
Login → Store tokens in localStorage + context
  ↓
API Requests → Axios interceptor adds Authorization header
  ↓
Response 401? → Auto-refresh token
  ↓
Logout → Clear localStorage + context → Redirect to /login
```

### 6. Where Tokens Are Stored

- **accessToken**: localStorage key `accessToken`
- **refreshToken**: localStorage key `refreshToken`
- **user**: localStorage key `user` (stringified JSON)

You can access/clear these manually if needed:
```typescript
localStorage.getItem('accessToken');
localStorage.removeItem('accessToken');
```

### 7. Error Handling

Auth errors are automatically handled:

```typescript
try {
  await login(email, password);
  // Success - user logged in, tokens stored
} catch (error) {
  // Error displayed via toast notification
  console.error(error);
}
```

### 8. Testing Authentication

**Test Login:**
```bash
Email: admin@example.com
Password: password123
```

**Test Flow:**
1. App loads → redirects to /login (no auth)
2. Enter credentials → login succeeds → redirected to /
3. Click logout → clears auth → redirected to /login
4. Try accessing /files directly → redirected to /login

### 9. Common Tasks

#### Check if user is authenticated:
```typescript
const { isAuthenticated } = useAuth();

if (isAuthenticated) {
  // Show authenticated UI
}
```

#### Get user information:
```typescript
const { user } = useAuth();

console.log(user?.email);
console.log(user?.id);
console.log(user?.role);
```

#### Manually logout:
```typescript
const { logout } = useAuth();

await logout();
// User redirected to /login, tokens cleared
```

#### Verify token is valid:
```typescript
const { verifyAuth } = useAuth();

try {
  await verifyAuth();
  console.log('Token is valid');
} catch (error) {
  console.log('Token is invalid');
}
```

#### Refresh token manually:
```typescript
const { refreshToken, refreshAccessToken } = useAuth();

try {
  if (refreshToken) {
    await refreshAccessToken(refreshToken);
  }
} catch (error) {
  console.log('Refresh failed');
}
```

### 10. File Upload with Auth

The FileUpload component automatically includes auth tokens:

```typescript
<FileUpload04 setIsUploadModalOpen={setIsUploadModalOpen} />
// AccessToken automatically added to upload requests
```

### 11. Search with Auth

The search feature automatically includes auth tokens:

```typescript
const { setSearchQuery } = useSearch();
// Tokens added to search API calls automatically
```

### 12. Troubleshooting

| Issue | Solution |
|-------|----------|
| Stuck on login | Check network tab - verify `/auth/login` endpoint exists |
| Tokens not persisting | Check localStorage is enabled in browser |
| Auto-logout happening | Token refresh failing - check refresh endpoint |
| 401 errors still showing | Ensure axios interceptor is loaded (should be automatic) |
| Can't access protected routes | Check isAuthenticated is true (use browser DevTools) |

### 13. Environment Variables

Currently using:
- **API Base**: `/v1` (configured in axios-setup.ts)
- **Login endpoint**: `POST /v1/auth/login`
- **Token refresh**: `POST /v1/auth/refresh`

To change base URL, edit: `src/client/axios-setup.ts` line 15

### 14. Security Checklist

- ✅ Tokens stored securely (localStorage + interceptor)
- ✅ Auto-refresh on 401 response
- ✅ Logout clears all data
- ✅ Protected routes prevent unauthorized access
- ✅ User type validated with TypeScript
- ✅ Error messages logged but not exposed to users

### 15. Next Steps

1. **Test with your backend**: Verify login endpoint works
2. **Update demo credentials**: Change test email/password in login.tsx
3. **Add role-based routing**: Protect routes based on user.role
4. **Add permission checks**: Check user permissions for actions
5. **Implement 2FA**: Add two-factor authentication if needed

---

**Need help?** Check `AUTHENTICATION.md` for detailed implementation info.

